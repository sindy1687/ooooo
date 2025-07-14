// 文法塔統一題庫系統 - 第十一關：一般動詞現在式否定句
// 每個小關卡10題，難度逐關遞增，主詞多樣化

// 文法小提示配置
const GRAMMAR_TIPS = {
  easy: "現在式混合題：一般動詞第三人稱單數加s/es，be動詞用am/is/are",
  medium: "現在式混合題：一般動詞第三人稱單數加s/es，be動詞用am/is/are",
  hard: "現在式混合題：一般動詞第三人稱單數加s/es，be動詞用am/is/are"
};

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "I ___ (not like) coffee.",
      options: ["don't like", "doesn't like", "am not liking", "not like"],
      correct: 0,
      explanation: "I 主詞，否定句用 don't like。",
      logicHint: "I 否定句用 don't + 原形動詞。",
      difficultWords: ["like", "coffee"],
    },
    {
      question: "She ___ (not eat) meat.",
      options: ["don't eat", "doesn't eat", "isn't eating", "not eat"],
      correct: 1,
      explanation: "She 主詞，否定句用 doesn't eat。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["eat", "meat"],
    },
    {
      question: "They ___ (not play) soccer.",
      options: ["don't play", "doesn't play", "aren't playing", "not play"],
      correct: 0,
      explanation: "They 主詞，否定句用 don't play。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["play", "soccer"],
    },
    {
      question: "He ___ (not watch) TV.",
      options: ["don't watch", "doesn't watch", "isn't watching", "not watch"],
      correct: 1,
      explanation: "He 主詞，否定句用 doesn't watch。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["watch", "TV"],
    },
    {
      question: "We ___ (not study) math.",
      options: ["don't study", "doesn't study", "aren't studying", "not study"],
      correct: 0,
      explanation: "We 主詞，否定句用 don't study。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["study", "math"],
    },
    {
      question: "My brother ___ (not read) books.",
      options: ["don't read", "doesn't read", "isn't reading", "not read"],
      correct: 1,
      explanation: "My brother 是單數主詞，否定句用 doesn't read。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["brother", "read", "books"],
    },
    {
      question: "The children ___ (not sleep) early.",
      options: ["don't sleep", "doesn't sleep", "aren't sleeping", "not sleep"],
      correct: 0,
      explanation: "The children 是複數主詞，否定句用 don't sleep。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["children", "sleep", "early"],
    },
    {
      question: "You ___ (not work) on weekends.",
      options: ["don't work", "doesn't work", "aren't working", "not work"],
      correct: 0,
      explanation: "You 主詞，否定句用 don't work。",
      logicHint: "You 否定句用 don't + 原形動詞。",
      difficultWords: ["work", "weekends"],
    },
    {
      question: "My sister ___ (not cook) dinner.",
      options: ["don't cook", "doesn't cook", "isn't cooking", "not cook"],
      correct: 1,
      explanation: "My sister 是單數主詞，否定句用 doesn't cook。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["sister", "cook", "dinner"],
    },
    {
      question: "The students ___ (not write) emails.",
      options: ["don't write", "doesn't write", "aren't writing", "not write"],
      correct: 0,
      explanation: "The students 是複數主詞，否定句用 don't write。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["students", "write", "emails"],
    },
  ],
  medium: [
    {
      question: "I ___ (not go) to school by bus.",
      options: ["don't go", "doesn't go", "am not going", "not go"],
      correct: 0,
      explanation: "I 主詞，否定句用 don't go。",
      logicHint: "I 否定句用 don't + 原形動詞。",
      difficultWords: ["go", "school", "bus"],
    },
    {
      question: "She ___ (not speak) French.",
      options: ["don't speak", "doesn't speak", "isn't speaking", "not speak"],
      correct: 1,
      explanation: "She 主詞，否定句用 doesn't speak。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["speak", "French"],
    },
    {
      question: "They ___ (not visit) their grandparents.",
      options: ["don't visit", "doesn't visit", "aren't visiting", "not visit"],
      correct: 0,
      explanation: "They 主詞，否定句用 don't visit。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["visit", "grandparents"],
    },
    {
      question: "He ___ (not drive) to work.",
      options: ["don't drive", "doesn't drive", "isn't driving", "not drive"],
      correct: 1,
      explanation: "He 主詞，否定句用 doesn't drive。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["drive", "work"],
    },
    {
      question: "We ___ (not listen) to music.",
      options: ["don't listen", "doesn't listen", "aren't listening", "not listen"],
      correct: 0,
      explanation: "We 主詞，否定句用 don't listen。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["listen", "music"],
    },
    {
      question: "My father ___ (not smoke).",
      options: ["don't smoke", "doesn't smoke", "isn't smoking", "not smoke"],
      correct: 1,
      explanation: "My father 是單數主詞，否定句用 doesn't smoke。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["father", "smoke"],
    },
    {
      question: "The teachers ___ (not wear) uniforms.",
      options: ["don't wear", "doesn't wear", "aren't wearing", "not wear"],
      correct: 0,
      explanation: "The teachers 是複數主詞，否定句用 don't wear。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["teachers", "wear", "uniforms"],
    },
    {
      question: "You ___ (not understand) this.",
      options: ["don't understand", "doesn't understand", "aren't understanding", "not understand"],
      correct: 0,
      explanation: "You 主詞，否定句用 don't understand。",
      logicHint: "You 否定句用 don't + 原形動詞。",
      difficultWords: ["understand"],
    },
    {
      question: "My mother ___ (not work) on Sundays.",
      options: ["don't work", "doesn't work", "isn't working", "not work"],
      correct: 1,
      explanation: "My mother 是單數主詞，否定句用 doesn't work。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["mother", "work", "Sundays"],
    },
    {
      question: "The dogs ___ (not bark) at night.",
      options: ["don't bark", "doesn't bark", "aren't barking", "not bark"],
      correct: 0,
      explanation: "The dogs 是複數主詞，否定句用 don't bark。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["dogs", "bark", "night"],
    },
  ],
  hard: [
    {
      question: "I ___ (not believe) in ghosts.",
      options: ["don't believe", "doesn't believe", "am not believing", "not believe"],
      correct: 0,
      explanation: "I 主詞，否定句用 don't believe。",
      logicHint: "I 否定句用 don't + 原形動詞。",
      difficultWords: ["believe", "ghosts"],
    },
    {
      question: "She ___ (not remember) his name.",
      options: ["don't remember", "doesn't remember", "isn't remembering", "not remember"],
      correct: 1,
      explanation: "She 主詞，否定句用 doesn't remember。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["remember", "name"],
    },
    {
      question: "They ___ (not agree) with you.",
      options: ["don't agree", "doesn't agree", "aren't agreeing", "not agree"],
      correct: 0,
      explanation: "They 主詞，否定句用 don't agree。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["agree"],
    },
    {
      question: "He ___ (not know) the answer.",
      options: ["don't know", "doesn't know", "isn't knowing", "not know"],
      correct: 1,
      explanation: "He 主詞，否定句用 doesn't know。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["know", "answer"],
    },
    {
      question: "We ___ (not need) help.",
      options: ["don't need", "doesn't need", "aren't needing", "not need"],
      correct: 0,
      explanation: "We 主詞，否定句用 don't need。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["need", "help"],
    },
    {
      question: "My brother ___ (not want) to go.",
      options: ["don't want", "doesn't want", "isn't wanting", "not want"],
      correct: 1,
      explanation: "My brother 是單數主詞，否定句用 doesn't want。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["brother", "want", "go"],
    },
    {
      question: "The children ___ (not finish) their homework.",
      options: ["don't finish", "doesn't finish", "aren't finishing", "not finish"],
      correct: 0,
      explanation: "The children 是複數主詞，否定句用 don't finish。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["children", "finish", "homework"],
    },
    {
      question: "You ___ (not seem) happy.",
      options: ["don't seem", "doesn't seem", "aren't seeming", "not seem"],
      correct: 0,
      explanation: "You 主詞，否定句用 don't seem。",
      logicHint: "You 否定句用 don't + 原形動詞。",
      difficultWords: ["seem", "happy"],
    },
    {
      question: "My sister ___ (not care) about fashion.",
      options: ["don't care", "doesn't care", "isn't caring", "not care"],
      correct: 1,
      explanation: "My sister 是單數主詞，否定句用 doesn't care。",
      logicHint: "第三人稱單數否定句用 doesn't + 原形動詞。",
      difficultWords: ["sister", "care", "fashion"],
    },
    {
      question: "The students ___ (not understand) the lesson.",
      options: ["don't understand", "doesn't understand", "aren't understanding", "not understand"],
      correct: 0,
      explanation: "The students 是複數主詞，否定句用 don't understand。",
      logicHint: "複數主詞否定句用 don't + 原形動詞。",
      difficultWords: ["students", "understand", "lesson"],
    },
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  "from": "來自",
  "name": "名字",
  "best": "最好的",
  "friend": "朋友",
  "today": "今天",
  "birthday": "生日",
  "school": "學校",
  "doing": "正在做",
  "now": "現在",
  "teacher": "老師",
  "parents": "父母",
  "prefer": "偏好",
  "tea": "茶",
  "coffee": "咖啡",
  "going": "去（進行式）",
  "want": "想要",
  "lunch": "午餐",
  "coming": "來、到來",
  "party": "派對",
  "brother": "兄弟",
  "work": "工作",
  "arrive": "到達",
  "favorite": "最喜歡的",
  "cats": "貓",
  "dogs": "狗",
  "classmates": "同學們",
  "like": "喜歡",
  "mother": "媽媽",
  "spell": "拼寫",
  "word": "單字",
  "come": "來",
  "home": "家",
  "books": "書（複數）",
  "kept": "被保管、存放",
  "children": "孩子們",
  "responsible": "負責的",
  "project": "專案",
  "team": "隊伍",
  "win": "贏得",
  "game": "比賽",
  "meeting": "會議",
  "start": "開始",
  "choose": "選擇",
  "winners": "贏家們",
  "contest": "比賽",
  "think": "想、認為",
  "plan": "計畫",
  "travel": "旅行",
  "Japan": "日本",
  "results": "結果",
  "come out": "出現、公布",
  "eat": "吃",
  "meat": "肉",
  "play": "玩",
  "soccer": "足球",
  "watch": "看",
  "TV": "電視",
  "study": "學習",
  "math": "數學",
  "read": "讀",
  "sleep": "睡覺",
  "early": "早",
  "cook": "煮",
  "dinner": "晚餐",
  "write": "寫",
  "emails": "電子郵件",
  "go": "去",
  "bus": "公車",
  "speak": "說",
  "French": "法語",
  "visit": "拜訪",
  "grandparents": "祖父母",
  "drive": "開車",
  "listen": "聽",
  "music": "音樂",
  "smoke": "抽煙",
  "wear": "穿",
  "uniforms": "制服",
  "understand": "理解",
  "Sundays": "星期日",
  "bark": "吠叫",
  "night": "夜晚",
  "believe": "相信",
  "ghosts": "鬼魂",
  "remember": "記得",
  "agree": "同意",
  "know": "知道",
  "answer": "答案",
  "need": "需要",
  "help": "幫助",
  "finish": "完成",
  "homework": "功課",
  "seem": "似乎",
  "happy": "快樂",
  "care": "在乎",
  "fashion": "時尚",
  "lesson": "課程",
  "students": "學生們",
  "teachers": "老師們",
  "father": "父親",
  "sister": "姐妹"
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
    title: `第十一關：一般動詞現在式否定句 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習一般動詞現在式否定句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`,
    grammarTip: GRAMMAR_TIPS[difficulty] || "現在式混合題：一般動詞第三人稱單數加s/es，be動詞用am/is/are"
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