// 文法塔統一題庫系統 - 第五關：一般動詞現在式肯定句（多樣化題庫）
// 每個小關卡10題，難度逐關遞增，主詞多樣化

// 統一題庫 - 所有題目按難度分類（一般動詞現在式肯定句）
const UNIFIED_QUESTION_BANK = {
  easy: [
        {
            question: "The students ___ English every day.",
            options: ["study", "studies", "studying", "studied"],
            correct: 0,
            explanation: "主詞 The students 是複數，一般動詞現在式用原形 study。（學生們每天學英文。）",
            logicHint: "主詞 The students 是複數，一般動詞現在式要用什麼呢?",
            difficultWords: ["students", "English", "every"]
        },
        {
            question: "My brother ___ basketball on weekends.",
            options: ["play", "plays", "playing", "played"],
            correct: 1,
            explanation: "主詞 My brother 是第三人稱單數，一般動詞現在式要加s plays。（我哥哥週末打籃球。）",
            logicHint: "主詞 My brother 是第三人稱單數，一般動詞現在式要用什麼呢?",
            difficultWords: ["brother", "basketball", "weekends"]
        },
        {
            question: "The children ___ in the park.",
            options: ["run", "runs", "running", "ran"],
            correct: 0,
            explanation: "主詞 The children 是複數，一般動詞現在式用原形 run。（孩子們在公園跑步。）",
            logicHint: "主詞 The children 是複數，一般動詞現在式要用什麼呢?",
            difficultWords: ["children", "park"]
        },
        {
            question: "That teacher ___ math very well.",
            options: ["teach", "teaches", "teaching", "taught"],
            correct: 1,
            explanation: "主詞 That teacher 是第三人稱單數，一般動詞現在式要加es teaches。（那位老師數學教得很好。）",
            logicHint: "主詞 That teacher 是第三人稱單數，一般動詞現在式要用什麼呢?",
            difficultWords: ["teacher", "math", "well"]
        },
        {
            question: "The birds ___ in the morning.",
            options: ["sing", "sings", "singing", "sang"],
            correct: 0,
            explanation: "主詞 The birds 是複數，一般動詞現在式用原形 sing。（鳥兒在早上唱歌。）",
            logicHint: "主詞 The birds 是複數，一般動詞現在式要用什麼呢?",
            difficultWords: ["birds", "morning"]
        },
        {
            question: "Your sister ___ to music.",
            options: ["listen", "listens", "listening", "listened"],
            correct: 1,
            explanation: "主詞 Your sister 是第三人稱單數，一般動詞現在式要加s listens。（你妹妹聽音樂。）",
            logicHint: "主詞 Your sister 是第三人稱單數，一般動詞現在式要用什麼呢?",
            difficultWords: ["sister", "music"]
        },
        {
            question: "The dogs ___ in the garden.",
            options: ["sleep", "sleeps", "sleeping", "slept"],
            correct: 0,
            explanation: "主詞 The dogs 是複數，一般動詞現在式用原形 sleep。（狗在花園裡睡覺。）",
            logicHint: "主詞 The dogs 是複數，一般動詞現在式要用什麼呢?",
            difficultWords: ["dogs", "garden"]
        },
        {
            question: "This cat ___ fish.",
            options: ["like", "likes", "liking", "liked"],
            correct: 1,
            explanation: "主詞 This cat 是第三人稱單數，一般動詞現在式要加s likes。（這隻貓喜歡魚。）",
            logicHint: "主詞 This cat 是第三人稱單數，一般動詞現在式要用什麼呢?",
            difficultWords: ["cat", "fish"]
        },
        {
            question: "The flowers ___ in spring.",
            options: ["bloom", "blooms", "blooming", "bloomed"],
            correct: 0,
            explanation: "主詞 The flowers 是複數，一般動詞現在式用原形 bloom。（花在春天綻放。）",
            logicHint: "主詞 The flowers 是複數，一般動詞現在式要用什麼呢?",
            difficultWords: ["flowers", "spring"]
        },
        {
            question: "Her mother ___ dinner every evening.",
            options: ["cook", "cooks", "cooking", "cooked"],
            correct: 1,
            explanation: "主詞 Her mother 是第三人稱單數，一般動詞現在式要加s cooks。（她媽媽每天晚上煮晚餐。）",
            logicHint: "主詞 Her mother 是第三人稱單數，一般動詞現在式要用什麼呢?",
            difficultWords: ["mother", "dinner", "evening"]
        },
        {
            question: "The student from Class 3A ____s basketball every day.",
            options: ["play", "played", "plays", "playing"],
            correct: 0,
            explanation: "主詞是 I，動詞要用原形 play。",
            logicHint: "I 是我，我要做什麼呢？",
            difficultWords: ["every", "plays"]
        },
        {
            question: "The girl with curly hair ____ beautifully.",
            options: ["singing", "sing", "sings", "sang"],
            correct: 2,
            explanation: "She 是第三人稱單數，動詞要加 -s。",
            logicHint: "She 是單數，要做什麼呢？",
            difficultWords: ["beautifully", "curly", "sings"]
        },
        {
            question: "My cousins and their friends ____ lunch at noon.",
            options: ["ate", "eats", "eating", "eat"],
            correct: 3,
            explanation: "They 是複數，動詞用原形。",
            logicHint: "They 是複數，要做什麼呢？",
            difficultWords: ["cousins", "friends", "noon"]
        },
        {
            question: "The boy wearing a red shirt ____ fast.",
            options: ["ran", "runs", "run", "running"],
            correct: 1,
            explanation: "He 是第三人稱單數，動詞要加 -s。",
            logicHint: "He 是單數，要做什麼呢？",
            difficultWords: ["runs", "wearing"]
        },
        {
            question: "My classmates and I ____ apples.",
            options: ["like", "liked", "liking", "likes"],
            correct: 0,
            explanation: "We 是複數主詞，動詞用原形 like。",
            logicHint: "We 是複數，要做什麼呢？",
            difficultWords: ["apples", "classmates"]
        },
        {
            question: "The small black cat with green eyes ____ on the bed.",
            options: ["jump", "jumps", "jumping", "jumped"],
            correct: 1,
            explanation: "The cat 是單數，動詞加 -s。",
            logicHint: "名字是單數，要做什麼呢？",
            difficultWords: ["green", "jumps"]
        },
        {
            question: "You and your sister ____ water every morning.",
            options: ["drink", "drinks", "drinking", "drank"],
            correct: 0,
            explanation: "You 動詞用原形 drink。",
            logicHint: "You 是你，你要做什麼呢？",
            difficultWords: ["every", "sister"]
        },
        {
            question: "My hardworking mother ____ dinner.",
            options: ["cook", "cooks", "cooking", "cooked"],
            correct: 1,
            explanation: "My mom 是單數，動詞加 -s。",
            logicHint: "名字是單數，要做什麼呢？",
            difficultWords: ["cooks", "hardworking"]
        },
        {
            question: "Tom, the new neighbor, ____ TV at night.",
            options: ["watch", "watches", "watching", "watched"],
            correct: 1,
            explanation: "Tom 是單數，watch 要變 watches。",
            logicHint: "名字是單數，要做什麼呢？",
            difficultWords: ["neighbor", "watches"]
        },
        {
            question: "The dogs in the park ____ loudly.",
            options: ["bark", "barks", "barking", "barked"],
            correct: 0,
            explanation: "Dogs 是複數，動詞用原形 bark。",
            logicHint: "主詞是複數還是單數呢？該怎麼選？",
            difficultWords: ["loudly"]
        },
        {
            question: "The quiet girl in the library ____ a book every night.",
            options: ["read", "reads", "reading", "readed"],
            correct: 1,
            explanation: "She 是第三人稱單數，要加 -s。",
            logicHint: "She 是單數，要做什麼呢？",
            difficultWords: ["library", "reads", "quiet"]
        },
        {
            question: "My teammates and I ____ video games.",
            options: ["play", "plays", "playing", "played"],
            correct: 0,
            explanation: "We 是複數，動詞用原形。",
            logicHint: "We 是複數，要做什麼呢？",
            difficultWords: ["games", "teammates", "video"]
        },
        {
            question: "My little brother ____ his teeth.",
            options: ["brush", "brushes", "brushing", "brushed"],
            correct: 1,
            explanation: "brush 遇到 sh 要加 es。",
            logicHint: "名字是單數，要做什麼呢？",
            difficultWords: ["brushes", "teeth"]
        },
        {
            question: "You and your friends ____ very well.",
            options: ["sing", "sings", "singing", "sang"],
            correct: 0,
            explanation: "You 是第二人稱，動詞用原形。",
            logicHint: "You 是你，你要做什麼呢？",
            difficultWords: ["friends"]
        },
        {
            question: "The colorful bird from the zoo ____ in the sky.",
            options: ["fly", "flies", "flying", "flew"],
            correct: 1,
            explanation: "fly 第三人稱單數變 flies。",
            logicHint: "名字是單數，要做什麼呢？",
            difficultWords: ["colorful", "flies", "sky"]
        },
        {
            question: "My father, a bus driver, ____ to work.",
            options: ["drive", "drives", "driving", "drove"],
            correct: 1,
            explanation: "drive 第三人稱單數變 drives。",
            logicHint: "名字是單數，要做什麼呢？",
            difficultWords: ["drives"]
        },
        {
            question: "The kids next door ____ movies together.",
            options: ["watch", "watches", "watching", "watched"],
            correct: 0,
            explanation: "They 是複數，動詞用原形。",
            logicHint: "They 是複數，要做什麼呢？",
            difficultWords: ["movies", "together"]
        },
        {
            question: "Anna, the best chef in town, ____ very well.",
            options: ["cook", "cooks", "cooking", "cooked"],
            correct: 1,
            explanation: "Anna 是單數，動詞加 -s。",
            logicHint: "名字是單數，要做什麼呢？",
            difficultWords: ["best", "cooks"]
        },
        {
            question: "My classmates and I ____ the windows.",
            options: ["open", "opens", "opening", "opened"],
            correct: 0,
            explanation: "We 是複數主詞，open 不變。",
            logicHint: "We 是複數，要做什麼呢？",
            difficultWords: ["classmates", "windows"]
        },
        {
            question: "The boy with dirty hands ____ the dishes.",
            options: ["wash", "washes", "washing", "washed"],
            correct: 1,
            explanation: "wash 遇到 sh 要加 es。",
            logicHint: "He 是單數，要做什麼呢？",
            difficultWords: ["dirty", "dishes", "washes"]
        },
        {
            question: "The manager of the international company ____ complex tasks daily.",
            options: ["manageing", "managess", "manage", "manages"],
            correct: 3,
            explanation: "The manager of the international company 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「The manager of the international company（國際公司的經理）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["company", "complex", "daily", "international", "manager", "manages", "tasks"],
            isHard: true
        },
        {
            question: "A collection of old paintings ____ complex tasks daily.",
            options: ["contain", "contains", "containss", "containing"],
            correct: 1,
            explanation: "A collection of old paintings 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「A collection of old paintings（一批古老的畫作）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["collection", "complex", "contains", "daily", "paintings", "tasks"],
            isHard: true
        },
        {
            question: "The woman who studies marine biology ____ complex tasks daily.",
            options: ["conduct", "conducts", "conductss", "conducting"],
            correct: 1,
            explanation: "The woman who studies marine biology 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「The woman who studies marine biology（研究海洋生物學的女士）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["biology", "complex", "conducts", "daily", "marine", "studies", "tasks", "woman"],
            isHard: true
        },
        {
            question: "Each of the applicants ____ complex tasks daily.",
            options: ["apply", "applying", "applies", "appliess"],
            correct: 2,
            explanation: "Each of the applicants 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「Each of the applicants（每一位申請者）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["applicants", "applies", "complex", "daily", "each", "tasks"],
            isHard: true
        },
        {
            question: "My uncle's business partner ____ complex tasks daily.",
            options: ["negotiates", "negotiate", "negotiatess", "negotiating"],
            correct: 0,
            explanation: "My uncle's business partner 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「My uncle's business partner（我叔叔的生意夥伴）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["business", "complex", "daily", "negotiates", "partner", "tasks"],
            isHard: true
        },
        {
            question: "Those who work in the laboratory ____ complex tasks daily.",
            options: ["operates", "operate", "operatess", "operating"],
            correct: 1,
            explanation: "Those who work in the laboratory 被視為複數主詞，動詞用原形。",
            logicHint: "主詞是「Those who work in the laboratory（在實驗室工作的人們）」 ，它是複數，動詞要加哪一個呢？",
            difficultWords: ["complex", "daily", "laboratory", "operate", "tasks"],
            isHard: true
        },
        {
            question: "The author of several novels ____ complex tasks daily.",
            options: ["writes", "writing", "writess", "write"],
            correct: 0,
            explanation: "The author of several novels 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「The author of several novels（幾本小說的作者）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["author", "complex", "daily", "novels", "tasks", "writes"],
            isHard: true
        },
        {
            question: "The team responsible for design ____ complex tasks daily.",
            options: ["coordinate", "coordinating", "coordinatess", "coordinates"],
            correct: 3,
            explanation: "The team responsible for design 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「The team responsible for design（負責設計的團隊）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["complex", "coordinates", "daily", "design", "responsible", "tasks", "team"],
            isHard: true
        },
        {
            question: "An expert in artificial intelligence ____ complex tasks daily.",
            options: ["analyzes", "analyze", "analyzess", "analyzing"],
            correct: 0,
            explanation: "An expert in artificial intelligence 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「An expert in artificial intelligence（人工智慧的專家）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["analyzes", "artificial", "complex", "daily", "expert", "intelligence", "tasks"],
            isHard: true
        },
        {
            question: "The board of directors ____ complex tasks daily.",
            options: ["decides", "deciding", "decide", "decidess"],
            correct: 0,
            explanation: "The board of directors 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「The board of directors（董事會）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["board", "complex", "daily", "decides", "directors", "tasks"],
            isHard: true
        }
  ],
  medium: [
    {
        "question": "The teacher ____ well.",
        "options": ["teach", "teaching", "teaches", "teachess"],
        "correct": 2,
        "explanation": "The teacher 是單數主詞，動詞要加 s。",
        "logicHint": "The teacher 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["teaches", "well"]
      },
      {
        "question": "My older sister ____ well.",
        "options": ["studiess", "study", "studying", "studies"],
        "correct": 3,
        "explanation": "My older sister 是單數主詞，動詞要加 s。",
        "logicHint": "My older sister 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["older", "studies", "well"]
      },
      {
        "question": "The students in class ____ well.",
        "options": ["cleaning", "clean", "cleanss", "cleans"],
        "correct": 3,
        "explanation": "The students in class 是複數主詞，動詞用原形。",
        "logicHint": "The students in class 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["cleans", "students"]
      },
      {
        "question": "Our neighbor ____ well.",
        "options": ["play", "plays", "playing", "playss"],
        "correct": 1,
        "explanation": "Our neighbor 是單數主詞，動詞要加 s。",
        "logicHint": "Our neighbor 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["neighbor", "plays"]
      },
      {
        "question": "The boys and girls ____ well.",
        "options": ["writes", "write", "writess", "writeing"],
        "correct": 0,
        "explanation": "The boys and girls 是複數主詞，動詞用原形。",
        "logicHint": "The boys and girls 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["writes"]
      },
      {
        "question": "His best friend ____ well.",
        "options": ["walkss", "walk", "walks", "walking"],
        "correct": 2,
        "explanation": "His best friend 是單數主詞，動詞要加 s。",
        "logicHint": "His best friend 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["walks"]
      },
      {
        "question": "The tall man ____ well.",
        "options": ["drives", "drivess", "driving", "drive"],
        "correct": 0,
        "explanation": "The tall man 是單數主詞，動詞要加 s。",
        "logicHint": "The tall man 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["drives", "tall"]
      },
      {
        "question": "Jenny and her brother ____ well.",
        "options": ["talks", "talk", "talkss", "talking"],
        "correct": 1,
        "explanation": "Jenny and her brother 是複數主詞，動詞用原形。",
        "logicHint": "Jenny and her brother 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["jenny"]
      },
      {
        "question": "Each student ____ well.",
        "options": ["carry", "carriess", "carries", "carrying"],
        "correct": 2,
        "explanation": "Each student 是單數主詞，動詞要加 s。",
        "logicHint": "Each student 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["carries"]
      },
      {
        "question": "The little kids ____ well.",
        "options": ["usess", "uses", "using", "use"],
        "correct": 1,
        "explanation": "The little kids 是複數主詞，動詞用原形。",
        "logicHint": "The little kids 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["kids", "uses", "little"]
      },
      {
        "question": "My parents ____ well.",
        "options": ["fixess", "fix", "fixes", "fixing"],
        "correct": 1,
        "explanation": "My parents 是複數主詞，動詞用原形。",
        "logicHint": "My parents 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["parents"]
      },
      {
        "question": "The dog across the street ____ well.",
        "options": ["drawss", "drawing", "draws", "draw"],
        "correct": 2,
        "explanation": "The dog 是單數主詞，動詞要加 s。",
        "logicHint": "The dog across the street 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["across", "draws"]
      },
      {
        "question": "Their science teacher ____ well.",
        "options": ["help", "helping", "helpss", "helps"],
        "correct": 3,
        "explanation": "Their science teacher 是單數主詞，動詞要加 s。",
        "logicHint": "Their science teacher 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["helps", "science"]
      },
      {
        "question": "This team ____ well.",
        "options": ["watching", "watchess", "watches", "watch"],
        "correct": 2,
        "explanation": "This team 是單數主詞，動詞要加 s。",
        "logicHint": "This team 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["watches"]
      },
      {
        "question": "The musician ____ well.",
        "options": ["cooking", "cookss", "cook", "cooks"],
        "correct": 3,
        "explanation": "The musician 是單數主詞，動詞要加 s。",
        "logicHint": "The musician 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["cooks", "musician"]
      },
      {
        "question": "A group of tourists ____ well.",
        "options": ["read", "reads", "readss", "reading"],
        "correct": 1,
        "explanation": "A group of tourists 是單數主詞，動詞要加 s。",
        "logicHint": "A group of tourists 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["group", "tourists", "reads"]
      },
      {
        "question": "Peter and Tom ____ well.",
        "options": ["opens", "opening", "open", "openss"],
        "correct": 2,
        "explanation": "Peter and Tom 是複數主詞，動詞用原形。",
        "logicHint": "Peter and Tom 是什麼人稱？動詞怎麼變？",
        "difficultWords": []
      },
      {
        "question": "The principal ____ well.",
        "options": ["visit", "visitss", "visiting", "visits"],
        "correct": 3,
        "explanation": "The principal 是單數主詞，動詞要加 s。",
        "logicHint": "The principal 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["principal", "visits"]
      },
      {
        "question": "The woman with the red coat ____ well.",
        "options": ["building", "build", "builds", "buildss"],
        "correct": 2,
        "explanation": "The woman 是單數主詞，動詞要加 s。",
        "logicHint": "The woman with the red coat 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["builds", "coat"]
      },
      {
        "question": "My uncle ____ well.",
        "options": ["painting", "paintss", "paints", "paint"],
        "correct": 2,
        "explanation": "My uncle 是單數主詞，動詞要加 s。",
        "logicHint": "My uncle 是什麼人稱？動詞怎麼變？",
        "difficultWords": ["paints"]
        },
        {
            question: "The jeans ___ expensive to buy.",
            options: ["cost", "costs", "costing", "cost"],
            correct: 0,
            explanation: "主詞 The jeans 是複數名詞，一般動詞現在式用原形 cost。（牛仔褲買起來很貴。）",
            logicHint: "主詞 The jeans 是複數名詞，一般動詞現在式要用什麼呢?",
            difficultWords: ["jeans", "expensive", "buy"]
        },
        {
            question: "The research ___ complete for the report.",
            options: ["remain", "remains", "remaining", "remained"],
            correct: 1,
            explanation: "主詞 The research 是不可數名詞，一般動詞現在式要加s remains。（研究對報告保持完整。）",
            logicHint: "主詞 The research 是不可數名詞，一般動詞現在式要用什麼呢?",
            difficultWords: ["research", "complete", "report"]
        },
        {
            question: "The headphones ___ properly during use.",
            options: ["function", "functions", "functioning", "functioned"],
            correct: 0,
            explanation: "主詞 The headphones 是複數名詞，一般動詞現在式用原形 function。（耳機在使用時正常運作。）",
            logicHint: "主詞 The headphones 是複數名詞，一般動詞現在式要用什麼呢?",
            difficultWords: ["headphones", "properly", "during"]
        },
        {
            question: "The evidence ___ clear enough to prove.",
            options: ["show", "shows", "showing", "showed"],
            correct: 1,
            explanation: "主詞 The evidence 是不可數名詞，一般動詞現在式要加s shows。（證據清楚到能證明。）",
            logicHint: "主詞 The evidence 是不可數名詞，一般動詞現在式要用什麼呢?",
            difficultWords: ["evidence", "clear", "prove"]
        },
        {
            question: "The sunglasses ___ cool to wear.",
            options: ["make", "makes", "making", "made"],
            correct: 0,
            explanation: "主詞 The sunglasses 是複數名詞，一般動詞現在式用原形 make。（太陽眼鏡戴起來很酷。）",
            logicHint: "主詞 The sunglasses 是複數名詞，一般動詞現在式要用什麼呢?",
            difficultWords: ["sunglasses", "cool", "wear"]
        },
        {
            question: "The progress ___ good enough to continue.",
            options: ["stay", "stays", "staying", "stayed"],
            correct: 1,
            explanation: "主詞 The progress 是不可數名詞，一般動詞現在式要加s stays。（進度好到能繼續。）",
            logicHint: "主詞 The progress 是不可數名詞，一般動詞現在式要用什麼呢?",
            difficultWords: ["progress", "good", "continue"]
        },
        {
            question: "The binoculars ___ powerful enough to see.",
            options: ["help", "helps", "helping", "helped"],
            correct: 0,
            explanation: "主詞 The binoculars 是複數名詞，一般動詞現在式用原形 help。（望遠鏡強到能看見。）",
            logicHint: "主詞 The binoculars 是複數名詞，一般動詞現在式要用什麼呢?",
            difficultWords: ["binoculars", "powerful", "see"]
        },
        {
            question: "The software ___ reliable for daily use.",
            options: ["perform", "performs", "performing", "performed"],
            correct: 1,
            explanation: "主詞 The software 是不可數名詞，一般動詞現在式要加s performs。（軟體可靠到能日常使用。）",
            logicHint: "主詞 The software 是不可數名詞，一般動詞現在式要用什麼呢?",
            difficultWords: ["software", "reliable", "daily"]
        },
        {
            question: "The people ___ friendly to visitors.",
            options: ["act", "acts", "acting", "acted"],
            correct: 0,
            explanation: "主詞 The people 是複數名詞，一般動詞現在式用原形 act。（人們對訪客友善。）",
            logicHint: "主詞 The people 是複數名詞，一般動詞現在式要用什麼呢?",
            difficultWords: ["people", "friendly", "visitors"]
        },
        {
            question: "The furniture ___ comfortable to sit on.",
            options: ["provide", "provides", "providing", "provided"],
            correct: 1,
            explanation: "主詞 The furniture 是不可數名詞，一般動詞現在式要加s provides。（家具提供舒適的坐感。）",
            logicHint: "主詞 The furniture 是不可數名詞，一般動詞現在式要用什麼呢?",
            difficultWords: ["furniture", "comfortable", "sit"]
        },
        {
            question: "The police ___ the community safely.",
            options: ["serve", "serves", "serving", "served"],
            correct: 0,
            explanation: "主詞 The police 是複數名詞，一般動詞現在式用原形 serve。（警察安全地服務社區。）",
            logicHint: "主詞 The police 是複數名詞，一般動詞現在式要用什麼呢?",
            difficultWords: ["police", "community", "safely"]
        }
  ],
  hard: [
        {
            question: "The manager of the international company ____ complex tasks daily.",
            options: ["manageing", "managess", "manage", "manages"],
            correct: 3,
            explanation: "The manager of the international company 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「The manager of the international company（國際公司的經理）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["company", "complex", "daily", "international", "manager", "manages", "tasks"],
            isHard: true
        },
        {
            question: "A collection of old paintings ____ complex tasks daily.",
            options: ["contain", "contains", "containss", "containing"],
            correct: 1,
            explanation: "A collection of old paintings 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「A collection of old paintings（一批古老的畫作）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["collection", "complex", "contains", "daily", "paintings", "tasks"],
            isHard: true
        },
        {
            question: "The woman who studies marine biology ____ complex tasks daily.",
            options: ["conduct", "conducts", "conductss", "conducting"],
            correct: 1,
            explanation: "The woman who studies marine biology 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「The woman who studies marine biology（研究海洋生物學的女士）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["biology", "complex", "conducts", "daily", "marine", "studies", "tasks", "woman"],
            isHard: true
        },
        {
            question: "Each of the applicants ____ complex tasks daily.",
            options: ["apply", "applying", "applies", "appliess"],
            correct: 2,
            explanation: "Each of the applicants 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「Each of the applicants（每一位申請者）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["applicants", "applies", "complex", "daily", "each", "tasks"],
            isHard: true
        },
        {
            question: "My uncle's business partner ____ complex tasks daily.",
            options: ["negotiates", "negotiate", "negotiatess", "negotiating"],
            correct: 0,
            explanation: "My uncle's business partner 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「My uncle's business partner（我叔叔的生意夥伴）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["business", "complex", "daily", "negotiates", "partner", "tasks"],
            isHard: true
        },
        {
            question: "Those who work in the laboratory ____ complex tasks daily.",
            options: ["operates", "operate", "operatess", "operating"],
            correct: 1,
            explanation: "Those who work in the laboratory 被視為複數主詞，動詞用原形。",
            logicHint: "主詞是「Those who work in the laboratory（在實驗室工作的人們）」 ，它是複數，動詞要加哪一個呢？",
            difficultWords: ["complex", "daily", "laboratory", "operate", "tasks"],
            isHard: true
        },
        {
            question: "The author of several novels ____ complex tasks daily.",
            options: ["writes", "writing", "writess", "write"],
            correct: 0,
            explanation: "The author of several novels 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「The author of several novels（幾本小說的作者）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["author", "complex", "daily", "novels", "tasks", "writes"],
            isHard: true
        },
        {
            question: "The team responsible for design ____ complex tasks daily.",
            options: ["coordinate", "coordinating", "coordinatess", "coordinates"],
            correct: 3,
            explanation: "The team responsible for design 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「The team responsible for design（負責設計的團隊）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["complex", "coordinates", "daily", "design", "responsible", "tasks", "team"],
            isHard: true
        },
        {
            question: "An expert in artificial intelligence ____ complex tasks daily.",
            options: ["analyzes", "analyze", "analyzess", "analyzing"],
            correct: 0,
            explanation: "An expert in artificial intelligence 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「An expert in artificial intelligence（人工智慧的專家）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["analyzes", "artificial", "complex", "daily", "expert", "intelligence", "tasks"],
            isHard: true
        },
        {
            question: "The board of directors ____ complex tasks daily.",
            options: ["decides", "deciding", "decide", "decidess"],
            correct: 0,
            explanation: "The board of directors 被視為單數主詞，動詞要加 s。",
            logicHint: "主詞是「The board of directors（董事會）」 ，它是單數，動詞要加哪一個呢？",
            difficultWords: ["board", "complex", "daily", "decides", "directors", "tasks"],
            isHard: true
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
    "children": "孩子們",
    "park": "公園",
    "teacher": "老師",
    "math": "數學",
    "well": "好地",
    "birds": "鳥",
    "morning": "早上",
    "sister": "姐妹",
    "music": "音樂",
    "dogs": "狗",
    "garden": "花園",
    "cat": "貓",
    "fish": "魚",
    "flowers": "花",
    "spring": "春天",
    "mother": "媽媽",
    "dinner": "晚餐",
    "evening": "晚上",
    "workers": "工人",
    "hard": "努力地",
    "doctor": "醫生",
    "patients": "病人",
    "hospital": "醫院",
    "computers": "電腦",
    "quickly": "快速地",
    "father": "爸爸",
    "newspaper": "報紙",
    "buses": "巴士",
    "arrive": "到達",
    "time": "時間",
    "restaurant": "餐廳",
    "delicious": "美味的",
    "food": "食物",
    "homework": "作業",
    "grandmother": "奶奶",
    "stories": "故事",
    "trees": "樹",
    "autumn": "秋天",
    "engineer": "工程師",
    "projects": "專案",
    "teachers": "老師們",
    "lessons": "課程",
    "carefully": "仔細地",
    "uncle": "叔叔",
    "company": "公司",
    "cars": "車子",
    "highway": "高速公路",
    "library": "圖書館",
    "books": "書",
    "farmers": "農夫",
    "vegetables": "蔬菜",
    "field": "田地",
    "cousin": "表妹",
    "school": "學校",
    "police": "警察",
    "officers": "官員",
    "community": "社區",
    "artist": "藝術家",
    "paintings": "畫作",
    "nurses": "護士",
    "aunt": "阿姨",
    "cookies": "餅乾",
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
    "safely": "安全地",
    "beautifully": "美麗地",
    "curly": "捲曲的",
    "cousins": "表兄弟姊妹",
    "friends": "朋友們",
    "noon": "中午",
    "wearing": "穿著",
    "apples": "蘋果",
    "classmates": "同學們",
    "green": "綠色的",
    "hardworking": "勤勞的",
    "neighbor": "鄰居",
    "loudly": "大聲地",
    "quiet": "安靜的",
    "games": "遊戲",
    "teammates": "隊友們",
    "video": "影片",
    "brushes": "刷子",
    "teeth": "牙齒",
    "colorful": "多彩的",
    "sky": "天空",
    "movies": "電影",
    "together": "一起",
    "best": "最好的",
    "chef": "廚師",
    "windows": "窗戶",
    "dirty": "髒的",
    "dishes": "盤子",
    "washes": "洗",
    "international": "國際的",
    "manager": "經理",
    "manages": "管理",
    "tasks": "任務",
    "collection": "收藏",
    "contains": "包含",
    "paintings": "畫作",
    "biology": "生物學",
    "conducts": "進行",
    "marine": "海洋的",
    "studies": "研究",
    "woman": "女人",
    "applicants": "申請者",
    "applies": "申請",
    "each": "每個",
    "negotiates": "協商",
    "partner": "夥伴",
    "laboratory": "實驗室",
    "operate": "操作",
    "author": "作者",
    "novels": "小說",
    "writes": "寫",
    "coordinates": "協調",
    "design": "設計",
    "responsible": "負責的",
    "team": "團隊",
    "analyzes": "分析",
    "artificial": "人工的",
    "expert": "專家",
    "intelligence": "智慧",
    "board": "董事會",
    "decides": "決定",
    "directors": "董事"
};

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索一般動詞現在式肯定句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的肯定句型",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的肯定句挑戰",
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