// 文法塔統一題庫系統 - 第十二關：一般動詞現在式問句
// 每個小關卡10題，難度逐關遞增，主詞多樣化

// 文法小提示配置
const GRAMMAR_TIPS = {
  easy: "一般動詞現在式問句：Do/Does + 主詞 + 原形動詞？",
  medium: "一般動詞現在式問句：Do/Does + 主詞 + 原形動詞？",
  hard: "一般動詞現在式問句：Do/Does + 主詞 + 原形動詞？"
};

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "Do you ___ English?",
      options: ["speak", "speaks", "speaking", "spoke"],
      correct: 0,
      explanation: "Do you 問句，用原形動詞 speak。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["speak", "English"],
    },
    {
      question: "Does he ___ basketball?",
      options: ["play", "plays", "playing", "played"],
      correct: 0,
      explanation: "Does he 問句，用原形動詞 play。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["play", "basketball"],
    },
    {
      question: "Do they ___ to school?",
      options: ["go", "goes", "going", "went"],
      correct: 0,
      explanation: "Do they 問句，用原形動詞 go。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["go", "school"],
    },
    {
      question: "Does she ___ TV?",
      options: ["watch", "watches", "watching", "watched"],
      correct: 0,
      explanation: "Does she 問句，用原形動詞 watch。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["watch", "TV"],
    },
    {
      question: "Do we ___ homework?",
      options: ["do", "does", "doing", "did"],
      correct: 0,
      explanation: "Do we 問句，用原形動詞 do。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["do", "homework"],
    },
    {
      question: "Does your brother ___ books?",
      options: ["read", "reads", "reading", "read"],
      correct: 0,
      explanation: "Does your brother 問句，用原形動詞 read。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["brother", "read", "books"],
    },
    {
      question: "Do the children ___ early?",
      options: ["sleep", "sleeps", "sleeping", "slept"],
      correct: 0,
      explanation: "Do the children 問句，用原形動詞 sleep。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["children", "sleep", "early"],
    },
    {
      question: "Do you ___ on weekends?",
      options: ["work", "works", "working", "worked"],
      correct: 0,
      explanation: "Do you 問句，用原形動詞 work。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["work", "weekends"],
    },
    {
      question: "Does your sister ___ dinner?",
      options: ["cook", "cooks", "cooking", "cooked"],
      correct: 0,
      explanation: "Does your sister 問句，用原形動詞 cook。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["sister", "cook", "dinner"],
    },
    {
      question: "Do the students ___ emails?",
      options: ["write", "writes", "writing", "wrote"],
      correct: 0,
      explanation: "Do the students 問句，用原形動詞 write。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["students", "write", "emails"],
    },
  ],
  medium: [
    {
      question: "Do you ___ to school by bus?",
      options: ["go", "goes", "going", "went"],
      correct: 0,
      explanation: "Do you 問句，用原形動詞 go。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["go", "school", "bus"],
    },
    {
      question: "Does she ___ French?",
      options: ["speak", "speaks", "speaking", "spoke"],
      correct: 0,
      explanation: "Does she 問句，用原形動詞 speak。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["speak", "French"],
    },
    {
      question: "Do they ___ their grandparents?",
      options: ["visit", "visits", "visiting", "visited"],
      correct: 0,
      explanation: "Do they 問句，用原形動詞 visit。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["visit", "grandparents"],
    },
    {
      question: "Does he ___ to work?",
      options: ["drive", "drives", "driving", "drove"],
      correct: 0,
      explanation: "Does he 問句，用原形動詞 drive。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["drive", "work"],
    },
    {
      question: "Do we ___ to music?",
      options: ["listen", "listens", "listening", "listened"],
      correct: 0,
      explanation: "Do we 問句，用原形動詞 listen。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["listen", "music"],
    },
    {
      question: "Does your father ___?",
      options: ["smoke", "smokes", "smoking", "smoked"],
      correct: 0,
      explanation: "Does your father 問句，用原形動詞 smoke。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["father", "smoke"],
    },
    {
      question: "Do the teachers ___ uniforms?",
      options: ["wear", "wears", "wearing", "wore"],
      correct: 0,
      explanation: "Do the teachers 問句，用原形動詞 wear。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["teachers", "wear", "uniforms"],
    },
    {
      question: "Do you ___ this?",
      options: ["understand", "understands", "understanding", "understood"],
      correct: 0,
      explanation: "Do you 問句，用原形動詞 understand。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["understand"],
    },
    {
      question: "Does your mother ___ on Sundays?",
      options: ["work", "works", "working", "worked"],
      correct: 0,
      explanation: "Does your mother 問句，用原形動詞 work。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["mother", "work", "Sundays"],
    },
    {
      question: "Do the dogs ___ at night?",
      options: ["bark", "barks", "barking", "barked"],
      correct: 0,
      explanation: "Do the dogs 問句，用原形動詞 bark。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["dogs", "bark", "night"],
    },
  ],
  hard: [
    {
      question: "Do you ___ in ghosts?",
      options: ["believe", "believes", "believing", "believed"],
      correct: 0,
      explanation: "Do you 問句，用原形動詞 believe。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["believe", "ghosts"],
    },
    {
      question: "Does she ___ his name?",
      options: ["remember", "remembers", "remembering", "remembered"],
      correct: 0,
      explanation: "Does she 問句，用原形動詞 remember。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["remember", "name"],
    },
    {
      question: "Do they ___ with you?",
      options: ["agree", "agrees", "agreeing", "agreed"],
      correct: 0,
      explanation: "Do they 問句，用原形動詞 agree。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["agree"],
    },
    {
      question: "Does he ___ the answer?",
      options: ["know", "knows", "knowing", "knew"],
      correct: 0,
      explanation: "Does he 問句，用原形動詞 know。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["know", "answer"],
    },
    {
      question: "Do we ___ help?",
      options: ["need", "needs", "needing", "needed"],
      correct: 0,
      explanation: "Do we 問句，用原形動詞 need。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["need", "help"],
    },
    {
      question: "Does your brother ___ to go?",
      options: ["want", "wants", "wanting", "wanted"],
      correct: 0,
      explanation: "Does your brother 問句，用原形動詞 want。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["brother", "want", "go"],
    },
    {
      question: "Do the children ___ their homework?",
      options: ["finish", "finishes", "finishing", "finished"],
      correct: 0,
      explanation: "Do the children 問句，用原形動詞 finish。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["children", "finish", "homework"],
    },
    {
      question: "Do you ___ happy?",
      options: ["seem", "seems", "seeming", "seemed"],
      correct: 0,
      explanation: "Do you 問句，用原形動詞 seem。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["seem", "happy"],
    },
    {
      question: "Does your sister ___ about fashion?",
      options: ["care", "cares", "caring", "cared"],
      correct: 0,
      explanation: "Does your sister 問句，用原形動詞 care。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["sister", "care", "fashion"],
    },
    {
      question: "Do the students ___ the lesson?",
      options: ["understand", "understands", "understanding", "understood"],
      correct: 0,
      explanation: "Do the students 問句，用原形動詞 understand。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["students", "understand", "lesson"],
    },
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  // 基礎詞彙
  "speak": "說",
  "English": "英文",
  "play": "玩、打（球）",
  "basketball": "籃球",
  "go": "去",
  "school": "學校",
  "watch": "看",
  "TV": "電視",
  "do": "做",
  "homework": "作業",
  "brother": "兄弟",
  "read": "閱讀",
  "books": "書本",
  "children": "孩子們",
  "sleep": "睡覺",
  "early": "早的",
  "work": "工作",
  "weekends": "週末",
  "sister": "姊妹",
  "cook": "煮、烹飪",
  "dinner": "晚餐",
  "students": "學生們",
  "write": "寫",
  "emails": "電子郵件",
  "bus": "公車",
  "French": "法文",
  "visit": "拜訪",
  "grandparents": "祖父母",
  "drive": "開車",
  "listen": "聽",
  "music": "音樂",
  "father": "父親",
  "smoke": "抽煙",
  "teachers": "老師們",
  "wear": "穿",
  "uniforms": "制服",
  "understand": "理解",
  "mother": "母親",
  "Sundays": "星期天們",
  "dogs": "狗",
  "bark": "吠叫",
  "night": "晚上",
  "believe": "相信",
  "ghosts": "鬼魂",
  "remember": "記得",
  "name": "名字",
  "agree": "同意",
  "know": "知道",
  "answer": "答案",
  "need": "需要",
  "help": "幫助",
  "want": "想要",
  "finish": "完成",
  "care": "關心",
  "fashion": "時尚",
  "lesson": "課程",
  "seem": "似乎",
  "happy": "開心的",
  
  // 原有詞彙保留
  "yesterday": "昨天",
  "at home": "在家",
  "last night": "昨晚",
  "park": "公園",
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
  "weather": "天氣",
  "cold": "寒冷的",
  "last month": "上個月",
  "party": "派對",
  "last Saturday": "上週六",
  "noisy": "吵鬧的",
  "yesterday afternoon": "昨天下午",
  "Japan": "日本",
  "movie": "電影",
  "interesting": "有趣的",
  "same": "相同的",
  "class": "班級",
  "two years ago": "兩年前",
  "basketball player": "籃球員",
  "young": "年輕的",
  "late": "遲到的",
  "excited": "興奮的",
  "trip": "旅行",
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
  "table": "桌子",
  "answers": "答案們",
  "correct": "正確的",
  "exam": "考試",
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
    title: `第十二關：一般動詞現在式問句 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習一般動詞現在式問句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`,
    grammarTip: GRAMMAR_TIPS[difficulty] || "一般動詞現在式問句：Do/Does + 主詞 + 原形動詞？"
  };
}

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "動詞高手",
        description: "探索一般動詞現在式問句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "動詞高手", 
        description: "挑戰更複雜的問句型",
        difficulty: "medium"
    },
    sub3: {
        name: "動詞高手",
        description: "征服最困難的問句挑戰",
        difficulty: "hard"
    }
};

// 困難單字詞典
const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 