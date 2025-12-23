// ===== 希臘神祇分數上傳系統 =====
// 這個腳本可以讓所有希臘神祇頁面使用

const GREEK_SCORE_API = "https://script.google.com/macros/s/AKfycbzJWy7h__cMAyijHgeUGCEiCKSyysLfNRvzYYYnMH5sjSqfrMNyNZnmSi8hOXvVSo6c/exec";

// 希臘神祇名稱對應
const GREEK_DEITY_NAMES = {
  'zeus.html': '宙斯',
  'hera.html': '赫拉',
  'poseidon.html': '波塞頓',
  'demeter.html': '得墨忒耳',
  'athena.html': '雅典娜',
  'apollo.html': '阿波羅',
  'artemis.html': '阿爾忒彌斯',
  'ares.html': '阿瑞斯',
  'aphrodite.html': '阿芙蘿黛蒂',
  'hephaestus.html': '赫菲斯托斯',
  'hermes.html': '赫耳墨斯',
  'hestia.html': '赫斯提亞',
  'dionysus.html': '狄俄尼索斯',
  'hades.html': '哈迪斯',
  'persephone.html': '珀爾塞福涅',
  'eros.html': '厄洛斯',
  'nike.html': '尼刻',
  'gaia.html': '蓋婭',
  'atlas_god.html': '阿特拉斯',
  'cronus.html': '克洛諾斯',
  'rhea.html': '瑞亞',
  'prometheus.html': '普羅米修斯'
};

/**
 * 上傳希臘神祇分數到 Google Sheets
 * @param {Object} gameData - 遊戲數據
 * @param {number} gameData.score - 本次獲得的星星數
 * @param {number} gameData.correctCount - 答對題數
 * @param {number} gameData.wrongCount - 答錯題數
 * @param {number} gameData.totalTime - 總遊戲時間（秒）
 * @param {number} gameData.averageTime - 平均答題時間（秒）
 * @param {string} gameData.deityName - 神祇名稱（可選，會自動偵測）
 */
async function submitGreekScore(gameData) {
  // 自動偵測神祇名稱
  const currentPage = window.location.pathname.split('/').pop();
  const deityName = gameData.deityName || GREEK_DEITY_NAMES[currentPage] || '未知神祇';
  
  const playerName = localStorage.getItem('playerName') || '匿名玩家';
  const score = gameData.score || 0;
  const correctCount = gameData.correctCount || 0;
  const wrongCount = gameData.wrongCount || 0;
  const totalTime = gameData.totalTime || 0;
  const averageTime = gameData.averageTime || 0;
  const date = new Date().toLocaleDateString('zh-TW');
  
  try {
    const formData = new URLSearchParams();
    formData.append('action', 'addGreekScore');
    formData.append('playerName', playerName);
    formData.append('score', score.toString());
    formData.append('correctCount', correctCount.toString());
    formData.append('wrongCount', wrongCount.toString());
    formData.append('category', deityName);
    formData.append('date', date);
    formData.append('totalTime', totalTime.toString());
    formData.append('averageTime', averageTime.toString());
    
    const response = await fetch(GREEK_SCORE_API, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    let payload = null;
    try {
      payload = await response.json();
    } catch (e) {
      payload = null;
    }

    if (!response.ok) {
      const message = payload?.error || payload?.message || `分數上傳失敗（HTTP ${response.status}）`;
      console.error('上傳分數失敗:', message);
      return { success: false, message };
    }

    if (payload && payload.success === false) {
      const message = payload.error || payload.message || '分數上傳失敗，請稍後再試';
      console.error('上傳分數失敗:', message);
      return { success: false, message };
    }

    console.log(`希臘神祇 ${deityName} 分數已成功上傳到 Google Sheets`);
    return { success: true, message: payload?.message || '分數已上傳到排行榜！' };
  } catch (error) {
    console.error('上傳分數時發生錯誤:', error);
    return { success: false, message: '分數上傳失敗，請檢查網路連線', error: String(error) };
  }
}

/**
 * 讀取希臘神祇排行榜
 * @param {string} category - 'all' 或神祇中文名（例如 '宙斯'）
 */
async function getGreekLeaderboard(category = 'all') {
  try {
    const formData = new URLSearchParams();
    formData.append('action', 'getGreekLeaderboard');
    formData.append('category', category || 'all');

    const response = await fetch(GREEK_SCORE_API, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    const payload = await response.json();
    if (!response.ok) {
      return { success: false, error: payload?.error || `HTTP ${response.status}` };
    }
    return payload;
  } catch (error) {
    return { success: false, error: String(error) };
  }
}

/**
 * 簡化版分數上傳函數（向後相容）
 * @param {number} score - 星星數
 * @param {number} correctCount - 答對題數
 * @param {number} wrongCount - 答錯題數
 * @param {number} totalTime - 總時間
 */
async function submitGreekScoreSimple(score, correctCount, wrongCount, totalTime = 0) {
  const averageTime = correctCount > 0 ? Math.round(totalTime / correctCount) : 0;
  
  return await submitGreekScore({
    score,
    correctCount,
    wrongCount,
    totalTime,
    averageTime
  });
}

// 掛到 window，供 atlas.html / 各關卡頁呼叫
window.submitGreekScore = submitGreekScore;
window.submitGreekScoreSimple = submitGreekScoreSimple;
window.getGreekLeaderboard = getGreekLeaderboard;

// 導出函數供其他腳本使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { submitGreekScore, submitGreekScoreSimple, getGreekLeaderboard };
}
