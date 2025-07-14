$content = Get-Content 'js/grammarLevels.js' -Raw
$lines = $content -split "`n"
$fixedLines = @()
$firstDeclaration = $true

foreach ($line in $lines) {
    if ($line -match '^const grammarLevels = \{') {
        if ($firstDeclaration) {
            $fixedLines += $line
            $firstDeclaration = $false
        } else {
            $fixedLines += "// " + $line
        }
    } else {
        $fixedLines += $line
    }
}

$fixedContent = $fixedLines -join "`n"
Set-Content 'js/grammarLevels.js' -Value $fixedContent
Write-Host "Fixed!" 