/**
 * 星星獎勵系統
 * 提供統一的星星獎勵、成就檢查和通知功能
 */

// 星星獎勵系統
const StarRewardSystem = {
  // 增加星星
  addStars: function(amount) {
    const currentStars = parseInt(localStorage.getItem('totalStars') || '0');
    const newStars = currentStars + amount;
    localStorage.setItem('totalStars', newStars);
    
    // 更新顯示
    this.updateStarsDisplay();
    
    // 播放音效
    this.playStarSound();
    
    // 顯示獎勵動畫
    this.showStarReward(amount);
    
    return newStars;
  },
  
  // 更新星星顯示
  updateStarsDisplay: function() {
    const starsCount = document.getElementById('totalStarsCount');
    if (starsCount) {
      const stars = parseInt(localStorage.getItem('totalStars') || '0');
      starsCount.textContent = `⭐ ${stars}`;
      console.log('⭐ StarRewardSystem 星星數已更新:', stars);
    }
  },
  
  // 播放星星音效
  playStarSound: function() {
    try {
      // 使用 Web Audio API 播放簡單的音效
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(1200, audioContext.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
      // 如果音效API不可用，靜默處理
    }
  },
  
  // 顯示星星獎勵動畫
  showStarReward: function(amount) {
    // 創建獎勵提示
    const rewardDiv = document.createElement('div');
    rewardDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, rgba(255, 215, 0, 0.9), rgba(255, 170, 0, 0.9));
      color: #000;
      padding: 20px 30px;
      border-radius: 15px;
      font-size: 1.5rem;
      font-weight: bold;
      z-index: 1000;
      box-shadow: 0 0 30px #ffd700;
      animation: starRewardPop 3s cubic-bezier(.4,2,.6,1) forwards;
      font-family: 'Orbitron', sans-serif;
    `;
    rewardDiv.innerHTML = `⭐ +${amount} 星星 ⭐`;
    
    // 添加動畫樣式
    const style = document.createElement('style');
    style.textContent = `
      @keyframes starRewardPop {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        20% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        80% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(rewardDiv);
    
    // 3秒後移除
    setTimeout(() => {
      if (document.body.contains(rewardDiv)) {
        document.body.removeChild(rewardDiv);
      }
    }, 5000);
  }
};

// 單字達人成就系統
const VocabularyAchievementSystem = {
  // 播放星星音效
  playStarSound: function() {
    try {
      const starSound = new Audio('sound/shine.mp3');
      starSound.currentTime = 0;
      starSound.volume = 0.6;
      starSound.play().catch(e => {
        console.log('無法播放星星音效:', e);
      });
    } catch (e) {
      console.log('星星音效播放失敗:', e);
    }
  },
  
  // 記錄答對的單字
  recordCorrectWord: function(word, bookName) {
    // 增加答對單字計數
    const currentCount = parseInt(localStorage.getItem('vocabularyCorrectWords') || '0');
    const newCount = currentCount + 1;
    localStorage.setItem('vocabularyCorrectWords', newCount);
    
    // 記錄答對的單字（避免重複計算）
    let correctWords = JSON.parse(localStorage.getItem('vocabularyCorrectWordsList') || '[]');
    const wordKey = `${bookName}_${word}`;
    if (!correctWords.includes(wordKey)) {
      correctWords.push(wordKey);
      localStorage.setItem('vocabularyCorrectWordsList', JSON.stringify(correctWords));
      
      // 給予星星獎勵
      const starsEarned = this.calculateStarReward(word, bookName);
      StarRewardSystem.addStars(starsEarned);
      
      // 播放星星音效
      this.playStarSound();
      
      // 檢查成就
      this.checkAchievements(newCount);
      
      return starsEarned;
    }
    return 0;
  },
  
  // 計算星星獎勵
  calculateStarReward: function(word, bookName) {
    // 基礎獎勵：答對一個單字獲得1顆星星
    let baseReward = 1;
    
    // 根據單字長度給予額外獎勵
    if (word.length >= 8) {
      baseReward += 1; // 長單字額外獎勵
    }
    
    // 根據單字本類型給予額外獎勵
    if (bookName.includes('托福') || bookName.includes('TOEFL')) {
      baseReward += 1; // 托福單字額外獎勵
    } else if (bookName.includes('英檢') || bookName.includes('GEPT')) {
      baseReward += 1; // 英檢單字額外獎勵
    }
    
    return baseReward;
  },
  
  // 檢查成就
  checkAchievements: function(currentCount) {
    const achievements = [
      { id: 'vocab_beginner', requirement: 10, reward: 15 },
      { id: 'vocab_regular', requirement: 50, reward: 40 },
      { id: 'vocab_expert', requirement: 100, reward: 80 },
      { id: 'vocab_master', requirement: 200, reward: 150 },
      { id: 'vocab_legend', requirement: 500, reward: 300 }
    ];
    
    achievements.forEach(ach => {
      if (currentCount === ach.requirement) {
        // 成就達成！
        this.showAchievementNotification(ach);
      }
    });
  },
  
  // 顯示成就通知
  showAchievementNotification: function(achievement) {
    // 播放成就達成音效
    this.playStarSound();
    
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, rgba(0, 255, 255, 0.9), rgba(162, 89, 255, 0.9));
      color: #000;
      padding: 15px 20px;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: bold;
      z-index: 1000;
      box-shadow: 0 0 20px #00ffff;
      animation: achievementSlideIn 0.5s ease-out forwards;
      font-family: 'Orbitron', sans-serif;
      max-width: 300px;
    `;
    
    const icon = this.getAchievementIcon(achievement.id);
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 1.5rem;">${icon}</span>
        <div>
          <div style="font-size: 1.1rem;">🏆 成就達成！</div>
          <div style="font-size: 0.9rem; margin-top: 5px;">${this.getAchievementName(achievement.id)}</div>
        </div>
      </div>
    `;
    
    // 添加動畫樣式
    const style = document.createElement('style');
    style.textContent = `
      @keyframes achievementSlideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // 5秒後移除
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 5000);
  },
  
  // 取得成就圖示
  getAchievementIcon: function(achievementId) {
    const icons = {
      'vocab_beginner': '📖',
      'vocab_regular': '📚',
      'vocab_expert': '🎓',
      'vocab_master': '👑',
      'vocab_legend': '🏆'
    };
    return icons[achievementId] || '🏆';
  },
  
  // 取得成就名稱
  getAchievementName: function(achievementId) {
    const names = {
      'vocab_beginner': '單字新手',
      'vocab_regular': '單字常客',
      'vocab_expert': '單字專家',
      'vocab_master': '單字大師',
      'vocab_legend': '單字傳奇'
    };
    return names[achievementId] || '未知成就';
  }
};

// 通用成就檢查系統
const AchievementChecker = {
  // 檢查並觸發成就
  checkAndTriggerAchievements: function() {
    // 這裡可以添加其他成就的檢查邏輯
    // 例如：登入天數、遊戲完成次數等
  },
  
  // 顯示成就彈窗
  showAchievementModal: function(achievement) {
    // 創建成就彈窗
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      backdrop-filter: blur(12px);
    `;
    
    modal.innerHTML = `
      <div style="
        background: linear-gradient(135deg, rgba(10, 20, 40, 0.98), rgba(20, 40, 80, 0.98));
        border: 3px solid #00ffff;
        border-radius: 25px;
        padding: 30px;
        max-width: 500px;
        text-align: center;
        box-shadow: 0 0 50px #00ffff;
        animation: modalPop 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      ">
        <div style="font-size: 4rem; margin-bottom: 20px;">${achievement.icon || '🏆'}</div>
        <h2 style="color: #00ffff; margin-bottom: 15px; font-size: 1.8rem;">${achievement.name}</h2>
        <p style="color: #ccc; margin-bottom: 20px; line-height: 1.5;">${achievement.description}</p>
        <div style="
          background: linear-gradient(90deg, #ffd700, #ffaa00);
          border-radius: 15px;
          padding: 15px;
          margin: 20px 0;
          color: #000;
          font-weight: bold;
          font-size: 1.2rem;
        ">
          ⭐ 獎勵：${achievement.reward} 顆星星 ⭐
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: linear-gradient(90deg, #00ffff, #a259ff);
          color: #000;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          margin-top: 15px;
        ">
          🎉 太棒了！
        </button>
      </div>
    `;
    
    // 添加動畫樣式
    const style = document.createElement('style');
    style.textContent = `
      @keyframes modalPop {
        0% { transform: scale(0.2) rotate(-15deg); opacity: 0; }
        50% { transform: scale(1.15) rotate(3deg); }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(modal);
    
    // 點擊背景關閉
    modal.onclick = function(e) {
      if (e.target === modal) {
        modal.remove();
      }
    };
  }
};

// 導出系統供其他頁面使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { StarRewardSystem, VocabularyAchievementSystem, AchievementChecker };
}

// 文法關卡星星獎勵系統
const GrammarRewardSystem = {
  // 記錄文法關卡完成
  recordGrammarLevelCompletion: function(levelNumber, score, totalQuestions) {
    // 計算準確率
    const accuracy = (score / totalQuestions) * 100;
    
    // 計算星星獎勵
    const starsEarned = this.calculateGrammarStarReward(levelNumber, accuracy, score);
    
    // 記錄關卡完成狀態
    this.saveLevelProgress(levelNumber, score, totalQuestions, accuracy);
    
    // 給予星星獎勵
    StarRewardSystem.addStars(starsEarned);
    
    // 播放星星音效
    this.playGrammarSound();
    
    // 檢查文法成就
    this.checkGrammarAchievements();
    
    return starsEarned;
  },
  
  // 計算文法關卡星星獎勵
  calculateGrammarStarReward: function(levelNumber, accuracy, correctAnswers) {
    let baseReward = 0;
    
    // 基礎獎勵：每答對一題獲得1顆星星
    baseReward += correctAnswers;
    
    // 準確率獎勵
    if (accuracy >= 100) {
      baseReward += 10; // 滿分額外獎勵
    } else if (accuracy >= 90) {
      baseReward += 5; // 90%以上額外獎勵
    } else if (accuracy >= 80) {
      baseReward += 3; // 80%以上額外獎勵
    } else if (accuracy >= 70) {
      baseReward += 1; // 70%以上額外獎勵
    }
    
    // 關卡難度獎勵（後面的關卡獎勵更多）
    if (levelNumber >= 15) {
      baseReward += 3; // 高級關卡額外獎勵
    } else if (levelNumber >= 10) {
      baseReward += 2; // 中級關卡額外獎勵
    } else {
      baseReward += 1; // 初級關卡額外獎勵
    }
    
    // 連續答對獎勵
    if (correctAnswers >= 15) {
      baseReward += 2; // 連續答對15題以上
    }
    
    return Math.max(1, baseReward); // 最少1顆星星
  },
  
  // 保存關卡進度
  saveLevelProgress: function(levelNumber, score, totalQuestions, accuracy) {
    const progressKey = `grammar_level_${levelNumber}`;
    const progress = {
      completed: true,
      score: score,
      totalQuestions: totalQuestions,
      accuracy: accuracy,
      completedAt: new Date().toISOString(),
      starsEarned: this.calculateGrammarStarReward(levelNumber, accuracy, score)
    };
    
    localStorage.setItem(progressKey, JSON.stringify(progress));
    
    // 更新總進度
    this.updateTotalProgress();
  },
  
  // 更新總進度
  updateTotalProgress: function() {
    let completedLevels = 0;
    let totalStars = 0;
    let totalAccuracy = 0;
    
    // 檢查所有20個關卡
    for (let i = 1; i <= 20; i++) {
      const progressKey = `grammar_level_${i}`;
      const progressData = localStorage.getItem(progressKey);
      
      if (progressData) {
        const progress = JSON.parse(progressData);
        if (progress.completed) {
          completedLevels++;
          totalStars += progress.starsEarned;
          totalAccuracy += progress.accuracy;
        }
      }
    }
    
    const averageAccuracy = completedLevels > 0 ? totalAccuracy / completedLevels : 0;
    
    // 保存總進度
    const totalProgress = {
      completedLevels: completedLevels,
      totalStars: totalStars,
      averageAccuracy: averageAccuracy,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem('grammar_total_progress', JSON.stringify(totalProgress));
  },
  
  // 播放文法音效
  playGrammarSound: function() {
    try {
      const grammarSound = new Audio('sound/correct.mp3');
      grammarSound.currentTime = 0;
      grammarSound.volume = 0.6;
      grammarSound.play().catch(e => {
        console.log('無法播放文法音效:', e);
      });
    } catch (e) {
      console.log('文法音效播放失敗:', e);
    }
  },
  
  // 檢查文法成就
  checkGrammarAchievements: function() {
    const totalProgress = JSON.parse(localStorage.getItem('grammar_total_progress') || '{}');
    const completedLevels = totalProgress.completedLevels || 0;
    const totalStars = totalProgress.totalStars || 0;
    const averageAccuracy = totalProgress.averageAccuracy || 0;
    
    // 關卡完成成就
    const levelAchievements = [
      { id: 'grammar_first', requirement: 1, reward: 20, name: '文法新手', icon: '📝' },
      { id: 'grammar_beginner', requirement: 5, reward: 50, name: '文法初學者', icon: '📚' },
      { id: 'grammar_intermediate', requirement: 10, reward: 100, name: '文法中級者', icon: '🎓' },
      { id: 'grammar_advanced', requirement: 15, reward: 200, name: '文法高級者', icon: '👑' },
      { id: 'grammar_master', requirement: 20, reward: 500, name: '文法大師', icon: '🏆' }
    ];
    
    // 準確率成就
    const accuracyAchievements = [
      { id: 'grammar_accuracy_80', requirement: 80, reward: 30, name: '準確率80%', icon: '🎯' },
      { id: 'grammar_accuracy_90', requirement: 90, reward: 60, name: '準確率90%', icon: '🎯' },
      { id: 'grammar_accuracy_95', requirement: 95, reward: 100, name: '準確率95%', icon: '🎯' },
      { id: 'grammar_perfect', requirement: 100, reward: 200, name: '完美準確率', icon: '💎' }
    ];
    
    // 星星成就
    const starAchievements = [
      { id: 'grammar_stars_100', requirement: 100, reward: 50, name: '100顆文法星星', icon: '⭐' },
      { id: 'grammar_stars_500', requirement: 500, reward: 150, name: '500顆文法星星', icon: '⭐' },
      { id: 'grammar_stars_1000', requirement: 1000, reward: 300, name: '1000顆文法星星', icon: '⭐' }
    ];
    
    // 檢查關卡完成成就
    levelAchievements.forEach(ach => {
      if (completedLevels === ach.requirement) {
        this.showGrammarAchievement(ach);
      }
    });
    
    // 檢查準確率成就
    accuracyAchievements.forEach(ach => {
      if (averageAccuracy >= ach.requirement && averageAccuracy < ach.requirement + 5) {
        this.showGrammarAchievement(ach);
      }
    });
    
    // 檢查星星成就
    starAchievements.forEach(ach => {
      if (totalStars >= ach.requirement && totalStars < ach.requirement + 100) {
        this.showGrammarAchievement(ach);
      }
    });
  },
  
  // 顯示文法成就
  showGrammarAchievement: function(achievement) {
    // 播放成就音效
    this.playGrammarSound();
    
    // 給予成就獎勵
    StarRewardSystem.addStars(achievement.reward);
    
    // 顯示成就通知
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, rgba(255, 215, 0, 0.9), rgba(255, 140, 0, 0.9));
      color: #000;
      padding: 15px 20px;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: bold;
      z-index: 1000;
      box-shadow: 0 0 20px #ffd700;
      animation: grammarAchievementSlideIn 0.5s ease-out forwards;
      font-family: 'Orbitron', sans-serif;
      max-width: 300px;
    `;
    
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 1.5rem;">${achievement.icon}</span>
        <div>
          <div style="font-size: 1.1rem;">🏆 文法成就達成！</div>
          <div style="font-size: 0.9rem; margin-top: 5px;">${achievement.name}</div>
          <div style="font-size: 0.8rem; margin-top: 3px; color: #333;">⭐ +${achievement.reward} 星星</div>
        </div>
      </div>
    `;
    
    // 添加動畫樣式
    const style = document.createElement('style');
    style.textContent = `
      @keyframes grammarAchievementSlideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // 5秒後移除
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 5000);
  },
  
  // 獲取關卡進度
  getLevelProgress: function(levelNumber) {
    const progressKey = `grammar_level_${levelNumber}`;
    const progressData = localStorage.getItem(progressKey);
    return progressData ? JSON.parse(progressData) : null;
  },
  
  // 獲取總進度
  getTotalProgress: function() {
    const progressData = localStorage.getItem('grammar_total_progress');
    return progressData ? JSON.parse(progressData) : {
      completedLevels: 0,
      totalStars: 0,
      averageAccuracy: 0
    };
  },
  
  // 重置所有進度（測試用）
  resetAllProgress: function() {
    for (let i = 1; i <= 20; i++) {
      localStorage.removeItem(`grammar_level_${i}`);
    }
    localStorage.removeItem('grammar_total_progress');
    console.log('文法關卡進度已重置');
  }
};

// 更新導出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    StarRewardSystem, 
    VocabularyAchievementSystem, 
    AchievementChecker,
    GrammarRewardSystem 
  };
} 