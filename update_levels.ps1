# 批量更新第12到21關的HTML檔案
$levels = @(
    @{num=12; title="第十二關：一般動詞現在式問句"; subtitle="一般動詞現在式問句"; description="掌握問句的藝術"; gem="問句寶石"},
    @{num=13; title="第十三關：be動詞過去式肯定句"; subtitle="be動詞過去式肯定句"; description="探索過去的奧秘"; gem="過去式寶石"},
    @{num=14; title="第十四關：be動詞過去式否定句"; subtitle="be動詞過去式否定句"; description="掌握過去否定句"; gem="過去否定寶石"},
    @{num=15; title="第十五關：be動詞過去式問句"; subtitle="be動詞過去式問句"; description="探索過去問句"; gem="過去問句寶石"},
    @{num=16; title="第十六關：一般動詞過去式肯定句"; subtitle="一般動詞過去式肯定句"; description="掌握過去動詞"; gem="過去動詞寶石"},
    @{num=17; title="第十七關：一般動詞過去式問句"; subtitle="一般動詞過去式問句"; description="探索過去問句"; gem="過去問句寶石"},
    @{num=18; title="第十八關：一般動詞過去式否定句"; subtitle="一般動詞過去式否定句"; description="掌握過去否定"; gem="過去否定寶石"},
    @{num=19; title="第十九關：未來式will"; subtitle="未來式will"; description="探索未來的力量"; gem="未來寶石"},
    @{num=20; title="第二十關：未來式be going to"; subtitle="未來式be going to"; description="掌握未來計劃"; gem="未來計劃寶石"},
    @{num=21; title="第二十一關：未來式混合題"; subtitle="未來式混合題"; description="征服未來時態"; gem="未來大師寶石"}
)

foreach ($level in $levels) {
    $filename = "grammar_level$($level.num)_1.html"
    $jsfile = "js/grammarLevel$($level.num)_1_questions.js"
    
    # 更新標題
    (Get-Content $filename) -replace '<title>第十一關：一般動詞現在式否定句</title>', "<title>$($level.title)</title>" | Set-Content $filename
    
    # 更新關卡標題
    (Get-Content $filename) -replace '否定句大師', "$($level.subtitle)大師" | Set-Content $filename
    (Get-Content $filename) -replace '一般動詞現在式否定句', "$($level.subtitle)" | Set-Content $filename
    (Get-Content $filename) -replace '掌握否定句的力量', "$($level.description)" | Set-Content $filename
    
    # 更新JS檔案引用
    (Get-Content $filename) -replace 'js/grammarLevel11_1_questions.js', $jsfile | Set-Content $filename
    
    # 更新關卡編號
    (Get-Content $filename) -replace "currentLevel: 'level11'", "currentLevel: 'level$($level.num)'" | Set-Content $filename
    
    # 更新副標題
    (Get-Content $filename) -replace "document.getElementById\('levelSubtitle'\).textContent = '一般動詞現在式否定句';", "document.getElementById('levelSubtitle').textContent = '$($level.subtitle)';" | Set-Content $filename
    
    # 更新寶石名稱
    (Get-Content $filename) -replace '否定句寶石', "$($level.gem)" | Set-Content $filename
    
    Write-Host "已更新 $filename"
} 