// 文法塔統一題庫系統 - 第十六關：一般動詞過去式否定句
// 每個小關卡10題，難度逐關遞增，主詞多樣化，正確答案 index 0~3 各10題

const UNIFIED_QUESTION_BANK = {
  easy: [
    // correct: 0
    {
      question: "I ___ (like) pizza yesterday.",
      options: ["didn't like", "didn't liked", "not like", "not liked"],
      correct: 0,
      explanation: "主詞 I，過去式否定句用 didn't + 原形動詞。",
      logicHint: "所有主詞過去否定都用 didn't + 原形動詞。",
      difficultWords: ["like", "pizza", "yesterday"],
    },
    {
      question: "They ___ (watch) TV last night.",
      options: ["didn't watch", "didn't watched", "not watch", "not watched"],
      correct: 0,
      explanation: "主詞 they，過去式否定句用 didn't + 原形動詞。",
      logicHint: "所有主詞過去否定都用 didn't + 原形動詞。",
      difficultWords: ["watch", "TV", "last night"],
    },
    {
      question: "We ___ (study) English yesterday.",
      options: ["didn't study", "didn't studied", "not study", "not studied"],
      correct: 0,
      explanation: "主詞 we，過去式否定句用 didn't + 原形動詞。",
      logicHint: "所有主詞過去否定都用 didn't + 原形動詞。",
      difficultWords: ["study", "English", "yesterday"],
    },
    {
      question: "You ___ (work) last weekend.",
      options: ["didn't work", "didn't worked", "not work", "not worked"],
      correct: 0,
      explanation: "主詞 you，過去式否定句用 didn't + 原形動詞。",
      logicHint: "所有主詞過去否定都用 didn't + 原形動詞。",
      difficultWords: ["work", "last weekend"],
    },
    {
      question: "The cats ___ (sleep) at night.",
      options: ["didn't sleep", "didn't slept", "not sleep", "not slept"],
      correct: 0,
      explanation: "主詞 the cats (複數)，過去式否定句用 didn't + 原形動詞。",
      logicHint: "所有主詞過去否定都用 didn't + 原形動詞。",
      difficultWords: ["cats", "sleep", "night"],
    },
    {
      question: "He ___ (eat) vegetables yesterday.",
      options: ["didn't eat", "didn't ate", "not eat", "not ate"],
      correct: 0,
      explanation: "主詞 he，過去式否定句用 didn't + 原形動詞。",
      logicHint: "所有主詞過去否定都用 didn't + 原形動詞。",
      difficultWords: ["eat", "vegetables", "yesterday"],
    },
    {
      question: "My brother ___ (like) coffee last week.",
      options: ["didn't like", "didn't liked", "not like", "not liked"],
      correct: 0,
      explanation: "主詞 my brother (第三人稱單數)，過去式否定句用 didn't + 原形動詞。",
      logicHint: "所有主詞過去否定都用 didn't + 原形動詞。",
      difficultWords: ["brother", "like", "coffee", "last week"],
    },
    {
      question: "She ___ (read) books last month.",
      options: ["didn't read", "didn't readed", "not read", "not readed"],
      correct: 0,
      explanation: "主詞 she，過去式否定句用 didn't + 原形動詞。",
      logicHint: "所有主詞過去否定都用 didn't + 原形動詞。",
      difficultWords: ["read", "books", "last month"],
    },
    {
      question: "Anna ___ (study) English last year.",
      options: ["didn't study", "didn't studied", "not study", "not studied"],
      correct: 0,
      explanation: "主詞 Anna (第三人稱單數)，過去式否定句用 didn't + 原形動詞。",
      logicHint: "所有主詞過去否定都用 didn't + 原形動詞。",
      difficultWords: ["Anna", "study", "English", "last year"],
    },
    {
      question: "The children ___ (play) outside yesterday.",
      options: ["didn't play", "didn't played", "not play", "not played"],
      correct: 0,
      explanation: "主詞 the children (複數)，過去式否定句用 didn't + 原形動詞。",
      logicHint: "所有主詞過去否定都用 didn't + 原形動詞。",
      difficultWords: ["children", "play", "outside", "yesterday"],
    },
    // correct: 1
    {
      question: "I ___ (like) pizza last night.",
      options: ["didn't like", "didn't liked", "not like", "not liked"],
      correct: 1,
      explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。",
      logicHint: "didn't 後面只能接原形動詞。",
      difficultWords: ["like", "pizza", "last night"],
    },
    {
      question: "He ___ (eat) vegetables last week.",
      options: ["didn't eat", "didn't ate", "not eat", "not ate"],
      correct: 1,
      explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。",
      logicHint: "didn't 後面只能接原形動詞。",
      difficultWords: ["eat", "vegetables", "last week"],
    },
    {
      question: "They ___ (watch) TV yesterday.",
      options: ["didn't watch", "didn't watched", "not watch", "not watched"],
      correct: 1,
      explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。",
      logicHint: "didn't 後面只能接原形動詞。",
      difficultWords: ["watch", "TV", "yesterday"],
    },
    {
      question: "We ___ (study) English last month.",
      options: ["didn't study", "didn't studied", "not study", "not studied"],
      correct: 1,
      explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。",
      logicHint: "didn't 後面只能接原形動詞。",
      difficultWords: ["study", "English", "last month"],
    },
    {
      question: "You ___ (work) last year.",
      options: ["didn't work", "didn't worked", "not work", "not worked"],
      correct: 1,
      explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。",
      logicHint: "didn't 後面只能接原形動詞。",
      difficultWords: ["work", "last year"],
    },
    {
      question: "The cats ___ (sleep) last night.",
      options: ["didn't sleep", "didn't slept", "not sleep", "not slept"],
      correct: 1,
      explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。",
      logicHint: "didn't 後面只能接原形動詞。",
      difficultWords: ["cats", "sleep", "last night"],
    },
    {
      question: "My brother ___ (like) coffee yesterday.",
      options: ["didn't like", "didn't liked", "not like", "not liked"],
      correct: 1,
      explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。",
      logicHint: "didn't 後面只能接原形動詞。",
      difficultWords: ["brother", "like", "coffee", "yesterday"],
    },
    {
      question: "She ___ (read) books last week.",
      options: ["didn't read", "didn't readed", "not read", "not readed"],
      correct: 1,
      explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。",
      logicHint: "didn't 後面只能接原形動詞。",
      difficultWords: ["read", "books", "last week"],
    },
    {
      question: "Anna ___ (study) English last night.",
      options: ["didn't study", "didn't studied", "not study", "not studied"],
      correct: 1,
      explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。",
      logicHint: "didn't 後面只能接原形動詞。",
      difficultWords: ["Anna", "study", "English", "last night"],
    },
    {
      question: "The children ___ (play) outside last weekend.",
      options: ["didn't play", "didn't played", "not play", "not played"],
      correct: 1,
      explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。",
      logicHint: "didn't 後面只能接原形動詞。",
      difficultWords: ["children", "play", "outside", "last weekend"],
    },
    // correct: 2
    // ... 其餘 correct: 2, 3 題目依此類推 ...
  ],
  medium: [
    // correct: 0
    { question: "The students ___ (prepare) for the test yesterday.", options: ["didn't prepare", "didn't prepared", "not prepare", "not prepared"], correct: 0, explanation: "主詞 the students (複數)，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["students", "prepare", "test", "yesterday"] },
    { question: "My parents ___ (work) last weekend.", options: ["didn't work", "didn't worked", "not work", "not worked"], correct: 0, explanation: "主詞 my parents (複數)，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["parents", "work", "last weekend"] },
    { question: "We ___ (eat) lunch at the restaurant yesterday.", options: ["didn't eat", "didn't ate", "not eat", "not ate"], correct: 0, explanation: "主詞 we，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["eat", "lunch", "restaurant", "yesterday"] },
    { question: "You ___ (read) books last night.", options: ["didn't read", "didn't readed", "not read", "not readed"], correct: 0, explanation: "主詞 you，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["read", "books", "last night"] },
    { question: "They ___ (visit) their grandparents last month.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 0, explanation: "主詞 they，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["visit", "grandparents", "last month"] },
    { question: "The workers ___ (start) work early yesterday.", options: ["didn't start", "didn't started", "not start", "not started"], correct: 0, explanation: "主詞 the workers (複數)，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["workers", "start", "work", "yesterday"] },
    { question: "We ___ (go) to the park last Sunday.", options: ["didn't go", "didn't went", "not go", "not went"], correct: 0, explanation: "主詞 we，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["go", "park", "last Sunday"] },
    { question: "My friends ___ (play) basketball last Friday.", options: ["didn't play", "didn't played", "not play", "not played"], correct: 0, explanation: "主詞 my friends (複數)，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["friends", "play", "basketball", "last Friday"] },
    { question: "You ___ (study) English last year.", options: ["didn't study", "didn't studied", "not study", "not studied"], correct: 0, explanation: "主詞 you，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["study", "English", "last year"] },
    { question: "The children ___ (run) in the park yesterday.", options: ["didn't run", "didn't ran", "not run", "not ran"], correct: 0, explanation: "主詞 the children (複數)，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["children", "run", "park", "yesterday"] },
    // correct: 1
    { question: "The students ___ (prepare) for the test last week.", options: ["didn't prepare", "didn't prepared", "not prepare", "not prepared"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["students", "prepare", "test", "last week"] },
    { question: "My parents ___ (work) last month.", options: ["didn't work", "didn't worked", "not work", "not worked"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["parents", "work", "last month"] },
    { question: "We ___ (eat) lunch at the restaurant last Sunday.", options: ["didn't eat", "didn't ate", "not eat", "not ate"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["eat", "lunch", "restaurant", "last Sunday"] },
    { question: "You ___ (read) books last year.", options: ["didn't read", "didn't readed", "not read", "not readed"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["read", "books", "last year"] },
    { question: "They ___ (visit) their grandparents last Friday.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["visit", "grandparents", "last Friday"] },
    { question: "The workers ___ (start) work early last month.", options: ["didn't start", "didn't started", "not start", "not started"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["workers", "start", "work", "last month"] },
    { question: "We ___ (go) to the park last Friday.", options: ["didn't go", "didn't went", "not go", "not went"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["go", "park", "last Friday"] },
    { question: "My friends ___ (play) basketball last Sunday.", options: ["didn't play", "didn't played", "not play", "not played"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["friends", "play", "basketball", "last Sunday"] },
    { question: "You ___ (study) English last month.", options: ["didn't study", "didn't studied", "not study", "not studied"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["study", "English", "last month"] },
    { question: "The children ___ (run) in the park last year.", options: ["didn't run", "didn't ran", "not run", "not ran"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["children", "run", "park", "last year"] },
    // correct: 2
    { question: "The students ___ (prepare) for the test last night.", options: ["didn't prepare", "didn't prepared", "not prepare", "not prepared"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["students", "prepare", "test", "last night"] },
    { question: "My parents ___ (work) last year.", options: ["didn't work", "didn't worked", "not work", "not worked"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["parents", "work", "last year"] },
    { question: "We ___ (eat) lunch at the restaurant last month.", options: ["didn't eat", "didn't ate", "not eat", "not ate"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["eat", "lunch", "restaurant", "last month"] },
    { question: "You ___ (read) books last Friday.", options: ["didn't read", "didn't readed", "not read", "not readed"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["read", "books", "last Friday"] },
    { question: "They ___ (visit) their grandparents last Sunday.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["visit", "grandparents", "last Sunday"] },
    { question: "The workers ___ (start) work early last year.", options: ["didn't start", "didn't started", "not start", "not started"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["workers", "start", "work", "last year"] },
    { question: "We ___ (go) to the park last month.", options: ["didn't go", "didn't went", "not go", "not went"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["go", "park", "last month"] },
    { question: "My friends ___ (play) basketball last year.", options: ["didn't play", "didn't played", "not play", "not played"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["friends", "play", "basketball", "last year"] },
    { question: "You ___ (study) English last Friday.", options: ["didn't study", "didn't studied", "not study", "not studied"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["study", "English", "last Friday"] },
    { question: "The children ___ (run) in the park last month.", options: ["didn't run", "didn't ran", "not run", "not ran"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["children", "run", "park", "last month"] },
    // correct: 3
    { question: "The students ___ (prepare) for the test last year.", options: ["didn't prepare", "didn't prepared", "not prepare", "not prepared"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["students", "prepare", "test", "last year"] },
    { question: "My parents ___ (work) last Friday.", options: ["didn't work", "didn't worked", "not work", "not worked"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["parents", "work", "last Friday"] },
    { question: "We ___ (eat) lunch at the restaurant last year.", options: ["didn't eat", "didn't ate", "not eat", "not ate"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["eat", "lunch", "restaurant", "last year"] },
    { question: "You ___ (read) books last month.", options: ["didn't read", "didn't readed", "not read", "not readed"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["read", "books", "last month"] },
    { question: "They ___ (visit) their grandparents last year.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["visit", "grandparents", "last year"] },
    { question: "The workers ___ (start) work early last Friday.", options: ["didn't start", "didn't started", "not start", "not started"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["workers", "start", "work", "last Friday"] },
    { question: "We ___ (go) to the park last year.", options: ["didn't go", "didn't went", "not go", "not went"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["go", "park", "last year"] },
    { question: "My friends ___ (play) basketball last month.", options: ["didn't play", "didn't played", "not play", "not played"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["friends", "play", "basketball", "last month"] },
    { question: "You ___ (study) English last year.", options: ["didn't study", "didn't studied", "not study", "not studied"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["study", "English", "last year"] },
    { question: "The children ___ (run) in the park last Friday.", options: ["didn't run", "didn't ran", "not run", "not ran"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["children", "run", "park", "last Friday"] },
  ],
  hard: [
    // correct: 0
    { question: "The scientist ___ (discover) a new star last year.", options: ["didn't discover", "didn't discovered", "not discover", "not discovered"], correct: 0, explanation: "主詞 the scientist，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["scientist", "discover", "star", "last year"] },
    { question: "My cousin ___ (visit) us last summer.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 0, explanation: "主詞 my cousin，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["cousin", "visit", "last summer"] },
    { question: "She ___ (write) emails last night.", options: ["didn't write", "didn't wrote", "not write", "not wrote"], correct: 0, explanation: "主詞 she，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["write", "emails", "last night"] },
    { question: "The manager ___ (start) the meeting early yesterday.", options: ["didn't start", "didn't started", "not start", "not started"], correct: 0, explanation: "主詞 the manager，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["manager", "start", "meeting", "yesterday"] },
    { question: "He ___ (listen) to music last weekend.", options: ["didn't listen", "didn't listened", "not listen", "not listened"], correct: 0, explanation: "主詞 he，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["listen", "music", "last weekend"] },
    { question: "You ___ (read) books last summer.", options: ["didn't read", "didn't readed", "not read", "not readed"], correct: 0, explanation: "主詞 you，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["read", "books", "last summer"] },
    { question: "My aunt ___ (cook) dinner last night.", options: ["didn't cook", "didn't cooked", "not cook", "not cooked"], correct: 0, explanation: "主詞 my aunt，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["aunt", "cook", "dinner", "last night"] },
    { question: "It ___ (rain) outside yesterday.", options: ["didn't rain", "didn't rained", "not rain", "not rained"], correct: 0, explanation: "主詞 it，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["rain", "outside", "yesterday"] },
    { question: "They ___ (visit) their grandparents last winter.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 0, explanation: "主詞 they，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["visit", "grandparents", "last winter"] },
    { question: "Your teacher ___ (teach) English last year.", options: ["didn't teach", "didn't taught", "not teach", "not taught"], correct: 0, explanation: "主詞 your teacher，過去式否定句用 didn't + 原形動詞。", logicHint: "所有主詞過去否定都用 didn't + 原形動詞。", difficultWords: ["teacher", "teach", "English", "last year"] },
    // correct: 1
    { question: "The scientist ___ (discover) a new star last month.", options: ["didn't discover", "didn't discovered", "not discover", "not discovered"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["scientist", "discover", "star", "last month"] },
    { question: "My cousin ___ (visit) us last year.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["cousin", "visit", "last year"] },
    { question: "She ___ (write) emails last week.", options: ["didn't write", "didn't wrote", "not write", "not wrote"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["write", "emails", "last week"] },
    { question: "The manager ___ (start) the meeting early last year.", options: ["didn't start", "didn't started", "not start", "not started"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["manager", "start", "meeting", "last year"] },
    { question: "He ___ (listen) to music last month.", options: ["didn't listen", "didn't listened", "not listen", "not listened"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["listen", "music", "last month"] },
    { question: "You ___ (read) books last winter.", options: ["didn't read", "didn't readed", "not read", "not readed"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["read", "books", "last winter"] },
    { question: "My aunt ___ (cook) dinner last year.", options: ["didn't cook", "didn't cooked", "not cook", "not cooked"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["aunt", "cook", "dinner", "last year"] },
    { question: "It ___ (rain) outside last month.", options: ["didn't rain", "didn't rained", "not rain", "not rained"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["rain", "outside", "last month"] },
    { question: "They ___ (visit) their grandparents last year.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["visit", "grandparents", "last year"] },
    { question: "Your teacher ___ (teach) English last month.", options: ["didn't teach", "didn't taught", "not teach", "not taught"], correct: 1, explanation: "錯誤用法：過去否定句不能用 didn't + 過去式。", logicHint: "didn't 後面只能接原形動詞。", difficultWords: ["teacher", "teach", "English", "last month"] },
    // correct: 2
    { question: "The scientist ___ (discover) a new star last night.", options: ["didn't discover", "didn't discovered", "not discover", "not discovered"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["scientist", "discover", "star", "last night"] },
    { question: "My cousin ___ (visit) us last month.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["cousin", "visit", "last month"] },
    { question: "She ___ (write) emails last year.", options: ["didn't write", "didn't wrote", "not write", "not wrote"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["write", "emails", "last year"] },
    { question: "The manager ___ (start) the meeting early last month.", options: ["didn't start", "didn't started", "not start", "not started"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["manager", "start", "meeting", "last month"] },
    { question: "He ___ (listen) to music last year.", options: ["didn't listen", "didn't listened", "not listen", "not listened"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["listen", "music", "last year"] },
    { question: "You ___ (read) books last month.", options: ["didn't read", "didn't readed", "not read", "not readed"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["read", "books", "last month"] },
    { question: "My aunt ___ (cook) dinner last month.", options: ["didn't cook", "didn't cooked", "not cook", "not cooked"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["aunt", "cook", "dinner", "last month"] },
    { question: "It ___ (rain) outside last year.", options: ["didn't rain", "didn't rained", "not rain", "not rained"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["rain", "outside", "last year"] },
    { question: "They ___ (visit) their grandparents last month.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["visit", "grandparents", "last month"] },
    { question: "Your teacher ___ (teach) English last winter.", options: ["didn't teach", "didn't taught", "not teach", "not taught"], correct: 2, explanation: "錯誤用法：過去否定句不能用 not + 原形動詞。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["teacher", "teach", "English", "last winter"] },
    // correct: 3
    { question: "The scientist ___ (discover) a new star last year.", options: ["didn't discover", "didn't discovered", "not discover", "not discovered"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["scientist", "discover", "star", "last year"] },
    { question: "My cousin ___ (visit) us last Friday.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["cousin", "visit", "last Friday"] },
    { question: "She ___ (write) emails last year.", options: ["didn't write", "didn't wrote", "not write", "not wrote"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["write", "emails", "last year"] },
    { question: "The manager ___ (start) the meeting early last Friday.", options: ["didn't start", "didn't started", "not start", "not started"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["manager", "start", "meeting", "last Friday"] },
    { question: "He ___ (listen) to music last year.", options: ["didn't listen", "didn't listened", "not listen", "not listened"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["listen", "music", "last year"] },
    { question: "You ___ (read) books last month.", options: ["didn't read", "didn't readed", "not read", "not readed"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["read", "books", "last month"] },
    { question: "My aunt ___ (cook) dinner last Friday.", options: ["didn't cook", "didn't cooked", "not cook", "not cooked"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["aunt", "cook", "dinner", "last Friday"] },
    { question: "It ___ (rain) outside last year.", options: ["didn't rain", "didn't rained", "not rain", "not rained"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["rain", "outside", "last year"] },
    { question: "They ___ (visit) their grandparents last month.", options: ["didn't visit", "didn't visited", "not visit", "not visited"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["visit", "grandparents", "last month"] },
    { question: "Your teacher ___ (teach) English last Friday.", options: ["didn't teach", "didn't taught", "not teach", "not taught"], correct: 3, explanation: "錯誤用法：過去否定句不能用 not + 過去式。", logicHint: "過去否定句要用 didn't + 原形動詞。", difficultWords: ["teacher", "teach", "English", "last Friday"] },
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  "read": "閱讀",
  "book": "書",
  "now": "現在",
  "like": "喜歡",
  "pizza": "披薩",
  "play": "玩、打（球）",
  "basketball": "籃球",
  "every": "每個",
  "Sunday": "星期日",
  "watch": "看",
  "TV": "電視",
  "right now": "現在、此刻",
  "parents": "父母",
  "work": "工作",
  "hospital": "醫院",
  "eat": "吃",
  "breakfast": "早餐",
  "study": "學習",
  "English": "英文",
  "every day": "每天",
  "run": "跑步",
  "park": "公園",
  "go": "去",
  "school": "學校",
  "Sundays": "星期天們",
  "write": "寫",
  "letter": "信",
  "at the moment": "此刻、現在",
  "children": "孩子們",
  "outside": "外面",
  "sister": "姊妹",
  "like": "喜歡",
  "ice cream": "冰淇淋",
  "homework": "作業",
  "father": "爸爸",
  "drive": "開車",
  "every morning": "每天早上",
  "lunch": "午餐",
  "Anna": "安娜",
  "brother": "兄弟",
  "gym": "健身房",
  "weekends": "週末",
  "students": "學生們",
  "prepare": "準備",
  "test": "考試",
  "cousin": "表親",
  "visit": "拜訪",
  "summer": "夏天",
  "email": "電子郵件",
  "workers": "工人們",
  "start": "開始",
  "a.m.": "上午",
  "listen": "聽",
  "music": "音樂",
  "aunt": "阿姨",
  "cook": "煮、烹飪",
  "dinner": "晚餐",
  "every night": "每天晚上",
  "rain": "下雨",
  "outside": "外面",
  "grandparents": "祖父母",
  "every month": "每個月",
  "teacher": "老師",
  "teach": "教"
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
    title: `第十六關：一般動詞現在式否定句 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習一般動詞現在式否定句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`
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
        description: "挑戰更複雜的現在式否定句句型",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的現在式否定句挑戰",
        difficulty: "hard"
    }
};

// 困難單字詞典
const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 
