// Google Apps Script 程式碼 - 玩家信箱系統
// 部署到 Google Apps Script 後，將網頁版 URL 替換到 HTML 檔案中的 API 變數

function doGet(e) {
  const action = e.parameter.action;
  const user = e.parameter.user;
  const callback = e.parameter.callback;
  
  try {
    let result;
    
    if (action === 'getInbox') {
      result = getInbox(user);
    } else if (action === 'markAsRead') {
      const index = parseInt(e.parameter.index);
      result = markAsRead(index);
    } else if (action === 'sendMessage') {
      const messageData = {
        user: e.parameter.to,
        title: e.parameter.title,
        content: e.parameter.content,
        cardId: e.parameter.cardId || '',
        time: new Date().toLocaleString('zh-TW')
      };
      result = sendMessage(messageData);
    } else if (action === 'getAllPlayers') {
      result = getAllPlayers();
    } else if (action === 'addMultiplePlayers') {
      const playersData = e.parameter.players;
      if (playersData) {
        const players = JSON.parse(playersData);
        result = addMultiplePlayers(players);
      } else {
        result = {error: '缺少玩家資料'};
      }
    } else if (action === 'initializeSystem') {
      result = initializeSystem();
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

// 取得使用者的信箱內容
function getInbox(user) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('信箱');
    if (!sheet) {
      // 如果沒有信箱工作表，建立一個
      createMailboxSheet();
      // 為新用戶建立歡迎訊息
      sendWelcomeMessage(user);
      return [];
    }
    
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      // 如果只有標題行，為新用戶建立歡迎訊息
      sendWelcomeMessage(user);
      return [];
    }
    
    const headers = data[0];
    
    // 找到對應的欄位索引
    const userCol = headers.indexOf('收件者');
    const titleCol = headers.indexOf('標題');
    const contentCol = headers.indexOf('內容');
    const readCol = headers.indexOf('已讀');
    const timeCol = headers.indexOf('時間');
    const cardIdCol = headers.indexOf('卡片ID');
    
    if (userCol === -1) {
      Logger.log('找不到收件者欄位');
      return [];
    }
    
    const userMessages = [];
    let userFound = false;
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[userCol] === user) {
        userFound = true;
        userMessages.push({
          index: i,
          title: row[titleCol] || '系統通知',
          content: row[contentCol] || '',
          read: row[readCol] || '否',
          time: row[timeCol] || '',
          cardId: row[cardIdCol] || ''
        });
      }
    }
    
    // 如果用戶沒有訊息，建立歡迎訊息
    if (!userFound) {
      sendWelcomeMessage(user);
    }
    
    return userMessages;
  } catch (error) {
    Logger.log('getInbox 錯誤: ' + error.toString());
    return [];
  }
}

// 標記訊息為已讀
function markAsRead(rowIndex) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('信箱');
  if (!sheet) return {success: false, error: '找不到信箱工作表'};
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const readCol = headers.indexOf('已讀');
  
  if (readCol === -1) return {success: false, error: '找不到已讀欄位'};
  
  try {
    sheet.getRange(rowIndex + 1, readCol + 1).setValue('是');
    return {success: true, message: '已標記為已讀'};
  } catch (error) {
    return {success: false, error: error.toString()};
  }
}

// 發送訊息
function sendMessage(messageData) {
  try {
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('信箱');
    if (!sheet) {
      sheet = createMailboxSheet();
    }
    
    const data = sheet.getDataRange().getValues();
    let headers = data[0];
    
    // 如果沒有標題行或標題行不完整，重新建立標題行
    if (headers.length === 0 || headers[0] === '' || headers.length < 6) {
      sheet.clear();
      sheet.getRange(1, 1, 1, 6).setValues([['收件者', '標題', '內容', '已讀', '時間', '卡片ID']]);
      headers = ['收件者', '標題', '內容', '已讀', '時間', '卡片ID'];
      
      // 設定標題行樣式
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 6).setBackground('#4285f4');
      sheet.getRange(1, 1, 1, 6).setFontColor('white');
      sheet.autoResizeColumns(1, 6);
    }
    
    const newRow = [
      messageData.user,
      messageData.title,
      messageData.content,
      '否',
      messageData.time,
      messageData.cardId
    ];
    
    sheet.appendRow(newRow);
    
    Logger.log(`訊息已發送給 ${messageData.user}: ${messageData.title}`);
    return {success: true, message: '訊息已發送'};
  } catch (error) {
    Logger.log('sendMessage 錯誤: ' + error.toString());
    return {success: false, error: error.toString()};
  }
}

// 建立信箱工作表
function createMailboxSheet() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('信箱');
    
    if (!sheet) {
      sheet = ss.insertSheet('信箱');
      Logger.log('已建立新的信箱工作表');
    } else {
      Logger.log('找到現有的信箱工作表');
    }
    
    // 設定標題行
    sheet.getRange(1, 1, 1, 6).setValues([['收件者', '標題', '內容', '已讀', '時間', '卡片ID']]);
    
    // 設定標題行樣式
    sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    sheet.getRange(1, 1, 1, 6).setBackground('#4285f4');
    sheet.getRange(1, 1, 1, 6).setFontColor('white');
    
    // 自動調整欄寬
    sheet.autoResizeColumns(1, 6);
    
    Logger.log('信箱工作表設定完成');
    return sheet;
  } catch (error) {
    Logger.log('createMailboxSheet 錯誤: ' + error.toString());
    throw error;
  }
}

// 初始化系統
function initializeSystem() {
  try {
    Logger.log('開始初始化系統...');
    
    // 建立信箱工作表
    const sheet = createMailboxSheet();
    
    // 發送測試訊息
    sendTestMessage();
    
    Logger.log('系統初始化完成');
    return {success: true, message: '系統初始化完成'};
  } catch (error) {
    Logger.log('initializeSystem 錯誤: ' + error.toString());
    return {success: false, error: error.toString()};
  }
}

// 為新用戶發送歡迎訊息
function sendWelcomeMessage(user) {
  try {
    const welcomeMessage = {
      user: user,
      title: '歡迎來到遊戲！',
      content: `親愛的 ${user}，歡迎來到我們的遊戲世界！\n\n這裡是您的個人信箱，您可以在這裡收到：\n• 系統通知\n• 任務獎勵\n• 活動訊息\n• 卡片獎勵\n\n祝您遊戲愉快！`,
      cardId: 'WELCOME_CARD_001',
      time: new Date().toLocaleString('zh-TW')
    };
    
    const result = sendMessage(welcomeMessage);
    Logger.log(`歡迎訊息發送結果 (${user}): ` + JSON.stringify(result));
    return result;
  } catch (error) {
    Logger.log('sendWelcomeMessage 錯誤: ' + error.toString());
    return {success: false, error: error.toString()};
  }
}

// 批量新增玩家
function addMultiplePlayers(players) {
  try {
    const results = [];
    
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const result = sendWelcomeMessage(player.name);
      results.push({
        name: player.name,
        success: result.success,
        message: result.message || '玩家新增成功'
      });
    }
    
    Logger.log(`批量新增玩家結果: ${JSON.stringify(results)}`);
    return {success: true, results: results};
  } catch (error) {
    Logger.log('addMultiplePlayers 錯誤: ' + error.toString());
    return {success: false, error: error.toString()};
  }
}

// 取得所有玩家列表
function getAllPlayers() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('信箱');
    if (!sheet) {
      return [];
    }
    
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return [];
    }
    
    const headers = data[0];
    const userCol = headers.indexOf('收件者');
    
    if (userCol === -1) {
      return [];
    }
    
    const players = new Set();
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[userCol] && row[userCol].trim() !== '') {
        players.add(row[userCol]);
      }
    }
    
    const playerList = Array.from(players).map(name => ({
      name: name,
      type: 'regular',
      status: 'active',
      lastActive: new Date().toLocaleDateString('zh-TW')
    }));
    
    Logger.log(`取得玩家列表: ${playerList.length} 個玩家`);
    return playerList;
  } catch (error) {
    Logger.log('getAllPlayers 錯誤: ' + error.toString());
    return [];
  }
}

// 測試函數 - 發送測試訊息
function sendTestMessage() {
  const testMessage = {
    user: '測試玩家',
    title: '歡迎訊息',
    content: '歡迎來到遊戲！這是您的第一封訊息。',
    cardId: 'TEST_CARD_001',
    time: new Date().toLocaleString('zh-TW')
  };
  
  const result = sendMessage(testMessage);
  Logger.log('測試訊息發送結果：' + JSON.stringify(result));
}

// 清除所有測試資料
function clearTestData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('信箱');
  if (sheet) {
    sheet.clear();
    createMailboxSheet();
  }
}

// 取得統計資訊
function getMailboxStats() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('信箱');
  if (!sheet) return {total: 0, unread: 0, users: []};
  
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return {total: 0, unread: 0, users: []};
  
  const headers = data[0];
  const userCol = headers.indexOf('收件者');
  const readCol = headers.indexOf('已讀');
  
  let total = 0;
  let unread = 0;
  const users = new Set();
  
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (row[userCol]) {
      total++;
      users.add(row[userCol]);
      if (row[readCol] !== '是') {
        unread++;
      }
    }
  }
  
  return {
    total: total,
    unread: unread,
    users: Array.from(users)
  };
} 