// 遊戲對話整合系統
const GameDialogue = {
  // 初始化遊戲對話
  init() {
    this.loadCharacterSettings();
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

  // 遊戲開始時的對話
  showGameStartDialogue() {
    if (!window.CharacterDialogue) return;
    
    window.CharacterDialogue.currentCharacter = this.currentCharacter;
    setTimeout(() => {
      window.CharacterDialogue.showEncouragement();
    }, 1000);
  },

  // 遊戲勝利時的對話
  showGameVictoryDialogue() {
    if (!window.CharacterDialogue) return;
    
    window.CharacterDialogue.currentCharacter = this.currentCharacter;
    setTimeout(() => {
      window.CharacterDialogue.showVictoryDialogue();
    }, 1000);
  },

  // 遊戲失敗時的對話
  showGameDefeatDialogue() {
    if (!window.CharacterDialogue) return;
    
    window.CharacterDialogue.currentCharacter = this.currentCharacter;
    setTimeout(() => {
      window.CharacterDialogue.showDefeatDialogue();
    }, 1000);
  },

  // 答對題目時的鼓勵
  showCorrectAnswerDialogue() {
    if (!window.CharacterDialogue) return;
    
    window.CharacterDialogue.currentCharacter = this.currentCharacter;
    setTimeout(() => {
      window.CharacterDialogue.showEncouragement();
    }, 500);
  },

  // 答錯題目時的安慰
  showWrongAnswerDialogue() {
    if (!window.CharacterDialogue) return;
    
    window.CharacterDialogue.currentCharacter = this.currentCharacter;
    setTimeout(() => {
      window.CharacterDialogue.showDefeatDialogue();
    }, 500);
  }
};

// 導出到全局
window.GameDialogue = GameDialogue; 