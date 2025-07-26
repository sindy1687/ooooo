// 金幣系統
class CoinSystem {
    constructor() {
        this.coins = this.loadCoins();
        console.log('🪙 金幣系統已初始化，當前金幣:', this.coins);
    }

    // 載入金幣數據
    loadCoins() {
        try {
            const savedCoins = localStorage.getItem('userCoins');
            return savedCoins ? parseInt(savedCoins) : 0;
        } catch (error) {
            console.log('載入金幣數據失敗:', error);
            return 0;
        }
    }

    // 保存金幣數據
    saveCoins() {
        try {
            localStorage.setItem('userCoins', this.coins.toString());
        } catch (error) {
            console.log('保存金幣數據失敗:', error);
        }
    }

    // 增加金幣
    addCoins(amount) {
        this.coins += amount;
        this.saveCoins();
        this.showCoinNotification(amount);
        console.log(`🪙 金幣增加: +${amount}, 總計: ${this.coins}`);
        return this.coins;
    }

    // 使用金幣
    useCoins(amount) {
        if (this.coins >= amount) {
            this.coins -= amount;
            this.saveCoins();
            console.log(`🪙 金幣使用: -${amount}, 剩餘: ${this.coins}`);
            return true;
        }
        return false;
    }

    // 獲取金幣數量
    getCoins() {
        return this.coins;
    }

    // 顯示金幣通知
    showCoinNotification(amount) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, rgba(255, 193, 7, 0.95), rgba(255, 152, 0, 0.95));
            color: #000;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(255, 193, 7, 0.5);
            z-index: 10000;
            font-weight: bold;
            font-size: 1.1em;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-family: 'Orbitron', sans-serif;
        `;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5em;">🪙</span>
                <div>
                    <div>獲得金幣</div>
                    <div style="font-size: 0.9em; opacity: 0.8;">+${amount}</div>
                </div>
            </div>
        `;

        document.body.appendChild(notification);

        // 動畫效果
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // 顯示金幣商店
    showCoinShop() {
        const shopModal = document.createElement('div');
        shopModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;

        const shopContent = document.createElement('div');
        shopContent.style.cssText = `
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            border: 2px solid #ffd700;
            border-radius: 20px;
            padding: 30px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            color: #e0eaff;
            font-family: 'Orbitron', sans-serif;
        `;

        let shopHTML = `
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #ffd700; margin-bottom: 10px;">🪙 金幣商店</h2>
                <div style="color: #ffd700; font-size: 1.2em; margin-bottom: 20px;">
                    當前金幣: ${this.coins}
                </div>
            </div>
        `;

        // 商品列表
        const items = [
            { name: '時間延長', cost: 1000, effect: '增加答題時間 30 秒', icon: '⏰' },
            { name: '提示功能', cost: 500, effect: '排除一個錯誤選項', icon: '💡' },
            { name: '護盾保護', cost: 800, effect: '抵擋一次答錯懲罰', icon: '🛡️' },
            { name: '分數加倍', cost: 1500, effect: '答對時獲得雙倍分數', icon: '⭐' },
            { name: '能量恢復', cost: 600, effect: '恢復 2 點能量', icon: '⚡' }
        ];

        items.forEach(item => {
            const canAfford = this.coins >= item.cost;
            shopHTML += `
                <div style="
                    background: rgba(255,255,255,0.1);
                    border: 1px solid ${canAfford ? '#ffd700' : '#666'};
                    border-radius: 10px;
                    padding: 15px;
                    margin-bottom: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    opacity: ${canAfford ? '1' : '0.5'};
                ">
                    <div>
                        <div style="color: #ffd700; font-weight: bold; font-size: 1.1em;">
                            ${item.icon} ${item.name}
                        </div>
                        <div style="font-size: 0.9em; opacity: 0.8; margin-top: 5px;">
                            ${item.effect}
                        </div>
                        <div style="color: #ffd700; margin-top: 5px;">
                            價格: ${item.cost} 金幣
                        </div>
                    </div>
                    <button onclick="coinSystem.buyItem('${item.name}', ${item.cost})" 
                            style="
                                background: linear-gradient(135deg, #ffd700, #ffb347);
                                color: #000;
                                border: none;
                                padding: 8px 15px;
                                border-radius: 8px;
                                cursor: ${canAfford ? 'pointer' : 'not-allowed'};
                                font-weight: bold;
                                opacity: ${canAfford ? '1' : '0.5'};
                            "
                            ${!canAfford ? 'disabled' : ''}>
                        購買
                    </button>
                </div>
            `;
        });

        shopHTML += `
            <div style="text-align: center; margin-top: 20px;">
                <button onclick="this.closest('.coin-shop-modal').remove()" 
                        style="
                            background: linear-gradient(135deg, #4a5568, #2d3748);
                            color: #e0eaff;
                            border: 1px solid #00ffe0;
                            padding: 12px 25px;
                            border-radius: 10px;
                            cursor: pointer;
                            font-weight: bold;
                        ">
                    關閉商店
                </button>
            </div>
        `;

        shopContent.innerHTML = shopHTML;
        shopModal.appendChild(shopContent);
        shopModal.className = 'coin-shop-modal';
        document.body.appendChild(shopModal);

        // 點擊背景關閉
        shopModal.addEventListener('click', (e) => {
            if (e.target === shopModal) {
                shopModal.remove();
            }
        });
    }

    // 購買商品
    buyItem(itemName, cost) {
        if (this.useCoins(cost)) {
            // 這裡可以加入購買後的邏輯
            console.log(`🛒 購買了 ${itemName}`);
            alert(`✅ 成功購買 ${itemName}！`);
        } else {
            alert('❌ 金幣不足！');
        }
    }
} 