/**
 * 通用工具函數模組
 * 提供統一的localStorage、API調用、音效等功能
 */

// ========== localStorage 統一管理 ==========
const Storage = {
  get(key, defaultValue = null) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (e) {
      console.warn(`讀取 ${key} 失敗:`, e);
      return defaultValue;
    }
  },
  
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`儲存 ${key} 失敗:`, e);
      return false;
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.warn(`刪除 ${key} 失敗:`, e);
      return false;
    }
  },
  
  // 常用數據快捷方法
  getTotalStars() {
    return parseInt(this.get('totalStars', 0), 10) || 0;
  },
  
  setTotalStars(stars) {
    this.set('totalStars', stars);
    this.triggerStarsUpdate();
  },
  
  addStars(amount) {
    const current = this.getTotalStars();
    this.setTotalStars(current + amount);
    return current + amount;
  },
  
  triggerStarsUpdate() {
    // 觸發自定義事件，讓其他模組可以監聽
    window.dispatchEvent(new CustomEvent('starsUpdated', {
      detail: { totalStars: this.getTotalStars() }
    }));
  }
};

// ========== API 統一管理 ==========
const API = {
  // Google Sheets API 基礎URL
  GOOGLE_SHEETS_API: "https://script.google.com/macros/s/AKfycbyhcoJVk9MVFWqsyee2PeE-vCo3u2p6oyL8HUCaMk0ZeNL0Td9mOBZnMlHNb6mIO5eCHQ/exec",
  
  // 通用請求方法
  async request(action, params = {}) {
    try {
      const formData = new URLSearchParams();
      formData.append('action', action);
      Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, String(value));
        }
      });
      
      const response = await fetch(this.GOOGLE_SHEETS_API, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`API請求失敗 (${action}):`, error);
      throw error;
    }
  },
  
  // 排行榜相關
  async getQuizLeaderboard(category = null) {
    const params = category ? { category } : {};
    return await this.request('getQuizLeaderboard', params);
  },
  
  async addQuizScore(scoreData) {
    return await this.request('addQuizScore', scoreData);
  }
};

// ========== 音效統一管理 ==========
const SoundManager = {
  sounds: {},
  bgm: null,
  bgmVolume: 0.5,
  sfxVolume: 0.7,
  muted: false,
  
  init() {
    // 初始化背景音樂
    const bgmElement = document.getElementById('bgm');
    if (bgmElement) {
      this.bgm = bgmElement;
      this.bgm.volume = this.bgmVolume;
    }
    
    // 載入常用音效
    this.loadSound('click', 'sound/click.mp3');
    this.loadSound('star', 'sound/shine.mp3');
  },
  
  loadSound(name, src) {
    const audio = new Audio(src);
    audio.volume = this.sfxVolume;
    audio.preload = 'auto';
    this.sounds[name] = audio;
  },
  
  play(name) {
    if (this.muted) return;
    const sound = this.sounds[name];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(e => console.warn(`播放音效 ${name} 失敗:`, e));
    }
  },
  
  playBGM(src = null) {
    if (this.muted) return;
    if (src && this.bgm) {
      this.bgm.src = src;
    }
    if (this.bgm) {
      this.bgm.play().catch(e => console.warn('播放背景音樂失敗:', e));
    }
  },
  
  stopBGM() {
    if (this.bgm) {
      this.bgm.pause();
      this.bgm.currentTime = 0;
    }
  },
  
  setMuted(muted) {
    this.muted = muted;
    if (this.bgm) {
      this.bgm.muted = muted;
    }
    Object.values(this.sounds).forEach(sound => {
      sound.muted = muted;
    });
  }
};

// ========== 排行榜工具函數 ==========
const LeaderboardUtils = {
  // 分類名稱對應表
  categoryNames: {
    'all': '全部關卡',
    'aries': '牡羊座', 'taurus': '金牛座', 'gemini': '雙子座', 'cancer': '巨蟹座',
    'leo': '獅子座', 'virgo': '處女座', 'libra': '天秤座', 'scorpio': '天蠍座',
    'sagittarius': '射手座', 'capricorn': '摩羯座', 'aquarius': '水瓶座', 'pisces': '雙魚座',
    'andromeda': '仙女座', 'cygnus': '天鵝座', 'orion': '獵戶座', 'pegasus': '飛馬座',
    'cassiopeia': '仙后座', 'scorpius': '天蠍座', 'phoenix': '鳳凰座', 'vela': '船帆座'
  },
  
  normalizeCategory(category) {
    return String(category || '').trim().toLowerCase();
  },
  
  normalizeName(name, fallbackKey = null) {
    const str = String(name ?? '').trim();
    if (str) return str;
    return fallbackKey ? `匿名玩家#${fallbackKey}` : '匿名玩家';
  },
  
  formatTime(seconds) {
    if (!seconds || seconds <= 0) return '-';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m ? `${m}分${s}秒` : `${s}秒`;
  },
  
  // 處理排行榜數據：排序、去重、標記名次
  processLeaderboardData(data, deduplicate = false) {
    if (!data || !Array.isArray(data) || data.length === 0) {
      return [];
    }
    
    // 排序邏輯：先比對的題數，再比時間
    const sorted = [...data].sort((a, b) => {
      // 詳細調試：輸出完整數據結構
      console.log('=== SORTING DEBUG ===');
      console.log('Player A:', a);
      console.log('Player B:', b);
      console.log('A fields:', { 
        correct: a.correct, 
        答對: a.答對, 
        correctAnswers: a.correctAnswers, 
        score: a.score,
        totalTime: a.totalTime,
        總時間: a.總時間,
        time: a.time,
        duration: a.duration
      });
      console.log('B fields:', { 
        correct: b.correct, 
        答對: b.答對, 
        correctAnswers: b.correctAnswers, 
        score: b.score,
        totalTime: b.totalTime,
        總時間: b.總時間,
        time: b.time,
        duration: b.duration
      });
      
      // 1. 先比較答對題數（越多越好，排名越高）
      // 支持多種可能的欄位名稱
      const aCorrect = a.correct || a.答對 || a.correctAnswers || parseInt(a.score) || 0;
      const bCorrect = b.correct || b.答對 || b.correctAnswers || parseInt(b.score) || 0;
      const correctDiff = bCorrect - aCorrect;
      
      console.log(`Correct answers: A=${aCorrect}, B=${bCorrect}, Diff=${correctDiff}`);
      
      // 如果答對題數不同，直接返回比較結果
      if (correctDiff !== 0) {
        console.log(`RESULT: Different correct answers - B wins by ${correctDiff}`);
        return correctDiff;
      }
      
      // 2. 答對題數相同時，比較總時間（越短越好，排名越高）
      // 支持多種可能的時間欄位名稱
      const aTime = a.totalTime || a.總時間 || a.time || a.duration || 0;
      const bTime = b.totalTime || b.總時間 || b.time || b.duration || 0;
      
      console.log(`Time: A=${aTime}, B=${bTime}`);
      
      // 如果時間也相同，保持原順序（同分同排名）
      if (aTime === bTime) {
        console.log(`RESULT: Same correct answers and same time - TIE`);
        return 0; // 保持原順序，後續會處理同排名
      }
      
      const timeDiff = aTime - bTime;
      console.log(`RESULT: Same correct answers, time diff=${timeDiff} (A-B)`);
      return timeDiff;
    });
    
    // 標記原始名次
    sorted.forEach((item, idx) => {
      item.originalRank = idx + 1;
    });
    
    // 去重（同玩家同關卡只保留最佳成績）
    if (deduplicate) {
      const dedup = [];
      const seen = new Set();
      
      sorted.forEach((item, idx) => {
        const name = this.normalizeName(item.playerName, idx);
        const category = this.normalizeCategory(item.category);
        const key = `${name}|${category}`;
        
        if (!seen.has(key)) {
          seen.add(key);
          dedup.push(item);
        }
      });
      
      // 重新計算排名（處理同分同排名）
      let currentRank = 1;
      dedup.forEach((item, idx) => {
        if (idx > 0) {
          const prevItem = dedup[idx - 1];
          const prevCorrect = prevItem.correct || prevItem.答對 || prevItem.correctAnswers || parseInt(prevItem.score) || 0;
          const prevTime = prevItem.totalTime || prevItem.總時間 || prevItem.time || prevItem.duration || 0;
          
          const currCorrect = item.correct || item.答對 || item.correctAnswers || parseInt(item.score) || 0;
          const currTime = item.totalTime || item.總時間 || item.time || item.duration || 0;
          
          // 如果答對題數或時間不同，排名遞增
          if (currCorrect !== prevCorrect || currTime !== prevTime) {
            currentRank = idx + 1;
          }
        }
        item.rank = currentRank;
      });
      
      return dedup;
    }
    
    // 不去重時，直接標記排名（處理同分同排名）
    let currentRank = 1;
    sorted.forEach((item, idx) => {
      if (idx > 0) {
        const prevItem = sorted[idx - 1];
        const prevCorrect = prevItem.correct || prevItem.答對 || prevItem.correctAnswers || parseInt(prevItem.score) || 0;
        const prevTime = prevItem.totalTime || prevItem.總時間 || prevItem.time || prevItem.duration || 0;
        
        const currCorrect = item.correct || item.答對 || item.correctAnswers || parseInt(item.score) || 0;
        const currTime = item.totalTime || item.總時間 || item.time || item.duration || 0;
        
        // 如果答對題數或時間不同，排名遞增
        if (currCorrect !== prevCorrect || currTime !== prevTime) {
          currentRank = idx + 1;
        }
      }
      item.rank = currentRank;
    });
    
    return sorted;
  },
  
  // 渲染排行榜表格
  renderTable(data, containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`找不到容器: ${containerId}`);
      return;
    }
    
    if (!data || data.length === 0) {
      container.innerHTML = this.renderEmptyState(options.emptyMessage || '目前沒有排行榜資料');
      return;
    }
    
    const {
      showCategory = true,
      showOriginalRank = false,
      maxRows = null
    } = options;
    
    const rows = (maxRows ? data.slice(0, maxRows) : data).map((item, idx) => {
      const rankIcon = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : (item.rank || idx + 1);
      const cat = this.categoryNames[this.normalizeCategory(item.category)] || item.category || '-';
      const avg = item.totalTime && item.correctCount 
        ? this.formatTime(Math.round(item.totalTime / item.correctCount)) 
        : '-';
      const total = item.totalTime ? this.formatTime(item.totalTime) : '-';
      
      return `
        <tr>
          <td style="text-align:center;">${rankIcon}</td>
          <td>${item.playerName || '匿名玩家'}</td>
          ${showCategory ? `<td style="text-align:center;color:#a259ff;">${cat}</td>` : ''}
          <td style="text-align:center;color:#ffd700;font-weight:bold;">${item.score}</td>
          <td style="text-align:center;color:#0f0;">${item.correctCount || 0}/20</td>
          <td style="text-align:center;color:#ff6b6b;">${avg}</td>
          <td style="text-align:center;color:#a0a0ff;">${total}</td>
          ${showOriginalRank ? `<td style="text-align:center;color:#ffd700;">${item.originalRank || '-'}</td>` : ''}
        </tr>
      `;
    }).join('');
    
    const categoryHeader = showCategory ? '<th>關卡</th>' : '';
    const originalRankHeader = showOriginalRank ? '<th>原始名次</th>' : '';
    
    container.innerHTML = `
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;color:#fff;font-family:'Orbitron',sans-serif;">
          <thead>
            <tr style="color:#ffd700;">
              <th>排名</th><th>玩家</th>${categoryHeader}<th>分數</th><th>答對</th><th>平均</th><th>總時間</th>${originalRankHeader}
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div style="text-align:center;color:#888;margin-top:10px;font-size:.9rem;">
        共 ${data.length} ${options.deduplicate ? '位獨立玩家' : '名玩家'}（依分數排序）
      </div>
    `;
  },
  
  renderEmptyState(message) {
    return `
      <div style="text-align:center;color:#888;padding:24px;background:rgba(0,0,0,.25);border-radius:12px;">
        <div style="font-size:2.4rem;margin-bottom:10px;">📭</div>
        <div style="color:#00ffff;font-weight:bold;margin-bottom:6px;">${message}</div>
        <div style="color:#aaa;">玩一場星座挑戰後即可成為第一名！</div>
      </div>
    `;
  },
  
  renderErrorState(error) {
    return `
      <div style="text-align:center;color:#ff6b6b;padding:24px;background:rgba(255,107,107,.12);border-radius:12px;border:1px solid #ff6b6b55;">
        <div style="font-size:2.4rem;margin-bottom:10px;">⚠️</div>
        <div style="font-weight:bold;margin-bottom:8px;">排行榜載入失敗</div>
        <div style="color:#ffb3b3;margin-bottom:12px;">${error?.message || '未知錯誤'}</div>
        <button style="padding:8px 16px;border:none;border-radius:8px;background:#ff6b6b;color:#fff;cursor:pointer;" onclick="location.reload()">重新載入</button>
      </div>
    `;
  }
};

// ========== 頁面初始化工具 ==========
const PageUtils = {
  // 初始化星星顯示
  initStarsDisplay(elementId = 'totalStarsDisplay') {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const updateDisplay = () => {
      const stars = Storage.getTotalStars();
      element.textContent = stars;
    };
    
    // 初始顯示
    updateDisplay();
    
    // 監聽更新事件
    window.addEventListener('starsUpdated', updateDisplay);
  },
  
  // 初始化背景音樂控制
  initBGMControl(playButtonId = 'playAudio', muteButtonId = 'muteToggle') {
    const playBtn = document.getElementById(playButtonId);
    const muteBtn = document.getElementById(muteButtonId);
    
    if (!playBtn || !muteBtn) return;
    
    playBtn.addEventListener('click', () => {
      SoundManager.playBGM();
      playBtn.style.display = 'none';
      muteBtn.style.display = 'block';
    });
    
    muteBtn.addEventListener('click', () => {
      SoundManager.setMuted(!SoundManager.muted);
      muteBtn.textContent = SoundManager.muted ? '🔇' : '🔈';
    });
  },
  
  // 添加點擊音效到元素
  addClickSound(...selectors) {
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('click', () => SoundManager.play('click'));
      });
    });
  }
};

// ========== 背景音樂統一控制 ==========
const BGMController = {
  audio: null,
  isPlaying: false,
  volume: 0.3,
  
  init(src = 'sound/午後放鬆時光（純音樂）.mp3', buttonId = 'bgMusicControl') {
    // 創建或獲取音頻元素
    let audio = document.getElementById('backgroundMusic');
    if (!audio) {
      audio = document.createElement('audio');
      audio.id = 'backgroundMusic';
      audio.loop = true;
      document.body.appendChild(audio);
    }
    
    if (src) audio.src = src;
    audio.volume = this.volume;
    this.audio = audio;
    
    // 初始化按鈕
    const btn = document.getElementById(buttonId);
    if (btn) {
      btn.addEventListener('click', () => this.toggle());
      this.updateButton(btn);
    }
    
    // 從 localStorage 恢復狀態
    const savedState = Storage.get('bgMusicState', 'paused');
    if (savedState === 'playing') {
      this.play();
    }
  },
  
  play() {
    if (!this.audio) return;
    this.audio.play().then(() => {
      this.isPlaying = true;
      Storage.set('bgMusicState', 'playing');
      this.updateAllButtons();
    }).catch(e => console.warn('播放背景音樂失敗:', e));
  },
  
  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    Storage.set('bgMusicState', 'paused');
    this.updateAllButtons();
  },
  
  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  },
  
  updateButton(btn) {
    if (!btn) return;
    btn.textContent = this.isPlaying ? '🔊' : '🔇';
    btn.classList.toggle('paused', !this.isPlaying);
  },
  
  updateAllButtons() {
    document.querySelectorAll('#bgMusicControl, #toggleMusic, #muteToggle').forEach(btn => {
      this.updateButton(btn);
    });
  }
};

// ========== 用戶名稱統一管理 ==========
const UserManager = {
  getPlayerName() {
    const homeName = (Storage.get('playerName') || '').trim();
    if (homeName) return homeName;
    const current = (Storage.get('currentUser') || '').trim();
    return current || '';
  },
  
  setPlayerName(name) {
    const trimmed = (name || '').trim();
    if (trimmed) {
      Storage.set('playerName', trimmed);
      Storage.set('currentUser', trimmed);
      return true;
    }
    return false;
  },
  
  getCurrentUser() {
    return this.getPlayerName() || ('玩家' + Math.floor(Math.random() * 1000));
  }
};

// 頁面載入時自動初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    SoundManager.init();
  });
} else {
  SoundManager.init();
}

// 導出到全局
window.Storage = Storage;
window.API = API;
window.SoundManager = SoundManager;
window.LeaderboardUtils = LeaderboardUtils;
window.PageUtils = PageUtils;
window.BGMController = BGMController;
window.UserManager = UserManager;

