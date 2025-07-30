// Google Apps Script - 聊天室和排行榜系統
// 部署到 Google Apps Script 後，將網頁版 URL 替換到 HTML 檔案中的 API 變數

function doGet(e) {
  const action = e.parameter.action;
  const user = e.parameter.user;
  const callback = e.parameter.callback;
  
  try {
    let result;
    
    if (action === 'getChatMessages') {
      result = getChatMessages();
    } else if (action === 'sendChatMessage') {
      const messageData = {
        user: e.parameter.user,
        message: e.parameter.message,
        time: new Date().toLocaleString('zh-TW')
      };
      result = sendChatMessage(messageData);
    } else if (action === 'getLeaderboard') {
      result = getLeaderboard();
    } else if (action === 'updateScore') {
      const scoreData = {
        user: e.parameter.user,
        score: parseInt(e.parameter.score),
        level: e.parameter.level || '1',
        time: new Date().toLocaleString('zh-TW')
      };
      result = updateScore(scoreData);
    } else if (action === 'getUserStats') {
      result = getUserStats(user);
    } else if (action === 'getStarsLeaderboard') {
      result = getStarsLeaderboard();
    } else if (action === 'getStarsStats') {
      result = getStarsStats();
    } else if (action === 'updateStars') {
      const starsData = {
        user: e.parameter.user,
        stars: parseInt(e.parameter.stars),
        time: new Date().toLocaleString('zh-TW')
      };
      result = updateStars(starsData);
    } else if (action === 'initializeChatAndLeaderboard') {
      result = initializeChatAndLeaderboard();
    } else {
      result = {error: '無效的操作'};
    }
    
    // 如果有回調函數，使用 JSONP 格式
    if (callback) {
      const jsonpResponse = `${callback}(${JSON.stringify(result)})`;
      return ContentService.createTextOutput(jsonpResponse)
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    } else {
      // 否則使用一般 JSON 格式
      return ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    }
      
  } catch (error) {
    const errorResult = {error: error.toString()};
    
    if (callback) {
      const jsonpResponse = `${callback}(${JSON.stringify(errorResult)})`;
      return ContentService.createTextOutput(jsonpResponse)
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    } else {
      return ContentService.createTextOutput(JSON.stringify(errorResult))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
}

function doPost(e) {
  return doGet(e);
}

function doOptions(e) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  
  return ContentService.createTextOutput('')
    .setHeaders(headers);
}

// 取得聊天訊息
function getChatMessages() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('聊天室');
    if (!sheet) {
      createChatSheet();
      return [];
    }
    
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return [];
    }
    
    const headers = data[0];
    const userCol = headers.indexOf('用戶');
    const messageCol = headers.indexOf('訊息');
    const timeCol = headers.indexOf('時間');
    
    if (userCol === -1 || messageCol === -1) {
      Logger.log('找不到必要的欄位');
      return [];
    }
    
    const messages = [];
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[userCol] && row[messageCol]) {
        messages.push({
          user: row[userCol],
          message: row[messageCol],
          time: row[timeCol] || ''
        });
      }
    }
    
    // 只返回最新的 50 條訊息
    return messages.slice(-50);
  } catch (error) {
    Logger.log('getChatMessages 錯誤: ' + error.toString());
    return [];
  }
}

// 發送聊天訊息
function sendChatMessage(messageData) {
  try {
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('聊天室');
    if (!sheet) {
      sheet = createChatSheet();
    }
    
    const data = sheet.getDataRange().getValues();
    let headers = data[0];
    
    // 如果沒有標題行或標題行不完整，重新建立標題行
    if (headers.length === 0 || headers[0] === '' || headers.length < 3) {
      sheet.clear();
      sheet.getRange(1, 1, 1, 3).setValues([['用戶', '訊息', '時間']]);
      headers = ['用戶', '訊息', '時間'];
      
      // 設定標題行樣式
      sheet.getRange(1, 1, 1, 3).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 3).setBackground('#4285f4');
      sheet.getRange(1, 1, 1, 3).setFontColor('white');
      sheet.autoResizeColumns(1, 3);
    }
    
    // 檢查訊息長度
    if (messageData.message.length > 200) {
      return {success: false, error: '訊息太長，請縮短至 200 字以內'};
    }
    
    // 檢查是否包含不當內容
    const inappropriateWords = ['罵人', '髒話', '廣告'];
    for (let word of inappropriateWords) {
      if (messageData.message.includes(word)) {
        return {success: false, error: '訊息包含不當內容'};
      }
    }
    
    const newRow = [
      messageData.user,
      messageData.message,
      messageData.time
    ];
    
    sheet.appendRow(newRow);
    
    // 如果訊息超過 100 條，刪除最舊的 20 條
    const totalRows = sheet.getLastRow();
    if (totalRows > 100) {
      sheet.deleteRows(2, 20);
    }
    
    Logger.log(`聊天訊息已發送: ${messageData.user}: ${messageData.message}`);
    return {success: true, message: '訊息已發送'};
  } catch (error) {
    Logger.log('sendChatMessage 錯誤: ' + error.toString());
    return {success: false, error: error.toString()};
  }
}

// 取得排行榜
function getLeaderboard() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('排行榜');
    if (!sheet) {
      createLeaderboardSheet();
      return [];
    }
    
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return [];
    }
    
    const headers = data[0];
    const userCol = headers.indexOf('用戶');
    const scoreCol = headers.indexOf('分數');
    const levelCol = headers.indexOf('等級');
    const timeCol = headers.indexOf('更新時間');
    
    if (userCol === -1 || scoreCol === -1) {
      Logger.log('找不到必要的欄位');
      return [];
    }
    
    const leaderboard = [];
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[userCol] && row[scoreCol]) {
        leaderboard.push({
          rank: 0, // 稍後計算
          user: row[userCol],
          score: parseInt(row[scoreCol]) || 0,
          level: row[levelCol] || '1',
          time: row[timeCol] || ''
        });
      }
    }
    
    // 按分數排序並計算排名
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard.forEach((item, index) => {
      item.rank = index + 1;
    });
    
    // 只返回前 50 名
    return leaderboard.slice(0, 50);
  } catch (error) {
    Logger.log('getLeaderboard 錯誤: ' + error.toString());
    return [];
  }
}

// 更新分數
function updateScore(scoreData) {
  try {
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('排行榜');
    if (!sheet) {
      sheet = createLeaderboardSheet();
    }
    
    const data = sheet.getDataRange().getValues();
    let headers = data[0];
    
    // 如果沒有標題行或標題行不完整，重新建立標題行
    if (headers.length === 0 || headers[0] === '' || headers.length < 6) {
      sheet.clear();
      sheet.getRange(1, 1, 1, 6).setValues([['用戶', '分數', '等級', '星星', '訊息數', '更新時間']]);
      headers = ['用戶', '分數', '等級', '星星', '訊息數', '更新時間'];
      
      // 設定標題行樣式
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 6).setBackground('#4285f4');
      sheet.getRange(1, 1, 1, 6).setFontColor('white');
      sheet.autoResizeColumns(1, 6);
    }
    
    const userCol = headers.indexOf('用戶');
    const scoreCol = headers.indexOf('分數');
    const levelCol = headers.indexOf('等級');
    const starsCol = headers.indexOf('星星');
    const messagesCol = headers.indexOf('訊息數');
    const timeCol = headers.indexOf('更新時間');
    
    // 檢查是否已存在該用戶
    let userRow = -1;
    for (let i = 1; i < data.length; i++) {
      if (data[i][userCol] === scoreData.user) {
        userRow = i;
        break;
      }
    }
    
    if (userRow > 0) {
      // 更新現有用戶的分數
      const currentScore = parseInt(data[userRow][scoreCol]) || 0;
      const newScore = Math.max(currentScore, scoreData.score);
      
      sheet.getRange(userRow + 1, scoreCol + 1).setValue(newScore);
      sheet.getRange(userRow + 1, levelCol + 1).setValue(scoreData.level);
      sheet.getRange(userRow + 1, timeCol + 1).setValue(scoreData.time);
      
      Logger.log(`更新用戶分數: ${scoreData.user} - ${newScore}`);
      return {success: true, message: '分數已更新', newScore: newScore};
    } else {
      // 新增用戶
      const newRow = [
        scoreData.user,
        scoreData.score,
        scoreData.level,
        0, // 星星初始值
        0, // 訊息數初始值
        scoreData.time
      ];
      
      sheet.appendRow(newRow);
      
      Logger.log(`新增用戶分數: ${scoreData.user} - ${scoreData.score}`);
      return {success: true, message: '分數已記錄', newScore: scoreData.score};
    }
  } catch (error) {
    Logger.log('updateScore 錯誤: ' + error.toString());
    return {success: false, error: error.toString()};
  }
}

// 取得用戶統計
function getUserStats(user) {
  try {
    const leaderboardSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('排行榜');
    const chatSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('聊天室');
    
    let userStats = {
      user: user,
      score: 0,
      level: '1',
      rank: 0,
      messageCount: 0,
      lastActive: ''
    };
    
    // 取得排行榜資料
    if (leaderboardSheet) {
      const leaderboardData = leaderboardSheet.getDataRange().getValues();
      const headers = leaderboardData[0];
      const userCol = headers.indexOf('用戶');
      const scoreCol = headers.indexOf('分數');
      const levelCol = headers.indexOf('等級');
      const timeCol = headers.indexOf('更新時間');
      
      for (let i = 1; i < leaderboardData.length; i++) {
        const row = leaderboardData[i];
        if (row[userCol] === user) {
          userStats.score = parseInt(row[scoreCol]) || 0;
          userStats.level = row[levelCol] || '1';
          userStats.lastActive = row[timeCol] || '';
          break;
        }
      }
      
      // 計算排名
      const allScores = [];
      for (let i = 1; i < leaderboardData.length; i++) {
        const row = leaderboardData[i];
        if (row[userCol] && row[scoreCol]) {
          allScores.push({
            user: row[userCol],
            score: parseInt(row[scoreCol]) || 0
          });
        }
      }
      
      allScores.sort((a, b) => b.score - a.score);
      const userIndex = allScores.findIndex(item => item.user === user);
      userStats.rank = userIndex >= 0 ? userIndex + 1 : 0;
    }
    
    // 計算聊天訊息數量
    if (chatSheet) {
      const chatData = chatSheet.getDataRange().getValues();
      const headers = chatData[0];
      const userCol = headers.indexOf('用戶');
      
      for (let i = 1; i < chatData.length; i++) {
        const row = chatData[i];
        if (row[userCol] === user) {
          userStats.messageCount++;
        }
      }
    }
    
    return userStats;
  } catch (error) {
    Logger.log('getUserStats 錯誤: ' + error.toString());
    return {error: error.toString()};
  }
}

// 建立聊天室工作表
function createChatSheet() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('聊天室');
    
    if (!sheet) {
      sheet = ss.insertSheet('聊天室');
      Logger.log('已建立新的聊天室工作表');
    } else {
      Logger.log('找到現有的聊天室工作表');
    }
    
    // 設定標題行
    sheet.getRange(1, 1, 1, 3).setValues([['用戶', '訊息', '時間']]);
    
    // 設定標題行樣式
    sheet.getRange(1, 1, 1, 3).setFontWeight('bold');
    sheet.getRange(1, 1, 1, 3).setBackground('#4285f4');
    sheet.getRange(1, 1, 1, 3).setFontColor('white');
    
    // 自動調整欄寬
    sheet.autoResizeColumns(1, 3);
    
    Logger.log('聊天室工作表設定完成');
    return sheet;
  } catch (error) {
    Logger.log('createChatSheet 錯誤: ' + error.toString());
    throw error;
  }
}

// 建立排行榜工作表
function createLeaderboardSheet() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('排行榜');
    
    if (!sheet) {
      sheet = ss.insertSheet('排行榜');
      Logger.log('已建立新的排行榜工作表');
    } else {
      Logger.log('找到現有的排行榜工作表');
    }
    
    // 設定標題行
    sheet.getRange(1, 1, 1, 6).setValues([['用戶', '分數', '等級', '星星', '訊息數', '更新時間']]);
    
    // 設定標題行樣式
    sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    sheet.getRange(1, 1, 1, 6).setBackground('#4285f4');
    sheet.getRange(1, 1, 1, 6).setFontColor('white');
    
    // 自動調整欄寬
    sheet.autoResizeColumns(1, 6);
    
    Logger.log('排行榜工作表設定完成');
    return sheet;
  } catch (error) {
    Logger.log('createLeaderboardSheet 錯誤: ' + error.toString());
    throw error;
  }
}

// 初始化聊天室和排行榜系統
function initializeChatAndLeaderboard() {
  try {
    Logger.log('開始初始化聊天室和排行榜系統...');
    
    // 建立工作表
    const chatSheet = createChatSheet();
    const leaderboardSheet = createLeaderboardSheet();
    
    // 發送歡迎訊息
    sendWelcomeChatMessage();
    
    Logger.log('聊天室和排行榜系統初始化完成');
    return {success: true, message: '系統初始化完成'};
  } catch (error) {
    Logger.log('initializeChatAndLeaderboard 錯誤: ' + error.toString());
    return {success: false, error: error.toString()};
  }
}

// 發送歡迎聊天訊息
function sendWelcomeChatMessage() {
  try {
    const welcomeMessage = {
      user: '系統',
      message: '歡迎來到聊天室！請遵守聊天禮儀，保持友善的交流環境。',
      time: new Date().toLocaleString('zh-TW')
    };
    
    const result = sendChatMessage(welcomeMessage);
    Logger.log('歡迎聊天訊息發送結果: ' + JSON.stringify(result));
    return result;
  } catch (error) {
    Logger.log('sendWelcomeChatMessage 錯誤: ' + error.toString());
    return {success: false, error: error.toString()};
  }
}

// 清除測試資料
function clearTestData() {
  const chatSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('聊天室');
  const leaderboardSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('排行榜');
  
  if (chatSheet) {
    chatSheet.clear();
    createChatSheet();
  }
  
  if (leaderboardSheet) {
    leaderboardSheet.clear();
    createLeaderboardSheet();
  }
}

// 取得統計資訊
function getSystemStats() {
  const chatSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('聊天室');
  const leaderboardSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('排行榜');
  
  let chatStats = {total: 0, users: []};
  let leaderboardStats = {total: 0, users: []};
  
  if (chatSheet) {
    const chatData = chatSheet.getDataRange().getValues();
    if (chatData.length > 1) {
      const headers = chatData[0];
      const userCol = headers.indexOf('用戶');
      
      const users = new Set();
      for (let i = 1; i < chatData.length; i++) {
        const row = chatData[i];
        if (row[userCol]) {
          users.add(row[userCol]);
        }
      }
      
      chatStats = {
        total: chatData.length - 1,
        users: Array.from(users)
      };
    }
  }
  
  if (leaderboardSheet) {
    const leaderboardData = leaderboardSheet.getDataRange().getValues();
    if (leaderboardData.length > 1) {
      const headers = leaderboardData[0];
      const userCol = headers.indexOf('用戶');
      
      const users = new Set();
      for (let i = 1; i < leaderboardData.length; i++) {
        const row = leaderboardData[i];
        if (row[userCol]) {
          users.add(row[userCol]);
        }
      }
      
      leaderboardStats = {
        total: leaderboardData.length - 1,
        users: Array.from(users)
      };
    }
  }
  
  return {
    chat: chatStats,
    leaderboard: leaderboardStats
  };
}

// 取得星星排行榜
function getStarsLeaderboard() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('排行榜');
    if (!sheet) {
      createLeaderboardSheet();
      return [];
    }
    
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return [];
    }
    
    const headers = data[0];
    const userCol = headers.indexOf('用戶');
    const starsCol = headers.indexOf('星星');
    const levelCol = headers.indexOf('等級');
    const messagesCol = headers.indexOf('訊息數');
    
    if (userCol === -1) {
      Logger.log('找不到用戶欄位');
      return [];
    }
    
    const leaderboard = [];
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const user = row[userCol];
      const stars = parseInt(row[starsCol]) || 0;
      const level = parseInt(row[levelCol]) || 1;
      const messages = parseInt(row[messagesCol]) || 0;
      
      if (user && stars > 0) {
        leaderboard.push({
          user: user,
          stars: stars,
          level: level,
          messages: messages
        });
      }
    }
    
    // 按星星數量排序（降序）
    leaderboard.sort((a, b) => b.stars - a.stars);
    
    return leaderboard;
  } catch (error) {
    Logger.log('取得星星排行榜失敗: ' + error.toString());
    return [];
  }
}

// 取得星星統計資料
function getStarsStats() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('排行榜');
    if (!sheet) {
      createLeaderboardSheet();
      return {
        totalPlayers: 0,
        totalStars: 0,
        topStars: 0
      };
    }
    
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return {
        totalPlayers: 0,
        totalStars: 0,
        topStars: 0
      };
    }
    
    const headers = data[0];
    const userCol = headers.indexOf('用戶');
    const starsCol = headers.indexOf('星星');
    
    if (userCol === -1 || starsCol === -1) {
      Logger.log('找不到必要的欄位');
      return {
        totalPlayers: 0,
        totalStars: 0,
        topStars: 0
      };
    }
    
    let totalPlayers = 0;
    let totalStars = 0;
    let topStars = 0;
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const user = row[userCol];
      const stars = parseInt(row[starsCol]) || 0;
      
      if (user && stars > 0) {
        totalPlayers++;
        totalStars += stars;
        if (stars > topStars) {
          topStars = stars;
        }
      }
    }
    
    return {
      totalPlayers: totalPlayers,
      totalStars: totalStars,
      topStars: topStars
    };
  } catch (error) {
    Logger.log('取得星星統計失敗: ' + error.toString());
    return {
      totalPlayers: 0,
      totalStars: 0,
      topStars: 0
    };
  }
}

// 更新星星數量
function updateStars(starsData) {
  try {
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('排行榜');
    if (!sheet) {
      sheet = createLeaderboardSheet();
    }
    
    const data = sheet.getDataRange().getValues();
    let headers = data[0];
    
    // 如果沒有標題行或標題行不完整，重新建立標題行
    if (headers.length === 0 || headers[0] === '' || headers.length < 6) {
      sheet.clear();
      sheet.getRange(1, 1, 1, 6).setValues([['用戶', '分數', '等級', '星星', '訊息數', '更新時間']]);
      headers = ['用戶', '分數', '等級', '星星', '訊息數', '更新時間'];
      
      // 設定標題行樣式
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 6).setBackground('#4285f4');
      sheet.getRange(1, 1, 1, 6).setFontColor('white');
      sheet.autoResizeColumns(1, 6);
    }
    
    const userCol = headers.indexOf('用戶');
    const starsCol = headers.indexOf('星星');
    const timeCol = headers.indexOf('更新時間');
    
    // 檢查是否已存在該用戶
    let userRow = -1;
    for (let i = 1; i < data.length; i++) {
      if (data[i][userCol] === starsData.user) {
        userRow = i;
        break;
      }
    }
    
    if (userRow > 0) {
      // 更新現有用戶的星星
      sheet.getRange(userRow + 1, starsCol + 1).setValue(starsData.stars);
      sheet.getRange(userRow + 1, timeCol + 1).setValue(starsData.time);
      
      Logger.log(`更新用戶星星: ${starsData.user} - ${starsData.stars}`);
      return {success: true, message: '星星已更新', stars: starsData.stars};
    } else {
      // 新增用戶
      const newRow = [
        starsData.user,
        0, // 分數初始值
        1, // 等級初始值
        starsData.stars,
        0, // 訊息數初始值
        starsData.time
      ];
      
      sheet.appendRow(newRow);
      
      Logger.log(`新增用戶星星: ${starsData.user} - ${starsData.stars}`);
      return {success: true, message: '星星已記錄', stars: starsData.stars};
    }
  } catch (error) {
    Logger.log('updateStars 錯誤: ' + error.toString());
    return {success: false, error: error.toString()};
  }
} 