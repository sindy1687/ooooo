// ===== 希臘神祇分數上傳系統 =====
// 這個腳本可以讓所有希臘神祇頁面使用

const GREEK_SCORE_API = "https://script.google.com/macros/s/AKfycbzJWy7h__cMAyijHgeUGCEiCKSyysLfNRvzYYYnMH5sjSqfrMNyNZnmSi8hOXvVSo6c/exec";

const GREEK_LEADERBOARD_ACTION = 'getGreekLeaderboard';

function getGreekPlayerName() {
  const playerName = localStorage.getItem('playerName');
  return playerName && playerName.trim() ? playerName.trim() : '匿名玩家';
}

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
  
  const playerName = getGreekPlayerName();
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
    
    if (response.ok) {
      console.log(`希臘神祇 ${deityName} 分數已成功上傳到 Google Sheets`);
      return { success: true, message: '分數已上傳到排行榜！' };
    } else {
      console.error('上傳分數失敗');
      return { success: false, message: '分數上傳失敗，請稍後再試' };
    }
  } catch (error) {
    console.error('上傳分數時發生錯誤:', error);
    return { success: false, message: '分數上傳失敗，請檢查網路連線' };
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

async function fetchGreekLeaderboard(category = 'all') {
  try {
    const formData = new URLSearchParams();
    formData.append('action', GREEK_LEADERBOARD_ACTION);
    formData.append('category', category);

    const response = await fetch(GREEK_SCORE_API, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      return { success: false, leaderboard: [], message: '排行榜讀取失敗' };
    }

    const data = await response.json().catch(() => null);
    if (!data || data.success === false) {
      return { success: false, leaderboard: [], message: (data && data.error) ? data.error : '排行榜讀取失敗' };
    }

    return { success: true, leaderboard: data.leaderboard || [] };
  } catch (error) {
    console.error('讀取排行榜時發生錯誤:', error);
    return { success: false, leaderboard: [], message: '排行榜讀取失敗，請檢查網路連線' };
  }
}

function ensureGreekLeaderboardContainer(gameEndModal) {
  if (!gameEndModal) return null;
  const content = gameEndModal.querySelector('.modal-content') || gameEndModal;

  let container = content.querySelector('#greekLeaderboard');
  if (!container) {
    container = document.createElement('div');
    container.id = 'greekLeaderboard';
    container.style.cssText = [
      'margin-top: 18px;',
      'padding-top: 16px;',
      'border-top: 1px solid rgba(255,215,0,0.35);',
      'text-align: left;'
    ].join('');
    content.appendChild(container);
  }
  return container;
}

function renderGreekLeaderboard(container, leaderboard, currentPlayerName) {
  if (!container) return;
  const rows = Array.isArray(leaderboard) ? leaderboard.slice(0, 10) : [];

  container.innerHTML = '';

  const title = document.createElement('div');
  title.textContent = '🏆 排行榜（前 10 名）';
  title.style.cssText = 'color:#ffd700;font-weight:bold;margin-bottom:10px;font-size:1.05rem;text-align:center;';
  container.appendChild(title);

  if (rows.length === 0) {
    const empty = document.createElement('div');
    empty.textContent = '目前尚無排行榜資料';
    empty.style.cssText = 'color:#bbb;text-align:center;padding:10px 0;';
    container.appendChild(empty);
    return;
  }

  const table = document.createElement('div');
  table.style.cssText = 'display:flex;flex-direction:column;gap:6px;';

  rows.forEach((item) => {
    const row = document.createElement('div');
    const isMe = currentPlayerName && item && item.playerName === currentPlayerName;
    row.style.cssText = [
      'display:flex;align-items:center;gap:10px;',
      'padding:8px 10px;',
      'border-radius:10px;',
      isMe ? 'background:rgba(0,255,255,0.12);border:1px solid rgba(0,255,255,0.35);' : 'background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);'
    ].join('');

    const rank = document.createElement('div');
    rank.textContent = `#${item.rank}`;
    rank.style.cssText = 'min-width:44px;color:#ffd700;font-weight:bold;';

    const name = document.createElement('div');
    name.textContent = item.playerName || '匿名玩家';
    name.style.cssText = 'flex:1;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';

    const score = document.createElement('div');
    score.textContent = `⭐ ${item.score || 0}`;
    score.style.cssText = 'color:#ffd700;font-weight:bold;';

    row.appendChild(rank);
    row.appendChild(name);
    row.appendChild(score);
    table.appendChild(row);
  });

  container.appendChild(table);
}

function isGreekDeityPage() {
  const currentPage = window.location.pathname.split('/').pop();
  return Boolean(GREEK_DEITY_NAMES[currentPage]);
}

function detectGreekGameStatsFromGlobals() {
  const gs = (typeof window !== 'undefined') ? window.gameState : undefined;
  const score = (gs && typeof gs.sessionStars === 'number') ? gs.sessionStars : (typeof window.sessionStars === 'number' ? window.sessionStars : 0);
  const log = (gs && Array.isArray(gs.answerLog)) ? gs.answerLog : (Array.isArray(window.answerLog) ? window.answerLog : []);
  const correctCount = log.filter(l => l && l.correct === true).length;
  const wrongCount = log.filter(l => l && l.correct === false).length;
  const totalTime = (gs && typeof gs.totalTimeUsed === 'number') ? gs.totalTimeUsed : (typeof window.totalTimeUsed === 'number' ? window.totalTimeUsed : 0);
  return { score, correctCount, wrongCount, totalTime };
}

function initGreekEndModalAutoHook() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (!isGreekDeityPage()) return;

  const gameEndModal = document.getElementById('gameEndModal');
  if (!gameEndModal) return;

  let handled = false;

  const handle = async () => {
    if (handled) return;
    handled = true;

    const currentPage = window.location.pathname.split('/').pop();
    const deityName = GREEK_DEITY_NAMES[currentPage] || '未知神祇';
    const playerName = getGreekPlayerName();

    const { score, correctCount, wrongCount, totalTime } = detectGreekGameStatsFromGlobals();

    const lbContainer = ensureGreekLeaderboardContainer(gameEndModal);
    if (lbContainer) {
      lbContainer.innerHTML = '<div style="color:#bbb;text-align:center;padding:10px 0;">排行榜載入中...</div>';
    }

    await submitGreekScore({
      score,
      correctCount,
      wrongCount,
      totalTime,
      averageTime: correctCount > 0 ? Math.round(totalTime / correctCount) : 0,
      deityName,
    });

    const lbResult = await fetchGreekLeaderboard(deityName);
    if (!lbResult.success) {
      if (lbContainer) {
        lbContainer.innerHTML = `<div style="color:#bbb;text-align:center;padding:10px 0;">${lbResult.message || '排行榜讀取失敗'}</div>`;
      }
      return;
    }

    renderGreekLeaderboard(lbContainer, lbResult.leaderboard, playerName);
  };

  const observer = new MutationObserver(() => {
    const display = (gameEndModal.style && gameEndModal.style.display) ? gameEndModal.style.display : '';
    const isVisible = display !== 'none' && display !== '';
    if (isVisible) {
      handle();
    }
  });

  observer.observe(gameEndModal, { attributes: true, attributeFilter: ['style', 'class'] });
}

if (typeof window !== 'undefined') {
  window.submitGreekScore = submitGreekScore;
  window.submitGreekScoreSimple = submitGreekScoreSimple;
  window.fetchGreekLeaderboard = fetchGreekLeaderboard;

  document.addEventListener('DOMContentLoaded', initGreekEndModalAutoHook);
}

// 導出函數供其他腳本使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { submitGreekScore, submitGreekScoreSimple, fetchGreekLeaderboard };
}
