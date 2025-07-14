/**
 * 通用右鍵選單系統
 * 為所有網站提供統一的右鍵選單功能，包括儲存系統快速存取
 */

class ContextMenuSystem {
    constructor() {
        // this.menu = null;
        // this.isVisible = false;
        // this.init();
        // 右鍵選單功能已完全停用
    }

    /**
     * 初始化右鍵選單系統
     */
    init() {
        // 右鍵選單功能已停用
    }

    /**
     * 創建右鍵選單HTML結構
     */
    createContextMenu() {
        // 右鍵選單功能已停用
    }

    /**
     * 添加CSS樣式
     */
    addStyles() {
        // 右鍵選單功能已停用
    }

    /**
     * 綁定事件
     */
    bindEvents() {
        // 右鍵選單功能已停用
    }

    /**
     * 顯示右鍵選單
     */
    show(x, y) {
        if (this.isVisible) {
            this.hide();
        }

        // 計算選單位置
        const menuWidth = 280;
        const menuHeight = 300;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // 確保選單不會超出視窗邊界
        let finalX = x;
        let finalY = y;

        if (x + menuWidth > windowWidth) {
            finalX = windowWidth - menuWidth - 10;
        }

        if (y + menuHeight > windowHeight) {
            finalY = windowHeight - menuHeight - 10;
        }

        // 設定位置
        this.menu.style.left = finalX + 'px';
        this.menu.style.top = finalY + 'px';

        // 顯示選單
        this.menu.classList.add('show');
        this.isVisible = true;

        // 更新選單內容
        this.updateMenuContent();
    }

    /**
     * 隱藏右鍵選單
     */
    hide() {
        if (this.menu) {
            this.menu.classList.remove('show');
            this.isVisible = false;
        }
    }

    /**
     * 更新選單內容
     */
    updateMenuContent() {
        // 選單內容更新邏輯（已移除儲存相關功能）
    }

    /**
     * 動態添加選單項目
     */
    addMenuItem(text, callback, icon = '🎯') {
        const customSection = this.menu.querySelector('#custom-section');
        if (!customSection) return;

        // 創建新的選單項目
        const menuItem = document.createElement('div');
        menuItem.className = 'context-menu-item';
        menuItem.innerHTML = `
            <span class="context-menu-icon">${icon}</span>
            <span class="context-menu-text">${text}</span>
        `;

        // 添加點擊事件
        menuItem.addEventListener('click', () => {
            try {
                callback();
            } catch (error) {
                console.error('選單項目執行失敗:', error);
                this.showNotification('❌ 操作失敗：' + error.message, 'error');
            }
            this.hide();
        });

        // 添加到自定義區域
        customSection.appendChild(menuItem);
    }

    /**
     * 回到主頁
     */
    goToMainPage() {
        try {
            window.location.href = 'index.html';
        } catch (error) {
            this.showNotification('❌ 無法回到主頁', 'error');
        }
        this.hide();
    }

    /**
     * 重新整理頁面
     */
    refreshPage() {
        try {
            window.location.reload();
        } catch (error) {
            this.showNotification('❌ 無法重新整理頁面', 'error');
        }
        this.hide();
    }

    /**
     * 顯示通知
     */
    showNotification(message, type = 'info', duration = 3000) {
        // 移除現有的通知
        const existingNotification = document.querySelector('.context-menu-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // 創建通知元素
        const notification = document.createElement('div');
        notification.className = `context-menu-notification context-menu-notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        // 添加通知樣式
        if (!document.getElementById('context-menu-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'context-menu-notification-styles';
            style.textContent = `
                .context-menu-notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    max-width: 400px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border-radius: 8px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    z-index: 10001;
                    animation: notificationSlideIn 0.3s ease-out;
                    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                }

                .context-menu-notification-success {
                    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
                }

                .context-menu-notification-error {
                    background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
                }

                .context-menu-notification-info {
                    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
                }

                .notification-content {
                    display: flex;
                    align-items: center;
                    padding: 12px 16px;
                }

                .notification-message {
                    flex: 1;
                    font-size: 14px;
                    line-height: 1.4;
                    white-space: pre-line;
                }

                .notification-close {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 18px;
                    cursor: pointer;
                    padding: 0;
                    margin-left: 12px;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: background-color 0.2s;
                }

                .notification-close:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                @keyframes notificationSlideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @media (max-width: 768px) {
                    .context-menu-notification {
                        top: 10px;
                        right: 10px;
                        left: 10px;
                        max-width: none;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // 添加到頁面
        document.body.appendChild(notification);

        // 自動移除
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, duration);
    }
}

// 不再自動 new ContextMenuSystem
// window.contextMenuSystem = new ContextMenuSystem();
// console.log('🖱️ 右鍵選單系統已載入'); 