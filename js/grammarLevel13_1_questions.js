// 文法塔統一題庫系統 - 第十三關：過去式BE動詞否定句
// 每個小關卡10題，難度逐關遞增，主詞多樣化

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索be動詞過去式否定句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的過去式否定句型",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的過去式否定句挑戰",
        difficulty: "hard"
    }
};

// 文法小提示配置
const GRAMMAR_TIPS = {
  easy: "過去式be動詞否定句：主詞 + wasn't / weren't，表示過去的否定狀態",
  medium: "過去式be動詞否定句：主詞 + wasn't / weren't，表示過去的否定狀態",
  hard: "過去式be動詞否定句：主詞 + wasn't / weren't，表示過去的否定狀態"
};

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "I ___ at home yesterday.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 I，過去式否定句用 wasn't。",
      logicHint: "問『主詞 I』be動詞過去式否定用什麼? ",
      difficultWords: ["yesterday", "at home"],
    },
    {
      question: "She ___ happy last night.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 she，過去式否定句用 wasn't。",
      logicHint: "問『主詞 she』be動詞過去式否定用什麼? ",
      difficultWords: ["happy", "last night"],
    },
    {
      question: "They ___ in the park yesterday.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 they，過去式否定句用 weren't。",
      logicHint: "問『主詞 they』be動詞過去式否定用什麼? ",
      difficultWords: ["park", "yesterday"],
    },
    {
      question: "We ___ students last year.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 we，過去式否定句用 weren't。",
      logicHint: "問『主詞 we』be動詞過去式否定用什麼? ",
      difficultWords: ["students", "last year"],
    },
    {
      question: "He ___ my classmate before.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 he，過去式否定句用 wasn't。",
      logicHint: "問『主詞 he』be動詞過去式否定用什麼? ",
      difficultWords: ["classmate", "before"],
    },
    {
      question: "You ___ at the library this morning.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 you，過去式否定句用 weren't。",
      logicHint: "問『主詞 you』be動詞過去式否定用什麼? ",
      difficultWords: ["library", "this morning"],
    },
    {
      question: "The dog ___ very cute last week.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 the dog，過去式否定句用 wasn't。",
      logicHint: "問『the dog』be動詞過去式否定用什麼? ",
      difficultWords: ["dog", "cute", "last week"],
    },
    {
      question: "My parents ___ busy yesterday.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 my parents，過去式否定句用 weren't。",
      logicHint: "問『 my parents』be動詞過去式否定用什麼? ",
      difficultWords: ["parents", "busy", "yesterday"],
    },
    {
      question: "Tom and I ___ classmates in junior high.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 Tom and I，過去式否定句用 weren't。",
      logicHint: "問『Tom and I』be動詞過去式否定用什麼? ",
      difficultWords: ["classmates", "junior high"],
    },
    {
      question: "The weather ___ cold last month.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 the weather，過去式否定句用 wasn't。",
      logicHint: "問『上個月不冷』be動詞過去式否定用什麼? ",
      difficultWords: ["weather", "cold", "last month"],
    },
  ],
  medium: [
    {
      question: "My sister ___ at the party last Saturday.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 my sister，過去式否定句用 wasn't。",
      logicHint: "問『my sister』be動詞過去式否定用什麼? ",
      difficultWords: ["sister", "party", "last Saturday"],
    },
    {
      question: "Those boys ___ noisy yesterday afternoon.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 those boys，過去式否定句用 weren't。",
      logicHint: "問『those boys.昨天』be動詞過去式否定用什麼? ",
      difficultWords: ["noisy", "yesterday afternoon"],
    },
    {
      question: "My grandparents ___ in Japan last year.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 my grandparents，過去式否定句用 weren't。",
      logicHint: "問『主詞 my.去年』be動詞過去式否定用什麼? ",
      difficultWords: ["grandparents", "Japan", "last year"],
    },
    {
      question: "The movie ___ interesting.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 the movie，過去式否定句用 wasn't。",
      logicHint: "問『電影不有趣』be動詞過去式否定用什麼? ",
      difficultWords: ["movie", "interesting"],
    },
    {
      question: "We ___ in the same class two years ago.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 we，過去式否定句用 weren't。",
      logicHint: "問『兩年前不同班』be動詞過去式否定用什麼? ",
      difficultWords: ["same", "class", "two years ago"],
    },
    {
      question: "He ___ a good basketball player when he was young.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 he，過去式否定句用 wasn't。",
      logicHint: "問『年輕時不是好球員』be動詞過去式否定用什麼? ",
      difficultWords: ["basketball player", "young"],
    },
    {
      question: "You ___ late for school this morning.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 you，過去式否定句用 weren't。",
      logicHint: "問『今天早上上學不遲到』be動詞過去式否定用什麼? ",
      difficultWords: ["late", "school", "this morning"],
    },
    {
      question: "The children ___ excited about the trip.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 the children，過去式否定句用 weren't。",
      logicHint: "問『對旅行不興奮』be動詞過去式否定用什麼? ",
      difficultWords: ["children", "excited", "trip"],
    },
    {
      question: "My father ___ a doctor before retirement.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 my father，過去式否定句用 wasn't。",
      logicHint: "問『退休前不是醫生』be動詞過去式否定用什麼? ",
      difficultWords: ["father", "doctor", "retirement"],
    },
    {
      question: "Those apples ___ sweet last season.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 those apples，過去式否定句用 weren't。",
      logicHint: "問『上季不甜』be動詞過去式否定用什麼? ",
      difficultWords: ["apples", "sweet", "last season"],
    },
  ],
  hard: [
    {
      question: "The students ___ very quiet during the test.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 the students，過去式否定句用 weren't。",
      logicHint: "問『考試時不安靜』be動詞過去式否定用什麼? ",
      difficultWords: ["students", "quiet", "test"],
    },
    {
      question: "My uncle ___ in America in 1990.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 my uncle，過去式否定句用 wasn't。",
      logicHint: "問『1990年不在美國』be動詞過去式否定用什麼? ",
      difficultWords: ["uncle", "America", "1990"],
    },
    {
      question: "The books ___ on the table this morning.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 the books，過去式否定句用 weren't。",
      logicHint: "問『今天早上不在桌上』be動詞過去式否定用什麼? ",
      difficultWords: ["books", "table", "this morning"],
    },
    {
      question: "Her answers ___ all correct in the exam.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 her answers，過去式否定句用 weren't。",
      logicHint: "問『考試不全對』be動詞過去式否定用什麼? ",
      difficultWords: ["answers", "correct", "exam"],
    },
    {
      question: "My mother ___ a nurse many years ago.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 my mother，過去式否定句用 wasn't。",
      logicHint: "問『多年前不是護士』be動詞過去式否定用什麼? ",
      difficultWords: ["mother", "nurse", "many years ago"],
    },
    {
      question: "The children ___ in the playground after school.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 the children，過去式否定句用 weren't。",
      logicHint: "問『放學後不在操場』be動詞過去式否定用什麼? ",
      difficultWords: ["children", "playground", "after school"],
    },
    {
      question: "He ___ very tired last night.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 he，過去式否定句用 wasn't。",
      logicHint: "問『昨晚不累』be動詞過去式否定用什麼? ",
      difficultWords: ["tired", "last night"],
    },
    {
      question: "We ___ in the museum last Sunday.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 we，過去式否定句用 weren't。",
      logicHint: "問『上週日不在博物館』be動詞過去式否定用什麼? ",
      difficultWords: ["museum", "last Sunday"],
    },
    {
      question: "The baby ___ asleep all night.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 0,
      explanation: "主詞 the baby，過去式否定句用 wasn't。",
      logicHint: "問『整晚都沒睡著』be動詞過去式否定用什麼? ",
      difficultWords: ["baby", "asleep", "all night"],
    },
    {
      question: "You ___ very helpful yesterday.",
      options: ["wasn't", "weren't", "isn't", "aren't"],
      correct: 1,
      explanation: "主詞 you，過去式否定句用 weren't。",
      logicHint: "問『昨天沒有幫助』be動詞過去式否定用什麼? ",
      difficultWords: ["helpful", "yesterday"],
    },
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  "yesterday": "昨天",
  "at home": "在家",
  "happy": "開心的",
  "last night": "昨晚",
  "park": "公園",
  "students": "學生們",
  "last year": "去年",
  "classmate": "同學",
  "before": "以前、之前",
  "library": "圖書館",
  "this morning": "今天早上",
  "dog": "狗",
  "cute": "可愛的",
  "last week": "上週",
  "parents": "父母",
  "busy": "忙碌的",
  "junior high": "國中",
  "classmates": "同學們",
  "weather": "天氣",
  "cold": "寒冷的",
  "last month": "上個月",
  "sister": "姊妹",
  "party": "派對",
  "last Saturday": "上週六",
  "noisy": "吵鬧的",
  "yesterday afternoon": "昨天下午",
  "grandparents": "祖父母",
  "Japan": "日本",
  "movie": "電影",
  "interesting": "有趣的",
  "same": "相同的",
  "class": "班級",
  "two years ago": "兩年前",
  "basketball player": "籃球員",
  "young": "年輕的",
  "late": "遲到的",
  "school": "學校",
  "children": "孩子們",
  "excited": "興奮的",
  "trip": "旅行",
  "father": "父親",
  "doctor": "醫生",
  "retirement": "退休",
  "apples": "蘋果們",
  "sweet": "甜的",
  "last season": "上季",
  "quiet": "安靜的",
  "test": "考試",
  "uncle": "叔叔、伯伯",
  "America": "美國",
  "1990": "1990年",
  "books": "書（複數）",
  "table": "桌子",
  "answers": "答案們",
  "correct": "正確的",
  "exam": "考試",
  "mother": "母親",
  "nurse": "護士",
  "many years ago": "許多年前",
  "playground": "操場",
  "after school": "放學後",
  "tired": "疲倦的",
  "museum": "博物館",
  "last Sunday": "上週日",
  "baby": "嬰兒",
  "asleep": "睡著的",
  "all night": "整晚",
  "helpful": "有幫助的"
};

function getRandomQuestions(subLevel, count = 10) {
  // 取得難度對應
  let difficulty = subLevel;
  if (LEVEL_CONFIG && LEVEL_CONFIG[subLevel]) {
    difficulty = LEVEL_CONFIG[subLevel].difficulty;
  }
  const questions = UNIFIED_QUESTION_BANK[difficulty];
  if (!questions) {
    console.error(`找不到難度 ${subLevel} 的題目`);
    return [];
  }
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function getLevelInfo(subLevel) {
  // 取得難度對應
  let difficulty = subLevel;
  if (LEVEL_CONFIG && LEVEL_CONFIG[subLevel]) {
    difficulty = LEVEL_CONFIG[subLevel].difficulty;
  }
  
  return {
    title: `第十三關：過去式BE動詞否定句 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習過去式be動詞否定句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`,
    grammarTip: GRAMMAR_TIPS[difficulty] || "過去式be動詞否定句：主詞 + wasn't / weren't，表示過去的否定狀態"
  };
}

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 