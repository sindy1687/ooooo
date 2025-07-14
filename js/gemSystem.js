// 寶石系統
class GemSystem {
    constructor() {
        this.gems = this.loadGems();
        this.gemTypes = {
            'be_verb_master': {
                name: '🌟 Be動詞星光石',
                description: '掌握基礎be動詞的閃亮證明！',
                color: '#00ffe0',
                value: 50 // 可兌換50顆星星
            },
            'be_verb_negative_master': {
                name: '🚫 否定句守護石',
                description: '征服be動詞否定句的勇者勳章！',
                color: '#ff6b6b',
                value: 50
            },
            'be_verb_mixed_master': {
                name: '🎭 混合魔法石',
                description: 'be動詞變化無窮的神秘力量！',
                color: '#9b59b6',
                value: 50
            },
            'present_verb_master': {
                name: '⏰ 現在式時光石',
                description: '掌握當下時刻的魔法寶石！',
                color: '#ffd700',
                value: 50
            },
            'present_verb_negative_master': {
                name: '❌ 現在否定逆轉石',
                description: '扭轉現在式否定句的神奇寶石！',
                color: '#e67e22',
                value: 50
            },
            'question_master': {
                name: '❓ 疑問探索石',
                description: '好奇心滿滿的問句冒險家證明！',
                color: '#3ecfff',
                value: 50
            },
            'verb_master': {
                name: '⚡ 動詞風暴石',
                description: '動詞世界的超級英雄徽章！',
                color: '#ff6b6b',
                value: 50
            },
            'grammar_master': {
                name: '🎓 語法博士石',
                description: '語法學院最高榮譽的畢業證書！',
                color: '#4ecdc4',
                value: 50
            },
            'past_tense_master': {
                name: '⏳ 過去回憶石',
                description: '穿越時光回到過去的神秘寶石！',
                color: '#ff8c00',
                value: 50
            },
            'future_tense_master': {
                name: '🚀 未來預言石',
                description: '預見未來時態的水晶球！',
                color: '#9c88ff',
                value: 60
            },
            '未來式寶石': {
                name: '🔮 時空預言石',
                description: '洞察未來語法的神秘水晶！',
                color: '#9c88ff',
                value: 60
            },
            '疑問式寶石': {
                name: '🎯 好奇心鑽石',
                description: '充滿智慧問號的璀璨寶石！',
                color: '#46a3ff',
                value: 60
            },
            '比較級寶石': {
                name: '⚖️ 比較天秤石',
                description: '衡量事物大小的公正寶石！',
                color: '#ff6392',
                value: 70
            },
            '動詞高手寶石': {
                name: '🏆 動詞冠軍石',
                description: '動詞競技場的金牌得主！',
                color: '#ff6b6b',
                value: 50
            },
            '過去式寶石': {
                name: '📜 歷史記憶石',
                description: '記錄過往歲月的古老寶石！',
                color: '#ff8c00',
                value: 50
            }
        };
    }

    // 載入寶石數據
    loadGems() {
        try {
            const savedGems = localStorage.getItem('userGems');
            const defaultGems = {
                be_verb_master: 0,
                be_verb_negative_master: 0,
                be_verb_mixed_master: 0,
                present_verb_master: 0,
                present_verb_negative_master: 0,
                question_master: 0,
                verb_master: 0,
                grammar_master: 0,
                past_tense_master: 0,
                future_tense_master: 0,
                '未來式寶石': 0,
                '疑問式寶石': 0,
                '比較級寶石': 0,
                '動詞高手寶石': 0,
                '過去式寶石': 0
            };
            
            if (savedGems) {
                const parsedGems = JSON.parse(savedGems);
                // 合併保存的數據和默認數據，確保所有寶石類型都存在
                return { ...defaultGems, ...parsedGems };
            } else {
                return defaultGems;
            }
        } catch (error) {
            console.log('載入寶石數據失敗:', error);
            return {
                be_verb_master: 0,
                be_verb_negative_master: 0,
                be_verb_mixed_master: 0,
                present_verb_master: 0,
                present_verb_negative_master: 0,
                question_master: 0,
                verb_master: 0,
                grammar_master: 0,
                past_tense_master: 0,
                future_tense_master: 0,
                '未來式寶石': 0,
                '疑問式寶石': 0,
                '比較級寶石': 0,
                '動詞高手寶石': 0,
                '過去式寶石': 0
            };
        }
    }

    // 保存寶石數據
    saveGems() {
        try {
            localStorage.setItem('userGems', JSON.stringify(this.gems));
        } catch (error) {
            console.log('保存寶石數據失敗:', error);
        }
    }

    // 獲得寶石
    addGem(gemType, count = 1) {
        if (this.gems[gemType] !== undefined) {
            this.gems[gemType] += count;
            this.saveGems();
            this.showGemNotification(gemType, count);
            return true;
        }
        return false;
    }

    // 使用寶石
    useGem(gemType, count = 1) {
        if (this.gems[gemType] !== undefined && this.gems[gemType] >= count) {
            this.gems[gemType] -= count;
            this.saveGems();
            return true;
        }
        return false;
    }

    // 獲取寶石數量
    getGemCount(gemType) {
        return this.gems[gemType] || 0;
    }

    // 獲取總寶石數量
    getTotalGems() {
        return Object.values(this.gems).reduce((sum, count) => sum + count, 0);
    }

    // 兌換寶石為星星
    exchangeGemForStars(gemType, count = 1) {
        if (this.useGem(gemType, count)) {
            const gemValue = this.gemTypes[gemType].value;
            const starsToAdd = gemValue * count;
            
            // 同步到LinkageSystem
            if (typeof LinkageSystem !== 'undefined' && LinkageSystem.stars) {
                const currentStars = LinkageSystem.stars.get();
                LinkageSystem.stars.set(currentStars + starsToAdd);
            } else {
                // 備用方案：直接保存到localStorage
                const currentStars = parseInt(localStorage.getItem('totalStars') || '0');
                localStorage.setItem('totalStars', (currentStars + starsToAdd).toString());
            }
            
            this.showExchangeNotification(gemType, count, starsToAdd);
            return starsToAdd;
        }
        return 0;
    }

    // 顯示獲得寶石通知
    showGemNotification(gemType, count) {
        const gemInfo = this.gemTypes[gemType];
        if (!gemInfo) return;

        // 創建通知元素
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, ${gemInfo.color}, #fff);
            color: #222;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: bold;
            font-size: 1.1em;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5em;">💎</span>
                <div>
                    <div>獲得 ${gemInfo.name}</div>
                    <div style="font-size: 0.9em; opacity: 0.8;">+${count} 顆</div>
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

    // 顯示兌換通知
    showExchangeNotification(gemType, gemCount, starsGained) {
        const gemInfo = this.gemTypes[gemType];
        if (!gemInfo) return;

        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #ffe066, #ffd700);
            color: #222;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: bold;
            font-size: 1.1em;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5em;">⭐</span>
                <div>
                    <div>兌換成功！</div>
                    <div style="font-size: 0.9em; opacity: 0.8;">${gemCount}顆${gemInfo.name} → +${starsGained}顆星星</div>
                </div>
            </div>
        `;

        document.body.appendChild(notification);

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

    // 顯示寶石商店
    showGemShop() {
        const shopModal = document.createElement('div');
        shopModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;

        const shopContent = document.createElement('div');
        shopContent.style.cssText = `
            background: linear-gradient(135deg, #1a202c, #2d3748);
            border: 2px solid #00ffe0;
            border-radius: 20px;
            padding: 30px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            color: #e0eaff;
        `;

        let shopHTML = `
            <h2 style="text-align: center; color: #00ffe0; margin-bottom: 20px; font-size: 1.8em;">
                💎 寶石商店
            </h2>
            <div style="margin-bottom: 20px; text-align: center; color: #ffe066; font-size: 1.2em;">
                總寶石數量: ${this.getTotalGems()} 顆
            </div>
        `;

        // 顯示每種寶石
        Object.keys(this.gemTypes).forEach(gemType => {
            const gemInfo = this.gemTypes[gemType];
            const gemCount = this.getGemCount(gemType);
            
            shopHTML += `
                <div style="
                    background: rgba(255,255,255,0.1);
                    border: 1px solid ${gemInfo.color};
                    border-radius: 10px;
                    padding: 15px;
                    margin-bottom: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <div>
                        <div style="color: ${gemInfo.color}; font-weight: bold; font-size: 1.1em;">
                            ${gemInfo.name}
                        </div>
                        <div style="font-size: 0.9em; opacity: 0.8; margin-top: 5px;">
                            ${gemInfo.description}
                        </div>
                        <div style="color: #ffe066; margin-top: 5px;">
                            擁有: ${gemCount} 顆 | 價值: ${gemInfo.value} 顆星星
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button onclick="gemSystem.exchangeGemForStars('${gemType}', 1)" 
                                style="
                                    background: linear-gradient(135deg, #ffe066, #ffd700);
                                    color: #222;
                                    border: none;
                                    padding: 8px 15px;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    font-weight: bold;
                                    ${gemCount < 1 ? 'opacity: 0.5; cursor: not-allowed;' : ''}
                                "
                                ${gemCount < 1 ? 'disabled' : ''}>
                            兌換1顆
                        </button>
                        <button onclick="gemSystem.exchangeGemForStars('${gemType}', 5)" 
                                style="
                                    background: linear-gradient(135deg, #ff6b6b, #ff5252);
                                    color: white;
                                    border: none;
                                    padding: 8px 15px;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    font-weight: bold;
                                    ${gemCount < 5 ? 'opacity: 0.5; cursor: not-allowed;' : ''}
                                "
                                ${gemCount < 5 ? 'disabled' : ''}>
                            兌換5顆
                        </button>
                    </div>
                </div>
            `;
        });

        shopHTML += `
            <div style="text-align: center; margin-top: 20px;">
                <button onclick="this.closest('.gem-shop-modal').remove()" 
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
        shopModal.className = 'gem-shop-modal';
        document.body.appendChild(shopModal);

        // 點擊背景關閉
        shopModal.addEventListener('click', (e) => {
            if (e.target === shopModal) {
                shopModal.remove();
            }
        });
    }
}

// 創建全局寶石系統實例
const gemSystem = new GemSystem();

// 導出供其他模組使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GemSystem;
} 