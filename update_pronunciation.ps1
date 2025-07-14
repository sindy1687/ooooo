# 批量為所有文法關卡添加發音功能
# 編碼設定
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# 關卡列表
$levels = @(
    "grammar_level2_1.html",
    "grammar_level3_1.html", 
    "grammar_level4_1.html",
    "grammar_level5_1.html",
    "grammar_level6_1.html",
    "grammar_level7_1.html",
    "grammar_level8_1.html",
    "grammar_level9_1.html",
    "grammar_level10_1.html",
    "grammar_level11_1.html",
    "grammar_level12_1.html",
    "grammar_level13_1.html",
    "grammar_level14_1.html",
    "grammar_level15_1.html",
    "grammar_level16_1.html",
    "grammar_level17_1.html",
    "grammar_level18_1.html",
    "grammar_level19_1.html",
    "grammar_level21_1.html"
)

# CSS樣式
$pronunciationCSS = @"

        /* 新增：發音按鈕樣式 */
        .pronunciation-btn {
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            color: #fff;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 1em;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px #ff6b6b55;
            font-weight: bold;
            margin-left: 12px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .pronunciation-btn:hover {
            transform: translateY(-1px) scale(1.05);
            box-shadow: 0 4px 16px #ff6b6bcc;
            background: linear-gradient(135deg, #ff8e8e, #ff6b6b);
        }

        .pronunciation-btn:active {
            transform: translateY(0) scale(0.98);
        }

        .pronunciation-btn:disabled {
            background: #666;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .question-header {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }
"@

# HTML結構
$questionHeaderHTML = @"
            <div class="question-header">
                <div class="question" id="questionText">準備開始遊戲...</div>
                <button class="pronunciation-btn" id="pronunciationBtn" onclick="playQuestionPronunciation()" style="display: none;">
                    🔊 發音
                </button>
            </div>
"@

# 發音函數
$pronunciationFunction = @"

        // 發音功能
        function playQuestionPronunciation() {
            if (!gameState.currentQuestionData || !gameState.currentQuestionData.question) {
                return;
            }

            const questionText = gameState.currentQuestionData.question;
            const pronunciationBtn = document.getElementById('pronunciationBtn');
            
            // 禁用按鈕防止重複點擊
            pronunciationBtn.disabled = true;
            pronunciationBtn.textContent = '🔊 發音中...';
            
            // 使用發音系統播放題目
            if (typeof SoundSystem !== 'undefined' && SoundSystem.speech) {
                SoundSystem.speech.speakQuestion(questionText, () => {
                    // 發音完成後恢復按鈕
                    pronunciationBtn.disabled = false;
                    pronunciationBtn.textContent = '🔊 發音';
                });
            } else {
                // 備用方案：使用瀏覽器原生語音合成
                if (window.speechSynthesis) {
                    const utterance = new SpeechSynthesisUtterance(questionText);
                    utterance.lang = 'en-US';
                    utterance.rate = 0.9;
                    utterance.pitch = 1.1;
                    
                    utterance.onend = () => {
                        pronunciationBtn.disabled = false;
                        pronunciationBtn.textContent = '🔊 發音';
                    };
                    
                    utterance.onerror = () => {
                        pronunciationBtn.disabled = false;
                        pronunciationBtn.textContent = '🔊 發音';
                    };
                    
                    window.speechSynthesis.speak(utterance);
                } else {
                    // 如果都不支援，直接恢復按鈕
                    pronunciationBtn.disabled = false;
                    pronunciationBtn.textContent = '🔊 發音';
                }
            }
        }
"@

foreach ($level in $levels) {
    Write-Host "處理關卡: $level"
    
    if (Test-Path $level) {
        $content = Get-Content $level -Raw -Encoding UTF8
        
        # 1. 添加CSS樣式
        if ($content -notmatch "pronunciation-btn") {
            $content = $content -replace "(\s+)</style>", "$pronunciationCSS`n$1</style>"
        }
        
        # 2. 修改題目容器結構
        if ($content -notmatch "question-header") {
            $content = $content -replace '<div class="question" id="questionText">準備開始遊戲\.\.\.</div>', $questionHeaderHTML
        }
        
        # 3. 添加發音系統引用
        if ($content -notmatch "js/sound\.js") {
            $content = $content -replace '(<script src="js/starRewardSystem\.js"></script>)', '$1`n    <script src="js/sound.js"></script>'
        }
        
        # 4. 修改loadQuestion函數
        if ($content -notmatch "pronunciationBtn\.style\.display") {
            $content = $content -replace '(gameState\.currentQuestionData = gameState\.questions\[gameState\.currentQuestion\];\s+document\.getElementById\("questionText"\)\.textContent = gameState\.currentQuestionData\.question;)', '$1
            
            // 顯示發音按鈕
            const pronunciationBtn = document.getElementById("pronunciationBtn");
            pronunciationBtn.style.display = "inline-flex";'
        }
        
        # 5. 添加發音函數
        if ($content -notmatch "playQuestionPronunciation") {
            $content = $content -replace '(window\.onload = function\(\) \{[^}]*\};)', "$1$pronunciationFunction"
        }
        
        # 保存文件
        Set-Content $level $content -Encoding UTF8
        Write-Host "✅ 完成: $level"
    } else {
        Write-Host "❌ 文件不存在: $level"
    }
}

Write-Host "`n🎉 所有關卡發音功能更新完成！" 