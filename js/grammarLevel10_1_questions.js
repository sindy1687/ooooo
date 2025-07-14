// 文法塔統一題庫系統 - 第十關：WH問句（who, where, when, what, which, how）
// 每個小關卡10題，難度逐關遞增，主詞多樣化

// 文法小提示配置
const GRAMMAR_TIPS = {
  easy: "WH問句：Who（誰）、Where（哪裡）、When（什麼時候）、What（什麼）、How（怎麼樣）",
  medium: "WH問句：Who（誰）、Where（哪裡）、When（什麼時候）、What（什麼）、Which（哪一個）、How（怎麼）",
  hard: "WH問句：Who（誰）、Where（哪裡）、When（什麼時候）、What（什麼）、Which（哪一個）、How（怎麼）、Why（為什麼）"
};

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "___ is your favorite color?",
      options: ["What", "Where", "Who", "How"],
      correct: 0,
      explanation: "詢問事物（顏色）用 what。",
      logicHint: "問『什麼』用什麼呢? ",
      difficultWords: ["favorite", "color"],
    },
    {
      question: "___ do you go to school?",
      options: ["When", "Where", "How", "What"],
      correct: 1,
      explanation: "詢問地點用 where。",
      logicHint: "問『哪裡』用什麼呢? ",
      difficultWords: ["go", "school"],
    },
    {
      question: "___ is playing the piano?",
      options: ["Who", "What", "Which", "How"],
      correct: 0,
      explanation: "詢問人用 who。",
      logicHint: "問『誰』用什麼呢? ",
      difficultWords: ["playing", "piano"],
    },
    {
      question: "___ is your birthday?",
      options: ["When", "Where", "Who", "How"],
      correct: 0,
      explanation: "詢問時間用 when。",
      logicHint: "問『什麼時候』用什麼呢? ",
      difficultWords: ["birthday"],
    },
    {
      question: "___ is your bag?",
      options: ["Where", "What", "Who", "How"],
      correct: 0,
      explanation: "詢問地點用 where。",
      logicHint: "問『哪裡』用什麼呢? ",
      difficultWords: ["bag"],
    },
    {
      question: "___ are you today?",
      options: ["How", "Who", "What", "Where"],
      correct: 0,
      explanation: "詢問狀態、感覺用 how。",
      logicHint: "問『怎麼樣』用什麼呢? ",
      difficultWords: ["today"],
    },
    {
      question: "___ is your teacher?",
      options: ["Who", "What", "Where", "How"],
      correct: 0,
      explanation: "詢問人用 who。",
      logicHint: "問『誰』用什麼呢? ",
      difficultWords: ["teacher"],
    },
    {
      question: "___ do you get up in the morning?",
      options: ["When", "Where", "How", "Who"],
      correct: 0,
      explanation: "詢問時間用 when。",
      logicHint: "問『什麼時候』用什麼呢? ",
      difficultWords: ["get up", "morning"],
    },
    {
      question: "___ is your favorite animal?",
      options: ["What", "Who", "Where", "How"],
      correct: 0,
      explanation: "詢問事物（動物）用 what。",
      logicHint: "問『什麼』用什麼呢? ",
      difficultWords: ["favorite", "animal"],
    },
    {
      question: "___ is your school bag?",
      options: ["Where", "What", "Who", "How"],
      correct: 0,
      explanation: "詢問地點用 where。",
      logicHint: "問『哪裡』用什麼呢? ",
      difficultWords: ["school bag"],
    },
  ],
  medium: [
    {
      question: "___ do you go to school by bus?",
      options: ["Why", "How", "When", "Where"],
      correct: 1,
      explanation: "詢問方式用 how。",
      logicHint: "問『怎麼』用什麼呢? ",
      difficultWords: ["go", "school", "bus"],
    },
    {
      question: "___ is your best friend?",
      options: ["Who", "What", "Where", "How"],
      correct: 0,
      explanation: "詢問人用 who。",
      logicHint: "問『誰』用什麼呢? ",
      difficultWords: ["best", "friend"],
    },
    {
      question: "___ do you do after school?",
      options: ["What", "Where", "When", "How"],
      correct: 0,
      explanation: "詢問事情、活動用 what。",
      logicHint: "問『做什麼』用什麼呢? ",
      difficultWords: ["after", "school"],
    },
    {
      question: "___ is your birthday party?",
      options: ["When", "Where", "Who", "How"],
      correct: 0,
      explanation: "詢問時間用 when。",
      logicHint: "問『什麼時候』用什麼呢? ",
      difficultWords: ["birthday", "party"],
    },
    {
      question: "___ book do you like, the red one or the blue one?",
      options: ["Which", "What", "Who", "How"],
      correct: 0,
      explanation: "詢問特定選項用 which。",
      logicHint: "問『哪一個』用什麼呢? ",
      difficultWords: ["book", "red", "blue"],
    },
    {
      question: "___ does your father go to work?",
      options: ["How", "Where", "When", "Who"],
      correct: 0,
      explanation: "詢問方式用 how。",
      logicHint: "問『怎麼』用什麼呢? ",
      difficultWords: ["father", "work"],
    },
    {
      question: "___ is your classroom?",
      options: ["Where", "What", "Who", "How"],
      correct: 0,
      explanation: "詢問地點用 where。",
      logicHint: "問『哪裡』用什麼呢? ",
      difficultWords: ["classroom"],
    },
    {
      question: "___ is your favorite subject?",
      options: ["What", "Who", "Where", "How"],
      correct: 0,
      explanation: "詢問事物（科目）用 what。",
      logicHint: "問『什麼』用什麼呢? ",
      difficultWords: ["favorite", "subject"],
    },
    {
      question: "___ is your mother cooking?",
      options: ["What", "Who", "Where", "How"],
      correct: 0,
      explanation: "詢問事物（食物）用 what。",
      logicHint: "問『什麼』用什麼呢? ",
      difficultWords: ["mother", "cooking"],
    },
    {
      question: "___ is your brother going?",
      options: ["Where", "What", "Who", "How"],
      correct: 0,
      explanation: "詢問地點用 where。",
      logicHint: "問『哪裡』用什麼呢? ",
      difficultWords: ["brother", "going"],
    },
  ],
  hard: [
    {
      question: "___ is sitting next to you?",
      options: ["Who", "What", "Where", "How"],
      correct: 0,
      explanation: "詢問人用 who。",
      logicHint: "問『誰』用什麼呢? ",
      difficultWords: ["sitting", "next to"],
    },
    {
      question: "___ do you usually have lunch?",
      options: ["Where", "When", "How", "Who"],
      correct: 0,
      explanation: "詢問地點用 where。",
      logicHint: "問『哪裡』用什麼呢? ",
      difficultWords: ["usually", "lunch"],
    },
    {
      question: "___ does this word mean?",
      options: ["What", "Who", "Where", "How"],
      correct: 0,
      explanation: "詢問意義用 what。",
      logicHint: "問『什麼』用什麼呢? ",
      difficultWords: ["word", "mean"],
    },
    {
      question: "___ do you go to the library?",
      options: ["When", "Where", "How", "Who"],
      correct: 0,
      explanation: "詢問時間用 when。",
      logicHint: "問『什麼時候』用什麼呢? ",
      difficultWords: ["go", "library"],
    },
    {
      question: "___ is your favorite movie?",
      options: ["What", "Who", "Where", "How"],
      correct: 0,
      explanation: "詢問事物（電影）用 what。",
      logicHint: "問『什麼』用什麼呢? ",
      difficultWords: ["favorite", "movie"],
    },
    {
      question: "___ is your father going to travel?",
      options: ["When", "Where", "How", "Who"],
      correct: 0,
      explanation: "詢問時間用 when。",
      logicHint: "問『什麼時候』用什麼呢? ",
      difficultWords: ["father", "travel"],
    },
    {
      question: "___ pen is this, yours or mine?",
      options: ["Which", "What", "Who", "How"],
      correct: 0,
      explanation: "詢問特定選項用 which。",
      logicHint: "問『哪一個』用什麼呢? ",
      difficultWords: ["pen", "yours", "mine"],
    },
    {
      question: "___ do you spell your name?",
      options: ["How", "What", "Who", "Where"],
      correct: 0,
      explanation: "詢問方式用 how。",
      logicHint: "問『怎麼』用什麼呢? ",
      difficultWords: ["spell", "name"],
    },
    {
      question: "___ is your mother talking to?",
      options: ["Who", "What", "Where", "How"],
      correct: 0,
      explanation: "詢問人用 who。",
      logicHint: "問『誰』用什麼呢? ",
      difficultWords: ["mother", "talking to"],
    },
    {
      question: "___ is your favorite subject, English or math?",
      options: ["Which", "What", "Who", "How"],
      correct: 0,
      explanation: "詢問特定選項用 which。",
      logicHint: "問『哪一個』用什麼呢? ",
      difficultWords: ["favorite", "subject", "English", "math"],
    },
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  "favorite": "最喜歡的",
  "color": "顏色",
  "go": "去",
  "school": "學校",
  "playing": "彈奏、玩",
  "piano": "鋼琴",
  "birthday": "生日",
  "bag": "包包",
  "today": "今天",
  "teacher": "老師",
  "get up": "起床",
  "morning": "早上",
  "animal": "動物",
  "school bag": "書包",
  "bus": "公車",
  "best": "最好的",
  "friend": "朋友",
  "after": "在...之後",
  "party": "派對",
  "book": "書",
  "red": "紅色",
  "blue": "藍色",
  "father": "爸爸",
  "work": "工作",
  "classroom": "教室",
  "subject": "科目",
  "cooking": "煮飯",
  "mother": "媽媽",
  "brother": "兄弟",
  "going": "去（進行式）",
  "sitting": "坐著",
  "next to": "在...旁邊",
  "usually": "通常",
  "lunch": "午餐",
  "word": "單字",
  "mean": "意思",
  "library": "圖書館",
  "movie": "電影",
  "travel": "旅行",
  "pen": "筆",
  "yours": "你的",
  "mine": "我的",
  "spell": "拼寫",
  "name": "名字",
  "talking to": "跟...說話",
  "English": "英文",
  "math": "數學"
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
    title: `第十關：WH問句 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習WH問句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`,
    grammarTip: GRAMMAR_TIPS[difficulty] || "WH問句：Who（誰）、Where（哪裡）、When（什麼時候）、What（什麼）、How（怎麼樣）"
  };
}

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索WH問句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的問句型",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的問句挑戰",
        difficulty: "hard"
    }
};

// 困難單字詞典
const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 