// 文法塔統一題庫系統 - 第二十二關：比較級
// 每個小關卡10題，難度逐關遞增，主詞多樣化

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "This book is ___ than that one.",
      options: ["more interesting", "most interesting", "interesting", "interestinger"],
      correct: 0,
      explanation: "比較級用 more + 形容詞，more interesting。",
      logicHint: "多音節形容詞用 more + 形容詞。",
      difficultWords: ["book", "interesting", "than"],
    },
    {
      question: "She is ___ than her sister.",
      options: ["tallest", "taller", "more tall", "tall"],
      correct: 1,
      explanation: "tall 的比較級是 taller。",
      logicHint: "單音節形容詞加 -er。",
      difficultWords: ["taller", "sister", "than"],
    },
    {
      question: "The weather today is ___ than yesterday.",
      options: ["good", "better", "best", "more good"],
      correct: 1,
      explanation: "good 的比較級是 better。",
      logicHint: "good 的比較級是不規則變化 better。",
      difficultWords: ["weather", "better", "yesterday"],
    },
    {
      question: "My car is ___ than yours.",
      options: ["newer", "more new", "newest", "new"],
      correct: 0,
      explanation: "new 的比較級是 newer。",
      logicHint: "單音節形容詞加 -er。",
      difficultWords: ["car", "newer", "yours"],
    },
    {
      question: "This test is ___ than the last one.",
      options: ["easy", "easier", "more easy", "easiest"],
      correct: 1,
      explanation: "easy 的比較級是 easier（y 變 i 加 er）。",
      logicHint: "以 y 結尾的形容詞，y 變 i 加 -er。",
      difficultWords: ["test", "easier", "last"],
    },
    {
      question: "He runs ___ than me.",
      options: ["fast", "more fast", "faster", "fastest"],
      correct: 2,
      explanation: "fast 的比較級是 faster。",
      logicHint: "單音節形容詞加 -er。",
      difficultWords: ["runs", "faster", "than"],
    },
    {
      question: "This movie is ___ than that one.",
      options: ["more bad", "worse", "worst", "bad"],
      correct: 1,
      explanation: "bad 的比較級是 worse。",
      logicHint: "bad 的比較級是不規則變化 worse。",
      difficultWords: ["movie", "worse", "than"],
    },
    {
      question: "The blue bag is ___ than the red one.",
      options: ["heavy", "heavier", "more heavy", "heaviest"],
      correct: 1,
      explanation: "heavy 的比較級是 heavier（y 變 i 加 er）。",
      logicHint: "以 y 結尾的形容詞，y 變 i 加 -er。",
      difficultWords: ["blue", "bag", "heavier"],
    },
    {
      question: "She speaks English ___ than before.",
      options: ["more clearly", "clearer", "most clearly", "clear"],
      correct: 0,
      explanation: "clearly 是副詞，比較級用 more clearly。",
      logicHint: "副詞比較級用 more + 副詞。",
      difficultWords: ["speaks", "English", "clearly"],
    },
    {
      question: "This room is ___ than the other one.",
      options: ["bigger", "more big", "biggest", "big"],
      correct: 0,
      explanation: "big 的比較級是 bigger（重複字尾加 er）。",
      logicHint: "單音節形容詞重複字尾加 -er。",
      difficultWords: ["room", "bigger", "other"],
    },
  ],
  medium: [
    {
      question: "The coffee is ___ than the tea.",
      options: ["hot", "hottest", "hotter", "more hot"],
      correct: 2,
      explanation: "hot 的比較級是 hotter（重複字尾加 er）。",
      logicHint: "單音節形容詞重複字尾加 -er。",
      difficultWords: ["coffee", "hotter", "tea"],
    },
    {
      question: "This problem is ___ than I thought.",
      options: ["more difficult", "difficulter", "most difficult", "difficult"],
      correct: 0,
      explanation: "difficult 是多音節，比較級用 more difficult。",
      logicHint: "多音節形容詞用 more + 形容詞。",
      difficultWords: ["problem", "difficult", "thought"],
    },
    {
      question: "He feels ___ today than yesterday.",
      options: ["good", "well", "better", "best"],
      correct: 2,
      explanation: "good/well 的比較級都是 better。",
      logicHint: "good/well 的比較級是不規則變化 better。",
      difficultWords: ["feels", "better", "today"],
    },
    {
      question: "The summer is ___ than the winter.",
      options: ["more warm", "warmer", "warmest", "warm"],
      correct: 1,
      explanation: "warm 的比較級是 warmer。",
      logicHint: "單音節形容詞加 -er。",
      difficultWords: ["summer", "warmer", "winter"],
    },
    {
      question: "This dress is ___ than that one.",
      options: ["expensive", "more expensive", "most expensive", "expensiver"],
      correct: 1,
      explanation: "expensive 是多音節，比較級用 more expensive。",
      logicHint: "多音節形容詞用 more + 形容詞。",
      difficultWords: ["dress", "expensive", "than"],
    },
    {
      question: "She arrives ___ than usual.",
      options: ["early", "more early", "earlier", "earliest"],
      correct: 2,
      explanation: "early 的比較級是 earlier（y 變 i 加 er）。",
      logicHint: "以 y 結尾的形容詞，y 變 i 加 -er。",
      difficultWords: ["arrives", "earlier", "usual"],
    },
    {
      question: "The story gets ___ as it continues.",
      options: ["more interesting", "interestinger", "most interesting", "interesting"],
      correct: 0,
      explanation: "interesting 是多音節，比較級用 more interesting。",
      logicHint: "多音節形容詞用 more + 形容詞。",
      difficultWords: ["story", "interesting", "continues"],
    },
    {
      question: "My brother is ___ than my father.",
      options: ["young", "younger", "more young", "youngest"],
      correct: 1,
      explanation: "young 的比較級是 younger。",
      logicHint: "單音節形容詞加 -er。",
      difficultWords: ["brother", "younger", "father"],
    },
    {
      question: "This computer works ___ than the old one.",
      options: ["more quickly", "quicker", "quickest", "quick"],
      correct: 0,
      explanation: "quickly 是副詞，比較級用 more quickly。",
      logicHint: "副詞比較級用 more + 副詞。",
      difficultWords: ["computer", "quickly", "old"],
    },
    {
      question: "The mountain is ___ than the hill.",
      options: ["more high", "highest", "high", "higher"],
      correct: 3,
      explanation: "high 的比較級是 higher。",
      logicHint: "單音節形容詞加 -er。",
      difficultWords: ["mountain", "higher", "hill"],
    },
  ],
  hard: [
    {
      question: "This assignment is ___ than the previous one.",
      options: ["challenging", "more challenging", "most challenging", "challenginger"],
      correct: 1,
      explanation: "challenging 是多音節，比較級用 more challenging。",
      logicHint: "多音節形容詞用 more + 形容詞。",
      difficultWords: ["assignment", "challenging", "previous"],
    },
    {
      question: "She performs ___ under pressure than others.",
      options: ["good", "well", "better", "best"],
      correct: 2,
      explanation: "well 的比較級是 better，修飾動詞 performs。",
      logicHint: "well 的比較級是不規則變化 better。",
      difficultWords: ["performs", "pressure", "others"],
    },
    {
      question: "The traffic is ___ during rush hour.",
      options: ["bad", "badder", "worse", "worst"],
      correct: 2,
      explanation: "bad 的比較級是 worse。",
      logicHint: "bad 的比較級是不規則變化 worse。",
      difficultWords: ["traffic", "worse", "rush hour"],
    },
    {
      question: "This restaurant serves ___ food than that one.",
      options: ["more delicious", "deliciouser", "most delicious", "delicious"],
      correct: 0,
      explanation: "delicious 是多音節，比較級用 more delicious。",
      logicHint: "多音節形容詞用 more + 形容詞。",
      difficultWords: ["restaurant", "delicious", "serves"],
    },
    {
      question: "He studies ___ than his classmates.",
      options: ["hard", "more hard", "harder", "hardest"],
      correct: 2,
      explanation: "hard 的比較級是 harder。",
      logicHint: "單音節形容詞加 -er。",
      difficultWords: ["studies", "harder", "classmates"],
    },
    {
      question: "The new policy is ___ than the old one.",
      options: ["effective", "effectiver", "more effective", "most effective"],
      correct: 2,
      explanation: "effective 是多音節，比較級用 more effective。",
      logicHint: "多音節形容詞用 more + 形容詞。",
      difficultWords: ["policy", "effective", "old"],
    },
    {
      question: "She looks ___ today than yesterday.",
      options: ["more beautiful", "beautifuler", "most beautiful", "beautiful"],
      correct: 0,
      explanation: "beautiful 是多音節，比較級用 more beautiful。",
      logicHint: "多音節形容詞用 more + 形容詞。",
      difficultWords: ["looks", "beautiful", "today"],
    },
    {
      question: "This medicine works ___ than the previous one.",
      options: ["more efficiently", "efficienter", "most efficiently", "efficiently"],
      correct: 0,
      explanation: "efficiently 是副詞，比較級用 more efficiently。",
      logicHint: "副詞比較級用 more + 副詞。",
      difficultWords: ["medicine", "efficiently", "previous"],
    },
    {
      question: "The new student adapts ___ than expected.",
      options: ["more rapidly", "rapider", "most rapidly", "rapidly"],
      correct: 0,
      explanation: "rapidly 是副詞，比較級用 more rapidly。",
      logicHint: "副詞比較級用 more + 副詞。",
      difficultWords: ["student", "adapts", "rapidly"],
    },
    {
      question: "This approach proves ___ than the traditional method.",
      options: ["successful", "more successful", "most successful", "successfuler"],
      correct: 1,
      explanation: "successful 是多音節，比較級用 more successful。",
      logicHint: "多音節形容詞用 more + 形容詞。",
      difficultWords: ["approach", "successful", "traditional"],
    },
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  "book": "書",
  "interesting": "有趣的",
  "than": "比",
  "taller": "更高的",
  "sister": "姊妹",
  "weather": "天氣",
  "better": "更好的",
  "yesterday": "昨天",
  "car": "汽車",
  "newer": "更新的",
  "yours": "你的",
  "test": "測驗",
  "easier": "更容易的",
  "last": "最後的",
  "runs": "跑",
  "faster": "更快的",
  "movie": "電影",
  "worse": "更糟的",
  "blue": "藍色",
  "bag": "包包",
  "heavier": "更重的",
  "speaks": "說",
  "English": "英文",
  "clearly": "清楚地",
  "room": "房間",
  "bigger": "更大的",
  "other": "其他的",
  "coffee": "咖啡",
  "hotter": "更熱的",
  "tea": "茶",
  "problem": "問題",
  "difficult": "困難的",
  "thought": "想法",
  "feels": "感覺",
  "today": "今天",
  "summer": "夏天",
  "warmer": "更溫暖的",
  "winter": "冬天",
  "dress": "洋裝",
  "expensive": "昂貴的",
  "arrives": "到達",
  "earlier": "更早的",
  "usual": "平常的",
  "story": "故事",
  "continues": "繼續",
  "brother": "兄弟",
  "younger": "更年輕的",
  "father": "爸爸",
  "computer": "電腦",
  "quickly": "快速地",
  "old": "舊的",
  "mountain": "山",
  "higher": "更高的",
  "hill": "小山",
  "assignment": "作業",
  "challenging": "有挑戰性的",
  "previous": "之前的",
  "performs": "表現",
  "pressure": "壓力",
  "others": "其他人",
  "traffic": "交通",
  "rush hour": "尖峰時間",
  "restaurant": "餐廳",
  "delicious": "美味的",
  "serves": "提供",
  "studies": "學習",
  "harder": "更努力的",
  "classmates": "同學們",
  "policy": "政策",
  "effective": "有效的",
  "looks": "看起來",
  "beautiful": "美麗的",
  "medicine": "藥物",
  "efficiently": "有效率地",
  "student": "學生",
  "adapts": "適應",
  "rapidly": "迅速地",
  "approach": "方法",
  "successful": "成功的",
  "traditional": "傳統的"
};

const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

// 獲取隨機題目
function getRandomQuestions(subLevel, count = 10) {
  let questions;
  if (subLevel === 1) questions = UNIFIED_QUESTION_BANK.easy;
  else if (subLevel === 2) questions = UNIFIED_QUESTION_BANK.medium;
  else if (subLevel === 3) questions = UNIFIED_QUESTION_BANK.hard;
  else return [];

  // 隨機選取題目
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 獲取關卡資訊
function getLevelInfo(subLevel) {
  const levelNames = {
    1: "比較級基礎",
    2: "比較級進階", 
    3: "比較級高級"
  };
  
  return {
    name: levelNames[subLevel] || "比較級",
    description: `學習比較級的用法，包含形容詞和副詞的比較形式。`
  };
}

// 獲取所有關卡
function getAllLevels() {
  return [1, 2, 3];
} 