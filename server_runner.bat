@echo off
REM 啟動 Python 本地伺服器並自動開啟 card_manager_advanced.html
cd /d %~dp0

REM 啟動伺服器（8000埠）
start "" python -m http.server 8000

REM 等待伺服器啟動
ping 127.0.0.1 -n 3 > nul

REM 自動開啟瀏覽器
start "" http://localhost:8000/card_manager_advanced.html

echo 伺服器已啟動，請在瀏覽器中操作。
pause 