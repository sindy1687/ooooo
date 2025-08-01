// 角色對話系統
const CharacterDialogue = {
  // 角色對話數據
  dialogues: {
    warrior: {
      name: "勇敢戰士",
      avatar: "img/avatars/avatar_TL.png",
      greetings: [
        "🌟 哇！我的戰士回來了！今天準備好大展身手了嗎？",
        "⚔️ 嘿！我的劍已經磨得閃閃發亮了，要不要來一場史詩級的冒險？",
        "🛡️ 歡迎回來，我的勇士！今天想挑戰什麼？我已經等不及要看你大顯身手了！",
        "🔥 哇哈哈！我的戰士回來了！準備好燃燒你的鬥志了嗎？",
        "⚡ 嘿！今天感覺特別有力量！要不要來一場驚天動地的戰鬥？",
        "🎯 歡迎回來，我的英雄！今天想征服哪個關卡？我已經準備好為你加油了！"
      ],
      encouragements: [
        "💪 你的實力讓我印象深刻！繼續保持這種氣勢！",
        "🔥 燃燒的鬥志！這就是真正的戰士精神！",
        "⚡ 你的速度越來越快了，真是令人讚嘆！"
      ],
      victories: [
        "🏆 完美的勝利！你的戰鬥技巧越來越精湛了！",
        "🎯 精準的攻擊！這就是我期待的戰士表現！",
        "🌟 勝利的光芒照耀著你，繼續前進吧！"
      ],
      defeats: [
        "💪 失敗只是暫時的，真正的戰士從不放棄！",
        "🛡️ 讓我們從這次失敗中學習，下次會更強大！",
        "⚔️ 休息一下，然後重新站起來戰鬥！"
      ],
      stageDialogues: {
        start: [
          '⚔️ 準備好了嗎？這一關一定要突破！',
          '🔥 讓我們一起迎接挑戰吧！',
          '💪 這一關我會全力支持你！',
          '🎯 目標就在前方，衝吧！'
        ],
        win: [
          '🏆 太棒了！你成功通過這一關！',
          '🎉 你真的很厲害，連我都佩服！',
          '🌟 這就是強者的實力！',
          '👏 完美過關，繼續加油！'
        ],
        fail: [
          '😅 沒關係，下次一定可以！',
          '🛡️ 別灰心，再來一次！',
          '💡 失敗是成功之母，繼續努力！',
          '🤗 我會一直陪著你，不要放棄！'
        ]
      },
      gachaDialogues: {
        draw: [
          '🎲 來抽一張卡片吧，看看你的運氣！',
          '✨ 希望能抽到厲害的卡片！',
          '🤞 祝你好運，來點驚喜吧！',
          '🎁 抽卡時間到，會是什麼呢？'
        ],
        ssr: [
          '🌈 哇！超稀有卡片！你太強了！',
          '💎 SSR到手，這就是傳說中的運氣！',
          '🎉 恭喜你抽到超稀有，快來炫耀一下！',
          '👑 這運氣我都羨慕了！'
        ],
        normal: [
          '😄 普通卡片也很重要，繼續加油！',
          '📦 收集每一張卡片都是進步！',
          '👍 積少成多，總有一天會抽到好東西！',
          '😊 再來幾次，說不定就中大獎了！'
        ]
      }
    },
    speedster: {
      name: "閃電戰士",
      avatar: "img/avatars/avatar_TR.png",
      greetings: [
        "⚡ 哇！閃電戰士回來了！今天準備好打破速度記錄了嗎？",
        "💨 嘿！風一樣的速度！要不要來一場超音速的冒險？",
        "🚀 哇哈哈！我的閃電戰士！今天想體驗什麼樣的速度？",
        "⚡ 嘿！今天感覺特別快！要不要來一場閃電般的挑戰？",
        "💨 歡迎回來，我的速度之王！今天想挑戰哪個關卡？",
        "🚀 哇！我的超音速戰士回來了！準備好體驗極速了嗎？"
      ],
      encouragements: [
        "⚡ 你的速度真是令人眼花繚亂！",
        "💨 像風一樣自由，像閃電一樣快速！",
        "🚀 你的進步速度比閃電還快！"
      ],
      victories: [
        "🏆 閃電般的勝利！你的速度無人能敵！",
        "⚡ 完美的速度表現！這就是真正的閃電戰士！",
        "💨 風一樣的勝利！繼續保持這種速度！"
      ],
      defeats: [
        "⚡ 閃電也有休息的時候，下次會更快！",
        "💨 風停了，但你的速度不會停止！",
        "🚀 重新充電，準備下一次的超音速衝刺！"
      ]
    },
    defender: {
      name: "防禦戰士",
      avatar: "img/avatars/avatar_BL.png",
      greetings: [
        "🛡️ 哇！我的防禦戰士回來了！今天準備好建立無敵防線了嗎？",
        "🏰 嘿！堡壘戰士！要不要來一場堅不可摧的冒險？",
        "💪 哇哈哈！我的防禦之王回來了！今天想守護什麼？",
        "🛡️ 嘿！今天感覺特別堅固！要不要來一場防禦挑戰？",
        "🏰 歡迎回來，我的堡壘戰士！今天想建立什麼樣的防線？",
        "💪 哇！我的無敵防禦戰士回來了！準備好展現你的堅固了嗎？"
      ],
      encouragements: [
        "🛡️ 你的防禦力真是令人印象深刻！",
        "🏰 穩固如山的表現，繼續保持這種堅定！",
        "💪 你的堅持讓我感到驕傲！"
      ],
      victories: [
        "🏆 完美的防禦勝利！你的堅定得到了回報！",
        "🛡️ 穩固的勝利！這就是真正的防禦戰士！",
        "🏰 堡壘般的勝利！你的防線無人能破！"
      ],
      defeats: [
        "🛡️ 防線被破，但你的意志不會被擊垮！",
        "🏰 堡壘需要修復，但你的精神依然堅固！",
        "💪 重新築起防線，下次會更堅固！"
      ]
    },
    sharpshooter: {
      name: "精準射手",
      avatar: "img/avatars/avatar_BR.png",
      greetings: [
        "🎯 哇！我的精準射手回來了！今天準備好百發百中了嗎？",
        "🏹 嘿！神射手！要不要來一場完美的瞄準挑戰？",
        "🎯 哇哈哈！我的準確之王回來了！今天想命中什麼目標？",
        "🏹 嘿！今天感覺特別準！要不要來一場精準挑戰？",
        "🎯 歡迎回來，我的神射手！今天想展現什麼樣的準確度？",
        "🏹 哇！我的百發百中射手回來了！準備好展現你的精準了嗎？"
      ],
      encouragements: [
        "🎯 你的準確度真是令人讚嘆！",
        "🏹 百發百中的表現，繼續保持這種精準！",
        "🎯 你的專注力讓我印象深刻！"
      ],
      victories: [
        "🏆 完美的精準勝利！你的準確度無人能及！",
        "🎯 百發百中的勝利！這就是真正的精準射手！",
        "🏹 完美的命中！你的準確度得到了證明！"
      ],
      defeats: [
        "🎯 準星需要調整，但你的專注力依然準確！",
        "🏹 箭矢偏離目標，但你的意志依然堅定！",
        "🎯 重新瞄準，下次會更精準！"
      ]
    },
    explorer: {
      name: "探險家",
      avatar: "img/avatars/avatar_astro1.png",
      greetings: [
        "🚀 哇！我的星際探險家回來了！今天準備好發現什麼新大陸？",
        "🌌 嘿！宇宙探險家！要不要來一場驚天動地的探索？",
        "🔍 哇哈哈！我的好奇探險家回來了！今天想揭開什麼謎題？",
        "🚀 嘿！今天感覺特別好奇！要不要來一場探索冒險？",
        "🌌 歡迎回來，我的星際探險家！今天想探索哪個未知領域？",
        "🔍 哇！我的好奇寶寶回來了！準備好發現新知識了嗎？"
      ],
      encouragements: [
        "🚀 你的探索精神真是令人敬佩！",
        "🌌 發現新知識的喜悅，繼續保持這種好奇心！",
        "🔍 你的觀察力讓我印象深刻！"
      ],
      victories: [
        "🏆 探索的勝利！你發現了新的知識寶藏！",
        "🚀 完美的探險勝利！這就是真正的探險家！",
        "🌌 星際探索成功！你的好奇心得到了回報！"
      ],
      defeats: [
        "🚀 探險路上有挫折，但你的好奇心不會停止！",
        "🌌 星際迷航，但你的探索精神依然閃耀！",
        "🔍 重新探索，下次會發現更多寶藏！"
      ]
    },
    magician: {
      name: "魔法師",
      avatar: "img/avatars/avatar_spacekid.png",
      greetings: [
        "🌈 哇！我的小魔法師回來了！今天準備好施展什麼神奇魔法？",
        "✨ 嘿！奇蹟創造者！要不要來一場魔法冒險？",
        "🌟 哇哈哈！我的魔法小精靈回來了！今天想創造什麼奇蹟？",
        "🌈 嘿！今天感覺特別有魔力！要不要來一場魔法挑戰？",
        "✨ 歡迎回來，我的魔法師！今天想展現什麼樣的魔力？",
        "🌟 哇！我的小魔法師回來了！準備好創造奇蹟了嗎？"
      ],
      encouragements: [
        "🌈 你的魔法真是令人驚嘆！",
        "✨ 奇蹟般的表現，繼續保持這種魔力！",
        "🌟 你的智慧讓我感到神奇！"
      ],
      victories: [
        "🏆 魔法的勝利！你創造了學習的奇蹟！",
        "🌈 完美的魔法勝利！這就是真正的魔法師！",
        "✨ 奇蹟般的勝利！你的魔力得到了證明！"
      ],
      defeats: [
        "🌈 魔法暫時失效，但你的魔力不會消失！",
        "✨ 奇蹟需要時間，但你的智慧依然閃耀！",
        "🌟 重新凝聚魔力，下次會更強大！"
      ]
    },
    fairy: {
      name: "櫻花精靈",
      avatar: "img/avatars/vDS8zQP9HdvxX0g (1).png",
      greetings: [
        "🌸 哇！我的櫻花精靈回來了！今天準備好散播什麼美好？",
        "🌺 嘿！美麗的精靈！要不要來一場溫馨的冒險？",
        "🌼 哇哈哈！我的溫柔精靈回來了！今天想創造什麼美好？",
        "🌸 嘿！今天感覺特別溫柔！要不要來一場精靈挑戰？",
        "🌺 歡迎回來，我的櫻花精靈！今天想展現什麼樣的美麗？",
        "🌼 哇！我的溫柔精靈回來了！準備好散播美好與希望了嗎？"
      ],
      encouragements: [
        "🌸 你的溫柔真是令人感動！",
        "🌺 美麗的表現，繼續保持這種善良！",
        "🌼 你的愛心讓我感到溫暖！"
      ],
      victories: [
        "🏆 精靈的勝利！你的溫柔感動了所有人！",
        "🌸 完美的溫柔勝利！這就是真正的櫻花精靈！",
        "🌺 美麗的勝利！你的善良得到了回報！"
      ],
      defeats: [
        "🌸 花瓣暫時凋零，但你的溫柔不會消失！",
        "🌺 美麗暫時暗淡，但你的善良依然閃耀！",
        "🌼 重新綻放，下次會更美麗！"
      ]
    }
  },

  // 當前角色設定
  currentCharacter: null,
  
  // 語音管理
  isCharacterSpeaking: false,
  pendingAudioQueue: [],

  // 初始化對話系統
  init() {
    this.loadCharacterSettings();
    this.showWelcomeDialogue();
  },

  // 載入角色設定
  loadCharacterSettings() {
    const savedVoiceSettings = localStorage.getItem('selectedVoiceSettings');
    if (savedVoiceSettings) {
      try {
        const voiceSettings = JSON.parse(savedVoiceSettings);
        this.currentCharacter = voiceSettings.characterType || 'warrior';
      } catch (e) {
        console.log('角色設定載入失敗:', e);
        this.currentCharacter = 'warrior';
      }
    } else {
      this.currentCharacter = 'warrior';
    }
  },

  // 顯示歡迎對話
  showWelcomeDialogue() {
    const character = this.dialogues[this.currentCharacter];
    if (!character) return;

    // 根據時間和玩家狀態選擇更合適的問候語
    let greeting = this.getSmartGreeting(character);
    
    this.showDialogueBox(greeting, character.name, character.avatar, false);
  },

  // 智能問候語選擇
  getSmartGreeting(character) {
    const now = new Date();
    const hour = now.getHours();
    const greetings = character.greetings;
    
    // 根據時間選擇問候語
    let timeBasedGreeting = '';
    if (hour < 6) {
      timeBasedGreeting = "🌙 哇！這麼早就來了！真是個勤奮的";
    } else if (hour < 12) {
      timeBasedGreeting = "🌅 早安！美好的一天開始了！";
    } else if (hour < 18) {
      timeBasedGreeting = "☀️ 下午好！充滿活力的";
    } else if (hour < 22) {
      timeBasedGreeting = "🌆 晚上好！還在努力學習的";
    } else {
      timeBasedGreeting = "🌙 夜深了！還在堅持的";
    }

    // 檢查玩家登入頻率
    const lastLogin = localStorage.getItem('lastLoginTime');
    const today = new Date().toDateString();
    const isFirstLoginToday = lastLogin !== today;
    
    // 檢查玩家成就和進度
    const totalStars = parseInt(localStorage.getItem('totalStars') || '0');
    const ownedCards = JSON.parse(localStorage.getItem('ownedCards') || '{}');
    const cardCount = Object.keys(ownedCards).length;
    
    if (isFirstLoginToday) {
      // 首次登入今天的特殊問候
      localStorage.setItem('lastLoginTime', today);
      
      // 根據成就調整問候語
      if (totalStars > 1000) {
        return "🏆 哇！我的超級" + character.name + "回來了！你的成就讓我感到驕傲！";
      } else if (cardCount > 100) {
        return "📚 哇！我的知識豐富的" + character.name + "回來了！你的詞彙量真驚人！";
      } else if (totalStars > 500) {
        return "⭐ 哇！我的閃亮" + character.name + "回來了！你的進步真快！";
      } else {
        return timeBasedGreeting + character.name + "！今天準備好迎接挑戰了嗎？";
      }
    } else {
      // 多次登入的問候，加入一些隨機的有趣元素
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      
      // 偶爾加入一些特殊問候
      const specialChance = Math.random();
      if (specialChance < 0.2) { // 20%機率
        if (totalStars > 500) {
          return "🌟 哇！我的明星" + character.name + "又回來了！你的光芒越來越耀眼了！";
        } else if (cardCount > 50) {
          return "📖 哇！我的學者" + character.name + "又回來了！你的知識越來越豐富了！";
        }
      }
      
      return randomGreeting;
    }
  },

  // 暫停所有其他音效
  pauseAllAudio() {
    // 暫停背景音樂
    const bgMusic = document.getElementById('backgroundMusic');
    if (bgMusic && !bgMusic.paused) {
      bgMusic.pause();
      this.pendingAudioQueue.push(() => {
        if (bgMusic) bgMusic.play();
      });
    }
    
    // 暫停其他音效
    const audioElements = document.querySelectorAll('audio:not(#backgroundMusic)');
    audioElements.forEach(audio => {
      if (!audio.paused) {
        audio.pause();
        this.pendingAudioQueue.push(() => {
          audio.currentTime = 0;
          audio.play();
        });
      }
    });
    
    // 暫停語音合成
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      this.pendingAudioQueue.push(() => {
        window.speechSynthesis.resume();
      });
    }
  },

  // 恢復所有音效
  resumeAllAudio() {
    this.pendingAudioQueue.forEach(resumeFunction => {
      try {
        resumeFunction();
      } catch (e) {
        console.log('恢復音效失敗:', e);
      }
    });
    this.pendingAudioQueue = [];
  },

  // 顯示對話框（包含頭像）
  showDialogueBox(message, characterName, avatarPath, playVoice = false) {
    // 移除現有的對話框
    const existingDialogue = document.getElementById('character-dialogue-box');
    if (existingDialogue) {
      existingDialogue.remove();
    }

    // 創建漫畫風格對話泡泡
    const dialogueBox = document.createElement('div');
    dialogueBox.id = 'character-dialogue-box';
    
    // 響應式設計：根據螢幕寬度調整樣式
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
    
    const mobileStyles = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      border: 3px solid #333;
      border-radius: 20px;
      padding: 20px;
      max-width: 85vw;
      width: auto;
      z-index: 10000;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,255,255,0.8);
      animation: bubbleAppear 0.5s ease-out;
      font-family: 'Comic Sans MS', 'Noto Sans TC', 'Microsoft JhengHei', Arial, sans-serif;
      position: relative;
    `;
    
    const tabletStyles = `
      position: fixed;
      top: 15px;
      right: 15px;
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      border: 3.5px solid #333;
      border-radius: 24px;
      padding: 28px;
      max-width: 70vw;
      width: auto;
      z-index: 10000;
      box-shadow: 0 5px 26px rgba(0, 0, 0, 0.31), 0 0 0 1.5px rgba(255,255,255,0.8);
      animation: bubbleAppear 0.5s ease-out;
      font-family: 'Comic Sans MS', 'Noto Sans TC', 'Microsoft JhengHei', Arial, sans-serif;
      position: relative;
    `;
    
    const desktopStyles = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      border: 3.5px solid #333;
      border-radius: 28px;
      padding: 36px;
      max-width: 450px;
      width: auto;
      z-index: 10000;
      box-shadow: 0 6px 32px rgba(0, 0, 0, 0.32), 0 0 0 2px rgba(255,255,255,0.8);
      animation: bubbleAppear 0.5s ease-out;
      font-family: 'Comic Sans MS', 'Noto Sans TC', 'Microsoft JhengHei', Arial, sans-serif;
      position: relative;
    `;
    
    dialogueBox.style.cssText = isMobile ? mobileStyles : (isTablet ? tabletStyles : desktopStyles);

    // 添加對話泡泡尾巴（響應式）
    const bubbleTail = document.createElement('div');
    const tailSize = isMobile ? 20 : (isTablet ? 26 : 32);
    bubbleTail.style.cssText = `
      position: absolute;
      bottom: ${isMobile ? 15 : (isTablet ? 20 : 25)}px;
      right: -${tailSize}px;
      width: 0;
      height: 0;
      border-top: ${tailSize}px solid transparent;
      border-bottom: ${tailSize}px solid transparent;
      border-left: ${tailSize}px solid #f8f9fa;
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
    `;
    dialogueBox.appendChild(bubbleTail);

    // 添加角色頭像（響應式）
    const avatarElement = document.createElement('div');
    const avatarSize = isMobile ? 60 : (isTablet ? 80 : 100);
    const avatarMargin = isMobile ? 10 : (isTablet ? 15 : 20);
    avatarElement.style.cssText = `
      position: absolute;
      top: 50%;
      right: -${avatarSize + avatarMargin}px;
      transform: translateY(-50%);
      width: ${avatarSize}px;
      height: ${avatarSize}px;
      border-radius: 50%;
      border: ${isMobile ? 3 : 4}px solid #333;
      box-shadow: 0 4px 18px rgba(0,0,0,0.32);
      overflow: hidden;
      background: #fff;
      z-index: 10001;
      animation: avatarBounce 2s ease-in-out infinite;
    `;

    const avatarImg = document.createElement('img');
    avatarImg.src = avatarPath || 'img/avatars/avatar_TL.png';
    avatarImg.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    `;
    avatarImg.onerror = function() {
      this.src = 'img/avatars/avatar_TL.png';
    };
    avatarElement.appendChild(avatarImg);

    // 對話內容（響應式字體大小）
    const messageElement = document.createElement('div');
    const fontSize = isMobile ? '1rem' : (isTablet ? '1.2rem' : '1.35rem');
    const lineHeight = isMobile ? '1.4' : (isTablet ? '1.6' : '1.7');
    messageElement.style.cssText = `
      font-size: ${fontSize};
      color: #333;
      line-height: ${lineHeight};
      text-align: center;
      font-weight: bold;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;
    messageElement.textContent = message;

    // 添加動畫樣式
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bubbleAppear {
        from {
          opacity: 0;
          transform: translateX(100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes bubbleDisappear {
        from {
          opacity: 1;
          transform: translateX(0);
        }
        to {
          opacity: 0;
          transform: translateX(100px);
        }
      }
      
      @keyframes textGlow {
        0% { text-shadow: 0 0 5px #ffd700; }
        50% { text-shadow: 0 0 20px #ffd700, 0 0 30px #ff6b6b; }
        100% { text-shadow: 0 0 5px #ffd700; }
      }
      
      @keyframes avatarBounce {
        0%, 100% { transform: translateY(-50%) translateX(0); }
        50% { transform: translateY(-50%) translateX(-3px); }
      }
    `;
    document.head.appendChild(style);

    // 組裝對話泡泡
    dialogueBox.appendChild(messageElement);
    dialogueBox.appendChild(avatarElement);

    // 添加到頁面
    document.body.appendChild(dialogueBox);

    // 添加視窗大小變化監聽器（響應式調整）
    const resizeHandler = () => {
      const newIsMobile = window.innerWidth <= 768;
      const newIsTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
      const newIsDesktop = window.innerWidth > 1024;
      
      const currentIsMobile = dialogueBox.style.right === '10px';
      const currentIsTablet = dialogueBox.style.right === '15px';
      const currentIsDesktop = dialogueBox.style.right === '20px';
      
      // 如果螢幕尺寸發生變化，重新調整樣式
      if ((newIsMobile && !currentIsMobile) || (newIsTablet && !currentIsTablet) || (newIsDesktop && !currentIsDesktop)) {
        const newStyles = newIsMobile ? mobileStyles : (newIsTablet ? tabletStyles : desktopStyles);
        dialogueBox.style.cssText = newStyles;
        
        // 重新調整尾巴和頭像
        const newTailSize = newIsMobile ? 20 : (newIsTablet ? 26 : 32);
        const newAvatarSize = newIsMobile ? 60 : (newIsTablet ? 80 : 100);
        const newAvatarMargin = newIsMobile ? 10 : (newIsTablet ? 15 : 20);
        const newFontSize = newIsMobile ? '1rem' : (newIsTablet ? '1.2rem' : '1.35rem');
        const newLineHeight = newIsMobile ? '1.4' : (newIsTablet ? '1.6' : '1.7');
        
        // 更新尾巴
        const tail = dialogueBox.querySelector('div:first-child');
        if (tail) {
          tail.style.cssText = `
            position: absolute;
            bottom: ${newIsMobile ? 15 : (newIsTablet ? 20 : 25)}px;
            right: -${newTailSize}px;
            width: 0;
            height: 0;
            border-top: ${newTailSize}px solid transparent;
            border-bottom: ${newTailSize}px solid transparent;
            border-left: ${newTailSize}px solid #f8f9fa;
            filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
          `;
        }
        
        // 更新頭像
        const avatar = dialogueBox.querySelector('div:last-child');
        if (avatar) {
          avatar.style.cssText = `
            position: absolute;
            top: 50%;
            right: -${newAvatarSize + newAvatarMargin}px;
            transform: translateY(-50%);
            width: ${newAvatarSize}px;
            height: ${newAvatarSize}px;
            border-radius: 50%;
            border: ${newIsMobile ? 3 : 4}px solid #333;
            box-shadow: 0 4px 18px rgba(0,0,0,0.32);
            overflow: hidden;
            background: #fff;
            z-index: 10001;
            animation: avatarBounce 2s ease-in-out infinite;
          `;
        }
        
        // 更新文字
        const message = dialogueBox.querySelector('div:nth-child(2)');
        if (message) {
          message.style.fontSize = newFontSize;
          message.style.lineHeight = newLineHeight;
        }
      }
    };
    
    window.addEventListener('resize', resizeHandler);
    
    // 在對話框移除時清理監聽器
    const originalHideDialogueBox = this.hideDialogueBox;
    this.hideDialogueBox = function() {
      window.removeEventListener('resize', resizeHandler);
      originalHideDialogueBox.call(this);
    };

    // 語音播放功能已移除

    // 5秒後自動隱藏對話框
    setTimeout(() => {
      this.hideDialogueBox();
    }, 5000);
  },

  // 隱藏對話框
  hideDialogueBox() {
    const dialogueBox = document.getElementById('character-dialogue-box');
    if (dialogueBox) {
      dialogueBox.style.animation = 'bubbleDisappear 0.3s ease-out';
      setTimeout(() => {
        dialogueBox.remove();
      }, 300);
    }
  },

  // 播放角色語音功能已移除
  playCharacterVoice(message) {
    // 語音功能已移除，只恢復音效
    this.resumeAllAudio();
  },

  // 顯示鼓勵對話
  showEncouragement() {
    const character = this.dialogues[this.currentCharacter];
    if (!character) return;

    const encouragements = character.encouragements;
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    
    this.showDialogueBox(randomEncouragement, character.name, character.avatar, false);
  },

  // 顯示勝利對話
  showVictoryDialogue() {
    const character = this.dialogues[this.currentCharacter];
    if (!character) return;

    const victories = character.victories;
    const randomVictory = victories[Math.floor(Math.random() * victories.length)];
    
    this.showDialogueBox(randomVictory, character.name, character.avatar, false);
  },

  // 顯示失敗對話
  showDefeatDialogue() {
    const character = this.dialogues[this.currentCharacter];
    if (!character) return;

    const defeats = character.defeats;
    const randomDefeat = defeats[Math.floor(Math.random() * defeats.length)];
    
    this.showDialogueBox(randomDefeat, character.name, character.avatar, false);
  },

  // 顯示有趣回應
  showFunResponse(character) {
    const funResponses = {
      warrior: [
        "😄 哈哈！看到你這麼開心，我也充滿了力量！",
        "🎉 哇！你的笑容比我的劍還閃亮！",
        "🤗 來個戰士的擁抱吧！你真是太棒了！",
        "🎊 你的快樂感染了我！讓我們一起歡呼！"
      ],
      speedster: [
        "⚡ 哇！你的快樂比閃電還快！",
        "😆 哈哈！你的笑容讓我跑得更快了！",
        "🎈 你的開心讓我想要飛起來！",
        "🌟 你的快樂光芒四射！太棒了！"
      ],
      defender: [
        "🛡️ 哇！你的快樂讓我的防禦力更強了！",
        "😊 哈哈！你的笑容讓我感到無比安心！",
        "🤗 來個堅固的擁抱！你真是太可愛了！",
        "🎉 你的快樂讓我的堡壘更溫暖了！"
      ],
      sharpshooter: [
        "🎯 哇！你的快樂讓我瞄準得更準了！",
        "😄 哈哈！你的笑容讓我百發百中！",
        "🌟 你的快樂光芒讓我更專注！",
        "🎊 你的開心讓我想要射出一支快樂之箭！"
      ],
      explorer: [
        "🚀 哇！你的快樂讓我想要探索更多！",
        "😆 哈哈！你的笑容讓我發現了新大陸！",
        "🌌 你的快樂讓我想要飛向宇宙！",
        "🎈 你的開心讓我想要探索快樂的奧秘！"
      ],
      magician: [
        "🌈 哇！你的快樂讓我想要施展更多魔法！",
        "✨ 哈哈！你的笑容讓我創造了快樂奇蹟！",
        "🌟 你的快樂讓我想要變出更多星星！",
        "🎊 你的開心讓我想要施展快樂魔法！"
      ],
      fairy: [
        "🌸 哇！你的快樂讓我想要散播更多美好！",
        "🌺 哈哈！你的笑容讓我綻放了更多花朵！",
        "🌼 你的快樂讓我想要創造更多溫馨！",
        "🎉 你的開心讓我想要散播快樂的種子！"
      ]
    };

    const responses = funResponses[character.name] || funResponses.warrior;
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    // 更新現有對話框的內容
    const dialogueBox = document.getElementById('character-dialogue-box');
    if (dialogueBox) {
      const messageElement = dialogueBox.querySelector('div');
      if (messageElement) {
        messageElement.textContent = randomResponse;
        messageElement.style.animation = 'none';
        setTimeout(() => {
          messageElement.style.animation = 'textGlow 0.5s ease-in-out';
        }, 10);
      }
    }
  },

  // 講笑話功能
  tellJoke(character) {
    const jokes = {
      warrior: [
        "😄 為什麼戰士不喜歡穿拖鞋？因為他們喜歡穿戰靴！",
        "🤣 戰士去餐廳點菜，服務員問：要什麼？戰士說：我要戰鬥！服務員：這裡是餐廳...",
        "😆 戰士的劍為什麼總是閃閃發亮？因為它每天都在練習反光！",
        "😂 戰士去理髮店，理髮師問：要什麼髮型？戰士說：要一個戰鬥髮型！",
        "😊 戰士為什麼不喜歡下雨？因為他的劍會生鏽，而且他沒有雨傘！"
      ],
      speedster: [
        "⚡ 為什麼閃電戰士不遲到？因為他跑得太快了，時間都追不上他！",
        "😄 閃電戰士去超市，收銀員說：請排隊。閃電戰士：我已經排完了！",
        "🤣 閃電戰士為什麼不坐電梯？因為他覺得電梯太慢了！",
        "😆 閃電戰士去電影院，電影還沒開始他就看完了！",
        "😂 閃電戰士為什麼不戴手錶？因為時間跟不上他的速度！"
      ],
      defender: [
        "🛡️ 為什麼防禦戰士不感冒？因為他的防禦力太強了！",
        "😄 防禦戰士去醫院，醫生說：你生病了。防禦戰士：不可能，我有防禦力！",
        "🤣 防禦戰士為什麼不穿薄衣服？因為他覺得不安全！",
        "😆 防禦戰士去游泳，他說：我要穿著盔甲游泳！",
        "😂 防禦戰士為什麼不坐過山車？因為他覺得太危險了！"
      ],
      sharpshooter: [
        "🎯 為什麼精準射手不玩飛鏢？因為他覺得太簡單了！",
        "😄 精準射手去射箭，他說：我要閉著眼睛射！",
        "🤣 精準射手為什麼不戴眼鏡？因為他覺得會影響準確度！",
        "😆 精準射手去打靶，他說：我要射中靶心！結果射中了！",
        "😂 精準射手為什麼不玩保齡球？因為他覺得球太大了！"
      ],
      explorer: [
        "🚀 為什麼探險家不迷路？因為他總是能找到新路！",
        "😄 探險家去公園，他說：我要探索這個未知的公園！",
        "🤣 探險家為什麼不坐計程車？因為他喜歡走路探索！",
        "😆 探險家去超市，他說：我要探索這個神秘的超市！",
        "😂 探險家為什麼不待在家？因為他覺得家裡太無聊了！"
      ],
      magician: [
        "🌈 為什麼魔法師不變錢？因為他覺得變錢太俗了！",
        "😄 魔法師去變魔術，他說：我要把這個蘋果變成橘子！",
        "🤣 魔法師為什麼不變出食物？因為他覺得變食物太浪費魔法了！",
        "😆 魔法師去表演，他說：我要把觀眾變成兔子！",
        "😂 魔法師為什麼不變出房子？因為他覺得變房子太累了！"
      ],
      fairy: [
        "🌸 為什麼櫻花精靈不生氣？因為她太溫柔了！",
        "😄 櫻花精靈去散花，她說：我要讓全世界都開滿花！",
        "🤣 櫻花精靈為什麼不穿黑色衣服？因為她覺得黑色不溫柔！",
        "😆 櫻花精靈去唱歌，她說：我要用溫柔的聲音唱歌！",
        "😂 櫻花精靈為什麼不跑步？因為她覺得跑步太粗魯了！"
      ]
    };

    const characterJokes = jokes[character.name] || jokes.warrior;
    const randomJoke = characterJokes[Math.floor(Math.random() * characterJokes.length)];
    
    this.updateDialogueMessage(randomJoke);
  },

  // 自言自語功能
  showMonologue(character) {
    const monologues = {
      warrior: [
        "🤔 嗯...今天我的劍好像有點鈍了，要不要去磨一下呢？",
        "💭 我在想，為什麼我的盔甲總是這麼重呢？",
        "🤷‍♂️ 有時候我在想，我是不是太認真了？",
        "😌 今天天氣真好，適合出去戰鬥！",
        "🧐 我在想，我的劍法是不是需要改進一下？"
      ],
      speedster: [
        "🤔 嗯...我今天跑得好像比昨天快了一點點！",
        "💭 我在想，為什麼別人總是跟不上我的速度呢？",
        "🤷‍♂️ 有時候我在想，我是不是跑得太快了？",
        "😌 今天感覺特別有活力，想要跑遍全世界！",
        "🧐 我在想，我的速度是不是還可以再快一點？"
      ],
      defender: [
        "🤔 嗯...我的防禦力好像又增強了！",
        "💭 我在想，為什麼別人總是打不破我的防禦呢？",
        "🤷‍♂️ 有時候我在想，我是不是太保守了？",
        "😌 今天感覺特別安全，想要保護所有人！",
        "🧐 我在想，我的防禦是不是還可以再強一點？"
      ],
      sharpshooter: [
        "🤔 嗯...我今天瞄準得好像特別準！",
        "💭 我在想，為什麼我的箭總是能命中目標呢？",
        "🤷‍♂️ 有時候我在想，我是不是太專注了？",
        "😌 今天感覺特別準確，想要射中所有目標！",
        "🧐 我在想，我的準確度是不是還可以再提高一點？"
      ],
      explorer: [
        "🤔 嗯...今天我想探索什麼新地方呢？",
        "💭 我在想，這個世界上還有多少地方我沒有去過呢？",
        "🤷‍♂️ 有時候我在想，我是不是太好奇了？",
        "😌 今天感覺特別好奇，想要發現新大陸！",
        "🧐 我在想，我是不是應該去探索更遠的地方？"
      ],
      magician: [
        "🤔 嗯...今天我想施展什麼魔法呢？",
        "💭 我在想，我的魔法是不是越來越強了？",
        "🤷‍♂️ 有時候我在想，我是不是太愛變魔術了？",
        "😌 今天感覺特別有魔力，想要創造奇蹟！",
        "🧐 我在想，我是不是應該學習新的魔法？"
      ],
      fairy: [
        "🤔 嗯...今天我想散播什麼美好呢？",
        "💭 我在想，為什麼我總是這麼溫柔呢？",
        "🤷‍♂️ 有時候我在想，我是不是太善良了？",
        "😌 今天感覺特別溫柔，想要讓世界更美好！",
        "🧐 我在想，我是不是應該散播更多美好？"
      ]
    };

    const characterMonologues = monologues[character.name] || monologues.warrior;
    const randomMonologue = characterMonologues[Math.floor(Math.random() * characterMonologues.length)];
    
    this.updateDialogueMessage(randomMonologue);
  },

  // 更新對話框消息的通用方法
  updateDialogueMessage(message) {
    const dialogueBox = document.getElementById('character-dialogue-box');
    if (dialogueBox) {
      const messageElement = dialogueBox.querySelector('div');
      if (messageElement) {
        messageElement.textContent = message;
        messageElement.style.animation = 'none';
        setTimeout(() => {
          messageElement.style.animation = 'textGlow 0.5s ease-in-out';
        }, 10);
      }
    }
  },

  // 自動自言自語功能
  startAutoMonologue() {
    // 每30-90秒隨機說笑話或自言自語一次
    setInterval(() => {
      const chance = Math.random();
      if (chance < 0.6) { // 60%機率
        const character = this.dialogues[this.currentCharacter];
        if (character && !document.getElementById('character-dialogue-box')) {
          // 隨機選擇說笑話或自言自語
          const action = Math.random() < 0.5 ? 'joke' : 'monologue';
          if (action === 'joke') {
            this.showRandomJoke(character);
          } else {
            this.showRandomMonologue(character);
          }
        }
      }
    }, 30000 + Math.random() * 60000); // 30-90秒
  },

  // 顯示隨機自言自語
  showRandomMonologue(character) {
    const randomMonologues = [
      "🤔 嗯...我在想今天要不要去冒險呢？",
      "💭 不知道我的主人今天過得怎麼樣？",
      "😌 今天天氣真好，適合出去走走！",
      "🧐 我在想，我是不是應該學習新技能？",
      "🤷‍♂️ 有時候我在想，我是不是太可愛了？",
      "😊 今天感覺特別有活力！",
      "🌟 我在想，我是不是應該做點什麼有趣的事情？",
      "💫 不知道今天會發生什麼有趣的事情呢？",
      "🎮 我在想，我的主人是不是在玩遊戲？",
      "📚 不知道我的主人今天學了什麼新知識？",
      "⭐ 我在想，我的主人今天獲得了多少星星？",
      "🎯 不知道我的主人今天挑戰了什麼關卡？",
      "🎵 嗯...要不要唱首歌呢？",
      "🎨 我在想，我是不是應該畫個畫？",
      "🍕 突然好想吃披薩...",
      "🌙 今天月亮好圓啊！",
      "🌈 我在想，彩虹是什麼味道的？",
      "🎪 要不要去馬戲團看看？",
      "🏰 我在想，城堡裡有什麼寶藏？",
      "🚀 要不要去太空旅行？",
      "🐉 我在想，龍是不是真的存在？",
      "🎭 要不要演個戲？",
      "🎪 我在想，我是不是應該去表演魔術？",
      "🌺 這些花好漂亮啊！",
      "🎊 今天感覺特別想慶祝！"
    ];

    const randomMessage = randomMonologues[Math.floor(Math.random() * randomMonologues.length)];
    this.showDialogueBox(randomMessage, character.name, character.avatar, false);
  },

  // 顯示隨機笑話
  showRandomJoke(character) {
    const allJokes = [
      "😄 為什麼戰士不喜歡穿拖鞋？因為他們喜歡穿戰靴！",
      "🤣 戰士去餐廳點菜，服務員問：要什麼？戰士說：我要戰鬥！服務員：這裡是餐廳...",
      "⚡ 為什麼閃電戰士不遲到？因為他跑得太快了，時間都追不上他！",
      "😄 閃電戰士去超市，收銀員說：請排隊。閃電戰士：我已經排完了！",
      "🛡️ 為什麼防禦戰士不感冒？因為他的防禦力太強了！",
      "😄 防禦戰士去醫院，醫生說：你生病了。防禦戰士：不可能，我有防禦力！",
      "🎯 為什麼精準射手不玩飛鏢？因為他覺得太簡單了！",
      "😄 精準射手去射箭，他說：我要閉著眼睛射！",
      "🚀 為什麼探險家不迷路？因為他總是能找到新路！",
      "😄 探險家去公園，他說：我要探索這個未知的公園！",
      "🌈 為什麼魔法師不變錢？因為他覺得變錢太俗了！",
      "😄 魔法師去變魔術，他說：我要把這個蘋果變成橘子！",
      "🌸 為什麼櫻花精靈不生氣？因為她太溫柔了！",
      "😄 櫻花精靈去散花，她說：我要讓全世界都開滿花！",
      "🎮 為什麼遊戲角色不睡覺？因為他們要24小時陪著玩家！",
      "😆 為什麼我的劍總是閃閃發亮？因為它每天都在練習反光！",
      "😂 為什麼我不喜歡下雨？因為我的裝備會濕掉！",
      "🤣 為什麼我總是這麼可愛？因為這是我的設定！",
      "😊 為什麼我喜歡自言自語？因為沒有人陪我聊天！",
      "🎉 為什麼我總是這麼開心？因為我的主人很厲害！",
      "📚 為什麼單字總是記不住？因為它們太調皮了！",
      "🎯 為什麼填空題這麼難？因為空格太多，字太少！",
      "⭐ 為什麼星星這麼難獲得？因為它們在天上太高了！",
      "🏆 為什麼成就這麼難達成？因為它們太珍貴了！",
      "🎮 為什麼遊戲這麼好玩？因為有我在陪你！",
      "💬 為什麼我要說笑話？因為我想讓你開心！",
      "🌟 為什麼我總是發光？因為我有正能量！"
    ];

    const randomJoke = allJokes[Math.floor(Math.random() * allJokes.length)];
    this.showDialogueBox(randomJoke, character.name, character.avatar, false);
  },

  // 根據玩家操作做出反應
  reactToPlayerAction(action) {
    const character = this.dialogues[this.currentCharacter];
    if (!character) return;

    const reactions = {
      'game_start': [
        "🎮 哇！你要開始遊戲了！加油！",
        "🚀 遊戲開始！我來為你加油！",
        "⚡ 準備好了嗎？讓我們開始吧！",
        "🌟 遊戲時間！我來支持你！"
      ],
      'game_win': [
        "🏆 太棒了！你贏了！",
        "🎉 恭喜你！真是厲害！",
        "🌟 哇！你真是太強了！",
        "👏 完美！你做得很好！"
      ],
      'game_lose': [
        "💪 沒關係！下次會更好！",
        "🛡️ 失敗是成功之母！",
        "🌟 別灰心！我相信你！",
        "😊 休息一下，然後再試一次！"
      ],
      'achievement': [
        "🏆 哇！你獲得成就了！",
        "🌟 太厲害了！恭喜你！",
        "🎊 成就達成！你真是太棒了！",
        "👑 哇！你越來越強了！"
      ]
    };

    const actionReactions = reactions[action] || reactions['game_start'];
    const randomReaction = actionReactions[Math.floor(Math.random() * actionReactions.length)];
    
    this.showDialogueBox(randomReaction, character.name, character.avatar, false);
  },

  // 顯示關卡專屬對話
  showStageDialogue(type = 'start') {
    const character = this.dialogues[this.currentCharacter];
    if (!character || !character.stageDialogues) return;
    const arr = character.stageDialogues[type] || character.stageDialogues.start;
    const msg = arr[Math.floor(Math.random() * arr.length)] || '加油！';
    this.showDialogueBox(msg, character.name, character.avatar, false);
  },

  // 顯示抽卡專屬對話
  showGachaDialogue(type = 'draw') {
    const character = this.dialogues[this.currentCharacter];
    if (!character || !character.gachaDialogues) return;
    const arr = character.gachaDialogues[type] || character.gachaDialogues.draw;
    const msg = arr[Math.floor(Math.random() * arr.length)] || '祝你好運！';
    this.showDialogueBox(msg, character.name, character.avatar, false);
  }
};

  // 頁面載入時初始化對話系統
  document.addEventListener('DOMContentLoaded', function() {
    // 延遲一點時間確保其他系統都已載入
    setTimeout(() => {
      CharacterDialogue.init();
      // 啟動自動自言自語功能
      CharacterDialogue.startAutoMonologue();
    }, 1000);
  });

// 導出到全局
window.CharacterDialogue = CharacterDialogue;
