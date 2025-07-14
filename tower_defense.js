// tower_defense.js - 神魔之塔風格的卡牌打掛系統

// 遊戲狀態
let gameState = {
  playerTeam: [],
  enemyTeam: [],
  isBattleActive: false,
  currentTurn: 'player'
};

// 玩家狀態
let playerStatus = {
  coins: 0,
  stars: 0,
  exp: 0,
  stage: 1
};

// ====== 劇情模板與顯示 ======
const storyTemplates = [
  "在遙遠的星界彼端，十二星座的守護者們正面臨一場前所未有的危機。傳說中的黑暗魔神甦醒，祂的陰影正逐漸吞噬星辰的光芒。此刻，你的隊伍受召集結，必須穿越「星之試煉塔」，擊敗潛伏在每一層的魔物，尋回失落的星之碎片。當你踏入第${level}關，神秘的星光在腳下閃爍，一道低語在耳邊響起：「唯有勇氣與智慧，方能照亮前路。準備好迎接新的挑戰了嗎？」【任務】擊敗本層守護者，獲得星之碎片！",
  "星辰之塔的門緩緩開啟，你感受到一股強大的壓力從塔內湧出。據說每一層都潛藏著古老的星座試煉，只有真正的勇者才能突破。第${level}關的守護者正等待著你的到來。你是否已經準備好，迎接命運的考驗？",
  "夜空閃爍，星座的力量在你身邊環繞。當你邁入第${level}關，四周景色瞬間變幻，彷彿進入另一個世界。這裡的魔物比以往更強大，但只要堅持信念，就能戰勝一切。"
];
function getRandomStory(level) {
  const idx = Math.floor(Math.random() * storyTemplates.length);
  return storyTemplates[idx].replace(/\$\{level\}/g, level);
}

// ====== 單字聽寫練習 ======
function getRandomVocab(constellation) {
  if (!window.vocabData || !vocabData[constellation]) return null;
  const vocabList = vocabData[constellation];
  if (!vocabList || vocabList.length === 0) return null;
  return vocabList[Math.floor(Math.random() * vocabList.length)];
}

let currentVocabPractice = null;
function showVocabPracticeModal(card) {
  // 題目：該卡牌星座隨機單字
  const vocab = getRandomVocab(card.category || card.constellation || 'aries');
  if (!vocab) return;
  currentVocabPractice = vocab;
  const modal = document.getElementById('vocab-practice-modal');
  const input = document.getElementById('vocab-practice-input');
  const feedback = document.getElementById('vocab-practice-feedback');
  feedback.textContent = '';
  input.value = '';
  modal.style.display = 'flex';
  input.focus();
  speakVocab(vocab.en);
}
function speakVocab(word) {
  if (!window.speechSynthesis) return;
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = 'en-US';
  utter.rate = 0.85;
  window.speechSynthesis.speak(utter);
}
// 綁定事件
window.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('vocab-practice-play');
  const submitBtn = document.getElementById('vocab-practice-submit');
  const input = document.getElementById('vocab-practice-input');
  const feedback = document.getElementById('vocab-practice-feedback');
  if (playBtn) playBtn.onclick = () => {
    if (currentVocabPractice) speakVocab(currentVocabPractice.en);
  };
  if (submitBtn) submitBtn.onclick = checkVocabPracticeAnswer;
  if (input) input.onkeydown = (e) => {
    if (e.key === 'Enter') checkVocabPracticeAnswer();
  };
});
function checkVocabPracticeAnswer() {
  const input = document.getElementById('vocab-practice-input');
  const feedback = document.getElementById('vocab-practice-feedback');
  if (!currentVocabPractice || !input) return;
  const ans = input.value.trim().toLowerCase();
  if (ans === currentVocabPractice.en.toLowerCase()) {
    feedback.textContent = '✅ 正確！';
    setTimeout(() => {
      document.getElementById('vocab-practice-modal').style.display = 'none';
      currentVocabPractice = null;
    }, 800);
  } else {
    feedback.textContent = `❌ 錯誤，再試一次！`;
  }
}

// 初始化遊戲
function initGame() {
  updateCardLibrary();
  updateTeamDisplay();
  updateTeamStats();
  addBattleLog('神魔之塔系統已啟動！', 'system');
}

// 更新卡牌庫顯示
function updateCardLibrary() {
  const cardGrid = document.getElementById('card-grid');
  cardGrid.innerHTML = '';
  
  // 顯示前20張卡牌
  baseCards.slice(0, 20).forEach((card, index) => {
    const cardElement = createCardElement(card, index);
    cardGrid.appendChild(cardElement);
  });
}

// 創建卡牌元素
function createCardElement(card, index) {
  const cardDiv = document.createElement('div');
  cardDiv.className = `card ${card.rarity === '超稀有' ? 'epic' : card.rarity === '稀有' ? 'rare' : 'common'}`;
  cardDiv.draggable = true;
  cardDiv.dataset.cardIndex = index;
  
  cardDiv.innerHTML = `
    <img src="${card.image}" alt="${card.zh}" onerror="this.src='img/card_back.jpeg'">
    <div class="label">
      <div class="chinese-text">${card.zh}</div>
      <div class="english-text">${card.word}</div>
    </div>
    <div class="category-tag">${card.category}</div>
  `;
  
  // 點擊加入隊伍
  cardDiv.addEventListener('click', () => {
    const emptySlot = gameState.playerTeam.findIndex(slot => !slot);
    if (emptySlot !== -1) {
      addCardToTeam(card, emptySlot);
    } else {
      alert('隊伍已滿！');
    }
  });
  
  // 拖拽功能
  cardDiv.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', index);
  });
  
  return cardDiv;
}

// 更新隊伍顯示
function updateTeamDisplay() {
  const teamSlots = document.querySelectorAll('.team-slot');
  
  teamSlots.forEach((slot, index) => {
    slot.innerHTML = '';
    
    if (gameState.playerTeam[index]) {
      const card = gameState.playerTeam[index];
      slot.classList.add('filled');
      
      const cardElement = createTeamCardElement(card);
      slot.appendChild(cardElement);
    } else {
      slot.classList.remove('filled');
      slot.innerHTML = '<span>拖放卡牌</span>';
    }
  });
}

// 創建隊伍卡牌元素
function createTeamCardElement(card) {
  const cardDiv = document.createElement('div');
  cardDiv.className = `card ${card.rarity === '超稀有' ? 'epic' : card.rarity === '稀有' ? 'rare' : 'common'}`;
  cardDiv.style.width = '100px';
  cardDiv.style.height = '140px';
  const healthPercent = card.battleStats ? (card.battleStats.hp / card.battleStats.maxHp) * 100 : 100;
  const expPercent = card.expToNext ? Math.min(100, (card.exp / card.expToNext) * 100) : 0;
  cardDiv.innerHTML = `
    <div style="position:absolute;top:4px;left:8px;font-size:0.9em;color:#ffd700;font-weight:bold;">Lv.${card.level||1}</div>
    <img src="${card.image}" alt="${card.zh}" onerror="this.src='img/card_back.jpeg'">
    <div class="label">
      <div class="chinese-text">${card.zh}</div>
      <div class="english-text">${card.word}</div>
    </div>
    <div class="health-bar"><div class="health-fill" style="width: ${healthPercent}%"></div></div>
    <div style="height:6px;width:90%;margin:2px auto 0 auto;background:#222;border-radius:3px;overflow:hidden;">
      <div style="height:100%;background:linear-gradient(90deg,#a259ff,#ffd700);width:${expPercent}%;transition:width 0.3s;"></div>
    </div>
    <div style="font-size:0.7em;color:#a259ff;text-align:center;">EXP ${card.exp||0}/${card.expToNext||getCardLevelExp(card.level||1)}</div>
  `;
  cardDiv.addEventListener('click', () => {
    const cardIndex = gameState.playerTeam.indexOf(card);
    removeCardFromTeam(cardIndex);
  });
  return cardDiv;
}

// 添加卡牌到隊伍
function addCardToTeam(card, slotIndex) {
  if (slotIndex >= 0 && slotIndex < 4) {
    // 檢查是否已經在隊伍中
    if (gameState.playerTeam.find(c => c && c.word === card.word)) {
      addBattleLog(`此卡牌「${card.zh}」已在隊伍中，不能重複加入！`, 'enemy');
      return;
    }
    const battleCard = enhanceCardForBattle(card);
    gameState.playerTeam[slotIndex] = battleCard;
    updateTeamDisplay();
    updateTeamStats();
    addBattleLog(`將 ${card.zh} 加入隊伍`, 'player');
  }
}

// 從隊伍移除卡牌
function removeCardFromTeam(slotIndex) {
  if (gameState.playerTeam[slotIndex]) {
    const card = gameState.playerTeam[slotIndex];
    gameState.playerTeam[slotIndex] = null;
    updateTeamDisplay();
    updateTeamStats();
    addBattleLog(`移除 ${card.zh} 離開隊伍`, 'player');
  }
}

// 增強卡牌戰鬥屬性
function enhanceCardForBattle(card) {
  const rarityMultipliers = {
    '普通': { attack: 100, defense: 50, hp: 800 },
    '稀有': { attack: 200, defense: 100, hp: 1200 },
    '超稀有': { attack: 400, defense: 200, hp: 2000 }
  };
  const multiplier = rarityMultipliers[card.rarity] || rarityMultipliers['普通'];
  return {
    ...card,
    battleStats: {
      attack: multiplier.attack + Math.floor(Math.random() * 100),
      defense: multiplier.defense + Math.floor(Math.random() * 50),
      hp: multiplier.hp + Math.floor(Math.random() * 200),
      maxHp: multiplier.hp + Math.floor(Math.random() * 200)
    },
    level: 1,
    exp: 0,
    expToNext: getCardLevelExp(1)
  };
}

// 更新隊伍統計
function updateTeamStats() {
  const stats = gameState.playerTeam.reduce((acc, card) => {
    if (card && card.battleStats) {
      acc.totalAttack += card.battleStats.attack;
      acc.totalDefense += card.battleStats.defense;
      acc.totalHp += card.battleStats.hp;
    }
    return acc;
  }, { totalAttack: 0, totalDefense: 0, totalHp: 0 });
  
  document.getElementById('total-attack').textContent = stats.totalAttack;
  document.getElementById('total-defense').textContent = stats.totalDefense;
  document.getElementById('total-hp').textContent = stats.totalHp;
}

// 進入關卡時觸發單字聽寫練習
function showVocabPracticeModalForStage(callback) {
  // 以玩家隊伍第一張卡的星座為題庫，若無則預設 aries
  let constellation = 'aries';
  if (gameState.playerTeam && gameState.playerTeam[0] && (gameState.playerTeam[0].category || gameState.playerTeam[0].constellation)) {
    constellation = gameState.playerTeam[0].category || gameState.playerTeam[0].constellation;
  }
  const vocab = getRandomVocab(constellation);
  if (!vocab) { callback && callback(); return; }
  currentVocabPractice = vocab;
  const modal = document.getElementById('vocab-practice-modal');
  const input = document.getElementById('vocab-practice-input');
  const feedback = document.getElementById('vocab-practice-feedback');
  feedback.textContent = '';
  input.value = '';
  modal.style.display = 'flex';
  input.focus();
  speakVocab(vocab.en);
  // 修改 checkVocabPracticeAnswer 行為
  window._vocabPracticeCallback = callback;
}
// 修改 checkVocabPracticeAnswer
function checkVocabPracticeAnswer() {
  const input = document.getElementById('vocab-practice-input');
  const feedback = document.getElementById('vocab-practice-feedback');
  if (!currentVocabPractice || !input) return;
  const ans = input.value.trim().toLowerCase();
  if (ans === currentVocabPractice.en.toLowerCase()) {
    feedback.textContent = '✅ 正確！';
    setTimeout(() => {
      document.getElementById('vocab-practice-modal').style.display = 'none';
      currentVocabPractice = null;
      if (window._vocabPracticeCallback) {
        window._vocabPracticeCallback();
        window._vocabPracticeCallback = null;
      }
    }, 800);
  } else {
    feedback.textContent = `❌ 錯誤，再試一次！`;
  }
}

// 開始戰鬥
function startBattle() {
  if (gameState.playerTeam.filter(card => card).length === 0) {
    alert('請先組建隊伍！');
    return;
  }
  // ===== 顯示劇情區塊 =====
  const storyBox = document.getElementById('story-box');
  if (storyBox) {
    storyBox.innerHTML = getRandomStory(playerStatus.stage);
    storyBox.style.display = '';
    // 3 秒後自動進行單字練習
    setTimeout(() => {
      storyBox.style.display = 'none';
      showVocabPracticeModalForStage(actuallyStartBattle);
    }, 3000);
  } else {
    showVocabPracticeModalForStage(actuallyStartBattle);
  }
}

// 將原本 startBattle 的主體邏輯移到 actuallyStartBattle
function actuallyStartBattle() {
  generateEnemyTeam();
  gameState.isBattleActive = true;
  gameState.currentTurn = 'player';
  updateBattleDisplay();
  addBattleLog('戰鬥開始！', 'system');
  setTimeout(() => {
    battleTurn();
  }, 1000);
}

// 生成敵人隊伍
function generateEnemyTeam() {
  gameState.enemyTeam = [];
  const enemyCount = Math.min(3, gameState.playerTeam.filter(card => card).length);
  
  for (let i = 0; i < enemyCount; i++) {
    const randomCard = baseCards[Math.floor(Math.random() * baseCards.length)];
    const enemyCard = enhanceCardForBattle(randomCard);
    enemyCard.battleStats.attack = Math.floor(enemyCard.battleStats.attack * 1.2);
    enemyCard.battleStats.hp = Math.floor(enemyCard.battleStats.hp * 1.1);
    gameState.enemyTeam.push(enemyCard);
  }
}

// 戰鬥回合
function battleTurn() {
  if (!gameState.isBattleActive) return;
  
  if (gameState.currentTurn === 'player') {
    playerTurn();
  } else {
    enemyTurn();
  }
}

// 玩家回合
function playerTurn() {
  addBattleLog('玩家回合', 'player');
  
  const playerCards = gameState.playerTeam.filter(card => card && card.battleStats.hp > 0);
  const enemyCards = gameState.enemyTeam.filter(card => card && card.battleStats.hp > 0);
  
  if (enemyCards.length === 0) {
    endBattle(true);
    return;
  }
  
  playerCards.forEach((playerCard) => {
    if (enemyCards.length > 0) {
      const targetIndex = Math.floor(Math.random() * enemyCards.length);
      const target = enemyCards[targetIndex];
      
      const damage = calculateDamage(playerCard, target);
      target.battleStats.hp -= damage;
      
      addBattleLog(`${playerCard.zh} 攻擊 ${target.zh}，造成 ${damage} 點傷害`, 'player');
      
      if (target.battleStats.hp <= 0) {
        target.battleStats.hp = 0;
        addBattleLog(`${target.zh} 被擊敗！`, 'enemy');
      }
    }
  });
  
  updateBattleDisplay();
  
  setTimeout(() => {
    gameState.currentTurn = 'enemy';
    battleTurn();
  }, 1500);
}

// 敵人回合
function enemyTurn() {
  addBattleLog('敵人回合', 'enemy');
  
  const playerCards = gameState.playerTeam.filter(card => card && card.battleStats.hp > 0);
  const enemyCards = gameState.enemyTeam.filter(card => card && card.battleStats.hp > 0);
  
  if (playerCards.length === 0) {
    endBattle(false);
    return;
  }
  
  enemyCards.forEach((enemyCard) => {
    if (playerCards.length > 0) {
      const targetIndex = Math.floor(Math.random() * playerCards.length);
      const target = playerCards[targetIndex];
      
      const damage = calculateDamage(enemyCard, target);
      target.battleStats.hp -= damage;
      
      addBattleLog(`${enemyCard.zh} 攻擊 ${target.zh}，造成 ${damage} 點傷害`, 'enemy');
      
      if (target.battleStats.hp <= 0) {
        target.battleStats.hp = 0;
        addBattleLog(`${target.zh} 被擊敗！`, 'player');
      }
    }
  });
  
  updateBattleDisplay();
  
  setTimeout(() => {
    gameState.currentTurn = 'player';
    battleTurn();
  }, 1500);
}

// 計算傷害
function calculateDamage(attacker, defender) {
  const baseDamage = attacker.battleStats.attack;
  const defense = defender.battleStats.defense;
  
  let damage = Math.max(baseDamage - defense * 0.5, baseDamage * 0.1);
  const variance = 0.8 + Math.random() * 0.4;
  damage = Math.floor(damage * variance);
  
  return Math.max(1, damage);
}

// 結束戰鬥
function endBattle(playerWon) {
  gameState.isBattleActive = false;
  
  if (playerWon) {
    addBattleLog('戰鬥勝利！', 'system');
    // === 勝利獎勵 ===
    const coins = Math.floor(Math.random() * 20) + 20;
    const stars = Math.floor(Math.random() * 3) + 1;
    const exp = Math.floor(Math.random() * 30) + 20;
    playerStatus.coins += coins;
    playerStatus.stars += stars;
    playerStatus.exp += exp;
    playerStatus.stage += 1;
    addBattleLog(`獲得 金幣${coins}、星星${stars}、經驗值${exp}，進入第${playerStatus.stage}關`, 'system');
    // === 卡牌升級經驗 ===
    gameState.playerTeam.forEach(card => {
      if (card) {
        if (!card.level) card.level = 1;
        if (!card.exp) card.exp = 0;
        if (!card.expToNext) card.expToNext = getCardLevelExp(card.level);
        const cardExp = Math.floor(Math.random() * 20) + 10;
        card.exp += cardExp;
        addBattleLog(`${card.zh} 獲得 ${cardExp} 經驗`, 'skill');
        // 升級
        while (card.exp >= card.expToNext) {
          card.exp -= card.expToNext;
          card.level++;
          card.expToNext = getCardLevelExp(card.level);
          // 屬性提升
          card.battleStats.attack = Math.floor(card.battleStats.attack * 1.08);
          card.battleStats.defense = Math.floor(card.battleStats.defense * 1.08);
          card.battleStats.maxHp = Math.floor(card.battleStats.maxHp * 1.12);
          card.battleStats.hp = card.battleStats.maxHp;
          addBattleLog(`${card.zh} 升級到 Lv.${card.level}！屬性提升！`, 'skill');
          onCardLevelUp(card);
        }
      }
    });
    // === 掉落新卡牌或碎片 ===
    if (Math.random() < 0.4) {
      // 40% 機率掉落新卡
      const notOwned = baseCards.filter(c => !gameState.playerTeam.find(t => t && t.word === c.word));
      if (notOwned.length > 0) {
        const drop = notOwned[Math.floor(Math.random() * notOwned.length)];
        addBattleLog(`掉落新卡牌：${drop.zh}！`, 'system');
        // 自動加入卡牌庫（可擴充為碎片）
      } else {
        addBattleLog('掉落卡牌碎片！', 'system');
      }
    }
    // 關卡推進
    gameState.playerTeam.forEach(card => {
      if (card) {
        card.battleStats.hp = card.battleStats.maxHp;
      }
    });
  } else {
    addBattleLog('戰鬥失敗！', 'system');
  }
  updatePlayerStatusBar();
  updateBattleDisplay();
}

// 更新戰鬥顯示
function updateBattleDisplay() {
  const playerArea = document.getElementById('player-area');
  const enemyArea = document.getElementById('enemy-area');
  
  playerArea.innerHTML = '';
  enemyArea.innerHTML = '';
  
  gameState.playerTeam.forEach((card) => {
    if (card) {
      const cardElement = createBattleCardElement(card, 'player');
      playerArea.appendChild(cardElement);
    }
  });
  
  gameState.enemyTeam.forEach((card) => {
    if (card) {
      const cardElement = createBattleCardElement(card, 'enemy');
      enemyArea.appendChild(cardElement);
    }
  });
}

// 創建戰鬥卡牌元素
function createBattleCardElement(card, side) {
  const cardDiv = document.createElement('div');
  cardDiv.className = `${side}-card`;
  const healthPercent = (card.battleStats.hp / card.battleStats.maxHp) * 100;
  const expPercent = card.expToNext ? Math.min(100, (card.exp / card.expToNext) * 100) : 0;
  cardDiv.innerHTML = `
    <div style="padding: 5px; font-size: 10px; text-align: center;">
      <div style="font-weight: bold; margin-bottom: 2px;">${card.zh} Lv.${card.level||1}</div>
      <div style="font-size: 8px; color: #ccc;">HP: ${card.battleStats.hp}/${card.battleStats.maxHp}</div>
      <div style="font-size: 8px; color: #ff6b6b;">ATK: ${card.battleStats.attack}</div>
      <div style="height:5px;width:90%;margin:2px auto 0 auto;background:#222;border-radius:3px;overflow:hidden;">
        <div style="height:100%;background:linear-gradient(90deg,#a259ff,#ffd700);width:${expPercent}%;transition:width 0.3s;"></div>
      </div>
      <div style="font-size:0.7em;color:#a259ff;">EXP ${card.exp||0}/${card.expToNext||getCardLevelExp(card.level||1)}</div>
    </div>
    <div class="health-bar">
      <div class="health-fill" style="width: ${healthPercent}%; background: ${healthPercent > 50 ? '#00ff00' : healthPercent > 25 ? '#ffff00' : '#ff0000'};"></div>
    </div>
  `;
  return cardDiv;
}

// 使用隊伍技能
function useTeamSkill() {
  if (!gameState.isBattleActive || gameState.currentTurn !== 'player') {
    alert('只能在玩家回合使用技能！');
    return;
  }
  
  addBattleLog('使用隊伍技能！', 'skill');
  // 簡化的技能效果：恢復所有隊友血量
  gameState.playerTeam.forEach(card => {
    if (card && card.battleStats.hp > 0) {
      const healAmount = Math.floor(card.battleStats.maxHp * 0.3);
      card.battleStats.hp = Math.min(card.battleStats.maxHp, card.battleStats.hp + healAmount);
    }
  });
  
  updateBattleDisplay();
}

// 自動戰鬥
function autoBattle() {
  if (gameState.isBattleActive) {
    gameState.isBattleActive = false;
    addBattleLog('自動戰鬥已停止', 'system');
  } else {
    startBattle();
  }
}

// 添加戰鬥日誌
function addBattleLog(message, type) {
  const battleLog = document.getElementById('battle-log');
  const logEntry = document.createElement('div');
  logEntry.className = `log-entry ${type}`;
  logEntry.textContent = message;
  
  battleLog.appendChild(logEntry);
  battleLog.scrollTop = battleLog.scrollHeight;
  
  while (battleLog.children.length > 10) {
    battleLog.removeChild(battleLog.firstChild);
  }
}

// 設置拖放功能
function setupDragAndDrop() {
  const teamSlots = document.querySelectorAll('.team-slot');
  
  teamSlots.forEach((slot, index) => {
    slot.addEventListener('dragover', (e) => {
      e.preventDefault();
      slot.style.borderColor = '#ffd700';
    });
    
    slot.addEventListener('dragleave', (e) => {
      e.preventDefault();
      slot.style.borderColor = '#00ffff';
    });
    
    slot.addEventListener('drop', (e) => {
      e.preventDefault();
      slot.style.borderColor = '#00ffff';
      
      const cardIndex = e.dataTransfer.getData('text/plain');
      if (cardIndex !== '') {
        const card = baseCards[parseInt(cardIndex)];
        addCardToTeam(card, index);
      }
    });
  });
}

// 卡牌升級經驗需求
function getCardLevelExp(level) {
  return 100 + (level - 1) * 50;
}

// 卡牌升級時只顯示升級提示
function onCardLevelUp(card) {
  addBattleLog(`【單字練習觸發點】${card.zh} 升級到 Lv.${card.level}！`, 'skill');
}

// 更新玩家狀態UI
function updatePlayerStatusBar() {
  document.getElementById('status-coins').textContent = `金幣：${playerStatus.coins}`;
  document.getElementById('status-stars').textContent = `星星：${playerStatus.stars}`;
  document.getElementById('status-exp').textContent = `經驗值：${playerStatus.exp}`;
  document.getElementById('status-stage').textContent = `關卡：${playerStatus.stage}`;
}

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', () => {
  initGame();
  setupDragAndDrop();
  updatePlayerStatusBar();
}); 