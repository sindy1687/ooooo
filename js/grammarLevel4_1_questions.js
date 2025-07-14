// 文法塔統一題庫系統 - 第四關：be動詞混合現在（多樣化題庫）
// 每個小關卡10題，難度逐關遞增，包含肯定句、否定句、疑問句混合練習

// 統一題庫 - 所有題目按難度分類（be動詞混合現在）
const UNIFIED_QUESTION_BANK = {
  easy: [
        {
            question: "The students ___ in the classroom.",
            options: ["am", "is", "are", "be"],
            correct: 2,
            explanation: "主詞 The students 是複數，肯定句用 are。（學生們在教室裡。）",
            logicHint: "主詞 The students 是複數，肯定句要用什麼呢?",
            difficultWords: ["students", "classroom"]
        },
        {
            question: "She ___ happy today.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 1,
            explanation: "主詞 She 是第三人稱單數，否定句用 isn't。（她今天不開心。）",
            logicHint: "主詞 She 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["happy", "today"]
        },
        {
            question: "___ you ready for the test?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 you 是第二人稱，疑問句用 Are。（你準備好考試了嗎？）",
            logicHint: "主詞 you 是第二人稱，疑問句要用什麼呢?",
            difficultWords: ["ready", "test"]
        },
        {
            question: "The weather ___ cold today.",
            options: ["am", "is", "are", "be"],
            correct: 1,
            explanation: "主詞 The weather 是單數，肯定句用 is。（今天天氣很冷。）",
            logicHint: "主詞 The weather 是單數，肯定句要用什麼呢?",
            difficultWords: ["weather", "cold"]
        },
        {
            question: "They ___ at home.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 0,
            explanation: "主詞 They 是複數，否定句用 aren't。（他們不在家。）",
            logicHint: "主詞 They 是複數，否定句要用什麼呢?",
            difficultWords: ["home"]
        },
        {
            question: "___ this your book?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 this 是單數，疑問句用 Is。（這是你的書嗎？）",
            logicHint: "主詞 this 是單數，疑問句要用什麼呢?",
            difficultWords: ["book"]
        },
        {
            question: "I ___ a student.",
            options: ["am", "is", "are", "be"],
            correct: 0,
            explanation: "主詞 I 是第一人稱單數，肯定句用 am。（我是學生。）",
            logicHint: "主詞 I 是第一人稱單數，肯定句要用什麼呢?",
            difficultWords: ["student"]
        },
        {
            question: "The children ___ playing outside.",
            options: ["am", "is", "are", "be"],
            correct: 2,
            explanation: "主詞 The children 是複數，肯定句用 are。（孩子們在外面玩。）",
            logicHint: "主詞 The children 是複數，肯定句要用什麼呢?",
            difficultWords: ["children", "playing", "outside"]
        },
        {
            question: "He ___ feeling well.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 1,
            explanation: "主詞 He 是第三人稱單數，否定句用 isn't。（他感覺不舒服。）",
            logicHint: "主詞 He 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["feeling", "well"]
        },
        {
            question: "___ we late for class?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 we 是複數，疑問句用 Are。（我們上課遲到了嗎？）",
            logicHint: "主詞 we 是複數，疑問句要用什麼呢?",
            difficultWords: ["late", "class"]
        }
  ],
  medium: [
        {
            question: "My parents ___ working today.",
            options: ["am", "is", "are", "be"],
            correct: 2,
            explanation: "主詞 My parents 是複數，肯定句用 are。（我的父母今天在工作。）",
            logicHint: "主詞 My parents 是複數，肯定句要用什麼呢?",
            difficultWords: ["parents", "working"]
        },
        {
            question: "The movie ___ interesting.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 1,
            explanation: "主詞 The movie 是單數，否定句用 isn't。（這部電影不有趣。）",
            logicHint: "主詞 The movie 是單數，否定句要用什麼呢?",
            difficultWords: ["movie", "interesting"]
        },
        {
            question: "___ the buses on time?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the buses 是複數，疑問句用 Are。（巴士準時嗎？）",
            logicHint: "主詞 the buses 是複數，疑問句要用什麼呢?",
            difficultWords: ["buses", "time"]
        },
        {
            question: "Her hair ___ very long.",
            options: ["am", "is", "are", "be"],
            correct: 1,
            explanation: "主詞 Her hair 是單數，肯定句用 is。（她的頭髮很長。）",
            logicHint: "主詞 Her hair 是單數，肯定句要用什麼呢?",
            difficultWords: ["hair", "long"]
        },
        {
            question: "We ___ going to the party.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 0,
            explanation: "主詞 We 是複數，否定句用 aren't。（我們不去派對。）",
            logicHint: "主詞 We 是複數，否定句要用什麼呢?",
            difficultWords: ["party"]
        },
        {
            question: "___ this restaurant good?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 this restaurant 是單數，疑問句用 Is。（這家餐廳好嗎？）",
            logicHint: "主詞 this restaurant 是單數，疑問句要用什麼呢?",
            difficultWords: ["restaurant", "good"]
        },
        {
            question: "The birds ___ singing in the morning.",
            options: ["am", "is", "are", "be"],
            correct: 2,
            explanation: "主詞 The birds 是複數，肯定句用 are。（鳥兒在早上唱歌。）",
            logicHint: "主詞 The birds 是複數，肯定句要用什麼呢?",
            difficultWords: ["birds", "singing", "morning"]
        },
        {
            question: "His job ___ challenging.",
            options: ["am", "is", "are", "be"],
            correct: 1,
            explanation: "主詞 His job 是單數，肯定句用 is。（他的工作有挑戰性。）",
            logicHint: "主詞 His job 是單數，肯定句要用什麼呢?",
            difficultWords: ["job", "challenging"]
        },
        {
            question: "The students ___ studying for the exam.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 0,
            explanation: "主詞 The students 是複數，否定句用 aren't。（學生們沒有在為考試讀書。）",
            logicHint: "主詞 The students 是複數，否定句要用什麼呢?",
            difficultWords: ["students", "studying", "exam"]
        },
        {
            question: "___ the weather cold today?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the weather 是單數，疑問句用 Is。（今天天氣冷嗎？）",
            logicHint: "主詞 the weather 是單數，疑問句要用什麼呢?",
            difficultWords: ["weather", "cold"]
        },
        {
            question: "This lesson ___ important for the test.",
            options: ["am", "is", "are", "be"],
            correct: 1,
            explanation: "主詞 This lesson 是單數，肯定句用 is。（這堂課對考試很重要。）",
            logicHint: "主詞 This lesson 是單數，肯定句要用什麼呢?",
            difficultWords: ["lesson", "important", "test"]
        },
        {
            question: "The windows ___ open in the classroom.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 0,
            explanation: "主詞 The windows 是複數，否定句用 aren't。（教室的窗戶沒有開。）",
            logicHint: "主詞 The windows 是複數，否定句要用什麼呢?",
            difficultWords: ["windows", "open", "classroom"]
        },
        {
            question: "___ her voice beautiful when she sings?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 her voice 是單數，疑問句用 Is。（她唱歌時聲音很美嗎？）",
            logicHint: "主詞 her voice 是單數，疑問句要用什麼呢?",
            difficultWords: ["voice", "beautiful", "sings"]
        },
        {
            question: "The pictures ___ clear enough to see.",
            options: ["am", "is", "are", "be"],
            correct: 2,
            explanation: "主詞 The pictures 是複數，肯定句用 are。（這些照片清楚到能看見。）",
            logicHint: "主詞 The pictures 是複數，肯定句要用什麼呢?",
            difficultWords: ["pictures", "clear", "enough"]
        },
        {
            question: "This computer ___ fast enough for gaming.",
            options: ["am", "is", "are", "be"],
            correct: 1,
            explanation: "主詞 This computer 是單數，肯定句用 is。（這台電腦快到能玩遊戲。）",
            logicHint: "主詞 This computer 是單數，肯定句要用什麼呢?",
            difficultWords: ["computer", "fast", "gaming"]
        },
        {
            question: "The teachers ___ busy with their work.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 0,
            explanation: "主詞 The teachers 是複數，否定句用 aren't。（老師們不忙於工作。）",
            logicHint: "主詞 The teachers 是複數，否定句要用什麼呢?",
            difficultWords: ["teachers", "busy", "work"]
        },
        {
            question: "___ the coffee hot enough to drink?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the coffee 是單數，疑問句用 Is。（這咖啡熱到能喝嗎？）",
            logicHint: "主詞 the coffee 是單數，疑問句要用什麼呢?",
            difficultWords: ["coffee", "hot", "drink"]
        },
        {
            question: "The dogs ___ friendly to strangers.",
            options: ["am", "is", "are", "be"],
            correct: 2,
            explanation: "主詞 The dogs 是複數，肯定句用 are。（這些狗對陌生人友善。）",
            logicHint: "主詞 The dogs 是複數，肯定句要用什麼呢?",
            difficultWords: ["dogs", "friendly", "strangers"]
        },
        {
            question: "His explanation ___ clear.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 1,
            explanation: "主詞 His explanation 是單數，否定句用 isn't。（他的解釋不清楚。）",
            logicHint: "主詞 His explanation 是單數，否定句要用什麼呢?",
            difficultWords: ["explanation", "clear"]
        },
        {
            question: "___ the children playing outside?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the children 是複數，疑問句用 Are。（孩子們在外面玩嗎？）",
            logicHint: "主詞 the children 是複數，疑問句要用什麼呢?",
            difficultWords: ["children", "playing", "outside"]
        },
        {
            question: "This restaurant ___ expensive.",
            options: ["am", "is", "are", "be"],
            correct: 1,
            explanation: "主詞 This restaurant 是單數，肯定句用 is。（這家餐廳很貴。）",
            logicHint: "主詞 This restaurant 是單數，肯定句要用什麼呢?",
            difficultWords: ["restaurant", "expensive"]
        }
  ],
  hard: [
        {
            question: "The information ___ accurate.",
            options: ["am", "is", "are", "be"],
            correct: 1,
            explanation: "主詞 The information 是不可數名詞，肯定句用 is。（這個資訊準確。）",
            logicHint: "主詞 The information 是不可數名詞，肯定句要用什麼呢?",
            difficultWords: ["information", "accurate"]
        },
        {
            question: "The news ___ true.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 1,
            explanation: "主詞 The news 是不可數名詞，否定句用 isn't。（這個新聞不是真的。）",
            logicHint: "主詞 The news 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["news", "true"]
        },
        {
            question: "___ the police here?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the police 是複數概念，疑問句用 Are。（警察在這裡嗎？）",
            logicHint: "主詞 the police 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["police"]
        },
        {
            question: "The furniture ___ comfortable.",
            options: ["am", "is", "are", "be"],
            correct: 1,
            explanation: "主詞 The furniture 是不可數名詞，肯定句用 is。（這家具舒適。）",
            logicHint: "主詞 The furniture 是不可數名詞，肯定句要用什麼呢?",
            difficultWords: ["furniture", "comfortable"]
        },
        {
            question: "The scissors ___ sharp.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 0,
            explanation: "主詞 The scissors 是複數概念，否定句用 aren't。（這剪刀不鋒利。）",
            logicHint: "主詞 The scissors 是複數概念，否定句要用什麼呢?",
            difficultWords: ["scissors", "sharp"]
        },
        {
            question: "___ the advice helpful?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the advice 是不可數名詞，疑問句用 Is。（這個建議有幫助嗎？）",
            logicHint: "主詞 the advice 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["advice", "helpful"]
        },
        {
            question: "The glasses ___ broken.",
            options: ["am", "is", "are", "be"],
            correct: 2,
            explanation: "主詞 The glasses 是複數概念，肯定句用 are。（這眼鏡壞了。）",
            logicHint: "主詞 The glasses 是複數概念，肯定句要用什麼呢?",
            difficultWords: ["glasses", "broken"]
        },
        {
            question: "The luggage ___ heavy.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 1,
            explanation: "主詞 The luggage 是不可數名詞，否定句用 isn't。（這行李不重。）",
            logicHint: "主詞 The luggage 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["luggage", "heavy"]
        },
        {
            question: "The trousers ___ too long.",
            options: ["am", "is", "are", "be"],
            correct: 2,
            explanation: "主詞 The trousers 是複數概念，肯定句用 are。（這褲子太長。）",
            logicHint: "主詞 The trousers 是複數概念，肯定句要用什麼呢?",
            difficultWords: ["trousers", "long"]
        },
        {
            question: "___ the equipment ready?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the equipment 是不可數名詞，疑問句用 Is。（這設備準備好了嗎？）",
            logicHint: "主詞 the equipment 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["equipment", "ready"]
        },
        {
            question: "The stairs ___ safe to climb.",
            options: ["am", "is", "are", "be"],
            correct: 2,
            explanation: "主詞 The stairs 是複數概念，肯定句用 are。（這樓梯安全到能爬。）",
            logicHint: "主詞 The stairs 是複數概念，肯定句要用什麼呢?",
            difficultWords: ["stairs", "safe", "climb"]
        },
        {
            question: "The knowledge ___ useful for the job.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 1,
            explanation: "主詞 The knowledge 是不可數名詞，否定句用 isn't。（這個知識對工作沒用。）",
            logicHint: "主詞 The knowledge 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["knowledge", "useful", "job"]
        },
        {
            question: "___ the jeans expensive to buy?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the jeans 是複數概念，疑問句用 Are。（這牛仔褲貴到能買嗎？）",
            logicHint: "主詞 the jeans 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["jeans", "expensive", "buy"]
        },
        {
            question: "The research ___ complete for the report.",
            options: ["am", "is", "are", "be"],
            correct: 1,
            explanation: "主詞 The research 是不可數名詞，肯定句用 is。（這研究完整到能寫報告。）",
            logicHint: "主詞 The research 是不可數名詞，肯定句要用什麼呢?",
            difficultWords: ["research", "complete", "report"]
        },
        {
            question: "The headphones ___ working properly.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 0,
            explanation: "主詞 The headphones 是複數概念，否定句用 aren't。（這耳機沒有正常運作。）",
            logicHint: "主詞 The headphones 是複數概念，否定句要用什麼呢?",
            difficultWords: ["headphones", "working", "properly"]
        },
        {
            question: "___ the evidence clear enough to prove?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the evidence 是不可數名詞，疑問句用 Is。（這證據清楚到能證明嗎？）",
            logicHint: "主詞 the evidence 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["evidence", "clear", "prove"]
        },
        {
            question: "The sunglasses ___ cool to wear.",
            options: ["am", "is", "are", "be"],
            correct: 2,
            explanation: "主詞 The sunglasses 是複數概念，肯定句用 are。（這太陽眼鏡酷到能戴。）",
            logicHint: "主詞 The sunglasses 是複數概念，肯定句要用什麼呢?",
            difficultWords: ["sunglasses", "cool", "wear"]
        },
        {
            question: "The progress ___ good enough to continue.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 1,
            explanation: "主詞 The progress 是不可數名詞，否定句用 isn't。（這進度不好到能繼續。）",
            logicHint: "主詞 The progress 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["progress", "good", "continue"]
        },
        {
            question: "___ the binoculars powerful enough to see?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the binoculars 是複數概念，疑問句用 Are。（這望遠鏡強到能看見嗎？）",
            logicHint: "主詞 the binoculars 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["binoculars", "powerful", "see"]
        },
        {
            question: "The software ___ reliable for daily use.",
            options: ["am", "is", "are", "be"],
            correct: 1,
            explanation: "主詞 The software 是不可數名詞，肯定句用 is。（這軟體可靠到能日常使用。）",
            logicHint: "主詞 The software 是不可數名詞，肯定句要用什麼呢?",
            difficultWords: ["software", "reliable", "daily"]
        },
        {
            question: "The people ___ friendly to visitors.",
            options: ["aren't", "isn't", "wasn't", "weren't"],
            correct: 0,
            explanation: "主詞 The people 是複數概念，否定句用 aren't。（這些人對訪客不友善。）",
            logicHint: "主詞 The people 是複數概念，否定句要用什麼呢?",
            difficultWords: ["people", "friendly", "visitors"]
        }
  ]
};

// 困難單字詞典
const DIFFICULT_WORDS = {
    "students": "學生們",
    "classroom": "教室",
    "happy": "開心的",
    "today": "今天",
    "ready": "準備好的",
    "test": "考試",
    "weather": "天氣",
    "cold": "冷的",
    "home": "家",
    "book": "書",
    "student": "學生",
    "children": "孩子們",
    "playing": "玩",
    "outside": "外面",
    "feeling": "感覺",
    "well": "好的",
    "late": "遲到的",
    "class": "課堂",
    "parents": "父母",
    "working": "工作",
    "movie": "電影",
    "interesting": "有趣的",
    "buses": "巴士",
    "time": "時間",
    "hair": "頭髮",
    "long": "長的",
    "party": "派對",
    "restaurant": "餐廳",
    "good": "好的",
    "birds": "鳥",
    "singing": "唱歌",
    "morning": "早上",
    "job": "工作",
    "challenging": "有挑戰性的",
    "studying": "讀書",
    "exam": "考試",
    "lesson": "課程",
    "important": "重要的",
    "windows": "窗戶",
    "open": "開的",
    "voice": "聲音",
    "beautiful": "美麗的",
    "sings": "唱歌",
    "pictures": "照片",
    "clear": "清楚的",
    "enough": "足夠的",
    "computer": "電腦",
    "fast": "快的",
    "gaming": "遊戲",
    "teachers": "老師們",
    "busy": "忙的",
    "coffee": "咖啡",
    "hot": "熱的",
    "drink": "喝",
    "dogs": "狗",
    "friendly": "友善的",
    "strangers": "陌生人",
    "explanation": "解釋",
    "expensive": "貴的",
    "information": "資訊",
    "accurate": "準確的",
    "news": "新聞",
    "true": "真的",
    "police": "警察",
    "furniture": "家具",
    "comfortable": "舒適的",
    "scissors": "剪刀",
    "sharp": "鋒利的",
    "advice": "建議",
    "helpful": "有幫助的",
    "glasses": "眼鏡",
    "broken": "壞的",
    "luggage": "行李",
    "heavy": "重的",
    "trousers": "褲子",
    "equipment": "設備",
    "stairs": "樓梯",
    "safe": "安全的",
    "climb": "爬",
    "knowledge": "知識",
    "useful": "有用的",
    "jeans": "牛仔褲",
    "buy": "買",
    "research": "研究",
    "complete": "完整的",
    "report": "報告",
    "headphones": "耳機",
    "working": "運作",
    "properly": "正常地",
    "evidence": "證據",
    "prove": "證明",
    "sunglasses": "太陽眼鏡",
    "cool": "酷的",
    "wear": "戴",
    "progress": "進度",
    "continue": "繼續",
    "binoculars": "望遠鏡",
    "powerful": "強力的",
    "see": "看見",
    "software": "軟體",
    "reliable": "可靠的",
    "daily": "日常的",
    "use": "使用",
    "people": "人們",
    "visitors": "訪客"
};

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索be動詞混合現在時態的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的混合句型",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的混合時態挑戰",
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
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
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