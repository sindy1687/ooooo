// 文法塔統一題庫系統
// 每個小關卡10題，難度逐關遞增

// 統一題庫 - 所有題目按難度分類
const UNIFIED_QUESTION_BANK = {
    easy: [
        { question: "I ___ a student.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 是第一人稱單數，要用 am", logicHint: "我是第一人稱，想想第一人稱要用什麼 be動詞？", difficultWords: ["student"] },
        { question: "You ___ my friend.", options: ["am", "is", "are", "be"], correct: 2, explanation: "You 是第二人稱，要用 are", logicHint: "你是第二人稱，想想第二人稱要用什麼 be動詞？", difficultWords: ["my", "friend"] },
        { question: "He ___ a teacher.", options: ["am", "is", "are", "be"], correct: 1, explanation: "He 是第三人稱單數，要用 is", logicHint: "他是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["teacher"] },
        { question: "She ___ beautiful.", options: ["am", "is", "are", "be"], correct: 1, explanation: "She 是第三人稱單數，要用 is", logicHint: "她是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["beautiful"] },
        { question: "It ___ a cat.", options: ["am", "is", "are", "be"], correct: 1, explanation: "It 是第三人稱單數，要用 is", logicHint: "它是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["cat"] },
        { question: "We ___ students.", options: ["am", "is", "are", "be"], correct: 2, explanation: "We 是複數，要用 are", logicHint: "我們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["students"] },
        { question: "They ___ happy.", options: ["am", "is", "are", "be"], correct: 2, explanation: "They 是複數，要用 are", logicHint: "他們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["happy"] },
        { question: "My brother ___ tall.", options: ["am", "is", "are", "be"], correct: 1, explanation: "My brother 是單數名詞，要用 is", logicHint: "我的兄弟是單數名詞，想想單數名詞要用什麼 be動詞？", difficultWords: ["my", "brother", "tall"] },
        { question: "The dog ___ in the park.", options: ["am", "is", "are", "be"], correct: 1, explanation: "The dog 是單數名詞，要用 is", logicHint: "這隻狗是單數名詞，想想單數名詞要用什麼 be動詞？", difficultWords: ["dog", "park"] },
        { question: "The books ___ on the table.", options: ["am", "is", "are", "be"], correct: 2, explanation: "The books 是複數名詞，要用 are", logicHint: "這些書是複數名詞，想想複數名詞要用什麼 be動詞？", difficultWords: ["books", "table"] },
        { question: "My parents ___ at home.", options: ["am", "is", "are", "be"], correct: 2, explanation: "My parents 是複數名詞，要用 are", logicHint: "我的父母是複數名詞，想想複數名詞要用什麼 be動詞？", difficultWords: ["my", "parents", "home"] },
        { question: "The weather ___ nice.", options: ["am", "is", "are", "be"], correct: 1, explanation: "The weather 是單數，要用 is", logicHint: "天氣是單數概念，想想單數要用什麼 be動詞？", difficultWords: ["weather", "nice"] },
        { question: "The flowers ___ red.", options: ["am", "is", "are", "be"], correct: 2, explanation: "The flowers 是複數，要用 are", logicHint: "這些花是複數，想想複數要用什麼 be動詞？", difficultWords: ["flowers", "red"] },
        { question: "Tom and Jerry ___ friends.", options: ["am", "is", "are", "be"], correct: 2, explanation: "Tom and Jerry 是複數，要用 are", logicHint: "湯姆和傑瑞是兩個人，想想複數主詞要用什麼 be動詞？", difficultWords: ["Tom", "Jerry", "friends"] },
        { question: "The sky ___ blue.", options: ["am", "is", "are", "be"], correct: 1, explanation: "The sky 是單數，要用 is", logicHint: "天空是單數概念，想想單數要用什麼 be動詞？", difficultWords: ["sky", "blue"] },
        { question: "The cars ___ white.", options: ["am", "is", "are", "be"], correct: 2, explanation: "The cars 是複數，要用 are", logicHint: "這些車是複數，想想複數要用什麼 be動詞？", difficultWords: ["cars", "white"] },
        { question: "I ___ your friend.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 是第一人稱單數，要用 am", logicHint: "我是第一人稱，想想第一人稱要用什麼 be動詞？", difficultWords: ["your", "friend"] },
        { question: "You ___ very kind.", options: ["am", "is", "are", "be"], correct: 2, explanation: "You 是第二人稱，要用 are", logicHint: "你是第二人稱，想想第二人稱要用什麼 be動詞？", difficultWords: ["very", "kind"] },
        { question: "He ___ a student.", options: ["am", "is", "are", "be"], correct: 1, explanation: "He 是第三人稱單數，要用 is", logicHint: "他是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["student"] },
        { question: "She ___ at home.", options: ["am", "is", "are", "be"], correct: 1, explanation: "She 是第三人稱單數，要用 is", logicHint: "她是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["at", "home"] },
        { question: "It ___ a sunny day.", options: ["am", "is", "are", "be"], correct: 1, explanation: "It 是第三人稱單數，要用 is", logicHint: "它是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["sunny", "day"] },
        { question: "We ___ happy to help.", options: ["am", "is", "are", "be"], correct: 2, explanation: "We 是複數，要用 are", logicHint: "我們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["happy", "help"] },
        { question: "They ___ in the park.", options: ["am", "is", "are", "be"], correct: 2, explanation: "They 是複數，要用 are", logicHint: "他們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["in", "park"] },
        { question: "I ___ tired today.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 是第一人稱單數，要用 am", logicHint: "我是第一人稱，想想第一人稱要用什麼 be動詞？", difficultWords: ["tired", "today"] },
        { question: "You ___ my guest.", options: ["am", "is", "are", "be"], correct: 2, explanation: "You 是第二人稱，要用 are", logicHint: "你是第二人稱，想想第二人稱要用什麼 be動詞？", difficultWords: ["my", "guest"] },
        { question: "He ___ here now.", options: ["am", "is", "are", "be"], correct: 1, explanation: "He 是第三人稱單數，要用 is", logicHint: "他是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["here", "now"] },
        { question: "She ___ my sister.", options: ["am", "is", "are", "be"], correct: 1, explanation: "She 是第三人稱單數，要用 is", logicHint: "她是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["my", "sister"] },
        { question: "It ___ my book.", options: ["am", "is", "are", "be"], correct: 1, explanation: "It 是第三人稱單數，要用 is", logicHint: "它是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["my", "book"] },
        { question: "We ___ classmates.", options: ["am", "is", "are", "be"], correct: 2, explanation: "We 是複數，要用 are", logicHint: "我們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["classmates"] },
        { question: "They ___ excited.", options: ["am", "is", "are", "be"], correct: 2, explanation: "They 是複數，要用 are", logicHint: "他們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["excited"] },
        { question: "I ___ ready.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 是第一人稱單數，要用 am", logicHint: "我是第一人稱，想想第一人稱要用什麼 be動詞？", difficultWords: ["ready"] },
        { question: "You ___ lucky.", options: ["am", "is", "are", "be"], correct: 2, explanation: "You 是第二人稱，要用 are", logicHint: "你是第二人稱，想想第二人稱要用什麼 be動詞？", difficultWords: ["lucky"] },
        { question: "He ___ on time.", options: ["am", "is", "are", "be"], correct: 1, explanation: "He 是第三人稱單數，要用 is", logicHint: "他是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["on", "time"] },
        { question: "She ___ busy.", options: ["am", "is", "are", "be"], correct: 1, explanation: "She 是第三人稱單數，要用 is", logicHint: "她是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["busy"] },
        { question: "It ___ cold outside.", options: ["am", "is", "are", "be"], correct: 1, explanation: "It 是第三人稱單數，要用 is", logicHint: "它是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["cold", "outside"] },
        { question: "We ___ early.", options: ["am", "is", "are", "be"], correct: 2, explanation: "We 是複數，要用 are", logicHint: "我們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["early"] }
    ],
    medium: [
        { question: "Anna and I ___ classmates.", options: ["am", "is", "are", "be"], correct: 2, explanation: "Anna and I 是複數，要用 are", logicHint: "安娜和我是兩個人，想想複數主詞要用什麼 be動詞？", difficultWords: ["Anna", "classmates"] },
        { question: "My best friend ___ a doctor.", options: ["am", "is", "are", "be"], correct: 1, explanation: "My best friend 是單數，要用 is", logicHint: "我最好的朋友是一個人，想想單數主詞要用什麼 be動詞？", difficultWords: ["best", "friend", "doctor"] },
        { question: "I ___ an English teacher.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 是第一人稱單數，要用 am", logicHint: "我是第一人稱，想想第一人稱要用什麼 be動詞？", difficultWords: ["English", "teacher"] },
        { question: "You ___ always welcome here.", options: ["am", "is", "are", "be"], correct: 2, explanation: "You 是第二人稱，要用 are", logicHint: "你是第二人稱，想想第二人稱要用什麼 be動詞？", difficultWords: ["always", "welcome", "here"] },
        { question: "He ___ the team captain.", options: ["am", "is", "are", "be"], correct: 1, explanation: "He 是第三人稱單數，要用 is", logicHint: "他是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["team", "captain"] },
        { question: "She ___ the best player.", options: ["am", "is", "are", "be"], correct: 1, explanation: "She 是第三人稱單數，要用 is", logicHint: "她是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["best", "player"] },
        { question: "It ___ one of my favorites.", options: ["am", "is", "are", "be"], correct: 1, explanation: "It 是第三人稱單數，要用 is", logicHint: "它是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["one", "favorites"] },
        { question: "We ___ excited about the trip.", options: ["am", "is", "are", "be"], correct: 2, explanation: "We 是複數，要用 are", logicHint: "我們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["excited", "trip"] },
        { question: "They ___ good friends.", options: ["am", "is", "are", "be"], correct: 2, explanation: "They 是複數，要用 are", logicHint: "他們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["good", "friends"] },
        { question: "I ___ in the middle of the road.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 是第一人稱單數，要用 am", logicHint: "我是第一人稱，想想第一人稱要用什麼 be動詞？", difficultWords: ["middle", "road"] },
        { question: "You ___ part of the group.", options: ["am", "is", "are", "be"], correct: 2, explanation: "You 是第二人稱，要用 are", logicHint: "你是第二人稱，想想第二人稱要用什麼 be動詞？", difficultWords: ["part", "group"] },
        { question: "He ___ the leader now.", options: ["am", "is", "are", "be"], correct: 1, explanation: "He 是第三人稱單數，要用 is", logicHint: "他是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["leader", "now"] },
        { question: "She ___ very talented.", options: ["am", "is", "are", "be"], correct: 1, explanation: "She 是第三人稱單數，要用 is", logicHint: "她是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["very", "talented"] },
        { question: "It ___ the correct answer.", options: ["am", "is", "are", "be"], correct: 1, explanation: "It 是第三人稱單數，要用 is", logicHint: "它是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["correct", "answer"] },
        { question: "We ___ the champions.", options: ["am", "is", "are", "be"], correct: 2, explanation: "We 是複數，要用 are", logicHint: "我們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["champions"] },
        { question: "They ___ ready for the test.", options: ["am", "is", "are", "be"], correct: 2, explanation: "They 是複數，要用 are", logicHint: "他們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["ready", "test"] },
        { question: "I ___ afraid of spiders.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 是第一人稱單數，要用 am", logicHint: "我是第一人稱，想想第一人稱要用什麼 be動詞？", difficultWords: ["afraid", "spiders"] },
        { question: "You ___ late today.", options: ["am", "is", "are", "be"], correct: 2, explanation: "You 是第二人稱，要用 are", logicHint: "你是第二人稱，想想第二人稱要用什麼 be動詞？", difficultWords: ["late", "today"] },
        { question: "He ___ the winner.", options: ["am", "is", "are", "be"], correct: 1, explanation: "He 是第三人稱單數，要用 is", logicHint: "他是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["winner"] },
        { question: "She ___ on the committee.", options: ["am", "is", "are", "be"], correct: 1, explanation: "She 是第三人稱單數，要用 is", logicHint: "她是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["committee"] },
        { question: "It ___ my responsibility.", options: ["am", "is", "are", "be"], correct: 1, explanation: "It 是第三人稱單數，要用 is", logicHint: "它是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["my", "responsibility"] },
        { question: "We ___ on a mission.", options: ["am", "is", "are", "be"], correct: 2, explanation: "We 是複數，要用 are", logicHint: "我們是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["mission"] }
    ],
    hard: [
        { question: "Mathematics ___ my favorite subject.", options: ["am", "is", "are", "be"], correct: 1, explanation: "Mathematics 是單數學科，要用 is", isHard: true, logicHint: "數學是一門學科，想想單數學科要用什麼 be動詞？", difficultWords: ["Mathematics", "favorite", "subject"] },
        { question: "The police ___ investigating the case.", options: ["am", "is", "are", "be"], correct: 2, explanation: "The police 是複數，要用 are", isHard: true, logicHint: "警察是集合名詞，通常視為複數，想想複數要用什麼 be動詞？", difficultWords: ["police", "investigating", "case"] },
        { question: "I ___ the only one who understands.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 是第一人稱單數，要用 am", isHard: true, logicHint: "我是第一人稱，想想第一人稱要用什麼 be動詞？", difficultWords: ["only", "understands"] },
        { question: "You ___ absolutely remarkable.", options: ["am", "is", "are", "be"], correct: 2, explanation: "You 是第二人稱，要用 are", isHard: true, logicHint: "你是第二人稱，想想第二人稱要用什麼 be動詞？", difficultWords: ["absolutely", "remarkable"] },
        { question: "Anna ___ one of the most skilled players.", options: ["am", "is", "are", "be"], correct: 1, explanation: "Anna 是第三人稱單數，要用 is", isHard: true, logicHint: "Anna 是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["Anna", "skilled", "players"] },
        { question: "Tom ___ consistently the best performer.", options: ["am", "is", "are", "be"], correct: 1, explanation: "Tom 是第三人稱單數，要用 is", isHard: true, logicHint: "Tom 是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["Tom", "consistently", "performer"] },
        { question: "The engine ___ a vital component of success.", options: ["am", "is", "are", "be"], correct: 1, explanation: "The engine 是單數名詞，要用 is", isHard: true, logicHint: "The engine 是單數名詞，想想單數名詞要用什麼 be動詞？", difficultWords: ["engine", "vital", "component"] },
        { question: "People ___ the first to arrive.", options: ["am", "is", "are", "be"], correct: 2, explanation: "People 是複數，要用 are", isHard: true, logicHint: "People 是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["people", "arrive"] },
        { question: "The students ___ the last survivors.", options: ["am", "is", "are", "be"], correct: 2, explanation: "The students 是複數，要用 are", isHard: true, logicHint: "The students 是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["students", "survivors"] },
        { question: "I ___ fully aware of the consequences.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 是第一人稱單數，要用 am", isHard: true, logicHint: "我是第一人稱，想想第一人稱要用什麼 be動詞？", difficultWords: ["fully", "aware", "consequences"] },
        { question: "You ___ remarkably talented.", options: ["am", "is", "are", "be"], correct: 2, explanation: "You 是第二人稱，要用 are", isHard: true, logicHint: "你是第二人稱，想想第二人稱要用什麼 be動詞？", difficultWords: ["remarkably", "talented"] },
        { question: "Mr. Smith ___ undoubtedly the best candidate.", options: ["am", "is", "are", "be"], correct: 1, explanation: "Mr. Smith 是第三人稱單數，要用 is", isHard: true, logicHint: "Mr. Smith 是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["undoubtedly", "candidate"] },
        { question: "The manager ___ the chief investigator.", options: ["am", "is", "are", "be"], correct: 1, explanation: "The manager 是第三人稱單數，要用 is", isHard: true, logicHint: "The manager 是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["manager", "chief", "investigator"] },
        { question: "This project ___ a challenging situation.", options: ["am", "is", "are", "be"], correct: 1, explanation: "This project 是單數名詞，要用 is", isHard: true, logicHint: "This project 是單數名詞，想想單數名詞要用什麼 be動詞？", difficultWords: ["project", "challenging", "situation"] },
        { question: "The team ___ the ultimate decision-makers.", options: ["am", "is", "are", "be"], correct: 2, explanation: "The team 是複數，要用 are", isHard: true, logicHint: "The team 是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["team", "ultimate", "decision-makers"] },
        { question: "The group ___ completely satisfied with the results.", options: ["am", "is", "are", "be"], correct: 2, explanation: "The group 是複數，要用 are", isHard: true, logicHint: "The group 是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["group", "satisfied", "results"] },
        { question: "I ___ the main organizer of the event.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 是第一人稱單數，要用 am", isHard: true, logicHint: "我是第一人稱，想想第一人稱要用什麼 be動詞？", difficultWords: ["main", "organizer", "event"] },
        { question: "You ___ essentially correct.", options: ["am", "is", "are", "be"], correct: 2, explanation: "You 是第二人稱，要用 are", isHard: true, logicHint: "你是第二人稱，想想第二人稱要用什麼 be動詞？", difficultWords: ["essentially", "correct"] },
        { question: "Dr. Lee ___ genuinely surprised.", options: ["am", "is", "are", "be"], correct: 1, explanation: "Dr. Lee 是第三人稱單數，要用 is", isHard: true, logicHint: "Dr. Lee 是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["genuinely", "surprised"] },
        { question: "Anna ___ significantly improved.", options: ["am", "is", "are", "be"], correct: 1, explanation: "Anna 是第三人稱單數，要用 is", isHard: true, logicHint: "Anna 是第三人稱單數，想想第三人稱單數要用什麼 be動詞？", difficultWords: ["Anna", "significantly", "improved"] },
        { question: "The system ___ an integral part of the process.", options: ["am", "is", "are", "be"], correct: 1, explanation: "The system 是單數名詞，要用 is", isHard: true, logicHint: "The system 是單數名詞，想想單數名詞要用什麼 be動詞？", difficultWords: ["system", "integral", "process"] },
        { question: "The company ___ unparalleled in our achievements.", options: ["am", "is", "are", "be"], correct: 2, explanation: "The company 是複數，要用 are", isHard: true, logicHint: "The company 是複數，想想複數主詞要用什麼 be動詞？", difficultWords: ["company", "unparalleled", "achievements"] }
    ]
};

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "第一小關：基礎練習",
        description: "學習基本的主詞與be動詞搭配",
        difficultyDistribution: {
            easy: 0.5,    // 50% 簡單
            medium: 0.2,  // 20% 容易
            hard: 0.3     // 30% 困難
        }
    },
    sub2: {
        name: "第二小關：進階練習", 
        description: "提升be動詞的應用能力",
        difficultyDistribution: {
            easy: 0.3,    // 30% 簡單
            medium: 0.1,  // 10% 容易
            hard: 0.6     // 60% 困難 (增加30%)
        }
    },
    sub3: {
        name: "第三小關：挑戰練習",
        description: "掌握複雜的be動詞用法",
        difficultyDistribution: {
            easy: 0.1,    // 10% 簡單
            medium: 0.1,  // 10% 容易
            hard: 0.8     // 80% 困難 (再增加20%)
        }
    }
};

// 困難單字詞典 - 只包含題目中實際使用的單字
const DIFFICULT_WORDS = {
    // 基礎詞彙
    "student": "學生",
    "my": "我的",
    "friend": "朋友",
    "teacher": "老師",
    "beautiful": "美麗的",
    "cat": "貓",
    "students": "學生們",
    "happy": "快樂的",
    "brother": "兄弟",
    "tall": "高的",
    "dog": "狗",
    "park": "公園",
    "books": "書籍",
    "table": "桌子",
    "parents": "父母",
    "home": "家",
    "weather": "天氣",
    "nice": "好的",
    "flowers": "花朵",
    "red": "紅色的",
    "Tom": "湯姆",
    "Jerry": "傑瑞",
    "friends": "朋友們",
    "sky": "天空",
    "blue": "藍色的",
    "cars": "汽車",
    "white": "白色的",
    "your": "你的",
    "very": "非常",
    "kind": "善良的",
    "at": "在",
    "sunny": "晴朗的",
    "day": "天",
    "help": "幫助",
    "in": "在",
    "tired": "疲倦的",
    "today": "今天",
    "guest": "客人",
    "here": "這裡",
    "now": "現在",
    "sister": "姐妹",
    "book": "書",
    "classmates": "同學",
    "excited": "興奮的",
    "ready": "準備好的",
    "lucky": "幸運的",
    "on": "在",
    "time": "時間",
    "busy": "忙碌的",
    "cold": "冷的",
    "outside": "外面",
    "early": "早的",
    
    // 中等詞彙
    "Anna": "安娜",
    "best": "最好的",
    "doctor": "醫生",
    "English": "英語",
    "always": "總是",
    "welcome": "歡迎",
    "team": "團隊",
    "captain": "隊長",
    "player": "選手",
    "one": "一個",
    "favorites": "最愛的",
    "trip": "旅行",
    "good": "好的",
    "middle": "中間",
    "road": "道路",
    "part": "部分",
    "group": "群組",
    "leader": "領導者",
    "talented": "有才華的",
    "correct": "正確的",
    "answer": "答案",
    "champions": "冠軍",
    "test": "測試",
    "afraid": "害怕的",
    "spiders": "蜘蛛",
    "late": "遲到的",
    "winner": "獲勝者",
    "committee": "委員會",
    "responsibility": "責任",
    "mission": "任務",
    
    // 困難詞彙
    "Mathematics": "數學",
    "favorite": "最喜愛的",
    "subject": "科目",
    "police": "警察",
    "investigating": "調查中",
    "case": "案件",
    "only": "唯一的",
    "understands": "理解",
    "absolutely": "絕對地",
    "remarkable": "卓越的",
    "skilled": "熟練的",
    "players": "選手們",
    "consistently": "持續地",
    "performer": "表演者",
    "engine": "引擎",
    "vital": "重要的",
    "component": "組成部分",
    "people": "人們",
    "arrive": "到達",
    "survivors": "倖存者",
    "fully": "完全地",
    "aware": "意識到",
    "consequences": "後果",
    "remarkably": "非常地",
    "undoubtedly": "無疑地",
    "candidate": "候選人",
    "manager": "經理",
    "chief": "首席的",
    "investigator": "調查員",
    "project": "項目",
    "challenging": "具有挑戰性的",
    "situation": "情況",
    "ultimate": "最終的",
    "decision-makers": "決策者",
    "satisfied": "滿意的",
    "results": "結果",
    "main": "主要的",
    "organizer": "組織者",
    "event": "活動",
    "essentially": "本質上",
    "genuinely": "真誠地",
    "surprised": "驚訝的",
    "significantly": "顯著地",
    "improved": "進步的",
    "system": "系統",
    "integral": "不可或缺的",
    "process": "過程",
    "company": "公司",
    "unparalleled": "無與倫比的",
    "achievements": "成就"
};

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
        DIFFICULT_WORDS, 
        getRandomQuestions,
        getLevelInfo,
        getAllLevels
    };
} 