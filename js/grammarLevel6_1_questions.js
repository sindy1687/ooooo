// 文法塔統一題庫系統 - 第六關：現在進行式（多樣化題庫）
// 每個小關卡10題，難度逐關遞增，主詞多樣化，包含所有格加名詞

// 統一題庫 - 所有題目按難度分類（現在進行式）
const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "I ___ my homework now.",
      options: ["am doing", "is doing", "are doing", "do"],
      correct: 0,
      explanation: "主詞 I，現在進行式用 am + V-ing，am doing（我正在做作業。）",
      logicHint: "I 現在進行式要用 am 還是 is/are?",
      difficultWords: ["homework", "now"]
    },
    {
      question: "She ___ TV at the moment.",
      options: ["is watching", "are watching", "am watching", "watch"],
      correct: 0,
      explanation: "主詞 She，現在進行式用 is + V-ing，is watching（她正在看電視。）",
      logicHint: "She 現在進行式要用 is 還是 are?",
      difficultWords: ["moment", "watching", "TV"]
    },
    {
      question: "They ___ in the park.",
      options: ["are playing", "is playing", "am playing", "play"],
      correct: 0,
      explanation: "主詞 They，現在進行式用 are + V-ing，are playing（他們正在公園玩耍。）",
      logicHint: "They 現在進行式要用 are 還是 is?",
      difficultWords: ["park", "playing"]
    },
    {
      question: "My mother ___ dinner right now.",
      options: ["is cooking", "are cooking", "am cooking", "cook"],
      correct: 0,
      explanation: "主詞 My mother，現在進行式用 is + V-ing，is cooking（我媽媽正在煮晚餐。）",
      logicHint: "My mother 現在進行式要用 is 還是 are?",
      difficultWords: ["mother", "dinner", "cooking"]
    },
    {
      question: "We ___ English.",
      options: ["are learning", "is learning", "am learning", "learn"],
      correct: 0,
      explanation: "主詞 We，現在進行式用 are + V-ing，are learning（我們正在學英文。）",
      logicHint: "We 現在進行式要用 are 還是 is?",
      difficultWords: ["learning", "English"]
    },
    {
      question: "The cat ___ on the sofa.",
      options: ["is sleeping", "are sleeping", "am sleeping", "sleep"],
      correct: 0,
      explanation: "主詞 The cat，現在進行式用 is + V-ing，is sleeping（貓正在沙發上睡覺。）",
      logicHint: "The cat 現在進行式要用 is 還是 are?",
      difficultWords: ["cat", "sofa", "sleeping"]
    },
    {
      question: "You ___ to music.",
      options: ["are listening", "is listening", "am listening", "listen"],
      correct: 0,
      explanation: "主詞 You，現在進行式用 are + V-ing，are listening（你正在聽音樂。）",
      logicHint: "You 現在進行式要用 are 還是 is?",
      difficultWords: ["listening", "music"]
    },
    {
      question: "Tom and Jerry ___ cheese.",
      options: ["are eating", "is eating", "am eating", "eat"],
      correct: 0,
      explanation: "主詞 Tom and Jerry（複數），現在進行式用 are + V-ing，are eating（湯姆和傑利正在吃起司。）",
      logicHint: "Tom and Jerry 是複數，現在進行式要用 are 還是 is?",
      difficultWords: ["cheese", "eating"]
    },
    {
      question: "My father ___ a newspaper.",
      options: ["is reading", "are reading", "am reading", "read"],
      correct: 0,
      explanation: "主詞 My father，現在進行式用 is + V-ing，is reading（我爸爸正在看報紙。）",
      logicHint: "My father 現在進行式要用 is 還是 are?",
      difficultWords: ["father", "newspaper", "reading"]
    },
    {
      question: "The birds ___ in the sky.",
      options: ["are flying", "is flying", "am flying", "fly"],
      correct: 0,
      explanation: "主詞 The birds（複數），現在進行式用 are + V-ing，are flying（鳥兒正在天空飛翔。）",
      logicHint: "The birds 是複數，現在進行式要用 are 還是 is?",
      difficultWords: ["birds", "sky", "flying"]
    }
  ],
  medium: [
    {
      question: "Is she ___ a letter?",
      options: ["writing", "writes", "write", "wrote"],
      correct: 0,
      explanation: "現在進行式疑問句：is + 主詞 + V-ing，writing（她正在寫信嗎？）",
      logicHint: "疑問句 is she 後面要接 V-ing。",
      difficultWords: ["writing", "letter"]
    },
    {
      question: "The children ___ their hands.",
      options: ["are washing", "is washing", "am washing", "wash"],
      correct: 0,
      explanation: "主詞 The children（複數），現在進行式用 are + V-ing，are washing（孩子們正在洗手。）",
      logicHint: "The children 是複數，現在進行式要用 are 還是 is?",
      difficultWords: ["children", "washing", "hands"]
    },
    {
      question: "What ___ you ___?",
      options: ["are, doing", "is, doing", "am, doing", "do, do"],
      correct: 0,
      explanation: "疑問句：What are you doing?（你正在做什麼？）",
      logicHint: "you 現在進行式要用 are。",
      difficultWords: ["doing"]
    },
    {
      question: "My friends ___ basketball after school.",
      options: ["are playing", "is playing", "am playing", "play"],
      correct: 0,
      explanation: "主詞 My friends（複數），現在進行式用 are + V-ing，are playing（我的朋友們正在打籃球。）",
      logicHint: "My friends 是複數，現在進行式要用 are 還是 is?",
      difficultWords: ["friends", "basketball", "playing"]
    },
    {
      question: "He ___ not ___ his lunch.",
      options: ["is, eating", "are, eating", "am, eating", "eat"],
      correct: 0,
      explanation: "否定句：He is not eating his lunch.（他現在沒有在吃午餐。）",
      logicHint: "He 現在進行式否定句要用 is not + V-ing。",
      difficultWords: ["lunch", "eating"]
    },
    {
      question: "We ___ for the bus.",
      options: ["are waiting", "is waiting", "am waiting", "wait"],
      correct: 0,
      explanation: "主詞 We，現在進行式用 are + V-ing，are waiting（我們正在等公車。）",
      logicHint: "We 現在進行式要用 are。",
      difficultWords: ["waiting", "bus"]
    },
    {
      question: "Why ___ the dog ___?",
      options: ["is, barking", "are, barking", "am, barking", "bark"],
      correct: 0,
      explanation: "疑問句：Why is the dog barking?（為什麼狗正在叫？）",
      logicHint: "the dog 現在進行式要用 is。",
      difficultWords: ["dog", "barking"]
    },
    {
      question: "My parents ___ dinner together.",
      options: ["are having", "is having", "am having", "have"],
      correct: 0,
      explanation: "主詞 My parents（複數），現在進行式用 are + V-ing，are having（我父母正在一起吃晚餐。）",
      logicHint: "My parents 是複數，現在進行式要用 are。",
      difficultWords: ["parents", "dinner", "having"]
    },
    {
      question: "The baby ___.",
      options: ["is crying", "are crying", "am crying", "cry"],
      correct: 0,
      explanation: "主詞 The baby，現在進行式用 is + V-ing，is crying（嬰兒正在哭。）",
      logicHint: "The baby 現在進行式要用 is。",
      difficultWords: ["baby", "crying"]
    },
    {
      question: "Are you ___ your teeth?",
      options: ["brushing", "brush", "brushed", "brushes"],
      correct: 0,
      explanation: "疑問句：Are you brushing your teeth?（你正在刷牙嗎？）",
      logicHint: "Are you 後面要接 V-ing。",
      difficultWords: ["brushing", "teeth"]
    }
  ],
  hard: [
    {
      question: "The students ___ a science experiment now.",
      options: ["are conducting", "is conducting", "am conducting", "conduct"],
      correct: 0,
      explanation: "主詞 The students（複數），現在進行式用 are + V-ing，are conducting（學生們正在做科學實驗。）",
      logicHint: "The students 是複數，現在進行式要用 are。",
      difficultWords: ["students", "science", "experiment", "conducting"]
    },
    {
      question: "Who ___ in the library?",
      options: ["is studying", "are studying", "am studying", "study"],
      correct: 0,
      explanation: "疑問句：Who is studying in the library?（誰正在圖書館讀書？）",
      logicHint: "Who 現在進行式常用 is。",
      difficultWords: ["library", "studying"]
    },
    {
      question: "My sister ___ a song on the stage.",
      options: ["is singing", "are singing", "am singing", "sing"],
      correct: 0,
      explanation: "主詞 My sister，現在進行式用 is + V-ing，is singing（我妹妹正在舞台上唱歌。）",
      logicHint: "My sister 現在進行式要用 is。",
      difficultWords: ["sister", "song", "stage", "singing"]
    },
    {
      question: "The workers ___ a new building.",
      options: ["are constructing", "is constructing", "am constructing", "construct"],
      correct: 0,
      explanation: "主詞 The workers（複數），現在進行式用 are + V-ing，are constructing（工人們正在建造新大樓。）",
      logicHint: "The workers 是複數，現在進行式要用 are。",
      difficultWords: ["workers", "constructing", "building"]
    },
    {
      question: "Is your brother ___ a bike to school?",
      options: ["riding", "rides", "ride", "rode"],
      correct: 0,
      explanation: "疑問句：Is your brother riding a bike to school?（你哥哥正在騎腳踏車上學嗎？）",
      logicHint: "Is your brother 後面要接 V-ing。",
      difficultWords: ["brother", "riding", "bike", "school"]
    },
    {
      question: "The sun ___ behind the clouds.",
      options: ["is shining", "are shining", "am shining", "shine"],
      correct: 0,
      explanation: "主詞 The sun，現在進行式用 is + V-ing，is shining（太陽正在雲後面閃耀。）",
      logicHint: "The sun 現在進行式要用 is。",
      difficultWords: ["sun", "shining", "clouds"]
    },
    {
      question: "Why ___ the children ___ so loudly?",
      options: ["are, laughing", "is, laughing", "am, laughing", "laugh"],
      correct: 0,
      explanation: "疑問句：Why are the children laughing so loudly?（為什麼孩子們正在大聲笑？）",
      logicHint: "the children 是複數，現在進行式要用 are。",
      difficultWords: ["children", "laughing", "loudly"]
    },
    {
      question: "My grandparents ___ in the garden.",
      options: ["are planting", "is planting", "am planting", "plant"],
      correct: 0,
      explanation: "主詞 My grandparents（複數），現在進行式用 are + V-ing，are planting（我祖父母正在花園裡種植。）",
      logicHint: "My grandparents 是複數，現在進行式要用 are。",
      difficultWords: ["grandparents", "planting", "garden"]
    },
    {
      question: "The computer ___ a program update.",
      options: ["is running", "are running", "am running", "run"],
      correct: 0,
      explanation: "主詞 The computer，現在進行式用 is + V-ing，is running（電腦正在執行程式更新。）",
      logicHint: "The computer 現在進行式要用 is。",
      difficultWords: ["computer", "running", "program", "update"]
    },
    {
      question: "Are the students ___ attention?",
      options: ["paying", "pays", "pay", "paid"],
      correct: 0,
      explanation: "疑問句：Are the students paying attention?（學生們正在專心嗎？）",
      logicHint: "Are the students 後面要接 V-ing。",
      difficultWords: ["students", "paying", "attention"]
    }
  ]
};

// 困難單字詞典
const DIFFICULT_WORDS = {
    "homework": "作業",
    "now": "現在",
    "moment": "此刻",
    "watching": "正在看",
    "TV": "電視",
    "park": "公園",
    "playing": "玩耍",
    "mother": "媽媽",
    "dinner": "晚餐",
    "cooking": "煮飯",
    "learning": "學習",
    "English": "英文",
    "cat": "貓",
    "sofa": "沙發",
    "sleeping": "睡覺",
    "listening": "聽",
    "music": "音樂",
    "cheese": "起司",
    "eating": "吃",
    "father": "爸爸",
    "newspaper": "報紙",
    "reading": "閱讀",
    "birds": "鳥兒",
    "sky": "天空",
    "flying": "飛翔",
    "writing": "寫作",
    "letter": "信",
    "children": "孩子們",
    "washing": "洗",
    "hands": "手",
    "doing": "做",
    "friends": "朋友們",
    "basketball": "籃球",
    "lunch": "午餐",
    "waiting": "等待",
    "bus": "公車",
    "dog": "狗",
    "barking": "吠叫",
    "parents": "父母",
    "having": "吃/有",
    "baby": "嬰兒",
    "crying": "哭泣",
    "brushing": "刷",
    "teeth": "牙齒",
    "students": "學生們",
    "science": "科學",
    "experiment": "實驗",
    "conducting": "進行",
    "library": "圖書館",
    "studying": "學習",
    "sister": "妹妹",
    "song": "歌曲",
    "stage": "舞台",
    "singing": "唱歌",
    "workers": "工人們",
    "constructing": "建造",
    "building": "建築物",
    "brother": "哥哥",
    "riding": "騎乘",
    "bike": "腳踏車",
    "school": "學校",
    "sun": "太陽",
    "shining": "閃耀",
    "clouds": "雲",
    "laughing": "大笑",
    "loudly": "大聲地",
    "grandparents": "祖父母",
    "planting": "種植",
    "garden": "花園",
    "computer": "電腦",
    "running": "執行",
    "program": "程式",
    "update": "更新",
    "paying": "專心",
    "attention": "注意力"
};

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索現在進行式的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的現在進行式句型",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的現在進行式挑戰",
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
