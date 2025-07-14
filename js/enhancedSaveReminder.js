/**
 * 增強版存檔提醒系統
 * 提供更智慧的提醒邏輯和更好的用戶體驗
 */
class EnhancedSaveReminderSystem {
    constructor() {
        this.gameStartTime = Date.now();
        this.reminderTimer = null;
        this.urgentReminderTimer = null;
        this.activityTracker = {
            lastActivity: Date.now(),
            totalActions: 0,
            importantActions: 0 // 重要操作計數（如完成關卡、獲得卡片等）
        };
        
        // 提醒配置
        this.config = {
            // 基本提醒時間（分鐘）
            newPlayerFirstReminder: 3,      // 新玩家首次提醒
            regularReminderInterval: 10,    // 常規提醒間隔
            urgentReminderThreshold: 20,    // 緊急提醒閾值
            maxPlayTimeWithoutSave: 30,     // 最大無儲存遊戲時間
            
            // 隱藏相關
            dismissCooldown: 15,            // 隱藏冷卻時間（分鐘）
            maxDismissCount: 3,             // 最大隱藏次數
            
            // 活動追蹤
            inactivityThreshold: 5,         // 非活動狀態閾值（分鐘）
            importantActionThreshold: 5,    // 重要操作提醒閾值
            
            // 風險評估
            riskFactors: {
                longPlayTime: 25,           // 長時間遊戲（分鐘）
                manyActions: 50,            // 大量操作
                noRecentSave: 15,           // 無近期儲存（分鐘）
                browserInstability: true    // 瀏覽器不穩定性檢測
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupActivityTracking();
        this.setupVisibilityTracking();
        this.setupUnloadProtection();
        this.startReminderSystem();
        
        console.log('🔔 增強版存檔提醒系統已啟動');
    }
    
    /**
     * 設置活動追蹤
     */
    setupActivityTracking() {
        // 追蹤用戶活動
        const trackActivity = () => {
            this.activityTracker.lastActivity = Date.now();
            this.activityTracker.totalActions++;
        };
        
        // 追蹤重要操作
        const trackImportantAction = (actionType) => {
            this.activityTracker.importantActions++;
            this.activityTracker.lastActivity = Date.now();
            
            // 記錄重要操作類型
            const recentActions = JSON.parse(localStorage.getItem('recentImportantActions') || '[]');
            recentActions.push({
                type: actionType,
                timestamp: Date.now()
            });
            
            // 只保留最近1小時的記錄
            const oneHourAgo = Date.now() - 60 * 60 * 1000;
            const filteredActions = recentActions.filter(action => action.timestamp > oneHourAgo);
            localStorage.setItem('recentImportantActions', JSON.stringify(filteredActions));
        };
        
        // 綁定活動事件
        document.addEventListener('click', trackActivity);
        document.addEventListener('keypress', trackActivity);
        document.addEventListener('scroll', trackActivity);
        
        // 監聽重要操作（需要在相關頁面調用）
        window.trackImportantAction = trackImportantAction;
    }
    
    /**
     * 設置頁面可見性追蹤
     */
    setupVisibilityTracking() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // 頁面隱藏時記錄時間
                localStorage.setItem('pageHiddenTime', Date.now().toString());
            } else {
                // 頁面顯示時檢查是否需要提醒
                const hiddenTime = localStorage.getItem('pageHiddenTime');
                if (hiddenTime) {
                    const hiddenDuration = Date.now() - parseInt(hiddenTime);
                    if (hiddenDuration > 10 * 60 * 1000) { // 隱藏超過10分鐘
                        setTimeout(() => this.checkSaveReminder(true), 2000);
                    }
                }
            }
        });
    }
    
    /**
     * 設置頁面卸載保護（已移除，避免離開彈窗）
     */
    setupUnloadProtection() {
        // 移除 beforeunload 事件監聽器，避免離開彈窗
        // window.addEventListener('beforeunload', (e) => {
        //     const riskLevel = this.calculateRiskLevel();
        //     if (riskLevel >= 3) {
        //         const message = '您有未儲存的重要進度，確定要離開嗎？';
        //         e.returnValue = message;
        //         return message;
        //     }
        // });
    }
    
    /**
     * 啟動提醒系統
     */
    startReminderSystem() {
        // 定期檢查（每2分鐘）
        this.reminderTimer = setInterval(() => {
            this.checkSaveReminder();
        }, 2 * 60 * 1000);
        
        // 初始延遲檢查
        const isNewPlayer = this.isNewPlayer();
        const initialDelay = isNewPlayer ? 
            this.config.newPlayerFirstReminder * 60 * 1000 : 
            5 * 60 * 1000;
            
        setTimeout(() => {
            this.checkSaveReminder(true);
        }, initialDelay);
    }
    
    /**
     * 檢查是否需要顯示存檔提醒
     */
    checkSaveReminder(forceCheck = false) {
        const currentTime = Date.now();
        const playTime = currentTime - this.gameStartTime;
        const lastSaveTime = localStorage.getItem('lastManualSaveTime');
        const reminderDismissTime = localStorage.getItem('saveReminderDismissTime');
        const dismissCount = parseInt(localStorage.getItem('saveReminderDismissCount') || '0');
        
        // 檢查是否在冷卻期
        if (!forceCheck && reminderDismissTime && 
            (currentTime - parseInt(reminderDismissTime)) < this.config.dismissCooldown * 60 * 1000) {
            return;
        }
        
        // 計算風險等級
        const riskLevel = this.calculateRiskLevel();
        
        // 決定是否顯示提醒
        let shouldShow = false;
        let urgencyLevel = 'normal';
        let customMessage = '';
        
        if (riskLevel >= 4) {
            shouldShow = true;
            urgencyLevel = 'critical';
            customMessage = '⚠️ 您的進度面臨丟失風險！建議立即儲存！';
        } else if (riskLevel >= 3) {
            shouldShow = true;
            urgencyLevel = 'high';
            customMessage = '⏰ 您已經遊戲了很長時間，建議儲存進度';
        } else if (riskLevel >= 2) {
            shouldShow = true;
            urgencyLevel = 'medium';
            customMessage = '💾 建議儲存您的遊戲進度';
        } else if (forceCheck && riskLevel >= 1) {
            shouldShow = true;
            urgencyLevel = 'low';
            customMessage = '📝 記得定期儲存遊戲進度哦';
        }
        
        // 檢查隱藏次數限制
        if (dismissCount >= this.config.maxDismissCount && riskLevel >= 3) {
            shouldShow = true;
            urgencyLevel = 'critical';
            customMessage = '🚨 您已多次隱藏提醒，強烈建議立即儲存！';
        }
        
        if (shouldShow) {
            this.showSaveReminder(urgencyLevel, customMessage, riskLevel);
        }
    }
    
    /**
     * 計算風險等級 (0-5)
     */
    calculateRiskLevel() {
        const currentTime = Date.now();
        const playTime = currentTime - this.gameStartTime;
        const lastSaveTime = localStorage.getItem('lastManualSaveTime');
        const lastActivity = this.activityTracker.lastActivity;
        
        let riskScore = 0;
        
        // 遊戲時間風險
        if (playTime > this.config.riskFactors.longPlayTime * 60 * 1000) {
            riskScore += Math.floor(playTime / (15 * 60 * 1000)); // 每15分鐘+1分
        }
        
        // 未儲存時間風險
        if (lastSaveTime) {
            const timeSinceLastSave = currentTime - parseInt(lastSaveTime);
            if (timeSinceLastSave > this.config.riskFactors.noRecentSave * 60 * 1000) {
                riskScore += Math.floor(timeSinceLastSave / (10 * 60 * 1000)); // 每10分鐘+1分
            }
        } else {
            riskScore += 2; // 從未儲存過
        }
        
        // 活動量風險
        if (this.activityTracker.totalActions > this.config.riskFactors.manyActions) {
            riskScore += 1;
        }
        
        // 重要操作風險
        if (this.activityTracker.importantActions >= this.config.importantActionThreshold) {
            riskScore += 1;
        }
        
        // 非活動狀態風險
        const inactiveTime = currentTime - lastActivity;
        if (inactiveTime > this.config.inactivityThreshold * 60 * 1000) {
            riskScore += 1;
        }
        
        return Math.min(riskScore, 5); // 最高5級
    }
    
    /**
     * 顯示存檔提醒
     */
    showSaveReminder(urgencyLevel = 'normal', customMessage = '', riskLevel = 0) {
        const reminder = document.getElementById('saveReminder');
        if (!reminder) return;
        
        // 根據緊急程度設置樣式
        const styles = this.getReminderStyles(urgencyLevel);
        
        // 設置內容
        const content = this.generateReminderContent(urgencyLevel, customMessage, riskLevel);
        reminder.innerHTML = content;
        
        // 應用樣式
        Object.assign(reminder.style, styles);
        
        // 顯示提醒
        reminder.style.display = 'block';
        reminder.style.animation = 'none';
        setTimeout(() => {
            reminder.style.animation = this.getAnimationForUrgency(urgencyLevel);
        }, 100);
        
        // 記錄顯示時間
        localStorage.setItem('lastReminderShowTime', Date.now().toString());
        
        // 如果是緊急提醒，設置自動隱藏
        if (urgencyLevel === 'critical') {
            if (this.urgentReminderTimer) {
                clearTimeout(this.urgentReminderTimer);
            }
            this.urgentReminderTimer = setTimeout(() => {
                this.showUrgentWarning();
            }, 5 * 60 * 1000); // 5分鐘後顯示更嚴重警告
        }
    }
    
    /**
     * 獲取提醒樣式
     */
    getReminderStyles(urgencyLevel) {
        const baseStyle = {
            borderRadius: '15px',
            padding: '15px',
            margin: '15px 0',
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
        };
        
        switch (urgencyLevel) {
            case 'critical':
                return {
                    ...baseStyle,
                    background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.95) 0%, rgba(255, 69, 0, 0.95) 100%)',
                    border: '3px solid #dc143c',
                    boxShadow: '0 0 30px rgba(220, 20, 60, 0.8), 0 0 60px rgba(255, 69, 0, 0.5)'
                };
            case 'high':
                return {
                    ...baseStyle,
                    background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.9) 0%, rgba(255, 69, 0, 0.9) 100%)',
                    border: '2px solid #ff8c00',
                    boxShadow: '0 0 25px rgba(255, 140, 0, 0.7), 0 0 50px rgba(255, 69, 0, 0.4)'
                };
            case 'medium':
                return {
                    ...baseStyle,
                    background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.9) 0%, rgba(255, 215, 0, 0.9) 100%)',
                    border: '2px solid #ffa500',
                    boxShadow: '0 0 20px rgba(255, 165, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.3)'
                };
            case 'low':
                return {
                    ...baseStyle,
                    background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.9) 0%, rgba(0, 206, 209, 0.9) 100%)',
                    border: '2px solid #20b2aa',
                    boxShadow: '0 0 15px rgba(32, 178, 170, 0.5), 0 0 30px rgba(0, 206, 209, 0.3)'
                };
            default:
                return {
                    ...baseStyle,
                    background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.9) 0%, rgba(255, 165, 0, 0.9) 100%)',
                    border: '2px solid #ff6b6b',
                    boxShadow: '0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(255, 165, 0, 0.3)'
                };
        }
    }
    
    /**
     * 生成提醒內容
     */
    generateReminderContent(urgencyLevel, customMessage, riskLevel) {
        const playTime = Math.floor((Date.now() - this.gameStartTime) / (60 * 1000));
        const actionCount = this.activityTracker.totalActions;
        const importantActions = this.activityTracker.importantActions;
        
        let icon = '💾';
        let title = '記得儲存您的遊戲進度！';
        let subtitle = customMessage || '您已經遊戲了一段時間，建議現在儲存進度以免丟失資料';
        
        switch (urgencyLevel) {
            case 'critical':
                icon = '🚨';
                title = '緊急！立即儲存您的進度！';
                subtitle = `您已遊戲 ${playTime} 分鐘，執行了 ${actionCount} 個操作，包含 ${importantActions} 個重要操作！`;
                break;
            case 'high':
                icon = '⚠️';
                title = '強烈建議儲存進度！';
                subtitle = `您已遊戲 ${playTime} 分鐘，進行了許多操作，請儲存以保護您的進度`;
                break;
            case 'medium':
                icon = '⏰';
                title = '建議儲存遊戲進度';
                subtitle = `您已遊戲 ${playTime} 分鐘，建議定期儲存以確保進度安全`;
                break;
            case 'low':
                icon = '📝';
                title = '記得儲存進度哦';
                subtitle = '定期儲存是個好習慣，可以保護您的遊戲進度';
                break;
        }
        
        return `
            <div style="font-size: 1.3rem; margin-bottom: 8px;">${icon} ${title}</div>
            <div style="font-size: 0.95rem; margin-bottom: 10px; opacity: 0.9;">
                ${subtitle}
            </div>
            <div style="font-size: 0.8rem; margin-bottom: 10px; opacity: 0.7;">
                風險等級: ${this.getRiskLevelText(riskLevel)} | 遊戲時間: ${playTime} 分鐘
            </div>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                <button onclick="window.enhancedSaveReminder.performQuickSave()" style="
                    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
                    color: white; border: none; padding: 8px 16px; border-radius: 8px;
                    cursor: pointer; font-weight: bold; font-size: 0.9rem;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); transition: all 0.2s ease;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    💾 立即儲存
                </button>
                <button onclick="window.enhancedSaveReminder.openAutoSaveSettings()" style="
                    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
                    color: white; border: none; padding: 8px 16px; border-radius: 8px;
                    cursor: pointer; font-weight: bold; font-size: 0.9rem;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); transition: all 0.2s ease;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    ⚙️ 儲存設定
                </button>
                <button onclick="window.enhancedSaveReminder.hideSaveReminder()" style="
                    background: linear-gradient(135deg, #757575 0%, #616161 100%);
                    color: white; border: none; padding: 8px 16px; border-radius: 8px;
                    cursor: pointer; font-weight: bold; font-size: 0.9rem;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); transition: all 0.2s ease;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    ${urgencyLevel === 'critical' ? '⏰ 稍後提醒' : '✕ 暫時隱藏'}
                </button>
            </div>
        `;
    }
    
    /**
     * 獲取動畫效果
     */
    getAnimationForUrgency(urgencyLevel) {
        switch (urgencyLevel) {
            case 'critical':
                return 'criticalReminderPulse 1s ease-in-out infinite';
            case 'high':
                return 'highReminderPulse 2s ease-in-out infinite';
            case 'medium':
                return 'mediumReminderPulse 3s ease-in-out infinite';
            default:
                return 'saveReminderPulse 3s ease-in-out infinite';
        }
    }
    
    /**
     * 獲取風險等級文字
     */
    getRiskLevelText(level) {
        const levels = ['極低', '低', '中', '高', '極高', '危險'];
        return levels[level] || '未知';
    }
    
    /**
     * 判斷是否為新玩家
     */
    isNewPlayer() {
        return !localStorage.getItem('lastManualSaveTime') && 
               !localStorage.getItem('unifiedGameBackup') &&
               !localStorage.getItem('gameBackupSlots');
    }
    
    /**
     * 執行快速儲存
     */
    performQuickSave() {
        try {
            if (typeof window.UnifiedAutoSave !== 'undefined') {
                window.UnifiedAutoSave.performImmediateSave();
                localStorage.setItem('lastManualSaveTime', Date.now().toString());
                this.hideSaveReminder();
                
                // 重置風險追蹤
                this.activityTracker.importantActions = 0;
                this.activityTracker.totalActions = 0;
                localStorage.removeItem('recentImportantActions');
                
                // 顯示成功訊息
                this.showSaveSuccess();
            } else {
                alert('自動儲存系統未載入，請重新整理頁面後再試');
            }
        } catch (error) {
            console.error('快速儲存失敗:', error);
            alert('儲存失敗，請重試或檢查自動儲存設定');
        }
    }
    
    /**
     * 顯示儲存成功訊息
     */
    showSaveSuccess() {
        const reminder = document.getElementById('saveReminder');
        if (!reminder) return;
        
        reminder.innerHTML = `
            <div style="font-size: 1.3rem; margin-bottom: 8px;">✅ 儲存成功！</div>
            <div style="font-size: 0.95rem; margin-bottom: 10px; opacity: 0.9;">
                您的遊戲進度已安全儲存，可以安心繼續遊戲了！
            </div>
        `;
        reminder.style.background = 'linear-gradient(135deg, rgba(76, 175, 80, 0.9) 0%, rgba(69, 160, 73, 0.9) 100%)';
        reminder.style.border = '2px solid #4CAF50';
        reminder.style.boxShadow = '0 0 20px rgba(76, 175, 80, 0.6), 0 0 40px rgba(69, 160, 73, 0.3)';
        reminder.style.animation = 'successPulse 1s ease-in-out 3';
        
        setTimeout(() => {
            this.hideSaveReminder();
        }, 3000);
    }
    
    /**
     * 隱藏存檔提醒
     */
    hideSaveReminder() {
        const reminder = document.getElementById('saveReminder');
        if (reminder) {
            reminder.style.display = 'none';
            
            // 記錄隱藏時間和次數
            localStorage.setItem('saveReminderDismissTime', Date.now().toString());
            const dismissCount = parseInt(localStorage.getItem('saveReminderDismissCount') || '0');
            localStorage.setItem('saveReminderDismissCount', (dismissCount + 1).toString());
        }
        
        // 清除緊急提醒計時器
        if (this.urgentReminderTimer) {
            clearTimeout(this.urgentReminderTimer);
            this.urgentReminderTimer = null;
        }
    }
    
    /**
     * 開啟自動儲存設定
     */
    openAutoSaveSettings() {
        window.open('autoSaveManager.html', '_blank');
        this.hideSaveReminder();
    }
    
    /**
     * 顯示緊急警告
     */
    showUrgentWarning() {
        if (document.getElementById('saveReminder').style.display === 'none') {
            this.checkSaveReminder(true);
        }
        
        // 可以添加更多緊急警告邏輯，如聲音提醒、閃爍等
    }
    
    /**
     * 手動觸發重要操作記錄
     */
    recordImportantAction(actionType, details = '') {
        if (window.trackImportantAction) {
            window.trackImportantAction(actionType);
        }
        
        // 檢查是否需要立即提醒
        if (this.activityTracker.importantActions >= this.config.importantActionThreshold) {
            setTimeout(() => this.checkSaveReminder(true), 1000);
        }
    }
    
    /**
     * 停止提醒系統
     */
    stop() {
        if (this.reminderTimer) {
            clearInterval(this.reminderTimer);
            this.reminderTimer = null;
        }
        
        if (this.urgentReminderTimer) {
            clearTimeout(this.urgentReminderTimer);
            this.urgentReminderTimer = null;
        }
        
        console.log('🔕 增強版存檔提醒系統已停止');
    }
}

// 創建全域實例
window.enhancedSaveReminder = new EnhancedSaveReminderSystem();

// 提供便捷的全域函數
window.recordImportantAction = (actionType, details) => {
    window.enhancedSaveReminder.recordImportantAction(actionType, details);
};

console.log('🔔 增強版存檔提醒系統已載入'); 