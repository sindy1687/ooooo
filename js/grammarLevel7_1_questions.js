// 文法塔統一題庫系統 - 第七關：一般動詞現在式問句（多樣化題庫）
// 每個小關卡10題，難度逐關遞增，主詞多樣化，包含所有格加名詞

// 統一題庫 - 所有題目按難度分類（一般動詞現在式問句）
const UNIFIED_QUESTION_BANK = {
  easy: [
        {
            question: "___ the students study English every day?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the students 是複數，問句用 Do + 主詞 + 原形動詞。（學生們每天學英文嗎？）",
            logicHint: "主詞 the students 是複數，問句要用什麼呢?",
            difficultWords: ["students", "English", "every"]
        },
        {
            question: "___ your brother play basketball on weekends?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 your brother 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（你哥哥週末打籃球嗎？）",
            logicHint: "主詞 your brother 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["brother", "basketball", "weekends"]
        },
        {
            question: "___ her sister listen to music?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 her sister 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（她妹妹聽音樂嗎？）",
            logicHint: "主詞 her sister 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["sister", "music"]
        },
        {
            question: "___ the children run in the park?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the children 是複數，問句用 Do + 主詞 + 原形動詞。（孩子們在公園跑步嗎？）",
            logicHint: "主詞 the children 是複數，問句要用什麼呢?",
            difficultWords: ["children", "park"]
        },
        {
            question: "___ that teacher teach math very well?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 that teacher 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（那位老師數學教得好嗎？）",
            logicHint: "主詞 that teacher 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["teacher", "math", "well"]
        },
        {
            question: "___ your mother cook dinner every evening?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 your mother 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（你媽媽每天晚上煮晚餐嗎？）",
            logicHint: "主詞 your mother 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["mother", "dinner", "evening"]
        },
        {
            question: "___ the birds sing in the morning?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the birds 是複數，問句用 Do + 主詞 + 原形動詞。（鳥兒在早上唱歌嗎？）",
            logicHint: "主詞 the birds 是複數，問句要用什麼呢?",
            difficultWords: ["birds", "morning"]
        },
        {
            question: "___ this cat like fish?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 this cat 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（這隻貓喜歡魚嗎？）",
            logicHint: "主詞 this cat 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["cat", "fish"]
        },
        {
            question: "___ the dogs sleep in the garden?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the dogs 是複數，問句用 Do + 主詞 + 原形動詞。（狗在花園裡睡覺嗎？）",
            logicHint: "主詞 the dogs 是複數，問句要用什麼呢?",
            difficultWords: ["dogs", "garden"]
        },
        {
            question: "___ their father read the newspaper every morning?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 their father 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（他們的爸爸每天早上看報紙嗎？）",
            logicHint: "主詞 their father 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["father", "newspaper", "morning"]
        }
  ],
  medium: [
        {
            question: "___ the workers work hard every day?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the workers 是複數，問句用 Do + 主詞 + 原形動詞。（工人們每天努力工作嗎？）",
            logicHint: "主詞 the workers 是複數，問句要用什麼呢?",
            difficultWords: ["workers", "hard"]
        },
        {
            question: "___ that doctor treat patients in the hospital?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 that doctor 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（那位醫生在醫院治療病人嗎？）",
            logicHint: "主詞 that doctor 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["doctor", "patients", "hospital"]
        },
        {
            question: "___ your uncle work in a big company?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 your uncle 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（你叔叔在大公司工作嗎？）",
            logicHint: "主詞 your uncle 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["uncle", "company"]
        },
        {
            question: "___ the computers process quickly?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the computers 是複數，問句用 Do + 主詞 + 原形動詞。（電腦快速處理嗎？）",
            logicHint: "主詞 the computers 是複數，問句要用什麼呢?",
            difficultWords: ["computers", "quickly"]
        },
        {
            question: "___ her grandmother tell stories to children?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 her grandmother 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（她奶奶給孩子們講故事嗎？）",
            logicHint: "主詞 her grandmother 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["grandmother", "stories", "children"]
        },
        {
            question: "___ the buses arrive on time?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the buses 是複數，問句用 Do + 主詞 + 原形動詞。（巴士準時到達嗎？）",
            logicHint: "主詞 the buses 是複數，問句要用什麼呢?",
            difficultWords: ["buses", "arrive", "time"]
        },
        {
            question: "___ this restaurant serve delicious food?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 this restaurant 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（這家餐廳提供美味的食物嗎？）",
            logicHint: "主詞 this restaurant 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["restaurant", "delicious", "food"]
        },
        {
            question: "___ the students complete their homework?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the students 是複數，問句用 Do + 主詞 + 原形動詞。（學生們完成他們的作業嗎？）",
            logicHint: "主詞 the students 是複數，問句要用什麼呢?",
            difficultWords: ["students", "homework"]
        },
        {
            question: "___ your aunt bake delicious cookies?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 your aunt 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（你阿姨烤美味的餅乾嗎？）",
            logicHint: "主詞 your aunt 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["aunt", "delicious", "cookies"]
        },
        {
            question: "___ the trees change in autumn?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the trees 是複數，問句用 Do + 主詞 + 原形動詞。（樹在秋天變色嗎？）",
            logicHint: "主詞 the trees 是複數，問句要用什麼呢?",
            difficultWords: ["trees", "autumn"]
        },
        {
            question: "___ that engineer design new projects?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 that engineer 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（那位工程師設計新專案嗎？）",
            logicHint: "主詞 that engineer 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["engineer", "projects"]
        },
        {
            question: "___ the teachers prepare lessons carefully?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the teachers 是複數，問句用 Do + 主詞 + 原形動詞。（老師們仔細準備課程嗎？）",
            logicHint: "主詞 the teachers 是複數，問句要用什麼呢?",
            difficultWords: ["teachers", "lessons", "carefully"]
        },
        {
            question: "___ her cousin study music at school?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 her cousin 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（她表妹在學校學音樂嗎？）",
            logicHint: "主詞 her cousin 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["cousin", "music", "school"]
        },
        {
            question: "___ the cars drive on the highway?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the cars 是複數，問句用 Do + 主詞 + 原形動詞。（車子在高速公路上行駛嗎？）",
            logicHint: "主詞 the cars 是複數，問句要用什麼呢?",
            difficultWords: ["cars", "highway"]
        }
  ],
  hard: [
        {
            question: "___ the scientists conduct research in the laboratory?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the scientists 是複數，問句用 Do + 主詞 + 原形動詞。（科學家們在實驗室進行研究嗎？）",
            logicHint: "主詞 the scientists 是複數，問句要用什麼呢?",
            difficultWords: ["scientists", "conduct", "research", "laboratory"]
        },
        {
            question: "___ that architect design modern buildings?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 that architect 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（那位建築師設計現代建築嗎？）",
            logicHint: "主詞 that architect 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["architect", "design", "modern", "buildings"]
        },
        {
            question: "___ your grandfather tell interesting stories about the past?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 your grandfather 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（你爺爺講關於過去的有趣故事嗎？）",
            logicHint: "主詞 your grandfather 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["grandfather", "interesting", "stories", "past"]
        },
        {
            question: "___ the musicians perform classical music beautifully?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the musicians 是複數，問句用 Do + 主詞 + 原形動詞。（音樂家們優美地演奏古典音樂嗎？）",
            logicHint: "主詞 the musicians 是複數，問句要用什麼呢?",
            difficultWords: ["musicians", "perform", "classical", "beautifully"]
        },
        {
            question: "___ that professor teach advanced mathematics at university?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 that professor 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（那位教授在大學教高等數學嗎？）",
            logicHint: "主詞 that professor 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["professor", "advanced", "mathematics", "university"]
        },
        {
            question: "___ the artists create beautiful paintings in their studio?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the artists 是複數，問句用 Do + 主詞 + 原形動詞。（藝術家們在他們的工作室創作美麗的畫作嗎？）",
            logicHint: "主詞 the artists 是複數，問句要用什麼呢?",
            difficultWords: ["artists", "create", "beautiful", "paintings", "studio"]
        },
        {
            question: "___ her niece study medicine at medical school?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 her niece 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（她姪女在醫學院學醫嗎？）",
            logicHint: "主詞 her niece 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["niece", "medicine", "medical", "school"]
        },
        {
            question: "___ the photographers capture amazing moments with their cameras?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the photographers 是複數，問句用 Do + 主詞 + 原形動詞。（攝影師們用他們的相機捕捉精彩的時刻嗎？）",
            logicHint: "主詞 the photographers 是複數，問句要用什麼呢?",
            difficultWords: ["photographers", "capture", "amazing", "moments", "cameras"]
        },
        {
            question: "___ that chef prepare delicious international cuisine?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 that chef 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（那位廚師準備美味的國際料理嗎？）",
            logicHint: "主詞 that chef 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["chef", "prepare", "delicious", "international", "cuisine"]
        },
        {
            question: "___ the writers publish interesting novels every year?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the writers 是複數，問句用 Do + 主詞 + 原形動詞。（作家們每年出版有趣的小說嗎？）",
            logicHint: "主詞 the writers 是複數，問句要用什麼呢?",
            difficultWords: ["writers", "publish", "interesting", "novels", "year"]
        },
        {
            question: "___ your nephew play professional basketball in the league?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 your nephew 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（你姪子在聯盟打職業籃球嗎？）",
            logicHint: "主詞 your nephew 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["nephew", "professional", "basketball", "league"]
        },
        {
            question: "___ the dancers perform traditional dances on stage?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the dancers 是複數，問句用 Do + 主詞 + 原形動詞。（舞者們在舞台上表演傳統舞蹈嗎？）",
            logicHint: "主詞 the dancers 是複數，問句要用什麼呢?",
            difficultWords: ["dancers", "perform", "traditional", "dances", "stage"]
        },
        {
            question: "___ that lawyer represent clients in court regularly?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 that lawyer 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（那位律師定期在法庭上代表客戶嗎？）",
            logicHint: "主詞 that lawyer 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["lawyer", "represent", "clients", "court", "regularly"]
        },
        {
            question: "___ the pilots fly commercial airplanes across continents?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the pilots 是複數，問句用 Do + 主詞 + 原形動詞。（飛行員們駕駛商用飛機飛越大洲嗎？）",
            logicHint: "主詞 the pilots 是複數，問句要用什麼呢?",
            difficultWords: ["pilots", "fly", "commercial", "airplanes", "continents"]
        },
        {
            question: "___ her cousin manage a successful business downtown?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 her cousin 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（她表妹在市中心管理一家成功的企業嗎？）",
            logicHint: "主詞 her cousin 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["cousin", "manage", "successful", "business", "downtown"]
        },
        {
            question: "___ the firefighters rescue people from dangerous situations?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the firefighters 是複數，問句用 Do + 主詞 + 原形動詞。（消防員們從危險情況中救援人們嗎？）",
            logicHint: "主詞 the firefighters 是複數，問句要用什麼呢?",
            difficultWords: ["firefighters", "rescue", "dangerous", "situations"]
        },
        {
            question: "___ that dentist treat patients with modern equipment?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 that dentist 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（那位牙醫用現代設備治療病人嗎？）",
            logicHint: "主詞 that dentist 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["dentist", "treat", "modern", "equipment"]
        },
        {
            question: "___ the nurses care for patients in the hospital ward?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the nurses 是複數，問句用 Do + 主詞 + 原形動詞。（護士們在醫院病房照顧病人嗎？）",
            logicHint: "主詞 the nurses 是複數，問句要用什麼呢?",
            difficultWords: ["nurses", "care", "patients", "hospital", "ward"]
        },
        {
            question: "___ your sister-in-law work as a financial advisor?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 1,
            explanation: "主詞 your sister-in-law 是第三人稱單數，問句用 Does + 主詞 + 原形動詞。（你嫂子擔任財務顧問嗎？）",
            logicHint: "主詞 your sister-in-law 是第三人稱單數，問句要用什麼呢?",
            difficultWords: ["sister-in-law", "financial", "advisor"]
        },
        {
            question: "___ the police officers patrol the neighborhood regularly?",
            options: ["Do", "Does", "Is", "Are"],
            correct: 0,
            explanation: "主詞 the police officers 是複數，問句用 Do + 主詞 + 原形動詞。（警察們定期巡邏社區嗎？）",
            logicHint: "主詞 the police officers 是複數，問句要用什麼呢?",
            difficultWords: ["police", "officers", "patrol", "neighborhood", "regularly"]
        }
  ]
};

// 困難單字翻譯對照表
const DIFFICULT_WORDS_TRANSLATION = {
    // Easy Level
    "students": "學生們",
    "English": "英文",
    "every": "每個",
    "brother": "哥哥",
    "basketball": "籃球",
    "weekends": "週末",
    "sister": "妹妹",
    "music": "音樂",
    "children": "孩子們",
    "park": "公園",
    "teacher": "老師",
    "math": "數學",
    "well": "好",
    "mother": "媽媽",
    "dinner": "晚餐",
    "evening": "晚上",
    "birds": "鳥兒",
    "morning": "早上",
    "cat": "貓",
    "fish": "魚",
    "dogs": "狗",
    "garden": "花園",
    "father": "爸爸",
    "newspaper": "報紙",
    
    // Medium Level
    "workers": "工人們",
    "hard": "努力",
    "doctor": "醫生",
    "patients": "病人",
    "hospital": "醫院",
    "uncle": "叔叔",
    "company": "公司",
    "computers": "電腦",
    "quickly": "快速",
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
    
    // Hard Level
    "scientists": "科學家們",
    "conduct": "進行",
    "research": "研究",
    "laboratory": "實驗室",
    "architect": "建築師",
    "design": "設計",
    "modern": "現代的",
    "buildings": "建築",
    "grandfather": "爺爺",
    "interesting": "有趣的",
    "past": "過去",
    "musicians": "音樂家們",
    "perform": "表演",
    "classical": "古典的",
    "beautifully": "優美地",
    "professor": "教授",
    "advanced": "高等的",
    "mathematics": "數學",
    "university": "大學",
    "artists": "藝術家們",
    "create": "創作",
    "beautiful": "美麗的",
    "paintings": "畫作",
    "studio": "工作室",
    "niece": "姪女",
    "medicine": "醫學",
    "medical": "醫學的",
    "photographers": "攝影師們",
    "capture": "捕捉",
    "amazing": "精彩的",
    "moments": "時刻",
    "cameras": "相機",
    "chef": "廚師",
    "prepare": "準備",
    "international": "國際的",
    "cuisine": "料理",
    "writers": "作家們",
    "publish": "出版",
    "novels": "小說",
    "year": "年",
    "nephew": "姪子",
    "professional": "職業的",
    "league": "聯盟",
    "dancers": "舞者們",
    "traditional": "傳統的",
    "dances": "舞蹈",
    "stage": "舞台",
    "lawyer": "律師",
    "represent": "代表",
    "clients": "客戶",
    "court": "法庭",
    "regularly": "定期地",
    "pilots": "飛行員們",
    "fly": "駕駛",
    "commercial": "商用的",
    "airplanes": "飛機",
    "continents": "大洲",
    "manage": "管理",
    "successful": "成功的",
    "business": "企業",
    "downtown": "市中心",
    "firefighters": "消防員們",
    "rescue": "救援",
    "dangerous": "危險的",
    "situations": "情況",
    "dentist": "牙醫",
    "treat": "治療",
    "equipment": "設備",
    "nurses": "護士們",
    "care": "照顧",
    "ward": "病房",
    "sister-in-law": "嫂子",
    "financial": "財務的",
    "advisor": "顧問",
    "police": "警察",
    "officers": "警官們",
    "patrol": "巡邏",
    "neighborhood": "社區"
};

// 獲取隨機題目
function getRandomQuestions(subLevel, count = 10) {
    // 根據 LEVEL_CONFIG 的難度分布來選擇題目
    const levelConfig = LEVEL_CONFIG[subLevel];
    if (!levelConfig) {
        console.error(`找不到關卡配置 ${subLevel}`);
        return [];
    }
    
    const { difficultyDistribution } = levelConfig;
    let selectedQuestions = [];
    
    // 根據難度分布選擇題目
    Object.keys(difficultyDistribution).forEach(difficulty => {
        const ratio = difficultyDistribution[difficulty];
        const questionCount = Math.round(count * ratio);
        const questions = UNIFIED_QUESTION_BANK[difficulty];
        
        if (questions && questions.length > 0) {
            const shuffled = [...questions].sort(() => Math.random() - 0.5);
            selectedQuestions.push(...shuffled.slice(0, questionCount));
        }
    });
    
    // 如果選出的題目不夠，從所有難度中補充
    if (selectedQuestions.length < count) {
        const allQuestions = [];
        Object.values(UNIFIED_QUESTION_BANK).forEach(questions => {
            allQuestions.push(...questions);
        });
        
        const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
        const remainingCount = count - selectedQuestions.length;
        selectedQuestions.push(...shuffled.slice(0, remainingCount));
    }
    
    // 最終打亂並返回指定數量的題目
    return selectedQuestions.sort(() => Math.random() - 0.5).slice(0, count);
}

// 獲取關卡資訊
function getLevelInfo(subLevel) {
    return {
        title: `第七關：一般動詞現在式問句 - ${subLevel === 'easy' ? '簡單' : subLevel === 'medium' ? '中級' : '困難'}關卡`,
        description: `學習一般動詞現在式問句的用法，${subLevel === 'easy' ? '基礎題目' : subLevel === 'medium' ? '進階題目' : '高級題目'}`
    };
}

// 獲取所有關卡
function getAllLevels() {
    return ['easy', 'medium', 'hard'];
}

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "第七小關：基礎問句",
        description: "練習Do/Does開頭的一般動詞現在式問句",
        difficultyDistribution: {
            easy: 0.5,
            medium: 0.3,
            hard: 0.2
        }
    },
    sub2: {
        name: "第七小關：進階問句",
        description: "進階主詞與動詞搭配的問句",
        difficultyDistribution: {
            easy: 0.3,
            medium: 0.4,
            hard: 0.3
        }
    },
    sub3: {
        name: "第七小關：挑戰問句",
        description: "複雜句型與困難主詞的問句",
        difficultyDistribution: {
            easy: 0.1,
            medium: 0.3,
            hard: 0.6
        }
    }
}; 