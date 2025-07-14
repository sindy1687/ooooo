# 批量更新文法小提示腳本
# 自動為所有關卡的HTML和JS檔案添加動態文法小提示功能

Write-Host "🚀 開始批量更新文法小提示..." -ForegroundColor Green

# 文法小提示配置
$grammarTips = @{
    "level1" = @{
        "easy" = "I → am，you/we/they → are，he/she/it → is"
        "medium" = "I → am，you/we/they → are，he/she/it → is"
        "hard" = "I → am，you/we/they → are，he/she/it → is"
    }
    "level2" = @{
        "easy" = "I → am not，you/we/they → are not (aren't)，he/she/it → is not (isn't)"
        "medium" = "I → am not，you/we/they → are not (aren't)，he/she/it → is not (isn't)"
        "hard" = "I → am not，you/we/they → are not (aren't)，he/she/it → is not (isn't)"
    }
    "level3" = @{
        "easy" = "疑問句：be動詞(am/is/are)放句首，例如：Are you ready? Is he a student? Am I late?"
        "medium" = "疑問句：be動詞(am/is/are)放句首，例如：Are you ready? Is he a student? Am I late?"
        "hard" = "疑問句：be動詞(am/is/are)放句首，例如：Are you ready? Is he a student? Am I late?"
    }
    "level4" = @{
        "easy" = "混合運用：I用am，you/we/they用are，he/she/it用is；否定句加not，疑問句移至句首"
        "medium" = "混合運用：I用am，you/we/they用are，he/she/it用is；否定句加not，疑問句移至句首"
        "hard" = "混合運用：I用am，you/we/they用are，he/she/it用is；否定句加not，疑問句移至句首"
    }
    "level5" = @{
        "easy" = "一般動詞現在式：主詞為第三人稱單數時動詞加s/es，其餘用原形"
        "medium" = "一般動詞現在式：主詞為第三人稱單數時動詞加s/es，其餘用原形"
        "hard" = "一般動詞現在式：主詞為第三人稱單數時動詞加s/es，其餘用原形"
    }
    "level6" = @{
        "easy" = "現在動詞否定句：主詞 + do/does + not + 原形動詞，表示沒有的動作"
        "medium" = "現在動詞否定句：主詞 + do/does + not + 原形動詞，表示沒有的動作"
        "hard" = "現在動詞否定句：主詞 + do/does + not + 原形動詞，表示沒有的動作"
    }
    "level7" = @{
        "easy" = "一般動詞現在式問句：Do/Does + 主詞 + 原形動詞？"
        "medium" = "一般動詞現在式問句：Do/Does + 主詞 + 原形動詞？"
        "hard" = "一般動詞現在式問句：Do/Does + 主詞 + 原形動詞？"
    }
    "level8" = @{
        "easy" = "一般動詞現在式短答句：Yes, 主詞 do/does. / No, 主詞 don't/doesn't."
        "medium" = "一般動詞現在式短答句：Yes, 主詞 do/does. / No, 主詞 don't/doesn't."
        "hard" = "一般動詞現在式短答句：Yes, 主詞 do/does. / No, 主詞 don't/doesn't."
    }
    "level9" = @{
        "easy" = "現在式混合題：一般動詞第三人稱單數加s/es，be動詞用am/is/are"
        "medium" = "現在式混合題：一般動詞第三人稱單數加s/es，be動詞用am/is/are"
        "hard" = "現在式混合題：一般動詞第三人稱單數加s/es，be動詞用am/is/are"
    }
    "level13" = @{
        "easy" = "過去式否定句：主詞 + did not (didn't) + 原形動詞，表示過去的否定動作"
        "medium" = "過去式否定句：主詞 + did not (didn't) + 原形動詞，表示過去的否定動作"
        "hard" = "過去式否定句：主詞 + did not (didn't) + 原形動詞，表示過去的否定動作"
    }
    "level14" = @{
        "easy" = "過去式肯定句：主詞 + 動詞過去式，表示過去的動作或狀態"
        "medium" = "過去式肯定句：主詞 + 動詞過去式，表示過去的動作或狀態"
        "hard" = "過去式肯定句：主詞 + 動詞過去式，表示過去的動作或狀態"
    }
    "level15" = @{
        "easy" = "過去式混合題：一般動詞用過去式，be動詞用was/were"
        "medium" = "過去式混合題：一般動詞用過去式，be動詞用was/were"
        "hard" = "過去式混合題：一般動詞用過去式，be動詞用was/were"
    }
    "level16" = @{
        "easy" = "過去式混合題：一般動詞用過去式，be動詞用was/were"
        "medium" = "過去式混合題：一般動詞用過去式，be動詞用was/were"
        "hard" = "過去式混合題：一般動詞用過去式，be動詞用was/were"
    }
    "level18" = @{
        "easy" = "未來式肯定句：主詞 + will + 原形動詞，表示未來的動作或計劃"
        "medium" = "未來式肯定句：主詞 + will + 原形動詞，表示未來的動作或計劃"
        "hard" = "未來式肯定句：主詞 + will + 原形動詞，表示未來的動作或計劃"
    }
    "level19" = @{
        "easy" = "未來式否定句：主詞 + will not (won't) + 原形動詞，表示未來的否定動作"
        "medium" = "未來式否定句：主詞 + will not (won't) + 原形動詞，表示未來的否定動作"
        "hard" = "未來式否定句：主詞 + will not (won't) + 原形動詞，表示未來的否定動作"
    }
    "level20" = @{
        "easy" = "未來式問句：Will + 主詞 + 原形動詞？表示未來的疑問"
        "medium" = "未來式問句：Will + 主詞 + 原形動詞？表示未來的疑問"
        "hard" = "未來式問句：Will + 主詞 + 原形動詞？表示未來的疑問"
    }
    "level21" = @{
        "easy" = "未來式混合題：will + 原形動詞，表示未來的各種句型"
        "medium" = "未來式混合題：will + 原形動詞，表示未來的各種句型"
        "hard" = "未來式混合題：will + 原形動詞，表示未來的各種句型"
    }
}

# 更新HTML檔案
Write-Host "`n📁 更新HTML檔案..." -ForegroundColor Yellow
$htmlUpdated = 0
$htmlTotal = 0

for ($i = 1; $i -le 21; $i++) {
    $htmlFile = "grammar_level${i}_1.html"
    if (Test-Path $htmlFile) {
        $htmlTotal++
        try {
            $content = Get-Content $htmlFile -Raw -Encoding UTF8
            
            # 替換固定的文法小提示為動態版本
            $oldPattern = '<div class="grammar-tip">\s*<strong>文法小提示：</strong>\s*[^<]+</div>'
            $newContent = '<div class="grammar-tip" id="grammarTipDiv">' + "`n            " + '<strong>文法小提示：</strong> <span id="grammarTipText">載入中...</span>' + "`n        " + '</div>'
            
            if ($content -match $oldPattern) {
                $content = $content -replace $oldPattern, $newContent
                
                # 更新updateLevelDisplay函數
                $oldUpdatePattern = '(// 更新關卡顯示\s+function updateLevelDisplay\(\) \{[^}]+\})'
                $newUpdateContent = '$1' + "`n            `n            // 更新文法小提示`n            const levelInfo = getLevelInfo(gameState.currentSubLevel);`n            document.getElementById('grammarTipText').textContent = levelInfo.grammarTip;"
                
                if ($content -match $oldUpdatePattern) {
                    $content = $content -replace $oldUpdatePattern, $newUpdateContent
                    
                    Set-Content $htmlFile $content -Encoding UTF8
                    Write-Host "✅ 已更新 $htmlFile" -ForegroundColor Green
                    $htmlUpdated++
                } else {
                    Write-Host "⚠️  $htmlFile 中未找到updateLevelDisplay函數" -ForegroundColor Yellow
                }
            } else {
                Write-Host "⚠️  $htmlFile 中未找到文法小提示區塊" -ForegroundColor Yellow
            }
        } catch {
            Write-Host "❌ 更新 $htmlFile 時發生錯誤: $_" -ForegroundColor Red
        }
    }
}

# 更新JS檔案
Write-Host "`n📁 更新JS檔案..." -ForegroundColor Yellow
$jsUpdated = 0
$jsTotal = 0

for ($i = 1; $i -le 21; $i++) {
    $jsFile = "js/grammarLevel${i}_1_questions.js"
    if (Test-Path $jsFile) {
        $jsTotal++
        try {
            $content = Get-Content $jsFile -Raw -Encoding UTF8
            
            # 檢查是否已經有GRAMMAR_TIPS配置
            if ($content -match 'GRAMMAR_TIPS') {
                Write-Host "⚠️  $jsFile 已有GRAMMAR_TIPS配置，跳過" -ForegroundColor Yellow
                continue
            }
            
            # 添加GRAMMAR_TIPS配置
            $levelKey = "level$i"
            if ($grammarTips.ContainsKey($levelKey)) {
                $tips = $grammarTips[$levelKey]
                
                # 在UNIFIED_QUESTION_BANK之前插入GRAMMAR_TIPS
                $oldPattern = '(const UNIFIED_QUESTION_BANK = \{)'
                $newContent = @"
// 文法小提示配置
const GRAMMAR_TIPS = {
  easy: "$($tips.easy)",
  medium: "$($tips.medium)",
  hard: "$($tips.hard)"
};

const UNIFIED_QUESTION_BANK = {
"@
                
                if ($content -match $oldPattern) {
                    $content = $content -replace $oldPattern, $newContent
                    
                    # 更新getLevelInfo函數
                    $oldGetLevelPattern = '(function getLevelInfo\(subLevel\) \{[^}]+\})'
                    $newGetLevelContent = @"
function getLevelInfo(subLevel) {
  // 取得難度對應
  let difficulty = subLevel;
  if (LEVEL_CONFIG && LEVEL_CONFIG[subLevel]) {
    difficulty = LEVEL_CONFIG[subLevel].difficulty;
  }
  
  return {
    title: `第$i關：${get_level_title $i} - $${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習${get_level_title $i}的用法，$${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`,
    grammarTip: GRAMMAR_TIPS[difficulty] || "$($tips.easy)"
  };
}
"@
                    
                    if ($content -match $oldGetLevelPattern) {
                        $content = $content -replace $oldGetLevelPattern, $newGetLevelContent
                        
                        Set-Content $jsFile $content -Encoding UTF8
                        Write-Host "✅ 已更新 $jsFile" -ForegroundColor Green
                        $jsUpdated++
                    } else {
                        Write-Host "⚠️  $jsFile 中未找到getLevelInfo函數" -ForegroundColor Yellow
                    }
                } else {
                    Write-Host "⚠️  $jsFile 中未找到UNIFIED_QUESTION_BANK" -ForegroundColor Yellow
                }
            } else {
                Write-Host "⚠️  未找到關卡 $levelKey 的配置" -ForegroundColor Yellow
            }
        } catch {
            Write-Host "❌ 更新 $jsFile 時發生錯誤: $_" -ForegroundColor Red
        }
    }
}

Write-Host "`n🎉 更新完成！" -ForegroundColor Green
Write-Host "✅ HTML檔案更新: $htmlUpdated/$htmlTotal" -ForegroundColor Green
Write-Host "✅ JS檔案更新: $jsUpdated/$jsTotal" -ForegroundColor Green

# 輔助函數：根據關卡號碼返回關卡標題
function get_level_title($level_num) {
    $titles = @{
        1 = "be動詞現在式"
        2 = "be動詞否定句"
        3 = "be動詞疑問句"
        4 = "be動詞混合題"
        5 = "一般動詞現在式"
        6 = "一般動詞否定句"
        7 = "一般動詞疑問句"
        8 = "一般動詞短答句"
        9 = "現在式混合題"
        13 = "一般動詞過去式否定句"
        14 = "一般動詞過去式肯定句"
        15 = "過去式混合題"
        16 = "過去式混合題"
        18 = "未來式肯定句"
        19 = "未來式否定句"
        20 = "未來式問句"
        21 = "未來式混合題"
    }
    
    if ($titles.ContainsKey($level_num)) {
        return $titles[$level_num]
    } else {
        return "第$level_num關"
    }
} 