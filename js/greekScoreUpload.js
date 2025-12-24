// ===== 希臘神祇分數上傳系統 =====
// 這個腳本可以讓所有希臘神祇頁面使用

const GREEK_SCORE_API = "https://script.google.com/macros/s/AKfycbzJWy7h__cMAyijHgeUGCEiCKSyysLfNRvzYYYnMH5sjSqfrMNyNZnmSi8hOXvVSo6c/exec";

const GREEK_LEADERBOARD_ACTION = 'getGreekLeaderboard';

function getGreekPlayerName() {
  const playerName = localStorage.getItem('playerName');
  return playerName && playerName.trim() ? playerName.trim() : '匿名玩家';
}

function ensureGreekSettlementContainer(gameEndModal) {
  if (!gameEndModal) return null;
  const content = gameEndModal.querySelector('.modal-content') || gameEndModal;

  let container = content.querySelector('#greekSettlement');
  if (!container) {
    container = document.createElement('div');
    container.id = 'greekSettlement';
    container.style.cssText = [
      'margin-top: 14px;',
      'padding-top: 14px;',
      'border-top: 1px solid rgba(255,215,0,0.20);',
      'text-align: left;'
    ].join('');
    content.appendChild(container);
  }
  return container;
}

function buildGreekSettlementDetails(answerLog) {
  const list = Array.isArray(answerLog) ? answerLog : [];
  return list
    .filter(item => item && (item.correct === true || item.correct === false))
    .map((item, idx) => ({
      n: idx + 1,
      correct: item.correct === true,
      word: item.word || '',
      user: item.user || '',
      category: item.category || '',
      zh: item.zh || ''
    }));
}

function renderGreekSettlementList(container, answerLog) {
  if (!container) return;
  const details = buildGreekSettlementDetails(answerLog);

  const title = document.createElement('div');
  title.textContent = '📋 本次結算清單';
  title.style.cssText = 'color:#00ffff;font-weight:bold;margin-bottom:10px;font-size:1.02rem;text-align:center;';

  const listWrap = document.createElement('div');
  listWrap.style.cssText = [
    'max-height: 220px;',
    'overflow: auto;',
    'padding: 10px;',
    'border-radius: 12px;',
    'background: rgba(0,0,0,0.22);',
    'border: 1px solid rgba(255,255,255,0.10);'
  ].join('');

  if (!details.length) {
    listWrap.innerHTML = '<div style="color:#bbb;text-align:center;padding:6px 0;">目前沒有可顯示的結算紀錄</div>';
  } else {
    const rows = details.map(item => {
      const badge = item.correct ? '<span style="color:#0f0;font-weight:bold;">✅</span>' : '<span style="color:#ff6b6b;font-weight:bold;">❌</span>';
      const word = String(item.word || '').trim();
      const user = String(item.user || '').trim();
      const zh = String(item.zh || '').trim();
      return `
        <div style="display:grid;grid-template-columns:40px 22px 1fr;gap:10px;align-items:start;padding:8px 6px;border-bottom:1px solid rgba(255,255,255,0.07);">
          <div style="color:#ffd700;font-weight:bold;">#${item.n}</div>
          <div>${badge}</div>
          <div style="min-width:0;">
            <div style="color:#fff;word-break:break-word;">${word || '-'} <span style="color:#aaa;">(${zh || '-'})</span></div>
            <div style="color:#00ffff;opacity:0.95;word-break:break-word;">你的答案：${user || '-'}</div>
          </div>
        </div>
      `;
    }).join('');
    listWrap.innerHTML = rows;
  }

  container.innerHTML = '';
  container.appendChild(title);
  container.appendChild(listWrap);
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
  const details = typeof gameData.details === 'string' ? gameData.details : '';
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
    if (details) {
      formData.append('details', details);
    }
    
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

  const formatTime = (seconds) => {
    const s = Number(seconds);
    if (!Number.isFinite(s) || s < 0) return '-';
    const mm = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
  };

  const safeNumber = (value) => {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  };

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

  const header = document.createElement('div');
  header.style.cssText = [
    'display:grid;',
    'grid-template-columns:52px 1fr 88px 88px 88px;',
    'gap:10px;',
    'padding:8px 10px;',
    'border-radius:10px;',
    'background:rgba(255,255,255,0.04);',
    'border:1px solid rgba(255,255,255,0.10);',
    'color:#bbb;',
    'font-size:0.92rem;',
    'font-weight:bold;'
  ].join('');
  header.innerHTML = [
    '<div>名次</div>',
    '<div>玩家</div>',
    '<div style="text-align:right;">答對</div>',
    '<div style="text-align:right;">時間</div>',
    '<div style="text-align:right;">星星</div>'
  ].join('');
  table.appendChild(header);

  rows.forEach((item) => {
    const row = document.createElement('div');
    const isMe = currentPlayerName && item && item.playerName === currentPlayerName;
    row.style.cssText = [
      'display:grid;align-items:center;gap:10px;',
      'grid-template-columns:52px 1fr 88px 88px 88px;',
      'padding:8px 10px;',
      'border-radius:10px;',
      isMe ? 'background:rgba(0,255,255,0.12);border:1px solid rgba(0,255,255,0.35);' : 'background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);'
    ].join('');

    const rank = document.createElement('div');
    rank.textContent = `#${item && item.rank ? item.rank : '-'}`;
    rank.style.cssText = 'color:#ffd700;font-weight:bold;';

    const name = document.createElement('div');
    name.textContent = (item && item.playerName) ? item.playerName : '匿名玩家';
    name.title = name.textContent;
    name.style.cssText = 'color:#fff;word-break:break-word;white-space:normal;line-height:1.25;';

    const correct = document.createElement('div');
    const correctCount = safeNumber(item && item.correctCount);
    correct.textContent = correctCount === null ? '-' : String(correctCount);
    correct.style.cssText = 'color:#fff;text-align:right;';

    const time = document.createElement('div');
    time.textContent = formatTime(item && item.totalTime);
    time.style.cssText = 'color:#fff;text-align:right;';

    const score = document.createElement('div');
    const stars = safeNumber(item && item.score);
    score.textContent = stars === null ? '-' : `⭐ ${stars}`;
    score.style.cssText = 'color:#ffd700;font-weight:bold;text-align:right;';

    row.appendChild(rank);
    row.appendChild(name);
    row.appendChild(correct);
    row.appendChild(time);
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
  return { score, correctCount, wrongCount, totalTime, answerLog: log };
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

    const { score, correctCount, wrongCount, totalTime, answerLog } = detectGreekGameStatsFromGlobals();

    const settlementContainer = ensureGreekSettlementContainer(gameEndModal);
    renderGreekSettlementList(settlementContainer, answerLog);

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
      details: JSON.stringify(buildGreekSettlementDetails(answerLog))
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
