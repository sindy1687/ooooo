// 文法塔統一題庫系統 - 第六關：一般動詞現在式否定句（多樣化題庫）
// 每個小關卡10題，難度逐關遞增，主詞多樣化，包含所有格加名詞

// 統一題庫 - 所有題目按難度分類（一般動詞現在式否定句）
const UNIFIED_QUESTION_BANK = {
  easy: [
        {
            question: "The students ___ English every day.",
            options: ["don't study", "doesn't study", "not study", "not studies"],
            correct: 0,
            explanation: "主詞 The students 是複數，否定句用 don't + 原形動詞 don't study。（學生們不是每天學英文。）",
            logicHint: "主詞 The students 是複數，否定句要用什麼呢?",
            difficultWords: ["students", "English", "every"]
        },
        {
            question: "My brother ___ basketball on weekends.",
            options: ["don't play", "doesn't play", "not play", "not plays"],
            correct: 1,
            explanation: "主詞 My brother 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't play。（我哥哥週末不打籃球。）",
            logicHint: "主詞 My brother 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["brother", "basketball", "weekends"]
        },
        {
            question: "Your sister ___ to music.",
            options: ["don't listen", "doesn't listen", "not listen", "not listens"],
            correct: 1,
            explanation: "主詞 Your sister 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't listen。（你妹妹不聽音樂。）",
            logicHint: "主詞 Your sister 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["sister", "music"]
        },
        {
            question: "The children ___ in the park.",
            options: ["don't run", "doesn't run", "not run", "not runs"],
            correct: 0,
            explanation: "主詞 The children 是複數，否定句用 don't + 原形動詞 don't run。（孩子們不在公園跑步。）",
            logicHint: "主詞 The children 是複數，否定句要用什麼呢?",
            difficultWords: ["children", "park"]
        },
        {
            question: "That teacher ___ math very well.",
            options: ["don't teach", "doesn't teach", "not teach", "not teaches"],
            correct: 1,
            explanation: "主詞 That teacher 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't teach。（那位老師數學教得不好。）",
            logicHint: "主詞 That teacher 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["teacher", "math", "well"]
        },
        {
            question: "Her mother ___ dinner every evening.",
            options: ["don't cook", "doesn't cook", "not cook", "not cooks"],
            correct: 1,
            explanation: "主詞 Her mother 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't cook。（她媽媽不是每天晚上煮晚餐。）",
            logicHint: "主詞 Her mother 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["mother", "dinner", "evening"]
        },
        {
            question: "The birds ___ in the morning.",
            options: ["don't sing", "doesn't sing", "not sing", "not sings"],
            correct: 0,
            explanation: "主詞 The birds 是複數，否定句用 don't + 原形動詞 don't sing。（鳥兒在早上不唱歌。）",
            logicHint: "主詞 The birds 是複數，否定句要用什麼呢?",
            difficultWords: ["birds", "morning"]
        },
        {
            question: "This cat ___ fish.",
            options: ["don't like", "doesn't like", "not like", "not likes"],
            correct: 1,
            explanation: "主詞 This cat 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't like。（這隻貓不喜歡魚。）",
            logicHint: "主詞 This cat 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["cat", "fish"]
        },
        {
            question: "The dogs ___ in the garden.",
            options: ["don't sleep", "doesn't sleep", "not sleep", "not sleeps"],
            correct: 0,
            explanation: "主詞 The dogs 是複數，否定句用 don't + 原形動詞 don't sleep。（狗不在花園裡睡覺。）",
            logicHint: "主詞 The dogs 是複數，否定句要用什麼呢?",
            difficultWords: ["dogs", "garden"]
        },
        {
            question: "Their father ___ the newspaper every morning.",
            options: ["don't read", "doesn't read", "not read", "not reads"],
            correct: 1,
            explanation: "主詞 Their father 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't read。（他們的爸爸不是每天早上看報紙。）",
            logicHint: "主詞 Their father 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["father", "newspaper", "morning"]
        }
  ],
  medium: [
        {
            question: "The workers ___ hard every day.",
            options: ["don't work", "doesn't work", "not work", "not works"],
            correct: 0,
            explanation: "主詞 The workers 是複數，否定句用 don't + 原形動詞 don't work。（工人們不是每天努力工作。）",
            logicHint: "主詞 The workers 是複數，否定句要用什麼呢?",
            difficultWords: ["workers", "hard"]
        },
        {
            question: "That doctor ___ patients in the hospital.",
            options: ["don't treat", "doesn't treat", "not treat", "not treats"],
            correct: 1,
            explanation: "主詞 That doctor 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't treat。（那位醫生不在醫院治療病人。）",
            logicHint: "主詞 That doctor 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["doctor", "patients", "hospital"]
        },
        {
            question: "Your uncle ___ in a big company.",
            options: ["don't work", "doesn't work", "not work", "not works"],
            correct: 1,
            explanation: "主詞 Your uncle 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't work。（你叔叔不在大公司工作。）",
            logicHint: "主詞 Your uncle 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["uncle", "company"]
        },
        {
            question: "The computers ___ quickly.",
            options: ["don't process", "doesn't process", "not process", "not processes"],
            correct: 0,
            explanation: "主詞 The computers 是複數，否定句用 don't + 原形動詞 don't process。（電腦不快速處理。）",
            logicHint: "主詞 The computers 是複數，否定句要用什麼呢?",
            difficultWords: ["computers", "quickly"]
        },
        {
            question: "Her grandmother ___ stories to children.",
            options: ["don't tell", "doesn't tell", "not tell", "not tells"],
            correct: 1,
            explanation: "主詞 Her grandmother 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't tell。（她奶奶不給孩子們講故事。）",
            logicHint: "主詞 Her grandmother 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["grandmother", "stories", "children"]
        },
        {
            question: "The buses ___ on time.",
            options: ["don't arrive", "doesn't arrive", "not arrive", "not arrives"],
            correct: 0,
            explanation: "主詞 The buses 是複數，否定句用 don't + 原形動詞 don't arrive。（巴士不準時到達。）",
            logicHint: "主詞 The buses 是複數，否定句要用什麼呢?",
            difficultWords: ["buses", "arrive", "time"]
        },
        {
            question: "This restaurant ___ delicious food.",
            options: ["don't serve", "doesn't serve", "not serve", "not serves"],
            correct: 1,
            explanation: "主詞 This restaurant 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't serve。（這家餐廳不提供美味的食物。）",
            logicHint: "主詞 This restaurant 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["restaurant", "delicious", "food"]
        },
        {
            question: "The students ___ their homework.",
            options: ["don't complete", "doesn't complete", "not complete", "not completes"],
            correct: 0,
            explanation: "主詞 The students 是複數，否定句用 don't + 原形動詞 don't complete。（學生們不完成他們的作業。）",
            logicHint: "主詞 The students 是複數，否定句要用什麼呢?",
            difficultWords: ["students", "homework"]
        },
        {
            question: "Your aunt ___ delicious cookies.",
            options: ["don't bake", "doesn't bake", "not bake", "not bakes"],
            correct: 1,
            explanation: "主詞 Your aunt 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't bake。（你阿姨不烤美味的餅乾。）",
            logicHint: "主詞 Your aunt 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["aunt", "delicious", "cookies"]
        },
        {
            question: "The trees ___ in autumn.",
            options: ["don't change", "doesn't change", "not change", "not changes"],
            correct: 0,
            explanation: "主詞 The trees 是複數，否定句用 don't + 原形動詞 don't change。（樹在秋天不變色。）",
            logicHint: "主詞 The trees 是複數，否定句要用什麼呢?",
            difficultWords: ["trees", "autumn"]
        },
        {
            question: "That engineer ___ new projects.",
            options: ["don't design", "doesn't design", "not design", "not designs"],
            correct: 1,
            explanation: "主詞 That engineer 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't design。（那位工程師不設計新專案。）",
            logicHint: "主詞 That engineer 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["engineer", "projects"]
        },
        {
            question: "The teachers ___ lessons carefully.",
            options: ["don't prepare", "doesn't prepare", "not prepare", "not prepares"],
            correct: 0,
            explanation: "主詞 The teachers 是複數，否定句用 don't + 原形動詞 don't prepare。（老師們不仔細準備課程。）",
            logicHint: "主詞 The teachers 是複數，否定句要用什麼呢?",
            difficultWords: ["teachers", "lessons", "carefully"]
        },
        {
            question: "Her cousin ___ music at school.",
            options: ["don't study", "doesn't study", "not study", "not studies"],
            correct: 1,
            explanation: "主詞 Her cousin 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't study。（她表妹不在學校學音樂。）",
            logicHint: "主詞 Her cousin 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["cousin", "music", "school"]
        },
        {
            question: "The cars ___ on the highway.",
            options: ["don't drive", "doesn't drive", "not drive", "not drives"],
            correct: 0,
            explanation: "主詞 The cars 是複數，否定句用 don't + 原形動詞 don't drive。（車子不在高速公路上行駛。）",
            logicHint: "主詞 The cars 是複數，否定句要用什麼呢?",
            difficultWords: ["cars", "highway"]
        },
        {
            question: "This library ___ many books.",
            options: ["don't contain", "doesn't contain", "not contain", "not contains"],
            correct: 1,
            explanation: "主詞 This library 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't contain。（這間圖書館不包含很多書。）",
            logicHint: "主詞 This library 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["library", "books"]
        },
        {
            question: "The farmers ___ vegetables in the field.",
            options: ["don't grow", "doesn't grow", "not grow", "not grows"],
            correct: 0,
            explanation: "主詞 The farmers 是複數，否定句用 don't + 原形動詞 don't grow。（農夫不在田裡種蔬菜。）",
            logicHint: "主詞 The farmers 是複數，否定句要用什麼呢?",
            difficultWords: ["farmers", "vegetables", "field"]
        },
        {
            question: "The police officers ___ the community.",
            options: ["don't protect", "doesn't protect", "not protect", "not protects"],
            correct: 0,
            explanation: "主詞 The police officers 是複數，否定句用 don't + 原形動詞 don't protect。（警察不保護社區。）",
            logicHint: "主詞 The police officers 是複數，否定句要用什麼呢?",
            difficultWords: ["police", "officers", "community"]
        },
        {
            question: "That artist ___ beautiful paintings.",
            options: ["don't create", "doesn't create", "not create", "not creates"],
            correct: 1,
            explanation: "主詞 That artist 是第三人稱單數，否定句用 doesn't + 原形動詞 doesn't create。（那位藝術家不創作美麗的畫作。）",
            logicHint: "主詞 That artist 是第三人稱單數，否定句要用什麼呢?",
            difficultWords: ["artist", "paintings"]
        },
        {
            question: "The nurses ___ patients in the hospital.",
            options: ["don't care", "doesn't care", "not care", "not cares"],
            correct: 0,
            explanation: "主詞 The nurses 是複數，否定句用 don't + 原形動詞 don't care。（護士不在醫院照顧病人。）",
            logicHint: "主詞 The nurses 是複數，否定句要用什麼呢?",
            difficultWords: ["nurses", "patients", "hospital"]
        },
        {
            question: "The firefighters ___ people in danger.",
            options: ["don't save", "doesn't save", "not save", "not saves"],
            correct: 0,
            explanation: "主詞 The firefighters 是複數，否定句用 don't + 原形動詞 don't save。（消防員不拯救處於危險中的人。）",
            logicHint: "主詞 The firefighters 是複數，否定句要用什麼呢?",
            difficultWords: ["firefighters", "danger"]
        }
  ],
  hard: [
        {
            question: "The information ___ clearly in the report.",
            options: ["don't appear", "doesn't appear", "not appear", "not appears"],
            correct: 1,
            explanation: "主詞 The information 是不可數名詞，否定句用 doesn't + 原形動詞 doesn't appear。（資訊在報告中不清楚呈現。）",
            logicHint: "主詞 The information 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["information", "clearly", "report"]
        },
        {
            question: "The news ___ around the world quickly.",
            options: ["don't spread", "doesn't spread", "not spread", "not spreads"],
            correct: 1,
            explanation: "主詞 The news 是不可數名詞，否定句用 doesn't + 原形動詞 doesn't spread。（新聞不快速傳播到世界各地。）",
            logicHint: "主詞 The news 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["news", "around", "quickly"]
        },
        {
            question: "The scissors ___ paper easily.",
            options: ["don't cut", "doesn't cut", "not cut", "not cuts"],
            correct: 1,
            explanation: "主詞 The scissors 是複數概念，但否定句用 doesn't + 原形動詞 doesn't cut。（剪刀不容易剪紙。）",
            logicHint: "主詞 The scissors 是複數概念，但否定句要用什麼呢?",
            difficultWords: ["scissors", "easily"]
        },
        {
            question: "The advice ___ helpful for students.",
            options: ["don't prove", "doesn't prove", "not prove", "not proves"],
            correct: 1,
            explanation: "主詞 The advice 是不可數名詞，否定句用 doesn't + 原形動詞 doesn't prove。（建議對學生沒有幫助。）",
            logicHint: "主詞 The advice 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["advice", "helpful", "students"]
        },
        {
            question: "The glasses ___ light properly.",
            options: ["don't reflect", "doesn't reflect", "not reflect", "not reflects"],
            correct: 1,
            explanation: "主詞 The glasses 是複數概念，但否定句用 doesn't + 原形動詞 doesn't reflect。（眼鏡不正確反射光線。）",
            logicHint: "主詞 The glasses 是複數概念，但否定句要用什麼呢?",
            difficultWords: ["glasses", "light", "properly"]
        },
        {
            question: "The luggage ___ heavy to carry.",
            options: ["don't feel", "doesn't feel", "not feel", "not feels"],
            correct: 1,
            explanation: "主詞 The luggage 是不可數名詞，否定句用 doesn't + 原形動詞 doesn't feel。（行李感覺不重。）",
            logicHint: "主詞 The luggage 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["luggage", "heavy", "carry"]
        },
        {
            question: "The trousers ___ comfortable to wear.",
            options: ["don't look", "doesn't look", "not look", "not looks"],
            correct: 0,
            explanation: "主詞 The trousers 是複數名詞，否定句用 don't + 原形動詞 don't look。（褲子看起來不舒適。）",
            logicHint: "主詞 The trousers 是複數名詞，否定句要用什麼呢?",
            difficultWords: ["trousers", "comfortable", "wear"]
        },
        {
            question: "The equipment ___ ready for use.",
            options: ["don't stand", "doesn't stand", "not stand", "not stands"],
            correct: 1,
            explanation: "主詞 The equipment 是不可數名詞，否定句用 doesn't + 原形動詞 doesn't stand。（設備不準備好可以使用。）",
            logicHint: "主詞 The equipment 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["equipment", "ready", "use"]
        },
        {
            question: "The stairs ___ safe to climb.",
            options: ["don't seem", "doesn't seem", "not seem", "not seems"],
            correct: 0,
            explanation: "主詞 The stairs 是複數名詞，否定句用 don't + 原形動詞 don't seem。（樓梯看起來不安全。）",
            logicHint: "主詞 The stairs 是複數名詞，否定句要用什麼呢?",
            difficultWords: ["stairs", "safe", "climb"]
        },
        {
            question: "The knowledge ___ useful for the job.",
            options: ["don't become", "doesn't become", "not become", "not becomes"],
            correct: 1,
            explanation: "主詞 The knowledge 是不可數名詞，否定句用 doesn't + 原形動詞 doesn't become。（知識對工作不變得有用。）",
            logicHint: "主詞 The knowledge 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["knowledge", "useful", "job"]
        },
        {
            question: "The jeans ___ expensive to buy.",
            options: ["don't cost", "doesn't cost", "not cost", "not costs"],
            correct: 0,
            explanation: "主詞 The jeans 是複數名詞，否定句用 don't + 原形動詞 don't cost。（牛仔褲買起來不貴。）",
            logicHint: "主詞 The jeans 是複數名詞，否定句要用什麼呢?",
            difficultWords: ["jeans", "expensive", "buy"]
        },
        {
            question: "The research ___ complete for the report.",
            options: ["don't remain", "doesn't remain", "not remain", "not remains"],
            correct: 1,
            explanation: "主詞 The research 是不可數名詞，否定句用 doesn't + 原形動詞 doesn't remain。（研究對報告不保持完整。）",
            logicHint: "主詞 The research 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["research", "complete", "report"]
        },
        {
            question: "The headphones ___ properly during use.",
            options: ["don't function", "doesn't function", "not function", "not functions"],
            correct: 0,
            explanation: "主詞 The headphones 是複數名詞，否定句用 don't + 原形動詞 don't function。（耳機在使用時不正常運作。）",
            logicHint: "主詞 The headphones 是複數名詞，否定句要用什麼呢?",
            difficultWords: ["headphones", "properly", "during"]
        },
        {
            question: "The evidence ___ clear enough to prove.",
            options: ["don't show", "doesn't show", "not show", "not shows"],
            correct: 1,
            explanation: "主詞 The evidence 是不可數名詞，否定句用 doesn't + 原形動詞 doesn't show。（證據不清楚到能證明。）",
            logicHint: "主詞 The evidence 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["evidence", "clear", "prove"]
        },
        {
            question: "The sunglasses ___ cool to wear.",
            options: ["don't make", "doesn't make", "not make", "not makes"],
            correct: 0,
            explanation: "主詞 The sunglasses 是複數名詞，否定句用 don't + 原形動詞 don't make。（太陽眼鏡戴起來不酷。）",
            logicHint: "主詞 The sunglasses 是複數名詞，否定句要用什麼呢?",
            difficultWords: ["sunglasses", "cool", "wear"]
        },
        {
            question: "The progress ___ good enough to continue.",
            options: ["don't stay", "doesn't stay", "not stay", "not stays"],
            correct: 1,
            explanation: "主詞 The progress 是不可數名詞，否定句用 doesn't + 原形動詞 doesn't stay。（進度不好到能繼續。）",
            logicHint: "主詞 The progress 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["progress", "good", "continue"]
        },
        {
            question: "The binoculars ___ powerful enough to see.",
            options: ["don't help", "doesn't help", "not help", "not helps"],
            correct: 0,
            explanation: "主詞 The binoculars 是複數名詞，否定句用 don't + 原形動詞 don't help。（望遠鏡不強到能看見。）",
            logicHint: "主詞 The binoculars 是複數名詞，否定句要用什麼呢?",
            difficultWords: ["binoculars", "powerful", "see"]
        },
        {
            question: "The software ___ reliable for daily use.",
            options: ["don't perform", "doesn't perform", "not perform", "not performs"],
            correct: 1,
            explanation: "主詞 The software 是不可數名詞，否定句用 doesn't + 原形動詞 doesn't perform。（軟體不可靠到能日常使用。）",
            logicHint: "主詞 The software 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["software", "reliable", "daily"]
        },
        {
            question: "The people ___ friendly to visitors.",
            options: ["don't act", "doesn't act", "not act", "not acts"],
            correct: 0,
            explanation: "主詞 The people 是複數名詞，否定句用 don't + 原形動詞 don't act。（人們對訪客不友善。）",
            logicHint: "主詞 The people 是複數名詞，否定句要用什麼呢?",
            difficultWords: ["people", "friendly", "visitors"]
        },
        {
            question: "The furniture ___ comfortable to sit on.",
            options: ["don't provide", "doesn't provide", "not provide", "not provides"],
            correct: 1,
            explanation: "主詞 The furniture 是不可數名詞，否定句用 doesn't + 原形動詞 doesn't provide。（家具不提供舒適的坐感。）",
            logicHint: "主詞 The furniture 是不可數名詞，否定句要用什麼呢?",
            difficultWords: ["furniture", "comfortable", "sit"]
        },
        {
            question: "The police ___ the community safely.",
            options: ["don't serve", "doesn't serve", "not serve", "not serves"],
            correct: 0,
            explanation: "主詞 The police 是複數名詞，否定句用 don't + 原形動詞 don't serve。（警察不安全地服務社區。）",
            logicHint: "主詞 The police 是複數名詞，否定句要用什麼呢?",
            difficultWords: ["police", "community", "safely"]
        }
  ]
};

// 困難單字詞典
const DIFFICULT_WORDS = {
    "students": "學生們",
    "English": "英文",
    "every": "每個",
    "brother": "兄弟",
    "basketball": "籃球",
    "weekends": "週末",
    "sister": "姐妹",
    "music": "音樂",
    "children": "孩子們",
    "park": "公園",
    "teacher": "老師",
    "math": "數學",
    "well": "好地",
    "mother": "媽媽",
    "dinner": "晚餐",
    "evening": "晚上",
    "birds": "鳥",
    "morning": "早上",
    "cat": "貓",
    "fish": "魚",
    "dogs": "狗",
    "garden": "花園",
    "father": "爸爸",
    "newspaper": "報紙",
    "workers": "工人",
    "hard": "努力地",
    "doctor": "醫生",
    "patients": "病人",
    "hospital": "醫院",
    "uncle": "叔叔",
    "company": "公司",
    "computers": "電腦",
    "quickly": "快速地",
    "grandmother": "奶奶",
    "stories": "故事",
    "buses": "巴士",
    "arrive": "到達",
    "time": "時間",
    "restaurant": "餐廳",
    "delicious": "美味的",
    "food": "食物",
    "homework": "作業",
    "aunt": "阿姨",
    "cookies": "餅乾",
    "trees": "樹",
    "autumn": "秋天",
    "engineer": "工程師",
    "projects": "專案",
    "teachers": "老師們",
    "lessons": "課程",
    "carefully": "仔細地",
    "cousin": "表妹",
    "school": "學校",
    "cars": "車子",
    "highway": "高速公路",
    "library": "圖書館",
    "books": "書",
    "farmers": "農夫",
    "vegetables": "蔬菜",
    "field": "田地",
    "police": "警察",
    "officers": "官員",
    "community": "社區",
    "artist": "藝術家",
    "paintings": "畫作",
    "nurses": "護士",
    "firefighters": "消防員",
    "danger": "危險",
    "information": "資訊",
    "clearly": "清楚地",
    "report": "報告",
    "news": "新聞",
    "around": "圍繞",
    "scissors": "剪刀",
    "easily": "容易地",
    "advice": "建議",
    "helpful": "有幫助的",
    "glasses": "眼鏡",
    "light": "光線",
    "properly": "正確地",
    "luggage": "行李",
    "heavy": "重的",
    "carry": "攜帶",
    "trousers": "褲子",
    "comfortable": "舒適的",
    "wear": "穿",
    "equipment": "設備",
    "ready": "準備好的",
    "use": "使用",
    "stairs": "樓梯",
    "safe": "安全的",
    "climb": "爬",
    "knowledge": "知識",
    "useful": "有用的",
    "job": "工作",
    "jeans": "牛仔褲",
    "expensive": "貴的",
    "buy": "買",
    "research": "研究",
    "complete": "完整的",
    "headphones": "耳機",
    "during": "在...期間",
    "evidence": "證據",
    "clear": "清楚的",
    "prove": "證明",
    "sunglasses": "太陽眼鏡",
    "cool": "酷的",
    "progress": "進度",
    "good": "好的",
    "continue": "繼續",
    "binoculars": "望遠鏡",
    "powerful": "強力的",
    "see": "看見",
    "software": "軟體",
    "reliable": "可靠的",
    "daily": "日常的",
    "people": "人們",
    "friendly": "友善的",
    "visitors": "訪客",
    "furniture": "家具",
    "sit": "坐",
    "serve": "服務",
    "safely": "安全地"
};

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索一般動詞現在式否定句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的否定句型",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的否定句挑戰",
        difficulty: "hard"
    }
};

// 隨機選擇題目函數
function getRandomQuestions(subLevel, count = 10) {
    const levelConfig = LEVEL_CONFIG[subLevel];
    if (!levelConfig) {
        console.error(`未知的關卡: ${subLevel}`);
        return [];
    }
    
    const questions = UNIFIED_QUESTION_BANK[levelConfig.difficulty];
    if (!questions || questions.length === 0) {
        console.error(`沒有找到 ${levelConfig.difficulty} 難度的題目`);
        return [];
    }
    
    // 隨機選擇題目
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 獲取關卡資訊
function getLevelInfo(subLevel) {
    return LEVEL_CONFIG[subLevel] || null;
}

// 獲取所有關卡
function getAllLevels() {
    return Object.keys(LEVEL_CONFIG);
}

// 導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        UNIFIED_QUESTION_BANK,
        DIFFICULT_WORDS,
        LEVEL_CONFIG,
        getRandomQuestions,
        getLevelInfo,
        getAllLevels
    };
} 