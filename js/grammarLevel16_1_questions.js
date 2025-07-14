// 文法塔統一題庫系統 - 第十六關：一般動詞現在式否定句
// 每個小關卡10題，難度逐關遞增，主詞多樣化

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "I ___ (like) pizza.",
      options: ["don't like", "doesn't like", "not like", "not likes"],
      correct: 0,
      explanation: "主詞 I，現在式否定句用 don't + 原形動詞。",
      logicHint: "I 用 don't，後面接原形動詞。",
      difficultWords: ["like", "pizza"],
    },
    {
      question: "She ___ (play) basketball.",
      options: ["don't play", "doesn't play", "not play", "not plays"],
      correct: 1,
      explanation: "主詞 she，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "he/she/it 用 doesn't，後面接原形動詞。",
      difficultWords: ["play", "basketball"],
    },
    {
      question: "They ___ (watch) TV.",
      options: ["don't watch", "doesn't watch", "not watch", "not watches"],
      correct: 0,
      explanation: "主詞 they，現在式否定句用 don't + 原形動詞。",
      logicHint: "they/we/you 用 don't，後面接原形動詞。",
      difficultWords: ["watch", "TV"],
    },
    {
      question: "He ___ (eat) vegetables.",
      options: ["don't eat", "doesn't eat", "not eat", "not eats"],
      correct: 1,
      explanation: "主詞 he，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "he/she/it 用 doesn't，後面接原形動詞。",
      difficultWords: ["eat", "vegetables"],
    },
    {
      question: "We ___ (study) English.",
      options: ["don't study", "doesn't study", "not study", "not studies"],
      correct: 0,
      explanation: "主詞 we，現在式否定句用 don't + 原形動詞。",
      logicHint: "we/you/they 用 don't，後面接原形動詞。",
      difficultWords: ["study", "English"],
    },
    {
      question: "My brother ___ (like) coffee.",
      options: ["don't like", "doesn't like", "not like", "not likes"],
      correct: 1,
      explanation: "主詞 my brother (第三人稱單數)，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "第三人稱單數用 doesn't，後面接原形動詞。",
      difficultWords: ["brother", "like", "coffee"],
    },
    {
      question: "You ___ (work) on weekends.",
      options: ["don't work", "doesn't work", "not work", "not works"],
      correct: 0,
      explanation: "主詞 you，現在式否定句用 don't + 原形動詞。",
      logicHint: "you/we/they 用 don't，後面接原形動詞。",
      difficultWords: ["work", "weekends"],
    },
    {
      question: "The cat ___ (sleep) at night.",
      options: ["don't sleep", "doesn't sleep", "not sleep", "not sleeps"],
      correct: 1,
      explanation: "主詞 the cat (第三人稱單數)，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "第三人稱單數用 doesn't，後面接原形動詞。",
      difficultWords: ["cat", "sleep", "night"],
    },
    {
      question: "I ___ (drink) milk.",
      options: ["don't drink", "doesn't drink", "not drink", "not drinks"],
      correct: 0,
      explanation: "主詞 I，現在式否定句用 don't + 原形動詞。",
      logicHint: "I 用 don't，後面接原形動詞。",
      difficultWords: ["drink", "milk"],
    },
    {
      question: "She ___ (read) books.",
      options: ["don't read", "doesn't read", "not read", "not reads"],
      correct: 1,
      explanation: "主詞 she，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "he/she/it 用 doesn't，後面接原形動詞。",
      difficultWords: ["read", "books"],
    },
  ],
  medium: [
    {
      question: "The children ___ (play) outside.",
      options: ["don't play", "doesn't play", "not play", "not plays"],
      correct: 0,
      explanation: "主詞 the children (複數)，現在式否定句用 don't + 原形動詞。",
      logicHint: "複數主詞用 don't，後面接原形動詞。",
      difficultWords: ["children", "play", "outside"],
    },
    {
      question: "Your sister ___ (like) ice cream.",
      options: ["don't like", "doesn't like", "not like", "not likes"],
      correct: 1,
      explanation: "主詞 your sister (第三人稱單數)，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "第三人稱單數用 doesn't，後面接原形動詞。",
      difficultWords: ["sister", "like", "ice cream"],
    },
    {
      question: "He ___ (watch) TV.",
      options: ["don't watch", "doesn't watch", "not watch", "not watches"],
      correct: 1,
      explanation: "主詞 he，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "he/she/it 用 doesn't，後面接原形動詞。",
      difficultWords: ["watch", "TV"],
    },
    {
      question: "You ___ (do) your homework.",
      options: ["don't do", "doesn't do", "not do", "not does"],
      correct: 0,
      explanation: "主詞 you，現在式否定句用 don't + 原形動詞。",
      logicHint: "you/we/they 用 don't，後面接原形動詞。",
      difficultWords: ["do", "homework"],
    },
    {
      question: "My father ___ (drive) to work.",
      options: ["don't drive", "doesn't drive", "not drive", "not drives"],
      correct: 1,
      explanation: "主詞 my father (第三人稱單數)，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "第三人稱單數用 doesn't，後面接原形動詞。",
      difficultWords: ["father", "drive", "work"],
    },
    {
      question: "We ___ (eat) lunch at the restaurant.",
      options: ["don't eat", "doesn't eat", "not eat", "not eats"],
      correct: 0,
      explanation: "主詞 we，現在式否定句用 don't + 原形動詞。",
      logicHint: "we/you/they 用 don't，後面接原形動詞。",
      difficultWords: ["eat", "lunch", "restaurant"],
    },
    {
      question: "Anna ___ (study) English.",
      options: ["don't study", "doesn't study", "not study", "not studies"],
      correct: 1,
      explanation: "主詞 Anna (第三人稱單數)，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "第三人稱單數用 doesn't，後面接原形動詞。",
      difficultWords: ["Anna", "study", "English"],
    },
    {
      question: "They ___ (play) basketball.",
      options: ["don't play", "doesn't play", "not play", "not plays"],
      correct: 0,
      explanation: "主詞 they，現在式否定句用 don't + 原形動詞。",
      logicHint: "they/we/you 用 don't，後面接原形動詞。",
      difficultWords: ["play", "basketball"],
    },
    {
      question: "Your brother ___ (read) books.",
      options: ["don't read", "doesn't read", "not read", "not reads"],
      correct: 1,
      explanation: "主詞 your brother (第三人稱單數)，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "第三人稱單數用 doesn't，後面接原形動詞。",
      difficultWords: ["brother", "read", "books"],
    },
    {
      question: "I ___ (go) to the gym.",
      options: ["don't go", "doesn't go", "not go", "not goes"],
      correct: 0,
      explanation: "主詞 I，現在式否定句用 don't + 原形動詞。",
      logicHint: "I 用 don't，後面接原形動詞。",
      difficultWords: ["go", "gym"],
    },
  ],
  hard: [
    {
      question: "The students ___ (prepare) for the test.",
      options: ["don't prepare", "doesn't prepare", "not prepare", "not prepares"],
      correct: 0,
      explanation: "主詞 the students (複數)，現在式否定句用 don't + 原形動詞。",
      logicHint: "複數主詞用 don't，後面接原形動詞。",
      difficultWords: ["students", "prepare", "test"],
    },
    {
      question: "Your cousin ___ (visit) you.",
      options: ["don't visit", "doesn't visit", "not visit", "not visits"],
      correct: 1,
      explanation: "主詞 your cousin (第三人稱單數)，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "第三人稱單數用 doesn't，後面接原形動詞。",
      difficultWords: ["cousin", "visit"],
    },
    {
      question: "He ___ (write) emails.",
      options: ["don't write", "doesn't write", "not write", "not writes"],
      correct: 1,
      explanation: "主詞 he，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "he/she/it 用 doesn't，後面接原形動詞。",
      difficultWords: ["write", "emails"],
    },
    {
      question: "The workers ___ (start) work early.",
      options: ["don't start", "doesn't start", "not start", "not starts"],
      correct: 0,
      explanation: "主詞 the workers (複數)，現在式否定句用 don't + 原形動詞。",
      logicHint: "複數主詞用 don't，後面接原形動詞。",
      difficultWords: ["workers", "start", "work", "early"],
    },
    {
      question: "She ___ (listen) to music.",
      options: ["don't listen", "doesn't listen", "not listen", "not listens"],
      correct: 1,
      explanation: "主詞 she，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "he/she/it 用 doesn't，後面接原形動詞。",
      difficultWords: ["listen", "music"],
    },
    {
      question: "You ___ (read) books.",
      options: ["don't read", "doesn't read", "not read", "not reads"],
      correct: 0,
      explanation: "主詞 you，現在式否定句用 don't + 原形動詞。",
      logicHint: "you/we/they 用 don't，後面接原形動詞。",
      difficultWords: ["read", "books"],
    },
    {
      question: "My aunt ___ (cook) dinner.",
      options: ["don't cook", "doesn't cook", "not cook", "not cooks"],
      correct: 1,
      explanation: "主詞 my aunt (第三人稱單數)，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "第三人稱單數用 doesn't，後面接原形動詞。",
      difficultWords: ["aunt", "cook", "dinner"],
    },
    {
      question: "It ___ (rain) outside.",
      options: ["don't rain", "doesn't rain", "not rain", "not rains"],
      correct: 1,
      explanation: "主詞 it，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "he/she/it 用 doesn't，後面接原形動詞。",
      difficultWords: ["rain", "outside"],
    },
    {
      question: "They ___ (visit) their grandparents.",
      options: ["don't visit", "doesn't visit", "not visit", "not visits"],
      correct: 0,
      explanation: "主詞 they，現在式否定句用 don't + 原形動詞。",
      logicHint: "they/we/you 用 don't，後面接原形動詞。",
      difficultWords: ["visit", "grandparents"],
    },
    {
      question: "Your teacher ___ (teach) English.",
      options: ["don't teach", "doesn't teach", "not teach", "not teaches"],
      correct: 1,
      explanation: "主詞 your teacher (第三人稱單數)，現在式否定句用 doesn't + 原形動詞。",
      logicHint: "第三人稱單數用 doesn't，後面接原形動詞。",
      difficultWords: ["teacher", "teach", "English"],
    },
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  "read": "閱讀",
  "book": "書",
  "now": "現在",
  "like": "喜歡",
  "pizza": "披薩",
  "play": "玩、打（球）",
  "basketball": "籃球",
  "every": "每個",
  "Sunday": "星期日",
  "watch": "看",
  "TV": "電視",
  "right now": "現在、此刻",
  "parents": "父母",
  "work": "工作",
  "hospital": "醫院",
  "eat": "吃",
  "breakfast": "早餐",
  "study": "學習",
  "English": "英文",
  "every day": "每天",
  "run": "跑步",
  "park": "公園",
  "go": "去",
  "school": "學校",
  "Sundays": "星期天們",
  "write": "寫",
  "letter": "信",
  "at the moment": "此刻、現在",
  "children": "孩子們",
  "outside": "外面",
  "sister": "姊妹",
  "like": "喜歡",
  "ice cream": "冰淇淋",
  "homework": "作業",
  "father": "爸爸",
  "drive": "開車",
  "every morning": "每天早上",
  "lunch": "午餐",
  "Anna": "安娜",
  "brother": "兄弟",
  "gym": "健身房",
  "weekends": "週末",
  "students": "學生們",
  "prepare": "準備",
  "test": "考試",
  "cousin": "表親",
  "visit": "拜訪",
  "summer": "夏天",
  "email": "電子郵件",
  "workers": "工人們",
  "start": "開始",
  "a.m.": "上午",
  "listen": "聽",
  "music": "音樂",
  "aunt": "阿姨",
  "cook": "煮、烹飪",
  "dinner": "晚餐",
  "every night": "每天晚上",
  "rain": "下雨",
  "outside": "外面",
  "grandparents": "祖父母",
  "every month": "每個月",
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
    title: `第十六關：一般動詞現在式否定句 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習一般動詞現在式否定句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`
  };
}

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索一般動詞現在式否定句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的現在式否定句句型",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的現在式否定句挑戰",
        difficulty: "hard"
    }
};

// 困難單字詞典
const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 