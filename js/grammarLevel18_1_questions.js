// 文法塔統一題庫系統 - 第十八關：未來式肯定句
// 每個小關卡10題，難度逐關遞增，主詞多樣化

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "I ___ (go) to school tomorrow.",
      options: ["will go", "am going", "go", "going"],
      correct: 0,
      explanation: "tomorrow 表示未來，用 will go。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["go", "school", "tomorrow"],
    },
    {
      question: "She ___ (visit) her grandmother next week.",
      options: ["will visit", "visits", "is visiting", "visit"],
      correct: 0,
      explanation: "next week 表示未來，用 will visit。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["visit", "grandmother", "next week"],
    },
    {
      question: "They ___ (play) soccer this weekend.",
      options: ["will play", "play", "are playing", "playing"],
      correct: 0,
      explanation: "this weekend 表示未來，用 will play。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["play", "soccer", "weekend"],
    },
    {
      question: "He ___ (study) English next year.",
      options: ["will study", "studies", "is studying", "study"],
      correct: 0,
      explanation: "next year 表示未來，用 will study。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["study", "English", "next year"],
    },
    {
      question: "We ___ (travel) to Japan in summer.",
      options: ["will travel", "travel", "are traveling", "traveling"],
      correct: 0,
      explanation: "in summer 表示未來，用 will travel。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["travel", "Japan", "summer"],
    },
    {
      question: "My brother ___ (graduate) from college next month.",
      options: ["will graduate", "graduates", "is graduating", "graduate"],
      correct: 0,
      explanation: "next month 表示未來，用 will graduate。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["brother", "graduate", "college", "next month"],
    },
    {
      question: "The movie ___ (start) at 8 PM tonight.",
      options: ["will start", "starts", "is starting", "start"],
      correct: 0,
      explanation: "tonight 表示未來，用 will start。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["movie", "start", "tonight"],
    },
    {
      question: "You ___ (meet) your friends tomorrow.",
      options: ["will meet", "meet", "are meeting", "meeting"],
      correct: 0,
      explanation: "tomorrow 表示未來，用 will meet。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["meet", "friends", "tomorrow"],
    },
    {
      question: "The train ___ (arrive) at 3 PM.",
      options: ["will arrive", "arrives", "is arriving", "arrive"],
      correct: 0,
      explanation: "at 3 PM 表示未來時間，用 will arrive。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["train", "arrive", "PM"],
    },
    {
      question: "I ___ (buy) a new car next year.",
      options: ["will buy", "buy", "am buying", "buying"],
      correct: 0,
      explanation: "next year 表示未來，用 will buy。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["buy", "car", "next year"],
    },
  ],
  medium: [
    {
      question: "The students ___ (take) the exam next Monday.",
      options: ["will take", "take", "are taking", "taking"],
      correct: 0,
      explanation: "next Monday 表示未來，用 will take。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["students", "take", "exam", "next Monday"],
    },
    {
      question: "My sister ___ (get) married in June.",
      options: ["will get", "gets", "is getting", "get"],
      correct: 0,
      explanation: "in June 表示未來，用 will get。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["sister", "get", "married", "June"],
    },
    {
      question: "The company ___ (open) a new office next month.",
      options: ["will open", "opens", "is opening", "open"],
      correct: 0,
      explanation: "next month 表示未來，用 will open。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["company", "open", "office", "next month"],
    },
    {
      question: "We ___ (have) a party this Saturday.",
      options: ["will have", "have", "are having", "having"],
      correct: 0,
      explanation: "this Saturday 表示未來，用 will have。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["have", "party", "Saturday"],
    },
    {
      question: "The weather ___ (be) sunny tomorrow.",
      options: ["will be", "is", "are", "being"],
      correct: 0,
      explanation: "tomorrow 表示未來，用 will be。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["weather", "sunny", "tomorrow"],
    },
    {
      question: "They ___ (move) to a new house next year.",
      options: ["will move", "move", "are moving", "moving"],
      correct: 0,
      explanation: "next year 表示未來，用 will move。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["move", "house", "next year"],
    },
    {
      question: "The concert ___ (begin) at 7 PM tonight.",
      options: ["will begin", "begins", "is beginning", "begin"],
      correct: 0,
      explanation: "tonight 表示未來，用 will begin。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["concert", "begin", "tonight"],
    },
    {
      question: "She ___ (become) a doctor in five years.",
      options: ["will become", "becomes", "is becoming", "become"],
      correct: 0,
      explanation: "in five years 表示未來，用 will become。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["become", "doctor", "five years"],
    },
    {
      question: "The plane ___ (land) at 10 AM tomorrow.",
      options: ["will land", "lands", "is landing", "land"],
      correct: 0,
      explanation: "tomorrow 表示未來，用 will land。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["plane", "land", "tomorrow"],
    },
    {
      question: "I ___ (learn) to drive next summer.",
      options: ["will learn", "learn", "am learning", "learning"],
      correct: 0,
      explanation: "next summer 表示未來，用 will learn。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["learn", "drive", "next summer"],
    },
  ],
  hard: [
    {
      question: "The scientists ___ (discover) a new planet next year.",
      options: ["will discover", "discover", "are discovering", "discovering"],
      correct: 0,
      explanation: "next year 表示未來，用 will discover。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["scientists", "discover", "planet", "next year"],
    },
    {
      question: "The government ___ (build) a new hospital in 2025.",
      options: ["will build", "builds", "is building", "build"],
      correct: 0,
      explanation: "in 2025 表示未來，用 will build。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["government", "build", "hospital", "2025"],
    },
    {
      question: "The technology ___ (change) our lives completely.",
      options: ["will change", "changes", "is changing", "change"],
      correct: 0,
      explanation: "表示未來預測，用 will change。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["technology", "change", "lives", "completely"],
    },
    {
      question: "The population ___ (reach) 10 billion by 2050.",
      options: ["will reach", "reaches", "is reaching", "reach"],
      correct: 0,
      explanation: "by 2050 表示未來，用 will reach。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["population", "reach", "billion", "2050"],
    },
    {
      question: "The company ___ (expand) to international markets.",
      options: ["will expand", "expands", "is expanding", "expand"],
      correct: 0,
      explanation: "表示未來計劃，用 will expand。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["company", "expand", "international", "markets"],
    },
    {
      question: "The climate ___ (affect) agriculture significantly.",
      options: ["will affect", "affects", "is affecting", "affect"],
      correct: 0,
      explanation: "表示未來影響，用 will affect。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["climate", "affect", "agriculture", "significantly"],
    },
    {
      question: "The research team ___ (publish) their findings next month.",
      options: ["will publish", "publishes", "is publishing", "publish"],
      correct: 0,
      explanation: "next month 表示未來，用 will publish。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["research", "team", "publish", "findings", "next month"],
    },
    {
      question: "The economy ___ (recover) from the crisis.",
      options: ["will recover", "recovers", "is recovering", "recover"],
      correct: 0,
      explanation: "表示未來預測，用 will recover。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["economy", "recover", "crisis"],
    },
    {
      question: "The education system ___ (evolve) with technology.",
      options: ["will evolve", "evolves", "is evolving", "evolve"],
      correct: 0,
      explanation: "表示未來發展，用 will evolve。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["education", "system", "evolve", "technology"],
    },
    {
      question: "The world ___ (face) new challenges in the future.",
      options: ["will face", "faces", "is facing", "face"],
      correct: 0,
      explanation: "in the future 表示未來，用 will face。",
      logicHint: "未來式用 will + 原形動詞。",
      difficultWords: ["world", "face", "challenges", "future"],
    },
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  // 基礎未來式單字
  "go": "去",
  "school": "學校",
  "tomorrow": "明天",
  "visit": "拜訪",
  "grandmother": "祖母",
  "next week": "下週",
  "play": "玩、打（球）",
  "soccer": "足球",
  "weekend": "週末",
  "study": "學習",
  "English": "英文",
  "next year": "明年",
  "travel": "旅行",
  "Japan": "日本",
  "summer": "夏天",
  "brother": "兄弟",
  "graduate": "畢業",
  "college": "大學",
  "next month": "下個月",
  "movie": "電影",
  "start": "開始",
  "tonight": "今晚",
  "meet": "見面",
  "friends": "朋友們",
  "train": "火車",
  "arrive": "到達",
  "PM": "下午",
  "buy": "買",
  "car": "車子",
  
  // 中級未來式單字
  "students": "學生們",
  "take": "參加",
  "exam": "考試",
  "next Monday": "下週一",
  "sister": "姊妹",
  "get": "得到",
  "married": "結婚",
  "June": "六月",
  "company": "公司",
  "open": "開設",
  "office": "辦公室",
  "have": "舉辦",
  "party": "派對",
  "Saturday": "星期六",
  "weather": "天氣",
  "sunny": "晴朗的",
  "move": "搬家",
  "house": "房子",
  "concert": "音樂會",
  "begin": "開始",
  "become": "成為",
  "doctor": "醫生",
  "five years": "五年",
  "plane": "飛機",
  "land": "降落",
  "AM": "上午",
  "learn": "學習",
  "drive": "開車",
  "next summer": "明年夏天",
  
  // 高級未來式單字
  "scientists": "科學家們",
  "discover": "發現",
  "planet": "行星",
  "government": "政府",
  "build": "建造",
  "2025": "2025年",
  "technology": "科技",
  "change": "改變",
  "lives": "生活",
  "completely": "完全地",
  "population": "人口",
  "reach": "達到",
  "billion": "十億",
  "2050": "2050年",
  "expand": "擴展",
  "international": "國際的",
  "markets": "市場",
  "climate": "氣候",
  "affect": "影響",
  "agriculture": "農業",
  "significantly": "顯著地",
  "research": "研究",
  "team": "團隊",
  "publish": "發表",
  "findings": "發現",
  "economy": "經濟",
  "recover": "恢復",
  "crisis": "危機",
  "education": "教育",
  "system": "系統",
  "evolve": "演進",
  "world": "世界",
  "face": "面對",
  "challenges": "挑戰",
  "future": "未來"
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
    title: `第十八關：未來式肯定句 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習未來式肯定句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`
  };
}

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索未來式肯定句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的未來句型",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的未來式挑戰",
        difficulty: "hard"
    }
};

// 困難單字詞典
const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 