// 音效系統
const SoundSystem = {
  // 音效控制
  audio: {
    // 背景音樂
    background: null,
    // 音效
    click: null,
    correct: null,
    wrong: null,
    complete: null,
    type: null
  },

  // 音效元素
  elements: {
    click: new Audio('sound/click.mp3'),
    type: new Audio('sound/type.mp3'),
    correct: new Audio('sound/correct.mp3'),
    wrong: new Audio('sound/wrong.mp3'),
    unlock: new Audio('sound/unlock.mp3'),
    draw: new Audio('sound/draw.wav.mp3'),
    bgm: new Audio('sound/午後放鬆時光（純音樂）.mp3'),
    levelStart: new Audio('sound/click.mp3'),
    levelComplete: new Audio('sound/happy-logoversion-3-13398.mp3')
  },

  // 背景音樂控制
  bgm: {
    isPlaying: false,
    volume: 0.3, // 背景音樂音量
    globalAudio: null, // 全域背景音樂實例

    // 初始化全域背景音樂
    initGlobalAudio() {
      // 檢查是否已經存在全域背景音樂
      if (!this.globalAudio) {
        this.globalAudio = new Audio('sound/午後放鬆時光（純音樂）.mp3');
        this.globalAudio.loop = true;
        this.globalAudio.volume = this.volume;
        
        // 從localStorage讀取音樂狀態
        const musicState = localStorage.getItem('bgMusicState');
        // 不自動播放，等待用戶主動開啟
        // if (musicState === 'playing') {
        //   this.play();
        // }
        
        // 監聽音樂結束事件，確保循環播放
        this.globalAudio.addEventListener('ended', () => {
          if (this.isPlaying) {
            this.globalAudio.currentTime = 0;
            this.globalAudio.play().catch(() => {});
          }
        });
      }
    },

    // 播放背景音樂
    play() {
      this.initGlobalAudio();
      if (!this.isPlaying && this.globalAudio) {
        this.globalAudio.play().then(() => {
          this.isPlaying = true;
          localStorage.setItem('bgMusicState', 'playing');
          this.updateAllControls();
        }).catch(err => {
          console.log('背景音樂播放失敗:', err);
        });
      }
    },

    // 暫停背景音樂
    pause() {
      if (this.isPlaying && this.globalAudio) {
        this.globalAudio.pause();
        this.isPlaying = false;
        localStorage.setItem('bgMusicState', 'paused');
        this.updateAllControls();
      }
    },

    // 切換背景音樂播放狀態
    toggle() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    },

    // 設置音量
    setVolume(volume) {
      this.volume = volume;
      if (this.globalAudio) {
        this.globalAudio.volume = volume;
      }
      localStorage.setItem('musicVolume', volume.toString());
    },

    // 更新所有音樂控制按鈕
    updateAllControls() {
      const controls = [
        document.getElementById('bgmControl'),
        document.getElementById('bgMusicControl'),
        document.getElementById('toggleMusic'),
        document.getElementById('musicToggle')
      ];
      
      controls.forEach(control => {
        if (control) {
          if (this.isPlaying) {
            control.textContent = '🔊';
            control.classList.remove('paused');
          } else {
            control.textContent = '🔇';
            control.classList.add('paused');
          }
        }
      });
    },

    // 獲取當前播放狀態
    getPlayingState() {
      return this.isPlaying;
    },

    // 獲取音量
    getVolume() {
      return this.volume;
    }
  },

  // 發音系統
  speech: {
    preferredVoice: null,
    isInitialized: false,

    // 初始化發音系統
    init() {
      if (this.isInitialized) {
        console.log('語音系統已初始化');
        return;
      }
      
      console.log('🔧 初始化語音系統...');
      
      // 檢查瀏覽器支援
      if (!window.speechSynthesis) {
        console.error('❌ 瀏覽器不支援語音合成');
        return;
      }
      
      // 等待語音載入
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => {
          console.log('🎤 語音列表已載入');
          this.selectBestVoice();
        };
      }
      
      // 立即嘗試選擇語音
      this.selectBestVoice();
      
      // 如果沒有立即找到語音，延遲重試
      if (!this.preferredVoice) {
        setTimeout(() => {
          console.log('🔄 延遲重試選擇語音...');
          this.selectBestVoice();
        }, 1000);
        
        setTimeout(() => {
          if (!this.preferredVoice) {
            console.log('🔄 再次重試選擇語音...');
            this.selectBestVoice();
          }
        }, 3000);
      }
      
      this.isInitialized = true;
      console.log('✅ 語音系統初始化完成');
    },

    // 選擇最佳美式語音
    selectBestVoice() {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) {
        console.warn('沒有可用的語音');
        return;
      }

      console.log(`找到 ${voices.length} 個可用語音`);

      // 針對美式英語做「品質打分」挑選：優先 Natural/Neural/Enhanced/Google/Microsoft Online
      const scoreVoice = (v) => {
        const name = (v && v.name ? v.name : '').toLowerCase();
        const lang = (v && v.lang ? v.lang : '').toLowerCase();
        let score = 0;

        if (lang.startsWith('en-us')) score += 1000;
        if (name.includes('natural')) score += 250;
        if (name.includes('neural')) score += 220;
        if (name.includes('enhanced')) score += 180;
        if (name.includes('online')) score += 160;
        if (name.includes('google')) score += 140;
        if (name.includes('microsoft')) score += 120;

        // 常見偏好（不同系統會有不同命名）
        if (name.includes('aria')) score += 40;
        if (name.includes('jenny')) score += 40;
        if (name.includes('samantha')) score += 30;
        if (name.includes('alex')) score += 20;

        // 不優先 Desktop（通常比較機器感）
        if (name.includes('desktop')) score -= 40;

        // localService 通常可用，但品質不一定；先小幅加分，避免完全排除
        if (v && v.localService) score += 10;

        return score;
      };

      const usVoices = voices.filter(v => (v.lang || '').toLowerCase().startsWith('en-us'));
      if (usVoices.length > 0) {
        usVoices.sort((a, b) => scoreVoice(b) - scoreVoice(a));
        this.preferredVoice = usVoices[0];
        console.log(`✅ 選擇美式語音: ${this.preferredVoice.name}`);
        return;
      }

      // 優先選擇高品質的中文語音
      const preferredChineseVoices = [
        'Google 國語（台灣）',
        'Microsoft Yunxi Online',
        'Microsoft Yunyang Online',
        'Microsoft Yunxi Online (Neural)',
        'Microsoft Yunyang Online (Neural)',
        'zh-TW-Standard-A', // Google Cloud TTS
        'zh-TW-Standard-B', // Google Cloud TTS
        'zh-TW-Standard-C', // Google Cloud TTS
        'zh-TW-Standard-D',  // Google Cloud TTS
        'zh-TW-Neural2-A',   // Google Cloud Neural TTS
        'zh-TW-Neural2-B',   // Google Cloud Neural TTS
        'zh-TW-Neural2-C',   // Google Cloud Neural TTS
        'zh-TW-Neural2-D'    // Google Cloud Neural TTS
      ];

      // 1. 尋找偏好列表中的中文語音
      for (const name of preferredChineseVoices) {
        const voice = voices.find(v => v.name === name && v.lang.startsWith('zh-TW'));
        if (voice) {
          this.preferredVoice = voice;
          console.log(`✅ 選擇中文語音: ${voice.name}`);
          return;
        }
      }

      // 2. 備用：尋找任何本地的美式英語語音
      const localVoice = voices.find(v => v.lang.startsWith('en-US') && v.localService);
      if (localVoice) {
        this.preferredVoice = localVoice;
        console.log(`✅ 選擇本地美式語音: ${localVoice.name}`);
        return;
      }

      // 3. 備用：尋找任何本地的中文語音
      const localChineseVoice = voices.find(v => v.lang.startsWith('zh-TW') && v.localService);
      if (localChineseVoice) {
        this.preferredVoice = localChineseVoice;
        console.log(`✅ 選擇本地中文語音: ${localChineseVoice.name}`);
        return;
      }

      // 4. 最後備用：尋找任何美式英語語音
      const anyUSVoice = voices.find(v => v.lang.startsWith('en-US'));
      if (anyUSVoice) {
        this.preferredVoice = anyUSVoice;
        console.log(`✅ 選擇備用美式語音: ${anyUSVoice.name}`);
        return;
      }

      // 5. 最後備用：尋找任何中文語音
      const anyChineseVoice = voices.find(v => v.lang.startsWith('zh-TW'));
      if (anyChineseVoice) {
        this.preferredVoice = anyChineseVoice;
        console.log(`✅ 選擇備用中文語音: ${anyChineseVoice.name}`);
        return;
      }

      // 6. 如果都沒有，選擇第一個可用的語音
      if (voices.length > 0) {
        this.preferredVoice = voices[0];
        console.log(`⚠️ 選擇第一個可用語音: ${voices[0].name}`);
      } else {
        console.error('❌ 沒有可用的語音');
        this.preferredVoice = null;
      }
    },

    // 有感情的發音功能
    speak(text, options = {}) {
      if (!window.speechSynthesis || !text) {
        console.warn('speak: 語音合成不可用或文本為空', text);
        return;
      }

      // 溫和地停止之前的發音（如果有）
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        // 等待一個短暫的時間讓取消完成
        setTimeout(() => {
          this._performSpeak(text, options);
        }, 50);
        return;
      }

      this._performSpeak(text, options);
    },

    // 實際執行發音的方法
    _performSpeak(text, options) {
      // 清理文本，移除下劃線
      const cleanText = text.replace(/_/g, '');

      const utter = new SpeechSynthesisUtterance(cleanText);
      
      // 根據文字內容自動選擇語言
      const isChinese = /[\u4e00-\u9fff]/.test(cleanText);
      utter.lang = isChinese ? 'zh-TW' : 'en-US';
      
      // 根據文本長度調整語音參數
      const textLength = cleanText.length;
      let rate = options.rate || 0.9;
      let pitch = (typeof options.pitch === 'number') ? options.pitch : (isChinese ? 1.05 : 1.0);
      
      // 長文本需要更慢的速度
      if (textLength > 50) {
        rate = Math.max(0.7, rate * 0.9);
      } else if (textLength > 100) {
        rate = Math.max(0.6, rate * 0.8);
      }
      
      // 有感情的發音參數
      utter.rate = rate;
      utter.pitch = pitch;
      utter.volume = options.volume || 1.0;
      
      // 使用最佳語音
      if (this.preferredVoice) {
        // 檢查語音是否仍然可用
        const voices = window.speechSynthesis.getVoices();
        const voiceStillAvailable = voices.some(v => v.name === this.preferredVoice.name && v.lang === this.preferredVoice.lang);
        
        if (voiceStillAvailable) {
          utter.voice = this.preferredVoice;
        } else {
          // 如果偏好語音不可用，重新選擇
          console.warn('偏好語音不可用，重新選擇語音');
          this.selectBestVoice();
          if (this.preferredVoice) {
            utter.voice = this.preferredVoice;
          }
        }
      } else {
        // 如果沒有偏好語音，立即選擇一個
        this.selectBestVoice();
        if (this.preferredVoice) {
          utter.voice = this.preferredVoice;
        }
      }

      // 回調函數
      if (options.onStart) utter.onstart = options.onStart;
      if (options.onEnd) utter.onend = options.onEnd;

      // 統一的錯誤處理
      utter.onerror = (event) => {
        // 忽略中斷錯誤，這是正常的
        if (event.error === 'interrupted') {
          console.log('🔇 語音被中斷（正常情況）');
        } else {
          console.error('語音合成錯誤:', event);
        }
        
        if (options.onError) {
          options.onError(event);
        } else if (options.onEnd) {
          // 如果發生錯誤但沒有錯誤回調，執行結束回調以避免卡住
          options.onEnd();
        }
      };

      utter.onpause = () => {
        console.log('語音暫停');
      };

      utter.onresume = () => {
        console.log('語音恢復');
      };

      try {
        window.speechSynthesis.speak(utter);
      } catch (error) {
        console.error('語音合成系統錯誤:', error);
        if (options.onError) options.onError(error);
      }
    },

    // 單字發音（較慢，更清晰）
    speakWord(word, callback) {
      if (!word || typeof word !== 'string') {
        console.warn('speakWord: 無效的單字', word);
        if (callback) callback();
        return;
      }

      // 清理單字（保留連字號/撇號，避免影響發音，例如: "can't", "mother-in-law"）
      const cleanWord = word
        .trim()
        .replace(/_/g, '')
        .replace(/[^a-zA-Z\s\-']/g, '');
      
      if (!cleanWord) {
        console.warn('speakWord: 清理後的單字為空', word);
        if (callback) callback();
        return;
      }

      // 根據單字長度調整語音參數
      const wordLength = cleanWord.length;
      let rate = 0.9;
      let pitch = 1.0;
      
      // 長單字需要更慢的速度和更清晰的發音
      if (wordLength > 12) {
        rate = 0.78;
        pitch = 1.0;
      } else if (wordLength > 8) {
        rate = 0.84;
        pitch = 1.0;
      }

      // 嘗試發音，如果失敗則重試
      const attemptSpeak = (retryCount = 0) => {
        try {
          this.speak(cleanWord, {
            rate: rate,
            pitch: pitch,
            volume: 1.0,
            onStart: () => {
              console.log(`🔊 開始發音: "${cleanWord}" (原始: "${word}", 長度: ${wordLength}, 速度: ${rate})`);
            },
            onEnd: () => {
              console.log(`✅ 發音完成: "${cleanWord}"`);
              if (callback) callback();
            },
            onError: (error) => {
              // 忽略中斷錯誤，這是正常的
              if (error.error === 'interrupted') {
                console.log(`🔇 發音被中斷: "${cleanWord}"（正常情況）`);
                if (callback) callback();
                return;
              }
              
              console.error(`❌ 發音錯誤: "${cleanWord}"`, error);
              
              // 重試機制（最多重試2次）
              if (retryCount < 2) {
                console.log(`🔄 重試發音 (${retryCount + 1}/2): "${cleanWord}"`);
                setTimeout(() => {
                  attemptSpeak(retryCount + 1);
                }, 500);
              } else {
                console.error(`❌ 發音失敗，已重試 ${retryCount} 次: "${cleanWord}"`);
                if (callback) callback();
              }
            }
          });
        } catch (error) {
          console.error(`❌ 發音系統錯誤: "${cleanWord}"`, error);
          if (callback) callback();
        }
      };

      // 開始發音
      attemptSpeak();
    },

    // 句子發音（自然語調）
    speakSentence(sentence, callback) {
      this.speak(sentence, {
        rate: 0.8,
        pitch: 1.05,
        onEnd: callback
      });
    },

    // 問題發音（有節奏感）
    speakQuestion(question, callback) {
      this.speak(question, {
        rate: 0.9,
        pitch: 1.1,
        onEnd: callback
      });
    },

    // 答案發音（強調重點）
    speakAnswer(answer, callback) {
      this.speak(answer, {
        rate: 0.95,
        pitch: 1.2,
        onEnd: callback
      });
    },

    // 連續發音（問題+答案）
    speakQuestionAndAnswer(question, answer, callback) {
      this.speak(question, {
        rate: 0.9,
        pitch: 1.1,
        onEnd: () => {
          setTimeout(() => {
            this.speakAnswer(answer, callback);
          }, 300);
        }
      });
    },

    // 帶挖空的句子發音
    speakSentenceWithGap(sentence, gapWord, callback) {
      const sentenceWithGap = sentence.replace(new RegExp(escapeRegExp(gapWord), 'gi'), '...');
      
      this.speak(sentence, {
        rate: 0.9,
        pitch: 1.1,
        onEnd: () => {
          setTimeout(() => {
            this.speak(sentenceWithGap, {
              rate: 0.95,
              pitch: 1.05,
              onEnd: () => {
                setTimeout(() => {
                  this.speakAnswer(gapWord, callback);
                }, 350);
              }
            });
          }, 350);
        }
      });
    }
  },

  // 初始化
  init() {
    // 初始化音效元素
    this.audio.background = document.getElementById('backgroundMusic') || new Audio('sound/background.mp3');
    this.audio.click = document.getElementById('clickSound') || new Audio('sound/click.mp3');
    this.audio.correct = document.getElementById('correctSound') || new Audio('sound/correct.mp3');
    this.audio.wrong = document.getElementById('wrongSound') || new Audio('sound/wrong.mp3');
            this.audio.complete = document.getElementById('completeSound') || new Audio('sound/unlock.mp3'); // 使用 unlock.mp3 替代不存在的 completeSound.mp3
    this.audio.type = document.getElementById('typeSound') || new Audio('sound/type.mp3');

    // 設定音量
    Object.values(this.audio).forEach(audio => {
      if (audio) {
        audio.volume = 0.3;
      }
    });

    // 初始化背景音樂系統
    this.bgm.initGlobalAudio();
    
    // 從localStorage讀取音量設定
    const savedVolume = localStorage.getItem('musicVolume');
    if (savedVolume) {
      this.bgm.setVolume(parseFloat(savedVolume));
    }

    // 初始化發音系統
    this.speech.init();

    // 為所有輸入框添加打字音效
    this.addTypeSoundToInputs();

    // 添加背景音樂控制按鈕
    this.addBgmControls();
    
    // 更新所有控制按鈕狀態
    this.bgm.updateAllControls();
  },

  // 播放音效
  play(soundName) {
    const audio = this.audio[soundName];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(e => console.log('音效播放失敗:', e));
    }
  },

  // 為元素添加點擊音效
  addClickSound(element) {
    if (element) {
      element.addEventListener('click', () => this.play('click'));
    }
  },

  // 為多個元素添加點擊音效
  addClickSoundToElements(elements) {
    if (elements) {
      elements.forEach(element => this.addClickSound(element));
    }
  },

  // 為輸入框添加打字音效
  addTypeSound(input) {
    if (input) {
      input.addEventListener('input', () => this.play('type'));
    }
  },

  // 為所有輸入框添加打字音效
  addTypeSoundToInputs() {
    // 為所有文字輸入框添加打字音效
    document.querySelectorAll('input[type="text"], textarea').forEach(input => {
      this.addTypeSound(input);
    });

    // 監聽動態新增的輸入框
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // 元素節點
            // 檢查新增的元素是否為輸入框
            if (node.matches('input[type="text"], textarea')) {
              this.addTypeSound(node);
            }
            // 檢查新增的元素內是否有輸入框
            node.querySelectorAll('input[type="text"], textarea').forEach(input => {
              this.addTypeSound(input);
            });
          }
        });
      });
    });

    // 開始觀察整個文檔
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  },

  // 添加背景音樂控制按鈕
  addBgmControls() {
    // 檢查是否已經存在控制按鈕
    if (document.getElementById('bgmControl')) {
      return;
    }
    
    // 創建背景音樂控制按鈕
    const bgmBtn = document.createElement('button');
    bgmBtn.id = 'bgmControl';
    bgmBtn.style.cssText = `
      position: fixed;
      bottom: 16px;
      right: 16px;
      z-index: 999;
      background: rgba(0,0,0,0.6);
      color: #fff;
      border: none;
      padding: 8px;
      border-radius: 50%;
      font-size: 1.2rem;
      cursor: pointer;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
      transition: all 0.3s ease;
    `;
    bgmBtn.textContent = '🔊';
    document.body.appendChild(bgmBtn);

    // 添加點擊事件
    bgmBtn.addEventListener('click', () => {
      this.bgm.toggle();
    });

    // 添加懸停效果
    bgmBtn.addEventListener('mouseenter', () => {
      bgmBtn.style.transform = 'scale(1.1)';
      bgmBtn.style.background = 'rgba(0,0,0,0.8)';
    });

    bgmBtn.addEventListener('mouseleave', () => {
      bgmBtn.style.transform = 'scale(1)';
      bgmBtn.style.background = 'rgba(0,0,0,0.6)';
    });
  }
};

// 輔助函數：轉義正則表達式特殊字符
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 星星獎勵系統已移至 starRewardSystem.js，請使用該檔案提供的 StarRewardSystem

// 初始化音效系統
document.addEventListener('DOMContentLoaded', () => {
  SoundSystem.init();
  
  // 為所有按鈕添加點擊音效
  SoundSystem.addClickSoundToElements(document.querySelectorAll('button'));
  
  // 為所有可點擊元素添加點擊音效
  SoundSystem.addClickSoundToElements(document.querySelectorAll('a, .card, .avatarSlide'));

  // 儲存背景音樂狀態
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('bgmPlaying', SoundSystem.bgm.isPlaying);
  });
});

// 初始化音效系統
if (typeof window !== 'undefined') {
  window.SoundSystem = SoundSystem;
}

// 文法關卡音效系統
const GrammarSoundSystem = {
  // 文法關卡音效元素
  elements: {
    correct: new Audio('sound/correct.mp3'),
    wrong: new Audio('sound/wrong.mp3'),
                complete: new Audio('sound/unlock.mp3'), // 使用 unlock.mp3 替代不存在的 completeSound.mp3
    star: new Audio('sound/shine.mp3'),
    achievement: new Audio('sound/unlock.mp3'),
    click: new Audio('sound/click.mp3'),
    type: new Audio('sound/type.mp3'),
    levelStart: new Audio('sound/click.mp3'),
    levelComplete: new Audio('sound/happy-logoversion-3-13398.mp3')
  },

  // 音效音量設置
  volume: {
    correct: 0.6,
    wrong: 0.4,
    complete: 0.7,
    star: 0.5,
    achievement: 0.6,
    click: 0.3,
    type: 0.2,
    levelStart: 0.4,
    levelComplete: 0.6
  },

  // 初始化文法音效系統
  init() {
    console.log('🎵 初始化文法關卡音效系統...');
    
    // 設置所有音效的音量
    Object.keys(this.elements).forEach(soundName => {
      if (this.elements[soundName] && this.volume[soundName]) {
        this.elements[soundName].volume = this.volume[soundName];
      }
    });

    // 預載入音效
    this.preloadSounds();
    
    console.log('✅ 文法關卡音效系統初始化完成');
  },

  // 預載入音效
  preloadSounds() {
    Object.values(this.elements).forEach(audio => {
      if (audio) {
        audio.load();
      }
    });
  },

  // 播放音效
  play(soundName) {
    try {
      // 檢查音效是否啟用
      const soundEnabled = localStorage.getItem('grammarSoundEnabled') !== 'false';
      if (!soundEnabled) {
        return;
      }
      
      const audio = this.elements[soundName];
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => {
          console.log(`無法播放音效 ${soundName}:`, e);
        });
      }
    } catch (e) {
      console.log(`播放音效 ${soundName} 失敗:`, e);
    }
  },

  // 播放答對音效
  playCorrect() {
    this.play('correct');
  },

  // 播放答錯音效
  playWrong() {
    this.play('wrong');
  },

  // 播放關卡完成音效
  playLevelComplete() {
    this.play('levelComplete');
  },

  // 播放星星獎勵音效
  playStarReward() {
    this.play('star');
  },

  // 播放成就達成音效
  playAchievement() {
    this.play('achievement');
  },

  // 播放點擊音效
  playClick() {
    this.play('click');
  },

  // 播放打字音效
  playType() {
    this.play('type');
  },

  // 播放關卡開始音效
  playLevelStart() {
    this.play('levelStart');
  },

  // 播放關卡完成音效
  playComplete() {
    this.play('complete');
  },

  // 根據答題結果播放音效
  playAnswerResult(isCorrect) {
    if (isCorrect) {
      this.playCorrect();
    } else {
      this.playWrong();
    }
  },

  // 播放關卡完成慶祝音效
  playLevelCelebration() {
    // 播放完成音效
    this.playLevelComplete();
    
    // 延遲播放星星音效
    setTimeout(() => {
      this.playStarReward();
    }, 500);
  },

  // 播放成就達成慶祝音效
  playAchievementCelebration() {
    // 播放成就音效
    this.playAchievement();
    
    // 延遲播放星星音效
    setTimeout(() => {
      this.playStarReward();
    }, 300);
  },

  // 為元素添加點擊音效
  addClickSound(element) {
    if (element) {
      element.addEventListener('click', () => {
        this.playClick();
      });
    }
  },

  // 為多個元素添加點擊音效
  addClickSoundToElements(elements) {
    elements.forEach(element => {
      this.addClickSound(element);
    });
  },

  // 為輸入框添加打字音效
  addTypeSound(input) {
    if (input) {
      input.addEventListener('input', () => {
        this.playType();
      });
    }
  },

  // 為所有輸入框添加打字音效
  addTypeSoundToInputs() {
    const inputs = document.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(input => {
      this.addTypeSound(input);
    });
  },

  // 設置音效音量
  setVolume(soundName, volume) {
    if (this.elements[soundName]) {
      this.elements[soundName].volume = volume;
      this.volume[soundName] = volume;
    }
  },

  // 設置所有音效音量
  setAllVolumes(volume) {
    Object.keys(this.elements).forEach(soundName => {
      this.setVolume(soundName, volume);
    });
  },

  // 靜音所有音效
  muteAll() {
    this.setAllVolumes(0);
  },

  // 恢復音效
  unmuteAll() {
    Object.keys(this.volume).forEach(soundName => {
      this.setVolume(soundName, this.volume[soundName]);
    });
  },

  // 播放連續答對音效
  playStreakSound(streakCount) {
    if (streakCount >= 5) {
      // 連續答對5題以上播放特殊音效
      this.playStarReward();
    } else if (streakCount >= 3) {
      // 連續答對3題以上播放完成音效
      this.playComplete();
    } else {
      // 一般答對音效
      this.playCorrect();
    }
  },

  // 播放關卡進度音效
  playProgressSound(progress) {
    if (progress >= 100) {
      // 完成關卡
      this.playLevelComplete();
    } else if (progress >= 80) {
      // 接近完成
      this.playStarReward();
    } else if (progress >= 50) {
      // 過半
      this.playComplete();
    }
  },

  // 播放選擇題選項音效
  playChoiceSound() {
    this.playClick();
  },

  // 播放填空題輸入音效
  playFillSound() {
    this.playType();
  },

  // 播放提交答案音效
  playSubmitSound() {
    this.playClick();
  },

  // 播放下一題音效
  playNextQuestionSound() {
    this.playClick();
  },

  // 播放返回關卡選擇音效
  playBackToLevelsSound() {
    this.playClick();
  },

  // 播放關卡解鎖音效
  playLevelUnlockSound() {
    this.play('unlock');
  },

  // 播放分數獎勵音效
  playScoreRewardSound(score) {
    if (score >= 90) {
      // 高分獎勵
      this.playStarReward();
      setTimeout(() => {
        this.playAchievement();
      }, 200);
    } else if (score >= 70) {
      // 中等分數
      this.playComplete();
    } else {
      // 低分
      this.playCorrect();
    }
  },

  // 播放準確率獎勵音效
  playAccuracyRewardSound(accuracy) {
    if (accuracy >= 100) {
      // 滿分
      this.playLevelComplete();
      setTimeout(() => {
        this.playStarReward();
      }, 300);
    } else if (accuracy >= 90) {
      // 90%以上
      this.playAchievement();
    } else if (accuracy >= 80) {
      // 80%以上
      this.playStarReward();
    } else if (accuracy >= 70) {
      // 70%以上
      this.playComplete();
    }
  },

  // 播放關卡難度獎勵音效
  playDifficultyRewardSound(levelNumber) {
    if (levelNumber >= 15) {
      // 高級關卡
      this.playAchievement();
    } else if (levelNumber >= 10) {
      // 中級關卡
      this.playStarReward();
    } else {
      // 初級關卡
      this.playComplete();
    }
  },

  // 播放綜合獎勵音效
  playComprehensiveReward(levelNumber, accuracy, correctAnswers) {
    // 根據多個因素決定播放的音效組合
    let soundSequence = [];
    
    // 準確率獎勵
    if (accuracy >= 100) {
      soundSequence.push('levelComplete');
      soundSequence.push('star');
    } else if (accuracy >= 90) {
      soundSequence.push('achievement');
    } else if (accuracy >= 80) {
      soundSequence.push('star');
    } else if (accuracy >= 70) {
      soundSequence.push('complete');
    }
    
    // 關卡難度獎勵
    if (levelNumber >= 15) {
      soundSequence.push('achievement');
    } else if (levelNumber >= 10) {
      soundSequence.push('star');
    }
    
    // 連續答對獎勵
    if (correctAnswers >= 15) {
      soundSequence.push('star');
    }
    
    // 播放音效序列
    soundSequence.forEach((soundName, index) => {
      setTimeout(() => {
        this.play(soundName);
      }, index * 200);
    });
  }
};

// 初始化文法音效系統
document.addEventListener('DOMContentLoaded', () => {
  GrammarSoundSystem.init();
});

// 導出系統供其他頁面使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SoundSystem, GrammarSoundSystem };
} 
