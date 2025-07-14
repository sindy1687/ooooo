// 文法塔統一題庫系統 - 第二十一關：未來式混合題
// 每個小關卡10題，難度逐關遞增，主詞多樣化

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "She ___ (probably go) to school tomorrow.",
      options: ["will probably go", "probably will go", "is probably going", "probably go"],
      correct: 0,
      explanation: "未來式用 will probably go。",
      logicHint: "未來式用 will + 副詞 + 原形動詞。",
      difficultWords: ["probably", "go", "school", "tomorrow"],
    },
    {
      question: "Do you ___ (like) pizza?",
      options: ["likes", "are liking", "like", "is liking"],
      correct: 2,
      explanation: "Do you 問句，like 為原形動詞，簡單現在式。",
      logicHint: "Do/Does 問句用原形動詞。",
      difficultWords: ["like", "pizza"],
    },
    {
      question: "He ___ (play) basketball every Sunday.",
      options: ["is playing", "play", "plays", "playing"],
      correct: 2,
      explanation: "every Sunday 表示習慣，簡單現在式，主詞 He 用 plays。",
      logicHint: "every + 時間，簡單現在式。",
      difficultWords: ["play", "basketball", "every", "Sunday"],
    },
    {
      question: "Are they ___ (watch) TV right now?",
      options: ["watch", "watches", "watching", "watched"],
      correct: 2,
      explanation: "Are they 問句，right now 表現在進行式，watching。",
      logicHint: "be + V-ing，現在進行式。",
      difficultWords: ["watch", "TV", "right now"],
    },
    {
      question: "My parents ___ (work) at a hospital.",
      options: ["are working", "works", "work", "working"],
      correct: 2,
      explanation: "at a hospital 表職業，習慣，簡單現在式，主詞複數用 work。",
      logicHint: "描述職業、習慣用簡單現在式。",
      difficultWords: ["parents", "work", "hospital"],
    },
    {
      question: "She ___ (not eat) breakfast now.",
      options: ["doesn't eat", "isn't eating", "don't eat", "aren't eating"],
      correct: 1,
      explanation: "now 表現在進行式，否定句 is not eating。",
      logicHint: "now 要用 be + not + V-ing。",
      difficultWords: ["eat", "breakfast", "now"],
    },
    {
      question: "We ___ (study) English every day.",
      options: ["are studying", "studies", "study", "studying"],
      correct: 2,
      explanation: "every day 表習慣，簡單現在式，主詞 We 用 study。",
      logicHint: "every + 時間，簡單現在式。",
      difficultWords: ["study", "English", "every day"],
    },
    {
      question: "Is Tom ___ (run) in the park?",
      options: ["run", "running", "runs", "ran"],
      correct: 1,
      explanation: "Is Tom 問句，現在進行式，running。",
      logicHint: "be + V-ing，現在進行式。",
      difficultWords: ["run", "park"],
    },
    {
      question: "They ___ (not go) to school on Sundays.",
      options: ["aren't going", "don't go", "doesn't go", "not going"],
      correct: 1,
      explanation: "on Sundays 表習慣，否定句 don't go。",
      logicHint: "on + 星期，簡單現在式。",
      difficultWords: ["go", "school", "Sundays"],
    },
    {
      question: "I ___ (write) a letter at the moment.",
      options: ["write", "am writing", "writes", "writing"],
      correct: 1,
      explanation: "at the moment 表現在進行式，I am writing。",
      logicHint: "at the moment 要用 be + V-ing。",
      difficultWords: ["write", "letter", "at the moment"],
    },
  ],
  medium: [
    {
      question: "The children ___ (play) outside right now.",
      options: ["play", "are playing", "plays", "playing"],
      correct: 1,
      explanation: "right now 表現在進行式，are playing。",
      logicHint: "right now 要用 be + V-ing。",
      difficultWords: ["children", "play", "outside", "right now"],
    },
    {
      question: "Does your sister ___ (like) ice cream?",
      options: ["likes", "like", "is liking", "liking"],
      correct: 1,
      explanation: "Does 問句用原形動詞 like。",
      logicHint: "Does 問句用原形動詞。",
      difficultWords: ["sister", "like", "ice cream"],
    },
    {
      question: "He ___ (not watch) TV every day.",
      options: ["isn't watching", "doesn't watch", "don't watch", "aren't watching"],
      correct: 1,
      explanation: "every day 表習慣，否定句 doesn't watch。",
      logicHint: "every day 用簡單現在式否定。",
      difficultWords: ["watch", "TV", "every day"],
    },
    {
      question: "Are you ___ (do) your homework now?",
      options: ["do", "doing", "does", "did"],
      correct: 1,
      explanation: "Are you 問句，now 表現在進行式，doing。",
      logicHint: "be + V-ing，現在進行式。",
      difficultWords: ["do", "homework", "now"],
    },
    {
      question: "My father ___ (drive) to work every morning.",
      options: ["is driving", "drives", "drive", "driving"],
      correct: 1,
      explanation: "every morning 表習慣，簡單現在式，drives。",
      logicHint: "every + 時間，簡單現在式。",
      difficultWords: ["father", "drive", "work", "every morning"],
    },
    {
      question: "We ___ (not eat) lunch at the moment.",
      options: ["don't eat", "aren't eating", "doesn't eat", "isn't eating"],
      correct: 1,
      explanation: "at the moment 表現在進行式，否定句 aren't eating。",
      logicHint: "at the moment 要用 be + not + V-ing。",
      difficultWords: ["eat", "lunch", "at the moment"],
    },
    {
      question: "Does Anna ___ (study) English?",
      options: ["studies", "is studying", "study", "studying"],
      correct: 2,
      explanation: "Does 問句用原形動詞 study。",
      logicHint: "Does 問句用原形動詞。",
      difficultWords: ["Anna", "study", "English"],
    },
    {
      question: "They ___ (not play) basketball now.",
      options: ["don't play", "aren't playing", "doesn't play", "isn't playing"],
      correct: 1,
      explanation: "now 表現在進行式，否定句 aren't playing。",
      logicHint: "now 要用 be + not + V-ing。",
      difficultWords: ["play", "basketball", "now"],
    },
    {
      question: "Is your brother ___ (read) a book?",
      options: ["read", "reading", "reads", "is reading"],
      correct: 1,
      explanation: "Is your brother 問句，現在進行式，reading。",
      logicHint: "be + V-ing，現在進行式。",
      difficultWords: ["brother", "read", "book"],
    },
    {
      question: "I ___ (not go) to the gym on weekends.",
      options: ["am not going", "don't go", "doesn't go", "not going"],
      correct: 1,
      explanation: "on weekends 表習慣，否定句 don't go。",
      logicHint: "on + 時間，簡單現在式否定。",
      difficultWords: ["go", "gym", "weekends"],
    },
  ],
  hard: [
    {
      question: "Are the students ___ (prepare) for the test right now?",
      options: ["prepare", "preparing", "prepares", "prepared"],
      correct: 1,
      explanation: "right now 表現在進行式，are preparing。",
      logicHint: "right now 要用 be + V-ing。",
      difficultWords: ["students", "prepare", "test", "right now"],
    },
    {
      question: "Does your cousin ___ (visit) you every summer?",
      options: ["visits", "visit", "is visiting", "visiting"],
      correct: 1,
      explanation: "every summer 表習慣，Does 問句用原形 visit。",
      logicHint: "Does 問句用原形動詞。",
      difficultWords: ["cousin", "visit", "summer"],
    },
    {
      question: "He ___ (not write) an email at the moment.",
      options: ["isn't writing", "doesn't write", "don't write", "aren't writing"],
      correct: 0,
      explanation: "at the moment 表現在進行式，否定句 isn't writing。",
      logicHint: "at the moment 要用 be + not + V-ing。",
      difficultWords: ["write", "email", "at the moment"],
    },
    {
      question: "Do the workers ___ (start) work at 8 a.m.?",
      options: ["starts", "start", "are starting", "starting"],
      correct: 1,
      explanation: "Do 問句用原形 start。",
      logicHint: "Do 問句用原形動詞。",
      difficultWords: ["workers", "start", "work", "a.m."],
    },
    {
      question: "She ___ (not listen) to music now.",
      options: ["isn't listening", "doesn't listen", "don't listen", "aren't listening"],
      correct: 0,
      explanation: "now 表現在進行式，否定句 isn't listening。",
      logicHint: "now 要用 be + not + V-ing。",
      difficultWords: ["listen", "music", "now"],
    },
    {
      question: "Are you ___ (read) this book at the moment?",
      options: ["read", "reading", "reads", "is reading"],
      correct: 1,
      explanation: "Are you 問句，at the moment 表現在進行式，reading。",
      logicHint: "at the moment 要用 be + V-ing。",
      difficultWords: ["read", "book", "at the moment"],
    },
    {
      question: "My aunt ___ (not cook) dinner every night.",
      options: ["isn't cooking", "doesn't cook", "don't cook", "aren't cooking"],
      correct: 1,
      explanation: "every night 表習慣，否定句 doesn't cook。",
      logicHint: "every night 用簡單現在式否定。",
      difficultWords: ["aunt", "cook", "dinner", "every night"],
    },
    {
      question: "Is it ___ (rain) outside now?",
      options: ["rain", "rains", "raining", "is raining"],
      correct: 2,
      explanation: "Is it 問句，now 表現在進行式，raining。",
      logicHint: "now 要用 be + V-ing。",
      difficultWords: ["rain", "outside", "now"],
    },
    {
      question: "They ___ (not visit) their grandparents every month.",
      options: ["aren't visiting", "don't visit", "doesn't visit", "not visiting"],
      correct: 1,
      explanation: "every month 表習慣，否定句 don't visit。",
      logicHint: "every month 用簡單現在式否定。",
      difficultWords: ["visit", "grandparents", "every month"],
    },
    {
      question: "Is your teacher ___ (teach) English right now?",
      options: ["teach", "teaching", "teaches", "is teaching"],
      correct: 1,
      explanation: "Is your teacher 問句，right now 表現在進行式，teaching。",
      logicHint: "right now 要用 be + V-ing。",
      difficultWords: ["teacher", "teach", "English", "right now"],
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
    title: `第二十一關：未來式混合題 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習未來式混合題的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`
  };
}

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索未來式混合題的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的未來式混合題",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的未來式混合題挑戰",
        difficulty: "hard"
    }
};

// 困難單字詞典
const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 