// soundSystem.js
// 共用音效與背景音樂管理模組

const SoundSystem = (function() {
  // 背景音樂
  let bgm = null;
  let bgmState = localStorage.getItem('bgMusicState') || 'playing';
  let bgmVolume = 0.3;
  let bgmSrc = 'sound/午後放鬆時光（純音樂）.mp3';

  // 音效池
  const effects = {};
  const defaultEffects = {
    correct: 'sound/correct.mp3',
    wrong: 'sound/wrong.mp3',
    type: 'sound/type.mp3',
    click: 'sound/click.mp3',
    shine: 'sound/shine.mp3',
    unlock: 'sound/unlock.mp3',
    complete: 'sound/complete.mp3',
    draw: 'sound/draw.wav.mp3',
    wrong2: 'sound/wrong.mp3',
  };

  // 初始化背景音樂
  function initBGM(src) {
    if (bgm) return;
    bgm = document.getElementById('backgroundMusic');
    if (!bgm) {
      // 動態建立 audio 標籤
      bgm = document.createElement('audio');
      bgm.id = 'backgroundMusic';
      bgm.loop = true;
      bgm.volume = bgmVolume;
      bgm.src = src || bgmSrc;
      document.body.appendChild(bgm);
    }
    bgm.volume = bgmVolume;
    bgm.loop = true;
    if (bgmState === 'playing') playBGM();
  }

  function playBGM() {
    if (!bgm) return;
    bgm.play().then(() => {
      bgmState = 'playing';
      localStorage.setItem('bgMusicState', 'playing');
    }).catch(() => {});
  }

  function pauseBGM() {
    if (!bgm) return;
    bgm.pause();
    bgmState = 'paused';
    localStorage.setItem('bgMusicState', 'paused');
  }

  function toggleBGM() {
    if (!bgm) return;
    if (bgm.paused) {
      playBGM();
    } else {
      pauseBGM();
    }
  }

  function setBGMVolume(vol) {
    bgmVolume = vol;
    if (bgm) bgm.volume = vol;
  }

  function setBGMSource(src) {
    bgmSrc = src;
    if (bgm) bgm.src = src;
  }

  // 音效
  function playEffect(name) {
    let effect = effects[name];
    if (!effect) {
      const src = defaultEffects[name] || name;
      effect = new Audio(src);
      effects[name] = effect;
    }
    effect.currentTime = 0;
    effect.play();
  }

  // 對外 API
  return {
    initBGM,
    playBGM,
    pauseBGM,
    toggleBGM,
    setBGMVolume,
    setBGMSource,
    playEffect,
    getBGM: () => bgm,
    getBGMState: () => bgmState,
    isBGMPlaying: () => bgm && !bgm.paused,
  };
})();

// 頁面載入自動初始化背景音樂
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    SoundSystem.initBGM();
  });
} 