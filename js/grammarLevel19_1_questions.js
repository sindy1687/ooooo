// 文法塔統一題庫系統 - 第十九關：未來式否定句
// 每個小關卡10題，難度逐關遞增，主詞多樣化

const UNIFIED_QUESTION_BANK = {
  easy: [
    {
      question: "I ___ play later.",
      options: ["won't play", "will play not", "will play", "not play"],
      correct: 0,
      explanation: "未來式否定句：I + won't + play",
      logicHint: "won't = will not",
      difficultWords: ["play", "later"]
    },
    {
      question: "She ___ call this weekend.",
      options: ["will not call", "not call", "will call not", "she is not calling"],
      correct: 0,
      explanation: "未來式否定句：She + will not + call",
      logicHint: "will not + 原形動詞",
      difficultWords: ["call", "thisweekend"]
    },
    {
      question: "They ___ read tomorrow night.",
      options: ["will read", "won't read", "will read not", "not read"],
      correct: 1,
      explanation: "未來式否定句：They + won't + read",
      logicHint: "won't = will not",
      difficultWords: ["read", "tomorrownight"]
    },
    {
      question: "It ___ visit next month.",
      options: ["will visit", "won't visit", "not visit", "will visit not"],
      correct: 1,
      explanation: "未來式否定句：It + won't + visit",
      logicHint: "won't = will not",
      difficultWords: ["visit", "nextmonth"]
    },
    {
      question: "We ___ meet next Saturday.",
      options: ["will not meet", "not meet", "will meet not", "we is not meeting"],
      correct: 0,
      explanation: "未來式否定句：We + will not + meet",
      logicHint: "will not + 原形動詞",
      difficultWords: ["meet", "nextSaturday"]
    },
    {
      question: "You ___ go this evening.",
      options: ["will go", "won't go", "not go", "will go not"],
      correct: 1,
      explanation: "未來式否定句：You + won't + go",
      logicHint: "won't = will not",
      difficultWords: ["go", "thisevening"]
    },
    {
      question: "He ___ eat tomorrow.",
      options: ["will not eat", "not eat", "will eat not", "he is not eating"],
      correct: 0,
      explanation: "未來式否定句：He + will not + eat",
      logicHint: "will not + 原形動詞",
      difficultWords: ["eat", "tomorrow"]
    },
    {
      question: "They ___ study next week.",
      options: ["will study", "won't study", "will study not", "not study"],
      correct: 1,
      explanation: "未來式否定句：They + won't + study",
      logicHint: "won't = will not",
      difficultWords: ["study", "nextweek"]
    },
    {
      question: "I ___ watch tomorrow night.",
      options: ["will watch", "won't watch", "not watch", "will watch not"],
      correct: 1,
      explanation: "未來式否定句：I + won't + watch",
      logicHint: "won't = will not",
      difficultWords: ["watch", "tomorrownight"]
    },
    {
      question: "It ___ call this weekend.",
      options: ["will not call", "not call", "will call not", "it is not calling"],
      correct: 0,
      explanation: "未來式否定句：It + will not + call",
      logicHint: "will not + 原形動詞",
      difficultWords: ["call", "thisweekend"]
    },
    {
      question: "She ___ write next month.",
      options: ["will write", "won't write", "will write not", "not write"],
      correct: 1,
      explanation: "未來式否定句：She + won't + write",
      logicHint: "won't = will not",
      difficultWords: ["write", "nextmonth"]
    },
    {
      question: "We ___ meet this weekend.",
      options: ["will not meet", "not meet", "will meet not", "we is not meeting"],
      correct: 0,
      explanation: "未來式否定句：We + will not + meet",
      logicHint: "will not + 原形動詞",
      difficultWords: ["meet", "thisweekend"]
    },
    {
      question: "He ___ study tomorrow morning.",
      options: ["will study", "won't study", "not study", "will study not"],
      correct: 1,
      explanation: "未來式否定句：He + won't + study",
      logicHint: "won't = will not",
      difficultWords: ["study", "tomorrowmorning"]
    },
    {
      question: "I ___ read next week.",
      options: ["will not read", "not read", "will read not", "i is not reading"],
      correct: 0,
      explanation: "未來式否定句：I + will not + read",
      logicHint: "will not + 原形動詞",
      difficultWords: ["read", "nextweek"]
    },
    {
      question: "You ___ call tomorrow night.",
      options: ["will call", "won't call", "will call not", "not call"],
      correct: 1,
      explanation: "未來式否定句：You + won't + call",
      logicHint: "won't = will not",
      difficultWords: ["call", "tomorrownight"]
    },
    {
      question: "They ___ play next Saturday.",
      options: ["will play", "won't play", "not play", "will play not"],
      correct: 1,
      explanation: "未來式否定句：They + won't + play",
      logicHint: "won't = will not",
      difficultWords: ["play", "nextSaturday"]
    },
    {
      question: "She ___ visit this evening.",
      options: ["will not visit", "not visit", "will visit not", "she is not visiting"],
      correct: 0,
      explanation: "未來式否定句：She + will not + visit",
      logicHint: "will not + 原形動詞",
      difficultWords: ["visit", "thisevening"]
    },
    {
      question: "He ___ watch tomorrow.",
      options: ["will watch", "won't watch", "not watch", "will watch not"],
      correct: 1,
      explanation: "未來式否定句：He + won't + watch",
      logicHint: "won't = will not",
      difficultWords: ["watch", "tomorrow"]
    },
    {
      question: "I ___ call next month.",
      options: ["will not call", "not call", "will call not", "i is not calling"],
      correct: 0,
      explanation: "未來式否定句：I + will not + call",
      logicHint: "will not + 原形動詞",
      difficultWords: ["call", "nextmonth"]
    },
    {
      question: "They ___ study this weekend.",
      options: ["will study", "won't study", "will study not", "not study"],
      correct: 1,
      explanation: "未來式否定句：They + won't + study",
      logicHint: "won't = will not",
      difficultWords: ["study", "thisweekend"]
    },
    {
      question: "You ___ eat tomorrow night.",
      options: ["will eat", "won't eat", "not eat", "will eat not"],
      correct: 1,
      explanation: "未來式否定句：You + won't + eat",
      logicHint: "won't = will not",
      difficultWords: ["eat", "tomorrownight"]
    },
    {
      question: "She ___ read next Saturday.",
      options: ["will not read", "not read", "will read not", "she is not reading"],
      correct: 0,
      explanation: "未來式否定句：She + will not + read",
      logicHint: "will not + 原形動詞",
      difficultWords: ["read", "nextSaturday"]
    },
    {
      question: "He ___ meet this weekend.",
      options: ["will meet", "won't meet", "not meet", "will meet not"],
      correct: 1,
      explanation: "未來式否定句：He + won't + meet",
      logicHint: "won't = will not",
      difficultWords: ["meet", "thisweekend"]
    },
    {
      question: "I ___ eat next month.",
      options: ["will eat", "won't eat", "will eat not", "not eat"],
      correct: 1,
      explanation: "未來式否定句：I + won't + eat",
      logicHint: "won't = will not",
      difficultWords: ["eat", "nextmonth"]
    },
          {
        question: "They ___ play tomorrow morning.",
        options: ["will play", "won't play", "will play not", "not play"],
        correct: 1,
        explanation: "未來式否定句：They + won't + play",
        logicHint: "won't = will not",
        difficultWords: ["play", "tomorrowmorning"]
      },
    {
      question: "You ___ watch this evening.",
      options: ["will watch", "won't watch", "will watch not", "you is not watching"],
      correct: 1,
      explanation: "未來式否定句：You + won't + watch",
      logicHint: "won't = will not",
      difficultWords: ["watch", "thisevening"]
    },
    {
      question: "I ___ call later.",
      options: ["will call", "won't call", "will call not", "not call"],
      correct: 1,
      explanation: "未來式否定句：I + won't + call",
      logicHint: "won't = will not",
      difficultWords: ["call", "later"]
    },
    {
      question: "She ___ read tomorrow night.",
      options: ["will read", "won't read", "will read not", "not read"],
      correct: 1,
      explanation: "未來式否定句：She + won't + read",
      logicHint: "won't = will not",
      difficultWords: ["read", "tomorrownight"]
    },
    {
      question: "He ___ visit today.",
      options: ["will visit", "won't visit", "will visit not", "not visit"],
      correct: 1,
      explanation: "未來式否定句：He + won't + visit",
      logicHint: "won't = will not",
      difficultWords: ["visit", "today"]
    },
    {
      question: "They ___ study next week.",
      options: ["will study", "won't study", "will study not", "not study"],
      correct: 1,
      explanation: "未來式否定句：They + won't + study",
      logicHint: "won't = will not",
      difficultWords: ["study", "nextweek"]
    },
    {
      question: "You ___ play later.",
      options: ["will not play", "not play", "will play not", "you is not playing"],
      correct: 0,
      explanation: "未來式否定句：You + will not + play",
      logicHint: "will not + 原形動詞",
      difficultWords: ["play", "later"]
    }
  ],
  medium: [
    {
      question: "The team ___ attend next year.",
      options: ["will attend", "won't attend", "not attend", "will attend not"],
      correct: 1,
      explanation: "未來式否定句：The team + won't + attend",
      logicHint: "won't = will not",
      difficultWords: ["attend", "nextyear"]
    },
    {
      question: "My friend ___ prepare later today.",
      options: ["will not prepare", "not prepare", "will prepare not", "my friend is not preparing"],
      correct: 0,
      explanation: "未來式否定句：My friend + will not + prepare",
      logicHint: "will not + 原形動詞",
      difficultWords: ["prepare", "later today"]
    },
    {
      question: "Our class ___ start this evening.",
      options: ["will start", "won't start", "will start not", "not start"],
      correct: 1,
      explanation: "未來式否定句：Our class + won't + start",
      logicHint: "won't = will not",
      difficultWords: ["start", "thisevening"]
    },
    {
      question: "These students ___ join next month.",
      options: ["will join", "won't join", "not join", "will join not"],
      correct: 1,
      explanation: "未來式否定句：These students + won't + join",
      logicHint: "won't = will not",
      difficultWords: ["join", "nextmonth"]
    },
    {
      question: "His parents ___ attend this Friday.",
      options: ["will not attend", "not attend", "will attend not", "his parents is not attending"],
      correct: 0,
      explanation: "未來式否定句：His parents + will not + attend",
      logicHint: "will not + 原形動詞",
      difficultWords: ["attend", "thisFriday"]
    },
    {
      question: "Her colleagues ___ finish tonight.",
      options: ["will finish", "won't finish", "will finish not", "not finish"],
      correct: 1,
      explanation: "未來式否定句：Her colleagues + won't + finish",
      logicHint: "will not + 原形動詞",
      difficultWords: ["finish", "tonight"]
    },
    {
      question: "The teacher ___ order next Monday.",
      options: ["will order", "won't order", "not order", "will order not"],
      correct: 1,
      explanation: "未來式否定句：The teacher + won't + order",
      logicHint: "won't = will not",
      difficultWords: ["order", "nextMonday"]
    },
    {
      question: "My brother ___ organize next week.",
      options: ["will not organize", "not organize", "will organize not", "my brother is not organizing"],
      correct: 0,
      explanation: "未來式否定句：My brother + will not + organize",
      logicHint: "will not + 原形動詞",
      difficultWords: ["organize", "nextweek"]
    },
    {
      question: "Your family ___ invite soon.",
      options: ["will invite", "won't invite", "will invite not", "not invite"],
      correct: 1,
      explanation: "未來式否定句：Your family + won't + invite",
      logicHint: "won't = will not",
      difficultWords: ["invite", "soon"]
    },
    {
      question: "Their manager ___ sell this summer.",
      options: ["will not sell", "not sell", "will sell not", "their manager is not selling"],
      correct: 0,
      explanation: "未來式否定句：Their manager + will not + sell",
      logicHint: "will not + 原形動詞",
      difficultWords: ["sell", "thissummer"]
    },
    {
      question: "The team ___ join later today.",
      options: ["will join", "won't join", "not join", "will join not"],
      correct: 1,
      explanation: "未來式否定句：The team + won't + join",
      logicHint: "won't = will not",
      difficultWords: ["join", "latertoday"]
    },
    {
      question: "My friend ___ complete next year.",
      options: ["will complete", "won't complete", "will not complete", "not complete"],
      correct: 1,
      explanation: "未來式否定句：My friend + won't  + complete",
      logicHint: "won't = will not",
      difficultWords: ["complete", "nextyear"]
    },
    {
      question: "Our class ___ attend this afternoon.",
      options: ["will not attend", "not attend", "will attend not", "our class is not attending"],
      correct: 0,
      explanation: "未來式否定句：Our class + will not + attend",
      logicHint: "will not + 原形動詞",
      difficultWords: ["attend", "thisafternoon"]
    },
    {
      question: "These students ___ order tonight.",
      options: ["will order", "won't order", "will order not", "not order"],
      correct: 1,
      explanation: "未來式否定句：These students + won't + order",
      logicHint: "won't = will not",
      difficultWords: ["order", "tonight"]
    },
    {
      question: "His parents ___ prepare next Monday.",
      options: ["will prepare", "won't prepare", "not prepare", "will prepare not"],
      correct: 1,
      explanation: "未來式否定句：His parents + won't + prepare",
      logicHint: "won't = will not",
      difficultWords: ["prepare", "nextMonday"]
    },
    {
      question: "Her colleagues ___ complete this Friday.",
      options: ["will complete", "won't complete", "will complete not", "not complete"],
      correct: 1,
      explanation: "未來式否定句：Her colleagues + won't + complete",
      logicHint: "won't = will not",
      difficultWords: ["complete", "thisFriday"]
    },
    {
      question: "The teacher ___ invite soon.",
      options: ["will invite", "won't invite", "will not invite", "not invite"],
      correct: 1,
      explanation: "未來式否定句：The teacher + won't + invite",
      logicHint: "won't = will not",
      difficultWords: ["invite", "soon"]
    },
    {
      question: "My brother ___ organize next month.",
      options: ["will organize", "won't organize", "will organize not", "not organize"],
      correct: 1,
      explanation: "未來式否定句：My brother + won't + organize",
      logicHint: "won't = will not",
      difficultWords: ["organize", "nextmonth"]
    },
    {
      question: "Your family ___ sell this summer.",
      options: ["will sell", "won't sell", "will sell not", "not sell"],
      correct: 1,
      explanation: "未來式否定句：Your family + won't + sell",
      logicHint: "won't = will not",
      difficultWords: ["sell", "thissummer"]
    },
    {
      question: "Their manager ___ start later today.",
      options: ["will start", "won't start", "will not start", "not start"],
      correct: 0,
      explanation: "未來式否定句：Their manager + will not + start",
      logicHint: "will not + 原形動詞",
      difficultWords: ["start", "latertoday"]
    },
    {
      question: "The team ___ finish next month.",
      options: ["will finish", "won't finish", "will not finish", "not finish"],
      correct: 1,
      explanation: "未來式否定句：The team + won't + finish",
      logicHint: "won't = will not",
      difficultWords: ["finish", "nextmonth"]
    },
    {
              question: "My friend ___ attend this evening.",
        options: ["will attend", "won't attend", "will attend not", "not attend"],
        correct: 1,
        explanation: "未來式否定句：My friend + won't + attend",
        logicHint: "won't = will not",
        difficultWords: ["attend", "thisevening"]
    },
    {
      question: "Our class ___ order soon.",
      options: ["will order", "won't order", "will not order", "not order"],
      correct: 0,
      explanation: "未來式否定句：Our class + will not + order",
      logicHint: "will not + 原形動詞",
      difficultWords: ["order", "soon"]
    },
    {
      question: "These students ___ prepare this Friday.",
      options: ["will prepare", "won't prepare", "will prepare not", "not prepare"],
      correct: 1,
      explanation: "未來式否定句：These students + won't + prepare",
      logicHint: "won't = will not",
      difficultWords: ["prepare", "thisFriday"]
    },
    {
      question: "His parents ___ join next year.",
      options: ["will join", "won't join", "will not join", "not join"],
      correct: 0,
      explanation: "未來式否定句：His parents + will not + join",
      logicHint: "will not + 原形動詞",
      difficultWords: ["join", "nextyear"]
    },
          {
        question: "Her colleagues ___ start tomorrow morning.",
        options: ["will start", "won't start", "will start not", "not start"],
        correct: 1,
        explanation: "未來式否定句：Her colleagues + won't + start",
        logicHint: "won't = will not",
        difficultWords: ["start", "tomorrowmorning"]
      },
    {
      question: "The teacher ___ finish this summer.",
      options: ["will finish", "won't finish", "will not finish", "not finish"],
      correct: 1,
      explanation: "未來式否定句：The teacher + won't + finish",
      logicHint: "won't = will not",
      difficultWords: ["finish", "thissummer"]
    },
    {
      question: "My brother ___ attend next Monday.",
      options: ["will attend", "won't attend", "will not attend", "not attend"],
      correct: 2,
      explanation: "未來式否定句：My brother + will not + attend (完整形式)",
      logicHint: "完整否定形式 will not",
      difficultWords: ["attend", "nextMonday"]
    },
    {
      question: "Your family ___ prepare later today.",
      options: ["will prepare", "won't prepare", "will not prepare", "not prepare"],
      correct: 0,
      explanation: "未來式否定句：Your family + will not + prepare",
      logicHint: "will not + 原形動詞",
      difficultWords: ["prepare", "latertoday"]
    }
  ],
  hard: [
    {
      question: "The government ___ replace in the future.",
      options: ["will replace", "won't replace", "not replace", "will replace not"],
      correct: 1,
      explanation: "未來式否定句：The government + won't + replace",
      logicHint: "won't = will not",
      difficultWords: ["government", "replace", "future"]
    },
    {
      question: "Scientists ___ solve under these conditions.",
      options: ["will not solve", "not solve", "will solve not", "scientists is not solving"],
      correct: 0,
      explanation: "未來式否定句：Scientists + will not + solve",
      logicHint: "will not + 原形動詞",
      difficultWords: ["scientists", "solve", "conditions"]
    },
    {
      question: "The committee ___ evaluate soon.",
      options: ["will evaluate", "won't evaluate", "will evaluate not", "not evaluate"],
      correct: 1,
      explanation: "未來式否定句：The committee + won't + evaluate",
      logicHint: "won't = will not",
      difficultWords: ["committee", "evaluate", "soon"]
    },
    {
      question: "Technology ___ enforce next year.",
      options: ["will enforce", "won't enforce", "not enforce", "will enforce not"],
      correct: 1,
      explanation: "未來式否定句：Technology + won't + enforce",
      logicHint: "won't = will not",
      difficultWords: ["technology", "enforce", "nextyear"]
    },
    {
      question: "The economy ___ recover this quarter.",
      options: ["will not recover", "not recover", "will recover not", "the economy is not recovering"],
      correct: 0,
      explanation: "未來式否定句：The economy + will not + recover",
      logicHint: "will not + 原形動詞",
      difficultWords: ["economy", "recover", "quarter"]
    },
    {
      question: "Climate change ___ introduce shortly.",
      options: ["will introduce", "won't introduce", "not introduce", "will introduce not"],
      correct: 1,
      explanation: "未來式否定句：Climate change + won't + introduce",
      logicHint: "won't = will not",
      difficultWords: ["climate", "change", "introduce", "shortly"]
    },
    {
      question: "The price ___ implement immediately.",
      options: ["will implement", "won't implement", "will implement not", "not implement"],
      correct: 1,
      explanation: "未來式否定句：The price + won't + implement",
      logicHint: "won't = will not",
      difficultWords: ["price", "implement", "immediately"]
    },
    {
      question: "The project ___ discover next year.",
      options: ["will discover", "won't discover", "not discover", "will discover not"],
      correct: 1,
      explanation: "未來式否定句：The project + won't + discover",
      logicHint: "won't = will not",
      difficultWords: ["project", "discover", "nextyear"]
    },
    {
      question: "The situation ___ increase eventually.",
      options: ["will increase", "won't increase", "will increase not", "not increase"],
      correct: 1,
      explanation: "未來式否定句：The situation + won't + increase",
      logicHint: "won't = will not",
      difficultWords: ["situation", "increase", "eventually"]
    },
    {
      question: "The new policy ___ solve soon.",
      options: ["will solve", "won't solve", "not solve", "will solve not"],
      correct: 1,
      explanation: "未來式否定句：The new policy + won't + solve",
      logicHint: "won't = will not",
      difficultWords: ["policy", "solve", "soon"]
    },
    {
      question: "The government ___ enforce in the future.",
      options: ["will enforce", "won't enforce", "will enforce not", "not enforce"],
      correct: 1,
      explanation: "未來式否定句：The government + won't + enforce",
      logicHint: "won't = will not",
      difficultWords: ["government", "enforce", "future"]
    },
    {
      question: "Scientists ___ implement this decade.",
      options: ["will implement", "won't implement", "not implement", "will implement not"],
      correct: 1,
      explanation: "未來式否定句：Scientists + won't + implement",
      logicHint: "won't = will not",
      difficultWords: ["scientists", "implement", "decade"]
    },
    {
      question: "The committee ___ introduce next year.",
      options: ["will not introduce", "not introduce", "will introduce not", "the committee is not introducing"],
      correct: 0,
      explanation: "未來式否定句：The committee + will not + introduce",
      logicHint: "will not + 原形動詞",
      difficultWords: ["committee", "introduce", "nextyear"]
    },
    {
      question: "Technology ___ evaluate later.",
      options: ["will evaluate", "won't evaluate", "will evaluate not", "not evaluate"],
      correct: 1,
      explanation: "未來式否定句：Technology + won't + evaluate",
      logicHint: "won't = will not",
      difficultWords: ["technology", "evaluate"]
    },
    {
      question: "The economy ___ solve this quarter.",
      options: ["will solve", "won't solve", "will solve not", "not solve"],
      correct: 1,
      explanation: "未來式否定句：The economy + won't + solve",
      logicHint: "won't = will not",
      difficultWords: ["economy", "solve", "quarter"]
    },
    {
      question: "Climate change ___ recover soon.",
      options: ["will recover", "won't recover", "will not recover", "not recover"],
      correct: 1,
      explanation: "未來式否定句：Climate change + won't + recover",
      logicHint: "won't = will not",
      difficultWords: ["climate", "change", "recover"]
    },
    {
      question: "The price ___ discover under these conditions.",
      options: ["will discover", "won't discover", "will not discover", "not discover"],
      correct: 1,
      explanation: "未來式否定句：The price + won't + discover",
      logicHint: "won't = will not",
      difficultWords: ["price", "discover", "conditions"]
    },
    {
      question: "The project ___ make eventually.",
      options: ["will make", "won't make", "will make not", "not make"],
      correct: 1,
      explanation: "未來式否定句：The project + won't + make",
      logicHint: "won't = will not",
      difficultWords: ["project", "make", "eventually"]
    },
    {
      question: "The situation ___ increase under these conditions.",
      options: ["will increase", "won't increase", "will increase not", "not increase"],
      correct: 1,
      explanation: "未來式否定句：The situation + won't + increase",
      logicHint: "won't = will not",
      difficultWords: ["situation", "increase", "conditions"]
    },
    {
      question: "The new policy ___ recover later.",
      options: ["will recover", "won't recover", "will not recover", "not recover"],
      correct: 1,
      explanation: "未來式否定句：The new policy + won't + recover",
      logicHint: "won't = will not",
      difficultWords: ["policy", "recover"]
    },
    {
      question: "The government ___ discover immediately.",
      options: ["will discover", "won't discover", "will not discover", "not discover"],
      correct: 0,
      explanation: "未來式否定句：The government + will not + discover",
      logicHint: "will not + 原形動詞",
      difficultWords: ["government", "discover", "immediately"]
    },
          {
        question: "Scientists ___ replace this decade.",
        options: ["will replace", "won't replace", "will replace not", "not replace"],
        correct: 1,
        explanation: "未來式否定句：Scientists + won't + replace",
        logicHint: "won't = will not",
        difficultWords: ["scientists", "replace", "decade"]
      },
    {
      question: "The committee ___ enforce soon.",
      options: ["will enforce", "won't enforce", "will enforce not", "not enforce"],
      correct: 1,
      explanation: "未來式否定句：The committee + won't + enforce",
      logicHint: "won't = will not",
      difficultWords: ["committee", "enforce"]
    },
          {
        question: "Technology ___ make immediately.",
        options: ["will make", "won't make", "will make not", "not make"],
        correct: 1,
        explanation: "未來式否定句：Technology + won't + make",
        logicHint: "won't = will not",
        difficultWords: ["technology", "make", "immediately"]
      },
    {
      question: "The economy ___ introduce in the future.",
      options: ["will introduce", "won't introduce", "will introduce not", "not introduce"],
      correct: 1,
      explanation: "未來式否定句：The economy + won't + introduce",
      logicHint: "won't = will not",
      difficultWords: ["economy", "introduce", "future"]
    },
    {
      question: "Climate change ___ increase later.",
      options: ["will increase", "won't increase", "will not increase", "not increase"],
      correct: 1,
      explanation: "未來式否定句：Climate change + won't + increase",
      logicHint: "won't = will not",
      difficultWords: ["climate", "change", "increase"]
    },
          {
        question: "The price ___ evaluate shortly.",
        options: ["will evaluate", "won't evaluate", "will evaluate not", "not evaluate"],
        correct: 1,
        explanation: "未來式否定句：The price + won't + evaluate",
        logicHint: "won't = will not",
        difficultWords: ["price", "evaluate"]
      },
    {
      question: "The project ___ implement under these conditions.",
      options: ["will implement", "won't implement", "will not implement", "not implement"],
      correct: 0,
      explanation: "未來式否定句：The project + will not + implement",
      logicHint: "will not + 原形動詞",
      difficultWords: ["project", "implement", "conditions"]
    },
    {
      question: "The situation ___ discover this decade.",
      options: ["will discover", "won't discover", "will not discover", "not discover"],
      correct: 1,
      explanation: "未來式否定句：The situation + won't + discover",
      logicHint: "won't = will not",
      difficultWords: ["situation", "discover", "decade"]
    },
    {
      question: "The new policy ___ solve later.",
      options: ["will solve", "won't solve", "will not solve", "not solve"],
      correct: 2,
      explanation: "未來式否定句：The new policy + will not + solve (完整形式)",
      logicHint: "完整否定形式 will not",
      difficultWords: ["policy", "solve"]
    }
  ]
};

const DIFFICULT_WORDS_TRANSLATION = {
  // 基礎單字
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
  "grandparents": "祖父母",
  "every month": "每個月",
  "teacher": "老師",
  "teach": "教",
  
  // 未來式否定句相關單字
  "play": "玩",
  "later": "稍後",
  "call": "打電話",
  "thisweekend": "這個週末",
  "read": "閱讀",
  "tomorrownight": "明天晚上",
  "visit": "拜訪",
  "nextmonth": "下個月",
  "meet": "見面",
  "nextSaturday": "下週六",
  "go": "去",
  "thisevening": "今天晚上",
  "eat": "吃",
  "tomorrow": "明天",
  "study": "學習",
  "nextweek": "下週",
  "watch": "看",
  "write": "寫",
  "tomorrowmorning": "明天早上",
  "today": "今天",
  
  // 中等題目新增單字
  "attend": "參加",
  "nextyear": "明年",
  "prepare": "準備",
  "later today": "今天稍後",
  "start": "開始",
  "join": "加入",
  "thisFriday": "這個星期五",
  "finish": "完成",
  "tonight": "今晚",
  "order": "訂購",
  "nextMonday": "下週一",
  "organize": "組織",
  "invite": "邀請",
  "soon": "很快",
  "sell": "賣",
  "thissummer": "今年夏天",
  "latertoday": "今天稍後",
  "complete": "完成",
  "thisafternoon": "今天下午",
  "nextMonday": "下週一",
  "thisFriday": "這個星期五",
  "nextmonth": "下個月",
  "thissummer": "今年夏天",
  "latertoday": "今天稍後",
  "nextmonth": "下個月",
  "thisevening": "今天晚上",
  "soon": "很快",
  "thisFriday": "這個星期五",
  "nextyear": "明年",
  "tomorrowmorning": "明天早上",
  "thissummer": "今年夏天",
  "nextMonday": "下週一",
  "latertoday": "今天稍後",
  
  // 困難題目新增單字
  "government": "政府",
  "replace": "取代",
  "future": "未來",
  "scientists": "科學家",
  "solve": "解決",
  "conditions": "條件",
  "committee": "委員會",
  "evaluate": "評估",
  "technology": "科技",
  "enforce": "執行",
  "economy": "經濟",
  "recover": "復甦",
  "quarter": "季度",
  "climate": "氣候",
  "change": "改變",
  "introduce": "引進",
  "shortly": "很快",
  "price": "價格",
  "implement": "實施",
  "immediately": "立即",
  "project": "專案",
  "discover": "發現",
  "situation": "情況",
  "increase": "增加",
  "eventually": "最終",
  "policy": "政策",
  "decade": "十年",
  "later": "稍後"
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
    title: `第九關：現在式與現在進行式混合題 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
    description: `學習現在式與現在進行式的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`
  };
}

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索未來式否定句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的未來式否定句",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的未來式否定句挑戰",
        difficulty: "hard"
    }
};

// 困難單字詞典
const DIFFICULT_WORDS = DIFFICULT_WORDS_TRANSLATION;

function getAllLevels() {
  return ['easy', 'medium', 'hard'];
} 