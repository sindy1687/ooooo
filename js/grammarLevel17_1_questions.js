// 文法塔統一題庫系統 - 第十七關：一般動詞過去式問句
// 每個小關卡10題，難度逐關遞增，主詞多樣化

// 文法小提示配置
const GRAMMAR_TIPS = {
  easy: "一般動詞過去式問句：Did + 主詞 + 動詞原形？",
  medium: "一般動詞過去式問句：Did + 主詞 + 動詞原形？",
  hard: "一般動詞過去式問句：Did + 主詞 + 動詞原形？"
};

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "___ you ___ (go) to the park yesterday?",
      options: ["Did", "Do", "Does", "Are"],
      correct: 0,
      explanation: "主詞 you，過去式問句用 Did + 動詞原形 go。",
      logicHint: "yesterday 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["go", "park", "yesterday"],
    },
    {
      question: "___ she ___ (eat) breakfast this morning?",
      options: ["Do", "Did", "Does", "Is"],
      correct: 1,
      explanation: "主詞 she，過去式問句用 Did + 動詞原形 eat。",
      logicHint: "this morning 表示今天早上（已過去的時間），用過去式問句 Did + 動詞原形。",
      difficultWords: ["eat", "breakfast", "morning"],
    },
    {
      question: "___ they ___ (play) basketball last Sunday?",
      options: ["Do", "Does", "Did", "Are"],
      correct: 2,
      explanation: "主詞 they，過去式問句用 Did + 動詞原形 play。",
      logicHint: "last Sunday 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["play", "basketball", "last", "Sunday"],
    },
    {
      question: "___ Tom ___ (watch) TV last night?",
      options: ["Do", "Does", "Is", "Did"],
      correct: 3,
      explanation: "主詞 Tom，過去式問句用 Did + 動詞原形 watch。",
      logicHint: "last night 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["watch", "TV", "last night"],
    },
    {
      question: "___ your parents ___ (work) yesterday?",
      options: ["Did", "Do", "Does", "Are"],
      correct: 0,
      explanation: "主詞 your parents，過去式問句用 Did + 動詞原形 work。",
      logicHint: "yesterday 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["parents", "work", "yesterday"],
    },
    {
      question: "___ we ___ (study) English last week?",
      options: ["Do", "Did", "Does", "Are"],
      correct: 1,
      explanation: "主詞 we，過去式問句用 Did + 動詞原形 study。",
      logicHint: "last week 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["study", "English", "last week"],
    },
    {
      question: "___ he ___ (run) in the park this morning?",
      options: ["Do", "Does", "Did", "Is"],
      correct: 2,
      explanation: "主詞 he，過去式問句用 Did + 動詞原形 run。",
      logicHint: "this morning 表示今天早上（已過去的時間），用過去式問句 Did + 動詞原形。",
      difficultWords: ["run", "park", "morning"],
    },
    {
      question: "___ the children ___ (play) outside yesterday?",
      options: ["Do", "Does", "Are", "Did"],
      correct: 3,
      explanation: "主詞 the children，過去式問句用 Did + 動詞原形 play。",
      logicHint: "yesterday 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["children", "play", "outside", "yesterday"],
    },
    {
      question: "___ your sister ___ (like) the movie last night?",
      options: ["Did", "Do", "Does", "Is"],
      correct: 0,
      explanation: "主詞 your sister，過去式問句用 Did + 動詞原形 like。",
      logicHint: "last night 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["sister", "like", "movie", "last night"],
    },
    {
      question: "___ I ___ (write) a letter last month?",
      options: ["Do", "Did", "Does", "Am"],
      correct: 1,
      explanation: "主詞 I，過去式問句用 Did + 動詞原形 write。",
      logicHint: "last month 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["write", "letter", "last month"],
    },
  ],
  medium: [
    {
      question: "___ Anna ___ (visit) her grandmother last weekend?",
      options: ["Do", "Does", "Did", "Is"],
      correct: 2,
      explanation: "主詞 Anna，過去式問句用 Did + 動詞原形 visit。",
      logicHint: "last weekend 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["Anna", "visit", "grandmother", "weekend"],
    },
    {
      question: "___ your brother ___ (read) that book last week?",
      options: ["Do", "Does", "Is", "Did"],
      correct: 3,
      explanation: "主詞 your brother，過去式問句用 Did + 動詞原形 read。",
      logicHint: "last week 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["brother", "read", "book", "last week"],
    },
    {
      question: "___ they ___ (cook) dinner yesterday evening?",
      options: ["Did", "Do", "Does", "Are"],
      correct: 0,
      explanation: "主詞 they，過去式問句用 Did + 動詞原形 cook。",
      logicHint: "yesterday evening 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["cook", "dinner", "yesterday", "evening"],
    },
    {
      question: "___ the students ___ (prepare) for the test last month?",
      options: ["Do", "Did", "Does", "Are"],
      correct: 1,
      explanation: "主詞 the students，過去式問句用 Did + 動詞原形 prepare。",
      logicHint: "last month 表示過去的月份，用過去式問句 Did + 動詞原形。",
      difficultWords: ["students", "prepare", "test", "last month"],
    },
    {
      question: "___ your father ___ (drive) to work this morning?",
      options: ["Do", "Does", "Did", "Is"],
      correct: 2,
      explanation: "主詞 your father，過去式問句用 Did + 動詞原形 drive。",
      logicHint: "this morning 表示今天早上（已過去的時間），用過去式問句 Did + 動詞原形。",
      difficultWords: ["father", "drive", "work", "morning"],
    },
    {
      question: "___ she ___ (listen) to music last night?",
      options: ["Do", "Does", "Is", "Did"],
      correct: 3,
      explanation: "主詞 she，過去式問句用 Did + 動詞原形 listen。",
      logicHint: "last night 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["listen", "music", "last night"],
    },
    {
      question: "___ the workers ___ (start) work early yesterday?",
      options: ["Did", "Do", "Does", "Are"],
      correct: 0,
      explanation: "主詞 the workers，過去式問句用 Did + 動詞原形 start。",
      logicHint: "yesterday 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["workers", "start", "work", "early", "yesterday"],
    },
    {
      question: "___ your cousin ___ (call) you last week?",
      options: ["Do", "Did", "Does", "Is"],
      correct: 1,
      explanation: "主詞 your cousin，過去式問句用 Did + 動詞原形 call。",
      logicHint: "last week 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["cousin", "call", "last week"],
    },
    {
      question: "___ we ___ (meet) our friends last weekend?",
      options: ["Do", "Does", "Did", "Are"],
      correct: 2,
      explanation: "主詞 we，過去式問句用 Did + 動詞原形 meet。",
      logicHint: "last weekend 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["meet", "friends", "last weekend"],
    },
    {
      question: "___ the teacher ___ (explain) the lesson yesterday?",
      options: ["Do", "Does", "Is", "Did"],
      correct: 3,
      explanation: "主詞 the teacher，過去式問句用 Did + 動詞原形 explain。",
      logicHint: "yesterday 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["teacher", "explain", "lesson", "yesterday"],
    },
  ],
  hard: [
    {
      question: "___ your aunt ___ (bake) a cake for the party last week?",
      options: ["Do", "Does", "Did", "Is"],
      correct: 2,
      explanation: "主詞 your aunt，過去式問句用 Did + 動詞原形 bake。",
      logicHint: "last week 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["aunt", "bake", "cake", "party", "last week"],
    },
    {
      question: "___ the children ___ (clean) their room yesterday afternoon?",
      options: ["Do", "Does", "Are", "Did"],
      correct: 3,
      explanation: "主詞 the children，過去式問句用 Did + 動詞原形 clean。",
      logicHint: "yesterday afternoon 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["children", "clean", "room", "yesterday", "afternoon"],
    },
    {
      question: "___ he ___ (send) an email to his boss last Friday?",
      options: ["Did", "Do", "Does", "Is"],
      correct: 0,
      explanation: "主詞 he，過去式問句用 Did + 動詞原形 send。",
      logicHint: "last Friday 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["send", "email", "boss", "last Friday"],
    },
    {
      question: "___ your grandparents ___ (visit) you last month?",
      options: ["Do", "Did", "Does", "Are"],
      correct: 1,
      explanation: "主詞 your grandparents，過去式問句用 Did + 動詞原形 visit。",
      logicHint: "last month 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["grandparents", "visit", "last month"],
    },
    {
      question: "___ she ___ (buy) a new dress for the wedding last weekend?",
      options: ["Do", "Does", "Did", "Is"],
      correct: 2,
      explanation: "主詞 she，過去式問句用 Did + 動詞原形 buy。",
      logicHint: "last weekend 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["buy", "dress", "wedding", "last weekend"],
    },
    {
      question: "___ the students ___ (finish) their homework last night?",
      options: ["Do", "Does", "Are", "Did"],
      correct: 3,
      explanation: "主詞 the students，過去式問句用 Did + 動詞原形 finish。",
      logicHint: "last night 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["students", "finish", "homework", "last night"],
    },
    {
      question: "___ your brother ___ (fix) the computer last week?",
      options: ["Did", "Do", "Does", "Is"],
      correct: 0,
      explanation: "主詞 your brother，過去式問句用 Did + 動詞原形 fix。",
      logicHint: "last week 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["brother", "fix", "computer", "last week"],
    },
    {
      question: "___ they ___ (celebrate) their anniversary last month?",
      options: ["Do", "Did", "Does", "Are"],
      correct: 1,
      explanation: "主詞 they，過去式問句用 Did + 動詞原形 celebrate。",
      logicHint: "last month 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["celebrate", "anniversary", "last month"],
    },
    {
      question: "___ the doctor ___ (examine) the patient yesterday morning?",
      options: ["Do", "Does", "Did", "Is"],
      correct: 2,
      explanation: "主詞 the doctor，過去式問句用 Did + 動詞原形 examine。",
      logicHint: "yesterday morning 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["doctor", "examine", "patient", "yesterday", "morning"],
    },
    {
      question: "___ your sister ___ (graduate) from university last year?",
      options: ["Do", "Does", "Is", "Did"],
      correct: 3,
      explanation: "主詞 your sister，過去式問句用 Did + 動詞原形 graduate。",
      logicHint: "last year 表示過去時間，用過去式問句 Did + 動詞原形。",
      difficultWords: ["sister", "graduate", "university", "last year"],
    },
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  "go": "去",
  "park": "公園",
  "yesterday": "昨天",
  "eat": "吃",
  "breakfast": "早餐",
  "morning": "早上",
  "play": "玩、打（球）",
  "basketball": "籃球",
  "last": "上一個",
  "Sunday": "星期日",
  "watch": "看",
  "TV": "電視",
  "last night": "昨晚",
  "parents": "父母",
  "work": "工作",
  "study": "學習",
  "English": "英文",
  "last week": "上週",
  "run": "跑步",
  "children": "孩子們",
  "outside": "外面",
  "sister": "姊妹",
  "like": "喜歡",
  "movie": "電影",
  "write": "寫",
  "letter": "信",
  "last month": "上個月",
  "Anna": "安娜",
  "visit": "拜訪",
  "grandmother": "祖母",
  "weekend": "週末",
  "brother": "兄弟",
  "read": "閱讀",
  "book": "書",
  "cook": "煮、烹飪",
  "dinner": "晚餐",
  "evening": "晚上",
  "students": "學生們",
  "prepare": "準備",
  "test": "考試",
  "father": "爸爸",
  "drive": "開車",
  "listen": "聽",
  "music": "音樂",
  "workers": "工人們",
  "start": "開始",
  "early": "早",
  "cousin": "表親",
  "call": "打電話",
  "meet": "見面",
  "friends": "朋友們",
  "teacher": "老師",
  "explain": "解釋",
  "lesson": "課程",
  "aunt": "阿姨",
  "bake": "烤",
  "cake": "蛋糕",
  "party": "派對",
  "clean": "打掃",
  "room": "房間",
  "afternoon": "下午",
  "send": "寄送",
  "email": "電子郵件",
  "boss": "老闆",
  "Friday": "星期五",
  "grandparents": "祖父母",
  "buy": "買",
  "dress": "洋裝",
  "wedding": "婚禮",
  "finish": "完成",
  "homework": "作業",
  "fix": "修理",
  "computer": "電腦",
  "celebrate": "慶祝",
  "anniversary": "週年紀念",
  "doctor": "醫生",
  "examine": "檢查",
  "patient": "病人",
  "graduate": "畢業",
  "university": "大學",
  "last year": "去年",
  "this morning": "今天早上",
  "this evening": "今天晚上",
  "yesterday morning": "昨天早上",
  "yesterday evening": "昨天晚上",
  "last weekend": "上週末",
  "last Friday": "上週五"
};

function getRandomQuestions(subLevel, count = 10) {
  // 取得難度對應
  let difficulty = subLevel;
  if (LEVEL_CONFIG && LEVEL_CONFIG[subLevel]) {
    difficulty = LEVEL_CONFIG[subLevel].difficulty;
  }
  
  // 如果subLevel是sub1/sub2/sub3，直接使用對應的難度
  if (subLevel === 'sub1') difficulty = 'easy';
  else if (subLevel === 'sub2') difficulty = 'medium';
  else if (subLevel === 'sub3') difficulty = 'hard';
  
  const questions = UNIFIED_QUESTION_BANK[difficulty];
  if (!questions) {
    console.error(`找不到難度 ${difficulty} 的題目`);
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
    title: `第十七關：一般動詞過去式問句 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習一般動詞過去式問句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`,
    grammarTip: GRAMMAR_TIPS[difficulty] || "一般動詞過去式問句：Did + 主詞 + 動詞原形？"
  };
}

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "時光之門第一層",
        description: "探索一般動詞過去式問句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "時光之門第二層", 
        description: "挑戰更複雜的過去式問句型",
        difficulty: "medium"
    },
    sub3: {
        name: "時光之門頂層",
        description: "征服最困難的過去式問句挑戰",
        difficulty: "hard"
    }
};

// 困難單字詞典
const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 