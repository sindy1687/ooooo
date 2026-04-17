// 成就系統 - 通用檢查和彈窗功能
class AchievementSystem {
  constructor() {
    this.achievements = [
      { id: 'bronze', name: '銅牌收集者', requirement: 10, reward: 5, icon: '🥉', type: 'collection', description: '收集10張卡片，開始你的收集之旅' },
      { id: 'silver', name: '銀牌收集者', requirement: 25, reward: 15, icon: '🥈', type: 'collection', description: '收集25張卡片，展現你的收集實力' },
      { id: 'gold', name: '金牌收集者', requirement: 50, reward: 30, icon: '🥇', type: 'collection', description: '收集50張卡片，成為真正的收集者' },
      { id: 'platinum', name: '白金收集者', requirement: 100, reward: 60, icon: '💎', type: 'collection', description: '收集100張卡片，達到白金等級' },
      { id: 'diamond', name: '鑽石收集者', requirement: 200, reward: 120, icon: '💠', type: 'collection', description: '收集200張卡片，獲得鑽石榮耀' },
      { id: 'master', name: '收集大師', requirement: 500, reward: 300, icon: '👑', type: 'collection', description: '收集500張卡片，成為收集大師' },
      { id: 'common_master', name: '普通卡大師', requirement: 50, reward: 20, icon: '📚', type: 'rarity', rarity: '普通', description: '收集50張普通卡片，掌握基礎詞彙' },
      { id: 'rare_master', name: '稀有卡大師', requirement: 30, reward: 40, icon: '🔮', type: 'rarity', rarity: '稀有', description: '收集30張稀有卡片，擴展詞彙範圍' },
      { id: 'epic_master', name: '超稀有大師', requirement: 20, reward: 80, icon: '🌟', type: 'rarity', rarity: '超稀有', description: '收集20張超稀有卡片，掌握高級詞彙' },
      { id: 'shard_collector', name: '碎片收集者', requirement: 100, reward: 25, icon: '💎', type: 'shards', description: '收集100個碎片，開始碎片收集之路' },
      { id: 'shard_hoarder', name: '碎片囤積者', requirement: 500, reward: 100, icon: '🏦', type: 'shards', description: '收集500個碎片，成為碎片囤積者' },
      { id: 'shard_master', name: '碎片大師', requirement: 1000, reward: 200, icon: '💍', type: 'shards', description: '收集1000個碎片，成為碎片大師' },
      { id: 'first_card', name: '初學者', requirement: 1, reward: 1, icon: '🎯', type: 'special', description: '獲得第一張卡片，開始學習之旅' },
      { id: 'lucky_starter', name: '幸運新手', requirement: 5, reward: 5, icon: '🍀', type: 'special', description: '獲得5張卡片，展現你的幸運' },
      { id: 'dedicated', name: '專注學習者', requirement: 25, reward: 20, icon: '📖', type: 'special', description: '獲得25張卡片，展現你的專注' },
      { id: 'persistent', name: '堅持不懈', requirement: 75, reward: 60, icon: '💪', type: 'special', description: '獲得75張卡片，展現你的堅持' },
      { id: 'vocabulary_king', name: '詞彙之王', requirement: 150, reward: 150, icon: '👑', type: 'special', description: '獲得150張卡片，成為詞彙之王' },
      { id: 'language_legend', name: '語言傳奇', requirement: 300, reward: 300, icon: '🏆', type: 'special', description: '獲得300張卡片，成為語言傳奇' },
      { id: 'daily_1', name: '每日簽到1天', requirement: 1, reward: 2, icon: '📅', type: 'daily', description: '連續簽到1天，養成好習慣' },
      { id: 'daily_7', name: '每日簽到7天', requirement: 7, reward: 10, icon: '📆', type: 'daily', description: '連續簽到7天，堅持一週' },
      { id: 'daily_30', name: '每日簽到30天', requirement: 30, reward: 50, icon: '🗓️', type: 'daily', description: '連續簽到30天，堅持一個月' },
      { id: 'daily_100', name: '每日簽到100天', requirement: 100, reward: 200, icon: '📊', type: 'daily', description: '連續簽到100天，成為忠實用戶' },
      { id: 'star_collector', name: '星星收集者', requirement: 100, reward: 10, icon: '⭐', type: 'stars', description: '收集100顆星星，開始星星收集' },
      { id: 'star_hoarder', name: '星星囤積者', requirement: 500, reward: 50, icon: '✨', type: 'stars', description: '收集500顆星星，成為星星囤積者' },
      { id: 'star_master', name: '星星大師', requirement: 1000, reward: 100, icon: '🌟', type: 'stars', description: '收集1000顆星星，成為星星大師' },
      { id: 'star_legend', name: '星星傳奇', requirement: 5000, reward: 500, icon: '💫', type: 'stars', description: '收集5000顆星星，成為星星傳奇' },
      { id: 'speed_learner', name: '快速學習者', requirement: 10, reward: 15, icon: '⚡', type: 'performance', description: '通過10個關卡，展現快速學習能力' },
      { id: 'accuracy_master', name: '準確大師', requirement: 20, reward: 25, icon: '🎯', type: 'performance', description: '通過20個關卡，展現準確的學習能力' },
      { id: 'combo_king', name: '連擊之王', requirement: 15, reward: 30, icon: '🔥', type: 'performance', description: '通過15個關卡，展現連擊能力' },
      // 填空挑戰成就
      { id: 'fill_beginner', name: '填空新手', requirement: 1, reward: 5, icon: '📝', type: 'fill', description: '完成第一次填空挑戰' },
      { id: 'fill_regular', name: '填空常客', requirement: 10, reward: 20, icon: '📋', type: 'fill', description: '完成10次填空挑戰' },
      { id: 'fill_expert', name: '填空專家', requirement: 50, reward: 80, icon: '📊', type: 'fill', description: '完成50次填空挑戰' },
      { id: 'fill_master', name: '填空大師', requirement: 100, reward: 150, icon: '🏆', type: 'fill', description: '完成100次填空挑戰' },
      { id: 'fill_perfect', name: '完美填空', requirement: 1, reward: 30, icon: '💯', type: 'fill', description: '在填空挑戰中獲得滿分' },
      { id: 'fill_speed', name: '快速填空', requirement: 5, reward: 25, icon: '⚡', type: 'fill', description: '在5次填空挑戰中平均時間少於15秒' },
      { id: 'fill_streak', name: '連續填空', requirement: 7, reward: 40, icon: '🔥', type: 'fill', description: '連續7天完成填空挑戰' },
      { id: 'fill_vocab', name: '詞彙填空', requirement: 100, reward: 60, icon: '📚', type: 'fill', description: '在填空挑戰中答對100個單字' },
      // 單字達人成就
      { id: 'vocab_beginner', name: '單字新手', requirement: 10, reward: 15, icon: '📖', type: 'vocabulary', description: '答對10個單字本的單字，開始單字學習之旅' },
      { id: 'vocab_regular', name: '單字常客', requirement: 50, reward: 40, icon: '📚', type: 'vocabulary', description: '答對50個單字本的單字，展現學習熱情' },
      { id: 'vocab_expert', name: '單字專家', requirement: 100, reward: 80, icon: '🎓', type: 'vocabulary', description: '答對100個單字本的單字，成為單字專家' },
      { id: 'vocab_master', name: '單字大師', requirement: 200, reward: 150, icon: '👑', type: 'vocabulary', description: '答對200個單字本的單字，成為單字大師' },
      { id: 'vocab_legend', name: '單字傳奇', requirement: 500, reward: 300, icon: '🏆', type: 'vocabulary', description: '答對500個單字本的單字，成為單字傳奇' },
    ];

    // 星座關卡成就
    const atlasCategories = [
      { key: 'aries', name: '白羊座', icon: '♈', rewardRange: [5,5] },
      { key: 'taurus', name: '金牛座', icon: '♉', rewardRange: [5,5] },
      { key: 'gemini', name: '雙子座', icon: '♊', rewardRange: [5,5] },
      { key: 'cancer', name: '巨蟹座', icon: '♋', rewardRange: [7,10] },
      { key: 'leo', name: '獅子座', icon: '♌', rewardRange: [8,12] },
      { key: 'virgo', name: '處女座', icon: '♍', rewardRange: [9,13] },
      { key: 'libra', name: '天秤座', icon: '♎', rewardRange: [10,14] },
      { key: 'scorpio', name: '天蠍座', icon: '♏', rewardRange: [11,15] },
      { key: 'sagittarius', name: '射手座', icon: '♐', rewardRange: [12,16] },
      { key: 'capricorn', name: '摩羯座', icon: '♑', rewardRange: [13,17] },
      { key: 'aquarius', name: '水瓶座', icon: '♒', rewardRange: [14,18] },
      { key: 'pisces', name: '雙魚座', icon: '♓', rewardRange: [15,20] },
      { key: 'andromeda', name: '仙女座', icon: '👸', rewardRange: [16,20] },
      { key: 'cygnus', name: '天鵝座', icon: '🦢', rewardRange: [17,20] },
      { key: 'orion', name: '獵戶座', icon: '🏹', rewardRange: [17,20] },
      { key: 'pegasus', name: '飛馬座', icon: '🦄', rewardRange: [17,20] },
      { key: 'cassiopeia', name: '仙后座', icon: '👑', rewardRange: [17,20] },
      { key: 'scorpius', name: '天蠍座', icon: '🦂', rewardRange: [17,20] },
      { key: 'phoenix', name: '鳳凰座', icon: '🔥', rewardRange: [17,20] },
      { key: 'vela', name: '船帆座', icon: '⛵', rewardRange: [17,20] }
    ];
    
    atlasCategories.forEach(category => {
      this.achievements.push({
        id: `pass_${category.key}`,
        name: category.name,
        requirement: 1,
        reward: category.rewardRange[1],
        icon: '🌠',
        type: 'zodiac',
        description: `通過${category.name}關卡`,
        rewardRange: category.rewardRange
      });
    });

    // 星座關卡總體成就
    this.achievements.push(
      { id: 'zodiac_beginner', name: '星座新手', requirement: 1, reward: 10, icon: '🌠', type: 'zodiac_total', description: '通過第一個星座關卡，開始星座之旅' },
      { id: 'zodiac_explorer', name: '星座探索者', requirement: 5, reward: 25, icon: '🌠', type: 'zodiac_total', description: '通過5個星座關卡，展現探索精神' },
      { id: 'zodiac_master', name: '星座大師', requirement: 10, reward: 50, icon: '🌠', type: 'zodiac_total', description: '通過10個星座關卡，成為星座大師' },
      { id: 'zodiac_expert', name: '星座專家', requirement: 15, reward: 100, icon: '🌠', type: 'zodiac_total', description: '通過15個星座關卡，展現專家實力' },
      { id: 'zodiac_legend', name: '星座傳奇', requirement: 20, reward: 200, icon: '🌠', type: 'zodiac_total', description: '通過所有星座關卡，成就傳奇' }
    );
    
    this.init();
  }

  init() {
    this.createModal();
    // 移除自動檢查成就，避免每次開網頁都跳出彈窗
    // this.checkForNewAchievements();
  }

  // 創建成就彈窗
  createModal() {
    if (document.getElementById('achievementNotificationModal')) return;

    const modalHTML = `
      <div id="achievementNotificationModal" class="achievement-notification-modal" style="display: none;">
        <div class="achievement-notification-content" role="dialog" aria-modal="true" aria-labelledby="notificationTitle">
          <button class="achievement-notification-x" type="button" aria-label="關閉" onclick="achievementSystem.closeNotification()">✕</button>
          <div class="achievement-notification-header">
            <div class="achievement-notification-icon" id="notificationIcon">🏆</div>
            <h2 class="achievement-notification-title" id="notificationTitle">成就達成！</h2>
          </div>
          <div class="achievement-notification-body">
            <div class="achievement-notification-description" id="notificationDescription">
              恭喜您達成了一個新的成就！
            </div>
            <div class="achievement-notification-reward" id="notificationReward">
              <span class="achievement-notification-stars">⭐</span>
              <span id="notificationRewardText">獎勵星星：0 顆</span>
            </div>
            <div class="achievement-notification-total" id="notificationTotal">
              當前星星總數：0 顆
            </div>
            <div class="achievement-notification-buttons">
              <button class="achievement-notification-claim" onclick="achievementSystem.claimAchievement()">
                🎉 立即領取
              </button>
              <button class="achievement-notification-view" onclick="achievementSystem.goToAchievementPage()">
                📋 查看成就
              </button>
              <button class="achievement-notification-close" onclick="achievementSystem.closeNotification()">
                ✕ 關閉
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    const modalCSS = `
      <style>
        :root {
          --ach-bg: rgba(15, 18, 30, 0.75);
          --ach-panel: rgba(255, 255, 255, 0.08);
          --ach-border: rgba(255, 255, 255, 0.18);
          --ach-text: #e9eefc;
          --ach-subtext: rgba(233, 238, 252, 0.78);
          --ach-accent: #7c5cff;
          --ach-accent2: #00e5ff;
          --ach-gold: #ffcc4d;
          --ach-shadow: 0 18px 55px rgba(0, 0, 0, 0.55);
        }

        .achievement-notification-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.72);
          display: none;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 14px;
          animation: achFade 180ms ease-out;
        }

        @keyframes achFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .achievement-notification-content {
          width: min(420px, 100%);
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          background: linear-gradient(145deg, rgba(18, 22, 36, 0.92), rgba(10, 12, 22, 0.88));
          border: 1px solid var(--ach-border);
          border-radius: 18px;
          box-shadow: var(--ach-shadow);
          overflow: hidden;
          position: relative;
          transform-origin: center;
          animation: achPop 240ms ease-out;
        }

        @keyframes achPop {
          from { transform: translateY(10px) scale(0.96); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        .achievement-notification-x {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 34px;
          height: 34px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: transform .15s ease, background .15s ease;
          z-index: 2;
        }

        .achievement-notification-x:hover {
          background: rgba(255, 255, 255, 0.14);
          transform: scale(1.03);
        }

        .achievement-notification-header {
          padding: 18px 18px 14px;
          background: radial-gradient(120% 120% at 10% 0%, rgba(124, 92, 255, 0.45) 0%, rgba(0, 229, 255, 0.22) 40%, rgba(255, 255, 255, 0) 75%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .achievement-notification-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.10);
          border: 1px solid rgba(255, 255, 255, 0.14);
          display: grid;
          place-items: center;
          font-size: 2.2rem;
          box-shadow: 0 0 0 6px rgba(124, 92, 255, 0.12);
          flex: 0 0 auto;
        }

        .achievement-notification-title {
          font-size: 1.25rem;
          line-height: 1.25;
          margin: 0;
          color: var(--ach-text);
          font-weight: 800;
          letter-spacing: 0.5px;
          font-family: 'Microsoft JhengHei', system-ui, -apple-system, sans-serif;
        }

        .achievement-notification-body {
          padding: 16px 18px 18px;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          text-align: left;
        }

        .achievement-notification-description {
          font-size: 1.02rem;
          margin: 0 0 12px;
          color: var(--ach-subtext);
          line-height: 1.55;
          font-family: 'Microsoft JhengHei', system-ui, -apple-system, sans-serif;
        }

        .achievement-notification-reward {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(255, 204, 77, 0.20), rgba(255, 204, 77, 0.08));
          border: 1px solid rgba(255, 204, 77, 0.35);
          color: var(--ach-text);
          margin: 10px 0 12px;
          font-weight: 800;
          box-shadow: 0 10px 28px rgba(255, 204, 77, 0.12);
        }

        .achievement-notification-stars {
          font-size: 1.35rem;
        }

        #notificationRewardText {
          font-size: 1.05rem;
        }

        .achievement-notification-total {
          padding: 11px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(233, 238, 252, 0.9);
          font-weight: 700;
          font-size: 0.98rem;
          margin: 0 0 14px;
        }

        .achievement-notification-buttons {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .achievement-notification-claim,
        .achievement-notification-view,
        .achievement-notification-close {
          border: none;
          border-radius: 14px;
          padding: 12px 14px;
          font-size: 1.02rem;
          font-weight: 800;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: transform .12s ease, filter .12s ease, background .12s ease;
          font-family: 'Microsoft JhengHei', system-ui, -apple-system, sans-serif;
        }

        .achievement-notification-claim {
          background: linear-gradient(135deg, #33ff90, #16d66f);
          color: #052014;
          box-shadow: 0 12px 30px rgba(22, 214, 111, 0.22);
        }

        .achievement-notification-view {
          background: linear-gradient(135deg, var(--ach-accent2), var(--ach-accent));
          color: #06111c;
          box-shadow: 0 12px 30px rgba(124, 92, 255, 0.18);
        }

        .achievement-notification-close {
          background: rgba(255, 255, 255, 0.08);
          color: rgba(233, 238, 252, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .achievement-notification-claim:hover,
        .achievement-notification-view:hover,
        .achievement-notification-close:hover {
          transform: translateY(-1px);
          filter: brightness(1.05);
        }

        .achievement-notification-claim:active,
        .achievement-notification-view:active,
        .achievement-notification-close:active {
          transform: translateY(0);
          filter: brightness(0.98);
        }

        /* 寬螢幕時把主要兩顆按鈕改成左右排列 */
        @media (min-width: 430px) {
          .achievement-notification-buttons {
            grid-template-columns: 1fr 1fr;
          }
          .achievement-notification-close {
            grid-column: 1 / -1;
          }
        }

        /* 小螢幕字級稍降，避免擠爆 */
        @media (max-width: 360px) {
          .achievement-notification-title { font-size: 1.15rem; }
          .achievement-notification-description { font-size: 0.98rem; }
          #notificationRewardText { font-size: 1rem; }
        }
      </style>
    `;

    document.head.insertAdjacentHTML('beforeend', modalCSS);
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  // 檢查是否有新成就
  checkForNewAchievements() {
    const ownedCards = JSON.parse(localStorage.getItem('ownedCards') || '{}');
    const shards = JSON.parse(localStorage.getItem('cardShards') || '{}');
    const claimed = JSON.parse(localStorage.getItem('claimedAchievements') || '[]');
    
    const newAchievements = [];
    
    this.achievements.forEach(achievement => {
      if (claimed.includes(achievement.id)) return; // 已領取過
      
      if (this.checkAchievementUnlocked(achievement, ownedCards, shards)) {
        newAchievements.push(achievement);
      }
    });
    
    if (newAchievements.length > 0) {
      this.showNotification(newAchievements[0]); // 顯示第一個新成就
    }
  }

  // 檢查成就是否解鎖
  checkAchievementUnlocked(achievement, ownedCards, shards) {
    switch (achievement.type) {
      case 'collection':
      case 'special':
        return Object.keys(ownedCards).length >= achievement.requirement;
      case 'rarity':
        if (!window.allCards) return false;
        const cardsOfRarity = allCards.filter(card => card.rarity === achievement.rarity && ownedCards[card.word]);
        return cardsOfRarity.length >= achievement.requirement;
      case 'shards':
        return Object.values(shards).reduce((sum, c) => sum + c, 0) >= achievement.requirement;
      case 'daily':
        return parseInt(localStorage.getItem('loginDays') || '0') >= achievement.requirement;
      case 'stars':
        return parseInt(localStorage.getItem('totalStars') || '0') >= achievement.requirement;
      case 'performance':
        const fillGames = parseInt(localStorage.getItem('fillGamesCompleted') || '0');
        const cardGames = parseInt(localStorage.getItem('cardGamesCompleted') || '0');
        const quizGames = parseInt(localStorage.getItem('quizGamesCompleted') || '0');
        const spellingGames = parseInt(localStorage.getItem('spellingGamesCompleted') || '0');
        const matchingGames = parseInt(localStorage.getItem('matchingGamesCompleted') || '0');
        const timeChallengeGames = parseInt(localStorage.getItem('timeChallengeGamesCompleted') || '0');
        return (fillGames + cardGames + quizGames + spellingGames + matchingGames + timeChallengeGames) >= achievement.requirement;
      case 'fill':
        switch (achievement.id) {
          case 'fill_beginner':
          case 'fill_regular':
          case 'fill_expert':
          case 'fill_master':
            return parseInt(localStorage.getItem('fillGamesCompleted') || '0') >= achievement.requirement;
          case 'fill_perfect':
            return parseInt(localStorage.getItem('fillPerfectScores') || '0') >= achievement.requirement;
          case 'fill_speed':
            return parseInt(localStorage.getItem('fillSpeedGames') || '0') >= achievement.requirement;
          case 'fill_streak':
            return parseInt(localStorage.getItem('fillStreakDays') || '0') >= achievement.requirement;
          case 'fill_vocab':
            return parseInt(localStorage.getItem('fillCorrectWords') || '0') >= achievement.requirement;
          default:
            return false;
        }
      case 'zodiac':
        const zodiacKey = achievement.id.replace('pass_', '');
        const passedAtlas = JSON.parse(localStorage.getItem('passed_atlas') || '[]');
        return passedAtlas.includes(zodiacKey);
      case 'zodiac_total':
        const passedAtlasTotal = JSON.parse(localStorage.getItem('passed_atlas') || '[]');
        return passedAtlasTotal.length >= achievement.requirement;
      case 'vocabulary':
        return parseInt(localStorage.getItem('vocabularyCorrectWords') || '0') >= achievement.requirement;
      case 'ssr_special':
        const cardWord = achievement.id.replace('ssr_', '');
        return ownedCards[cardWord] ? 1 : 0;
      default:
        return false;
    }
  }

  // 顯示成就通知
  showNotification(achievement) {
    this.currentAchievement = achievement;
    
    const modal = document.getElementById('achievementNotificationModal');
    const icon = document.getElementById('notificationIcon');
    const title = document.getElementById('notificationTitle');
    const description = document.getElementById('notificationDescription');
    const rewardText = document.getElementById('notificationRewardText');
    const totalText = document.getElementById('notificationTotal');
    
    // 更新彈窗內容
    icon.textContent = achievement.icon;
    title.textContent = achievement.name;
    description.textContent = achievement.description;
    
    // 計算獎勵
    let reward = achievement.reward;
    if (achievement.type === 'zodiac') {
      let zodiacRewards = JSON.parse(localStorage.getItem('zodiacRewards') || '{}');
      if (!zodiacRewards[achievement.id]) {
        const [min, max] = achievement.rewardRange;
        reward = min === max ? min : Math.floor(Math.random() * (max - min + 1)) + min;
        zodiacRewards[achievement.id] = reward;
        localStorage.setItem('zodiacRewards', JSON.stringify(zodiacRewards));
      } else {
        reward = zodiacRewards[achievement.id];
      }
    }
    
    rewardText.textContent = `獎勵星星：${reward} 顆`;
    
    const currentStars = parseInt(localStorage.getItem('totalStars') || '0');
    totalText.textContent = `當前星星總數：${currentStars} 顆`;
    
    // 播放音效
    this.playStarSound();
    
    // 顯示彈窗
    modal.style.display = 'flex';
    
    // 添加點擊外部關閉功能
    modal.onclick = (e) => {
      if (e.target === modal) {
        this.closeNotification();
      }
    };
  }

  // 領取成就獎勵
  claimAchievement() {
    if (!this.currentAchievement) return;
    
    const achievement = this.currentAchievement;
    const claimed = JSON.parse(localStorage.getItem('claimedAchievements') || '[]');
    
    if (claimed.includes(achievement.id)) {
      alert(`您已經領取過 ${achievement.name} 的獎勵了！`);
      return;
    }
    
    let stars = parseInt(localStorage.getItem('totalStars') || '0');
    let reward = achievement.reward;
    
    // 星座成就特殊處理
    if (achievement.type === 'zodiac') {
      let zodiacRewards = JSON.parse(localStorage.getItem('zodiacRewards') || '{}');
      reward = zodiacRewards[achievement.id] || reward;
    }
    
    stars += reward;
    localStorage.setItem('totalStars', stars);
    claimed.push(achievement.id);
    localStorage.setItem('claimedAchievements', JSON.stringify(claimed));
    
    // 播放星星音效
    this.playStarSound();
    
    // 更新顯示
    const totalText = document.getElementById('notificationTotal');
    totalText.textContent = `當前星星總數：${stars} 顆`;
    
    // 更新按鈕
    const claimBtn = document.querySelector('.achievement-notification-claim');
    claimBtn.textContent = '✅ 已領取';
    claimBtn.disabled = true;
    claimBtn.style.background = 'linear-gradient(90deg, #888, #666)';
    claimBtn.style.cursor = 'not-allowed';
    
    // 3秒後自動關閉
    setTimeout(() => {
      this.closeNotification();
    }, 3000);
  }

  // 前往成就頁面
  goToAchievementPage() {
    window.location.href = 'achievement.html';
  }

  // 關閉通知
  closeNotification() {
    const modal = document.getElementById('achievementNotificationModal');
    if (modal) {
      modal.style.display = 'none';
      modal.onclick = null;
    }
    this.currentAchievement = null;
  }

  // 播放星星音效
  playStarSound() {
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
  }

  // 手動觸發成就檢查（供其他頁面調用）
  triggerAchievementCheck() {
    this.checkForNewAchievements();
  }

  // 更新特定類型的進度（供其他頁面調用）
  updateProgress(type, value) {
    switch (type) {
      case 'fill_games':
        const currentFill = parseInt(localStorage.getItem('fillGamesCompleted') || '0');
        localStorage.setItem('fillGamesCompleted', currentFill + value);
        break;
      case 'fill_perfect':
        const currentPerfect = parseInt(localStorage.getItem('fillPerfectScores') || '0');
        localStorage.setItem('fillPerfectScores', currentPerfect + value);
        break;
      case 'fill_correct_words':
        const currentCorrect = parseInt(localStorage.getItem('fillCorrectWords') || '0');
        localStorage.setItem('fillCorrectWords', currentCorrect + value);
        break;
      case 'vocabulary_correct':
        const currentVocab = parseInt(localStorage.getItem('vocabularyCorrectWords') || '0');
        localStorage.setItem('vocabularyCorrectWords', currentVocab + value);
        break;
      case 'zodiac_passed':
        const passedAtlas = JSON.parse(localStorage.getItem('passed_atlas') || '[]');
        if (!passedAtlas.includes(value)) {
          passedAtlas.push(value);
          localStorage.setItem('passed_atlas', JSON.stringify(passedAtlas));
        }
        break;
    }
    
    // 檢查新成就
    setTimeout(() => {
      this.checkForNewAchievements();
    }, 500);
  }
}

// 創建全局實例
window.achievementSystem = new AchievementSystem(); 
