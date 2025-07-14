// 文法塔統一題庫系統 - 第二關：be動詞否定句（多樣化題庫）
// 每個小關卡10題，難度逐關遞增

// 統一題庫 - 所有題目按難度分類（be動詞否定句）
const UNIFIED_QUESTION_BANK = {
  easy: [
        {
            question: "The students ___ in the classroom.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 The students 是複數，否定形式用 are not。（學生）",
            logicHint: "主詞 The students 是複數，後面要接什麼呢?",
            difficultWords: ["students", "classroom"]
        },
        {
            question: "The teacher ___ available today.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 The teacher 是單數，否定形式用 is not。（老師）",
            logicHint: "主詞 The teacher 是單數，後面要接什麼呢?",
            difficultWords: ["teacher", "available", "today"]
        },
        {
            question: "Those chairs ___ comfortable.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 Those chairs 是複數，否定形式用 are not。（椅子）",
            logicHint: "主詞 Those chairs 是複數，後面要接什麼呢?",
            difficultWords: ["those", "chairs", "comfortable"]
        },
        {
            question: "His answer ___ correct.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 His answer 是單數，否定形式用 is not。（答案）",
            logicHint: "主詞 His answer 是單數，後面要接什麼呢?",
            difficultWords: ["his", "answer", "correct"]
        },
        {
            question: "The books ___ interesting to read.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 The books 是複數，否定形式用 are not。（書籍）",
            logicHint: "主詞 The books 是複數，後面要接什麼呢?",
            difficultWords: ["books", "interesting", "read"]
        },
        {
            question: "Their plan ___ perfect.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 Their plan 是單數，否定形式用 is not。（計劃）",
            logicHint: "主詞 Their plan 是單數，後面要接什麼呢?",
            difficultWords: ["their", "plan", "perfect"]
        },
        {
            question: "Our neighbors ___ noisy.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 Our neighbors 是複數，否定形式用 are not。（鄰居）",
            logicHint: "主詞 Our neighbors 是複數，後面要接什麼呢?",
            difficultWords: ["our", "neighbors", "noisy"]
        },
        {
            question: "This lesson ___ boring.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 This lesson 是單數，否定形式用 is not。（課程）",
            logicHint: "主詞 This lesson 是單數，後面要接什麼呢?",
            difficultWords: ["this", "lesson", "boring"]
        },
        {
            question: "The apples ___ ripe.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 The apples 是複數，否定形式用 are not。（蘋果）",
            logicHint: "主詞 The apples 是複數，後面要接什麼呢?",
            difficultWords: ["apples", "ripe"]
        },
        {
            question: "That restaurant ___ expensive.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 That restaurant 是單數，否定形式用 is not。（餐廳）",
            logicHint: "主詞 That restaurant 是單數，後面要接什麼呢?",
            difficultWords: ["that", "restaurant", "expensive"]
        },
        {
            question: "These paintings ___ modern.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 These paintings 是複數，否定形式用 are not。（畫作）",
            logicHint: "主詞 These paintings 是複數，後面要接什麼呢?",
            difficultWords: ["these", "paintings", "modern"]
        },
        {
            question: "His explanation ___ clear.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 His explanation 是單數，否定形式用 is not。（解釋）",
            logicHint: "主詞 His explanation 是單數，後面要接什麼呢?",
            difficultWords: ["his", "explanation", "clear"]
        },
        {
            question: "My classmates ___ present today.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 My classmates 是複數，否定形式用 are not。（同學）",
            logicHint: "主詞 My classmates 是複數，後面要接什麼呢?",
            difficultWords: ["my", "classmates", "present"]
        },
        {
            question: "That shop ___ open now.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 That shop 是單數，否定形式用 is not。（商店）",
            logicHint: "主詞 That shop 是單數，後面要接什麼呢?",
            difficultWords: ["that", "shop", "open"]
        },
        {
            question: "These socks ___ clean.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 These socks 是複數，否定形式用 are not。（襪子）",
            logicHint: "主詞 These socks 是複數，後面要接什麼呢?",
            difficultWords: ["these", "socks", "clean"]
        },
        {
            question: "My phone ___ charged.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 My phone 是單數，否定形式用 is not。（手機）",
            logicHint: "主詞 My phone 是單數，後面要接什麼呢?",
            difficultWords: ["my", "phone", "charged"]
        },
        {
            question: "Their dogs ___ friendly.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 Their dogs 是複數，否定形式用 are not。（狗）",
            logicHint: "主詞 Their dogs 是複數，後面要接什麼呢?",
            difficultWords: ["their", "dogs", "friendly"]
        },
        {
            question: "The movie ___ boring.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 The movie 是單數，否定形式用 is not。（電影）",
            logicHint: "主詞 The movie 是單數，後面要接什麼呢?",
            difficultWords: ["movie", "boring"]
        },
        {
            question: "The girls ___ outside.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 The girls 是複數，否定形式用 are not。（女孩）",
            logicHint: "主詞 The girls 是複數，後面要接什麼呢?",
            difficultWords: ["girls", "outside"]
        },
        {
            question: "This subject ___ difficult.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 This subject 是單數，否定形式用 is not。（科目）",
            logicHint: "主詞 This subject 是單數，後面要接什麼呢?",
            difficultWords: ["this", "subject", "difficult"]
        }
  ],
  medium: [
        { question: "My parents ___ at work now.", options: ["am not", "is not", "are not", "be not"], correct: 2, explanation: "My parents 是複數，否定要用 are not。（父母）", logicHint: "主詞 My parents 是複數，後面要接什麼呢?", difficultWords: ["my", "parents", "work"] },
        { question: "The children ___ hungry.", options: ["am not", "is not", "are not", "be not"], correct: 2, explanation: "The children 是複數，否定要用 are not。（孩子）", logicHint: "主詞 The children 是複數，後面要接什麼呢?", difficultWords: ["children", "hungry"] },
        { question: "This soup ___ hot enough.", options: ["am not", "is not", "are not", "be not"], correct: 1, explanation: "This soup 是單數，否定要用 is not。（湯）", logicHint: "主詞 This soup 是單數，後面要接什麼呢?", difficultWords: ["this", "soup", "hot"] },
        { question: "We ___ ready for the test.", options: ["am not", "is not", "are not", "be not"], correct: 2, explanation: "We 是複數，否定要用 are not。（我們）", logicHint: "主詞 We 是複數，後面要接什麼呢?", difficultWords: ["ready", "test"] },
        { question: "The buses ___ on time today.", options: ["am not", "is not", "are not", "be not"], correct: 2, explanation: "The buses 是複數，否定要用 are not。（巴士）", logicHint: "複數名詞否定要用 are not。", difficultWords: ["buses", "time", "today"] },
        { question: "He ___ the team leader.", options: ["am not", "is not", "are not", "be not"], correct: 1, explanation: "He 是第三人稱單數，否定要用 is not。（他）", logicHint: "He 是第三人稱單數，否定要用 is not。", difficultWords: ["team", "leader"] },
        { question: "You ___ the only one here.", options: ["am not", "is not", "are not", "be not"], correct: 2, explanation: "You 是第二人稱，否定要用 are not。（你）", logicHint: "You 是第二人稱，否定要用 are not。", difficultWords: ["only", "one", "here"] },
        { question: "The movie ___ very exciting.", options: ["am not", "is not", "are not", "be not"], correct: 1, explanation: "The movie 是單數，否定要用 is not。（電影）", logicHint: "單數名詞否定要用 is not。", difficultWords: ["movie", "very", "exciting"] },
        { question: "We ___ from the same city.", options: ["am not", "is not", "are not", "be not"], correct: 2, explanation: "We 是複數，否定要用 are not。（我們）", logicHint: "We 是複數，否定要用 are not。", difficultWords: ["same", "city"] },
        { question: "It ___ a good idea.", options: ["am not", "is not", "are not", "be not"], correct: 1, explanation: "It 是第三人稱單數，否定要用 is not。（它）", logicHint: "It 是第三人稱單數，否定要用 is not。", difficultWords: ["good", "idea"] },
        {
            question: "The children ___ in the playground.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 The children 是複數，否定形式用 are not。（孩子）",
            logicHint: "主詞 The children 是複數，後面要接什麼呢?",
            difficultWords: ["children", "playground"]
        },
        {
            question: "Her advice ___ helpful.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 Her advice 是不可數名詞，否定形式用 is not。（建議）",
            logicHint: "主詞 Her advice 是單數，後面要接什麼呢?",
            difficultWords: ["advice", "helpful"]
        },
        {
            question: "These sandwiches ___ fresh.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 These sandwiches 是複數，否定形式用 are not。（三明治）",
            logicHint: "主詞 These sandwiches 是複數，後面要接什麼呢?",
            difficultWords: ["sandwiches", "fresh"]
        },
        {
            question: "The meeting ___ today.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 The meeting 是單數，否定形式用 is not。（會議）",
            logicHint: "主詞 The meeting 是單數，後面要接什麼呢?",
            difficultWords: ["meeting"]
        },
        {
            question: "My grandparents ___ at home.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 My grandparents 是複數，否定形式用 are not。（祖父母）",
            logicHint: "主詞 My grandparents 是複數，後面要接什麼呢?",
            difficultWords: ["grandparents", "home"]
        },
        {
            question: "The answer ___ obvious.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 The answer 是單數，否定形式用 is not。（答案）",
            logicHint: "主詞 The answer 是單數，後面要接什麼呢?",
            difficultWords: ["answer", "obvious"]
        },
        {
            question: "Those shoes ___ comfortable.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 Those shoes 是複數，否定形式用 are not。（鞋子）",
            logicHint: "主詞 Those shoes 是複數，後面要接什麼呢?",
            difficultWords: ["shoes", "comfortable"]
        },
        {
            question: "The soup ___ salty.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 The soup 是單數，否定形式用 is not。（湯）",
            logicHint: "主詞 The soup 是單數，後面要接什麼呢?",
            difficultWords: ["soup", "salty"]
        },
        {
            question: "My friends ___ interested in sports.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 2,
            explanation: "主詞 My friends 是複數，否定形式用 are not。（朋友）",
            logicHint: "主詞 My friends 是複數，後面要接什麼呢?",
            difficultWords: ["friends", "sports"]
        },
        {
            question: "The weather ___ nice today.",
            options: ["am not", "is not", "are not", "be not"],
            correct: 1,
            explanation: "主詞 The weather 是單數，否定形式用 is not。（天氣）",
            logicHint: "主詞 The weather 是單數，後面要接什麼呢?",
            difficultWords: ["weather", "nice"]
        }
  ],
  hard: [
        {
            "question": "News ___ reliable.",
            "options": ["am not", "is not", "are not", "be not"],
            "correct": 1,
            "explanation": "主詞 News 是單數，否定形式用 is not。（新聞）",
            "logicHint": "主詞 News 是單數，後面要接什麼呢?",
            "difficultWords": ["news", "reliable"]
          },
          {
            "question": "Mathematics ___ easy.",
            "options": ["am not", "is not", "are not", "be not"],
            "correct": 1,
            "explanation": "主詞 Mathematics 是單數學科名詞，否定形式用 is not。（數學）",
            "logicHint": "主詞 Mathematics 是單數，後面要接什麼呢?",
            "difficultWords": ["mathematics", "easy"]
          },
          {
            "question": "Physics ___ boring.",
            "options": ["am not", "is not", "are not", "be not"],
            "correct": 1,
            "explanation": "主詞 Physics 是單數學科名詞，否定形式用 is not。（物理）",
            "logicHint": "主詞 Physics 是單數，後面要接什麼呢?",
            "difficultWords": ["physics", "boring"]
          },
          {
            "question": "The data ___ accurate.",
            "options": ["am not", "is not", "are not", "be not"],
            "correct": 2,
            "explanation": "主詞 The data 是複數，否定形式用 are not。（資料、數據）",
            "logicHint": "主詞 The data 是複數，後面要接什麼呢?",
            "difficultWords": ["data", "accurate"]
          },
          {
            "question": "Scissors ___ sharp.",
            "options": ["am not", "is not", "are not", "be not"],
            "correct": 2,
            "explanation": "主詞 Scissors 是恆複數名詞，否定形式用 are not。（剪刀）",
            "logicHint": "主詞 Scissors 是複數，後面要接什麼呢?",
            "difficultWords": ["scissors", "sharp"]
          },
          {
            "question": "The information ___ complete.",
            "options": ["am not", "is not", "are not", "be not"],
            "correct": 1,
            "explanation": "主詞 The information 是不可數名詞，否定形式用 is not。（信息）",
            "logicHint": "主詞 The information 是單數，後面要接什麼呢?",
            "difficultWords": ["information", "complete"]
          },
          {
            "question": "Economics ___ predictable.",
            "options": ["am not", "is not", "are not", "be not"],
            "correct": 1,
            "explanation": "主詞 Economics 是單數學科名詞，否定形式用 is not。（經濟）",
            "logicHint": "主詞 Economics 是單數，後面要接什麼呢?",
            "difficultWords": ["economics", "predictable"]
          },
          {
            "question": "The criteria ___ met.",
            "options": ["am not", "is not", "are not", "be not"],
            "correct": 2,
            "explanation": "主詞 The criteria 是複數形式，否定形式用 are not。（標準）",
            "logicHint": "主詞 The criteria 是複數，後面要接什麼呢?",
            "difficultWords": ["criteria", "met"]
          },
          {
            "question": "Ethics ___ complicated.",
            "options": ["am not", "is not", "are not", "be not"],
            "correct": 1,
            "explanation": "主詞 Ethics 是單數學科名詞，否定形式用 is not。（倫理、道德學）",
            "logicHint": "主詞 Ethics 是單數，後面要接什麼呢?",
            "difficultWords": ["ethics", "complicated"]
          },
          {
            "question": "Politics ___ confusing.",
            "options": ["am not", "is not", "are not", "be not"],
            "correct": 1,
            "explanation": "主詞 Politics 是單數學科名詞，否定形式用 is not。（政治）",
            "logicHint": "主詞 Politics 是單數，後面要接什麼呢?",
            "difficultWords": ["politics", "confusing"]
          }
    ]
};

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "第一小關：基礎否定練習",
        description: "學習基本的be動詞否定句型",
        difficultyDistribution: {
            easy: 0.5,    // 50% 簡單
            medium: 0.2,  // 20% 容易
            hard: 0.3     // 30% 困難
        }
    },
    sub2: {
        name: "第二小關：進階否定練習", 
        description: "提升be動詞否定句的應用能力",
        difficultyDistribution: {
            easy: 0.3,    // 30% 簡單
            medium: 0.1,  // 10% 容易
            hard: 0.6     // 60% 困難 (增加30%)
        }
    },
    sub3: {
        name: "第三小關：挑戰否定練習",
        description: "掌握複雜的be動詞否定句用法",
        difficultyDistribution: {
            easy: 0.1,    // 10% 簡單
            medium: 0.1,  // 10% 容易
            hard: 0.8     // 80% 困難 (再增加20%)
        }
    }
};

// 困難單字詞典（be動詞否定句）
const DIFFICULT_WORDS = {
    "student": "學生",
    "teacher": "老師",
    "doctor": "醫生",
    "nurse": "護士",
    "engineer": "工程師",
    "driver": "司機",
    "cook": "廚師",
    "friend": "朋友",
    "beautiful": "美麗的",
    "smart": "聰明的",
    "tall": "高的",
    "interesting": "有趣的",
    "responsible": "負責任的",
    "complicated": "複雜的",
    "investigating": "調查中",
    "practicing": "練習中",
    "clapping": "拍手",
    "cheering": "歡呼",
    "mathematics": "數學",
    "politics": "政治",
    "committee": "委員會",
    "audience": "觀眾",
    "crowd": "人群",
    "staff": "員工",
    "police": "警察",
    "family": "家庭",
    "news": "新聞",
    "weather": "天氣",
    "flowers": "花朵",
    "excited": "興奮的",
    "classes": "課程",
    "season": "季節",
    "holidays": "假期",
    "tired": "疲倦的",
    "ready": "準備好的",
    "late": "遲到的",
    "coming": "來臨中",
    "bread": "麵包",
    "butter": "奶油",
    "breakfast": "早餐",
    "fish": "魚",
    "chips": "薯條",
    "food": "食物",
    "traffic": "交通",
    "problems": "問題",
    "work": "工作",
    "options": "選項",
    "available": "可用的",
    "plenty": "充足的",
    "great": "偉大的",
    "deal": "交易",
    "several": "幾個",
    "many": "許多",
    "some": "一些",
    "lot": "很多",
    "no": "沒有",
    "all": "全部",
    "each": "每個",
    "both": "兩個都",
    "remarkable": "卓越的",
    "skilled": "熟練的",
    "consistently": "持續地",
    "performer": "表演者",
    "vital": "重要的",
    "component": "組成部分",
    "survivors": "倖存者",
    "consequences": "後果",
    "undoubtedly": "無疑地",
    "candidate": "候選人",
    "investigator": "調查員",
    "challenging": "具有挑戰性的",
    "situation": "情況",
    "ultimate": "最終的",
    "decision-makers": "決策者",
    "completely": "完全地",
    "satisfied": "滿意的",
    "organizer": "組織者",
    "essentially": "本質上",
    "genuinely": "真誠地",
    "surprised": "驚訝的",
    "significantly": "顯著地",
    "improved": "進步的",
    "integral": "不可或缺的",
    "part": "部分",
    "process": "過程",
    "unparalleled": "無與倫比的",
    "achievements": "成就",
    "favorite": "最喜愛的",
    "subject": "科目",
    "case": "案件",
    "absolutely": "絕對地",
    "remarkably": "非常地",
    "talented": "有才華的",
    "chief": "首席的",
    "event": "活動",
    "correct": "正確的",
    "classmate": "同班同學",
    "guest": "客人",
    "sister": "姐妹",
    "early": "早的",
    "team captain": "隊長",
    "best player": "最佳球員",
    "trip": "旅行",
    "good friend": "好朋友",
    "leader": "領導者",
    "champion": "冠軍",
    "test": "測試",
    "spider": "蜘蛛",
    "winner": "獲勝者",
    "mission": "任務",
    "engine": "引擎",
    "manager": "經理",
    "system": "系統",
    "company": "公司",
    "english teacher": "英文老師",
    "help": "幫助",
    "principal": "校長",
    "laboratory": "實驗室",
    "volcano": "火山",
    "astronaut": "太空人",
    "recycle": "回收",
    "environment": "環境",
    "patient": "病人",
    "ambulance": "救護車",
    "microscope": "顯微鏡",
    "galaxy": "銀河",
    "paintings": "畫作",
    "modern": "現代的",
    "classroom": "教室",
    "perfect": "完美的",
    "noisy": "吵鬧的",
    "boring": "無聊的",
    "ripe": "成熟的",
    "expensive": "昂貴的",
    "present": "出席的",
    "open": "開著的",
    "clean": "乾淨的",
    "charged": "充電的",
    "friendly": "友善的",
    "outside": "外面的",
    "difficult": "困難的",
    "parents": "父母",
    "work": "工作",
    "children": "孩子",
    "hungry": "飢餓的",
    "soup": "湯",
    "hot": "熱的",
    "ready": "準備好的",
    "test": "測驗",
    "buses": "公車",
    "team leader": "隊長",
    "city": "城市",
    "idea": "主意",
    "playground": "操場",
    "advice": "建議",
    "helpful": "有幫助的",
    "sandwiches": "三明治",
    "fresh": "新鮮的",
    "meeting": "會議",
    "grandparents": "祖父母",
    "home": "家",
    "answer": "答案",
    "obvious": "明顯的",
    "shoes": "鞋子",
    "comfortable": "舒適的",
    "salty": "鹹的",
    "friends": "朋友",
    "sports": "運動",
    "weather": "天氣",
    "nice": "好的",
    "scissors": "剪刀",
    "sharp": "鋒利的",
    "physics": "物理",
    "lesson": "課程",
    "ethics": "倫理、道德學",
    "data": "資料、數據",
    "accurate": "精確的、準確的",
    "criteria": "標準、準則",
    "met": "符合、達到（meet的過去分詞）",
    "confusing": "令人困惑的"
};

// 檢查所有題目的 difficultWords 欄位，將未出現在 DIFFICULT_WORDS 詞典的單字自動加入，並標註中文為『待補』。

// 智能出題函數 - 根據關卡難度分配題目
function getRandomQuestions(subLevel, count = 10) {
    const config = LEVEL_CONFIG[subLevel];
    const distribution = config.difficultyDistribution;
    
    let selectedQuestions = [];
    
    // 計算每個難度的題目數量
    const easyCount = Math.floor(count * distribution.easy);
    const mediumCount = Math.floor(count * distribution.medium);
    const hardCount = count - easyCount - mediumCount; // 剩餘的給困難題目
    
    // 從簡單題目中隨機選擇
    if (easyCount > 0 && UNIFIED_QUESTION_BANK.easy.length > 0) {
        const shuffledEasy = [...UNIFIED_QUESTION_BANK.easy].sort(() => Math.random() - 0.5);
        selectedQuestions.push(...shuffledEasy.slice(0, easyCount));
    }
    
    // 從中等題目中隨機選擇
    if (mediumCount > 0 && UNIFIED_QUESTION_BANK.medium.length > 0) {
        const shuffledMedium = [...UNIFIED_QUESTION_BANK.medium].sort(() => Math.random() - 0.5);
        selectedQuestions.push(...shuffledMedium.slice(0, mediumCount));
    }
    
    // 從困難題目中隨機選擇
    if (hardCount > 0 && UNIFIED_QUESTION_BANK.hard.length > 0) {
        const shuffledHard = [...UNIFIED_QUESTION_BANK.hard].sort(() => Math.random() - 0.5);
        selectedQuestions.push(...shuffledHard.slice(0, hardCount));
    }
    
    // 如果某個難度的題目不夠，從其他難度補充
    if (selectedQuestions.length < count) {
        const remainingCount = count - selectedQuestions.length;
        const allQuestions = [
            ...UNIFIED_QUESTION_BANK.easy,
            ...UNIFIED_QUESTION_BANK.medium,
            ...UNIFIED_QUESTION_BANK.hard
        ];
        
        // 過濾掉已經選中的題目
        const availableQuestions = allQuestions.filter(q => 
            !selectedQuestions.some(selected => selected.question === q.question)
        );
        
        if (availableQuestions.length > 0) {
            const shuffledAvailable = availableQuestions.sort(() => Math.random() - 0.5);
            selectedQuestions.push(...shuffledAvailable.slice(0, remainingCount));
        }
    }
    
    // 最終隨機打亂所有選中的題目
    return selectedQuestions.sort(() => Math.random() - 0.5);
}

// 獲取關卡信息
function getLevelInfo(subLevel) {
    return LEVEL_CONFIG[subLevel] || null;
}

// 獲取所有關卡信息
function getAllLevels() {
    return LEVEL_CONFIG;
}

// 匯出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        UNIFIED_QUESTION_BANK, 
        LEVEL_CONFIG, 
        getRandomQuestions,
        getLevelInfo,
        getAllLevels
    };
} 