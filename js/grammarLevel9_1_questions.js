// 文法塔統一題庫系統 - 第九關：現在式與現在進行式混合題
// 每個小關卡10題，難度逐關遞增，主詞多樣化

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "She ___ (not like) pizza.",
      options: ["don't like", "doesn't like", "not like", "not likes"],
      correct: 1,
      explanation: "She 是第三人稱單數，否定句用 doesn't like。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["like", "pizza"],
    },
    {
      question: "I ___ (not play) basketball.",
      options: ["don't play", "doesn't play", "not play", "not plays"],
      correct: 0,
      explanation: "I 是第一人稱，否定句用 don't play。",
      logicHint: "I/you/we/they 否定用 don't + 原形動詞。",
      difficultWords: ["play", "basketball"],
    },
    {
      question: "He ___ (not watch) TV every day.",
      options: ["don't watch", "doesn't watch", "not watch", "not watches"],
      correct: 1,
      explanation: "He 是第三人稱單數，否定句用 doesn't watch。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["watch", "TV", "every day"],
    },
    {
      question: "They ___ (not study) English.",
      options: ["don't study", "doesn't study", "not study", "not studies"],
      correct: 0,
      explanation: "They 是複數主詞，否定句用 don't study。",
      logicHint: "複數主詞否定用 don't + 原形動詞。",
      difficultWords: ["study", "English"],
    },
    {
      question: "My parents ___ (not work) on weekends.",
      options: ["don't work", "doesn't work", "not work", "not works"],
      correct: 0,
      explanation: "My parents 是複數主詞，否定句用 don't work。",
      logicHint: "複數主詞否定用 don't + 原形動詞。",
      difficultWords: ["parents", "work", "weekends"],
    },
    {
      question: "She ___ (not eat) breakfast.",
      options: ["don't eat", "doesn't eat", "not eat", "not eats"],
      correct: 1,
      explanation: "She 是第三人稱單數，否定句用 doesn't eat。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["eat", "breakfast"],
    },
    {
      question: "We ___ (not go) to school on Sundays.",
      options: ["don't go", "doesn't go", "not go", "not goes"],
      correct: 0,
      explanation: "We 是複數主詞，否定句用 don't go。",
      logicHint: "複數主詞否定用 don't + 原形動詞。",
      difficultWords: ["go", "school", "Sundays"],
    },
    {
      question: "Tom ___ (not run) in the morning.",
      options: ["don't run", "doesn't run", "not run", "not runs"],
      correct: 1,
      explanation: "Tom 是第三人稱單數，否定句用 doesn't run。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["run", "morning"],
    },
    {
      question: "My sister ___ (not like) coffee.",
      options: ["don't like", "doesn't like", "not like", "not likes"],
      correct: 1,
      explanation: "My sister 是第三人稱單數，否定句用 doesn't like。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["sister", "like", "coffee"],
    },
    {
      question: "I ___ (not write) letters.",
      options: ["don't write", "doesn't write", "not write", "not writes"],
      correct: 0,
      explanation: "I 是第一人稱，否定句用 don't write。",
      logicHint: "I/you/we/they 否定用 don't + 原形動詞。",
      difficultWords: ["write", "letters"],
    },
  ],
  medium: [
    {
      question: "The children ___ (not play) outside.",
      options: ["don't play", "doesn't play", "not play", "not plays"],
      correct: 0,
      explanation: "The children 是複數主詞，否定句用 don't play。",
      logicHint: "複數主詞否定用 don't + 原形動詞。",
      difficultWords: ["children", "play", "outside"],
    },
    {
      question: "He ___ (not watch) TV.",
      options: ["don't watch", "doesn't watch", "not watch", "not watches"],
      correct: 1,
      explanation: "He 是第三人稱單數，否定句用 doesn't watch。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["watch", "TV"],
    },
    {
      question: "I ___ (not do) my homework.",
      options: ["don't do", "doesn't do", "not do", "not does"],
      correct: 0,
      explanation: "I 是第一人稱，否定句用 don't do。",
      logicHint: "I/you/we/they 否定用 don't + 原形動詞。",
      difficultWords: ["do", "homework"],
    },
    {
      question: "My father ___ (not drive) to work.",
      options: ["don't drive", "doesn't drive", "not drive", "not drives"],
      correct: 1,
      explanation: "My father 是第三人稱單數，否定句用 doesn't drive。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["father", "drive", "work"],
    },
    {
      question: "We ___ (not eat) lunch.",
      options: ["don't eat", "doesn't eat", "not eat", "not eats"],
      correct: 0,
      explanation: "We 是複數主詞，否定句用 don't eat。",
      logicHint: "複數主詞否定用 don't + 原形動詞。",
      difficultWords: ["eat", "lunch"],
    },
    {
      question: "She ___ (not study) English.",
      options: ["don't study", "doesn't study", "not study", "not studies"],
      correct: 1,
      explanation: "She 是第三人稱單數，否定句用 doesn't study。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["study", "English"],
    },
    {
      question: "They ___ (not play) basketball.",
      options: ["don't play", "doesn't play", "not play", "not plays"],
      correct: 0,
      explanation: "They 是複數主詞，否定句用 don't play。",
      logicHint: "複數主詞否定用 don't + 原形動詞。",
      difficultWords: ["play", "basketball"],
    },
    {
      question: "Your brother ___ (not read) books.",
      options: ["don't read", "doesn't read", "not read", "not reads"],
      correct: 1,
      explanation: "Your brother 是第三人稱單數，否定句用 doesn't read。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["brother", "read", "books"],
    },
    {
      question: "I ___ (not go) to the gym.",
      options: ["don't go", "doesn't go", "not go", "not goes"],
      correct: 0,
      explanation: "I 是第一人稱，否定句用 don't go。",
      logicHint: "I/you/we/they 否定用 don't + 原形動詞。",
      difficultWords: ["go", "gym"],
    },
    {
      question: "He ___ (not listen) to music.",
      options: ["don't listen", "doesn't listen", "not listen", "not listens"],
      correct: 1,
      explanation: "He 是第三人稱單數，否定句用 doesn't listen。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["listen", "music"],
    },
  ],
  hard: [
    {
      question: "The students ___ (not prepare) for tests.",
      options: ["don't prepare", "doesn't prepare", "not prepare", "not prepares"],
      correct: 0,
      explanation: "The students 是複數主詞，否定句用 don't prepare。",
      logicHint: "複數主詞否定用 don't + 原形動詞。",
      difficultWords: ["students", "prepare", "tests"],
    },
    {
      question: "She ___ (not visit) her cousin.",
      options: ["don't visit", "doesn't visit", "not visit", "not visits"],
      correct: 1,
      explanation: "She 是第三人稱單數，否定句用 doesn't visit。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["visit", "cousin"],
    },
    {
      question: "He ___ (not write) emails.",
      options: ["don't write", "doesn't write", "not write", "not writes"],
      correct: 1,
      explanation: "He 是第三人稱單數，否定句用 doesn't write。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["write", "emails"],
    },
    {
      question: "The workers ___ (not start) work early.",
      options: ["don't start", "doesn't start", "not start", "not starts"],
      correct: 0,
      explanation: "The workers 是複數主詞，否定句用 don't start。",
      logicHint: "複數主詞否定用 don't + 原形動詞。",
      difficultWords: ["workers", "start", "work", "early"],
    },
    {
      question: "She ___ (not listen) to music.",
      options: ["don't listen", "doesn't listen", "not listen", "not listens"],
      correct: 1,
      explanation: "She 是第三人稱單數，否定句用 doesn't listen。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["listen", "music"],
    },
    {
      question: "I ___ (not read) books.",
      options: ["don't read", "doesn't read", "not read", "not reads"],
      correct: 0,
      explanation: "I 是第一人稱，否定句用 don't read。",
      logicHint: "I/you/we/they 否定用 don't + 原形動詞。",
      difficultWords: ["read", "books"],
    },
    {
      question: "My aunt ___ (not cook) dinner.",
      options: ["don't cook", "doesn't cook", "not cook", "not cooks"],
      correct: 1,
      explanation: "My aunt 是第三人稱單數，否定句用 doesn't cook。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["aunt", "cook", "dinner"],
    },
    {
      question: "It ___ (not rain) today.",
      options: ["don't rain", "doesn't rain", "not rain", "not rains"],
      correct: 1,
      explanation: "It 是第三人稱單數，否定句用 doesn't rain。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["rain", "today"],
    },
    {
      question: "They ___ (not visit) their grandparents.",
      options: ["don't visit", "doesn't visit", "not visit", "not visits"],
      correct: 0,
      explanation: "They 是複數主詞，否定句用 don't visit。",
      logicHint: "複數主詞否定用 don't + 原形動詞。",
      difficultWords: ["visit", "grandparents"],
    },
    {
      question: "Your teacher ___ (not teach) English.",
      options: ["don't teach", "doesn't teach", "not teach", "not teaches"],
      correct: 1,
      explanation: "Your teacher 是第三人稱單數，否定句用 doesn't teach。",
      logicHint: "第三人稱單數否定用 doesn't + 原形動詞。",
      difficultWords: ["teacher", "teach", "English"],
    },
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  "like": "喜歡",
  "pizza": "披薩",
  "play": "玩、打（球）",
  "basketball": "籃球",
  "watch": "看",
  "TV": "電視",
  "study": "學習",
  "English": "英文",
  "parents": "父母",
  "work": "工作",
  "weekends": "週末",
  "eat": "吃",
  "breakfast": "早餐",
  "go": "去",
  "school": "學校",
  "Sundays": "星期天們",
  "run": "跑步",
  "morning": "早上",
  "sister": "姊妹",
  "coffee": "咖啡",
  "write": "寫",
  "letters": "信件",
  "children": "孩子們",
  "outside": "外面",
  "do": "做",
  "homework": "作業",
  "father": "爸爸",
  "drive": "開車",
  "lunch": "午餐",
  "listen": "聽",
  "music": "音樂",
  "brother": "兄弟",
  "read": "閱讀",
  "books": "書本",
  "gym": "健身房",
  "students": "學生們",
  "prepare": "準備",
  "tests": "考試",
  "visit": "拜訪",
  "cousin": "表親",
  "write": "寫",
  "emails": "電子郵件",
  "workers": "工人們",
  "start": "開始",
  "early": "早的",
  "aunt": "阿姨",
  "cook": "煮、烹飪",
  "dinner": "晚餐",
  "rain": "下雨",
  "today": "今天",
  "grandparents": "祖父母",
  "teacher": "老師",
  "teach": "教"
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
  return {
    title: `第九關：一般動詞現在式否定句 - ${subLevel === 'easy' ? '基礎' : subLevel === 'medium' ? '進階' : '精通'}關卡`,
    description: `學習一般動詞現在式否定句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`
  };
}

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "否定句基礎",
        description: "學習一般動詞現在式否定句的基本用法",
        difficulty: "easy"
    },
    sub2: {
        name: "否定句進階", 
        description: "挑戰更複雜的否定句結構",
        difficulty: "medium"
    },
    sub3: {
        name: "否定句精通",
        description: "掌握各種否定句的變化",
        difficulty: "hard"
    }
};

// 困難單字詞典
const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 