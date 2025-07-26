// 文章練習關卡資料
const articleLevels = [
  {
    id: 1,
    title: "🐕 My new pet",
    difficulty: "初級",
    category: "寵物",
    article: {
      title: "My new pet",
      content: "It is my new pet. Its name is Rocky. It has brown hair and big eyes. Its tail is short. Rocky is very cute. It is my good friend. I am very happy."
    },
    questions: [
      "1. 請將「寵物的名字是Rocky」翻譯成英文",
      "2. 請將「Rocky有棕色毛髮和大眼睛」翻譯成英文",
      "3. 請將「Rocky很可愛，是我的好朋友」翻譯成英文"
    ],
    answers: [
      "1. Its name is Rocky.",
      "2. Rocky has brown hair and big eyes.",
      "3. Rocky is very cute. It is my good friend."
    ],
    quiz: [
      {
        question: "What does Rocky have?",
        options: [
          "It has black hair.",
          "It has small eyes.",
          "It has brown hair and big eyes.",
          "It has curly hair."
        ],
        correct: 2,
        explanation: "根據文章，Rocky has brown hair and big eyes."
      },
      {
        question: "How is Rocky?",
        options: [
          "It is bad.",
          "It is cute.",
          "It is tall.",
          "It is old."
        ],
        correct: 1,
        explanation: "文章中提到 Rocky is very cute."
      }
    ],
    vocabulary: [
      { word: "brown", meaning: "棕色，棕色的" },
      { word: "tail", meaning: "尾巴" },
      { word: "short", meaning: "短的，矮的" },
      { word: "cute", meaning: "可愛的" },
      { word: "friend", meaning: "朋友" }
    ]
  },
  {
    id: 2,
    title: "👧 My little sister",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "My little sister",
      content: "My little sister is five. She is very short. She likes yellow and red. She has a yellow watch. Her hat is red. She is happy every day."
    },
    questions: [
      "1. 請將「我的小妹妹五歲」翻譯成英文",
      "2. 請將「她很矮」翻譯成英文",
      "3. 請將「她喜歡黃色和紅色」翻譯成英文"
    ],
    answers: [
      "1. My little sister is five.",
      "2. She is very short.",
      "3. She likes yellow and red."
    ],
    quiz: [
      {
        question: "How old is the writer's sister?",
        options: [
          "She is two years old.",
          "She is five years old.",
          "She is eight years old.",
          "She is seven years old."
        ],
        correct: 1,
        explanation: "根據文章，My little sister is five."
      },
      {
        question: "What color does the little sister like?",
        options: [
          "She likes pink and red.",
          "She likes red and blue.",
          "She likes yellow and black.",
          "She likes red and yellow."
        ],
        correct: 3,
        explanation: "文章中提到 She likes yellow and red."
      }
    ],
    vocabulary: [
      { word: "little", meaning: "小的" },
      { word: "short", meaning: "短的，矮的" },
      { word: "hat", meaning: "帽子" },
      { word: "yellow", meaning: "黃色" },
      { word: "red", meaning: "紅色" }
    ]
  },
  {
    id: 3,
    title: "👥 My classmate",
    difficulty: "初級",
    category: "學校",
    article: {
      title: "My classmate",
      content: "My name is Lisa. That girl is my classmate. She is Lucy. We go to school together every day. We love music. We often listen to music after school."
    },
    questions: [
      "1. 請將「我的名字是Lisa」翻譯成英文",
      "2. 請將「那個女孩是我的同學」翻譯成英文",
      "3. 請將「她是Lucy」翻譯成英文"
    ],
    answers: [
      "1. My name is Lisa.",
      "2. That girl is my classmate.",
      "3. She is Lucy."
    ],
    quiz: [
      {
        question: "Who is Lisa's classmate?",
        options: [
          "Lucy.",
          "Lisa.",
          "Amy.",
          "Jane."
        ],
        correct: 0,
        explanation: "根據文章，That girl is my classmate. She is Lucy."
      },
      {
        question: "What do the writer and Lucy do after school?",
        options: [
          "They play computer games after school.",
          "They read books after school.",
          "They play basketball after school.",
          "They listen to music after school."
        ],
        correct: 3,
        explanation: "文章中提到 We often listen to music after school."
      }
    ],
    vocabulary: [
      { word: "classmate", meaning: "同班同學" },
      { word: "together", meaning: "一起" },
      { word: "after school", meaning: "放學後" },
      { word: "love", meaning: "喜愛" },
      { word: "often", meaning: "經常" }
    ]
  },
  {
    id: 4,
    title: "👨 My father",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "My father",
      content: "My father is an actor. He is busy with work. He's usually not at home. But my father plays baseball with me on weekends. I love my father."
    },
    questions: [
      "1. 請將「我爸爸是一位演員」翻譯成英文",
      "2. 請將「他忙於工作」翻譯成英文",
      "3. 請將「他通常都不在家」翻譯成英文"
    ],
    answers: [
      "1. My father is an actor.",
      "2. He is busy with work.",
      "3. He is usually not at home."
    ],
    quiz: [
      {
        question: "What does the writer's father do?",
        options: [
          "He is an engineer.",
          "He is a teacher.",
          "He is a doctor.",
          "He is an actor."
        ],
        correct: 3,
        explanation: "根據文章，My father is an actor."
      },
      {
        question: "What does the writer's father do on weekends?",
        options: [
          "He plays baseball with the writer.",
          "He works.",
          "He watches TV with the writer.",
          "He sleeps at home."
        ],
        correct: 0,
        explanation: "文章中提到 But my father plays baseball with me on weekends."
      }
    ],
    vocabulary: [
      { word: "busy", meaning: "忙碌" },
      { word: "usually", meaning: "通常" },
      { word: "weekend", meaning: "週末" },
      { word: "actor", meaning: "演員" },
      { word: "baseball", meaning: "棒球" }
    ]
  },
  {
    id: 5,
    title: "👩‍🍳 Our teacher's daughter",
    difficulty: "初級",
    category: "職業",
    article: {
      title: "Our teacher's daughter",
      content: "Our teacher has a daughter. She's a baker. She always makes delicious cakes for her family. She loves animals. She has five birds and three rabbits. She's great."
    },
    questions: [
      "1. 請將「我們的老師有一個女兒」翻譯成英文",
      "2. 請將「她是一位麵包師傅」翻譯成英文",
      "3. 請將「她總是為家人做美味的蛋糕」翻譯成英文"
    ],
    answers: [
      "1. Our teacher has a daughter.",
      "2. She is a baker.",
      "3. She always makes delicious cakes for her family."
    ],
    quiz: [
      {
        question: "Who is the baker?",
        options: [
          "The teacher.",
          "The student.",
          "The teacher's daughter.",
          "The teacher's son."
        ],
        correct: 2,
        explanation: "根據文章，Our teacher has a daughter. She's a baker."
      },
      {
        question: "How many animals does the teacher's daughter have?",
        options: [
          "She has five animals.",
          "She has three animals.",
          "She has ten animals.",
          "She has eight animals."
        ],
        correct: 3,
        explanation: "文章中提到 She has five birds and three rabbits. 總共是 5+3=8 隻動物。"
      }
    ],
    vocabulary: [
      { word: "baker", meaning: "麵包師傅" },
      { word: "always", meaning: "總是" },
      { word: "delicious", meaning: "美味的" },
      { word: "family", meaning: "家人" },
      { word: "great", meaning: "極好的" }
    ]
  },
  {
    id: 6,
    title: "🏠 My friend's dad",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "My friend's dad",
      content: "Tom has a house, and the kitchen is very big. He cooks for his family every day. He has a son and three daughters. They're my friends. I often go to school with them."
    },
    questions: [
      "1. 請將「Tom有一棟房子，而且廚房很大」翻譯成英文",
      "2. 請將「每天他為家人煮飯」翻譯成英文",
      "3. 請將「他有一個兒子和三個女兒」翻譯成英文"
    ],
    answers: [
      "1. Tom has a house and the kitchen is very big.",
      "2. He cooks for his family every day.",
      "3. He has a son and three daughters."
    ],
    quiz: [
      {
        question: "What does Tom do every day?",
        options: [
          "He cooks every day.",
          "He goes to school every day.",
          "He watches TV every day.",
          "He reads books every day."
        ],
        correct: 0,
        explanation: "根據文章，He cooks for his family every day."
      },
      {
        question: "Who goes to school with Tom's children?",
        options: [
          "Tom and the writer.",
          "The children's mother.",
          "Tom.",
          "The writer."
        ],
        correct: 3,
        explanation: "文章中提到 They're my friends. I often go to school with them."
      }
    ],
    vocabulary: [
      { word: "house", meaning: "房子" },
      { word: "kitchen", meaning: "廚房" },
      { word: "cook", meaning: "煮飯" },
      { word: "family", meaning: "家人" },
      { word: "son", meaning: "兒子" },
      { word: "daughter", meaning: "女兒" }
    ]
  },
  {
    id: 7,
    title: "🏀 Sherry's family",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "Sherry's family",
      content: "She is Sherry. She has a happy family. They like basketball and often watch basketball games at home. Her mother and father are doctors. They are busy at work every day."
    },
    questions: [
      "1. 請將「她是Sherry」翻譯成英文",
      "2. 請將「她有一個快樂的家庭」翻譯成英文",
      "3. 請將「他們喜歡籃球，而且常常在家看籃球比賽」翻譯成英文",
      "4. 請將「她的爸爸和媽媽都是醫生」翻譯成英文",
      "5. 請將「他們每天忙於工作」翻譯成英文"
    ],
    answers: [
      "1. She is Sherry.",
      "2. She has a happy family.",
      "3. They like basketball and often watch basketball games at home.",
      "4. Her mother and father are doctors.",
      "5. They are busy at work every day."
    ],
    quiz: [
      {
        question: "How does Sherry like basketball?",
        options: [
          "She hates it.",
          "She likes it.",
          "She doesn't like it.",
          "It is boring."
        ],
        correct: 1,
        explanation: "根據文章，They like basketball and often watch basketball games at home."
      },
      {
        question: "Which is true about Sherry's parents?",
        options: [
          "They often work at home.",
          "They don't like to watch basketball games.",
          "Sherry's father likes basketball, but her mother doesn't like it.",
          "They are doctors."
        ],
        correct: 3,
        explanation: "文章中提到 Her mother and father are doctors."
      }
    ],
    vocabulary: [
      { word: "family", meaning: "家庭，家人" },
      { word: "basketball", meaning: "籃球" },
      { word: "often", meaning: "常常" },
      { word: "game", meaning: "遊戲，比賽" },
      { word: "at home", meaning: "在家" },
      { word: "busy", meaning: "忙碌的" }
    ]
  },
  {
    id: 8,
    title: "👨‍⚕️👩‍⚕️ Tim's mom and dad",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "Tim's mom and dad",
      content: "He is Tim. His father is a doctor, and his mother is a nurse. They like music and often listen to music at home. His mother likes animals. They have three cats and five dogs."
    },
    questions: [
      "1. 請將「他是Tim」翻譯成英文",
      "2. 請將「他的爸爸是一位醫生，他的媽媽是一位護士」翻譯成英文",
      "3. 請將「他們喜歡音樂，而且常常在家聽音樂」翻譯成英文",
      "4. 請將「他媽媽喜歡動物」翻譯成英文",
      "5. 請將「他們有3隻貓和5隻狗」翻譯成英文"
    ],
    answers: [
      "1. He is Tim.",
      "2. His father is a doctor, and his mother is a nurse.",
      "3. They like music and often listen to music at home.",
      "4. His mother likes animals.",
      "5. They have three cats and five dogs."
    ],
    quiz: [
      {
        question: "What does Tim's father do?",
        options: [
          "He is a nurse.",
          "He is an engineer.",
          "He is a doctor.",
          "He is a teacher."
        ],
        correct: 2,
        explanation: "根據文章，His father is a doctor."
      },
      {
        question: "Why does Tim's house have many animals?",
        options: [
          "Because Tim likes cats.",
          "Because Tim's mother likes animals.",
          "Because Tim's father likes dogs.",
          "Because Tim likes animals."
        ],
        correct: 1,
        explanation: "文章中提到 His mother likes animals."
      }
    ],
    vocabulary: [
      { word: "often", meaning: "常常" },
      { word: "at home", meaning: "在家" },
      { word: "animals", meaning: "動物" },
      { word: "doctor", meaning: "醫生" },
      { word: "nurse", meaning: "護士" },
      { word: "music", meaning: "音樂" }
    ]
  },
  {
    id: 9,
    title: "👨‍⚕️👩‍🏫 My family",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "My family",
      content: "My father is a doctor. My mother is a teacher. They are busy. My sisters and I are students. We do homework every day. My brother is only two. He eats and sleeps every day."
    },
    questions: [
      "1. 請將「我爸爸是一位醫生」翻譯成英文",
      "2. 請將「我媽媽是一位老師」翻譯成英文",
      "3. 請將「他們都很忙」翻譯成英文",
      "4. 請將「我和我姊姊們是學生」翻譯成英文",
      "5. 請將「我們每天做功課」翻譯成英文",
      "6. 請將「我的弟弟只有二歲」翻譯成英文",
      "7. 請將「他每天吃和睡」翻譯成英文"
    ],
    answers: [
      "1. My father is a doctor.",
      "2. My mother is a teacher.",
      "3. They are busy.",
      "4. My sisters and I are students.",
      "5. We do homework every day.",
      "6. My brother is only two.",
      "7. He eats and sleeps every day."
    ],
    quiz: [
      {
        question: "What does the writer's father do?",
        options: [
          "He is a nurse.",
          "He is a student.",
          "He is a teacher.",
          "He is a doctor."
        ],
        correct: 3,
        explanation: "根據文章，My father is a doctor."
      },
      {
        question: "Which is true?",
        options: [
          "The writer's brother is a student.",
          "The writer's parents are busy every day.",
          "The writer's sisters are teachers.",
          "The writer's father does homework every day."
        ],
        correct: 1,
        explanation: "文章中提到 They are busy."
      }
    ],
    vocabulary: [
      { word: "busy", meaning: "忙碌的" },
      { word: "do homework", meaning: "做功課" },
      { word: "only", meaning: "只，僅僅" },
      { word: "doctor", meaning: "醫生" },
      { word: "teacher", meaning: "老師" },
      { word: "student", meaning: "學生" },
      { word: "sleep", meaning: "睡覺" }
    ]
  },
  {
    id: 10,
    title: "👫 Tim and I",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "Tim and I",
      content: "Tim and I are brother and sister. We are students. We go to school by bus every day. Sometimes we walk to school. On weekends, we often do the housework with our mom."
    },
    questions: [
      "1. 請將「Tim和我是兄妹」翻譯成英文",
      "2. 請將「我們是學生」翻譯成英文",
      "3. 請將「每天我們搭公車上學」翻譯成英文",
      "4. 請將「有時候我們走路去學校」翻譯成英文",
      "5. 請將「在週末，我們經常和我們的媽媽一起做家事」翻譯成英文"
    ],
    answers: [
      "1. Tim and I are brother and sister.",
      "2. We are students.",
      "3. We go to school by bus every day.",
      "4. Sometimes we walk to school.",
      "5. On weekends, we often do the housework with our mom."
    ],
    quiz: [
      {
        question: "How do they go to school every day?",
        options: [
          "They walk to school.",
          "They go to school by taxi.",
          "They go to school by bike.",
          "They go to school by bus."
        ],
        correct: 3,
        explanation: "根據文章，We go to school by bus every day."
      },
      {
        question: "What do they do on weekends?",
        options: [
          "They help their mom to do the housework.",
          "They watch TV.",
          "They do homework.",
          "They go to school."
        ],
        correct: 0,
        explanation: "文章中提到 On weekends, we often do the housework with our mom."
      }
    ],
    vocabulary: [
      { word: "sometimes", meaning: "有時候" },
      { word: "on weekends", meaning: "週末的時候" },
      { word: "housework", meaning: "家事" },
      { word: "brother", meaning: "兄弟" },
      { word: "sister", meaning: "姊妹" },
      { word: "by bus", meaning: "搭公車" },
      { word: "walk", meaning: "走路" }
    ]
  },
  {
    id: 11,
    title: "🐰🐦 Jane's pets",
    difficulty: "初級",
    category: "寵物",
    article: {
      title: "Jane's pets",
      content: "Jane and I are good friends. She loves animals. She has two rabbits and three birds. They are her pets. They are very cute. Jane plays with them every day. I don't have pets."
    },
    questions: [
      "1. 請將「我和Jane是好朋友」翻譯成英文",
      "2. 請將「她喜愛動物」翻譯成英文",
      "3. 請將「她有兩隻兔子和三隻鳥」翻譯成英文",
      "4. 請將「牠們是她的寵物」翻譯成英文",
      "5. 請將「牠們很可愛」翻譯成英文",
      "6. 請將「Jane每天和牠們玩」翻譯成英文",
      "7. 請將「我沒有寵物」翻譯成英文"
    ],
    answers: [
      "1. Jane and I are good friends.",
      "2. She loves animals.",
      "3. She has two rabbits and three birds.",
      "4. They are her pets.",
      "5. They are very cute.",
      "6. Jane plays with them every day.",
      "7. I don't have pets."
    ],
    quiz: [
      {
        question: "Who has pets?",
        options: [
          "Jane and the writer.",
          "The writer.",
          "Jane.",
          "No one."
        ],
        correct: 2,
        explanation: "根據文章，She has two rabbits and three birds. They are her pets. 以及 I don't have pets."
      },
      {
        question: "Which is true about Jane?",
        options: [
          "She and the writer aren't friends.",
          "She has two cats.",
          "She plays with the writer every day.",
          "She likes animals."
        ],
        correct: 3,
        explanation: "文章中提到 She loves animals."
      }
    ],
    vocabulary: [
      { word: "cute", meaning: "可愛的" },
      { word: "animals", meaning: "動物" },
      { word: "rabbit", meaning: "兔子" },
      { word: "pet", meaning: "寵物" },
      { word: "very", meaning: "很" },
      { word: "with", meaning: "和" },
      { word: "them", meaning: "牠們" }
    ]
  },
  {
    id: 12,
    title: "🏠 Sam's apartment",
    difficulty: "初級",
    category: "居住",
    article: {
      title: "Sam's apartment",
      content: "Sam has a new apartment. It is very beautiful. There are three rooms in the apartment. He puts a television and a sofa in the living room. In the room, he puts a bed and a computer."
    },
    questions: [
      "1. 請將「Sam有一棟新公寓」翻譯成英文",
      "2. 請將「它很漂亮」翻譯成英文",
      "3. 請將「公寓裡有3間房間」翻譯成英文",
      "4. 請將「他放了一台電視和一個沙發在客廳」翻譯成英文",
      "5. 請將「在房間裡，他放了一張床和一台電腦」翻譯成英文"
    ],
    answers: [
      "1. Sam has a new apartment.",
      "2. It is very beautiful.",
      "3. There are three rooms in the apartment.",
      "4. He puts a television and a sofa in the living room.",
      "5. In the room, he puts a bed and a computer."
    ],
    quiz: [
      {
        question: "How is the apartment?",
        options: [
          "It is beautiful.",
          "It's not good.",
          "It isn't pretty.",
          "It is bad."
        ],
        correct: 0,
        explanation: "根據文章，It is very beautiful."
      },
      {
        question: "Which is true?",
        options: [
          "There are two rooms in Sam's apartment.",
          "There isn't a television in the living room.",
          "There is a computer in Sam's room.",
          "Sam doesn't have an apartment."
        ],
        correct: 2,
        explanation: "文章中提到 In the room, he puts a bed and a computer."
      }
    ],
    vocabulary: [
      { word: "new", meaning: "新的" },
      { word: "apartment", meaning: "公寓" },
      { word: "beautiful", meaning: "漂亮" },
      { word: "there are", meaning: "有…" },
      { word: "room", meaning: "房間" },
      { word: "put", meaning: "放置" },
      { word: "television", meaning: "電視" },
      { word: "sofa", meaning: "沙發" },
      { word: "living room", meaning: "客廳" },
      { word: "bed", meaning: "床" }
    ]
  },
  {
    id: 13,
    title: "👨‍🍳👩‍💼 Our family",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "Our family",
      content: "My dad is a cook. My mom is an engineer. My dad always cooks dinner for us. My mom likes movies and often watches movies at home. My brother and I are students. We read books every day."
    },
    questions: [
      "1. 請將「我爸爸是廚師」翻譯成英文",
      "2. 請將「我媽媽是工程師」翻譯成英文",
      "3. 請將「我爸爸總是為我們做晚餐」翻譯成英文",
      "4. 請將「我媽媽喜歡電影，而且常常在家看電影」翻譯成英文",
      "5. 請將「我和我弟弟是學生」翻譯成英文",
      "6. 請將「我們每天讀書」翻譯成英文"
    ],
    answers: [
      "1. My dad is a cook.",
      "2. My mom is an engineer.",
      "3. My dad always cooks dinner for us.",
      "4. My mom likes movies and often watches movies at home.",
      "5. My brother and I are students.",
      "6. We read books every day."
    ],
    quiz: [
      {
        question: "What does the writer's father do for them?",
        options: [
          "He cooks lunch.",
          "He cooks dinner.",
          "He does the housework.",
          "He makes cakes."
        ],
        correct: 1,
        explanation: "根據文章，My dad always cooks dinner for us."
      },
      {
        question: "What does the writer's mother like?",
        options: [
          "She likes to watch movies.",
          "She likes to cook.",
          "She likes to read books.",
          "She likes music."
        ],
        correct: 0,
        explanation: "文章中提到 My mom likes movies and often watches movies at home."
      }
    ],
    vocabulary: [
      { word: "cook", meaning: "廚師（名詞），煮菜（動詞）" },
      { word: "always", meaning: "總是" },
      { word: "for", meaning: "為了" },
      { word: "often", meaning: "常常" },
      { word: "engineer", meaning: "工程師" },
      { word: "dinner", meaning: "晚餐" },
      { word: "movie", meaning: "電影" },
      { word: "read", meaning: "讀書" }
    ]
  },
  {
    id: 14,
    title: "👥 Linda and Mark",
    difficulty: "初級",
    category: "學校",
    article: {
      title: "Linda and Mark",
      content: "Linda and Mark are my classmates. We are in the same class. I often play baseball with them after school. Mr. Lin is our teacher. He teaches math. Linda and I are good at math. We are hard-working students."
    },
    questions: [
      "1. 請將「Linda和Mark是我的同學」翻譯成英文",
      "2. 請將「我們在同一班」翻譯成英文",
      "3. 請將「放學後我常常和他們一起打棒球」翻譯成英文",
      "4. 請將「林先生是我們的老師」翻譯成英文",
      "5. 請將「他教數學」翻譯成英文",
      "6. 請將「我和Linda數學很好」翻譯成英文",
      "7. 請將「我們是用功的學生」翻譯成英文"
    ],
    answers: [
      "1. Linda and Mark are my classmates.",
      "2. We are in the same class.",
      "3. I often play baseball with them after school.",
      "4. Mr. Lin is our teacher.",
      "5. He teaches math.",
      "6. Linda and I are good at math.",
      "7. We are hard-working students."
    ],
    quiz: [
      {
        question: "Who plays baseball with the writer after school?",
        options: [
          "Linda.",
          "Mark.",
          "Linda and Mark.",
          "Mr. Lin."
        ],
        correct: 2,
        explanation: "根據文章，I often play baseball with them after school. 這裡的 them 指的是 Linda and Mark。"
      },
      {
        question: "Who is Mr. Lin?",
        options: [
          "He's the writer's father.",
          "He's the writer's math teacher.",
          "He's the writer's classmate.",
          "He's the writer's student."
        ],
        correct: 1,
        explanation: "文章中提到 Mr. Lin is our teacher. He teaches math."
      }
    ],
    vocabulary: [
      { word: "classmate", meaning: "同學" },
      { word: "the same", meaning: "相同" },
      { word: "often", meaning: "常常" },
      { word: "teach", meaning: "教導" },
      { word: "math", meaning: "數學" },
      { word: "be good at", meaning: "在…方面很好" },
      { word: "hard-working", meaning: "用功的" },
      { word: "after school", meaning: "放學後" },
      { word: "with", meaning: "和" },
      { word: "them", meaning: "他們" }
    ]
  },
  {
    id: 15,
    title: "🚕👩‍🏫 My family",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "My family",
      content: "My father is a taxi driver. My mother is a teacher. They are busy. My sisters and I do the housework every day. My sisters cook, and I do the dishes. My little sister is only four. She eats and plays every day."
    },
    questions: [
      "1. 請將「我爸爸是一位計程車司機」翻譯成英文",
      "2. 請將「我媽媽是一位老師」翻譯成英文",
      "3. 請將「他們都很忙」翻譯成英文",
      "4. 請將「我和我的姊姊們每天做家事」翻譯成英文",
      "5. 請將「我的姊姊們做菜，而我洗碗盤」翻譯成英文",
      "6. 請將「我的小妹妹只有四歲」翻譯成英文",
      "7. 請將「她每天吃和玩」翻譯成英文"
    ],
    answers: [
      "1. My father is a taxi driver.",
      "2. My mother is a teacher.",
      "3. They are busy.",
      "4. My sisters and I do the housework every day.",
      "5. My sisters cook, and I do the dishes.",
      "6. My little sister is only four.",
      "7. She eats and plays every day."
    ],
    quiz: [
      {
        question: "What does the writer do every day?",
        options: [
          "The writer cooks every day.",
          "The writer plays every day.",
          "The writer does homework every day.",
          "The writer does the housework every day."
        ],
        correct: 3,
        explanation: "根據文章，My sisters and I do the housework every day."
      },
      {
        question: "What does the writer's father do?",
        options: [
          "He is a teacher.",
          "He is a taxi driver.",
          "He is a doctor.",
          "He is a cook."
        ],
        correct: 1,
        explanation: "文章中提到 My father is a taxi driver."
      }
    ],
    vocabulary: [
      { word: "taxi driver", meaning: "計程車司機" },
      { word: "do the housework", meaning: "做家事" },
      { word: "cook", meaning: "做菜，煮飯" },
      { word: "do the dishes", meaning: "洗碗盤" },
      { word: "little", meaning: "小的" },
      { word: "only", meaning: "只有" },
      { word: "busy", meaning: "忙碌的" },
      { word: "teacher", meaning: "老師" },
      { word: "sister", meaning: "姊姊" },
      { word: "play", meaning: "玩" }
    ]
  },
  {
    id: 16,
    title: "👭 Sue and I",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "Sue and I",
      content: "Sue and I are sisters. We have different hobbies. She likes music, and she listens to music every day. I like sports, and I often swim on Saturday morning. On Sunday, my family always take a walk at the park."
    },
    questions: [
      "1. 請將「Sue和我是姊妹」翻譯成英文",
      "2. 請將「我們有不同的嗜好」翻譯成英文",
      "3. 請將「她喜歡音樂，而且她每天聽音樂」翻譯成英文",
      "4. 請將「我喜歡運動，而且我常常在星期六早上游泳」翻譯成英文",
      "5. 請將「在星期日，我的家人總是到公園散步」翻譯成英文"
    ],
    answers: [
      "1. Sue and I are sisters.",
      "2. We have different hobbies.",
      "3. She likes music, and she listens to music every day.",
      "4. I like sports, and I often swim on Saturday morning.",
      "5. On Sunday, my family always take a walk at the park."
    ],
    quiz: [
      {
        question: "When does the writer swim?",
        options: [
          "She swims on Sunday morning.",
          "She swims on Saturday afternoon.",
          "She swims on Saturday morning.",
          "She swims on Sunday afternoon."
        ],
        correct: 2,
        explanation: "根據文章，I often swim on Saturday morning."
      },
      {
        question: "Where do the writer's family take a walk on Sunday?",
        options: [
          "At a park.",
          "In the writer's school.",
          "In a mountain.",
          "At a gym."
        ],
        correct: 0,
        explanation: "文章中提到 On Sunday, my family always take a walk at the park."
      }
    ],
    vocabulary: [
      { word: "different", meaning: "不同的" },
      { word: "hobby", meaning: "嗜好" },
      { word: "sport", meaning: "運動" },
      { word: "swim", meaning: "游泳" },
      { word: "Saturday", meaning: "星期六" },
      { word: "Sunday", meaning: "星期日" },
      { word: "family", meaning: "家庭，家人" },
      { word: "always", meaning: "總是" },
      { word: "take a walk", meaning: "散步" },
      { word: "music", meaning: "音樂" },
      { word: "often", meaning: "常常" },
      { word: "morning", meaning: "早上" },
      { word: "park", meaning: "公園" }
    ]
  },
  {
    id: 17,
    title: "🐕🐱 Jack's pets",
    difficulty: "初級",
    category: "寵物",
    article: {
      title: "Jack's pets",
      content: "Jack has a dog and a cat. They are his pets. Jack plays with his dog every day. His cat does not play with them. It sleeps all day long."
    },
    questions: [
      "1. 請將「Jack有一隻狗和一隻貓」翻譯成英文",
      "2. 請將「牠們是他的寵物」翻譯成英文",
      "3. 請將「每天Jack和他的狗玩」翻譯成英文",
      "4. 請將「他的貓不和他們玩」翻譯成英文",
      "5. 請將「牠整天睡覺」翻譯成英文"
    ],
    answers: [
      "1. Jack has a dog and a cat.",
      "2. They are his pets.",
      "3. Jack plays with his dog every day.",
      "4. His cat does not play with them.",
      "5. It sleeps all day long."
    ],
    quiz: [
      {
        question: "How many animals does Jack have?",
        options: [
          "He has two animals.",
          "He has one animal.",
          "He has three animals.",
          "He has four animals."
        ],
        correct: 0,
        explanation: "根據文章，Jack has a dog and a cat. 總共是兩隻動物。"
      },
      {
        question: "Which is true about Jack's cat?",
        options: [
          "It doesn't sleep all day long.",
          "It plays with Jack.",
          "It doesn't play with the dog.",
          "It sometimes plays with Jack and the dog."
        ],
        correct: 2,
        explanation: "文章中提到 His cat does not play with them. 這裡的 them 指的是 Jack 和狗。"
      }
    ],
    vocabulary: [
      { word: "pet", meaning: "寵物" },
      { word: "sleep", meaning: "睡覺" },
      { word: "all day long", meaning: "整天" },
      { word: "dog", meaning: "狗" },
      { word: "cat", meaning: "貓" },
      { word: "play", meaning: "玩" },
      { word: "every day", meaning: "每天" },
      { word: "with", meaning: "和" },
      { word: "them", meaning: "他們" }
    ]
  },
  {
    id: 18,
    title: "👨‍🏫👩‍🏫 My mom and dad",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "My mom and dad",
      content: "My mom and dad are teachers. They have many books. My mom reads two books every day. I don't read books every day. I am not their student."
    },
    questions: [
      "1. 請將「我的爸爸和媽媽是老師」翻譯成英文",
      "2. 請將「他們有很多書」翻譯成英文",
      "3. 請將「我媽媽每天讀兩本書」翻譯成英文",
      "4. 請將「我沒有每天讀書」翻譯成英文",
      "5. 請將「我不是他們的學生」翻譯成英文"
    ],
    answers: [
      "1. My mom and dad are teachers.",
      "2. They have many books.",
      "3. My mom reads two books every day.",
      "4. I don't read books every day.",
      "5. I am not their student."
    ],
    quiz: [
      {
        question: "What does the writer's mother do?",
        options: [
          "She is a student.",
          "She is a doctor.",
          "She is a nurse.",
          "She is a teacher."
        ],
        correct: 3,
        explanation: "根據文章，My mom and dad are teachers."
      },
      {
        question: "Which is true?",
        options: [
          "The writer isn't his / her parents' student.",
          "The writer reads books every day.",
          "The writer's father is an engineer.",
          "The writer's mother reads one book every day."
        ],
        correct: 0,
        explanation: "文章中提到 I am not their student."
      }
    ],
    vocabulary: [
      { word: "many", meaning: "很多" },
      { word: "teacher", meaning: "老師" },
      { word: "book", meaning: "書" },
      { word: "read", meaning: "讀" },
      { word: "every day", meaning: "每天" },
      { word: "student", meaning: "學生" },
      { word: "two", meaning: "兩" },
      { word: "not", meaning: "不" }
    ]
  },
  {
    id: 19,
    title: "👨‍🦱 Mark",
    difficulty: "初級",
    category: "朋友",
    article: {
      title: "Mark",
      content: "Mark is my good friend. He likes fruit. He eats apples every morning. He does not drink Coke. He always drinks milk. This is good for his health."
    },
    questions: [
      "1. 請將「Mark是我的好朋友」翻譯成英文",
      "2. 請將「他喜歡水果」翻譯成英文",
      "3. 請將「他每天早上吃蘋果」翻譯成英文",
      "4. 請將「他不喝可樂」翻譯成英文",
      "5. 請將「他總是喝牛奶」翻譯成英文",
      "6. 請將「這有益於他的健康」翻譯成英文"
    ],
    answers: [
      "1. Mark is my good friend.",
      "2. He likes fruit.",
      "3. He eats apples every morning.",
      "4. He does not drink Coke.",
      "5. He always drinks milk.",
      "6. This is good for his health."
    ],
    quiz: [
      {
        question: "Which is true about Mark?",
        options: [
          "He likes Coke.",
          "He doesn't have friends.",
          "He never drinks milk.",
          "He likes to eat apples."
        ],
        correct: 3,
        explanation: "根據文章，He eats apples every morning."
      },
      {
        question: "Which food is healthy?",
        options: [
          "Candies.",
          "Bananas.",
          "Coke.",
          "Fried chicken."
        ],
        correct: 1,
        explanation: "根據文章，He likes fruit. He eats apples every morning. 蘋果是健康的水果。"
      }
    ],
    vocabulary: [
      { word: "every", meaning: "每個" },
      { word: "always", meaning: "總是" },
      { word: "fruit", meaning: "水果" },
      { word: "apple", meaning: "蘋果" },
      { word: "morning", meaning: "早上" },
      { word: "drink", meaning: "喝" },
      { word: "milk", meaning: "牛奶" },
      { word: "health", meaning: "健康" },
      { word: "good for", meaning: "有益於" },
      { word: "friend", meaning: "朋友" }
    ]
  },
  {
    id: 20,
    title: "🎾🎬 Different hobbies",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "Different hobbies",
      content: "My father is a bus driver. He's good at sports. He often plays tennis. My mother doesn't like sports. She likes movies. They have different hobbies."
    },
    questions: [
      "1. 請將「我爸爸是公車司機」翻譯成英文",
      "2. 請將「他擅長運動」翻譯成英文",
      "3. 請將「他經常打網球」翻譯成英文",
      "4. 請將「我媽媽不喜歡運動」翻譯成英文",
      "5. 請將「她喜歡電影」翻譯成英文",
      "6. 請將「他們有不同的嗜好」翻譯成英文"
    ],
    answers: [
      "1. My father is a bus driver.",
      "2. He's good at sports.",
      "3. He often plays tennis.",
      "4. My mother doesn't like sports.",
      "5. She likes movies.",
      "6. They have different hobbies."
    ],
    quiz: [
      {
        question: "How does the writer's mother like sports?",
        options: [
          "She likes sports.",
          "They are boring.",
          "They are interesting.",
          "She doesn't like sports."
        ],
        correct: 3,
        explanation: "根據文章，My mother doesn't like sports."
      },
      {
        question: "Which is not true?",
        options: [
          "The writer's father likes sports.",
          "The writer's mother likes to watch movies.",
          "The writer's parents have different hobbies.",
          "The writer's parents play tennis every day."
        ],
        correct: 3,
        explanation: "文章中提到 He often plays tennis，但沒有說每天打網球。"
      }
    ],
    vocabulary: [
      { word: "different", meaning: "不同的" },
      { word: "hobby", meaning: "嗜好" },
      { word: "sport", meaning: "運動" },
      { word: "often", meaning: "常常" },
      { word: "tennis", meaning: "網球" },
      { word: "bus driver", meaning: "公車司機" },
      { word: "be good at", meaning: "擅長" },
      { word: "movie", meaning: "電影" },
      { word: "like", meaning: "喜歡" },
      { word: "not", meaning: "不" }
    ]
  },
  {
    id: 21,
    title: "👨‍🎓👨‍🎓 Paul and his brother",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "Paul and his brother",
      content: "Paul and his brother are students. They read books every day. Paul likes Chinese. He does not like math. His brother likes math. He does not like English."
    },
    questions: [
      "1. 請將「Paul和他的哥哥是學生」翻譯成英文",
      "2. 請將「他們每天看書」翻譯成英文",
      "3. 請將「Paul喜歡中文」翻譯成英文",
      "4. 請將「他不喜歡數學」翻譯成英文",
      "5. 請將「他的哥哥喜歡數學」翻譯成英文",
      "6. 請將「他不喜歡英文」翻譯成英文"
    ],
    answers: [
      "1. Paul and his brother are students.",
      "2. They read books every day.",
      "3. Paul likes Chinese.",
      "4. He does not like math.",
      "5. His brother likes math.",
      "6. He does not like English."
    ],
    quiz: [
      {
        question: "What do they do every day?",
        options: [
          "They study English every day.",
          "They study math every day.",
          "They read books every day.",
          "They do homework every day."
        ],
        correct: 2,
        explanation: "根據文章，They read books every day."
      },
      {
        question: "Which is not true about Paul?",
        options: [
          "He has a brother.",
          "He is a teacher.",
          "He likes Chinese.",
          "He doesn't like math."
        ],
        correct: 1,
        explanation: "文章中提到 Paul and his brother are students，所以 Paul 是學生，不是老師。"
      }
    ],
    vocabulary: [
      { word: "Chinese", meaning: "中文" },
      { word: "math", meaning: "數學" },
      { word: "English", meaning: "英文" },
      { word: "student", meaning: "學生" },
      { word: "read", meaning: "看書" },
      { word: "every day", meaning: "每天" },
      { word: "like", meaning: "喜歡" },
      { word: "not", meaning: "不" },
      { word: "brother", meaning: "哥哥" }
    ]
  },
  {
    id: 22,
    title: "👨‍🦱 My brother",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "My brother",
      content: "Mark is my brother. He likes fruit. He eats bananas every morning. He does not drink Coke. He always drinks water. This is good for his health."
    },
    questions: [
      "1. 請將「Mark是我的哥哥」翻譯成英文",
      "2. 請將「他喜歡水果」翻譯成英文",
      "3. 請將「他每天早上吃香蕉」翻譯成英文",
      "4. 請將「他不喝可樂」翻譯成英文",
      "5. 請將「他總是喝水」翻譯成英文",
      "6. 請將「這有益他的健康」翻譯成英文"
    ],
    answers: [
      "1. Mark is my brother.",
      "2. He likes fruit.",
      "3. He eats bananas every morning.",
      "4. He does not drink Coke.",
      "5. He always drinks water.",
      "6. This is good for his health."
    ],
    quiz: [
      {
        question: "What fruit does Mark eat every morning?",
        options: [
          "Apples.",
          "Bananas.",
          "Oranges.",
          "Tomatoes."
        ],
        correct: 1,
        explanation: "根據文章，He eats bananas every morning."
      },
      {
        question: "Which is true?",
        options: [
          "Drinking water is good for Mark's health.",
          "Mark likes to drink Coke.",
          "The writer likes to eat bananas.",
          "Mark doesn't like fruit."
        ],
        correct: 0,
        explanation: "文章中提到 He always drinks water. This is good for his health."
      }
    ],
    vocabulary: [
      { word: "fruit", meaning: "水果" },
      { word: "always", meaning: "總是" },
      { word: "be good for", meaning: "有益於…" },
      { word: "health", meaning: "健康" },
      { word: "banana", meaning: "香蕉" },
      { word: "every morning", meaning: "每天早上" },
      { word: "drink", meaning: "喝" },
      { word: "water", meaning: "水" },
      { word: "Coke", meaning: "可樂" },
      { word: "not", meaning: "不" }
    ]
  },
  {
    id: 23,
    title: "👨‍🦱 My friend",
    difficulty: "初級",
    category: "朋友",
    article: {
      title: "My friend",
      content: "Tom is my friend. He doesn't eat breakfast every day. He always eats two eggs. Sometimes he drinks juice. He doesn't like fruit, so he never eats any fruit."
    },
    questions: [
      "1. 請將「Tom是我的朋友」翻譯成英文",
      "2. 請將「他沒有每天吃早餐」翻譯成英文",
      "3. 請將「他總是吃兩顆蛋」翻譯成英文",
      "4. 請將「有時候他喝果汁」翻譯成英文",
      "5. 請將「他不喜歡水果，所以他從不吃任何水果」翻譯成英文"
    ],
    answers: [
      "1. Tom is my friend.",
      "2. He doesn't eat breakfast every day.",
      "3. He always eats two eggs.",
      "4. Sometimes he drinks juice.",
      "5. He doesn't like fruit, so he never eats any fruit."
    ],
    quiz: [
      {
        question: "What does Tom always eat?",
        options: [
          "He always drinks juice.",
          "He always eats fruit.",
          "He always eats eggs.",
          "He always eats breakfast."
        ],
        correct: 2,
        explanation: "根據文章，He always eats two eggs."
      },
      {
        question: "Which is not true?",
        options: [
          "Tom likes to eat eggs.",
          "Tom isn't the writer's friend.",
          "Tom never eats fruit.",
          "Tom sometimes drinks juice."
        ],
        correct: 1,
        explanation: "文章中提到 Tom is my friend，所以 Tom 是作者的朋友。"
      }
    ],
    vocabulary: [
      { word: "sometimes", meaning: "有時候" },
      { word: "juice", meaning: "果汁" },
      { word: "fruit", meaning: "水果" },
      { word: "never", meaning: "從不" },
      { word: "any", meaning: "任何" },
      { word: "always", meaning: "總是" },
      { word: "egg", meaning: "蛋" },
      { word: "breakfast", meaning: "早餐" },
      { word: "drink", meaning: "喝" },
      { word: "like", meaning: "喜歡" },
      { word: "so", meaning: "所以" }
    ]
  },
  {
    id: 24,
    title: "👭 Jane and I",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "Jane and I",
      content: "Jane and I are sisters. We have two dogs and five cats. They are our pets. Jane plays with them all day long. She is 3. She is not a student."
    },
    questions: [
      "1. 請將「Jane和我是姊妹」翻譯成英文",
      "2. 請將「我們有兩隻狗和五隻貓」翻譯成英文",
      "3. 請將「牠們是我們的寵物」翻譯成英文",
      "4. 請將「Jane整天和牠們玩」翻譯成英文",
      "5. 請將「她三歲」翻譯成英文",
      "6. 請將「她不是學生」翻譯成英文"
    ],
    answers: [
      "1. Jane and I are sisters.",
      "2. We have two dogs and five cats.",
      "3. They are our pets.",
      "4. Jane plays with them all day long.",
      "5. She is 3.",
      "6. She is not a student."
    ],
    quiz: [
      {
        question: "Who has pets?",
        options: [
          "Jane.",
          "Jane and the writer.",
          "The writer.",
          "They don't like animals."
        ],
        correct: 1,
        explanation: "根據文章，We have two dogs and five cats. They are our pets. 所以 Jane 和作者都有寵物。"
      },
      {
        question: "Which is correct?",
        options: [
          "They are students.",
          "They have dogs and cats.",
          "Jane doesn't like cats.",
          "Jane is five years old."
        ],
        correct: 1,
        explanation: "文章中提到 We have two dogs and five cats."
      }
    ],
    vocabulary: [
      { word: "pet", meaning: "寵物" },
      { word: "play with", meaning: "和…玩" },
      { word: "all day long", meaning: "一整天" },
      { word: "sister", meaning: "姊妹" },
      { word: "dog", meaning: "狗" },
      { word: "cat", meaning: "貓" },
      { word: "two", meaning: "兩" },
      { word: "five", meaning: "五" },
      { word: "three", meaning: "三" },
      { word: "student", meaning: "學生" },
      { word: "not", meaning: "不" }
    ]
  },
  {
    id: 25,
    title: "🏃‍♀️🎬 Cherry and Jane",
    difficulty: "初級",
    category: "朋友",
    article: {
      title: "Cherry and Jane",
      content: "Cherry and Jane are good friends. They have different hobbies. Cherry likes sports. She jogs every day. Jane is not good at sports. She often watches movies at home. She has many DVDs."
    },
    questions: [
      "1. 請將「Cherry和Jane是好朋友」翻譯成英文",
      "2. 請將「她們有不同的嗜好」翻譯成英文",
      "3. 請將「Cherry喜歡運動」翻譯成英文",
      "4. 請將「她每天慢跑」翻譯成英文",
      "5. 請將「Jane不擅長運動」翻譯成英文",
      "6. 請將「她常在家裡看電影」翻譯成英文",
      "7. 請將「她有很多影碟片」翻譯成英文"
    ],
    answers: [
      "1. Cherry and Jane are good friends.",
      "2. They have different hobbies.",
      "3. Cherry likes sports.",
      "4. She jogs every day.",
      "5. Jane is not good at sports.",
      "6. She often watches movies at home.",
      "7. She has many DVDs."
    ],
    quiz: [
      {
        question: "Who likes to watch movies?",
        options: [
          "Jane.",
          "Cherry.",
          "Cherry and Jane.",
          "No one."
        ],
        correct: 0,
        explanation: "根據文章，She often watches movies at home. She has many DVDs."
      },
      {
        question: "Which is true about Cherry?",
        options: [
          "She has many DVDs.",
          "She is good at sports.",
          "She watches TV at home every day.",
          "She likes movies."
        ],
        correct: 1,
        explanation: "文章中提到 Cherry likes sports. She jogs every day."
      }
    ],
    vocabulary: [
      { word: "different", meaning: "不同的" },
      { word: "hobby", meaning: "嗜好" },
      { word: "sport", meaning: "運動" },
      { word: "jog", meaning: "慢跑" },
      { word: "at home", meaning: "在家" },
      { word: "DVD", meaning: "影碟片" },
      { word: "friend", meaning: "朋友" },
      { word: "like", meaning: "喜歡" },
      { word: "every day", meaning: "每天" },
      { word: "often", meaning: "常" },
      { word: "watch", meaning: "看" },
      { word: "movie", meaning: "電影" },
      { word: "many", meaning: "很多" }
    ]
  },
  {
    id: 26,
    title: "👨‍⚕️👩‍⚕️ My mother and father",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "My mother and father",
      content: "My mom and dad are doctors. They are busy with work. They don't eat breakfast every day. My sister and I are students. We go to school every day. We do homework and play computer games after school."
    },
    questions: [
      "1. 請將「我爸爸和我媽媽是醫生」翻譯成英文",
      "2. 請將「他們忙於工作」翻譯成英文",
      "3. 請將「他們沒有每天吃早餐」翻譯成英文",
      "4. 請將「我和我姊姊是學生」翻譯成英文",
      "5. 請將「我們每天上學」翻譯成英文",
      "6. 請將「放學後，我們做功課和玩電腦遊戲」翻譯成英文"
    ],
    answers: [
      "1. My mom and dad are doctors.",
      "2. They are busy with work.",
      "3. They don't eat breakfast every day.",
      "4. My sister and I are students.",
      "5. We go to school every day.",
      "6. We do homework and play computer games after school."
    ],
    quiz: [
      {
        question: "How many people are there in the writer's family?",
        options: [
          "There are three people in the writer's family.",
          "There are five people in the writer's family.",
          "There are four people in the writer's family.",
          "There are six people in the writer's family."
        ],
        correct: 2,
        explanation: "根據文章，My mom and dad are doctors. My sister and I are students. 所以有爸爸、媽媽、姊姊和作者，共四個人。"
      },
      {
        question: "What do the writer's sister and the writer do after school?",
        options: [
          "They do the housework.",
          "They play computer games.",
          "They cook dinner.",
          "They watch TV."
        ],
        correct: 1,
        explanation: "文章中提到 We do homework and play computer games after school."
      }
    ],
    vocabulary: [
      { word: "busy", meaning: "忙碌" },
      { word: "after school", meaning: "放學後" },
      { word: "doctor", meaning: "醫生" },
      { word: "work", meaning: "工作" },
      { word: "breakfast", meaning: "早餐" },
      { word: "student", meaning: "學生" },
      { word: "school", meaning: "學校" },
      { word: "homework", meaning: "功課" },
      { word: "computer game", meaning: "電腦遊戲" },
      { word: "sister", meaning: "姊姊" },
      { word: "every day", meaning: "每天" },
      { word: "play", meaning: "玩" },
      { word: "do", meaning: "做" }
    ]
  },
  {
    id: 27,
    title: "👨‍🏫 My teacher",
    difficulty: "初級",
    category: "學校",
    article: {
      title: "My teacher",
      content: "My teacher doesn't have sons. He has three daughters. They and I study in the same school. They don't read books every day. They like music and movies. They have many DVDs. They usually watch movies at home."
    },
    questions: [
      "1. 請將「我的老師沒有兒子」翻譯成英文",
      "2. 請將「他有三個女兒」翻譯成英文",
      "3. 請將「我和他們讀相同一所學校」翻譯成英文",
      "4. 請將「他們沒有每天讀書」翻譯成英文",
      "5. 請將「他們喜歡音樂和電影」翻譯成英文",
      "6. 請將「他們有許多DVD」翻譯成英文",
      "7. 請將「他們通常在家看電影」翻譯成英文"
    ],
    answers: [
      "1. My teacher doesn't have sons.",
      "2. He has three daughters.",
      "3. They and I study in the same school.",
      "4. They don't read books every day.",
      "5. They like music and movies.",
      "6. They have many DVDs.",
      "7. They usually watch movies at home."
    ],
    quiz: [
      {
        question: "Who are They?",
        options: [
          "The teacher's three daughters.",
          "The teacher and the writer.",
          "The teacher's three daughters and the writer.",
          "The teacher and the teacher's daughters."
        ],
        correct: 0,
        explanation: "根據文章，He has three daughters. They and I study in the same school. 所以 They 指的是老師的三個女兒。"
      },
      {
        question: "Which is true?",
        options: [
          "The writer and the teacher's daughters are in the same school.",
          "The writer likes to watch movies at home.",
          "The writer's teacher has three sons.",
          "The teacher likes music and listens to music every day."
        ],
        correct: 0,
        explanation: "文章中提到 They and I study in the same school. 所以作者和老師的女兒在同一所學校。"
      }
    ],
    vocabulary: [
      { word: "the same", meaning: "相同" },
      { word: "usually", meaning: "通常" },
      { word: "teacher", meaning: "老師" },
      { word: "son", meaning: "兒子" },
      { word: "daughter", meaning: "女兒" },
      { word: "school", meaning: "學校" },
      { word: "book", meaning: "書" },
      { word: "music", meaning: "音樂" },
      { word: "movie", meaning: "電影" },
      { word: "DVD", meaning: "影碟片" },
      { word: "at home", meaning: "在家" },
      { word: "watch", meaning: "看" },
      { word: "study", meaning: "讀書" },
      { word: "like", meaning: "喜歡" },
      { word: "many", meaning: "許多" },
      { word: "three", meaning: "三" },
      { word: "every day", meaning: "每天" }
    ]
  },
  {
    id: 28,
    title: "🎵 Kiki",
    difficulty: "初級",
    category: "學校",
    article: {
      title: "Kiki",
      content: "Kiki is my classmate. Music is her best friend. She likes to listen to music, and she often goes to concerts. JJ is her favorite piano player."
    },
    questions: [
      "1. 請將「Kiki是我的同學」翻譯成英文",
      "2. 請將「音樂是她最好的朋友」翻譯成英文",
      "3. 請將「她喜歡聽音樂，而且她常常去音樂會」翻譯成英文",
      "4. 請將「JJ是她最喜愛的鋼琴演奏家」翻譯成英文"
    ],
    answers: [
      "1. Kiki is my classmate.",
      "2. Music is her best friend.",
      "3. She likes to listen to music, and she often goes to concerts.",
      "4. JJ is her favorite piano player."
    ],
    quiz: [
      {
        question: "Who is Kiki?",
        options: [
          "She's the writer's classmate, and she has no friends.",
          "She's JJ's friend, and she likes music.",
          "She's JJ's friend, and they like music.",
          "She's the writer's classmate, and she likes music."
        ],
        correct: 3,
        explanation: "根據文章，Kiki is my classmate. Music is her best friend. 所以 Kiki 是作者的同學，而且她喜歡音樂。"
      },
      {
        question: "Which is not correct?",
        options: [
          "The writer often goes to JJ's concerts.",
          "Kiki is the writer's classmate.",
          "Music is Kiki's good friend.",
          "JJ is a piano player."
        ],
        correct: 0,
        explanation: "文章中提到 She often goes to concerts. 指的是 Kiki 常常去音樂會，不是作者。"
      }
    ],
    vocabulary: [
      { word: "classmate", meaning: "同學" },
      { word: "often", meaning: "常常" },
      { word: "concert", meaning: "音樂會" },
      { word: "favorite", meaning: "最喜愛的" },
      { word: "player", meaning: "演奏者" },
      { word: "music", meaning: "音樂" },
      { word: "best", meaning: "最好的" },
      { word: "friend", meaning: "朋友" },
      { word: "listen", meaning: "聽" },
      { word: "go", meaning: "去" },
      { word: "piano", meaning: "鋼琴" },
      { word: "like", meaning: "喜歡" }
    ]
  },
  {
    id: 29,
    title: "🎬 Amy",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "Amy",
      content: "Amy is my sister. She likes movies very much. She likes to see movies, and she often goes to movie theaters. Tom Cruise is her favorite actor."
    },
    questions: [
      "1. 請將「Amy是我的妹妹」翻譯成英文",
      "2. 請將「她很喜歡電影」翻譯成英文",
      "3. 請將「她喜歡看電影，而且常常去電影院」翻譯成英文",
      "4. 請將「Tom Cruise是她最喜愛的演員」翻譯成英文"
    ],
    answers: [
      "1. Amy is my sister.",
      "2. She likes movies very much.",
      "3. She likes to see movies, and she often goes to movie theaters.",
      "4. Tom Cruise is her favorite actor."
    ],
    quiz: [
      {
        question: "What does Amy like?",
        options: [
          "She likes music.",
          "She likes movies.",
          "She likes to listen to music.",
          "She likes to go to school."
        ],
        correct: 1,
        explanation: "根據文章，She likes movies very much. 所以 Amy 喜歡電影。"
      },
      {
        question: "Who is Tom Cruise?",
        options: [
          "He is an actor.",
          "He is a piano player.",
          "He is a singer.",
          "He is a baseball player."
        ],
        correct: 0,
        explanation: "文章中提到 Tom Cruise is her favorite actor."
      }
    ],
    vocabulary: [
      { word: "very much", meaning: "很…" },
      { word: "often", meaning: "常常" },
      { word: "movie theater", meaning: "電影院" },
      { word: "favorite", meaning: "最喜愛的" },
      { word: "sister", meaning: "妹妹" },
      { word: "movie", meaning: "電影" },
      { word: "like", meaning: "喜歡" },
      { word: "see", meaning: "看" },
      { word: "go", meaning: "去" },
      { word: "actor", meaning: "演員" }
    ]
  },
  {
    id: 30,
    title: "👨‍👩‍👧‍👦 Ted's family",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "Ted's family",
      content: "There are five people in Ted's family. His mom and dad are teachers. They are always busy during weekdays. Ted has a brother and a sister. They go to school together every day. He likes to have a picnic with his family on weekends."
    },
    questions: [
      "1. 請將「Ted的家庭有五個人」翻譯成英文",
      "2. 請將「他的爸爸和媽媽是老師」翻譯成英文",
      "3. 請將「在平日間他們總是忙碌」翻譯成英文",
      "4. 請將「Ted有一個哥哥和一個妹妹」翻譯成英文",
      "5. 請將「他們每天一起上學」翻譯成英文",
      "6. 請將「週末時他喜歡和他的家人去野餐」翻譯成英文"
    ],
    answers: [
      "1. There are five people in Ted's family.",
      "2. His mom and dad are teachers.",
      "3. They are always busy during weekdays.",
      "4. Ted has a brother and a sister.",
      "5. They go to school together every day.",
      "6. He likes to have a picnic with his family on weekends."
    ],
    quiz: [
      {
        question: "How many people are there in Ted's family?",
        options: [
          "Three.",
          "Four.",
          "Five.",
          "Six."
        ],
        correct: 2,
        explanation: "根據文章，There are five people in Ted's family."
      },
      {
        question: "What does Ted like to do on weekends?",
        options: [
          "He likes to watch TV.",
          "He likes to play baseball.",
          "He likes to play basketball.",
          "He likes to have a picnic."
        ],
        correct: 3,
        explanation: "文章中提到 He likes to have a picnic with his family on weekends."
      }
    ],
    vocabulary: [
      { word: "during", meaning: "期間" },
      { word: "weekday", meaning: "平日" },
      { word: "together", meaning: "一起" },
      { word: "have a picnic", meaning: "野餐" },
      { word: "weekend", meaning: "週末" },
      { word: "family", meaning: "家庭" },
      { word: "people", meaning: "人" },
      { word: "teacher", meaning: "老師" },
      { word: "always", meaning: "總是" },
      { word: "busy", meaning: "忙碌" },
      { word: "brother", meaning: "哥哥" },
      { word: "sister", meaning: "妹妹" },
      { word: "school", meaning: "學校" },
      { word: "every day", meaning: "每天" },
      { word: "like", meaning: "喜歡" },
      { word: "five", meaning: "五" }
    ]
  },
  {
    id: 31,
    title: "👶 My little brother",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "My little brother",
      content: "Tom is my little brother. He doesn't eat breakfast every day. He always eats toast and an egg. Sometimes he drinks juice. He doesn't like to eat fruit."
    },
    questions: [
      "1. 請將「Tom是我的小弟」翻譯成英文",
      "2. 請將「他沒有每天吃早餐」翻譯成英文",
      "3. 請將「他總是吃土司和一顆蛋」翻譯成英文",
      "4. 請將「有時候他喝果汁」翻譯成英文",
      "5. 請將「他不喜歡吃水果」翻譯成英文"
    ],
    answers: [
      "1. Tom is my little brother.",
      "2. He doesn't eat breakfast every day.",
      "3. He always eats toast and an egg.",
      "4. Sometimes he drinks juice.",
      "5. He doesn't like to eat fruit."
    ],
    quiz: [
      {
        question: "Who is Tom?",
        options: [
          "He's the writer's friend.",
          "He's the writer's father.",
          "He's the writer's teacher.",
          "He's the writer's brother."
        ],
        correct: 3,
        explanation: "根據文章，Tom is my little brother."
      },
      {
        question: "What does Tom like to eat?",
        options: [
          "He likes to eat fruit.",
          "He likes to eat rice.",
          "He likes to eat toast and eggs.",
          "He likes to eat chocolate."
        ],
        correct: 2,
        explanation: "文章中提到 He always eats toast and an egg."
      }
    ],
    vocabulary: [
      { word: "little", meaning: "小的" },
      { word: "breakfast", meaning: "早餐" },
      { word: "always", meaning: "總是" },
      { word: "toast", meaning: "吐司" },
      { word: "egg", meaning: "蛋，雞蛋" },
      { word: "sometimes", meaning: "有時候" },
      { word: "brother", meaning: "弟弟" },
      { word: "eat", meaning: "吃" },
      { word: "every day", meaning: "每天" },
      { word: "drink", meaning: "喝" },
      { word: "juice", meaning: "果汁" },
      { word: "like", meaning: "喜歡" },
      { word: "fruit", meaning: "水果" }
    ]
  },
  {
    id: 32,
    title: "📚 A new book",
    difficulty: "初級",
    category: "學校",
    article: {
      title: "A new book",
      content: "Tom doesn't have computers. He seldom plays computer games after school. He likes to read books. He has a new book. The book is about animals. It has many pictures."
    },
    questions: [
      "1. 請將「Tom沒有電腦」翻譯成英文",
      "2. 請將「放學後他很少玩電腦遊戲」翻譯成英文",
      "3. 請將「他喜歡讀書」翻譯成英文",
      "4. 請將「他有一本新書」翻譯成英文",
      "5. 請將「這本書關於動物」翻譯成英文",
      "6. 請將「它有很多圖片」翻譯成英文"
    ],
    answers: [
      "1. Tom doesn't have computers.",
      "2. He seldom plays computer games after school.",
      "3. He likes to read books.",
      "4. He has a new book.",
      "5. The book is about animals.",
      "6. It has many pictures."
    ],
    quiz: [
      {
        question: "What does Tom have?",
        options: [
          "He has a book.",
          "He has a computer.",
          "He has computer games.",
          "He has many animals."
        ],
        correct: 0,
        explanation: "根據文章，He has a new book."
      },
      {
        question: "Why doesn't Tom often play computer games?",
        options: [
          "He doesn't have computers.",
          "He doesn't like to play computer games.",
          "He doesn't have computer games.",
          "His father doesn't want him to play computer games."
        ],
        correct: 0,
        explanation: "文章中提到 Tom doesn't have computers."
      }
    ],
    vocabulary: [
      { word: "seldom", meaning: "很少" },
      { word: "computer game", meaning: "電腦遊戲" },
      { word: "after school", meaning: "放學後" },
      { word: "about", meaning: "關於" },
      { word: "picture", meaning: "畫" },
      { word: "computer", meaning: "電腦" },
      { word: "play", meaning: "玩" },
      { word: "like", meaning: "喜歡" },
      { word: "read", meaning: "讀書" },
      { word: "book", meaning: "書" },
      { word: "new", meaning: "新" },
      { word: "animal", meaning: "動物" },
      { word: "many", meaning: "很多" }
    ]
  },
  {
    id: 33,
    title: "🎨 Ivy",
    difficulty: "初級",
    category: "朋友",
    article: {
      title: "Ivy",
      content: "Ivy is 10. She is quiet and shy. She seldom talks. She likes comic books and often reads them at home. She also likes to draw pictures. I like music. We have different hobbies."
    },
    questions: [
      "1. 請將「Ivy十歲」翻譯成英文",
      "2. 請將「她很安靜而且害羞」翻譯成英文",
      "3. 請將「她很少說話」翻譯成英文",
      "4. 請將「她喜歡漫畫書，而且常常在家讀它們」翻譯成英文",
      "5. 請將「她也喜歡畫圖」翻譯成英文",
      "6. 請將「我喜歡音樂」翻譯成英文",
      "7. 請將「我們有不同的嗜好」翻譯成英文"
    ],
    answers: [
      "1. Ivy is 10.",
      "2. She is quiet and shy.",
      "3. She seldom talks.",
      "4. She likes comic books and often reads them at home.",
      "5. She also likes to draw pictures.",
      "6. I like music.",
      "7. We have different hobbies."
    ],
    quiz: [
      {
        question: "How old is Ivy?",
        options: [
          "She is one year old.",
          "She is ten years old.",
          "She is five years old.",
          "She is eleven years old."
        ],
        correct: 1,
        explanation: "根據文章，Ivy is 10."
      },
      {
        question: "What does Ivy like to do?",
        options: [
          "She likes to watch movies at home.",
          "She likes to watch TV at home.",
          "She likes to listen to music.",
          "She likes to read comic books and draw pictures."
        ],
        correct: 3,
        explanation: "文章中提到 She likes comic books and often reads them at home. She also likes to draw pictures."
      }
    ],
    vocabulary: [
      { word: "quiet", meaning: "安靜的" },
      { word: "shy", meaning: "害羞的" },
      { word: "seldom", meaning: "很少" },
      { word: "comic book", meaning: "漫畫書" },
      { word: "often", meaning: "常常" },
      { word: "draw", meaning: "畫" },
      { word: "different", meaning: "不同的" },
      { word: "hobby", meaning: "嗜好" },
      { word: "talk", meaning: "說話" },
      { word: "read", meaning: "讀" },
      { word: "at home", meaning: "在家" },
      { word: "picture", meaning: "圖" },
      { word: "music", meaning: "音樂" },
      { word: "like", meaning: "喜歡" },
      { word: "also", meaning: "也" }
    ]
  },
  {
    id: 34,
    title: "🎤 Nick and Tim's mother",
    difficulty: "初級",
    category: "家庭",
    article: {
      title: "Nick and Tim's mother",
      content: "Nick and Tim's mother is a singer. She is good at singing. She likes purple. She always wears purple clothes. On weekends, Nick and his family like to fly kites in the park. They have many purple kites."
    },
    questions: [
      "1. 請將「Nick和Tim的媽媽是歌手」翻譯成英文",
      "2. 請將「她很擅長唱歌」翻譯成英文",
      "3. 請將「她喜歡紫色」翻譯成英文",
      "4. 請將「她總是穿紫色的衣服」翻譯成英文",
      "5. 請將「週末的時候，尼克和他的家人喜歡在公園放風箏」翻譯成英文",
      "6. 請將「他們有許多紫色的風箏」翻譯成英文"
    ],
    answers: [
      "1. Nick and Tim's mother is a singer.",
      "2. She is good at singing.",
      "3. She likes purple.",
      "4. She always wears purple clothes.",
      "5. On weekends, Nick and his family like to fly kites in the park.",
      "6. They have many purple kites."
    ],
    quiz: [
      {
        question: "What does Tim's mother do?",
        options: [
          "She is a singer.",
          "She is a doctor.",
          "She is a nurse.",
          "She is a teacher."
        ],
        correct: 0,
        explanation: "根據文章，Nick and Tim's mother is a singer."
      },
      {
        question: "Where do Nick and Tim's family fly kites?",
        options: [
          "In Tim's school.",
          "In the park.",
          "In Nick's school.",
          "In their house."
        ],
        correct: 1,
        explanation: "文章中提到 On weekends, Nick and his family like to fly kites in the park."
      }
    ],
    vocabulary: [
      { word: "be good at", meaning: "擅長於…" },
      { word: "purple", meaning: "紫色" },
      { word: "always", meaning: "總是" },
      { word: "wear", meaning: "穿" },
      { word: "cloth", meaning: "衣服" },
      { word: "weekend", meaning: "週末" },
      { word: "fly kites", meaning: "放風箏" },
      { word: "mother", meaning: "媽媽" },
      { word: "singer", meaning: "歌手" },
      { word: "singing", meaning: "唱歌" },
      { word: "like", meaning: "喜歡" },
      { word: "clothes", meaning: "衣服" },
      { word: "family", meaning: "家人" },
      { word: "park", meaning: "公園" },
      { word: "many", meaning: "許多" },
      { word: "kite", meaning: "風箏" }
    ]
  },
  {
    id: 35,
    title: "💃 Tina",
    difficulty: "初級",
    category: "學校",
    article: {
      title: "Tina",
      content: "Tina loves dancing. She is a student at the American School now. She practices dancing every day. She also likes to teach her friends to dance. She likes her school life. She wants to be a great dancer in the future."
    },
    questions: [
      "1. 請將「Tina熱愛跳舞」翻譯成英文",
      "2. 請將「她現在是美國學校的學生」翻譯成英文",
      "3. 請將「她每天都練習跳舞」翻譯成英文",
      "4. 請將「她也喜歡教她的朋友們跳舞」翻譯成英文",
      "5. 請將「她喜歡她的學校生活」翻譯成英文",
      "6. 請將「未來她想要成為一位很棒的舞者」翻譯成英文"
    ],
    answers: [
      "1. Tina loves dancing.",
      "2. She is a student at the American School now.",
      "3. She practices dancing every day.",
      "4. She also likes to teach her friends to dance.",
      "5. She likes her school life.",
      "6. She wants to be a great dancer in the future."
    ],
    quiz: [
      {
        question: "Where does Tina study?",
        options: [
          "She studies at the Japanese School.",
          "She studies in Nantou.",
          "She studies in Taichung.",
          "She studies at the American School."
        ],
        correct: 3,
        explanation: "根據文章，She is a student at the American School now."
      },
      {
        question: "Which is not true?",
        options: [
          "Tina doesn't like dancing.",
          "Tina loves her school life.",
          "Tina is a student now.",
          "Tina also teaches her friends dancing."
        ],
        correct: 0,
        explanation: "文章中提到 Tina loves dancing. 所以說她不喜歡跳舞是不正確的。"
      }
    ],
    vocabulary: [
      { word: "American School", meaning: "美國學校" },
      { word: "practice", meaning: "練習" },
      { word: "teach", meaning: "教導" },
      { word: "school life", meaning: "學校生活" },
      { word: "great", meaning: "很棒的" },
      { word: "dancer", meaning: "舞者" },
      { word: "in the future", meaning: "未來" },
      { word: "love", meaning: "熱愛" },
      { word: "dancing", meaning: "跳舞" },
      { word: "student", meaning: "學生" },
      { word: "every day", meaning: "每天" },
      { word: "also", meaning: "也" },
      { word: "friend", meaning: "朋友" },
      { word: "like", meaning: "喜歡" },
      { word: "want", meaning: "想要" },
      { word: "be", meaning: "成為" }
    ]
  },
  {
    id: 36,
    title: "🍗 Favorite food",
    difficulty: "初級",
    category: "食物",
    article: {
      title: "Favorite food",
      content: "I am Polly. I like chicken. Betty is my friend. She loves pork. We don't eat fish. What is your favorite food?"
    },
    questions: [
      "1. 請將「我是Polly」翻譯成英文",
      "2. 請將「我喜歡雞肉」翻譯成英文",
      "3. 請將「Betty是我的朋友」翻譯成英文",
      "4. 請將「她愛豬肉」翻譯成英文",
      "5. 請將「我們不吃魚」翻譯成英文",
      "6. 請將「你最喜愛的食物是什麼？」翻譯成英文"
    ],
    answers: [
      "1. I am Polly.",
      "2. I like chicken.",
      "3. Betty is my friend.",
      "4. She loves pork.",
      "5. We don't eat fish.",
      "6. What is your favorite food?"
    ],
    quiz: [
      {
        question: "Which food does Polly like?",
        options: [
          "Beef.",
          "Chicken.",
          "Pork.",
          "Fish."
        ],
        correct: 1,
        explanation: "根據文章，I am Polly. I like chicken."
      },
      {
        question: "Which is not true?",
        options: [
          "Betty is Polly's friend.",
          "Polly likes to eat chicken.",
          "Polly and Betty like fish.",
          "Betty loves pork."
        ],
        correct: 2,
        explanation: "文章中提到 We don't eat fish. 所以說 Polly 和 Betty 喜歡魚是不正確的。"
      }
    ],
    vocabulary: [
      { word: "favorite", meaning: "最喜愛的" },
      { word: "food", meaning: "食物" },
      { word: "chicken", meaning: "雞，雞肉" },
      { word: "fish", meaning: "魚，魚肉" },
      { word: "pork", meaning: "豬肉" },
      { word: "friend", meaning: "朋友" },
      { word: "love", meaning: "愛" },
      { word: "like", meaning: "喜歡" },
      { word: "eat", meaning: "吃" },
      { word: "what", meaning: "什麼" },
      { word: "your", meaning: "你的" },
      { word: "is", meaning: "是" }
    ]
  },
  {
    id: 37,
    title: "🍪 Food",
    difficulty: "初級",
    category: "食物",
    article: {
      title: "Food",
      content: "I am Polly. I like cookies. Betty is my friend. She loves ice cream. We don't eat fish. What food do you like?"
    },
    questions: [
      "1. 請將「我是Polly」翻譯成英文",
      "2. 請將「我喜歡餅乾」翻譯成英文",
      "3. 請將「Betty是我的朋友」翻譯成英文",
      "4. 請將「她愛冰淇淋」翻譯成英文",
      "5. 請將「我們不吃魚」翻譯成英文",
      "6. 請將「你喜歡什麼食物？」翻譯成英文"
    ],
    answers: [
      "1. I am Polly.",
      "2. I like cookies.",
      "3. Betty is my friend.",
      "4. She loves ice cream.",
      "5. We don't eat fish.",
      "6. What food do you like?"
    ],
    quiz: [
      {
        question: "What food does Polly like?",
        options: [
          "She likes cakes.",
          "She likes fish.",
          "She likes ice cream.",
          "She likes cookies."
        ],
        correct: 3,
        explanation: "根據文章，I am Polly. I like cookies."
      },
      {
        question: "Which is not true?",
        options: [
          "They don't like fish.",
          "Polly likes to eat cookies.",
          "Betty likes to eat ice cream.",
          "They all like fish."
        ],
        correct: 3,
        explanation: "文章中提到 We don't eat fish. 所以說她們都喜歡魚是不正確的。"
      }
    ],
    vocabulary: [
      { word: "cookie", meaning: "餅乾" },
      { word: "love", meaning: "喜愛" },
      { word: "ice cream", meaning: "冰淇淋" },
      { word: "food", meaning: "食物" },
      { word: "friend", meaning: "朋友" },
      { word: "like", meaning: "喜歡" },
      { word: "eat", meaning: "吃" },
      { word: "fish", meaning: "魚" },
      { word: "what", meaning: "什麼" },
      { word: "do", meaning: "做" },
      { word: "you", meaning: "你" }
    ]
  },
  {
    id: 38,
    title: "🏃‍♂️ My good friend",
    difficulty: "初級",
    category: "朋友",
    article: {
      title: "My good friend",
      content: "Tim and I are good friends. We go to school together every day. We like sports. We often play dodge ball after school. What sports do you like?"
    },
    questions: [
      "1. 請將「Tim和我是好朋友」翻譯成英文",
      "2. 請將「每天我們一起上學」翻譯成英文",
      "3. 請將「我們喜愛運動」翻譯成英文",
      "4. 請將「我們常常在放學後打躲避球」翻譯成英文",
      "5. 請將「你喜歡什麼運動？」翻譯成英文"
    ],
    answers: [
      "1. Tim and I are good friends.",
      "2. We go to school together every day.",
      "3. We like sports.",
      "4. We often play dodge ball after school.",
      "5. What sports do you like?"
    ],
    quiz: [
      {
        question: "What do they like?",
        options: [
          "They like sports.",
          "They like to read books.",
          "They like music.",
          "They like movies."
        ],
        correct: 0,
        explanation: "根據文章，We like sports."
      },
      {
        question: "What do they often do?",
        options: [
          "They often play basketball.",
          "They often play baseball.",
          "They often play dodge ball.",
          "They often play tennis."
        ],
        correct: 2,
        explanation: "文章中提到 We often play dodge ball after school."
      }
    ],
    vocabulary: [
      { word: "together", meaning: "一起" },
      { word: "sport", meaning: "運動" },
      { word: "dodge ball", meaning: "躲避球" },
      { word: "after school", meaning: "放學後" },
      { word: "good friend", meaning: "好朋友" },
      { word: "go", meaning: "去" },
      { word: "school", meaning: "學校" },
      { word: "every day", meaning: "每天" },
      { word: "like", meaning: "喜歡" },
      { word: "often", meaning: "常常" },
      { word: "play", meaning: "打" },
      { word: "what", meaning: "什麼" },
      { word: "do", meaning: "做" },
      { word: "you", meaning: "你" }
    ]
  },
  {
    id: 39,
    title: "🏠 After school",
    difficulty: "初級",
    category: "學校",
    article: {
      title: "After school",
      content: "What do you do after school? I often do homework and read books at home. Sometimes I watch TV with my brother. I eat dinner with my family at night."
    },
    questions: [
      "1. 請將「放學後你都做什麼？」翻譯成英文",
      "2. 請將「我常常在家裡做功課和讀書」翻譯成英文",
      "3. 請將「有時候我和我的弟弟看電視」翻譯成英文",
      "4. 請將「晚上我和我的家人吃飯」翻譯成英文"
    ],
    answers: [
      "1. What do you do after school?",
      "2. I often do homework and read books at home.",
      "3. Sometimes I watch TV with my brother.",
      "4. I eat dinner with my family at night."
    ],
    quiz: [
      {
        question: "What does the writer do at night?",
        options: [
          "The writer eats dinner.",
          "The writer reads books.",
          "The writer watches TV.",
          "The writer does homework."
        ],
        correct: 0,
        explanation: "根據文章，I eat dinner with my family at night."
      },
      {
        question: "Which is not true?",
        options: [
          "The writer doesn't watch TV.",
          "The writer reads books at home.",
          "The writer often does homework at home.",
          "The writer sometimes watches TV."
        ],
        correct: 0,
        explanation: "文章中提到 Sometimes I watch TV with my brother. 所以說作者不看電視是不正確的。"
      }
    ],
    vocabulary: [
      { word: "after", meaning: "在…之後" },
      { word: "at home", meaning: "在家裡" },
      { word: "sometimes", meaning: "有時候" },
      { word: "family", meaning: "家人" },
      { word: "often", meaning: "常常" },
      { word: "with", meaning: "和" },
      { word: "dinner", meaning: "晚餐" },
      { word: "night", meaning: "晚上" }
    ]
  },
  {
    id: 40,
    title: "👩‍🏫 Annie",
    difficulty: "初級",
    category: "學校",
    article: {
      title: "Annie",
      content: "Annie is a very nice teacher. We love her. She teaches math. My friend and I like math. We are doing math homework now. Do you like math?"
    },
    questions: [
      "1. 請將「Annie是一位非常好的老師」翻譯成英文",
      "2. 請將「我們喜愛她」翻譯成英文",
      "3. 請將「她教數學」翻譯成英文",
      "4. 請將「我和我朋友喜歡數學」翻譯成英文",
      "5. 請將「現在我們正在寫數學功課」翻譯成英文",
      "6. 請將「你喜歡數學嗎？」翻譯成英文"
    ],
    answers: [
      "1. Annie is a very nice teacher.",
      "2. We love her.",
      "3. She teaches math.",
      "4. My friend and I like math.",
      "5. We are doing math homework now.",
      "6. Do you like math?"
    ],
    quiz: [
      {
        question: "Who is Annie?",
        options: [
          "She is a student.",
          "She is the writer's friend.",
          "She is a teacher.",
          "She is the writer's friend."
        ],
        correct: 2,
        explanation: "根據文章，Annie is a very nice teacher."
      },
      {
        question: "How does the writer like math?",
        options: [
          "The writer likes English better than math.",
          "The writer thinks it's boring.",
          "The writer doesn't like it.",
          "The writer likes it."
        ],
        correct: 3,
        explanation: "文章中提到 My friend and I like math."
      }
    ],
    vocabulary: [
      { word: "love", meaning: "喜愛" },
      { word: "teach", meaning: "教導" },
      { word: "math", meaning: "數學" },
      { word: "nice", meaning: "好的" },
      { word: "like", meaning: "喜歡" },
      { word: "and", meaning: "和" }    ]
  }
];

// 寫作練習主題
const writingTopics = [
  {
    id: 1,
    title: "My Dream Job",
    description: "描述你的理想工作",
    prompts: [
      "What is your dream job?",
      "Why do you want this job?",
      "What skills do you need for this job?",
      "How will you prepare for this career?"
    ],
    tips: [
      "使用連接詞：First, Second, Finally",
      "描述具體的工作內容",
      "說明為什麼選擇這個職業",
      "提到需要的技能和準備"
    ]
  },
  {
    id: 2,
    title: "My Hometown",
    description: "介紹你的家鄉",
    prompts: [
      "Where is your hometown?",
      "What is special about your hometown?",
      "What do you like most about your hometown?",
      "Would you recommend others to visit?"
    ],
    tips: [
      "描述地理位置",
      "提到特色景點或文化",
      "分享個人感受",
      "給出推薦理由"
    ]
  },
  {
    id: 3,
    title: "Technology in Daily Life",
    description: "科技在日常生活中的應用",
    prompts: [
      "How do you use technology every day?",
      "What technology is most important to you?",
      "How has technology changed your life?",
      "What technology do you want to learn?"
    ],
    tips: [
      "舉出具體的例子",
      "說明科技的好處",
      "描述變化前後的差異",
      "表達學習新科技的意願"
    ]
  }
];

// 聽力練習資料
const listeningTopics = [
  {
    id: 1,
    title: "Environmental Protection",
    description: "環境保護相關聽力練習",
    audioText: "Environmental protection is crucial for our planet's future. We must reduce pollution and protect natural resources. Simple actions like recycling and saving energy can make a big difference. Everyone can contribute to protecting the environment.",
    questions: [
      "What is crucial for our planet's future?",
      "What simple actions can help?",
      "Who can contribute to environmental protection?"
    ],
    answers: [
      "Environmental protection",
      "Recycling and saving energy",
      "Everyone"
    ]
  },
  {
    id: 2,
    title: "Healthy Lifestyle",
    description: "健康生活方式聽力練習",
    audioText: "A healthy lifestyle includes regular exercise, balanced diet, and enough sleep. Exercise helps strengthen our bodies and improve mental health. Eating nutritious food provides energy and prevents diseases. Getting enough sleep is essential for recovery and concentration.",
    questions: [
      "What does a healthy lifestyle include?",
      "How does exercise help us?",
      "Why is sleep important?"
    ],
    answers: [
      "Regular exercise, balanced diet, and enough sleep",
      "Strengthens bodies and improves mental health",
      "Essential for recovery and concentration"
    ]
  }
];

// 匯出資料供其他檔案使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    articleLevels,
    writingTopics,
    listeningTopics
  };
} 