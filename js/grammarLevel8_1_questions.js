// 文法塔統一題庫系統 - 第八關：一般動詞現在式否定句
// 每個小關卡10題，難度逐關遞增，主詞多樣化，包含各種否定句

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "I _____ like apples.",
      options: ["don't", "doesn't", "am not", "is not"],
      correct: 0,
      explanation: "I 是第一人稱單數，否定句要用 don't。",
      logicHint: "I 否定句要用 don't。",
      difficultWords: ["like", "apples"],
    },
    {
      question: "He _____ play basketball.",
      options: ["don't", "doesn't", "am not", "is not"],
      correct: 1,
      explanation: "He 是第三人稱單數，否定句要用 doesn't。",
      logicHint: "He 否定句要用 doesn't。",
      difficultWords: ["play", "basketball"],
    },
    {
      question: "They _____ go to school.",
      options: ["don't", "doesn't", "am not", "is not"],
      correct: 0,
      explanation: "They 是複數主詞，否定句要用 don't。",
      logicHint: "They 否定句要用 don't。",
      difficultWords: ["go", "school"],
    },
    {
      question: "Does your mother cook dinner? (請回答肯定)",
      options: ["Yes, she do.", "No, she doesn't.", "Yes, she does.", "No, she do."],
      correct: 2,
      explanation: "your mother = she，肯定短答用 Yes, she does。",
      logicHint: "your mother 問句肯定短答要用 does。",
      difficultWords: ["mother", "cook", "dinner"],
    },
    {
      question: "Do the cats sleep here? (請回答否定)",
      options: ["Yes, it does.", "No, they don't.", "Yes, they do.", "No, it doesn't."],
      correct: 1,
      explanation: "the cats = they，否定短答用 No, they don't。",
      logicHint: "the cats 問句否定短答要用 don't。",
      difficultWords: ["cats", "sleep", "here"],
    },
    {
      question: "Does she like music? (請回答否定)",
      options: ["No, she doesn't.", "No, she do.", "Yes, she do.", "Yes, she does."],
      correct: 0,
      explanation: "she 問句否定短答用 No, she doesn't。",
      logicHint: "she 問句否定短答要用 doesn't。",
      difficultWords: ["like", "music"],
    },
    {
      question: "Do we have class today? (請回答肯定)",
      options: ["Yes, we do.", "No, we does.", "Yes, you do.", "No, we don't."],
      correct: 0,
      explanation: "we 問句肯定短答用 Yes, we do。",
      logicHint: "we 問句肯定短答要用 do。",
      difficultWords: ["have", "class", "today"],
    },
    {
      question: "Does it rain a lot here? (請回答否定)",
      options: ["Yes, it do.", "No, it doesn't.", "Yes, it does.", "No, it do."],
      correct: 1,
      explanation: "it 問句否定短答用 No, it doesn't。",
      logicHint: "it 問句否定短答要用 doesn't。",
      difficultWords: ["rain", "here"],
    },
    {
      question: "Do you play the piano? (請回答肯定)",
      options: ["No, I don't.", "No, I does.", "Yes, you do.", "Yes, I do."],
      correct: 3,
      explanation: "you 問句肯定短答用 Yes, I do。",
      logicHint: "你被問到時，肯定短答要用 I do。",
      difficultWords: ["play", "piano"],
    },
    {
      question: "Does Tom like dogs? (請回答否定)",
      options: ["Yes, he do.", "No, he doesn't.", "Yes, he does.", "No, he don't."],
      correct: 1,
      explanation: "Tom = he，否定短答用 No, he doesn't。",
      logicHint: "Tom 問句否定短答要用 doesn't。",
      difficultWords: ["like", "dogs"],
    },
  ],
  medium: [
    {
      question: "Do your parents work on weekends? (請回答否定)",
      options: ["Yes, they do.", "No, they does.", "Yes, we do.", "No, they don't."],
      correct: 3,
      explanation: "your parents = they，否定短答用 No, they don't。",
      logicHint: "your parents 問句否定短答要用 don't。",
      difficultWords: ["parents", "work", "weekends"],
    },
    {
      question: "Does your teacher speak French? (請回答肯定)",
      options: ["Yes, he does.", "No, he doesn't.", "Yes, she does.", "No, she doesn't."],
      correct: 2,
      explanation: "your teacher = she，肯定短答用 Yes, she does。",
      logicHint: "your teacher 問句肯定短答要用 does。",
      difficultWords: ["teacher", "speak", "French"],
    },
    {
      question: "Do the children eat vegetables? (請回答否定)",
      options: ["No, they don't.", "No, they does.", "Yes, we do.", "Yes, they do."],
      correct: 0,
      explanation: "the children = they，否定短答用 No, they don't。",
      logicHint: "the children 問句否定短答要用 don't。",
      difficultWords: ["children", "eat", "vegetables"],
    },
    {
      question: "Does your uncle drive a car? (請回答肯定)",
      options: ["Yes, he does.", "No, he do.", "Yes, he do.", "No, he doesn't."],
      correct: 0,
      explanation: "your uncle = he，肯定短答用 Yes, he does。",
      logicHint: "your uncle 問句肯定短答要用 does。",
      difficultWords: ["uncle", "drive", "car"],
    },
    {
      question: "Do we need more time? (請回答否定)",
      options: ["Yes, we do.", "No, we does.", "Yes, you do.", "No, we don't."],
      correct: 3,
      explanation: "we 問句否定短答用 No, we don't。",
      logicHint: "we 問句否定短答要用 don't。",
      difficultWords: ["need", "more", "time"],
    },
    {
      question: "Does Anna have a pet? (請回答肯定)",
      options: ["Yes, she does.", "No, she do.", "Yes, she do.", "No, she doesn't."],
      correct: 0,
      explanation: "Anna = she，肯定短答用 Yes, she does。",
      logicHint: "Anna 問句肯定短答要用 does。",
      difficultWords: ["have", "pet"],
    },
    {
      question: "Do the buses stop here? (請回答否定)",
      options: ["Yes, they do.", "No, they does.", "Yes, we do.", "No, they don't."],
      correct: 3,
      explanation: "the buses = they，否定短答用 No, they don't。",
      logicHint: "the buses 問句否定短答要用 don't。",
      difficultWords: ["buses", "stop", "here"],
    },
    {
      question: "Does your brother play tennis? (請回答否定)",
      options: ["Yes, he does.", "No, he do.", "Yes, she does.", "No, he doesn't."],
      correct: 3,
      explanation: "your brother = he，否定短答用 No, he doesn't。",
      logicHint: "your brother 問句否定短答要用 doesn't。",
      difficultWords: ["brother", "play", "tennis"],
    },
    {
      question: "Do you and your friend like movies? (請回答肯定)",
      options: ["Yes, we do.", "No, we does.", "Yes, you do.", "No, we don't."],
      correct: 0,
      explanation: "you and your friend = we，肯定短答用 Yes, we do。",
      logicHint: "you and your friend 問句肯定短答要用 do。",
      difficultWords: ["friend", "like", "movies"],
    },
    {
      question: "Does it snow in winter? (請回答肯定)",
      options: ["Yes, it do.", "No, it doesn't.", "Yes, it does.", "No, it do."],
      correct: 2,
      explanation: "it 問句肯定短答用 Yes, it does。",
      logicHint: "it 問句肯定短答要用 does。",
      difficultWords: ["snow", "winter"],
    },
  ],
  hard: [
    {
      question: "Do the engineers solve problems quickly? (請回答否定)",
      options: ["Yes, they do.", "No, they does.", "Yes, we do.", "No, they don't."],
      correct: 3,
      explanation: "the engineers = they，否定短答用 No, they don't。",
      logicHint: "the engineers 問句否定短答要用 don't。",
      difficultWords: ["engineers", "solve", "problems", "quickly"],
    },
    {
      question: "Does your grandmother bake cookies? (請回答肯定)",
      options: ["Yes, she does.", "No, she do.", "Yes, she do.", "No, she doesn't."],
      correct: 0,
      explanation: "your grandmother = she，肯定短答用 Yes, she does。",
      logicHint: "your grandmother 問句肯定短答要用 does。",
      difficultWords: ["grandmother", "bake", "cookies"],
    },
    {
      question: "Do the students finish their homework? (請回答否定)",
      options: ["No, they don't.", "No, they does.", "Yes, we do.", "Yes, they do."],
      correct: 0,
      explanation: "the students = they，否定短答用 No, they don't。",
      logicHint: "the students 問句否定短答要用 don't。",
      difficultWords: ["students", "finish", "homework"],
    },
    {
      question: "Does your father watch the news? (請回答肯定)",
      options: ["Yes, he do.", "No, he doesn't.", "Yes, he does.", "No, he do."],
      correct: 2,
      explanation: "your father = he，肯定短答用 Yes, he does。",
      logicHint: "your father 問句肯定短答要用 does。",
      difficultWords: ["father", "watch", "news"],
    },
    {
      question: "Do the birds sing in the morning? (請回答肯定)",
      options: ["Yes, they do.", "No, they does.", "Yes, we do.", "No, they don't."],
      correct: 0,
      explanation: "the birds = they，肯定短答用 Yes, they do。",
      logicHint: "the birds 問句肯定短答要用 do。",
      difficultWords: ["birds", "sing", "morning"],
    },
    {
      question: "Does your sister study English? (請回答否定)",
      options: ["No, she doesn't.", "No, she do.", "Yes, she do.", "Yes, she does."],
      correct: 0,
      explanation: "your sister = she，否定短答用 No, she doesn't。",
      logicHint: "your sister 問句否定短答要用 doesn't。",
      difficultWords: ["sister", "study", "English"],
    },
    {
      question: "Do the workers arrive on time? (請回答否定)",
      options: ["Yes, they do.", "No, they does.", "Yes, we do.", "No, they don't."],
      correct: 3,
      explanation: "the workers = they，否定短答用 No, they don't。",
      logicHint: "the workers 問句否定短答要用 don't。",
      difficultWords: ["workers", "arrive", "time"],
    },
    {
      question: "Does your aunt teach math? (請回答肯定)",
      options: ["Yes, she does.", "No, she do.", "Yes, she do.", "No, she doesn't."],
      correct: 0,
      explanation: "your aunt = she，肯定短答用 Yes, she does。",
      logicHint: "your aunt 問句肯定短答要用 does。",
      difficultWords: ["aunt", "teach", "math"],
    },
    {
      question: "Do the cars stop at the red light? (請回答肯定)",
      options: ["No, they don't.", "No, they does.", "Yes, we do.", "Yes, they do."],
      correct: 3,
      explanation: "the cars = they，肯定短答用 Yes, they do。",
      logicHint: "the cars 問句肯定短答要用 do。",
      difficultWords: ["cars", "stop", "red", "light"],
    },
    {
      question: "Does your grandfather read novels? (請回答否定)",
      options: ["Yes, he do.", "No, he doesn't.", "Yes, he does.", "No, he don't."],
      correct: 1,
      explanation: "your grandfather = he，否定短答用 No, he doesn't。",
      logicHint: "your grandfather 問句否定短答要用 doesn't。",
      difficultWords: ["grandfather", "read", "novels"],
    },
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  "apples": "蘋果",
  "basketball": "籃球",
  "school": "學校",
  "mother": "媽媽",
  "dinner": "晚餐",
  "cats": "貓",
  "sleep": "睡覺",
  "music": "音樂",
  "class": "課程",
  "today": "今天",
  "rain": "下雨",
  "piano": "鋼琴",
  "dogs": "狗",
  "parents": "父母",
  "weekends": "週末",
  "work": "工作",
  "teacher": "老師",
  "French": "法文",
  "children": "孩子們",
  "vegetables": "蔬菜",
  "uncle": "叔叔",
  "drive": "開車",
  "car": "汽車",
  "need": "需要",
  "time": "時間",
  "Anna": "安娜",
  "pet": "寵物",
  "buses": "公車",
  "stop": "停下",
  "brother": "兄弟",
  "tennis": "網球",
  "movies": "電影",
  "snow": "下雪",
  "winter": "冬天",
  "engineers": "工程師們",
  "solve": "解決",
  "problems": "問題",
  "quickly": "快速地",
  "grandmother": "祖母",
  "bake": "烘焙",
  "cookies": "餅乾",
  "students": "學生們",
  "finish": "完成",
  "homework": "作業",
  "father": "爸爸",
  "news": "新聞",
  "birds": "鳥兒",
  "sing": "唱歌",
  "morning": "早上",
  "sister": "姊妹",
  "study": "學習",
  "English": "英文",
  "workers": "工人們",
  "arrive": "到達",
  "aunt": "阿姨",
  "teach": "教",
  "math": "數學",
  "cars": "車子",
  "red": "紅色",
  "light": "燈",
  "grandfather": "祖父",
  "read": "閱讀",
  "novels": "小說"
};

function getRandomQuestions(subLevel, count = 10) {
  // 根據 LEVEL_CONFIG 取得對應的難度
  const levelConfig = LEVEL_CONFIG[subLevel];
  if (!levelConfig) {
    console.error(`找不到關卡配置 ${subLevel}`);
    return [];
  }
  
  const difficulty = levelConfig.difficulty;
  const questions = UNIFIED_QUESTION_BANK[difficulty];
  if (!questions) {
    console.error(`找不到難度 ${difficulty} 的題目`);
    return [];
  }
  
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function getLevelInfo(subLevel) {
  return {
    title: `第八關：一般動詞現在式短答句 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習一般動詞現在式短答句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`
  };
}

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
}

// 第八關關卡配置
const LEVEL_CONFIG = {
  sub1: {
    name: "否定先鋒",
    description: "掌握否定句的構造技巧",
    difficulty: "easy",
    questionCount: 10
  },
  sub2: {
    name: "否定進階",
    description: "提升否定句的應用能力",
    difficulty: "medium", 
    questionCount: 10
  },
  sub3: {
    name: "否定大師",
    description: "精通否定句的各種變化",
    difficulty: "hard",
    questionCount: 10
  }
}; 