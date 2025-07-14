// 第四關專用JavaScript - 優化版本

// 困難單字翻譯字典
const DIFFICULT_WORDS_TRANSLATION = {
    // 基本詞彙
    'student': '學生', 'teacher': '老師', 'doctor': '醫生', 'friend': '朋友',
    'brother': '兄弟', 'sister': '姊妹', 'parents': '父母', 'classmates': '同學',
    
    // 形容詞
    'beautiful': '美麗的', 'happy': '快樂的', 'tall': '高的', 'smart': '聰明的',
    'cold': '冷的', 'busy': '忙碌的', 'tired': '疲倦的', 'hungry': '餓的',
    'excited': '興奮的', 'ready': '準備好的', 'late': '遲到的', 'early': '早的',
    'good': '好的', 'nice': '好的', 'kind': '善良的', 'lucky': '幸運的',
    'very': '非常', 'always': '總是', 'best': '最好的', 'one': '一個',
    'only': '只有', 'absolutely': '絕對地', 'remarkable': '卓越的',
    'skilled': '熟練的', 'consistently': '持續地', 'talented': '有才華的',
    'remarkably': '非常地', 'undoubtedly': '無疑地', 'genuinely': '真誠地',
    'surprised': '驚訝的', 'significantly': '顯著地', 'improved': '進步的',
    'essentially': '本質上', 'correct': '正確的', 'vital': '重要的',
    'challenging': '具有挑戰性的', 'completely': '完全地', 'satisfied': '滿意的',
    'ultimate': '最終的', 'integral': '不可或缺的', 'unparalleled': '無與倫比的',
    'fully': '充分地', 'aware': '意識到的', 'chief': '首席的', 'main': '主要的',
    
    // 代詞
    'my': '我的', 'your': '你的', 'it': '它', 'we': '我們', 'they': '他們',
    'he': '他', 'she': '她', 'you': '你', 'I': '我',
    
    // 名詞
    'cat': '貓', 'dog': '狗', 'book': '書', 'books': '書籍', 'table': '桌子',
    'home': '家', 'park': '公園', 'weather': '天氣', 'flowers': '花朵',
    'sky': '天空', 'cars': '汽車', 'guest': '客人', 'player': '球員',
    'favorites': '最愛', 'trip': '旅行', 'friends': '朋友們', 'middle': '中間',
    'road': '道路', 'part': '部分', 'group': '團體', 'leader': '領導者',
    'answer': '答案', 'champions': '冠軍', 'test': '測試', 'spiders': '蜘蛛',
    'winner': '獲勝者', 'committee': '委員會', 'responsibility': '責任',
    'mission': '任務', 'subject': '科目', 'case': '案件', 'players': '球員們',
    'performer': '表演者', 'component': '組成部分', 'people': '人們',
    'students': '學生們', 'survivors': '倖存者', 'consequences': '後果',
    'candidate': '候選人', 'manager': '經理', 'investigator': '調查員',
    'project': '專案', 'situation': '情況', 'team': '團隊', 'results': '結果',
    'organizer': '組織者', 'event': '活動', 'system': '系統', 'process': '過程',
    'company': '公司', 'achievements': '成就', 'engine': '引擎',
    
    // 專有名詞
    'Anna': '安娜', 'Tom': '湯姆', 'Jerry': '傑瑞', 'Mathematics': '數學', 'English': '英語',
    
    // 介詞和副詞
    'at': '在', 'in': '在...裡面', 'on': '在...上面', 'here': '這裡',
    'now': '現在', 'today': '今天', 'outside': '外面', 'time': '時間',
    
    // 動詞相關
    'help': '幫助', 'welcome': '歡迎', 'investigating': '調查中',
    'understands': '理解', 'arrive': '到達',
    
    // 其他
    'police': '警察', 'sunny': '晴朗的', 'day': '天', 'blue': '藍色的',
    'white': '白色的', 'red': '紅色的', 'captain': '隊長', 'afraid': '害怕的',
    'decision-makers': '決策者'
};

// 遊戲狀態
let gameState = {
    currentLevel: 'level4',
    currentSubLevel: 'sub1',
    currentQuestion: 0,
    score: 0,
    stars: 0,
    timeLeft: 180,
    questions: [],
    currentQuestionData: null,
    timer: null,
    isGameActive: false,
    isSoundEnabled: true,
    logicHintUsed: 0
};

// 音效物件
let sounds = {};

// 困難單字提示狀態
let wordHintState = {
    currentIndex: 0,
    totalWords: 0,
    words: []
};

// 載入音效
function loadSounds() {
    try {
        sounds = {
            correct: new Audio('sound/correct.mp3'),
            wrong: new Audio('sound/wrong.mp3'),
            click: new Audio('sound/click.mp3'),
            complete: new Audio('sound/unlock.mp3'), // 使用 unlock.mp3 替代不存在的 completeSound.mp3
            unlock: new Audio('sound/unlock.mp3'),
            shine: new Audio('sound/shine.mp3')
        };
        
        Object.values(sounds).forEach(sound => {
            sound.load();
            sound.volume = 0.4;
            sound.preload = 'auto';
        });
        
        // 背景音樂
        if (!window.bgMusic) {
            window.bgMusic = new Audio('sound/午後放鬆時光（純音樂）.mp3');
            window.bgMusic.loop = true;
            window.bgMusic.volume = 0.25;
        }
        
        // 自動播放背景音樂（需用戶互動觸發）
        document.body.addEventListener('click', function playBGOnce() {
            if (gameState.isSoundEnabled) {
                window.bgMusic.play().catch(()=>{});
            }
            document.body.removeEventListener('click', playBGOnce);
        });
        
        // 若已啟用音效則自動播放
        if (gameState.isSoundEnabled) {
            setTimeout(()=>{ window.bgMusic.play().catch(()=>{}); }, 500);
        } else {
            window.bgMusic.pause();
        }
    } catch (error) {
        console.log('音效載入失敗:', error);
        gameState.isSoundEnabled = false;
    }
}

// 播放音效
function playSound(soundName) {
    if (!gameState.isSoundEnabled || !sounds[soundName]) {
        return;
    }

    try {
        const sound = sounds[soundName];
        sound.pause();
        sound.currentTime = 0;
        sound.play().catch(error => {
            console.log('音效播放失敗:', error);
        });
    } catch (error) {
        console.log('音效播放錯誤:', error);
    }
}

// 切換音效開關
function toggleSound() {
    gameState.isSoundEnabled = !gameState.isSoundEnabled;
    const soundToggle = document.getElementById('soundToggle');
    
    if (gameState.isSoundEnabled) {
        soundToggle.textContent = '🔊';
        soundToggle.classList.remove('muted');
        if (window.bgMusic) window.bgMusic.play().catch(()=>{});
    } else {
        soundToggle.textContent = '🔇';
        soundToggle.classList.add('muted');
        if (window.bgMusic) window.bgMusic.pause();
    }
    
    saveUserData();
}

// 載入用戶數據
function loadUserData() {
    try {
        // 從LinkageSystem載入星星數據
        if (typeof LinkageSystem !== 'undefined' && LinkageSystem.stars) {
            gameState.stars = LinkageSystem.stars.get();
        } else {
            // 備用方案：從localStorage載入
            gameState.stars = parseInt(localStorage.getItem('totalStars') || '0');
        }
        
        // 載入音效設定
        const savedData = localStorage.getItem('grammarGameData');
        if (savedData) {
            const userData = JSON.parse(savedData);
            gameState.isSoundEnabled = userData.isSoundEnabled !== false;
        }
        
        // 初始化音效開關狀態
        const soundToggle = document.getElementById('soundToggle');
        if (gameState.isSoundEnabled) {
            soundToggle.textContent = '🔊';
            soundToggle.classList.remove('muted');
        } else {
            soundToggle.textContent = '🔇';
            soundToggle.classList.add('muted');
        }
    } catch (error) {
        console.log('載入用戶數據失敗:', error);
    }
}

// 保存用戶數據
function saveUserData() {
    try {
        // 同步星星數據到LinkageSystem
        if (typeof LinkageSystem !== 'undefined' && LinkageSystem.stars) {
            LinkageSystem.stars.set(gameState.stars);
        } else {
            // 備用方案：直接保存到localStorage
            localStorage.setItem('totalStars', gameState.stars.toString());
        }
        
        // 保存音效設定
        const userData = {
            isSoundEnabled: gameState.isSoundEnabled,
            lastPlayed: new Date().toISOString()
        };
        localStorage.setItem('grammarGameData', JSON.stringify(userData));
    } catch (error) {
        console.log('保存用戶數據失敗:', error);
    }
}

// 更新關卡顯示
function updateLevelDisplay() {
    const currentSubLevelData = LEVEL_CONFIG[gameState.currentSubLevel];
    document.getElementById('levelTitle').textContent = currentSubLevelData.name;
    document.getElementById('levelSubtitle').textContent = 'be動詞混合現在';
    document.getElementById('levelDescription').textContent = currentSubLevelData.description;
}

// 初始化遊戲
function initGame() {
    loadSounds();
    loadUserData();
    // 使用新題庫系統
    const currentSubLevelData = LEVEL_CONFIG[gameState.currentSubLevel];
    gameState.questions = getRandomQuestions(gameState.currentSubLevel, 10);
    gameState.logicHintUsed = 0;
    updateLevelDisplay();
    startGame();
}

// 開始遊戲
function startGame() {
    gameState.isGameActive = true;
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.timeLeft = 180;
    
    updateDisplay();
    loadQuestion();
    startTimer();
}

// 載入題目
function loadQuestion() {
    if (gameState.currentQuestion >= gameState.questions.length) {
        endGame();
        return;
    }
    
    gameState.currentQuestionData = gameState.questions[gameState.currentQuestion];
    document.getElementById('questionText').textContent = gameState.currentQuestionData.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    gameState.currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    // 隱藏下一題按鈕
    document.getElementById('nextBtn').style.display = 'none';
    // 隱藏所有提示區塊
    hideAllHints();
    // 重置困難單字提示狀態
    resetWordHintState();
    // 顯示小關進度
    let progressDiv = document.getElementById('subLevelProgress');
    if (!progressDiv) {
        progressDiv = document.createElement('div');
        progressDiv.id = 'subLevelProgress';
        progressDiv.style.cssText = 'margin: 10px 0 0 0; font-size: 1.1em; color: #4a5568; font-weight: bold;';
        document.getElementById('questionContainer').appendChild(progressDiv);
    }
    progressDiv.textContent = `本小關進度：第${gameState.currentQuestion + 1} / ${gameState.questions.length}題`;
    updateProgress();
}

// 選擇答案
function selectAnswer(selectedIndex) {
    if (!gameState.isGameActive) return;
    playSound('click');
    const options = document.querySelectorAll('.option');
    const correctIndex = gameState.currentQuestionData.correct;
    
    // 禁用所有選項
    options.forEach(option => option.style.pointerEvents = 'none');
    
    if (selectedIndex === correctIndex) {
        // 答對
        options[selectedIndex].classList.add('correct');
        gameState.score += 10;
        gameState.stars += 2; // 答對獲得2顆星星
        if (typeof StarRewardSystem !== 'undefined') StarRewardSystem.addStars(2);
        
        // 檢查是否困難題（hard）
        if (gameState.currentQuestionData.difficulty === 'hard' || gameState.currentQuestionData.isHard) {
            gameState.stars += 3;
            if (typeof StarRewardSystem !== 'undefined') StarRewardSystem.addStars(3);
        }
        
        // 守護者雕像發光
        const statue = document.getElementById('guardianStatue');
        statue.classList.add('shine');
        setTimeout(() => statue.classList.remove('shine'), 500);
        playSound('correct');
        
        // 答對直接進入下一題
        setTimeout(() => {
            gameState.currentQuestion++;
            loadQuestion();
        }, 1000);
    } else {
        // 答錯
        options[selectedIndex].classList.add('incorrect');
        options[correctIndex].classList.add('correct');
        createFallingLeaf();
        playSound('wrong');
        
        // 答錯顯示解釋和下一題按鈕
        setTimeout(() => {
            showExplanation();
            document.getElementById('nextBtn').style.display = 'inline-block';
        }, 1500);
    }
    updateDisplay();
    saveUserData();
}

// 顯示解釋
function showExplanation() {
    const questionText = document.getElementById('questionText');
    const originalText = questionText.textContent;
    questionText.innerHTML = `
        <div style="margin-bottom: 15px;">${originalText}</div>
        <div class="answer-explanation">${gameState.currentQuestionData.explanation}</div>
    `;
    setTimeout(() => {
        gameState.currentQuestion++;
        loadQuestion();
    }, 2000);
}

// 重置困難單字提示狀態
function resetWordHintState() {
    wordHintState.currentIndex = 0;
    wordHintState.totalWords = 0;
    wordHintState.words = [];
    
    // 重置按鈕狀態
    const wordHintBtn = document.getElementById('wordHintBtn');
    if (wordHintBtn) {
        wordHintBtn.textContent = '困難單字提示 (10⭐)';
        wordHintBtn.disabled = false;
    }
}

// 使用困難單字提示
function useWordHint() {
    // 初始化時檢查星星並設置狀態
    if (wordHintState.currentIndex === 0) {
        if (gameState.stars < 10) {
            alert('星星不足！');
            return;
        }
        
        // 第一次點擊扣除星星
        playSound('click');
        gameState.stars -= 10;
        updateDisplay();
        saveUserData();
        
        // 設置困難單字列表
        const difficultWords = gameState.currentQuestionData.difficultWords || [];
        wordHintState.words = difficultWords.map(word => ({
            en: word,
            zh: DIFFICULT_WORDS_TRANSLATION[word] || word
        }));
        wordHintState.totalWords = wordHintState.words.length;
        
        if (wordHintState.totalWords === 0) {
            let hintDiv = document.getElementById('wordHintDiv');
            if (!hintDiv) {
                hintDiv = document.createElement('div');
                hintDiv.id = 'wordHintDiv';
                
                // 插入到hint-buttons區域上方
                const hintButtons = document.querySelector('.hint-buttons');
                if (hintButtons) {
                    hintButtons.parentNode.insertBefore(hintDiv, hintButtons);
                } else {
                    // 備用方案：插入到questionContainer後面
                    const questionContainer = document.getElementById('questionContainer');
                    questionContainer.parentNode.insertBefore(hintDiv, questionContainer.nextSibling);
                }
            }
            hintDiv.innerHTML = '<strong>本題無困難單字。</strong>';
            hintDiv.style.display = 'block';
            
            // 禁用按鈕
            const wordHintBtn = document.getElementById('wordHintBtn');
            wordHintBtn.textContent = '本題無困難單字';
            wordHintBtn.disabled = true;
            return;
        }
    }
    
    // 顯示當前困難單字
    if (wordHintState.currentIndex < wordHintState.totalWords) {
        const currentWord = wordHintState.words[wordHintState.currentIndex];
        
        let hintDiv = document.getElementById('wordHintDiv');
        if (!hintDiv) {
            hintDiv = document.createElement('div');
            hintDiv.id = 'wordHintDiv';
            
            // 插入到hint-buttons區域上方
            const hintButtons = document.querySelector('.hint-buttons');
            if (hintButtons) {
                hintButtons.parentNode.insertBefore(hintDiv, hintButtons);
            } else {
                // 備用方案：插入到questionContainer後面
                const questionContainer = document.getElementById('questionContainer');
                questionContainer.parentNode.insertBefore(hintDiv, questionContainer.nextSibling);
            }
        }
        
        // 累積顯示已點擊的困難單字
        const displayedWords = wordHintState.words.slice(0, wordHintState.currentIndex + 1);
        hintDiv.innerHTML = `<strong>困難單字：</strong><br>` +
            displayedWords.map(w => `<span class='word-block'>${w.en}</span> <span class='zh'>${w.zh}</span>`).join('<br>');
        hintDiv.style.display = 'block';
        
        wordHintState.currentIndex++;
        
        // 更新按鈕狀態
        const wordHintBtn = document.getElementById('wordHintBtn');
        if (wordHintState.currentIndex < wordHintState.totalWords) {
            wordHintBtn.textContent = `困難單字提示 (${wordHintState.currentIndex}/${wordHintState.totalWords})`;
        } else {
            wordHintBtn.textContent = '已顯示完畢';
            wordHintBtn.disabled = true;
        }
    }
}

// 使用判斷邏輯提示
function useLogicHint() {
    if (gameState.stars < 20) {
        alert('星星不足！');
        return;
    }
    playSound('click');
    gameState.stars -= 20;
    updateDisplay();
    saveUserData();
    
    // 處理提示區塊 - 插入到hint-buttons區域上方
    let logicHintDiv = document.getElementById('logicHintDiv');
    if (!logicHintDiv) {
        logicHintDiv = document.createElement('div');
        logicHintDiv.id = 'logicHintDiv';
        
        // 找到hint-buttons區域，插入到它的前面
        const hintButtons = document.querySelector('.hint-buttons');
        if (hintButtons) {
            hintButtons.parentNode.insertBefore(logicHintDiv, hintButtons);
        } else {
            // 備用方案：插入到questionContainer後面
            const questionContainer = document.getElementById('questionContainer');
            questionContainer.parentNode.insertBefore(logicHintDiv, questionContainer.nextSibling);
        }
    }
    
    // 顯示提示區塊
    logicHintDiv.style.display = 'block';
    // 使用題目專屬的判斷提示
    let logicHint = gameState.currentQuestionData.logicHint || '記住口訣：I用am，you/we/they用are，he/she/it用is。';
    logicHintDiv.innerHTML = `<strong>判斷邏輯提示：</strong>${logicHint}`;
}

// 跳過此題
function skipQuestion() {
    if (confirm('確定要跳過這題嗎？跳過後無法返回。')) {
        playSound('click');
        gameState.currentQuestion++;
        loadQuestion();
    }
}

// 下一題
function nextQuestion() {
    playSound('click');
    gameState.currentQuestion++;
    loadQuestion();
    document.getElementById('nextBtn').style.display = 'none';
}

// 開始計時器
function startTimer() {
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        updateDisplay();
        
        if (gameState.timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// 暫停/繼續功能
function pauseGame() {
    clearInterval(gameState.timer);
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('resumeBtn').style.display = 'inline-block';
}

function resumeGame() {
    startTimer();
    document.getElementById('pauseBtn').style.display = 'inline-block';
    document.getElementById('resumeBtn').style.display = 'none';
}

// 更新顯示
function updateDisplay() {
    document.getElementById('timeLeft').textContent = formatTime(gameState.timeLeft);
    const maxScore = gameState.questions.length * 10;
    document.getElementById('currentScore').textContent = `${gameState.score}/${maxScore}`;
    document.getElementById('starCount').textContent = gameState.stars;
    
    // 更新進度條
    const progress = (gameState.currentQuestion / gameState.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // 更新計時器顏色
    const timerElement = document.getElementById('timeLeft');
    if (gameState.timeLeft <= 30) {
        timerElement.style.color = '#e53e3e';
    } else if (gameState.timeLeft <= 60) {
        timerElement.style.color = '#ed8936';
    } else {
        timerElement.style.color = '#2d3748';
    }
    
    // 同步更新LinkageSystem的星星顯示
    if (typeof LinkageSystem !== 'undefined' && LinkageSystem.stars) {
        LinkageSystem.stars.updateDisplay();
    }
}

// 隱藏所有提示區塊
function hideAllHints() {
    // 隱藏單字提示
    const wordHintDiv = document.getElementById('wordHintDiv');
    if (wordHintDiv) {
        wordHintDiv.style.display = 'none';
    }
    // 隱藏判斷邏輯提示
    const logicHintDiv = document.getElementById('logicHintDiv');
    if (logicHintDiv) {
        logicHintDiv.style.display = 'none';
    }
}

// 更新進度
function updateProgress() {
    const progress = (gameState.currentQuestion / gameState.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// 結束遊戲
function endGame() {
    gameState.isGameActive = false;
    clearInterval(gameState.timer);
    const resultModal = document.getElementById('resultModal');
    const resultTitle = document.getElementById('resultTitle');
    const resultScore = document.getElementById('resultScore');
    const resultMessage = document.getElementById('resultMessage');
    const maxScore = gameState.questions.length * 10;
    resultScore.textContent = `分數：${gameState.score}/${maxScore}`;
    
    // 判斷目前小關
    let nextSub = null;
    if (gameState.currentSubLevel === 'sub1') nextSub = 'sub2';
    else if (gameState.currentSubLevel === 'sub2') nextSub = 'sub3';
    
    // 通關判斷
    if (gameState.score >= maxScore * 0.7) {
        if (nextSub) {
            resultTitle.textContent = '階段完成！';
            resultTitle.style.color = '#38a169';
            resultMessage.textContent = `你完成了${LEVEL_CONFIG[gameState.currentSubLevel].name}！點擊下方按鈕進入下一階段。`;
        } else {
            resultTitle.textContent = '恭喜通關！';
            resultTitle.style.color = '#38a169';
            resultMessage.textContent = `你成功完成了${LEVEL_CONFIG[gameState.currentSubLevel].name}！獲得「🎭 混合魔法石」1顆！`;
            // 獎勵寶石
            if (typeof gemSystem !== 'undefined') {
                gemSystem.addGem('be_verb_mixed_master', 3);
            }
            playSound('complete');
            playSound('unlock');
            
            // 播放通關背景音樂並暫停背景音樂
            try {
                // 暫停背景音樂
                if (window.bgMusic) {
                    window.bgMusic.pause();
                }
                
                if (!window.kidsHappyMusic) {
                    window.kidsHappyMusic = new Audio('sound/kids-happy-background-music-366043.mp3');
                    window.kidsHappyMusic.volume = 0.7;
                }
                window.kidsHappyMusic.pause();
                window.kidsHappyMusic.currentTime = 0;
                const playPromise = window.kidsHappyMusic.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        resultMessage.innerHTML += '<br><span style="color:#ff6b6b;font-size:1rem;">🎵 通關音樂播放失敗，請檢查瀏覽器設定</span>';
                        console.warn('通關音樂播放失敗', error);
                    });
                }
            } catch (e) {
                resultMessage.innerHTML += '<br><span style="color:#ff6b6b;font-size:1rem;">🎵 通關音樂播放失敗，請檢查瀏覽器設定</span>';
                console.warn('通關音樂播放失敗', e);
            }
        }
    } else {
        resultTitle.textContent = '挑戰失敗';
        resultTitle.style.color = '#e53e3e';
        resultMessage.textContent = `分數未達${Math.ceil(maxScore * 0.7)}分，請再接再厲！`;
    }
    saveUserData();
    
    // 顯示下一階段按鈕
    const actionBtns = resultModal.querySelector('.action-buttons');
    let nextBtn = document.getElementById('nextStageBtn');
    if (nextBtn) nextBtn.remove();
    if (nextSub && gameState.score >= maxScore * 0.7) {
        nextBtn = document.createElement('button');
        nextBtn.id = 'nextStageBtn';
        nextBtn.className = 'action-btn btn-primary';
        nextBtn.textContent = '進入下一階段';
        nextBtn.onclick = function() {
            playSound('click');
            gameState.currentSubLevel = nextSub;
            document.getElementById('resultModal').style.display = 'none';
            initGame();
        };
        actionBtns.appendChild(nextBtn);
    }
    resultModal.style.display = 'flex';
}

// 重新開始遊戲
function restartGame() {
    playSound('click');
    document.getElementById('resultModal').style.display = 'none';
    initGame();
}

// 返回選單
function goToMenu() {
    playSound('click');
    window.location.href = 'grammar_tower_select.html';
}

// 返回首頁
function goToHome() {
    playSound('click');
    window.location.href = 'index.html';
}

// 工具函數
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function createFallingLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'falling-leaf';
    leaf.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(leaf);
    
    setTimeout(() => {
        document.body.removeChild(leaf);
    }, 2000);
}

// 頁面載入完成後初始化遊戲
window.onload = function() {
    initGame();
};

// 頁面卸載時清理資源
window.addEventListener('beforeunload', () => {
    if (gameState.timer) {
        clearInterval(gameState.timer);
    }
    if (window.bgMusic) {
        window.bgMusic.pause();
    }
}); 