// 文法塔統一題庫系統 - 第六關：現在進行式（多樣化題庫）
// 每個小關卡10題，難度逐關遞增，主詞多樣化，包含肯定、否定、疑問句

// 統一題庫 - 所有題目按難度分類（現在進行式）
const UNIFIED_QUESTION_BANK = {
  easy: [
        {
            question: "She ___ her homework now.",
            options: ["is doing", "are doing", "am doing", "does doing"],
            correct: 0,
            explanation: "主詞 She 是第三人稱單數，現在進行式用 is + V-ing：is doing。",
            logicHint: "主詞 She 是第三人稱單數，現在進行式要用什麼 be 動詞?",
            difficultWords: ["homework", "now"]
        },
        {
            question: "They ___ soccer in the park.",
            options: ["is playing", "are playing", "am playing", "play"],
            correct: 1,
            explanation: "主詞 They 是複數，現在進行式用 are + V-ing：are playing。",
            logicHint: "主詞 They 是複數，現在進行式要用什麼 be 動詞?",
            difficultWords: ["soccer", "park"]
        },
        {
            question: "I ___ to music at the moment.",
            options: ["is listening", "are listening", "am listening", "listen"],
            correct: 2,
            explanation: "主詞 I，現在進行式用 am + V-ing：am listening。",
            logicHint: "主詞 I，現在進行式要用什麼 be 動詞?",
            difficultWords: ["music", "moment"]
        },
        {
            question: "The cat ___ on the sofa.",
            options: ["sleep", "is sleeping", "are sleeping", "am sleeping"],
            correct: 1,
            explanation: "主詞 The cat 是單數，現在進行式用 is + V-ing：is sleeping。",
            logicHint: "主詞 The cat 是單數，現在進行式要用什麼 be 動詞?",
            difficultWords: ["cat", "sofa"]
        },
        {
            question: "We ___ dinner together.",
            options: ["is having", "am having", "have", "are having"],
            correct: 3,
            explanation: "主詞 We 是複數，現在進行式用 are + V-ing：are having。",
            logicHint: "主詞 We 是複數，現在進行式要用什麼 be 動詞?",
            difficultWords: ["dinner", "together"]
        },
        {
            question: "You ___ a book.",
            options: ["is reading", "are reading", "am reading", "read"],
            correct: 1,
            explanation: "主詞 You，現在進行式用 are + V-ing：are reading。",
            logicHint: "主詞 You，現在進行式要用什麼 be 動詞?",
            difficultWords: ["book"]
        },
        {
            question: "He ___ TV right now.",
            options: ["is watching", "are watching", "watch", "am watching"],
            correct: 0,
            explanation: "主詞 He 是單數，現在進行式用 is + V-ing：is watching。",
            logicHint: "主詞 He 是單數，現在進行式要用什麼 be 動詞?",
            difficultWords: ["TV", "right now"]
        },
        {
            question: "The children ___ in the pool.",
            options: ["is swimming", "am swimming", "swim", "are swimming"],
            correct: 3,
            explanation: "主詞 The children 是複數，現在進行式用 are + V-ing：are swimming。",
            logicHint: "主詞 The children 是複數，現在進行式要用什麼 be 動詞?",
            difficultWords: ["children", "pool"]
        },
        {
            question: "My mother ___ breakfast.",
            options: ["is making", "are making", "am making", "make"],
            correct: 0,
            explanation: "主詞 My mother 是單數，現在進行式用 is + V-ing：is making。",
            logicHint: "主詞 My mother 是單數，現在進行式要用什麼 be 動詞?",
            difficultWords: ["mother", "breakfast"]
        },
        {
            question: "The dogs ___ loudly.",
            options: ["bark", "are barking", "is barking", "am barking"],
            correct: 1,
            explanation: "主詞 The dogs 是複數，現在進行式用 are + V-ing：are barking。",
            logicHint: "主詞 The dogs 是複數，現在進行式要用什麼 be 動詞?",
            difficultWords: ["dogs", "loudly"]
        }
  ],
  medium: [
        {
            question: "Is she ___ a letter?",
            options: ["writes", "writing", "write", "wrote"],
            correct: 1,
            explanation: "疑問句，be 動詞 is + 主詞 + V-ing：Is she writing?",
            logicHint: "現在進行式疑問句要用什麼動詞形式?",
            difficultWords: ["letter"]
        },
        {
            question: "They ___ not ___ to school today.",
            options: ["is, going", "are, going", "are, go", "am, going"],
            correct: 1,
            explanation: "否定句，主詞 They 用 are not + V-ing：are not going。",
            logicHint: "主詞 They 否定句 be 動詞怎麼用?",
            difficultWords: ["school", "today"]
        },
        {
            question: "What ___ you ___?",
            options: ["are, do", "is, doing", "are, doing", "am, doing"],
            correct: 2,
            explanation: "疑問句，What are you doing? 現在進行式。",
            logicHint: "問對方正在做什麼，be 動詞怎麼用?",
            difficultWords: ["what", "doing"]
        },
        {
            question: "My friends ___ for the bus.",
            options: ["is waiting", "am waiting", "wait", "are waiting"],
            correct: 3,
            explanation: "主詞 My friends 是複數，現在進行式用 are + V-ing：are waiting。",
            logicHint: "主詞 My friends 是複數，be 動詞怎麼用?",
            difficultWords: ["friends", "bus"]
        },
        {
            question: "Why ___ it ___?",
            options: ["is, raining", "are, raining", "is, rain", "am, raining"],
            correct: 0,
            explanation: "主詞 it，現在進行式 is raining。",
            logicHint: "天氣 it 現在進行式 be 動詞怎麼用?",
            difficultWords: ["why", "raining"]
        },
        {
            question: "I ___ not ___ my phone.",
            options: ["is, using", "are, using", "am, using", "am, use"],
            correct: 2,
            explanation: "主詞 I 否定句 am not + V-ing：am not using。",
            logicHint: "主詞 I 否定句 be 動詞怎麼用?",
            difficultWords: ["phone"]
        },
        {
            question: "The boys ___ their bikes.",
            options: ["is riding", "are riding", "am riding", "ride"],
            correct: 1,
            explanation: "主詞 The boys 是複數，現在進行式用 are + V-ing：are riding。",
            logicHint: "主詞 The boys 是複數，be 動詞怎麼用?",
            difficultWords: ["boys", "bikes"]
        },
        {
            question: "Who ___ not ___ attention?",
            options: ["is, paying", "are, paying", "is, pay", "am, paying"],
            correct: 0,
            explanation: "Who 當主詞，否定句 is not paying。",
            logicHint: "Who 當主詞 be 動詞怎麼用?",
            difficultWords: ["attention", "paying"]
        },
        {
            question: "The students ___ a test.",
            options: ["is taking", "am taking", "take", "are taking"],
            correct: 3,
            explanation: "主詞 The students 是複數，現在進行式用 are + V-ing：are taking。",
            logicHint: "主詞 The students 是複數，be 動詞怎麼用?",
            difficultWords: ["students", "test"]
        },
        {
            question: "My father ___ not ___ dinner.",
            options: ["is, cooking", "are, cooking", "am, cooking", "is, cook"],
            correct: 0,
            explanation: "主詞 My father 否定句 is not + V-ing：is not cooking。",
            logicHint: "主詞 My father 否定句 be 動詞怎麼用?",
            difficultWords: ["father", "dinner"]
        }
  ],
  hard: [
        {
            question: "Are the children ___ their homework?",
            options: ["do", "does", "did", "doing"],
            correct: 3,
            explanation: "疑問句，Are the children doing...? 現在進行式。",
            logicHint: "children 複數，疑問句 be 動詞怎麼用?",
            difficultWords: ["children", "homework"]
        },
        {
            question: "The workers ___ not ___ today.",
            options: ["is, working", "am, working", "are, work", "are, working"],
            correct: 3,
            explanation: "主詞 The workers 否定句 are not + V-ing：are not working。",
            logicHint: "workers 複數，否定句 be 動詞怎麼用?",
            difficultWords: ["workers", "today"]
        },
        {
            question: "What ___ your sister ___?",
            options: ["is, reading", "are, reading", "am, reading", "is, read"],
            correct: 0,
            explanation: "主詞 your sister，現在進行式 is reading。",
            logicHint: "your sister 單數，be 動詞怎麼用?",
            difficultWords: ["sister", "reading"]
        },
        {
            question: "Why ___ you ___ so fast?",
            options: ["is, running", "am, running", "are, run", "are, running"],
            correct: 3,
            explanation: "主詞 you，現在進行式 are running。",
            logicHint: "you 複數/單數都用 are，be 動詞怎麼用?",
            difficultWords: ["why", "running", "fast"]
        },
        {
            question: "The baby ___ not ___ .",
            options: ["is, crying", "are, crying", "am, crying", "is, cry"],
            correct: 0,
            explanation: "主詞 The baby 否定句 is not + V-ing：is not crying。",
            logicHint: "baby 單數，否定句 be 動詞怎麼用?",
            difficultWords: ["baby", "crying"]
        },
        {
            question: "Are you ___ your keys?",
            options: ["look for", "looks for", "looked for", "looking for"],
            correct: 3,
            explanation: "Are you looking for...? 現在進行式。",
            logicHint: "問對方正在找東西，be 動詞怎麼用?",
            difficultWords: ["keys", "looking"]
        },
        {
            question: "Who ___ not ___ attention?",
            options: ["is, paying", "are, paying", "is, pay", "am, paying"],
            correct: 0,
            explanation: "Who 當主詞，否定句 is not paying。",
            logicHint: "Who 當主詞 be 動詞怎麼用?",
            difficultWords: ["attention", "paying"]
        },
        {
            question: "The teachers ___ a meeting now.",
            options: ["is having", "am having", "have", "are having"],
            correct: 3,
            explanation: "主詞 The teachers 是複數，現在進行式 are having。",
            logicHint: "teachers 複數，be 動詞怎麼用?",
            difficultWords: ["teachers", "meeting", "now"]
        },
        {
            question: "Is it ___ outside?",
            options: ["snows", "snow", "snowed", "snowing"],
            correct: 3,
            explanation: "天氣 it，現在進行式 is snowing。",
            logicHint: "天氣 it 現在進行式 be 動詞怎麼用?",
            difficultWords: ["snowing", "outside"]
        },
        {
            question: "My parents ___ not ___ at home.",
            options: ["is, staying", "am, staying", "are, stay", "are, staying"],
            correct: 3,
            explanation: "主詞 My parents 否定句 are not staying。",
            logicHint: "parents 複數，否定句 be 動詞怎麼用?",
            difficultWords: ["parents", "home"]
        }
  ]
};

// 困難單字詞典
const DIFFICULT_WORDS = {
    "students": "學生們",
    "English": "英文",
    "every": "每個",
    "brother": "兄弟",
    "basketball": "籃球",
    "weekends": "週末",
    "sister": "姐妹",
    "music": "音樂",
    "children": "孩子們",
    "park": "公園",
    "teacher": "老師",
    "math": "數學",
    "well": "好地",
    "mother": "媽媽",
    "dinner": "晚餐",
    "evening": "晚上",
    "birds": "鳥",
    "morning": "早上",
    "cat": "貓",
    "fish": "魚",
    "dogs": "狗",
    "garden": "花園",
    "father": "爸爸",
    "newspaper": "報紙",
    "workers": "工人",
    "hard": "努力地",
    "doctor": "醫生",
    "patients": "病人",
    "hospital": "醫院",
    "uncle": "叔叔",
    "company": "公司",
    "computers": "電腦",
    "quickly": "快速地",
    "grandmother": "奶奶",
    "stories": "故事",
    "buses": "巴士",
    "arrive": "到達",
    "time": "時間",
    "restaurant": "餐廳",
    "delicious": "美味的",
    "food": "食物",
    "homework": "作業",
    "aunt": "阿姨",
    "cookies": "餅乾",
    "trees": "樹",
    "autumn": "秋天",
    "engineer": "工程師",
    "projects": "專案",
    "teachers": "老師們",
    "lessons": "課程",
    "carefully": "仔細地",
    "cousin": "表妹",
    "school": "學校",
    "cars": "車子",
    "highway": "高速公路",
    "library": "圖書館",
    "books": "書",
    "farmers": "農夫",
    "vegetables": "蔬菜",
    "field": "田地",
    "police": "警察",
    "officers": "官員",
    "community": "社區",
    "artist": "藝術家",
    "paintings": "畫作",
    "nurses": "護士",
    "firefighters": "消防員",
    "danger": "危險",
    "information": "資訊",
    "clearly": "清楚地",
    "report": "報告",
    "news": "新聞",
    "around": "圍繞",
    "scissors": "剪刀",
    "easily": "容易地",
    "advice": "建議",
    "helpful": "有幫助的",
    "glasses": "眼鏡",
    "light": "光線",
    "properly": "正確地",
    "luggage": "行李",
    "heavy": "重的",
    "carry": "攜帶",
    "trousers": "褲子",
    "comfortable": "舒適的",
    "wear": "穿",
    "equipment": "設備",
    "ready": "準備好的",
    "use": "使用",
    "stairs": "樓梯",
    "safe": "安全的",
    "climb": "爬",
    "knowledge": "知識",
    "useful": "有用的",
    "job": "工作",
    "jeans": "牛仔褲",
    "expensive": "貴的",
    "buy": "買",
    "research": "研究",
    "complete": "完整的",
    "headphones": "耳機",
    "during": "在...期間",
    "evidence": "證據",
    "clear": "清楚的",
    "prove": "證明",
    "sunglasses": "太陽眼鏡",
    "cool": "酷的",
    "progress": "進度",
    "good": "好的",
    "continue": "繼續",
    "binoculars": "望遠鏡",
    "powerful": "強力的",
    "see": "看見",
    "software": "軟體",
    "reliable": "可靠的",
    "daily": "日常的",
    "people": "人們",
    "friendly": "友善的",
    "visitors": "訪客",
    "furniture": "家具",
    "sit": "坐",
    "serve": "服務",
    "safely": "安全地"
};

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索一般動詞現在式否定句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的否定句型",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的否定句挑戰",
        difficulty: "hard"
    }
};

// 隨機選擇題目函數
function getRandomQuestions(subLevel, count = 10) {
    const levelConfig = LEVEL_CONFIG[subLevel];
    if (!levelConfig) {
        console.error(`未知的關卡: ${subLevel}`);
        return [];
    }
    
    const questions = UNIFIED_QUESTION_BANK[levelConfig.difficulty];
    if (!questions || questions.length === 0) {
        console.error(`沒有找到 ${levelConfig.difficulty} 難度的題目`);
        return [];
    }
    
    // 隨機選擇題目
    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, count);
    // 對每題的 options 亂序
    return shuffled.map(q => {
        // 亂序 options 並記錄正確答案的新 index
        const optionPairs = q.options.map((opt, idx) => ({ opt, idx }));
        const shuffledOptions = optionPairs.sort(() => 0.5 - Math.random());
        const newOptions = shuffledOptions.map(pair => pair.opt);
        const newCorrect = shuffledOptions.findIndex(pair => pair.idx === q.correct);
        return {
            ...q,
            options: newOptions,
            correct: newCorrect
        };
    });
}

// 獲取關卡資訊
function getLevelInfo(subLevel) {
    return LEVEL_CONFIG[subLevel] || null;
}

// 獲取所有關卡
function getAllLevels() {
    return Object.keys(LEVEL_CONFIG);
}

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        UNIFIED_QUESTION_BANK,
        DIFFICULT_WORDS,
        LEVEL_CONFIG,
        getRandomQuestions,
        getLevelInfo,
        getAllLevels
    };
} 
