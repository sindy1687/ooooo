// 文法塔統一題庫系統 - 第二十關：未來式疑問句
// 每個小關卡10題，難度逐關遞增，主詞多樣化

const UNIFIED_QUESTION_BANK = {
  easy: [
    // 30% 答案0
    {
      question: "___ you go to the movies tomorrow?",
      options: ["Will", "Do", "Are", "Can"],
      correct: 0,
      explanation: "未來式疑問句：Will + 主詞 + 原形動詞",
      logicHint: "未來式疑問句用 Will 開頭",
      difficultWords: ["movies", "tomorrow"]
    },
    {
      question: "___ she cook dinner tonight?",
      options: ["Will", "Does", "Is", "Can"],
      correct: 0,
      explanation: "未來式疑問句：Will + she + cook",
      logicHint: "tonight 表示今晚（未來時間）",
      difficultWords: ["cook", "dinner", "tonight"]
    },
    {
      question: "___ they attend the party next week?",
      options: ["Will", "Do", "Are", "Can"],
      correct: 0,
      explanation: "未來式疑問句：Will + they + attend",
      logicHint: "next week 表示未來時間",
      difficultWords: ["attend", "party"]
    },
    
    // 20% 答案1
    {
      question: "Will we ___ early tomorrow morning?",
      options: ["leaving", "leave", "left", "leaves"],
      correct: 1,
      explanation: "未來式疑問句：Will + 主詞 + 原形動詞",
      logicHint: "Will 後面用原形動詞",
      difficultWords: ["early", "morning", "leave"]
    },
    {
      question: "Will he ___ his homework tonight?",
      options: ["finishing", "finish", "finished", "finishes"],
      correct: 1,
      explanation: "未來式疑問句：Will + he + finish",
      logicHint: "Will 後面接原形動詞",
      difficultWords: ["homework", "finish"]
    },
    
    // 20% 答案2
    {
      question: "Will the students ___ the test next Friday?",
      options: ["taking", "took", "take", "takes"],
      correct: 2,
      explanation: "未來式疑問句：Will + students + take",
      logicHint: "Will 後面用原形動詞",
      difficultWords: ["students", "test"]
    },
    {
      question: "Will your sister ___ to London next month?",
      options: ["traveling", "traveled", "travel", "travels"],
      correct: 2,
      explanation: "未來式疑問句：Will + sister + travel",
      logicHint: "next month 表示下個月",
      difficultWords: ["sister", "london", "travel"]
    },
    
    // 30% 答案3
    {
      question: "Will you ___ late for school tomorrow?",
      options: ["being", "been", "are", "be"],
      correct: 3,
      explanation: "未來式疑問句：Will + you + be",
      logicHint: "Will 後面的be動詞用原形 be",
      difficultWords: ["late", "school"]
    },
    {
      question: "Will the weather ___ good this weekend?",
      options: ["being", "been", "are", "be"],
      correct: 3,
      explanation: "未來式疑問句：Will + weather + be",
      logicHint: "this weekend 表示這個週末",
      difficultWords: ["weather", "weekend"]
    },
    {
      question: "Will I ___ your friends next Saturday?",
      options: ["meeting", "met", "meets", "meet"],
      correct: 3,
      explanation: "未來式疑問句：Will + I + meet",
      logicHint: "next Saturday 表示下週六",
      difficultWords: ["friends", "saturday"]
    }
  ],
  medium: [
    // 30% 答案0
    {
      question: "___ the company hire new employees next year?",
      options: ["Will", "Does", "Is", "Can"],
      correct: 0,
      explanation: "未來式疑問句：Will + company + hire",
      logicHint: "next year 表示明年",
      difficultWords: ["company", "employees", "hire"]
    },
    {
      question: "___ we go to the beach this summer?",
      options: ["Will", "Do", "Are", "Can"],
      correct: 0,
      explanation: "未來式疑問句：Will + we + go",
      logicHint: "this summer 表示今年夏天",
      difficultWords: ["beach", "summer"]
    },
    {
      question: "___ she complete her project on time?",
      options: ["Will", "Does", "Is", "Can"],
      correct: 0,
      explanation: "未來式疑問句：Will + she + complete",
      logicHint: "on time 表示準時",
      difficultWords: ["project", "complete"]
    },
    
    // 20% 答案1
    {
      question: "Will they ___ the meeting tomorrow?",
      options: ["attending", "attend", "attended", "attends"],
      correct: 1,
      explanation: "未來式疑問句：Will + they + attend",
      logicHint: "Will 後面用原形動詞",
      difficultWords: ["meeting", "attend"]
    },
    {
      question: "Will he ___ his car next week?",
      options: ["selling", "sell", "sold", "sells"],
      correct: 1,
      explanation: "未來式疑問句：Will + he + sell",
      logicHint: "next week 表示下週",
      difficultWords: ["sell"]
    },
    
    // 20% 答案2
    {
      question: "Will the children ___ to school tomorrow?",
      options: ["going", "went", "go", "goes"],
      correct: 2,
      explanation: "未來式疑問句：Will + children + go",
      logicHint: "Will 後面用原形動詞",
      difficultWords: ["children", "school"]
    },
    {
      question: "Will your parents ___ home late tonight?",
      options: ["coming", "came", "come", "comes"],
      correct: 2,
      explanation: "未來式疑問句：Will + parents + come",
      logicHint: "tonight 表示今晚",
      difficultWords: ["parents", "late"]
    },
    
    // 30% 答案3
    {
      question: "Will the store ___ open on Sunday?",
      options: ["being", "been", "are", "be"],
      correct: 3,
      explanation: "未來式疑問句：Will + store + be",
      logicHint: "on Sunday 表示在週日",
      difficultWords: ["store", "open", "sunday"]
    },
    {
      question: "Will I ___ busy this afternoon?",
      options: ["being", "been", "am", "be"],
      correct: 3,
      explanation: "未來式疑問句：Will + I + be",
      logicHint: "this afternoon 表示今天下午",
      difficultWords: ["busy", "afternoon"]
    },
    {
      question: "Will you ___ disappointed with the result?",
      options: ["being", "been", "are", "be"],
      correct: 3,
      explanation: "未來式疑問句：Will + you + be",
      logicHint: "disappointed 失望的",
      difficultWords: ["disappointed", "result"]
    }
  ],
  hard: [
    // 30% 答案0
    {
      question: "___ the government introduce new taxes next year?",
      options: ["Will", "Does", "Is", "Can"],
      correct: 0,
      explanation: "未來式疑問句：Will + government + introduce",
      logicHint: "introduce 引進，實施",
      difficultWords: ["government", "taxes", "introduce"]
    },
    {
      question: "___ scientists discover the cure soon?",
      options: ["Will", "Do", "Are", "Can"],
      correct: 0,
      explanation: "未來式疑問句：Will + scientists + discover",
      logicHint: "discover 發現",
      difficultWords: ["scientists", "cure", "discover"]
    },
    {
      question: "___ the committee make a decision today?",
      options: ["Will", "Does", "Is", "Can"],
      correct: 0,
      explanation: "未來式疑問句：Will + committee + make",
      logicHint: "make a decision 做決定",
      difficultWords: ["committee", "decision"]
    },
    
    // 20% 答案1
    {
      question: "Will technology ___ human jobs completely?",
      options: ["replacing", "replace", "replaced", "replaces"],
      correct: 1,
      explanation: "未來式疑問句：Will + technology + replace",
      logicHint: "replace 取代",
      difficultWords: ["technology", "replace", "completely"]
    },
    {
      question: "Will the economy ___ quickly this year?",
      options: ["recovering", "recover", "recovered", "recovers"],
      correct: 1,
      explanation: "未來式疑問句：Will + economy + recover",
      logicHint: "recover 復甦",
      difficultWords: ["economy", "recover", "quickly"]
    },
    
    // 20% 答案2
    {
      question: "Will climate change ___ easily?",
      options: ["solving", "solved", "solve", "solves"],
      correct: 2,
      explanation: "未來式疑問句：Will + climate change + solve",
      logicHint: "solve 解決",
      difficultWords: ["climate", "change", "solve", "easily"]
    },
    {
      question: "Will the price ___ significantly?",
      options: ["increasing", "increased", "increase", "increases"],
      correct: 2,
      explanation: "未來式疑問句：Will + price + increase",
      logicHint: "increase 增加",
      difficultWords: ["price", "increase", "significantly"]
    },
    
    // 30% 答案3
    {
      question: "Will the project ___ profitable this quarter?",
      options: ["being", "been", "are", "be"],
      correct: 3,
      explanation: "未來式疑問句：Will + project + be",
      logicHint: "profitable 有利可圖的",
      difficultWords: ["project", "profitable", "quarter"]
    },
    {
      question: "Will the situation ___ hopeless forever?",
      options: ["being", "been", "are", "be"],
      correct: 3,
      explanation: "未來式疑問句：Will + situation + be",
      logicHint: "hopeless 無望的",
      difficultWords: ["situation", "hopeless", "forever"]
    },
    {
      question: "Will the new policy ___ effective immediately?",
      options: ["being", "been", "are", "be"],
      correct: 3,
      explanation: "未來式疑問句：Will + policy + be",
      logicHint: "effective 有效的",
      difficultWords: ["policy", "effective", "immediately"]
    }
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  movies: "電影",
  tomorrow: "明天", 
  cook: "烹飪",
  dinner: "晚餐",
  tonight: "今晚",
  attend: "參加",
  party: "派對",
  early: "早",
  morning: "早晨",
  leave: "離開",
  homework: "作業",
  finish: "完成",
  students: "學生",
  test: "考試",
  sister: "姊妹",
  london: "倫敦",
  travel: "旅行",
  late: "遲到",
  school: "學校",
  weather: "天氣",
  weekend: "週末",
  friends: "朋友",
  saturday: "星期六",
  company: "公司",
  employees: "員工",
  hire: "僱用",
  beach: "海灘",
  summer: "夏天",
  project: "專案",
  complete: "完成",
  meeting: "會議",
  sell: "賣",
  children: "孩子們",
  parents: "父母",
  store: "商店",
  open: "開放",
  sunday: "星期日",
  busy: "忙碌",
  afternoon: "下午",
  disappointed: "失望",
  result: "結果",
  government: "政府",
  taxes: "稅收",
  introduce: "引進",
  scientists: "科學家",
  cure: "治療",
  discover: "發現",
  committee: "委員會",
  decision: "決定",
  technology: "科技",
  replace: "取代",
  completely: "完全地",
  economy: "經濟",
  recover: "復甦",
  quickly: "快速地",
  climate: "氣候",
  change: "改變",
  solve: "解決",
  easily: "容易地",
  price: "價格",
  increase: "增加",
  significantly: "顯著地",
  profitable: "有利可圖",
  quarter: "季度",
  situation: "情況",
  hopeless: "無望",
  forever: "永遠",
  policy: "政策",
  effective: "有效",
  immediately: "立即"
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
    title: `第二十關：未來式疑問句 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習未來式疑問句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`
  };
}

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索未來式疑問句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的未來式疑問句",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的未來式疑問句挑戰",
        difficulty: "hard"
    }
};

// 困難單字詞典
const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 