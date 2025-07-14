// Aphrodite 填空挑戰字庫
const APHRODITE_VOCAB_DATA = [
  {
    "word": "move",
    "zh": "搬；感動",
    "en_sentence": "Please help me move the table to the corner.",
    "zh_sentence": "請幫我把桌子搬到角落。",
    "category": "動作動詞"
  },
  {
    "word": "paste",
    "zh": "黏貼",
    "en_sentence": "Paste the picture into your notebook.",
    "zh_sentence": "把圖片黏貼到你的筆記本上。",
    "category": "動作動詞"
  },
  {
    "word": "become",
    "zh": "變成；成為",
    "en_sentence": "He wants to become a doctor when he grows up.",
    "zh_sentence": "他長大後想成為一名醫生。",
    "category": "動作動詞"
  },
  {
    "word": "around",
    "zh": "在…附近",
    "en_sentence": "There are many shops around the school.",
    "zh_sentence": "學校附近有很多商店。",
    "category": "場所位置"
  },
  {
    "word": "more",
    "zh": "更多的",
    "en_sentence": "I want more pages to read.",
    "zh_sentence": "我想要更多頁面來閱讀。",
    "category": "數量分數"
  },
  {
    "word": "most",
    "zh": "最多的；多數的",
    "en_sentence": "She has the most stickers in the class.",
    "zh_sentence": "她在班上擁有最多的貼紙。",
    "category": "數量分數"
  },
  {
    "word": "whose",
    "zh": "誰的",
    "en_sentence": "Whose backpack is this on the desk?",
    "zh_sentence": "桌上的書包是誰的？",
    "category": "稱謂人際"
  },
  {
    "word": "than",
    "zh": "比",
    "en_sentence": "My brother is taller than me.",
    "zh_sentence": "我哥哥比我高。",
    "category": "形容詞"
  },
  {
    "word": "heart",
    "zh": "心臟",
    "en_sentence": "My heart beats fast when I run.",
    "zh_sentence": "我跑步時心臟跳得很快。",
    "category": "身體健康"
  },
  {
    "word": "arm",
    "zh": "手臂",
    "en_sentence": "He holds the book in his arm.",
    "zh_sentence": "他用手臂抱著書。",
    "category": "身體健康"
  },
  {
    "word": "nail",
    "zh": "指甲",
    "en_sentence": "Please clean under your nails after playing.",
    "zh_sentence": "玩完後請把指甲底下清乾淨。",
    "category": "身體健康"
  },
  {
    "word": "knee",
    "zh": "膝蓋",
    "en_sentence": "He fell and hurt his knee during the game.",
    "zh_sentence": "他在遊戲中跌倒，膝蓋受傷了。",
    "category": "身體健康"
  },
  {
    "word": "shoulder",
    "zh": "肩膀",
    "en_sentence": "Carry your bag on one shoulder.",
    "zh_sentence": "把書包掛在一邊肩膀上。",
    "category": "身體健康"
  },
  {
    "word": "part",
    "zh": "部分",
    "en_sentence": "This is the best part of the story.",
    "zh_sentence": "這是故事中最精彩的部分。",
    "category": "抽象概念"
  },
  {
    "word": "rest",
    "zh": "休息",
    "en_sentence": "Take a rest before you continue studying.",
    "zh_sentence": "在繼續學習前先休息一下。",
    "category": "身體健康"
  },
  {
    "word": "cut",
    "zh": "切；傷口",
    "en_sentence": "Be careful not to cut your finger when you slice the bread.",
    "zh_sentence": "當你切麵包時，小心別割到手指。",
    "category": "動作動詞"
  },
  {
    "word": "fill",
    "zh": "裝滿",
    "en_sentence": "Please fill the water bottle before the hike.",
    "zh_sentence": "請在健行前把水瓶裝滿。",
    "category": "動作動詞"
  },
  {
    "word": "pack",
    "zh": "包；裝箱",
    "en_sentence": "I need to pack my clothes for the weekend trip.",
    "zh_sentence": "我需要為週末旅行把衣服打包。",
    "category": "動作動詞"
  },
  {
    "word": "package",
    "zh": "包裹；包裝",
    "en_sentence": "The delivery man dropped off a package at our door.",
    "zh_sentence": "送貨員把一個包裹放在我們家門口。",
    "category": "抽象概念"
  },
  {
    "word": "air",
    "zh": "空氣",
    "en_sentence": "Open the window to let fresh air into the room.",
    "zh_sentence": "打開窗戶讓新鮮空氣進入房間。",
    "category": "自然環境"
  },
  {
    "word": "smoke",
    "zh": "菸；抽菸",
    "en_sentence": "The campfire started to smoke when the wind blew.",
    "zh_sentence": "風一吹，營火就冒起了煙。",
    "category": "自然環境"
  },
  {
    "word": "earth",
    "zh": "地球",
    "en_sentence": "Astronauts study earth from space.",
    "zh_sentence": "太空人從太空中研究地球。",
    "category": "自然環境"
  },
  {
    "word": "plant",
    "zh": "植物；種植",
    "en_sentence": "We plant flowers in the garden every spring.",
    "zh_sentence": "我們每年春天在花園裡種花。",
    "category": "自然環境"
  },
  {
    "word": "life",
    "zh": "生活；生命",
    "en_sentence": "Watching the city lights makes me appreciate life.",
    "zh_sentence": "看著城市的燈光讓我更珍惜生活。",
    "category": "抽象概念"
  },
  {
    "word": "light",
    "zh": "燈光；光線；輕的",
    "en_sentence": "Turn on the light so we can see the path.",
    "zh_sentence": "打開燈光，讓我們看清道路。",
    "category": "自然環境"
  },
  {
    "word": "tub",
    "zh": "缸；盆；桶",
    "en_sentence": "She filled the tub with soapy water to wash the dog.",
    "zh_sentence": "她把盆子裝滿肥皂水來幫狗洗澡。",
    "category": "家庭用品"
  },
  {
    "word": "mat",
    "zh": "踏墊；墊子",
    "en_sentence": "Wipe your feet on the mat before entering the house.",
    "zh_sentence": "進屋前請先在踏墊上擦腳。",
    "category": "家庭用品"
  },
  {
    "word": "candle",
    "zh": "蠟燭",
    "en_sentence": "They lit a candle at the head of the birthday cake.",
    "zh_sentence": "他們在生日蛋糕前插上一根蠟燭並點燃。",
    "category": "家庭用品"
  },
  {
    "word": "lamp",
    "zh": "檯燈",
    "en_sentence": "She turned on the lamp to read her book at night.",
    "zh_sentence": "她晚上打開檯燈看書。",
    "category": "家庭用品"
  },
  {
    "word": "fire",
    "zh": "火",
    "en_sentence": "The campers gathered around the fire to roast marshmallows.",
    "zh_sentence": "露營者聚集在火邊烤棉花糖。",
    "category": "自然環境"
  },
  {
    "word": "wind",
    "zh": "風",
    "en_sentence": "The wind blew her hair as she walked by the sea.",
    "zh_sentence": "當她在海邊散步時，風吹動了她的頭髮。",
    "category": "自然環境"
  },
  {
    "word": "sky",
    "zh": "天空",
    "en_sentence": "The sky turned pink and orange during sunset.",
    "zh_sentence": "夕陽時，天空變成粉紅色和橙色。",
    "category": "自然環境"
  },
  {
    "word": "rainbow",
    "zh": "彩虹",
    "en_sentence": "We saw a rainbow after the rain stopped.",
    "zh_sentence": "雨停後我們看到了一道彩虹。",
    "category": "自然環境"
  },
  {
    "word": "yet",
    "zh": "尚未；然而",
    "en_sentence": "I haven't finished my homework yet.",
    "zh_sentence": "我尚未完成我的作業。",
    "category": "抽象概念"
  },
  {
    "word": "wave",
    "zh": "波浪；海浪",
    "en_sentence": "The surfers rode the big wave at sunrise.",
    "zh_sentence": "衝浪者在日出時騎著大浪。",
    "category": "自然環境"
  },
  {
    "word": "rock",
    "zh": "石頭",
    "en_sentence": "He skipped a rock across the pond.",
    "zh_sentence": "他把一塊石頭在池塘上打水漂。",
    "category": "自然環境"
  },
  {
    "word": "nature",
    "zh": "大自然",
    "en_sentence": "We love exploring nature on our camping trips.",
    "zh_sentence": "我們喜歡在露營旅行中探索大自然。",
    "category": "自然環境"
  },
  {
    "word": "land",
    "zh": "陸地；登陸",
    "en_sentence": "The plane will land in five minutes.",
    "zh_sentence": "飛機將在五分鐘後降落。",
    "category": "自然環境"
  },
  {
    "word": "pond",
    "zh": "池塘",
    "en_sentence": "Ducks swim in the pond every morning.",
    "zh_sentence": "鴨子每天早上在池塘裡游泳。",
    "category": "自然環境"
  },
  {
    "word": "mud",
    "zh": "泥巴",
    "en_sentence": "His shoes were covered in mud after the soccer game.",
    "zh_sentence": "足球賽後，他的鞋子全是泥巴。",
    "category": "自然環境"
  },
  {
    "word": "mountain",
    "zh": "山",
    "en_sentence": "They hiked to the top of the mountain before dawn.",
    "zh_sentence": "他們在破曉前爬上了那座山的山頂。",
    "category": "自然環境"
  },
  {
    "word": "beach",
    "zh": "海灘",
    "en_sentence": "We built a sandcastle on the beach yesterday.",
    "zh_sentence": "我們昨天在海灘上堆了一座沙堡。",
    "category": "自然環境"
  },
  {
    "word": "river",
    "zh": "河流",
    "en_sentence": "The children played by the river on a sunny day.",
    "zh_sentence": "孩子們在一個陽光明媚的日子裡在河邊玩耍。",
    "category": "自然環境"
  }
];

// 字庫統計資訊
const VOCAB_CATEGORIES = {
  "動作動詞": 7,
  "身體健康": 6,
  "自然環境": 15,
  "家庭用品": 4,
  "抽象概念": 3,
  "數量分數": 2,
  "稱謂人際": 1,
  "場所位置": 1,
  "形容詞": 1
};

// 匯出字庫資料
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { APHRODITE_VOCAB_DATA, VOCAB_CATEGORIES };
} 