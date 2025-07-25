// cards.js

console.log('cards.js 載入測試');

// ===============================
// 1. 原始卡片資料（baseCards）
//    只包含：word, zh, image, rarity, category, description, effect
// ===============================
const baseCards = [

{
    "word": "Tanjiro Kamado",
    "zh": "竈門炭治郎",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/4a/48/dd/4a48dd7ab110251bd06c5c0e8616db27_720w.mp4",
    "video": "https://youtu.be/ICDw7LQMSvE?si=EGZuQJGp4JNi1Y8Z",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "description": "背負家族與妹妹命運的少年，以水之呼吸斬斷悲劇的枷鎖。",
     },
{
    "word": "Tokito Muichiro",
    "zh": "時透無一郎",
    "image": "https://i.pinimg.com/736x/74/36/c5/7436c5fc72cdac4d929751e68116685d.jpg",
    "video": "",
    "youtube": "",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "role": "霞柱",
    "description": "記憶如霧，劍光如夢，他在混沌中尋找存在的痕跡。"
  },
 {
    "word": "Uzui Tengen",
    "zh": "宇髄天元",
    "image": "https://i.pinimg.com/736x/55/7d/ce/557dce065d16d6cbdf26423b7d025224.jpg",
    "video": "",
    "youtube": "",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "role": "音柱",
    "description": "派手才是信仰，聲音與爆破編織成他的華麗殺戮。"
  },
{
    "word": "Kibutsuji Muzan",
    "zh": "鬼舞辻無慘",
    "image": "https://i.pinimg.com/736x/34/39/86/34398655f2c25e2d831f5f03e7a7c85c.jpg",
    "video": "",
    "youtube": "",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "role": "鬼王",
    "description": "他是夜的起點，百鬼的父，用恐懼與不死統治所有──他不容質疑，只准服從。"
  },
 {
    "word": "Kokushibo",
    "zh": "黑死牟",
    "image": "https://v1.pinimg.com/videos/mc/720p/0f/8a/b7/0f8ab74603de19a89ce87e177c053940.mp4",
    "video": "",
    "youtube": "",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "role": "上弦之一",
    "description": "六眼望穿生死，他是劍士之巔，也是墮落信仰的形體──斬不斷的，是他對強的執念。"
  },
 {
    "word": "Doma",
    "zh": "童磨",
    "image": "https://i.pinimg.com/736x/1c/59/2a/1c592aafe53a385e754df465adaca31e.jpg",
    "video": "",
    "youtube": "",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "role": "上弦之二",
    "description": "笑容甜膩如毒，他將信仰變成食糧──冰冷內心下，藏著比鬼更空虛的靈魂。"
  },
 {
    "word": "Akaza",
    "zh": "猗窩座",
    "image": "https://v1.pinimg.com/videos/mc/720p/65/42/76/654276371af6d0d95eaac53547bbfafc.mp4",
    "video": "",
    "youtube": "",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "role": "上弦之三",
    "description": "他恨弱者，不容悲傷，他是戰鬥的狂徒，也是被過去撕裂的男孩。"
  },
{
    "word": "Hantengu",
    "zh": "半天狗",
    "image": "https://v1.pinimg.com/videos/mc/720p/15/b1/e4/15b1e46d688f0545c513dfbe7ecaeea8.mp4",
    "video": "",
    "youtube": "",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "role": "上弦之四",
    "description": "懼怕如影隨形，分裂出千面自我，他以恐懼為名，卻從未面對真正的自己。"
  },
 {
    "word": "Gyokko",
    "zh": "玉壺",
    "image": "https://v1.pinimg.com/videos/mc/720p/b7/c8/98/b7c898cefadde7779173ec8e8f695f87.mp4",
    "video": "",
    "youtube": "",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "role": "上弦之五",
    "description": "他將人雕塑成詭異藝術，自詡不凡卻笑得瘋癲；美的定義，由他血寫。"
  },
{
    "word": "Kaigaku",
    "zh": "獪岳",
    "image": "https://i.pinimg.com/736x/a2/c8/d9/a2c8d991937bffc6192d1592ab49a4e4.jpg",
    "video": "",
    "youtube": "",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "role": "上弦之六",
    "description": "背叛雷的榮光，只為苟延殘喘的力量；他用嫉妒寫下敗者的執念。"
  },
{
    "word": "Gyutaro",
    "zh": "妓夫太郎",
    "image": "https://v1.pinimg.com/videos/mc/720p/ca/e5/84/cae58404a6853acf41ccc47432cbe90d.mp4",
    "video": "",
    "youtube": "",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "role": "上弦之六",
    "description": "骯髒與仇恨交織，他與妹共生在怨念中──醜陋只是命運的形狀。"
  },
 {
    "word": "Daki",
    "zh": "墮姬",
    "image": "https://i.pinimg.com/736x/47/e7/36/47e7368f0b772abac411afd5381a1cea.jpg",
    "video": "",
    "youtube": "",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "role": "上弦之六",
    "description": "美豔如花卻心藏荊棘，她斬不斷的，是與哥哥的血之連結。"
  },
{
    "word": "Rui",
    "zh": "累",
    "image": "https://i.pinimg.com/736x/fb/42/97/fb42976ccc7fa04e52917236f1b29196.jpg",
    "video": "",
    "youtube": "",
    "rarity": "普通",
    "category": "鬼滅之刃",
    "role": "下弦之五",
    "description": "渴望羈絆卻創造牢籠，他在蜘蛛絲間重編家庭──但從未真正被愛過。"
  },
{
    "word": "Enmu",
    "zh": "魘夢",
    "image": "https://i.pinimg.com/736x/9a/07/fa/9a07fadcab3568d24d9608a2e9dda6bb.jpg",
    "video": "",
    "youtube": "",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "role": "下弦之一",
    "description": "夢境是他獵殺的溫床，他用甜美的幻境掩蓋內心對痛苦的癮。"
  },
{
  "word": "Iguro Obanai",
  "zh": "伊黑小芭內",
  "image": "https://v1.pinimg.com/videos/mc/720p/8e/23/11/8e231188bb8621bfe16ecfb5367377dc.mp4",
  "video": "",
  "youtube": "",
  "rarity": "稀有",
  "category": "鬼滅之刃",
  "role": "蛇柱",
  "description": "他以沉默編織情感，雙瞳如蛇般審視一切，但心裡住著的，是為愛甘願赴死的溫柔。"
},
  {
    "word": "Nezuko Kamado",
    "zh": "竈門禰豆子",
    "image": "https://v1.pinimg.com/videos/mc/720p/ad/f0/26/adf0261f4d3736169c69a75a6086d942.mp4",
    "video": "https://youtu.be/gtgIlIXWEhI?si=zsc2qwQnuPuYxRQW",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "description": "沉睡中的力量蘊藏著爆血之術，她是人與鬼之間的橋樑。",
   },
   {
    "word": "Kanroji Mitsuri",
    "zh": "甘露寺蜜璃",
    "image": "https://v1.pinimg.com/videos/mc/720p/a2/4a/0d/a24a0d8489353bdf073a0ddf3b8d0191.mp4",
    "video": "",
    "youtube": "",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "role": "戀柱",
    "description": "劍可柔軟如愛情，也能斷金裂骨。她是力量與少女心的完美結晶。"
  },
  {
    "word": "Zenitsu Agatsuma",
    "zh": "我妻善逸",
    "image": "https://v1.pinimg.com/videos/mc/720p/99/70/72/9970720eef5bed34585a1923195065ee.mp4",
    "video": "https://youtu.be/Wb3JeBItZfw",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "description": "懦弱外表下隱藏雷之閃電，熟睡中才能展現真本事。",
  },
  {
    "word": "Inosuke Hashibira",
    "zh": "嘴平伊之助",
    "image": "https://v1.pinimg.com/videos/mc/720p/46/5b/d8/465bd8a56df1bc823c6e9713ce97b6af.mp4",
    "video": "https://youtu.be/R5Bgo1Vc7qk",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "description": "野性衝鋒，雙刀亂舞，是戰場上的野獸靈魂。",
  },
{
    "word": "Sanemi Shinazugawa",
    "zh": "不死川實彌",
    "image": "https://v1.pinimg.com/videos/mc/720p/2e/ca/b2/2ecab26bc423c8df375097384f17a746.mp4",
    "video": "",
    "youtube": "",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "role": "風柱",
    "description": "狂風中怒吼，他以傷痕書寫過去，用暴戾包裹著柔軟的兄弟情。"
  },
  {
    "word": "Giyu Tomioka",
    "zh": "冨岡義勇",
    "image": "https://v1.pinimg.com/videos/mc/720p/45/83/8f/45838f18ebc76c608be5a90605192a62.mp4",
    "video": "https://youtu.be/wvjFAHQG6E0?si=FGVBEpHqnG_hCB3Q",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "description": "寡言如水，穩重如山，以壓倒性氣場守護弱者。",
  },
  {
    "word": "Kyojuro Rengoku",
    "zh": "煉獄杏壽郎",
    "image": "https://v1.pinimg.com/videos/mc/720p/41/61/ca/4161cac55946a4eeb4031af03995e572.mp4",
    "video": "https://youtu.be/1Ayj9FKKfp0?si=H1rDAWBeHa5lFe4x",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "description": "炎柱之魂不熄，炙熱的劍道燃燒惡鬼與絕望。",
  },
  {
    "word": "Shinobu Kocho",
    "zh": "胡蝶忍",
    "image": "https://v1.pinimg.com/videos/mc/720p/13/85/d9/1385d991a1fa7a2850af0a5ea8d6beb8.mp4",
    "video": "https://youtu.be/X7OC4B5VXpU?si=zQVOIjw3pGA8wjnp",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "description": "毒與舞蹈交織成蝶，笑容背後藏著致命毒刃。",

  },
 {
    "word": "Yoichi Isagi",
    "zh": "潔 世一",
    "image": "https://v1.pinimg.com/videos/mc/720p/69/17/a9/6917a9911ac5be693316fc8111f9d5a6.mp4",
    "rarity": "普通",
    "category": "Blue Lock",
    "role": "主角",
    "description": "戰術視野如鷹眼，目標只為進球；他是青之牢籠裡最飢渴的射手。"
  },
  {
    "word": "Meguru Bachira",
    "zh": "蜂樂 廻",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/fb/5e/c2/fb5ec2ae1fc0717c28b6c623f877a986_t4.mp4",
    "rarity": "超稀有",
    "category": "Blue Lock",
    "role": "突破型前鋒",
    "description": "心中住著怪物，腳下藏著魔法；像風一樣突破你所有防線。"
  },
  {
    "word": "Rin Itoshi",
    "zh": "糸師 凛",
    "image": "https://v1.pinimg.com/videos/mc/720p/b8/0e/b7/b80eb7769d3b5a6e2c54de9fce51e679.mp4",
    "rarity": "超稀有",
    "category": "Blue Lock",
    "role": "戰術核心",
    "description": "冷冽如冰，精準如電腦，理性至上卻藏著熾熱的兄弟復仇之火。"
  },
  {
    "word": "Hyoma Chigiri",
    "zh": "千切 豹馬",
    "image": "https://v1.pinimg.com/videos/mc/720p/8a/8d/fd/8a8dfd771d76a342e43b2e9a19884015.mp4",
    "rarity": "稀有",
    "category": "Blue Lock",
    "role": "速度型前鋒",
    "description": "閃電雙腿，風中舞者；他用速度擊穿所有懷疑。"
  },
  {
    "word": "Rensuke Kunigami",
    "zh": "國神 錬介",
    "image": "https://i.pinimg.com/736x/32/11/ba/3211baa4c7441bfa48acecb4e086482a.jpg",
    "rarity": "普通",
    "category": "Blue Lock",
    "role": "力量型前鋒",
    "description": "熱血、正義感與鐵腿並存，他是夢想與肌肉的代名詞。"
  },
  {
    "word": "Reo Mikage",
    "zh": "御影 玲王",
    "image": "https://i.pinimg.com/736x/db/77/67/db77679106726965411e036544d522ca.jpg",
    "rarity": "普通",
    "category": "Blue Lock",
    "role": "萬能型選手",
    "description": "天才與財富的結晶，追求自由的完美主義者。"
  },
  {
    "word": "Seishiro Nagi",
    "zh": "凪 誠士郎",
    "image": "https://v1.pinimg.com/videos/mc/720p/1d/f4/30/1df4302f014d5de4921e6d30e9fe2ac4.mp4",
    "rarity": "超稀有",
    "category": "Blue Lock",
    "role": "天才球感",
    "description": "從遊戲中誕生的怪物，懶惰外表下潛藏致命的天賦。"
  },
  {
    "word": "Shoei Barou",
    "zh": "馬狼 照英",
    "image": "https://v1.pinimg.com/videos/iht/720p/53/15/2c/53152cf6d8f26ef0fb3f4e75e195055e.mp4",
    "rarity": "稀有",
    "category": "Blue Lock",
    "role": "自我帝王",
    "description": "支配場上的王者，只信奉自己的道路與榮耀。"
  },
  {
    "word": "Gin Gagamaru",
    "zh": "我牙丸 吟",
    "image": "https://i.pinimg.com/736x/db/07/3f/db073f0f4ed4dc10711e6b49b632f966.jpg",
    "rarity": "普通",
    "category": "Blue Lock",
    "role": "守門野獸",
    "description": "不可能的角度，都是他的主場；你無法預測他會撲向哪裡。"
  },
  {
    "word": "Zantetsu Tsurugi",
    "zh": "剣城 斬鉄",
    "image": "https://v1.pinimg.com/videos/mc/720p/9e/f0/c9/9ef0c908dbc0fb31e52f0fa41a04a92c.mp4",
    "rarity": "普通",
    "category": "Blue Lock",
    "role": "速度與反應",
    "description": "腦袋慢一拍，但速度快兩拍；速度成就他的存在感。"
  },
  {
    "word": "Jingo Raichi",
    "zh": "雷市 陣吾",
    "image": "https://i.pinimg.com/736x/be/a1/c5/bea1c5a3a44487594f70a8c472fc5e02.jpg",
    "rarity": "普通",
    "category": "Blue Lock",
    "role": "瘋狗型中場",
    "description": "情緒控場，吼聲震耳，精神攻擊的最佳代言人。"
  },
  {
    "word": "Okuhito Iemon",
    "zh": "伊右衛門 奥人",
    "image": "https://i.pinimg.com/736x/ca/e6/50/cae65029347396c47c194e94aada85c9.jpg",
    "rarity": "普通",
    "category": "Blue Lock",
    "role": "守門人",
    "description": "在看似平凡的外表下，默默守護球門如最後一道防線。"
  },
  {
    "word": "Shidou Ryusei",
    "zh": "士道 龍聖",
    "image": "https://v1.pinimg.com/videos/mc/720p/61/a1/b2/61a1b207e191f0632d8f94208705f8cd.mp4",
    "rarity": "超稀有",
    "category": "Blue Lock",
    "role": "狂人型射手",
    "description": "狂氣與天賦的結晶，連自己都無法預測的進攻怪獸。"
  },
  {
    "word": "Eita Otoya",
    "zh": "音呼 永太",
    "image": "https://v1.pinimg.com/videos/iht/720p/a2/d4/b0/a2d4b08928d4e9383ee4a967d0e6067d.mp4",
    "rarity": "普通",
    "category": "Blue Lock",
    "role": "潛行型翼鋒",
    "description": "總在你忽視的角落出現，悄無聲息地完成致命一擊。"
  },
  {
    "word": "Aoshi Tokimitsu",
    "zh": "時光 青志",
    "image": "https://v1.pinimg.com/videos/mc/720p/ab/75/f4/ab75f4754fbf86187e7d3306a8f7be7b.mp4",
    "rarity": "普通",
    "category": "Blue Lock",
    "role": "焦慮型怪力男",
    "description": "一邊害怕被淘汰，一邊展現驚人爆發；玻璃心包著核彈肌。"
  },
  {
    "word": "Hiori Yo",
    "zh": "凜花 世",
    "image": "https://v1.pinimg.com/videos/mc/720p/5d/64/a9/5d64a998a0a78a996a4e84fac3918f88.mp4",
    "rarity": "稀有",
    "category": "Blue Lock",
    "role": "靜謐操控者",
    "description": "如水般冷靜的傳球藝術家，讓整場比賽為他轉動。"
  },
  {
    "word": "Tabito Karasu",
    "zh": "烏 旅人",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/6f/3e/cd/6f3ecdf4604c19c4b483044f5bc2c8aa_720w.mp4",
    "rarity": "稀有",
    "category": "Blue Lock",
    "role": "操盤手",
    "description": "毒舌與機關算盡，是球場上的軍師型毒舌男。"
  },
  {
    "word": "Anri Teieri",
    "zh": "帝襟 杏里",
    "image": "https://v1.pinimg.com/videos/iht/720p/27/ec/d9/27ecd9962fea7808c21389ddd2677aac.mp4",
    "rarity": "普通",
    "category": "Blue Lock",
    "role": "企劃人員",
    "description": "唯一的正常人，努力讓這場瘋狂計畫順利執行。"
  },
  {
    "word": "Jinpachi Ego",
    "zh": "絵心 甚八",
    "image": "https://v1.pinimg.com/videos/mc/720p/0f/57/9b/0f579ba62359dbd7eae1e6f703fcdbf9.mp4",
    "rarity": "稀有",
    "category": "Blue Lock",
    "role": "教練",
    "description": "自我理論至上，創造最自私的足球場，他是操縱者與賭徒。"
  },
{
    "word": "Pikachu",
    "zh": "皮卡丘",
    "image": "https://v1.pinimg.com/videos/mc/720p/47/49/d2/4749d201d95280c1af14b35fb1efb467.mp4",
    "video": "https://youtu.be/FUNo4aB8xFE?si=napJxJUCkmW6OObI",
    "rarity": "超稀有",
    "category": "寶可夢",
    "description": "電力十足的夥伴，黃毛閃電，戰場上的小雷神。",
  },
  {
    "word": "Charizard",
    "zh": "噴火龍",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/33/7b/8d/337b8d5a608afe3cf0f4a3520c2853bd_720w.mp4",
    "video": "https://youtu.be/QoFdXuHn3_M?si=g-yMZ1_L40vcjol1",
    "rarity": "超稀有",
    "category": "寶可夢",
    "description": "烈焰高飛，氣場壓倒性的火系終極戰士。",
  },
  {
    "word": "Bulbasaur",
    "zh": "妙蛙種子",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/68/1d/a8/681da8f23f2c584bc1ef8531b912aead_720w.mp4",
    "video": "https://youtu.be/LnqAHTWXORw?si=EKm465UsyVYqpFBh",
    "rarity": "超稀有",
    "category": "寶可夢",
    "description": "植物系新手好選擇，吸收陽光蓄勢待發。",
  },
  {
    "word": "Squirtle",
    "zh": "傑尼龜",
    "image": "https://i.pinimg.com/736x/0c/d1/7c/0cd17ca2898df1977cfaafa51776b84e.jpg",
    "video": "hhttps://youtu.be/xFHCunY4Gwo?si=SiF649huYInm0DC0",
    "rarity": "普通",
    "category": "寶可夢",
    "description": "小小龜殼防禦力驚人，水槍攻擊清涼又致命。",
  },
  {
    "word": "Jigglypuff",
    "zh": "胖丁",
    "image": "https://i.pinimg.com/736x/ca/ee/bc/caeebcac9a3780a68927b0d34677a9b1.jpg",
    "video": "https://youtu.be/--lrn-klYzY?si=qv_Wt0BcJBiXSoyS",
    "rarity": "普通",
    "category": "寶可夢",
    "description": "可愛外表包藏迷人歌聲，一曲入魂讓人沉睡。",
  },
  {
    "word": "Gengar",
    "zh": "耿鬼",
    "image": "https://img.3dmgame.com/uploads/images/news/20240920/1726810390_549833.gif",
    "video": "https://youtu.be/KTaWqOpfEBM?si=E2iAHKAnhh03RlCp",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "陰影裡的狡詐笑聲，詭譎中帶著致命一擊。",

  },
  {
    "word": "Snorlax",
    "zh": "卡比獸",
    "image": "https://img.freepik.com/fotos-premium/angelic-snorlax-obra-maestra-hiperrealista-estilo-anime-ultra-alta-definicion-8k-resoluti_983420-156742.jpg",
    "video": "https://youtu.be/weK5iY-u5vo?si=TCP5njVNueYpjPkR",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "沉睡的巨獸，當牠睜開眼，對手也快要閉上眼。",

  },
  {
    "word": "Eevee",
    "zh": "伊布",
    "image": "https://i.pinimg.com/736x/f8/7a/cb/f87acb86cf92d51847c1b9873a52ec4a.jpg",
    "video": "https://youtu.be/SuV3bEYQWeg?si=nFvkdC50RgJDk08M",
    "rarity": "普通",
    "category": "寶可夢",
    "description": "進化可能無限，未來由你選擇。",

  },
  {
    "word": "Lucario",
    "zh": "路卡利歐",
    "image": "https://i.pinimg.com/736x/b8/38/71/b83871d583a2e5d1fa23d8f3f616eafb.jpg",
    "video": "https://youtu.be/69D0sa09LLU?si=ZBpEIikMzyt95RBA",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "波導之力聚於一身，拳拳到肉又充滿智慧。",

  },
  {
    "word": "Gardevoir",
    "zh": "沙奈朵",
    "image": "https://i.pinimg.com/736x/f6/37/ca/f637ca45044eee7db89cc9da47037840.jpg",
    "video": "https://youtu.be/rUR4K9MeEZk?si=6Wbe_ctgTeV_hwvG",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "守護之心，使用念力守護與攻擊並重。",

  },

   {
    "word": "Yuji Itadori",
    "zh": "虎杖悠仁",
    "image": "https://v1.pinimg.com/videos/mc/720p/16/2c/a9/162ca90b67219a8cb1a01c28c112bc42.mp4",
    "video": "https://youtu.be/vvtIX9fPwsk?si=u-FRDBLEWgCqrqMK",
    "rarity": "稀有",
    "category": "咒術迴戰",
    "description": "吞下兩面宿儺的手指後仍堅守人性，拳頭傳遞正義與信念。",

  },
  {
    "word": "Megumi Fushiguro",
    "zh": "伏黑惠",
    "image": "https://i.pinimg.com/736x/40/a3/20/40a32004d84d0e88369d676c7fc9c357.jpg",
    "video": "https://youtu.be/3qd-IjE_7Vs?si=lMAgArF5RHwo2_pW",
    "rarity": "稀有",
    "category": "咒術迴戰",
    "description": "沉穩的影法術師，能召喚式神制敵，深藏強大潛力。",

  },
  {
    "word": "Nobara Kugisaki",
    "zh": "釘崎野薔薇",
    "image": "https://v1.pinimg.com/videos/mc/720p/49/93/42/499342c956e0dda350c43ff12af47058.mp4",
    "video": "https://youtu.be/41etewJwITI?si=YVP3US49BPM7dhTa",
    "rarity": "普通",
    "category": "咒術迴戰",
    "description": "戰鬥美學的化身，咒釘與鎚子敲出痛快一擊。",

  },
  {
    "word": "Satoru Gojo",
    "zh": "五條悟",
    "image": "https://v1.pinimg.com/videos/mc/720p/e9/d9/62/e9d96263e5be2172d124edb4d1981cb1.mp4",
    "video": "https://youtu.be/OBrDE0WyAP4?si=5LfpdnHq5Tf-HFL-",
    "rarity": "超稀有",
    "category": "咒術迴戰",
    "description": "六眼無敵，無下限咒術讓他成為最強咒術師。",

  },
  {
    "word": "Sukuna",
    "zh": "兩面宿儺",
    "image": "https://v1.pinimg.com/videos/mc/720p/56/c9/d0/56c9d091fc4397ca5d4007c18ce336de.mp4",
    "video": "https://youtu.be/rYXih2N84QE?si=gzlLoSfZtlGIlBye",
    "rarity": "超稀有",
    "category": "咒術迴戰",
    "description": "千年前的詛咒王，恐怖與力量的象徵。",

  },
  {
    "word": "Kento Nanami",
    "zh": "七海建人",
    "image": "https://v1.pinimg.com/videos/mc/720p/37/0f/a3/370fa3eaa02af1877309f280a502a4fa.mp4",
    "video": "https://youtu.be/TDdOPn7X7WI?si=j3ZNlH8-PHDjufKG",
    "rarity": "稀有",
    "category": "咒術迴戰",
    "description": "穩重冷靜，七三術式是他對戰鬥效率的極致詮釋。",

  },
  {
    "word": "Toge Inumaki",
    "zh": "狗卷棘",
    "image": "https://v1.pinimg.com/videos/mc/720p/18/cf/9a/18cf9aa1f0e7266ef769607b05c43c70.mp4",
    "video": "https://youtu.be/q9OjDw_KXoc?si=RmNEio_izKMLbQ-m",
    "rarity": "普通",
    "category": "咒術迴戰",
    "description": "語言就是武器，他的咒言操控強大且危險。",

  },
  {
    "word": "Maki Zenin",
    "zh": "禪院真希",
    "image": "https://i.pinimg.com/736x/c6/71/a6/c671a632a8d1dfaf1401bbdf1e0664c3.jpg",
    "video": "https://youtu.be/zv5lApSubRw?si=AcEsKzqS8WqFpNLR",
    "rarity": "普通",
    "category": "咒術迴戰",
    "description": "身無咒力卻擁有超凡肉體，武器戰鬥專家。",

  },
 {
    "word": "Mahito",
    "zh": "真人",
    "image": "https://v1.pinimg.com/videos/mc/720p/5e/cf/32/5ecf32adbc79b09ad91b0cd58f93f128.mp4",
    "video": "",
    "youtube": "",
    "rarity": "超稀有",
    "category": "咒術迴戰",
    "role": "咒靈",
    "description": "天真面容下藏著惡意的深淵，他是人性扭曲後的產物與映照。"
  },
{
    "word": "Toji Fushiguro",
    "zh": "伏黑甚爾",
    "image": "https://i.pinimg.com/736x/a4/0f/66/a40f665687ccf84e4d7fe5667fd6a37e.jpg",
    "video": "",
    "youtube": "",
    "rarity": "超稀有",
    "category": "咒術迴戰",
    "role": "暗殺者",
    "description": "無咒力者的極致反擊，他用肉身證明──神明也能倒下。"
  },

  {
    "word": "Panda",
    "zh": "熊貓",
    "image": "https://v1.pinimg.com/videos/mc/720p/e5/e4/32/e5e432de46870b80e787fd22933421d2.mp4",
    "video": "https://youtu.be/FmxmQEaHxyE?si=rU2M7yZtBC1I4fVs",
    "rarity": "普通",
    "category": "咒術迴戰",
    "description": "咒骸中的異類，擁有多種核心的戰鬥巨熊。",

  },
  {
    "word": "Yuta Okkotsu",
    "zh": "乙骨憂太",
    "image": "https://v1.pinimg.com/videos/mc/720p/b2/e5/8e/b2e58e7244b8dec266e035bb333b724b.mp4",
    "video": "https://youtu.be/TBVqMhl_vdM?si=b95e0ULbuEOit61s",
    "rarity": "超稀有",
    "category": "咒術迴戰",
    "description": "擁有特級咒靈理香加持，潛力無限的天才。",

  },
{
    "word": "Gon Freecss",
    "zh": "小傑",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/60/0f/6a/600f6a6e9ede11fb1ab7babcc4869227_720w.mp4",
    "video": "https://youtu.be/fZCOwFtlbIA?si=g9TY5M-6MUNO_aVC",
    "rarity": "超稀有",
    "category": "獵人",
    "description": "純真與力量並存，為友情與正義不惜一切。",

  },
  {
    "word": "Killua Zoldyck",
    "zh": "奇犽",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/7e/bf/bb/7ebfbbb1ced7f42f3dd845486618adfd_720w.mp4",
    "video": "https://youtu.be/m_V7rNR04yg?si=gLKBWhDsClLZBpX5",
    "rarity": "超稀有",
    "category": "獵人",
    "description": "暗殺家族出身，電光閃現間決勝負。",

  },
  {
    "word": "Kurapika",
    "zh": "酷拉皮卡",
    "image": "https://v1.pinimg.com/videos/iht/720p/75/eb/0f/75eb0f7df849a3e1c40e1c43541eafe3.mp4",
    "video": "https://youtu.be/t9JjGBHOq9Q?si=4VokVXPLDMQM_qjC",
    "rarity": "超稀有",
    "category": "獵人",
    "description": "鎖鍊鎖住仇恨，燃燒著緋紅雙眼的復仇者。",

  },
  {
    "word": "Leorio Paradinight",
    "zh": "雷歐力",
    "image": "https://i.pinimg.com/736x/a3/3e/d1/a33ed1585696a581e47f2fd383c28e6a.jpg",
    "video": "https://youtu.be/dkVlX4oXBuA?si=sIK6hBzt4w8quXuq",
    "rarity": "普通",
    "category": "獵人",
    "description": "粗中有細的熱血醫生，拳頭與情義並行。",

  },
  {
    "word": "Hisoka",
    "zh": "西索",
    "image": "https://v1.pinimg.com/videos/mc/720p/e2/dd/02/e2dd028e1a57a6579da716111e958cab.mp4",
    "video": "https://youtu.be/iDyon3z1KP8?si=rg8VvtmMvJub51_6",
    "rarity": "超稀有",
    "category": "獵人",
    "description": "變化系殺戮魔術師，詭譎莫測、危險又迷人。",

  },
  {
    "word": "Isaac Netero",
    "zh": "尼特羅",
    "image": "https://i.pinimg.com/736x/17/d3/5a/17d35a6eb68f409a036c5ce01b698dfd.jpg",
    "video": "https://youtu.be/wk961M-EoRk?si=n_1pdGAj-aDyjVnC",
    "rarity": "稀有",
    "category": "獵人",
    "description": "最強獵人之一，百式觀音如神降臨。",

  },
  {
    "word": "Meruem",
    "zh": "梅路艾姆",
    "image": "https://v1.pinimg.com/videos/mc/720p/c9/15/6c/c9156cccc9b0f2d1c77c1aca38b6cb93.mp4",
    "video": "https://youtu.be/9jiqcnwrsuk?si=GdR7ER1pRSKKE52O",
    "rarity": "稀有",
    "category": "獵人",
    "description": "蟻王之尊，智慧與力量的巔峰存在。",

  },
  {
    "word": "Neferpitou",
    "zh": "貓女比特",
    "image": "https://v1.pinimg.com/videos/mc/720p/f7/a0/3e/f7a03e89cc1a286484cdb48ab78eeb12.mp4",
    "video": "https://youtu.be/EFOjQ4bBbKQ?si=6DS2voxcUzRwf7Z4",
    "rarity": "稀有",
    "category": "獵人",
    "description": "蟻王近衛軍之一，醫術與戰力兼備的恐怖存在。",

  },
  {
    "word": "Shaiapouf",
    "zh": "夏伊亞普夫",
    "image": "https://v1.pinimg.com/videos/mc/720p/23/20/fc/2320fc318cc7f0960291af38c57e58d4.mp4",
    "video": "https://youtu.be/EXAMPLE_POUF",
    "rarity": "普通",
    "category": "獵人",
    "description": "優雅陰狠，擅長操弄與操縱人心的近衛軍。",

  },
  {
    "word": "Knuckle Bine",
    "zh": "納克爾",
    "image": "https://i.pinimg.com/736x/4f/8c/bf/4f8cbfaf27543e6acdebbf907a46a844.jpg",
    "video": "https://youtu.be/EXAMPLE_KNUCKLE",
    "rarity": "普通",
    "category": "獵人",
    "description": "重情義的拳鬥念使，以念獸收債為戰術核心。",

  },
  {
    "word": "Biscuit Krueger",
    "zh": "比司吉",
    "image": "https://i.pinimg.com/736x/ed/03/12/ed03120a6571e51856b9e2b4aef70e0a.jpg",
    "rarity": "稀有",
    "category": "獵人",
    "description": "外表是小女孩，實際是肌肉爆棚的資深高手。",

  },
  
  {
    "word": "Red Blood Cell",
    "zh": "紅血球",
    "image": "https://i.pinimg.com/736x/f0/d3/57/f0d357cf7903ac9382de52ef23102907.jpg",
    "video": "https://youtu.be/Onm6pGz2_bg?si=gX5LEfFgMpt2zQkl",
    "rarity": "普通",
    "category": "工作細胞",
    "description": "迷路但熱心的氧氣快遞員，奔波於身體各地。",

  },
  {
    "word": "White Blood Cell",
    "zh": "白血球",
    "image": "https://i.pinimg.com/736x/67/d5/86/67d586ff2dba0887281d9d713d33ccd9.jpg",
    "video": "https://youtu.be/-mxIf7hQ5aA?si=Qr9qmfE8BO1RnEm1",
    "rarity": "普通",
    "category": "工作細胞",
    "description": "冷酷外表下有著溫柔靈魂，專責清除入侵病原。",

  },
  {
    "word": "Platelet",
    "zh": "血小板",
    "image": "https://i.pinimg.com/736x/1c/35/14/1c3514d80ae577782f12077f86faf042.jpg",
    "video": "https://youtu.be/-mxIf7hQ5aA?si=u6WT8HUiiMBRuFg3",
    "rarity": "超稀有",
    "category": "工作細胞",
    "description": "超人氣的可愛修補小隊長，總能鼓舞全隊。",

  },
  {
    "word": "Killer T Cell",
    "zh": "殺手T細胞",
    "image": "https://i.pinimg.com/736x/ae/1b/55/ae1b55cd301a641f8cd6636599207101.jpg",
    "video": "https://youtu.be/Hb2foEvXfMI?si=j7FFTey52kX4AP4l",
    "rarity": "稀有",
    "category": "工作細胞",
    "description": "暴走熱血的戰士，專門殲滅被感染的細胞。",

  },
  {
    "word": "Macrophage",
    "zh": "巨噬細胞",
    "image": "https://i.pinimg.com/736x/30/fa/77/30fa779113bd7ef27eae976538549ed9.jpg",
    "rarity": "超稀有",
    "category": "工作細胞",
    "description": "穿著洋裝優雅地用菜刀解決入侵者。",

  },
  {
    "word": "Memory Cell",
    "zh": "記憶細胞",
    "image": "https://i.pinimg.com/736x/26/37/5d/26375d671c81259426adcc78d7d27538.jpg",
    "video": "https://youtu.be/EXAMPLE_MEMORY",
    "rarity": "稀有",
    "category": "工作細胞",
    "description": "總覺得預知了一切，實際偶爾準確。",

  },
  {
    "word": "Helper T Cell",
    "zh": "輔助性T細胞",
    "image": "https://i.pinimg.com/originals/fc/86/e3/fc86e30ff493e4a57b681be2e2958f9d.gif",
    "video": "https://youtu.be/EXAMPLE_HELPERT",
    "rarity": "稀有",
    "category": "工作細胞",
    "description": "指揮官型角色，負責協調免疫行動。",

  },
  {
    "word": "Regulatory T Cell",
    "zh": "調節性T細胞",
    "image": "https://i.pinimg.com/736x/04/f1/a1/04f1a11f6e6d96b02397dcf27eae9112.jpg",
    "video": "https://youtu.be/EXAMPLE_REGULATORY",
    "rarity": "普通",
    "category": "工作細胞",
    "description": "冷靜沉著，調節免疫過強的反應。",

  },
  {
    "word": "Dendritic Cell",
    "zh": "樹突細胞",
    "image": "https://i.pinimg.com/736x/67/c7/c3/67c7c35887f673f4d6f10c679f06f888.jpg",
    "video": "https://youtu.be/Hb2foEvXfMI?si=aJVgBPQxSBuwfCEm",
    "rarity": "普通",
    "category": "工作細胞",
    "description": "負責情報分析與傳遞，偶爾放投影片。",
    "effect": {
      "type": "data_analysis",
      "value": 40,
      "description": "揭示敵方弱點，使全隊命中率提升"
    }
  },
  {
    "word": "B Cell",
    "zh": "B細胞",
    "image": "https://i.pinimg.com/736x/ba/f3/44/baf3444793d912d80583650d1be2ec1d.jpg",
    "video": "https://youtu.be/EXAMPLE_BCELL",
    "rarity": "普通",
    "category": "工作細胞",
    "description": "嘴上不饒人但抗體製作第一名。",
    },
  {
    "word": "NK Cell",
    "zh": "自然殺手細胞",
    "image": "https://i.pinimg.com/736x/3b/15/23/3b1523110265fb5f1d6c373c803ed63a.jpg",
    "video": "https://youtu.be/EXAMPLE_NKCELL",
    "rarity": "稀有",
    "category": "工作細胞",
    "description": "單兵戰力最強，沉默寡言卻一擊致命。",

  },
  {
    "word": "Butt Detective",
    "zh": "屁屁偵探",
    "image": "https://img.myvideo.net.tw/images/TOE020/0000/0002/202208301649239017_280x400.jpg",
    "video": "https://youtu.be/owzMeiYR4jA?si=svunethtF5LSEQ0i",
    "rarity": "超稀有",
    "category": "偵探系列",
    "description": "總是一本正經地放屁破案，氣場與氣味同時攻擊敵人。",

  },
  {
    "word": "Brown",
    "zh": "布朗",
    "image": "https://tse3.mm.bing.net/th/id/OIP.t4Nf8RwnrddC5FE-aa1hkAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/EXAMPLE_BROWN",
    "rarity": "普通",
    "category": "偵探系列",
    "description": "屁屁偵探的忠心助手，總是在最關鍵時刻提供協助。",
  },
  {
    "word": "Inspector",
    "zh": "警官",
    "image": "https://img.shoplineapp.com/media/image_clips/60f2b518cb57630014918263/original.jpeg?1626518808",
    "video": "https://youtu.be/EXAMPLE_INSPECTOR",
    "rarity": "稀有",
    "category": "偵探系列",
    "description": "與屁屁偵探並肩合作的警察，擅長擺陣圍捕犯人。",
  },
  {
    "word": "sherlock",
    "zh": "夏洛克·福爾摩斯",
    "image": "https://i.pinimg.com/736x/cc/ea/ce/cceacef11a440ef02a3712459c347fe7.jpg",
    "rarity": "超稀有",
    "category": "偵探系列",
    "description": "觀察力爆表、推理狂魔，一根菸斗裡能推敲出整條街的秘密。"
  },
  {
    "word": "hercule poirot",
    "zh": "赫丘勒·白羅",
    "image": "https://i.pinimg.com/736x/e6/0a/83/e60a839cd376fc3b7e94b6a9d5ad407f.jpg",
    "rarity": "超稀有",
    "category": "偵探系列",
    "description": "鬍子捲捲、邏輯滿點，每一宗謀殺案在他眼裡都是數學題。"
  },
  {
    "word": "nancy drew",
    "zh": "南茜·朱兒",
    "image": "https://i.pinimg.com/736x/09/0e/ca/090eca512d77fd25d628f87c9accd773.jpg",
    "rarity": "稀有",
    "category": "偵探系列",
    "description": "高中生界的辦案王，學業與解謎都能S級滿分。"
  },
  {
    "word": "detective conan",
    "zh": "名偵探柯南",
    "image": "https://i.pinimg.com/736x/31/74/ca/3174ca92c85c6cac31d44b03bd21f631.jpg",
    "rarity": "超稀有",
    "category": "偵探系列",
    "description": "雖然身高不及桌角，卻能用眼鏡炸出整條黑衣組織的真相。",
  },
  {
    "word": "Cancer Cell",
    "zh": "癌細胞",
    "image": "https://i.pinimg.com/736x/9c/ba/7a/9cba7ada54c19bd29e002a34d693fce6.jpg",
    "rarity": "超稀有",
    "category": "工作細胞",
    "description": "痛苦與復仇心所化身的變異細胞。",
  },
     {
    "word": "Chrollo Lucilfer",
    "zh": "庫洛洛",
    "image": "https://i.pinimg.com/736x/fb/36/d8/fb36d8d1648a91638c115c256febcfbf.jpg",
    "video": "https://youtu.be/EXAMPLE_CHROLLO",
    "rarity": "稀有",
    "category": "獵人",
    "description": "幻影旅團團長，操控被奪取的能力反制敵人。",

  },
{
    "word": "Toy Story",
    "zh": "玩具總動員",
    "image": "https://i.pinimg.com/originals/2d/bf/78/2dbf7821a9e5b9012b7830716b8b5710.jpg",
    "video": "https://youtu.be/TZeG23jEfHM?si=cpxgw7MncmhZTGKQ",
    "rarity": "超稀有",
    "category": "皮克斯宇宙",
    "description": "玩具們在房間裡有自己的大冒險世界，每一次移動都是奇蹟。",
  },
  {
    "word": "Coco",
    "zh": "可可夜總會",
    "image": "https://v1.pinimg.com/videos/mc/720p/89/9f/4d/899f4d048ad6a0d3640de8bbe01913a2.mp4",
    "video": "https://youtu.be/hAYUQ1ltJj0?si=6GqSPp_qu4kCOt2H",
    "rarity": "超稀有",
    "category": "皮克斯宇宙",
    "description": "穿越亡靈之地，用音樂尋找家族的記憶與真相。",
  },
  {
    "word": "Inside Out",
    "zh": "腦筋急轉彎",
    "image": "https://v1.pinimg.com/videos/mc/720p/df/50/83/df5083079d1c86388fdcc416c4ff449e.mp4",
    "video": "https://youtu.be/EXAMPLE_INSIDEOUT",
    "rarity": "稀有",
    "category": "皮克斯宇宙",
    "description": "五種情緒住在你的腦袋裡，每個決定都改變整個人生。",
  },
  {
    "word": "Up",
    "zh": "天外奇蹟",
    "image": "https://i.pinimg.com/736x/1f/fb/50/1ffb504aa538fb231267217e649d2c13.jpg",
    "video": "https://youtu.be/EXAMPLE_UP",
    "rarity": "稀有",
    "category": "皮克斯宇宙",
    "description": "老爺爺用氣球飛屋開啟人生最勇敢的冒險旅程。",
  },
  {
    "word": "Ratatouille",
    "zh": "料理鼠王",
    "image": "https://v1.pinimg.com/videos/mc/720p/9e/ec/17/9eec17efe03e28198435cdfe582cd70f.mp4",
    "video": "https://youtu.be/EXAMPLE_RAT",
    "rarity": "普通",
    "category": "皮克斯宇宙",
    "description": "一隻老鼠在巴黎當上廚神，料理與夢想齊飛。",
  },
{
    "word": "Jaguar",
    "zh": "美洲豹",
    "image": "https://v1.pinimg.com/videos/mc/720p/e6/9a/ba/e69abaded1624315ae5c3594bf31b1db.mp4",
    "video": "https://youtu.be/EXAMPLE_JAGUAR",
    "rarity": "稀有",
    "category": "亞馬遜雨林",
    "description": "亞馬遜的終極獵手，潛伏黑影之中，以一擊致命。",
  },
  {
    "word": "Capybara",
    "zh": "水豚",
    "image": "https://v1.pinimg.com/videos/mc/720p/9d/fd/c9/9dfdc9ca41869c8ec7911d7ed8780cad.mp4",
    "video": "https://youtu.be/EXAMPLE_CAPYBARA",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "最 chill 的森林鄰居，友善穩重，是團隊的穩定核心。",
  },
   {
    "word": "Tamandua",
    "zh": "小食蟻獸",
    "image": "https://v1.pinimg.com/videos/mc/720p/f2/50/95/f2509582e9bbab176b3dc84e4cacfdc9.mp4",
    "video": "https://youtu.be/EXAMPLE_TAMANDUA",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "迷你版食蟻獸，靈巧可愛，是昆蟲大軍的剋星。",
  },
  {
    "word": "Howler Monkey",
    "zh": "吼猴",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/13/58/65/1358653ad1beee3d44758301f08fbbc1_720w.mp4",
    "video": "https://youtu.be/EXAMPLE_HOWLER",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "森林中最響亮的聲音，能在數公里外回響，是領地與警告的象徵。",
  },
  {
    "word": "Red Uakari",
    "zh": "紅臉僧面猴",
    "image": "https://i.pinimg.com/736x/5f/59/26/5f59267426379aa652d197cc1dc3029f.jpg",
    "video": "https://youtu.be/EXAMPLE_UAKARI",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "以鮮紅面孔著稱，為健康與警覺的象徵，擅長跳躍與團隊行動。",
  },
  {
    "word": "Caiman",
    "zh": "凱門鱷",
    "image": "https://v1.pinimg.com/videos/mc/720p/a8/e1/b2/a8e1b28f8aa3a1d80b34209165fa1291.mp4",
    "video": "https://youtu.be/EXAMPLE_CAIMAN",
    "rarity": "稀有",
    "category": "亞馬遜雨林",
    "description": "亞馬遜河域潛伏獵手，雖非陸地主角，卻常突襲岸邊生物。",
  },
  {
    "word": "Macaw",
    "zh": "金剛鸚鵡",
    "image": "https://v1.pinimg.com/videos/mc/720p/ec/15/a3/ec15a3fee5376821f1a9f84b9c2421df.mp4",
    "video": "https://youtu.be/EXAMPLE_MACAW",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "色彩鮮明的語言高手，飛行速度快且具有高社交性。",
  },
  {
    "word": "Amazon Poison Frog",
    "zh": "亞馬遜毒蛙",
    "image": "https://v1.pinimg.com/videos/mc/720p/fa/44/30/fa443027ed28c4fd71fd7b4720928ae7.mp4",
    "video": "https://youtu.be/EXAMPLE_FROG",
    "rarity": "稀有",
    "category": "亞馬遜雨林",
    "description": "體型小巧卻蘊藏劇毒，顏色鮮豔警示天敵，生存與美學並存。",
  },
  {
    "word": "Harpy Eagle",
    "zh": "角雕",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/b5/20/32/b5203298ecd3af6dffee02343004e181_720w.mp4",
    "video": "https://youtu.be/EXAMPLE_HARPY",
    "rarity": "稀有",
    "category": "亞馬遜雨林",
    "description": "亞馬遜最強猛禽之一，翱翔密林之上，一擊獵殺。",

  },
  {
    "word": "Sloth",
    "zh": "樹懶",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/ca/17/20/ca17202606d596cc958904b6272341f0_540w.mp4",
    "video": "https://youtu.be/EXAMPLE_SLOTH",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "動作最慢的哺乳動物，用慢與靜的智慧化解危機。",
   
  },
  {
    "word": "Leafcutter Ant",
    "zh": "切葉蟻",
    "image": "https://i.pinimg.com/736x/75/3f/da/753fda8fc197cbafedbd7c063ba827b3.jpg",
    "video": "https://youtu.be/EXAMPLE_LEAFCUT",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "勤奮的地下建築師，以菌菇農業維生，是雨林中的隱形力量。",
     },
 {
    "word": "Narwhal",
    "zh": "獨角鯨",
    "image": "https://i.pinimg.com/736x/77/60/46/776046a2dcf0e04792db25ea26d59427.jpg",
    "video": "https://youtu.be/KmpwU0o3HeI",
    "rarity": "稀有",
    "category": "冰原動物",
    "description": "冰海中的獨角夢獸，長角如同傳說之鑰，開啟極地最深的祕密。"
  },
{
    "word": "Polar Bear",
    "zh": "北極熊",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/e4/a5/7b/e4a57bd0c5b42132e96248180f564854_720w.mp4",
    "video": "https://youtu.be/EXAMPLE_POLARBEAR",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "冰原之王，厚重皮毛與鋒利利爪使牠成為極地霸主。",
     },
{
    "word": "Caribou",
    "zh": "馴鹿",
    "image": "https://v1.pinimg.com/videos/mc/720p/c4/1a/38/c41a386897574bfce1e0c0b010bc4e5c.mp4",
    "video": "https://youtu.be/6Yv_ZN4DEiM",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "蹄聲輕拍雪地節奏，牠是遠行者，也是節日故事中的暖光。"
  },
  {
    "word": "Snowy Owl",
    "zh": "雪鴞",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/70/ce/16/70ce162a49f1cdfac2f1ad6a10d70508_720w.mp4",
    "video": "https://youtu.be/EXAMPLE_SNOWYOWL",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "白羽無聲飛翔，夜間狩獵者，擁有極佳的視覺與聽覺。",
     },
  {
    "word": "Fennec Fox",
    "zh": "耳廓狐",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/17/32/c5/1732c57059073004b693886d6ea2cc7b_540w.mp4",
    "video": "https://youtu.be/EXAMPLE_FENNECFOX",
    "rarity": "稀有",
    "category": "炎熱生物",
    "description": "超大耳朵是沙漠生存利器，能散熱與偵測遠方聲音。",
    },
{
    id: 10001,
    word: "Dromedary Camel",
    zh: "單峰駱駝",
    rarity: "普通",
    category: "炎熱生物",
    image: "https://v1.pinimg.com/videos/mc/720p/35/3d/65/353d657c86cc0a3171241afedbef185f.mp4",
    description: "最常見於非洲與中東沙漠，能長時間忍受乾渴。"
  },
  {
    id: 10004,
    word: "Desert Tortoise",
    zh: "沙漠陸龜",
    rarity: "普通",
    category: "炎熱生物",
    image: "https://i.pinimg.com/736x/39/62/de/3962deb5ff76fe8cc264efb3423c36b7.jpg",
    description: "能耐高溫與乾旱，壽命極長的沙漠爬蟲。"
  },
  {
    id: 10005,
    word: "Saharan Silver Ant",
    zh: "撒哈拉銀蟻",
    rarity: "超稀有",
    category: "炎熱生物",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Cataglyphis_bombycina_casent0173420_profile_1.jpg/640px-Cataglyphis_bombycina_casent0173420_profile_1.jpg",
    role: "沙漠求生專家",
    description: "能在攝氏 60 度高溫地表奔跑數分鐘，體表銀毛反射熱輻射。",
    youtube: "https://www.youtube.com/watch?v=QwF3ipuNyfc"
  },
  {
    id: 10006,
    word: "Camel",
    zh: "駱駝",
    rarity: "普通",
    category: "炎熱生物",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Camel-1.jpg/640px-Camel-1.jpg",
    role: "沙漠運輸之王",
    description: "能耐高溫、數天不喝水，駝峰儲存脂肪幫助體溫調節。"
  },
  {
    id: 10007,
    word: "Desert Iguana",
    zh: "沙漠鬣蜥",
    rarity: "普通",
    category: "炎熱生物",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dipsosaurus_dorsalis_20050829.jpg/640px-Dipsosaurus_dorsalis_20050829.jpg",
    role: "爬行類",
    description: "棲息在北美沙漠地區，活躍於攝氏 45 度以上的白天。"
  },
  {
    id: 10008,
    word: "Thorny Devil",
    zh: "刺魔蜥",
    rarity: "稀有",
    category: "炎熱生物",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Moloch_horridus.jpg/640px-Moloch_horridus.jpg",
    role: "沙漠生存者",
    description: "來自澳洲內陸的蜥蜴，可從皮膚吸收露水導向嘴部飲用。"
  },
  {
    id: 10009,
    word: "Namib Desert Beetle",
    zh: "納米比甲蟲",
    rarity: "稀有",
    category: "炎熱生物",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Stenocara.jpg/640px-Stenocara.jpg",
    role: "取水專家",
    description: "可從晨霧中收集水分，反向彎曲身體讓水珠滾入口中。"
  },
  {
    id: 10010,
    word: "Sidewinder Rattlesnake",
    zh: "側行響尾蛇",
    rarity: "普通",
    category: "炎熱生物",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Crotalus_cerastes_mesquite_spring_CA.jpg/640px-Crotalus_cerastes_mesquite_spring_CA.jpg",
    role: "爬行動物",
    description: "沙漠移動技巧高手，特殊S型行走減少皮膚與熱地面接觸。"
  },
  {
    id: 10011,
    word: "Saharan Cheetah",
    zh: "撒哈拉獵豹",
    rarity: "稀有",
    category: "炎熱生物",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Acinonyx_jubatus_venaticus.jpg/640px-Acinonyx_jubatus_venaticus.jpg",
    role: "掠食者",
    description: "稀有且瀕危，耐熱、靈活，是撒哈拉沙漠的終極掠食者之一。"
  },
  {
    id: 10012,
    word: "Gila Monster",
    zh: "希拉毒蜥",
    rarity: "稀有",
    category: "炎熱生物",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Heloderma_suspectum_03.jpg/640px-Heloderma_suspectum_03.jpg",
    role: "毒爬行類",
    description: "棲息於北美乾旱地區，是少數帶毒的大型蜥蜴之一。"
  },
  {
    id: 10013,
    word: "African Elephant",
    zh: "非洲象",
    rarity: "普通",
    category: "炎熱生物",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/640px-African_Bush_Elephant.jpg",
    role: "草原巨獸",
    description: "透過巨大的耳朵與泥浴調節體溫，在炎熱草原長途跋涉。"
  },
 {
    "word": "Antarctic Fur Seal",
    "zh": "南極毛皮海豹",
    "image": "https://i.pinimg.com/736x/b0/fa/a2/b0faa286c86fd9b0971e528d7a1f6b45.jpg",
    "video": "https://youtu.be/jV6zj4UcWRA",
    "rarity": "稀有",
    "category": "冰原動物",
    "description": "一身絨毛對抗寒冬，牠們在冰水裡翻滾，優雅中自帶幾分豪邁。"
  },
  {
    "word": "Camel",
    "zh": "駱駝",
    "image": "https://v1.pinimg.com/videos/mc/720p/c8/7d/07/c87d07bf7f7b3f7de82c164799f2e488.mp4",
    "video": "https://youtu.be/EXAMPLE_CAMEL",
    "rarity": "普通",
    "category": "炎熱生物",
    "description": "沙漠之舟，耐渴耐熱的長征王，擁有強大耐力。",
  },
  {
    "word": "Thorny Devil",
    "zh": "刺魔蜥蜴",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/2e/a3/c3/2ea3c35d79b82fde1bd187b978c0a9c6_720w.mp4",
    "video": "https://youtu.be/EXAMPLE_THORNY",
    "rarity": "普通",
    "category": "炎熱生物",
    "description": "滿身尖刺的防禦高手，能從皮膚引水，是沙漠奇蹟。",

  },
{
    "word": "Greenland Shark",
    "zh": "格陵蘭鯊魚",
    "image": "https://v1.pinimg.com/videos/mc/720p/8a/74/b3/8a74b3ba626d0965b6af9fc55d41b147.mp4",
    "video": "https://youtu.be/8fkeaxm-I0U",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "深海的沉默巨獸，壽命長得像歷史教科書，千年寒海裡悄悄巡遊。"
  },
 {
    "word": "South Polar Skua",
    "zh": "南極賊鷗",
    "image": "https://i.pinimg.com/736x/a9/da/5b/a9da5b7947e3fc27f586754453038cb9.jpg",
    "video": "https://youtu.be/Ykp9yKbxwDM",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "空中的惡霸，專門搶走別人的晚餐，但沒人能否認牠飛行的霸氣。"
  },
{
    "word": "Leopard Seal",
    "zh": "豹海豹",
    "image": "https://v1.pinimg.com/videos/mc/720p/15/cd/57/15cd576bcaa5c953dcf2b1e680d39516.mp4",
    "video": "https://youtu.be/4VU-B88C9Dk",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "牠有迷人微笑，也有殘酷本能，是極地海洋裡優雅又致命的獵手。"
  },
{
    "word": "Rockhopper Penguin",
    "zh": "跳岩企鵝",
    "image": "https://i.pinimg.com/736x/05/f4/73/05f473f4ddcf104e7fb24df2c056b632.jpg",
    "video": "https://youtu.be/Z2NHN6O3jaQ",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "頭髮比你還狂，牠不是來保守的，是來跳舞的——在岩石上蹦蹦跳跳！"
  },
{
    "word": "Ptarmigan",
    "zh": "雷鳥",
    "image": "https://v1.pinimg.com/videos/mc/720p/e5/ae/51/e5ae51423d90ce172cda9ea9380520fc.mp4",
    "video": "https://youtu.be/L9RfNMrksrA",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "冬季化雪為衣，夏天換回岩灰羽，牠是會換裝的冰原演員。"
  },
 {
    "word": "Harp Seal",
    "zh": "斑海豹",
    "image": "https://v1.pinimg.com/videos/mc/720p/bb/71/38/bb7138e05a58a6b1b5faca018fe0fbf0.mp4",
    "video": "https://youtu.be/BLFwe1kShQk",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "雪白寶寶模樣，像極了冬日裡的一團泡芙，在冰原打滾翻身、眼神無辜。"
  },
  {
    "word": "Sidewinder",
    "zh": "角響尾蛇",
    "image": "https://v1.pinimg.com/videos/mc/720p/80/c5/9d/80c59d75f067aad7361504813cff1aab.mp4",
    "video": "https://youtu.be/EXAMPLE_SIDEWINDER",
    "rarity": "普通",
    "category": "炎熱生物",
    "description": "以側行方式滑過滾燙沙地，攻擊迅猛，毒性致命。",
    "effect": {
      "type": "venom_slither",
      "value": 85,
      "description": "快速突擊並造成持續中毒效果"
    }
  },
  {
    "word": "Meerkat",
    "zh": "狐獴",
    "image": "https://i.pinimg.com/736x/f6/4b/86/f64b86d1540928a564ff1106027bcc7e.jpg",
    "video": "https://youtu.be/EXAMPLE_MEERKAT",
    "rarity": "普通",
    "category": "炎熱生物",
    "description": "群體合作的守望者，動作敏捷，擅長偵查與反應。",
    "effect": {
      "type": "alert_network",
      "value": 60,
      "description": "降低敵方偷襲成功率，並提升我方命中"
    }
  },
  {
    "word": "Gila Monster",
    "zh": "吉拉毒蜥",
    "image": "https://v1.pinimg.com/videos/mc/720p/c8/09/2c/c8092c85fd64f69dea862575b869d200.mp4",
    "video": "https://youtu.be/EXAMPLE_GILA",
    "rarity": "超稀有",
    "category": "炎熱生物",
    "description": "北美沙漠唯一有毒蜥蜴，緩慢但咬合持久，是致命埋伏者。",
    "effect": {
      "type": "toxic_grip",
      "value": 80,
      "description": "造成持續傷害並降低敵方防禦"
    }
  },
  {
    "word": "Secretary Bird",
    "zh": "秘書鳥",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/6c/85/62/6c85628d4b0c94c586d44ec154cbeb58_720w.mp4",
    "video": "https://youtu.be/EXAMPLE_SECRETARY",
    "rarity": "普通",
    "category": "炎熱生物",
    "description": "擅長捕蛇的長腿猛禽，用雙腿掃擊毒蛇，是沙地獵人代表。",
    "effect": {
      "type": "snake_stomp",
      "value": 70,
      "description": "對蛇型敵人造成額外傷害，並提升我方速度"
    }
  },
  {
    "word": "Monitor Lizard",
    "zh": "巨蜥",
    "image": "https://v1.pinimg.com/videos/mc/720p/3b/31/23/3b31234018d4ea9df9644f83d97713cd.mp4",
    "video": "https://youtu.be/EXAMPLE_MONITOR",
    "rarity": "稀有",
    "category": "炎熱生物",
    "description": "強壯耐熱的大型沙漠蜥蜴，具有強力尾巴與咬合。",
   
  },
  {
    "word": "Scarab Beetle",
    "zh": "聖甲蟲",
    "image": "https://i.pinimg.com/736x/88/b5/2d/88b52d1815b0e6dad4e83bab46e3a31c.jpg",
    "video": "https://youtu.be/EXAMPLE_SCARAB",
    "rarity": "普通",
    "category": "炎熱生物",
    "description": "古埃及神聖象徵，擅於在炎熱沙地移動並操控沙塵。",
   
  },
  {
    "word": "Caracal",
    "zh": "沙漠猞猁",
    "image": "https://v1.pinimg.com/videos/mc/720p/39/42/3e/39423eb89ee1bcaf714897b34ee43d52.mp4",
    "video": "https://youtu.be/EXAMPLE_CARACAL",
    "rarity": "超稀有",
    "category": "炎熱生物",
   
  },
  {
    "word": "Dung Beetle",
    "zh": "糞金龜",
    "image": "https://v1.pinimg.com/videos/mc/720p/c7/7f/42/c77f42f9886aade7579d9fd56ccc04a0.mp4",
    "video": "https://youtu.be/EXAMPLE_DUNG",
    "rarity": "稀有",
    "category": "炎熱生物",
    "description": "環境清道夫與神聖象徵，擅於在混亂中保存戰力。",
   
  },
  {
    "word": "Arctic Fox",
    "zh": "北極狐",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/da/4d/7b/da4d7b813591b58ba003543b693b88af_720w.mp4",
    "video": "https://youtu.be/EXAMPLE_ARCTICFOX",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "善於在冰雪間偽裝與挖掘，能迅速躲避危險。",
    
  },
  {
    "word": "Musk Ox",
    "zh": "麝香牛",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/47/d8/c9/47d8c96d3a6f1700e115d6fbaf1509f5_720w.mp4",
    "video": "https://youtu.be/EXAMPLE_MUSKOX",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "強壯耐寒，群體圍圈抵禦捕食者，是極地智慧的象徵。",
   
  },
  {
    "word": "Arctic Wolf",
    "zh": "北極狼",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/b4/a8/11/b4a8112e9d5e292256c67b787ccb55bb_720w.mp4",
    "video": "https://youtu.be/EXAMPLE_WOLF",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "行動迅捷、團隊配合無間，極地最有紀律的獵團。",
   
  },
  {
    "word": "Walrus",
    "zh": "海象",
    "image": "https://v1.pinimg.com/videos/mc/720p/25/b0/84/25b0842b8b49187f86c3af08c20fc98f.mp4",
    "video": "https://youtu.be/EXAMPLE_WALRUS",
    "rarity": "稀有",
    "category": "冰原動物",
    "description": "厚皮脂肪與巨牙武裝的冰原巨獸，既能防守也可衝鋒。",
   
  },
  {
    "word": "Snowshoe Hare",
    "zh": "雪兔",
    "image": "https://i.pinimg.com/736x/e7/80/a7/e780a770f3b90b6596231f0a7cbbd3dc.jpg",
    "video": "https://youtu.be/EXAMPLE_HARE",
    "rarity": "稀有",
    "category": "冰原動物",
    "description": "毛色隨季變化，跳躍迅捷，擅長閃避與迴避危機。",
    
  },
  {
    "word": "Ermine",
    "zh": "白鼬",
    "image": "https://v1.pinimg.com/videos/mc/720p/54/33/0e/54330e24ad591df07b69d8cdf10c0d3b.mp4",
    "video": "https://youtu.be/EXAMPLE_ERMINE",
    "rarity": "稀有",
    "category": "冰原動物",
    "description": "機靈的小獵人，能在雪地中穿梭如風，迅速出擊。",

  },
  {
    "word": "Snow Leopard",
    "zh": "雪豹",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/d2/ea/98/d2ea982b0a89dda3bd566b38a2bb800b_720w.mp4",
    "video": "https://youtu.be/EXAMPLE_LEOPARD",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "高山冰原的隱匿獵手，敏捷與力量並存，是終極掠食者。",

  },
  {
    "word": "Frost Lizard",
    "zh": "冰封蜥蜴",
    "image": "https://i.pinimg.com/736x/dc/c3/10/dcc3102060385088492f886d6ba22884.jpg",
    "video": "https://youtu.be/EXAMPLE_LIZARD",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "傳說中的冰原生物，吐息能凍結敵人行動，是幻想與真實的交界。",

  },
{
    "word": "King Penguin",
    "zh": "國王企鵝",
    "image": "https://v1.pinimg.com/videos/mc/720p/a7/b5/bd/a7b5bdb58bea9b3d65cf07e643a812d1.mp4",
    "video": "https://youtu.be/EXAMPLE_KINGPENGUIN",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "高貴冷靜的極地統治者，象徵秩序與凝聚力，牠的出現讓萬物安靜低頭。",
  },
  {
    "word": "Ivory Gull",
    "zh": "象牙鷗",
    "image": "https://i.pinimg.com/736x/b1/15/9b/b1159b2cc788cf3c8fa52d63b5e31f31.jpg",
    "video": "https://youtu.be/EXAMPLE_GULL",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "極地飛行者，巡弋於冰與雪之間，帶來寒風與觀察力。",

  },
  {
    "word": "Monsters, Inc.",
    "zh": "怪獸電力公司",
    "image": "https://i.pinimg.com/736x/12/ea/c8/12eac80489a28491f7ec97f8f3e22a91.jpg",
    "video": "https://youtu.be/EXAMPLE_MONSTERS",
    "rarity": "普通",
    "category": "皮克斯宇宙",
    "description": "在門後的世界收集尖叫聲與歡笑來發電，怪獸與童心的合作奇蹟。",

  },
   {
    "word": "Suguru Geto",
    "zh": "夏油傑",
    "image": "https://v1.pinimg.com/videos/mc/720p/38/2c/5e/382c5e0880732e58c06b77e62a4a7f59.mp4",
    "video": "https://youtu.be/EXAMPLE_GETO",
    "rarity": "稀有",
    "category": "咒術迴戰",
    "description": "原特級，操咒靈為武器的反派，理念與狂信的化身。",

  },
  {
    "word": "Choso",
    "zh": "脹相",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/61/2d/c8/612dc8ce8c6d4f40ab242d320b263dc3_720w.mp4",
    "video": "https://youtu.be/EXAMPLE_CHOSO",
    "rarity": "稀有",
    "category": "咒術迴戰",
    "description": "血操術的高手，以兄弟為名展開血的制裁。",

  },

    {
    "word": "Dragonite",
    "zh": "快龍",
    "image": "https://v1.pinimg.com/videos/mc/720p/f2/1e/67/f21e675044f57d19e91c6b24a0ed4673.mp4",
    "video": "https://youtu.be/EXAMPLE_DRAGONITE",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "溫柔力量的巨龍，一擊龍爪扭轉戰局。",

  },
  {
    "word": "Mewtwo",
    "zh": "超夢",
    "image": "https://v1.pinimg.com/videos/mc/720p/76/a9/27/76a9278bec89a8d1206ff19379e4a85c.mp4",
    "video": "https://youtu.be/EXAMPLE_MEWTWO",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "人造奇蹟，念力之王，戰場上無可匹敵。",

  },
    {
    "word": "Naruto Uzumaki",
    "zh": "漩渦鳴人",
    "image": "https://v1.pinimg.com/videos/mc/720p/c0/87/a2/c087a28974b83da4f041d861dd322b86.mp4",
    "video": "https://youtu.be/yeUpnIKt6k4",
    "rarity": "超稀有",
    "category": "火影忍者",
    "description": "從落魄孤兒到相信自己的忍者，鳴人以不屈精神與螺旋丸書寫前行之路。",

  },
  {
    "word": "Sasuke Uchiha",
    "zh": "宇智波佐助",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/4f/74/81/4f74811e642ce16bd6822b71553689be_720w.mp4",
    "video": "https://youtu.be/HQzt4d3ALjA",
    "rarity": "超稀有",
    "category": "火影忍者",
    "description": "冷酷的復仇者，背負家族的血海深仇，擁有寫輪眼與千鳥之力。",

  },
  {
    "word": "Sakura Haruno",
    "zh": "春野櫻",
    "image": "https://v1.pinimg.com/videos/iht/720p/20/d9/b0/20d9b0addc134925ba71a59bbd2e7815.mp4",
    "video": "https://youtu.be/EtfTHD8T4lw",
    "rarity": "稀有",
    "category": "火影忍者",
    "description": "醫療忍術專家，掌握怪力與療癒之術，戰場上的生命守護者。",

  },
  {
    "word": "Kakashi Hatake",
    "zh": "旗木卡卡西",
    "image": "https://v1.pinimg.com/videos/mc/720p/1a/9b/19/1a9b196fb1127af947c0602d38225fe4.mp4",
    "video": "https://youtu.be/vHQf2jLU1Fg",
    "rarity": "稀有",
    "category": "火影忍者",
    "description": "擁有寫輪眼的複製忍者，智慧與冷靜的象徵，是鳴人小隊的領導者。",

  },
  {
    "word": "Itachi Uchiha",
    "zh": "宇智波鼬",
    "image": "https://v1.pinimg.com/videos/mc/720p/58/8b/76/588b76cd43b6c92a1b854e6494220fd8.mp4",
    "video": "https://youtu.be/q5k4QZYVWGo",
    "rarity": "普通",
    "category": "火影忍者",
    "description": "為了村子與弟弟而選擇黑暗之路的天才，萬花筒寫輪眼的持有者。",

  },
  {
    "word": "Shikamaru Nara",
    "zh": "奈良鹿丸",
    "image": "https://i.pinimg.com/736x/fb/4a/04/fb4a044f8977b67d1574363a3868ca5f.jpg",
    "video": "https://youtu.be/ql-8i9OAjbM",
    "rarity": "稀有",
    "category": "火影忍者",
    "description": "影子操控天才，智商爆表的戰略家，懶散外表下藏著最強腦袋。",

  },
  {
    "word": "Rock Lee",
    "zh": "洛克・李",
    "image": "https://i.pinimg.com/736x/2b/8e/dd/2b8edd1030acc9051cacb9f63faf1c26.jpg",
    "video": "https://youtu.be/p_GWxHICjM8",
    "rarity": "普通",
    "category": "火影忍者",
    "description": "體術天才，熱血永不放棄，努力就是他最強的忍術。",

  },
  {
    "word": "Hinata Hyuga",
    "zh": "日向雛田",
    "image": "https://i.pinimg.com/736x/37/2f/8b/372f8b0d611cae4924b5e94585572702.jpg",
    "video": "https://youtu.be/_u26A4WJgIQ",
    "rarity": "普通",
    "category": "火影忍者",
    "description": "柔拳系溫柔少女，堅定心意在戰場綻放。",

  },
  {
    "word": "Gaara",
    "zh": "我愛羅",
    "image": "https://v1.pinimg.com/videos/mc/720p/87/da/b2/87dab2565dbad9076bd78cc917e5698d.mp4",
    "video": "https://youtu.be/0b7cAEG3W1g",
    "rarity": "稀有",
    "category": "火影忍者",
    "description": "沙之守鶴的容器，從冷漠中誕生的守護者。",

  },
  {
    "word": "Neji Hyuga",
    "zh": "日向寧次",
    "image": "https://i.pinimg.com/736x/95/53/ea/9553eae3d33d7204a221e9576ee69697.jpg",
    "video": "https://youtu.be/GGcu5S4U33Y",
    "rarity": "稀有",
    "category": "火影忍者",
    "description": "命運與實力的對決，白眼洞悉一切。",

  },
    {
    "word": "Temari",
    "zh": "手鞠",
    "image": "https://i.pinimg.com/736x/76/41/65/764165d69abe7f09b1c8502d50beff9d.jpg",
    "video": "https://youtu.be/fZKVEG8KIzQ",
    "rarity": "普通",
    "category": "火影忍者",
    "description": "風之忍者，鋒利言語與團扇同樣致命。",

   },

  {
    "word": "Snow White",
    "zh": "白雪公主",
    "image": "https://v1.pinimg.com/videos/mc/720p/63/a6/4f/63a64f8db7a4621420534c84483747d2.mp4",
    "video": "https://youtu.be/PGkWW2lIXc0?si=2ZXcycjF92gsGpc0",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "被蘋果詛咒的純真少女，以微笑融化王子的真愛魔咒。",

  },
  {
    "word": "Aurora",
    "zh": "奧蘿拉",
    "image": "https://www.bing.com/th/id/OGC.91bac983035ac66f014e2fa5b71e7004?r=0&o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fn.sinaimg.cn%2fastro%2ftransform%2f729%2fw500h229%2f20181119%2fBLVB-hnyuqhi2165817.gif&ehk=xZUrpYHpm5I4TlHhWPvfxJq7oRtUtxtOnac4e89M82Y%3d",
    "video": "https://youtu.be/Jt6Erwxzc0A?si=rnJijErTWO5Nquln",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "沉睡千年的公主，在晨曦中甦醒，舞動皇宮的光影韻律。",

  },
  {
    "word": "Tinker Bell",
    "zh": "小仙子",
    "image": "https://th.bing.com/th/id/OIP.Z_ZU6jgIki13xqMjEmtj4QHaFj?r=0&pid=ImgDet&w=175&h=130&c=7&dpr=2",
    "video": "https://youtu.be/_xP12x6FIsM?si=zJWRBcKWod6FFQ6c",
"rarity": "普通",
    "category": "童話故事",
    "description": "飄散魔法塵的精靈，用一縷微光點亮夢幻永不陳舊。",

  },
  {
    "word": "Peter Pan",
    "zh": "彼得潘",
    "image": "https://www.bing.com/th/id/OGC.d50dd8e6eac324098f6bf64aa91ae08a?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia3.giphy.com%2fmedia%2f10ZucsW5gDl4kg%2fgiphy.gif&ehk=KM%2fHBD5VT6ppUgaJEfHKyVwdepkkuL4BracYn2gZMMo%3d",
   "video": "https://youtu.be/GnhvXT_jYeE?si=HSi2kLVlFbXY5p9Q", 
"rarity": "超稀有",
    "category": "童話故事",
    "description": "永遠不肯長大的男孩，在奇幻夢島揮舞冒險的翅膀。",

  },
  {
    "word": "Captain Hook",
    "zh": "虎克船長",
    "image": "https://s.yimg.com/ny/api/res/1.2/PMfFBLlDMCACKI7TyK1cdQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU3Ng--/https://media.zenfs.com/zh-Hant-TW/homerun/niusnews.com.tw/e8a037dff6db661518ae4eb998c3ea19",
   "video": "https://youtu.be/pBFy2fQpHzg?si=gisneXKnKVtNNDjL",
 "rarity": "超稀有",
    "category": "童話故事",
    "description": "時鐘滴答聲中狩獵彼得潘的海盜，詮釋復仇的優雅與忐忑。"
  },
  {
    "word": "Wendy",
    "zh": "溫蒂",
    "image": "https://i.pinimg.com/originals/24/83/69/24836930d188179fa733f60dc89b2a35.gif",
"video": "https://youtu.be/j9rDI4F8HyY?si=-40_gwn8NjMIjsgb",   
 "rarity": "普通",
    "category": "童話故事",
    "description": "夢島上的溫柔說書人，低語中編織家與想像的溫暖。"
  },
  {
    "word": "Pinocchio",
    "zh": "匹諾曹",
    "image": "https://v1.pinimg.com/videos/mc/720p/aa/30/64/aa306485ba6acf0f00fb097558f44e21.mp4",
"video": "https://youtu.be/IgtKbhjwCCU?si=23oJ9ScEB9kmvElc",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "木偶男孩追尋真的自我，每一次心跳都化作勇氣的節拍。"
  },
  {
    "word": "Jiminy Cricket",
    "zh": "蟋蟀吉米尼",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/98/3c/71/983c71b7ae7b62239b612b1c6e02e72c_720w.mp4",
"video": "https://youtu.be/DUh_ggTUsCI?si=xai-0bl0MxYOI0fa",
    "rarity": "普通",
    "category": "童話故事",
    "description": "躡手躡腳的良心使者，低吟中提醒我們道德的律動。"
  },
  {
    "word": "Sebastian",
    "zh": "賽巴斯汀",
    "image": "https://i.pinimg.com/originals/04/80/03/04800399a1415c06d712c73ff6ddfddd.jpg",
"video": "https://youtu.be/kPQXzUSgCd4?si=OA2uGO_yP9JZGWSg",
    "rarity": "普通",
    "category": "童話故事",
    "description": "一見鍾情的皇宮小螃蟹，用加勒比海的旋律守護美人魚之夢。",
     "createdAt": "2024-07-09T00:00:00"
  },
  {
    "word": "Ursula",
    "zh": "烏蘇拉",
    "image": "https://v1.pinimg.com/videos/mc/720p/3e/0a/be/3e0abeb08a2ba2ba3473e63fe6df2c4f.mp4",
"video": "https://youtu.be/4t3kQf3lWBs?si=1k_ggElN08XibXcj",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "深海女巫用詭譎歌聲編織欲望，換來權力卻失去對明天的掌控。"
  },
  {
    "word": "Hades",
    "zh": "哈迪斯",
    "image": "https://v1.pinimg.com/videos/mc/720p/fc/90/a3/fc90a3c6b14bc8564495888463a73244.mp4",
"video": "https://youtu.be/kjT2vygjFFg?si=t0xm20E9m8p5MP6S",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "陰間之王嘴角含笑，在火焰中演繹命運的幽冥狂想。"
  },
  {
    "word": "Hercules",
    "zh": "海克力士",
    "image": "https://www.bing.com/th/id/OGC.80d322dce5320316e274c1f4c8755ef4?r=0&o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fimg.playbuzz.com%2fimage%2fupload%2ff_auto%2cfl_lossy%2cq_auto%2fcdn%2fd1965108-9223-4a5b-b98d-b3f7b370380c%2fa21da147-7912-4f2b-941c-ef262ac9778f.gif&ehk=BfYwueGqNpYOEsYVbO0tGC6CAEfkJ0b1b1npBByYHgk%3d",
    "video": "https://youtu.be/rJwJfHp4Osc?si=lnuoBy6hXCSPk6X7",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "半神之軀躍向星空，以熱血與真誠書寫英雄的詩篇。"
  },
  {
    "word": "Mowgli",
    "zh": "毛格",
    "image": "https://i.pinimg.com/736x/46/e6/1b/46e61b60f9225b0398a0d0a3a03ac480.jpg",
 "video": "https://youtu.be/LhqqyC0zh_0?si=Ex12ujBsWITaK6Y6",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "叢林人之子在狼群之間奔跑，學習野性的自由與歸屬。"
  },
  {
    "word": "Baloo",
    "zh": "巴魯",
    "image": "https://i.pinimg.com/736x/41/5b/9e/415b9e53e90a9366e11da4614c5e3bfe.jpg",
 "video": "https://youtu.be/c6e3ITsjLRI?si=hzl-IVP8-kwRHrze",   
 "rarity": "普通",
    "category": "童話故事",
    "description": "憨厚大熊，用輕鬆節奏教會毛格生命的愉悅。"
  },
  {
    "word": "Shere Khan",
    "zh": "雪狐",
    "image": "https://v1.pinimg.com/videos/mc/720p/5f/6b/92/5f6b921e3121eb495b8b5a85b1c0f0c1.mp4",
 "video": "https://youtu.be/PpC4a6jCxSA?si=908vTB0V8Yl21Pxm",  
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "叢林之王以冰冷目光狩獵，讓每聲低吼都震顫心靈。"
  },
  {
    "word": "Cruella de Vil",
    "zh": "庫伊拉",
    "image": "https://v1.pinimg.com/videos/mc/720p/2c/18/a4/2c18a4eaa1df0befec8736ca40a9ecd1.mp4",
 "video": "https://youtu.be/DbOAa7Tbil0?si=pXKK_z3RCl2ZM-b3",  
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "時尚魅影背後的瘋狂夢想家，毛皮的慾望燃燒人性。"
  },
  {
    "word": "Fairy Godmother",
    "zh": "仙女教母",
    "image": "https://i.pinimg.com/736x/77/30/ea/7730ea2c4bd0c6ed3d4ba6292014f3fc.jpg",
 "video": "https://youtu.be/z3QeYtv1OPs?si=6Pv4k3sMLWh9DAqk",
    "rarity": "普通",
    "category": "童話故事",
    "description": "揮動魔杖的慈愛守護者，在一瞬間點亮奇蹟之光。"
  },
  {
    "word": "Lady",
    "zh": "小姐",
 "video": "https://youtu.be/SM3jQ2PKxW4?si=3PSr2Ef7Fppx2tUx",
    "image": "https://v1.pinimg.com/videos/iht/720p/de/16/94/de16940de9cd836d88dab672aed86f92.mp4",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "優雅灰狗在煙火下邂逅流浪狗，愛的旋律在午夜迴盪。"
  },
  {
    "word": "Tramp",
    "zh": "流浪狗",
    "image": "https://v1.pinimg.com/videos/mc/720p/cc/cd/af/cccdaf7dfefa12d8b298ace4f50c0e14.mp4",
    "video": "https://youtu.be/sLrWNuGl6ks?si=9BsHctiQ7ZORmLMd",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "街頭浪子以自由靈魂帶領小姐踏上冒險與浪漫之旅。"
  },
  {
    "word": "Mickey Mouse",
    "zh": "米奇老鼠",
    "image": "https://v1.pinimg.com/videos/iht/720p/84/ca/b9/84cab913b9164a83945d90e4fbaba075.mp4",
    "video": "https://www.youtube.com/watch?v=REHJ1lz_HLQ",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "童話故事經典吉祥物，充滿活力與幽默感，帶給觀眾無窮歡笑。"
  },
  {
    "word": "Donald Duck",
    "zh": "唐老鴨",
    "image": "https://i.pinimg.com/originals/be/87/9f/be879f8723cbcf29f41cab6f4e0a8e21.gif",
"video": "https://youtu.be/PGQ0Ge6kiz8?si=yPe1_Pe-IWyC9VU8",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "性格急躁卻心地善良的鴨子，標誌性的咕噥聲融化人心。"
  },
  {
    "word": "Goofy",
    "zh": "高飛",
    "image": "https://v1.pinimg.com/videos/mc/720p/d0/50/c0/d050c0847e924ce9e139ac8cecf708de.mp4",
    "video": "https://youtu.be/rdBYmk4dfLE?si=QPgRyHgKbM_a73JZ",
    "rarity": "普通",
    "category": "童話故事",
    "description": "笨拙可愛的狗狗角色，總在傻氣中點亮天真與友誼。"
  },
  {
    "word": "Minnie Mouse",
    "zh": "米妮老鼠",
    "image": "https://v1.pinimg.com/videos/mc/720p/85/86/4b/85864b293889b6eca69f0b4d1361e757.mp4",
 "video": "https://youtu.be/7mTMzABsKqo?si=HFDp909G0tMssEva",   
 "rarity": "超稀有",
    "category": "童話故事",
    "description": "樣貌優雅甜美的女主角，蝴蝶結與心形裙下藏著堅定信念。"
  },
  {
    "word": "Pluto",
    "zh": "布魯托",
    "image": "https://v1.pinimg.com/videos/720p/79/17/60/791760fe1dee5a5f0405f90a2d216807.mp4", 
    "rarity": "普通",
    "category": "童話故事",
    "description": "米奇忠誠的寵物狗，勇氣與好奇心讓他在冒險中閃耀。"
  },
  {
    "word": "Olaf",
    "zh": "奧拉夫",
    "image": "https://v1.pinimg.com/videos/mc/720p/2b/78/69/2b7869b68ed2b53488d4b981634e3ec7.mp4",
 "video": "https://youtu.be/TSvBrYIPK5s?si=f30G8QxBt4LkQvtF", 
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "《冰雪奇緣》中的雪人，純真樂觀，渴望擁抱溫暖與友情。"
  },
  {
    "word": "Simba",
    "zh": "辛巴",
    "image": "https://v1.pinimg.com/videos/mc/720p/69/e7/b4/69e7b4022ab01c5078bc30e5aeb3c0b3.mp4",
 "video": "https://youtu.be/kaOIxll4LCA?si=vvwb1DrS-pcsmFUg", 
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "《獅子王》中勇敢的獅子王子，經歷責任與成長後重登王座。"
  },
  {
    "word": "Nala",
    "zh": "娜拉",
    "image": "https://v1.pinimg.com/videos/mc/720p/5b/bf/0a/5bbf0a62a64bd9629edf6f2b8b5291fd.mp4",
 "video": "https://youtu.be/a4DSrm6eP0M?si=gUVEjjzd9uOHDT1l", 
    "rarity": "稀有",
    "category": "童話故事",
    "description": "智慧果敢的獅子公主，與辛巴並肩守護榮耀與愛。"
  },
  {
    "word": "Anna",
    "zh": "安娜",
    "image": "https://v1.pinimg.com/videos/mc/720p/a8/f4/a2/a8f4a2f4704b9bc7a1b0e729cd430662.mp4",
 "video": "https://youtu.be/TeQ_TTyLGMs?si=HfsjmXmgDNQ42mJa",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "《冰雪奇緣》裡的熱情公主，為了家人踏上冒險，展現無畏之心。"
  },
  {
    "word": "Ariel",
    "zh": "愛麗兒",
    "image": "https://v1.pinimg.com/videos/mc/720p/fd/3e/92/fd3e925145134a1b50bc31023c226731.mp4",
 "video": "https://youtu.be/KWk4emh3-qc?si=X7ac8C91h5tli35m",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "《小美人魚》的人魚公主，好奇心驅使她追逐陸地與愛的聲音。"
  },
  {
    "word": "Belle",
    "zh": "貝兒",
    "image": "https://live.staticflickr.com/536/31713483003_8ac91363a4_b.jpg",
 "video": "https://youtu.be/h0rfc33uk1A?si=hGG1_b3hLUnICg79",
    "rarity": "稀有",
    "category": "童話故事",
    "description": "《美女與野獸》中愛讀書的少女，用溫柔與智慧感化野獸。"
  },
  {
    "word": "Aladdin",
    "zh": "阿拉丁",
    "image": "https://th.bing.com/th/id/OIP.CGV6Xwx8nWqY_tgCUMFxBgAAAA?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
 "video": "https://youtu.be/XUSjObJku0Q?si=vofb1k5H-YYc5aC5",
    "rarity": "稀有",
    "category": "童話故事",
    "description": "《阿拉丁》中的街頭少年，機智與勇氣助他逆轉命運。"
  },
  {
    "word": "Jasmine",
    "zh": "茉莉公主",
    "image": "https://i.pinimg.com/736x/e5/77/b2/e577b2deddc883dd91d7dd42ab78fbad.jpg",
 "video": "https://youtu.be/Ud3Y8nN-qjU?si=u0adfsKTQv1mxkgi",
    "rarity": "稀有",
    "category": "童話故事",
    "description": "擁有自由之心的公主，不願被束縛，追尋真愛與自主。"
  },
  {
    "word": "Mulan",
    "zh": "花木蘭",
    "image": "https://v1.pinimg.com/videos/mc/720p/a9/1b/04/a91b04f45c5b3d7d4c000f827d8b7c98.mp4",
 "video": "https://youtu.be/RN5csaWDKuI?si=kVfAGlEmjR4nIaBq",
    "rarity": "稀有",
    "category": "童話故事",
    "description": "以勇氣與智慧代父從軍，打破性別桎梏的女戰士。"
  },
 {
    "word": "Cinderella",
    "zh": "辛德瑞拉",
    "image": "https://v1.pinimg.com/videos/mc/720p/3b/42/95/3b4295427292c67d42c5e535576660cf.mp4",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "灰姑娘在暮色南瓜馬車裡奔向夢想，用一隻水晶鞋書寫逆轉人生的詩篇。",

  },
  {
    "word": "Pocahontas",
    "zh": "波卡洪塔斯",
    "image": "https://v1.pinimg.com/videos/mc/720p/9b/0d/ba/9b0dba9ccf0fe67c129234c7cbb9b2b4.mp4",
 "video": "https://youtu.be/Do5TwE_jYnE?si=JROK4SEEGbeX7X4A",
    "rarity": "稀有",
    "category": "童話故事",
    "description": "《風中奇緣》裡的印第安公主，與自然共鳴，橋接不同文化。"
  },
  {
    "word": "Tiana",
    "zh": "蒂安娜",
    "image": "https://v1.pinimg.com/videos/mc/720p/9c/5c/22/9c5c2270259b4e33227f48797c35c44d.mp4",
 "video": "https://youtu.be/jKXDtjaacE8?si=ubV949Lsg9ugCjXv",
    "rarity": "稀有",
    "category": "童話故事",
    "description": "《公主與青蛙》的女主角，憑藉勤奮與夢想實現願望。"
  },
  {
    "word": "Scar",
    "zh": "刀疤",
    "image": "https://v1.pinimg.com/videos/mc/720p/5e/1a/67/5e1a67005427bde4e4af38d5219677e4.mp4",
 "video": "https://youtu.be/5WsZdDDQ8b0?si=FRM4xywvheh836PA",
    "rarity": "稀有",
    "category": "童話故事",
    "description": "《獅子王》中的複雜反派，陰影中編織權力與復仇。"
  },
  {
    "word": "Elsa",
    "zh": "艾莎",
    "image": "https://v1.pinimg.com/videos/mc/720p/e6/cd/44/e6cd4479a71e6754d5f9fedbd565e4c2.mp4",
 "video": "https://youtu.be/L0MK7qz13bU?si=KQ3ADhkoI4xPx79g",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "《冰雪奇緣》的冰雪女王，掌握元素力量，同時背負孤獨與責任。"
  },
  {
    "word": "Rapunzel",
    "zh": "樂佩",
    "image": "https://www.bing.com/th/id/OGC.bf716abdcdcaafb98bacc65eb9492250?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2faf%2f4a%2f3b%2faf4a3b315f0f4b359470f8bb7f9f6fe4.gif&ehk=DrXvXgiUccXmR95xQYCuDA0E0%2b1XLG8%2fFQsYXv6rO58%3d",
    "video": "https://youtu.be/X89OK3a2j14?si=hTSg8hEw8cr__-md",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "《魔髮奇緣》中的長髮公主，放下束縛後展翅追尋世界。"
  },
  {
    "word": "Beast",
    "zh": "野獸",
    "image": "https://media.giphy.com/media/n9AXiCSNv3E0E/giphy.gif",
    "video": "https://youtu.be/qXq4TD82VBE?si=ZE63VSWQZ0TsDqVr",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "《美女與野獸》中的王子詛咒形態，內心深處隱藏真摯溫暖。"
  },
 // 銀河漫遊類型 (共20張)
  { word: "rocket", zh: "火箭", image: "img/cards/rocket.jpg", 
video: "https://youtu.be/Lssd08AYjFI?si=0ge4cefpmbZ062zN", 
rarity: "普通", category: "銀河漫遊", 
description: "搭載宇航員飛向銀河漫遊的載具，壯觀又神秘。" },

  { word: "galaxy", zh: "銀河", 
image: "https://v1.pinimg.com/videos/mc/720p/5d/67/1e/5d671e3006cde6587df394bfa345f4d0.mp4", 
video: "https://youtu.be/g5RKRUGvFTE?si=uMyUdpXMgiArbyg3", 
rarity: "稀有", category: "銀河漫遊", 
description: "包含數百億顆恆星的巨大星系，我們的家園僅是微塵。" },

  { word: "astronaut", zh: "太空人", 
image: "https://v1.pinimg.com/videos/iht/720p/4e/00/d1/4e00d1999152ab007ebe4aef36d5e2c9.mp4", video: "https://youtu.be/Hz2F_S3Tl0Y?si=3Wj6YwjJJZwev47h", 
rarity: "稀有", category: "銀河漫遊", 
description: "穿著銀河漫遊衣的探險者，跨出地心，追尋星辰夢。" },

  { word: "spaceship", zh: "太空船", 
image: "https://v1.pinimg.com/videos/iht/720p/f6/4b/cd/f64bcd13f2e78749e34731d7055a4b8e.mp4", 
video: "https://youtu.be/oBLXZOSCC1o?si=717UbXS4LU7e3s7Y", 
rarity: "稀有", 
category: "銀河漫遊", 
description: "星際航行的鋼鐵巨艦，承載無限可能。" },

  { word: "satellite", zh: "衛星", 
image: "https://v1.pinimg.com/videos/mc/720p/cb/d0/0e/cbd00e79a6f65fb51cf89b653dbccd1e.mp4", 
rarity: "普通", category: "銀河漫遊", 
description: "繞行於軌道之上，傳遞地球的聲音與光影。" },

  { word: "blackhole", zh: "黑洞", 
image: "https://v1.pinimg.com/videos/mc/720p/b6/9f/1a/b69f1a7006fd8c3ae9e8de1b0dcaf69e.mp4", 
video: "https://youtu.be/JXWfRoAmKCs?si=Gk5cFxnOouL6nSNa", 
rarity: "超稀有", category: "銀河漫遊", 
description: "吞噬一切的暗影漩渦，宇宙深處的謎團。", youtube: "https://www.youtube.com/watch?v=QqsLTNkzvaY" },
  
{ word: "nebula", zh: "星雲", 
image: "https://v1.pinimg.com/videos/mc/720p/e4/39/e9/e439e95b3b975baac67f6a74cc183c16.mp4", video: "https://youtu.be/FwjAFF_JbHE?si=oh_COsM2jGR5Bxb2", 
rarity: "普通", 
category: "銀河漫遊", 
description: "色彩斑斕的氣體雲海，新星的搖籃。" },

  { word: "universe", zh: "宇宙", 
image: "https://v1.pinimg.com/videos/mc/720p/53/fe/57/53fe573b13d5e21796b402531671e505.mp4", 
video: "https://youtu.be/IGZzgvY0IVw?si=WeJw2ALSA6F5TexP", 
rarity: "超稀有", 
category: "銀河漫遊", 
description: "一切存在與未知，浩瀚無垠的宏闊舞台。", youtube: "https://www.youtube.com/watch?v=libKVRa01L8" },
  
  { word: "meteor", zh: "流星", 
image: "https://v1.pinimg.com/videos/mc/720p/b0/ec/6f/b0ec6fa381ddef8c01d4265ba07116c4.mp4", video: "https://youtu.be/38ovE2Ec5h4?si=7TlQWvdgFvVb9Egk", 
rarity: "普通", 
category: "銀河漫遊", 
description: "劃過天幕的瞬間焰光，許願者的祈盼。" },

  { word: "moon", zh: "月球", 
image: "https://v1.pinimg.com/videos/mc/720p/da/06/4e/da064e68dc2f8b943e4442fa8954e81d.mp4", 
video: "https://youtu.be/iJL2bv1l9Jo?si=OKxg20jCTe8gRb8l", 
rarity: "普通", 
category: "銀河漫遊", 
description: "夜的銀盤，潮汐的呼喚。" },

  { word: "supernova", zh: "超新星", 
image: "https://v1.pinimg.com/videos/mc/720p/da/c5/20/dac520accfedda6be271524f6d741f24.mp4", 
video: "https://youtu.be/NoQ9aAg0Alg?si=fpRvwbJZH-7HRYFN", 
rarity: "超稀有", 
category: "銀河漫遊", 
description: "星辰的末路華章，化作塵埃與榮光。", youtube: "https://www.youtube.com/watch?v=H8Jm7qO4AqE" },

  { word: "pulsar", zh: "脈衝星", 
image: "https://v1.pinimg.com/videos/mc/720p/6a/e2/9e/6ae29e14bb68ccdf542a9ee5bf67732b.mp4", 
video: "https://youtu.be/mfppqqQf6GY?si=xf-UHQHESFLotJRQ", 
rarity: "稀有", 
category: "銀河漫遊", 
description: "節律閃爍的天體燈塔，引領宇宙航路。" },

  { word: "darkmatter", zh: "暗物質", 
image: "https://v1.pinimg.com/videos/mc/720p/7e/b3/13/7eb313336e16b999f0acfa1f920a6fde.mp4", video: "https://youtu.be/ZBejmNIyRvI?si=ToZ39kSAJ4Hh14LG", 
rarity: "超稀有", 
category: "銀河漫遊", 
description: "隱匿於星河間的無形之網，撐起虛空之軀。", youtube: "https://www.youtube.com/watch?v=QAa2O_3wBDU" },

  // 星耀契約類型 (共20張)
  { word: "wand", zh: "魔杖", 
image: "https://i.pinimg.com/736x/9b/06/20/9b0620a99d4ca2c5ce4ebb651fbd1d4a.jpg", 
video: "https://youtu.be/SYAoPDBZ_Tk?si=IOy1j63i5MQnVAEB", 
rarity: "普通", 
category: "星耀契約", 
description: "咒語的導管，將意志化作魔力流轉。" },

  { word: "spellbook", zh: "魔法書", 
image: "https://v1.pinimg.com/videos/mc/720p/bf/e2/76/bfe276a2ef91932924490dde5ab6628a.mp4", 
video: "https://youtu.be/_VtwoB_sO9M?si=VaK908rx1_MW13zh", 
rarity: "稀有", 
category: "星耀契約", 
description: "封印古老符文的卷頁，知識與力量並存。" },
  
  { word: "wizard", zh: "巫師", 
image: "https://i.pinimg.com/736x/b4/ea/6d/b4ea6da6c95768a81be0691bd2d80d60.jpg", 
video: "https://youtu.be/jKECMTQPZcE?si=uoikkvm2TD5Rj-Kb", 
rarity: "稀有", 
category: "星耀契約", 
description: "掌控元素的智者，星塵與雷電的呼喚者。" },

  { word: "dragon", zh: "龍", 
image: "https://v1.pinimg.com/videos/iht/expMp4/ae/28/15/ae2815e51c13405486839c27615289be_720w.mp4", 
video: "https://youtu.be/mch8LbGumXM?si=DW8MH4nw8WWbwxDG", 
rarity: "超稀有", category: "星耀契約", 
description: "古老鱗片與火焰，傳說在它的咆哮中重生。", youtube: "https://www.youtube.com/watch?v=1A-Nf3QIJjM" },

  { word: "crystal", zh: "魔晶", 
image: "https://v1.pinimg.com/videos/mc/720p/2a/49/1e/2a491e3cea1913aa236a2d1183bfb0b1.mp4", 
rarity: "普通", 
category: "星耀契約", 
description: "儲存元素與時間的礦石，光影中低語。" },

{ word: "portal", zh: "傳送門", 
image: "https://v1.pinimg.com/videos/mc/720p/0d/bf/d8/0dbfd8082b48e71b16a964a9a5d9a3a2.mp4", 
rarity: "超稀有", 
category: "星耀契約", 
description: "跨越時空的裂縫，瞬移的詩篇。", 
youtube: "https://www.youtube.com/watch?v=3pAnRKD4raY" 
},

{ word: "runestone", zh: "符文石", 
image: "https://i.pinimg.com/736x/a8/0d/df/a80ddf04372bd3bd37b18391d7a49beb.jpg", 
rarity: "普通", 
category: "星耀契約", 
description: "刻畫元素之印的古石，召喚與封印之鑰。" 
},

{ word: "cauldron", zh: "鍋爐", 
image: "https://v1.pinimg.com/videos/mc/720p/84/69/75/846975888088c780d02b5b4c34bc0157.mp4", 
rarity: "普通", 
category: "星耀契約", description: "翻騰的藥湯，蒸氣中蘊含變化奧秘。" },

  { word: "magicmirror", zh: "魔鏡", image: "https://i.pinimg.com/736x/e5/c9/61/e5c9610affb416ca9ca2201a2a8ae878.jpg", rarity: "稀有", category: "星耀契約", description: "穿著太空衣的探險者，跨出地心，追尋星辰夢。" },

  // 虛界驛站類型 (共7張)
  { word: "cyborg", zh: "賽博人", image: "https://v1.pinimg.com/videos/mc/720p/fa/3c/e0/fa3ce0ca2b7811172226404c255b2342.mp4", 
video: "https://youtu.be/zXWtSXfxx4E?si=kQp-VgmPtBT43YUZ", 
rarity: "稀有", category: "虛界驛站", description: "半人半機械的強化戰士，擁有驚人的反應與力量。" },

  { word: "ai", zh: "人工智慧", 
image: "https://v1.pinimg.com/videos/mc/720p/b7/33/cf/b733cf1bc760d6e762a36e3db7a92bcd.mp4", 
video: "https://youtu.be/i0UxYDqlX6o?si=lVKq9TL5vOunyD66", 
rarity: "超稀有", 
category: "虛界驛站", 
description: "具備自我意識與超高邏輯的智慧核心，可掌控整個系統。", youtube: "https://www.youtube.com/watch?v=4V2xXqFgB_c" },

  { word: "mecha", zh: "機甲", 
image: "https://v1.pinimg.com/videos/mc/720p/74/41/f0/7441f064ec19917c4944bc6f14735249.mp4", 
video: "https://youtu.be/248yffzQAfo?si=cTWdsqghZQeQd2hY", 
rarity: "稀有", 
category: "虛界驛站", 
description: "由人類駕駛的大型機器戰甲，是未來戰爭的主力。" },

  { word: "hologram", zh: "全息影像", image: "https://v1.pinimg.com/videos/iht/expMp4/6d/92/5d/6d925d3f5fd150e04c152ecc1e0dcb1c_720w.mp4", rarity: "普通", category: "虛界驛站", description: "利用光學與投影技術創造的虛擬實像，用於戰術偽裝或通訊。" },
  
   // 神話生物類型 (共7張)
  { word: "phoenix", zh: "鳳凰", 
image: "https://v1.pinimg.com/videos/iht/expMp4/f0/e3/4d/f0e34d18af3c431e4fac6101d88dad0d_720w.mp4",
video: "https://youtu.be/vbI6YYwPKDQ?si=d3qDs4SrEbXOnvxa", 
rarity: "超稀有", category: "神話生物", 
description: "浴火重生于曠野，尾羽如朝陽，靈魂永不熄滅。", youtube: "https://www.youtube.com/watch?v=8jLOx1hD3_o" },
{
    "word": "kitsune",
    "zh": "狐狸精",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/72/b3/fe/72b3fe4a53bdcc19102ecab769369ef7_720w.mp4",
    "video": "https://youtu.be/FoNnTM5Eb_E?si=KVg336U3BSh90T3C",
    "youtube": "https://www.youtube.com/watch?v=4V2xXqFgB_c",
    "rarity": "普通",
    "category": "神話生物",
    "description": "沉眠於地底深淵，夢見光明與毀滅交錯的彼端。"
  },
  {
    "word": "mermaid",
    "zh": "美人魚",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/03/08/4b/03084bd8239c54336e06d5962553cab1_720w.mp4",
    "video": "https://youtu.be/sfXkGwdmBjQ?si=Aln0M5UM7E1Tg9JL",
    "youtube": "https://www.youtube.com/watch?v=HP-fF3HeB3g",
    "rarity": "普通",
    "category": "神話生物",
    "description": "歌聲縈繞浪心，銀鱗撩動星光，她在浪花後輕吟愛與孤獨。"
  },
  {
    "word": "basilisk",
    "zh": "蛇怪",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/e5/d8/26/e5d826ebc4a584e028fdb77d65e9209b_720w.mp4",
    "video": "https://youtu.be/X9XqVE-xx1E",
    "youtube": "https://www.youtube.com/watch?v=5RUFKRj3LhU",
    "rarity": "稀有",
    "category": "神話生物",
    "description": "火羽重生，燃盡過往之灰燼，涅槃於希望與焰光之中。"
  },


  { word: "unicorn", zh: "獨角獸", 
image: "https://v1.pinimg.com/videos/iht/expMp4/eb/f2/9d/ebf29d69c2e2a7779fe63a66035cdba3_720w.mp4", 
video: "https://youtu.be/FoNnTM5Eb_E?si=KVg336U3BSh90T3C", 
rarity: "超稀有", 
category: "神話生物", description: "白蹄踏露，角尖閃耀純潔光芒，守護夢境邊界。", youtube: "https://www.youtube.com/watch?v=4V2xXqFgB_c" },

{"word": "qilin",
    "zh": "麒麟",
    "image": "https://i.pinimg.com/736x/a0/87/6d/a0876d3ca3fc7260a671dab8630cc465.jpg",
    "video": "https://youtu.be/qIl1In2Ki3N?si=SsTtUuVvWwXxYyZz",
    "youtube": "https://www.youtube.com/watch?v=qIl1In2Ki3N",
    "rarity": "超稀有",
    "category": "神話生物",
    "description": "麟角閃耀和煦，蹄印留香大地，它的步履護佑萬民。"
  },


  { word: "sphinx", zh: "斯芬克斯", image: "https://i.pinimg.com/736x/4f/74/fc/4f74fc2ca2ff49b387c596ee426ecd6f.jpg", rarity: "稀有", category: "神話生物", description: "石躯默立沙漠，智慧深邃，謎語如風語般迴盪。" },

  { word: "hydra", zh: "九頭蛇", image: "https://i.pinimg.com/736x/f4/6f/d4/f46fd474083ce0173a67455d6caf028d.jpg", rarity: "超稀有", category: "神話生物", description: "每斬一頭，兩頭再生，深淵之水燃起不朽傳說。" },
 
 { word: "centaur", zh: "半人馬", image: "https://i.pinimg.com/736x/55/04/ff/5504ffd808518c8ccf581ccf51e37505.jpg", rarity: "普通", category: "神話生物", description: "半人馬多半都是勇猛善戰的暴烈戰士，他們可以快速的追擊敵人，也都擁有百步穿楊的神技。" },
  
{ word: "minotaur", zh: "牛頭人", image: "https://i.pinimg.com/736x/69/06/3e/69063e8d663e7508f6409ee8958bcc94.jpg", rarity: "稀有", category: "神話生物", description: "迷宮之心的守衛，怒吼如雷，角尖染血。" },
  
{ word: "griffin", zh: "獅鷲獸", image: "https://i.pinimg.com/736x/5a/3d/9f/5a3d9f4f7c66b77878f93bc392ab12f8.jpg", rarity: "稀有", category: "神話生物", description: "金羽展翅，獅身鷲首，天空與大地的守望者。" },

{
    "word": "Monkey D. Luffy",
    "zh": "蒙奇·D·魯夫",
    "image": "https://v1.pinimg.com/videos/mc/720p/61/ef/cf/61efcfc6ca73e2674c0b35cf4b84b2b3.mp4",
    "video": "https://youtu.be/LuFfY12345?si=abcXYZ",
    "youtube": "https://www.youtube.com/watch?v=LuFfY12345",
    "rarity": "超稀有",
    "category": "One Piece",
    "role": "Protagonist",
    "description": "永遠張開無限大笑容，像陽光般點燃夥伴的夢想，每一次伸長手臂，都是奔向自由的邀請。"
  },
  {
    "word": "Roronoa Zoro",
    "zh": "羅羅亞·索隆",
    "image": "https://v1.pinimg.com/videos/iht/720p/50/4d/45/504d450fae1ffc4668548f23a10f1be7.mp4",
    "video": "https://youtu.be/Z0r0Epic12?si=XYZfGh",
    "youtube": "https://www.youtube.com/watch?v=Z0r0Epic12",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Protagonist",
    "description": "三刀流的劍氣如颶風掃落葉，每次迷路都是冒險的序章，鋒芒與方向感同樣銳利。"
  },
  {
    "word": "Nami",
    "zh": "娜美",
    "image": "https://i.pinimg.com/736x/fb/f0/ff/fbf0ffb9f3b4eb857aa49721341ba9b0.jpg",
    "video": "https://youtu.be/N4mI09876?si=ghiJKL",
    "youtube": "https://www.youtube.com/watch?v=N4mI09876",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Protagonist",
    "description": "天氣與財富的雙料操盤手，掌中地圖比金幣還精準，颱風也要跟她算尾數。"
  },
  {
    "word": "Usopp",
    "zh": "烏索普",
    "image": "https://i.pinimg.com/736x/2b/4f/d1/2b4fd1ccf64d1156a5f5348acef6f668.jpg",
    "video": "https://youtu.be/UsOpP43210?si=jklMNO",
    "youtube": "https://www.youtube.com/watch?v=UsOpP43210",
    "rarity": "普通",
    "category": "One Piece",
    "role": "Protagonist",
    "description": "撒謊界的詩人，用誇張的謊言編織勇氣，狙擊精準到能打進夥伴的心房。"
  },
  {
    "word": "Sanji",
    "zh": "山治",
    "image": "https://i.pinimg.com/736x/5b/9b/1d/5b9b1df04f5891011138929fe938411c.jpg",
    "video": "https://youtu.be/SaNjI56789?si=stuVWX",
    "youtube": "https://www.youtube.com/watch?v=SaNjI56789",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Protagonist",
    "description": "鋼琴手的踢擊如交響樂章，對美食與美人一視同仁，熱情比火焰還燙。"
  },
  {
    "word": "Tony Tony Chopper",
    "zh": "托尼托尼·喬巴",
    "image": "https://v1.pinimg.com/videos/mc/720p/93/ff/fc/93fffc78ccf4d3836a023a178296bea5.mp4",
    "video": "https://youtu.be/ChOpPeR123?si=abcDEF",
    "youtube": "https://www.youtube.com/watch?v=ChOpPeR123",
    "rarity": "普通",
    "category": "One Piece",
    "role": "Protagonist",
    "description": "萌態與醫術並存，變身後的小鹿腿能踢走病痛，用愛治癒每一顆受傷的心。"
  },
  {
    "word": "Nico Robin",
    "zh": "妮可·羅賓",
    "image": "https://i.pinimg.com/736x/99/4b/8f/994b8fddd2e9a27da5bb669e095ee045.jpg",
    "video": "https://youtu.be/RoBiN24680?si=jklNOP",
    "youtube": "https://www.youtube.com/watch?v=RoBiN24680",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Protagonist",
    "description": "歷史的守護者，招手便能盛開花瓣雨，知識如詩，謎題如歌。"
  },
  {
    "word": "Franky",
    "zh": "佛朗基",
    "image": "https://i.pinimg.com/736x/01/35/ef/0135efddd8da6ab7446d3b5e4375a498.jpg",
    "video": "https://youtu.be/FrAnKy13579?si=stuVWX",
    "youtube": "https://www.youtube.com/watch?v=FrAnKy13579",
    "rarity": "普通",
    "category": "One Piece",
    "role": "Protagonist",
    "description": "鐵拳與機甲魂並行，隨心改造海賊船，自稱『SUPER』卻謙虛得像木頭。"
  },
  {
    "word": "Brook",
    "zh": "布魯克",
    "image": "https://i.pinimg.com/736x/6b/c2/e7/6bc2e7797a8e1b2c266fab71cf600a79.jpg",
    "video": "https://youtu.be/BrOoK86420?si=defGHI",
    "youtube": "https://www.youtube.com/watch?v=BrOoK86420",
    "rarity": "普通",
    "category": "One Piece",
    "role": "Protagonist",
    "description": "音樂骨骼通透，每次演奏都像在靈魂上打高爾夫；最愛冷笑話炸裂全場。"
  },
  {
    "word": "Jinbe",
    "zh": "吉貝爾",
    "image": "https://i.pinimg.com/736x/22/c6/1f/22c61f510f20104b98ba5181349f177a.jpg",
    "video": "https://youtu.be/JInBe13579?si=ghiJKL",
    "youtube": "https://www.youtube.com/watch?v=JInBe13579",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Protagonist",
    "description": "魚人空手道大師，豪爽如海浪，最愛一句『魚魚見真章』伴隨打擊。"
  },
  {
    "word": "Marshall D. Teach",
    "zh": "馬歇爾·D·蒂奇",
    "image": "https://i.pinimg.com/736x/01/23/45/blackbeard.jpg",
    "video": "https://youtu.be/BLaCkBeArD456?si=DEFUVW",
    "youtube": "https://www.youtube.com/watch?v=BLaCkBeArD456",
    "rarity": "超稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "在暗處編織陰謀，惡魔果實如糖果下肚；笑聲背後藏著吞天噬地的野心。"
  },
  {
    "word": "Donquixote Doflamingo",
    "zh": "唐吉訶德·多佛朗明哥",
    "image": "https://i.pinimg.com/736x/80/8c/bb/808cbb5a0ba5e82b46953eceef994884.jpg",
    "video": "https://youtu.be/DoFlAmInGo123?si=GHIJKL",
    "youtube": "https://www.youtube.com/watch?v=DoFlAmInGo123",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "絲線操控如舞台指揮，笑容如劇毒，將世界當做他的絢爛舞臺。"
  },
  {
    "word": "Sir Crocodile",
    "zh": "鱷魚先生",
    "image": "https://i.pinimg.com/736x/64/90/ac/6490ac0d2ca1dcd31e92750d56a1277e.jpg",
    "video": "https://youtu.be/CrOcOdIlE456?si=JKL012",
    "youtube": "https://www.youtube.com/watch?v=CrOcOdIlE456",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "沙漠之王的冷酷與陰謀並存，掌心乾坤袋藏著無盡陰影。"
  },
    {
    "word": "Rob Lucci",
    "zh": "羅布·路奇",
    "image": "https://i.pinimg.com/736x/05/19/59/051959bf03c88698aad2f38f858b8fa9.jpg",
    "video": "https://youtu.be/RoBlUcCi789?si=PQR567",
    "youtube": "https://www.youtube.com/watch?v=RoBlUcCi789",
    "rarity": "普通",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "CP9最強殺手，豹型格鬥如暗夜獵豹；一擊毀滅卻冷如冰霜。"
  },
  {
    "word": "Kaido",
    "zh": "凱多",
    "image": "https://i.pinimg.com/736x/e1/a5/7a/e1a57af4ee74b0799cff7c97320d3f4e.jpg",
    "video": "https://youtu.be/KaIdO98765?si=STU890",
    "youtube": "https://www.youtube.com/watch?v=KaIdO98765",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "自稱『世界最強生物』，醉酒如猛獸，拳拳帶雷霆之力，船身皆碎屑。"
  },
  {
    "word": "Charlotte Linlin",
    "zh": "夏洛特·玲玲",
    "image": "https://i.pinimg.com/736x/f8/08/f1/f808f15e697b60cf52b9d8b0c1be5f2b.jpg",
    "video": "https://youtu.be/BigMoM12345?si=VWX123",
    "youtube": "https://www.youtube.com/watch?v=BigMoM12345",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "掌管甜點與恐懼的女王，笑聲與飢餓並行，圓形臉蛋下是無盡飢渴。"
  },
  {
    "word": "Sakazuki (Akainu)",
    "zh": "赤犬·薩卡茲基",
    "image": "https://i.pinimg.com/736x/ba/be/5e/babe5e03cab6ff3216e8f771cae5596f.jpg",
    "video": "https://youtu.be/AkAiNu54321?si=YZA456",
    "youtube": "https://www.youtube.com/watch?v=AkAiNu54321",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "絕對正義的化身，熔岩在血液中流動；腳下每一步都是炙熱判決。"
  },
    {
    "word": "Bartholomew Kuma",
    "zh": "巴索羅繆·熊",
    "image": "https://i.pinimg.com/736x/f2/89/b2/f289b22892394ad6a757f8d18af15e6e.jpg",
    "video": "https://youtu.be/KuMa543210?si=EFG012",
    "youtube": "https://www.youtube.com/watch?v=KuMa543210",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "可以瞬間推開一切痛苦，卻用沉默構築深邃；拳風輕拂卻撕裂靈魂。"
 },
 {
    "word": "Sung Jin-Woo",
    "zh": "成振宇",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/47/b8/11/47b8113069fa508955e43192dfc113ec_720w.mp4",
    "video": "https://youtu.be/JinWoo123?si=XP123",
    "youtube": "https://www.youtube.com/watch?v=JinWoo123",
    "rarity": "超稀有",
    "category": "Solo Leveling",
    "role": "Protagonist",
    "description": "從最弱的獵人化身暗影君主，黑色披風下，死亡為他效忠。"
  },
{
  id: 20007,
  word: "Lennart Niermann",
  zh: "雷納特・尼爾曼",
  rarity: "普通",
  category: "Solo Leveling",
  image: "https://i.pinimg.com/736x/59/9a/4e/599a4e6abb900e7b32a5f6293e3e0fb6.jpg",
  role: "德國S級獵人",
  description: "實力堅強但謙虛，戰場上的穩定力量。"
},
{
  id: 20008,
  word: "Sung Il-Hwan",
  zh: "成一煥",
  rarity: "稀有",
  category: "Solo Leveling",
  image: "https://i.pinimg.com/736x/9e/82/a4/9e82a41fd2ea25a629c3de8e2b55425f.jpg",
  role: "主角之父",
  description: "神祕消失多年後歸來，背負著宇宙級的命運。"
},
{
  id: 20009,
  word: "Iron",
  zh: "鐵盾戰士",
  rarity: "普通",
  category: "Solo Leveling",
  image: "https://v1.pinimg.com/videos/iht/expMp4/7f/f3/47/7ff3477dfcc5db36806a118d90da4c38_720w.mp4",
  role: "影子坦克",
  description: "雖然常被打飛，但他永遠是前線最可靠的盾牌。"
},
  {
    "word": "Cha Hae-In",
    "zh": "車海印",
    "image": "https://i.pinimg.com/736x/a4/71/82/a47182b09ab48e35e6d3332fd1d2633a.jpg",
    "video": "https://youtu.be/ChaHae123?si=LOV3",
    "youtube": "https://www.youtube.com/watch?v=ChaHae123",
    "rarity": "稀有",
    "category": "Solo Leveling",
    "role": "Hunter",
    "description": "她以劍為舞，銀光閃爍；在靜默中守護，亦為唯一能聞見他的氣息。"
  },
   {
    "word": "Beru",
    "zh": "貝魯",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/f5/23/3f/f5233f78eea9822fb6fa3e5816e4888d_720w.mp4",
    "video": "https://youtu.be/Beru123?si=SHDW",
    "youtube": "https://www.youtube.com/watch?v=Beru123",
    "rarity": "超稀有",
    "category": "Solo Leveling",
    "role": "Shadow Soldier",
    "description": "曾為蟻王，今為影僕，忠誠如鐵，殺意如刃，他的咆哮讓敵人噤聲。"
  },
  {
    "word": "Thomas Andre",
    "zh": "湯瑪斯·安德烈",
    "image": "https://i.pinimg.com/736x/3a/4f/9d/3a4f9da27c77e4094ee5344928edd8b4.jpg",
    "video": "https://youtu.be/Thomas123?si=TANK",
    "youtube": "https://www.youtube.com/watch?v=Thomas123",
    "rarity": "稀有",
    "category": "Solo Leveling",
    "role": "National Level Hunter",
    "description": "肌肉山脈般的存在，一拳震城；美利堅的野獸，強悍無需多言。"
  },
  //魷魚遊戲類型
  {
    "word": "Red Light Doll",
    "zh": "紅綠燈娃娃",
    "image": "https://v1.pinimg.com/videos/mc/720p/a7/d1/03/a7d103ee9f859e6ed84c247e28e0f914.mp4",
    "rarity": "超稀有",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "她不需要開槍，光是轉頭的瞬間，就讓人心跳停止。"
  },
  {
    "word": "Oh Il-nam",
    "zh": "吳一男",
    "image": "https://v1.pinimg.com/videos/mc/720p/ed/b6/3b/edb63bd668271402274440efa5a586ff.mp4",
    "rarity": "超稀有",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "笑容可掬的老人，實則是遊戲的神。最殘酷的謎底，就藏在最溫柔的笑裡。"
  },
  {
    "word": "Seong Gi-hun",
    "zh": "成奇勳",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/32/33/1b/32331b2ca7e880ed431c66b9163977b5_720w.mp4",
    "rarity": "普通",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "賭徒、父親、生還者。他從深淵爬回來，只為證明，善良從未輸過。"
  },
  {
    "word": "Kang Sae-byeok",
    "zh": "姜曉",
    "image": "https://v1.pinimg.com/videos/iht/720p/07/c5/b1/07c5b12e9337a7cfa1f08ffa752f616f.mp4",
    "rarity": "稀有",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "她跨越邊界、吞下創傷，用寂靜的雙眼瞄準自由。"
  },
  {
    "word": "Cho Sang-woo",
    "zh": "曹尚佑",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/f1/ac/30/f1ac3057a40216b30917b179022d5664_720w.mp4",
    "rarity": "普通",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "他是高材生、策略家，也是為了生存願意犧牲一切的背叛者。"
  },
  {
    "word": "Front Man",
    "zh": "面具主管",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/f6/7c/c2/f67cc2321ff243c08f310906e8fb8664_t4.mp4",
    "rarity": "稀有",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "黑面具下是沉默的兄弟之痛。他不是機器，卻被制度編碼。"
  },
  {
    "word": "Han Mi-nyeo",
    "zh": "韓美女",
    "image": "https://v1.pinimg.com/videos/mc/720p/4b/61/41/4b614184506830a616f428164f00e68f.mp4",
    "rarity": "普通",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "她是高頻爆雷警報器，愛恨自由切換，戲精天花板。"
  },
  {
    "word": "Jang Deok-su",
    "zh": "張德秀",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/03/31/0b/03310ba64a4ee270582b09a3d8948f3c_720w.mp4",
    "rarity": "普通",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "黑道背景、短視近利，最終敗給樓高與重力的組合技。"
  },
  {
    "word": "VIP #1",
    "zh": "貴賓 #1",
    "image": "https://i.pinimg.com/736x/83/b2/90/83b29048175c161918294708ae2edd83.jpg",
    "rarity": "普通",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "有錢人無聊起來真的很恐怖。他們不看球賽，看人命翻滾。"
  },
  {
    "word": "Hwang Jun-ho",
    "zh": "黃俊昊",
    "image": "https://v1.pinimg.com/videos/mc/720p/1e/e5/04/1ee5044ab5ac4f1ae241a1672a031555.mp4",
    "rarity": "稀有",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "一名警察，潛入迷局，真相就在面具後的血緣裡崩塌。"
  },
  {
    "word": "VIP #2",
    "zh": "貴賓 #2",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/7e/3a/b4/7e3ab4ce6f3ced40b4caea91be084641_720w.mp4",
    "rarity": "普通",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "他認為人生是一場大型投注。他只是忘了下注時，人心也在賭桌上。"
  },
  {
    "word": "Masked Worker",
    "zh": "粉紅工人",
    "image": "https://v1.pinimg.com/videos/mc/720p/4e/d6/b4/4ed6b45b54a3229a1599be54133397b7.mp4",
    "rarity": "普通",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "執行命令、沒有名字。他們是規則的影子，也是人性消音器。"
  },
  {
    "word": "Glass Bridge Victim",
    "zh": "玻璃橋悲劇者",
    "image": "https://i.pinimg.com/736x/7d/af/32/7daf3244776792336caa0c287d159523.jpg",
    "rarity": "普通",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "一腳踩空，人生重啟。可惜沒有存檔點。"
  },
  {
    "word": "Dalgona Master",
    "zh": "椪糖關主",
    "image": "https://i.pinimg.com/originals/5b/91/b9/5b91b99bdb2ac981fa536dec08854a4f.gif",
    "rarity": "稀有",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "他不是甜點師，是甜蜜地獄的裁判。你抖一抖，命也碎一角。"
  },
  {
    "word": "Sae-byeok's Brother",
    "zh": "姜曉的弟弟",
    "image": "https://v1.pinimg.com/videos/mc/720p/2b/f3/f3/2bf3f3951370255b13695409d67ee618.mp4",
    "rarity": "普通",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "在孤兒院等待姊姊歸來，他的眼神裡藏著整部劇的溫柔。"
  },
  {
    "word": "Masked Square Leader",
    "zh": "方形面具領導",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/ab/cf/c6/abcfc6e6567de4d9eaebee0115155dc7_t4.mp4",
    "rarity": "普通",
    "category": "魷魚遊戲",
    "createdAt": "2025-07-25T00:00:00",
    "description": "指揮萬事、冷酷無情，是一條指令下的黑白世界。"
  },
  //都市傳說類型 (共13張)
  {
    "word": "Tomino Hell",
    "zh": "地獄的富江",
    "image": "https://v1.pinimg.com/videos/iht/720p/ec/b1/f3/ecb1f35cb3e518f81d38d5e3887bdeb8.mp4",
    "rarity": "超稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "她的名字在詩中迴盪，每個音節都是一根深入靈魂的針。有人說，看著她的眼睛太久，就會忘了自己曾是誰。——來自日本的都市傳說"
  },
  {
    "word": "Red Dressed Girl",
    "zh": "紅衣小女孩",
    "image": "https://i.pinimg.com/736x/c0/c1/0e/c0c10e002efb5860219aee1f73319ec7.jpg",
    "rarity": "超稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "她靜靜站在林間坡道，無聲地盯著鏡頭。紅衣不是她穿的，而是她死後，整片山林染上的顏色。——來自台灣的都市傳說"
  },
  {
    "word": "Inunaki Village",
    "zh": "犬鳴村",
    "image": "https://i.pinimg.com/736x/9e/25/2b/9e252b5eb8446c84adf7028bab99d8de.jpg",
    "rarity": "超稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "沒有信號、沒有出口，只有漫無止境的迷霧與凝視。傳說中走進村莊的人，會在第七天忘了怎麼走出來。——來自日本的都市傳說"
  },
  {
    "word": "Tsu Chan",
    "zh": "傳說中的電話少女",
    "image": "https://v1.pinimg.com/videos/mc/720p/61/18/c9/6118c9fc5a4568b5c13f6692fd9d23f4.mp4",
    "rarity": "普通",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "電話響起，你不自覺地接起。那頭傳來微弱的喘息聲，彷彿有雙手正從線路那端一寸寸伸出來。——來自日本的都市傳說"
  },
  {
    "word": "Slender Man",
    "zh": "瘦長鬼影",
    "image": "https://i.pinimg.com/736x/7c/73/ae/7c73ae24828439e7df98093acc822cda.jpg",
    "rarity": "超稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "他沒有臉，卻能吞噬記憶。他的手指無聲地伸入你夢中，留下如煙的恐懼。——來自美國的都市傳說"
  },
  {
    "word": "Bloody Mary",
    "zh": "血腥瑪麗",
    "image": "https://v1.pinimg.com/videos/mc/720p/a7/15/80/a71580ff1d781d614ac9201a84fe76b0.mp4",
    "rarity": "稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "鏡子是她的牢籠也是通道。若你喚她三次，她會用你的臉來走出來。——來自美國的都市傳說"
  },
  {
    "word": "Elevator Ritual",
    "zh": "電梯遊戲",
    "image": "https://i.pinimg.com/736x/85/fc/c2/85fcc2cecf1ce7c5dbdc4d651632f6fd.jpg",
    "rarity": "超稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "每個按鍵的組合都像一場儀式。如果你到達那層『不存在』的樓層，請不要讓她走進來。——來自韓國的都市傳說"
  },
  {
    "word": "Red Mask",
    "zh": "紅衣女鬼",
    "image": "https://i.pinimg.com/736x/1a/03/29/1a0329b4713fa4132cb2cd0255956c4c.jpg",
    "rarity": "稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "她遮住了毀容的臉，只為問你一句話。她不是要答案，她要你的一半臉。——來自韓國的都市傳說"
  },
  {
    "word": "Ghost Bridge",
    "zh": "女鬼橋",
    "image": "https://media.vogue.com.tw/photos/5e3a921cafa0b30008bc68d6/2:3/w_2560%2Cc_limit/3P9OFnaqH7CfL0hiiq4C-1240x1771.jpg",
    "rarity": "超稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "不管聽到什麼，都不要回頭。——來自台灣的都市傳說"
  },
  {
    "word": "Yushan Flyers",
    "zh": "玉山小飛俠",
    "image": "https://tse1.mm.bing.net/th/id/OIP.E2g7alF4sC1mDGqj2RArFgHaFO?r=0&pid=ImgDet&w=474&h=334&rs=1&o=7&rm=3",
    "rarity": "超稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "山霧裡浮出三個穿黃雨衣、戴斗笠的人影，走在你前方。他們不說話，只向前走。直到你發現，他們從沒踩過地面，也沒有影子。你轉身想叫隊友時，隊伍已經不見了。——來自台灣的都市傳說"
  },
  {
    "word": "Human-Faced Fish",
    "zh": "人面魚",
    "image": "https://ogre.natalie.mu/media/news/eiga/2019/1113/Jinmengyo_key.jpg?imwidth=750&imdensity=1",
    "rarity": "超稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "你靠近水池，那條魚緩緩游過來，浮出水面。牠張嘴閉嘴，像在說話，像在求救。直到你聽懂牠的嘴型，正在模仿你的名字。——來自台灣的都市傳說"
  },
  {
    "word": "Kuchisake Onna",
    "zh": "裂口女",
    "image": "https://i.pinimg.com/736x/d2/e7/fd/d2e7fdd1a5d55ac1f9c0565cd9d2337d.jpg",
    "rarity": "稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "她問你：我漂亮嗎？你無論怎麼回答，剪刀都會落下。——來自日本的都市傳說"
  },
  {
    "word": "Teke Teke",
    "zh": "手腳女",
    "image": "https://i.pinimg.com/736x/7f/56/32/7f5632578422e3806ab74c1b27711bd8.jpg",
    "rarity": "超稀有",
    "category": "都市傳說",
    "createdAt": "2025-07-24T00:00:00",
    "description": "她沒有下半身，靠手肘爬行。聲音像骨頭在地上刮──テケ…テケ…。你跑不過她。——來自日本的都市傳說"
  },

  


  // 未來都市類型 (共7張)
  { word: "neoncity", zh: "霓虹都市", image: "https://v1.pinimg.com/videos/iht/expMp4/d2/64/4c/d2644c89c62d9565c0b02167d5f21b73_720w.mp4", rarity: "稀有", category: "未來都市", description: "光影交織的街道，夢想與現實在霓虹中共舞。" },

  { word: "hovercar", zh: "懸浮車", image: "https://img.freepik.com/premium-photo/amazing-flying-car-combining-futuristic-technology_951992-2843.jpg", rarity: "稀有", category: "未來都市", description: "車輪消逝於街面，未來的律動在空中飛馳。" },

  { word: "cybertower", zh: "賽博塔", image: "https://img.freepik.com/premium-photo/a-futuristic-cityscape-illuminated-by-the-glow-of-computer-science-technology_349863-1434.jpg", rarity: "超稀有", category: "未來都市", description: "高聳入雲，霧化之光刷洗每層記憶。" },

  { word: "aiassistant", zh: "人工助手", image: "https://i.pinimg.com/736x/c1/59/4e/c1594eae920d39a96db2bbdde3a9682a.jpg", rarity: "稀有", category: "未來都市", description: "數據流中誕生的微笑，智慧比肩人心。" },

  { word: "dronepolice", zh: "警用無人機", image: "https://i.pinimg.com/736x/b2/3b/50/b23b50b98baa51f0bda5550e2e3ae475.jpg", rarity: "普通", category: "未來都市", description: "金屬翅膀巡弋，秩序的守護者從天而降。" },

  { word: "skybridge", zh: "空中廊橋", image: "https://image.archiposition.com/2022/07/71658314181.jpg", rarity: "稀有", category: "未來都市", description: "連結高樓的透明之路，踩夢踏歌而行。" },
  { word: "holomarket", zh: "全息市場", image: "https://thumbs.dreamstime.com/b/holographic-interface-displaying-blueprints-301152804.jpg", rarity: "普通", category: "未來都市", description: "數位擺攤，買賣停留於光與影的交界。" },
 

 { word: "anglerfish", zh: "鮟鱇魚", image: "https://i.pinimg.com/736x/2a/17/9f/2a179fe2e62c21580a9e9c10309fd6e9.jpg", "video": "https://youtu.be/Beru123?si=SHDW",
rarity: "普通", category: "深海奇觀", description: "燈籠魚的本名是鮟鱇魚。這種魚的長度在80釐米左右，身體扁平，而且很柔軟。它的徒步很大，呈圓盤狀，尾巴則很細小，下頜吐出，兩頜上有大量尖銳的牙齒，鰓孔很大，體表沒有鱗片。由於它不常遊動，捕食機會少，所以需要用到頭頂的小燈籠來引誘獵物。" },

  { word: "vampiresquid", zh: "吸血烏賊", image: "https://v1.pinimg.com/videos/mc/720p/d6/df/4f/d6df4f88fb6292fe280b10ed815510d4.mp4", video: "https://youtu.be/FEyfesjentE?si=wskJuIbiqdZCg5aj", rarity: "超稀有", category: "深海奇觀", description: "披著黑紅披風，游走於生與死的邊界之間。" },

  { word: "gulper eel", zh: "翻鬥鰻", image: "https://v1.pinimg.com/videos/iht/720p/a9/f4/4f/a9f44f40d8c7419fa88fe6b0fefc2112.mp4", video: "https://youtu.be/vYyizW-U1fQ?si=C8wFixE4b0yUdYbb", rarity: "稀有", category: "深海奇觀", description: "一口吞噬整片夜色，肚裡藏著無垠的深海夢魘。" },

  
  // ====== MP4 影片作為主要媒體的卡片範例 ======
  // 這些卡片使用 MP4 檔案作為 image 屬性，直接顯示影片而不是圖片

   { word: "oarfish", zh: "王帶魚", image: "https://v1.pinimg.com/videos/mc/720p/eb/ba/52/ebba5295e7239568d0b26d3379179d3b.mp4", rarity: "超稀有", category: "深海奇觀", description: "長如銀絲的身軀，在深海中緩緩舞動，彷若古老的水晶旗幟。" },

  { word: "fangtooth", zh: "尖齒魚", image: "https://v1.pinimg.com/videos/mc/720p/25/72/b8/2572b8292a1d8156d960419c14ccdedd.mp4", rarity: "稀有", category: "深海奇觀", description: "比身軀更長的利牙，吞噬每一道入侵的陰影。" },

  { word: "barreleye", zh: "桶眼魚", image: "https://v1.pinimg.com/videos/mc/720p/4e/ff/ed/4effed897ff54e012ac641eca106970b.mp4", rarity: "稀有", category: "深海奇觀", description: "透明的頭蓋，映照著深海最隱秘的星辰" },

  { word: "tripod fish", zh: "三腳魚", image: "https://v1.pinimg.com/videos/iht/720p/ab/64/70/ab64708b32d99cf277f3473b48f8fcae.mp4", video: "https://youtu.be/ZjZFWxS1c-A?si=azLtpa9DJSI_h-Wt", rarity: "普通", category: "深海奇觀", description: "三隻纖細支腳，穩立於海床，靜候命運的浪潮。" },
  { word: "viperfish", zh: "毒蛇魚", image: "https://i.redd.it/h91daiv3q9811.jpg", video: "https://youtu.be/_ax2Vp77hA0?si=dVRtBy5ySlJ0V3Oq", rarity: "稀有", category: "深海奇觀", description: "血紅的觸手，刺破黑暗的瞬間，獵物已無處可逃。" },

  { word: "hatchetfish", zh: "斧魚", image: "https://media.australian.museum/media/dd/images/Giant_Hatchetfish_Argyropelecus_gigas.width-800.d69124e.jpg",video: "https://youtu.be/9jpMq8Jttn8?si=YUhe4CPS2QU38RTK",rarity: "普通", category: "深海奇觀", description: "銀色身板薄如刃鋒，橫切深淵中最沉重的寂靜。" },

  { word: "ghost_shark", zh: "幽靈鯊", image: "https://v1.pinimg.com/videos/mc/720p/c7/b8/64/c7b8649cf671d05d03baa7ff70fc94f9.mp4", video: "https://youtube.com/shorts/BOrGeyVEm3c?si=0krWO1_phQ72sBhD", rarity: "超稀有", category: "深海奇觀", description: "身形若有若無，幽魂般掠過前方，留下一縷寒意。" },

  { word: "pelican_eel", zh: "鵜鶘鰻", image: "https://v1.pinimg.com/videos/mc/720p/f1/5a/b9/f15ab9b54b0b474f37c3ce25b706c154.mp4", video: "https://youtu.be/tInHUbz3B_Y?si=QDdpsrwyb9RxFp_e", rarity: "超稀有", category: "深海奇觀", description: "大口似鵜鶘，吞噬周遭一切光明與陰影。" },
  { word: "blobfish", zh: "黏魚", image: "https://thumbs.dreamstime.com/b/blobfish-fish-sits-ocean-ai-generated-photo-k-portrait-front-view-hd-image-background-323155083.jpg", rarity: "普通", category: "深海奇觀", description: "如軟泥般的身形，卻保存著最原始的生命密碼。" },

  { word: "frilled_shark", zh: "褶鯊", image: "https://v1.pinimg.com/videos/mc/720p/be/71/ce/be71ce3a79fcb0c8d79da5e99496fbd7.mp4", rarity: "超稀有", category: "深海奇觀", description: "古老如化石，卻依舊在黑暗中低吟遠古的詩篇。" },

  { word: "sixgill_shark", zh: "六鰓鯊", image: "https://v1.pinimg.com/videos/mc/720p/f0/57/99/f05799aaa886097e4fb8c1f4f1754d36.mp4", rarity: "超稀有", category: "深海奇觀", description: "六瓣呼吸孔，如深海的節拍，跳動著生命的韻律。" },

    { word: "snailfish", zh: "蝸牛魚", image: "https://v1.pinimg.com/videos/mc/720p/49/db/34/49db348ddea02508d76c3af804c7c160.mp4",rarity: "普通", category: "深海奇觀", description: "柔軟如蝸殼，感知著海底最微弱的顫動。" },

  { word: "lantern_shark", zh: "燈籠鯊",
image: "https://v1.pinimg.com/videos/mc/720p/3a/c1/34/3ac134bae81c23dfb7b48d7f9d76f849.mp4", 
video: "https://youtu.be/FAFQ181E5aU?si=jdb4MoMDnapB0Mum", 
rarity: "普通", category: "深海奇觀", 
description: "沿側散發微光，化作深海的流動火炬。" },

   { word: "deepwater cardinalfish", zh: "深水朱雀魚", image: "https://www.meerwasser-lexikon.de/imgHaupt/47469_rngM7aCXFJ.jpg",  video: "https://youtu.be/Ixs8uiaTzZs?si=Egk5Wr4dcZuy5R40",rarity: "普通", category: "深海奇觀", description: "猩紅如焰，照亮深海最孤寂的角落。" },

  { word: "longnosed_chimaera", zh: "長吻軛鰻", image: "https://i.pinimg.com/736x/08/19/8b/08198bb65418719e1b6024d1f748bee8.jpg", video: "https://youtu.be/_6gbGcY8bgM?si=E-oCgvH4tx1SqHud", rarity: "稀有", category: "深海奇觀", description: "長鼻探索深海秘密，優雅游弋於海底峽谷間。" },

  { word: "blackdragon", zh: "黑龍魚", image: "https://v1.pinimg.com/videos/mc/720p/13/83/75/138375e45aab914b240180401026b139.mp4", rarity: "稀有", category: "深海奇觀", description: "身披鱗甲如夜，游動間釋放寒光龍息。" },

  { word: "oni", zh: "鬼", image: "https://v1.pinimg.com/videos/mc/720p/e2/33/f6/e233f6a2d66cfa681ca1f6cab3fa6af8.mp4", rarity: "稀有", category: "鏡世妖光", description: "赤角鋼牙，揮舞鐵棒，惡鬼嘶吼震碎人間怨靈。", multiplier: 3.0, cost: 25 },
  { word: "tengu", zh: "天狗", image: "https://v1.pinimg.com/videos/iht/expMp4/4d/6c/3a/4d6c3a674dd7c1be86f19ac9ce64db1e_720w.mp4", rarity: "稀有", category: "鏡世妖光", description: "長喙紅面，掌風如颶，俯瞰山林守護或淩遲旅人。", multiplier: 2.5, cost: 20 },
  { word: "kappa", zh: "河童", image: "https://i.pinimg.com/736x/3b/b6/cc/3bb6ccabb0c1f83e8e484ed51aee6e17.jpg", rarity: "稀有", category: "鏡世妖光", description: "頭頂水窪，戲水調皮，又可奪人靈魂於川澤之間。", multiplier: 1.5, cost: 10 },
  { word: "jorogumo", zh: "絡新婦", image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1686744764/catalog/1668686441780506624/y8id46izjublc5bbg69q.jpg", rarity: "稀有", category: "鏡世妖光", description: "蛛絲編織紅色誘惑，妄圖吞噬入網的凡人。", multiplier: 2.5, cost: 20 },
  { word: "umibozu", zh: "海坊主", image: "https://img.3dmgame.com/uploads/allimg/170218/135409E19-28.jpg", rarity: "超稀有", category: "鏡世妖光", description: "黑影駕雲，掀起巨浪，只因船上一句咒語。", multiplier: 3.0, cost: 25 },
  { word: "bakekujira", zh: "化鯨", image: "https://i.pinimg.com/736x/cb/eb/79/cbeb79b75f0094867d714d84975a97e5.jpg", rarity: "稀有", category: "鏡世妖光", description: "鬼魂鯨影漂浮於海面，帶來不祥的枯骨暴雨。", multiplier: 3.0, cost: 25 },

  { word: "pompeii", zh: "龐貝城", image: "https://www.thoughtco.com/thmb/pw-6GHrHibOpAXCx71U1RyQ4HVs=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-137124369-ef433749f1184029b4420f3fb6f731ea.jpg", rarity: "稀有", category: "失落城市", description: "火山灰掩埋了榮華，如今沉默的石徑訴說亡靈的低語。", multiplier: 1.5, cost: 10 },

  { word: "machu_picchu", zh: "馬丘比丘", image: "https://1.bp.blogspot.com/-JzRS-D_azj8/U2ZIC_o-qqI/AAAAAAAAQIg/8vc8x9L8Pn0/s1600/MACCHU+PICCHU.gif", rarity: "超稀有", category: "失落城市", description: "雲霧繚繞的石階，昔日王朝的輝煌在山谷間回響。", multiplier: 2.0, cost: 15 },

  { word: "petra", zh: "佩特拉", image: "https://v1.pinimg.com/videos/mc/720p/42/fe/8d/42fe8d83fadf687817220dc3d7d52bb3.mp4", rarity: "超稀有", category: "失落城市", description: "玫瑰色的石窟建築，刻畫出納巴泰人的秘密與傳奇。", multiplier: 2.0, cost: 15 },

  { word: "angkor_wat", zh: "吳哥窟", image: "https://th.bing.com/th/id/OIP.zDsdl8bdoEKYTTSZtGjTKwHaHa?w=200&h=200&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", rarity: "超稀有", category: "失落城市", description: "石雕神像與森林藤蔓共舞，每一尊微笑都是千年凝視。", multiplier: 2.0, cost: 15 },

  { word: "tikal", zh: "提卡爾", image: "https://cdn.britannica.com/30/9030-050-9EB64E8E/Great-Plaza-stelae-Guatemala-Tikal-Temple-Jaguar.jpg?w=300", rarity: "稀有", category: "失落城市", description: "高聳金字塔隱於熱帶雨林，猶如古瑪雅人的天空階梯。", multiplier: 1.5, cost: 10 },

  { word: "catalhoyuk", zh: "差塔霍伊克", image: "https://th.bing.com/th/id/R.535ef1ea01267a08323e31ebcecdef92?rik=QZjc8%2fqED%2fdADQ&pid=ImgRaw&r=0", rarity: "普通", category: "失落城市", description: "泥磚築就的聚落，將新石器時代的生活印跡凝固於時光中。", multiplier: 1.0, cost: 5 },

  { word: "dodo", zh: "渡渡鳥", image: "https://i.pinimg.com/736x/44/81/2b/44812b141c9382e7e4840f333ddf87b0.jpg", rarity: "稀有", category: "滅絕動物", description: "無法飛翔的巨鳥，於毛里求斯的樹影間永遠消逝。", multiplier: 1.5, cost: 10 },
  { word: "passenger pigeon", zh: "旅鴿", image: "https://i.pinimg.com/736x/70/96/00/709600748ef8156a77310ae257678122.jpg", rarity: "普通", category: "滅絕動物", description: "曾遮天蔽日的鴿群，如今只剩沉靜的羽毛傳說。", multiplier: 1.0, cost: 5 },

  { word: "tasmanian tiger", zh: "袋狼", image: "https://i.pinimg.com/736x/c2/b3/12/c2b3126945b4cf166652da002a8f0fb5.jpg", rarity: "稀有", category: "滅絕動物", description: "斑紋似鬼魅，於塔斯馬尼亞的夜幕中消散無蹤。", multiplier: 1.5, cost: 10 },
  {
    "word": "Hawaiian Honeycreeper",
    "zh": "夏威夷吸蜜鳥",
    "image": "https://img.shoplineapp.com/media/image_clips/6076bc864f751b00260a2c14/original.jpg?1618394246",
    "rarity": "超稀有",
    "category": "滅絕動物",
    "description": "夏威夷王族的象徵，羽毛太美了!因為濫捕而滅絕，最後一隻在 2004 年靜靜離開。"
  },
  {
    "word": "Barbary Lion",
    "zh": "巴巴里獅",
    "image": "https://v1.pinimg.com/videos/mc/720p/56/91/06/569106666db89488485d23bccd82095f.mp4",
    "rarity": "超稀有",
    "category": "滅絕動物",
    "description": "牠們的鬃毛像火焰燃燒在北非的雪山之巔，曾是羅馬競技場的主角，也是摩洛哥皇室的圖騰。最後一隻野生巴巴里獅，於1922年在阿特拉斯山脈被獵殺。從此，帝王只存在於傳說。"
  },
  { word: "woolly_mammoth", zh: "長毛象", image: "https://v1.pinimg.com/videos/iht/expMp4/c4/19/04/c41904a269472a3bbd417a715e112b5c_720w.mp4", rarity: "超稀有", category: "滅絕動物", description: "冰原巨獸的足跡，永遠凍結在史前的霜雪裡。", multiplier: 2.0, cost: 15 },

  { word: "howl", zh: "霍爾", image: "https://www.bing.com/th/id/OGC.8bc2ba6bdc5bc6f1429defacf7e2ac91?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmegapx-assets.dcard.tw%2fimages%2ff0f51b38-17ea-4208-bb05-54f6a88c5311%2ffull.jpeg&ehk=N2IH8foq7dfoimQyUreZdh3w7dP8F9hl1%2bcW9Dg9CNc%3d", rarity: "超稀有", category: "霍爾城堡", description: "魔法師霍爾，紅髮飛揚如火，心底藏著守護與逃避的勇氣。", multiplier: 2.0, cost: 15 },
  { word: "sophie", zh: "蘇菲", image: "https://cdn0-t17.techbang.com/system/attached_images/2016/08/197525/original/3fdf352ac6c8b1e389fa913bf7b26bc0.gif?1472199669", rarity: "稀有", category: "霍爾城堡", description: "溫柔理髮師，被詛咒成老太婆，卻以堅韌與愛化解一切魔障。", multiplier: 1.5, cost: 10 },
  
{ word: "calcifer", 
zh: "卡爾西法", 
image: "https://cdn2.ettoday.net/images/1475/1475456.gif", 
rarity: "超稀有", 
 "video": "https://youtu.be/Guxx_KTm_6M?si=tcUTrHn8iVF74OGx",
category: "霍爾城堡", 
description: "被封印的火焰惡魔，暖心又鬧騰，與霍爾共築漂浮城堡之心臟。", multiplier: 2.0, cost: 15 },
  
{ word: "markl", zh: "馬克魯", image: "https://v1.pinimg.com/videos/mc/720p/c3/6c/52/c36c524e2ab0a7db7ad839b8fb15a077.mp4", rarity: "稀有", category: "霍爾城堡", description: "霍爾的小徒弟，懷抱憧憬，學習魔法的第一步，如晨光般清新。", multiplier: 1.5, cost: 10 },
  
{ word: "moving castle", zh: "移動城堡", image: "https://www.bing.com/th/id/OGC.100976d66bad27aed1176837c74f3927?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f7b2x9yAkhXL6o%2fgiphy.gif&ehk=TQDkDOKcqMcNvYBRHYLBIKMRlj4qwzN66CLF07toEVw%3d", rarity: "超稀有", category: "霍爾城堡", description: "歪歪扭扭的奇幻建築，跟隨卡爾西法的火焰心跳，於荒野間漫遊。", multiplier: 2.0, cost: 15 },

  { word: "turnip head", zh: "蘿蔔頭", image: "https://www.bing.com/th/id/OGC.36148dda67e003f76e1fa6c7dc07497e?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2f64.media.tumblr.com%2f0de0f68d887dbdf39a3f56dbce5da728%2ftumblr_p85y1ofTlN1rejibwo3_540.gifv&ehk=dQAukMvob0zOaakhc0VMA%2b5NpidAvhHE7jTIP7h5q0Y%3d", rarity: "稀有", category: "霍爾城堡", description: "被詛咒的守門番薯頭，沉默而忠誠，直到真愛之吻破除咒語。", multiplier: 1.5, cost: 10 },
  { word: "saber toothed_tiger", zh: "劍齒虎", image: "https://64.media.tumblr.com/43d8772aba4cb34dde9b09a247de49fc/tumblr_nwhj8jBoqI1rx2ovqo1_400.gifv", rarity: "超稀有", category: "滅絕動物", description: "尖牙如劍，曾縱橫草原，今成傳說囈語。", multiplier: 2.0, cost: 15 },
  { word: "great auk", zh: "大海雀", image: "https://alchetron.com/cdn/great-auk-fd757280-ba58-4de3-99f1-b66ca50f837-resize-750.jpeg", rarity: "普通", category: "滅絕動物", description: "笨重無翼的海鳥，只剩沉默石岸上的幽影。", multiplier: 1.0, cost: 5 },
  { word: "moa", zh: "巨鳥莫亞", image: "https://natgeo.nikkeibp.co.jp/atcl/news/19/070100383/ph_thumb.jpg", rarity: "普通", category: "滅絕動物", description: "新西蘭巨型鳥類，草原風聲還能聽見它的悠長呼嘯。", multiplier: 1.0, cost: 5 },
  { word: "great zimbabwe", zh: "大津巴布韋", image: "https://th.bing.com/th/id/OIP.xSVd-KX4-GjYf0WznXO3ZwHaEU?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2", rarity: "稀有", category: "失落城市", description: "壯闊石牆無需砂漿，見證古非洲帝國的神秘力量。", multiplier: 1.5, cost: 10 },
  { word: "Aries", zh: "白羊座", image: "https://cdn.pixabay.com/photo/2023/05/25/05/15/ai-generated-8016343_1280.jpg", rarity: "稀有", category: "星座神話", description: "象徵勇氣與新生的火焰公羊，引領冒險的旅程。" },
  { word: "Taurus", zh: "金牛座", image: "https://img.freepik.com/premium-photo/illustrations-zodiac-sign-taurus-starry-sky_1125254-4287.jpg", rarity: "普通", category: "星座神話", description: "宙斯化身白牛，帶來愛與力量的傳奇。" },
  { word: "Gemini", zh: "雙子座", image: "https://th.bing.com/th/id/OIP.gACtpvNld0fRVGTg-ikBSAHaE7?r=0&w=626&h=417&rs=1&pid=ImgDetMain&cb=idpwebpc2", rarity: "超稀有", category: "星座神話", description: "雙胞胎的羈絆，映照永恆的友情與犧牲。" },
  { word: "Cancer", zh: "巨蟹座", image: "https://th.bing.com/th/id/OIP.giukpII0lDXsHM1oPblyegHaHa?r=0&w=2000&h=2000&rs=1&pid=ImgDetMain&cb=idpwebpc2", rarity: "稀有", category: "星座神話", description: "赫拉的殉職巨蟹，忠誠而英勇。" },
  { word: "Leo", zh: "獅子座", image: "https://static.vecteezy.com/system/resources/previews/023/505/071/large_2x/backdrop-of-sacred-zodiac-leo-symbols-astrology-alchemy-magic-sorcery-and-fortune-telling-generative-ai-digital-painting-zodiac-sign-leo-on-the-starry-sky-close-up-photo.jpg", rarity: "超稀有", category: "星座神話", description: "奈緹阿凱里昂巨獅，力量與榮耀的化身。" },
  { word: "Virgo", zh: "處女座", image: "https://as1.ftcdn.net/v2/jpg/05/73/61/84/1000_F_573618446_UjuvtpXdlEaGGcMMJ8kKkafB4W9iGCHl.jpg", rarity: "普通", category: "星座神話", description: "農業女神的化身，純潔與豐饒的象徵。" },
  { word: "Libra", zh: "天秤座", image: "https://i.pinimg.com/736x/c9/82/ce/c982cee66d74e3feeaf08a3605bbd077.jpg", rarity: "超稀有", category: "星座神話", description: "正義女神的天秤，平衡與公平的守護者。" },
  { word: "Scorpio", zh: "天蠍座", image: "https://th.bing.com/th/id/OIP.W6-uoh_XtswdUyVcXjJcmAHaE7?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2", rarity: "普通", category: "星座神話", description: "為阿耳忒彌斯獻身的巨蠍，毒性與變革同在。" },
  { word: "Sagittarius", zh: "射手座", image: "https://th.bing.com/th/id/OIP.EMD6bga2n570V3AxSuELFgHaE8?r=0&w=2048&h=1366&rs=1&pid=ImgDetMain&cb=idpwebpc2", rarity: "稀有", category: "星座神話", description: "半人馬導師，智慧與仁慈的傳承者。" },
  { word: "Capricorn", zh: "摩羯座", image: "https://www.2spirits.com/wp-content/uploads/2023/08/Capricorn-Zodiac-Sign-1.jpg", rarity: "超稀有", category: "星座神話", description: "山羊魚怪的堅韌，跨越天海的冒險家。" },
  { word: "Aquarius", zh: "水瓶座", image: "https://punnypulse.com/wp-content/uploads/2024/06/Aquarius-Puns.jpg", rarity: "普通", category: "星座神話", description: "甘露仙子的甘霖，滋潤世間乾涸的心田。" },
  { word: "Pisces", zh: "雙魚座", image: "https://i.pinimg.com/originals/35/71/e4/3571e4dd72c04bb69fc2bff767e60b4c.jpg", rarity: "稀有", category: "星座神話", description: "兩條魚的團結，愛與逃脫的交織。" },
  { word: "Zeus", zh: "宙斯", image: "https://viking.style/wp-content/uploads/2024/05/God-Zeus-768x384.jpg", rarity: "超稀有", category: "希臘神話", description: "眾神之王，雷霆萬鈞，掌控天界的主宰。" },
  { word: "Hera", zh: "赫拉", image: "https://i.etsystatic.com/50423120/r/il/99a417/5822929447/il_1080xN.5822929447_22rt.jpg", rarity: "稀有", category: "希臘神話", description: "婚姻與家庭的守護女神，威儀莊嚴。" },
  { word: "Poseidon", zh: "波賽頓", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c8937e03-8e98-45e4-b348-f5feacc0373d/dh2rdi9-04a95663-6554-4b95-af14-1179ed272557.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4OTM3ZTAzLThlOTgtNDVlNC1iMzQ4LWY1ZmVhY2MwMzczZFwvZGgycmRpOS0wNGE5NTY2My02NTU0LTRiOTUtYWYxNC0xMTc5ZWQyNzI1NTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ErI4gVC8jGLZBPfiw3ojJCU2AchbX9VsfxDVZV0Dnzc", rarity: "超稀有", category: "希臘神話", description: "海洋之神，駕馭海浪與地震的三叉戟主人。" },
  { word: "Demeter", zh: "德墨忒耳", image: "https://i.pinimg.com/736x/5e/55/f3/5e55f31c21d96c2055d39d07fa72eea2.jpg", rarity: "普通", category: "希臘神話", description: "豐饒與農業女神，四季輪轉的恩賜者。" },
  { word: "Athena", zh: "雅典娜", image: "https://i.pinimg.com/originals/45/09/04/45090436c02480c7d472774ba38bf682.jpg", rarity: "超稀有", category: "希臘神話", description: "智慧與戰略女神，雅典城的守護聖靈。" },
  { word: "Apollo", zh: "阿波羅", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/952f171b-68e0-4c92-b133-a8fb4b5234d6/dhv05hk-c643a9f6-34f3-44de-9cfb-339ec5a2dce6.jpg/v1/fill/w_894,h_894,q_70,strp/greek_god___apolo_by_anvadi_dhv05hk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzk1MmYxNzFiLTY4ZTAtNGM5Mi1iMTMzLWE4ZmI0YjUyMzRkNlwvZGh2MDVoay1jNjQzYTlmNi0zNGYzLTQ0ZGUtOWNmYi0zMzllYzVhMmRjZTYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.A7Y6Iw1Ku1Q-IH79j_a7iwzHSrJJ7pMmmFa-NGhFP8I", rarity: "稀有", category: "希臘神話", description: "光明與音樂之神，金色琴聲迴盪天際。" },
  { word: "Artemis", zh: "阿耳忒彌斯", image: "https://as2.ftcdn.net/v2/jpg/07/11/84/53/1000_F_711845312_FrFR9WTehywtZl3bO20csc48OSmqKRcU.jpg", rarity: "普通", category: "希臘神話", description: "狩獵與月光女神，林間的孤傲獵手。" },
  { word: "Ares", zh: "阿瑞斯", image: "https://i.pinimg.com/originals/e6/bc/f7/e6bcf7f460a50f2c2700122554c4386e.png", rarity: "超稀有", category: "希臘神話", description: "戰爭之神，戰場上無畏的血色狂潮。" },
  { word: "Aphrodite", zh: "阿芙蘿黛蒂", image: "https://img.freepik.com/premium-photo/timeless-beauty-capturing-ancient-greek-goddess-athena-ultrarealistic-splendor_960911-22038.jpg?w=2000", rarity: "普通", category: "希臘神話", description: "愛與美之女神，魅惑眾生的玫瑰光芒。" },
  { word: "Hermes", zh: "赫耳墨斯", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https://substack-post-media.s3.amazonaws.com/public/images/49e898d3-33e8-4355-8049-5b32b6fa2695_1024x1024.png", rarity: "超稀有", category: "希臘神話", description: "眾神的信使，靈巧的翅膀帶來消息。" },
  { word: "Hades", zh: "哈迪斯", image: "https://th.bing.com/th/id/OIP.jh5PoCyBjLDW-PQlC9_1dAHaHa?r=0&w=1024&h=1024&rs=1&pid=ImgDetMain&cb=idpwebpc2", rarity: "稀有", category: "希臘神話", description: "冥界之王，黑暗王座下的靜謐與威嚴。" },
  { word: "Hephaestus", zh: "赫淮斯托斯", image: "https://th.bing.com/th/id/OIP.c9pf5fdxkTIC4f58Wwk7SQHaHa?r=0&w=1024&h=1024&rs=1&pid=ImgDetMain&cb=idpwebpc2", rarity: "普通", category: "希臘神話", description: "火與鍛造之神，熔爐中鑄造神器的匠師。" },
  { word: "Dionysus", zh: "狄俄倪索斯", image: "https://v1.pinimg.com/videos/iht/expMp4/2f/74/86/2f7486b129d2a2ce1412fc5a10fb441b_720w.mp4", rarity: "稀有", category: "希臘神話", description: "酒神與狂歡之主，葡萄美酒與歡笑的化身。" },
  { word: "Persephone", zh: "珀耳塞福涅", image: "https://i.pinimg.com/736x/03/1c/8b/031c8b61c7e91eafb34684f914a01fbd.jpg", rarity: "超稀有", category: "希臘神話", description: "冥后與春之女神，往返陰陽界的季節女王。" },
  { word: "Hestia", zh: "赫斯提亞", image: "https://i.etsystatic.com/10441898/c/2143/2143/0/0/il/b01774/5669551924/il_600x600.5669551924_g09a.jpg", video: "https://youtu.be/7ySaAMY7Xp4?si=NkuFFnR3JegMOmZh", rarity: "普通", category: "希臘神話", description: "爐灶與家園女神，溫暖與團聚的象徵。" },
  { word: "Eros", zh: "伊洛斯", image: "https://avid-archer.com/wp-content/uploads/2024/02/Eros-in-a-garden-e1726349447451-1140x652.webp", rarity: "稀有", category: "希臘神話", description: "愛神之子，金箭一射即中，牽動心弦。" },
  { word: "Nike", zh: "勝利女神", image: "https://v1.pinimg.com/videos/iht/expMp4/ba/3d/d0/ba3dd0263c45185e0f207e8d041ba247_720w.mp4", rarity: "稀有", category: "希臘神話", description: "翱翔戰場之上，將勝利之冠賜予英雄。" },
  { word: "Helios", zh: "赫利俄斯", image: "https://i.pinimg.com/736x/22/fd/8b/22fd8bc4665fe11ead3baee06e14d4ac.jpg", rarity: "超稀有", category: "希臘神話", description: "日輪駕馭者，每日馳騁天際，光芒萬丈。" },
  { word: "Selene", zh: "賽勒涅", image: "https://i.pinimg.com/736x/4b/2d/00/4b2d001991452b7d9ff1c5524b6f3582.jpg", rarity: "稀有", category: "希臘神話", description: "月亮女神，銀光灑落人間的溫柔使者。" },
  { word: "Pan", zh: "潘神", image: "https://i.pinimg.com/736x/35/27/c0/3527c046c44623635f46fe44eda5ef6a.jpg", rarity: "普通", category: "希臘神話", description: "牧神與山林守護者，笛聲迴盪野外。" },
 
   { word: "Mei Kusakabe", zh: "草壁梅", image: "https://v1.pinimg.com/videos/mc/720p/62/4e/0c/624e0cb25c7971e373c8a06251804608.mp4", rarity: "普通", category: "宮崎駿", description: "龍貓中的活潑小女孩，好奇心驅使她探索森林。" },
  { word: "Kiki", zh: "奇奇", image: "https://v1.pinimg.com/videos/iht/expMp4/ff/6e/ab/ff6eabf2e9c5ff12cad2acdd9059bfca_720w.mp4", rarity: "稀有", category: "宮崎駿", description: "魔女宅急便的年輕魔女，以飛行麂皮掃帚送達夢想。" },
  { word: "Porco Rosso", zh: "紅豬", image: "https://i.pinimg.com/736x/1f/6e/82/1f6e82ccd8279eb742906d149f4d6bca.jpg", rarity: "超稀有", category: "宮崎駿", description: "紅豬中的飛行王牌，豬鼻下的英雄靈魂。" },

  { word: "San", zh: "珊", image: "https://i.pinimg.com/736x/52/0a/aa/520aaa5a4a63ea572599e4f77519482f.jpg", rarity: "稀有", category: "宮崎駿", description: "幽靈公主中被狼群撫養的少女，捍衛森林靈魂。" },
  { word: "Chihiro Ogino", zh: "荻野千尋", image: "https://example.com/images/chihiro.png", rarity: "超稀有", category: "宮崎駿", description: "千與千尋的勇敢少女，在神祕浴場中尋找自我。" },
  { word: "Ponyo", zh: "波妞", image: "https://v1.pinimg.com/videos/mc/720p/a2/d1/be/a2d1befe13c06d51781e61315a08fcbb.mp4", rarity: "稀有", category: "宮崎駿", description: "崖上的波妞，小金魚渴望成為人類的奇幻化身。" },
  { word: "Jiro Horikoshi", zh: "堀越二郎", image: "https://v1.pinimg.com/videos/mc/720p/f3/c5/87/f3c587b2ff33102c8e3b113c84290060.mp4", rarity: "超稀有", category: "宮崎駿", description: "風起中的飛機設計師，用夢想雕塑天空。" },
   { word: "Haku", zh: "白龍", image: "https://i.pinimg.com/736x/cd/4b/43/cd4b43b29e3d480862161aa5f0f704da.jpg", rarity: "超稀有", category: "宮崎駿", description: "千尋的守護者，化作龍形帶來救贖。" },
  { word: "No-Face", zh: "無臉男", image: "https://media1.tenor.com/m/i0wDIPF02mMAAAAd/no-face-ghost.gif", video: "https://youtu.be/EavUeCBDTPo?si=JBeH-F_99niAiJga", rarity: "稀有", category: "宮崎駿", description: "如幽影般流動，吞噬寂寞卻渴望被看見的神秘存在。" }

];

// ===自動為稀有與超稀有卡片加上高等級卡牌效果===
(function enhanceRareCards() {
  const rareEffects = [
    { type: 'time_extend', value: 30, description: '增加答題時間 30 秒' },
    { type: 'energy_restore', value: 1, description: '恢復 1 點能量' },
    { type: 'shield', value: 1, description: '抵擋一次答錯懲罰' }
  ];
  const epicEffects = [
    { type: 'time_freeze', value: 20, description: '暫停答題計時 20 秒' },
    { type: 'energy_restore', value: 2, description: '恢復 2 點能量' },
    { type: 'shield', value: 2, description: '抵擋兩次答錯懲罰' },
    { type: 'score_multiply', value: 1.5, description: '本局分數加倍 1.5 倍' }
  ];
  baseCards.forEach(card => {
    if ((card.rarity === '稀有' || card.rarity === '超稀有') && !card.effect) {
      if (card.rarity === '稀有') {
        const idx = Math.floor(Math.random() * rareEffects.length);
        card.effect = { ...rareEffects[idx] };
      } else if (card.rarity === '超稀有') {
        const idx = Math.floor(Math.random() * epicEffects.length);
        card.effect = { ...epicEffects[idx] };
      }
    }
  });
})();

// ===============================
// 2. 稀有度設定（用來決定 cost 與 stats 計算倍率）
// ===============================
const rarityConfig = {
  "普通":   { multiplier: 1.0,  cost: 5  },   // 普通卡：倍率 1、花費星數 5
  "稀有":   { multiplier: 1.5,  cost: 10 },   // 稀有卡：倍率 1.5、花費星數 10
  "超稀有": { multiplier: 2.0,  cost: 15 }    // 超稀有卡：倍率 2、花費星數 15
};


// ===============================
// 3. 自動 map 生成「完整版」的 allCards
//    每張卡都會多出：active, leader, stats, id, cost
// ===============================
const allCards = baseCards.map((card, index) => {
  // 取出該稀有度的設定（如果沒找到就用「普通」）
  const cfg = rarityConfig[card.rarity] || rarityConfig["普通"];

  // 隨機生成 stats：HP / ATK / RCV
  // 你可以自行調整下面的公式，以下只是示範
  const baseHp  = Math.round(1000 * cfg.multiplier + Math.random() * 200);
  const baseAtk = Math.round(500  * cfg.multiplier + Math.random() * 100);
  const baseRcv = Math.round(200  * cfg.multiplier + Math.random() * 50);

  // 根據稀有度決定技能冷卻（cd）
  let baseCd;
  if (card.rarity === "超稀有")      baseCd = 10;
  else if (card.rarity === "稀有")   baseCd = 12;
  else /* 普通 */                   baseCd = 15;

  // 為沒有效果的卡片添加預設效果
  let cardEffect = card.effect;
  if (!cardEffect) {
    // 根據稀有度分配預設效果
    if (card.rarity === '超稀有') {
      const epicEffects = [
        { type: 'time_extend', value: 90, description: '增加答題時間 90 秒' },
        { type: 'time_freeze', value: 45, description: '暫停計時器 45 秒' },
        { type: 'energy_restore', value: 3, description: '恢復 3 點能量' },
        { type: 'shield', value: 2, description: '抵擋兩次答錯懲罰' },
        { type: 'score_multiply', value: 3, description: '答對時獲得三倍分數' },
        { type: 'skip_level', value: 1, description: '直接跳過當前樓層' }
      ];
      cardEffect = epicEffects[index % epicEffects.length];
    } else if (card.rarity === '稀有') {
      const rareEffects = [
        { type: 'time_extend', value: 60, description: '增加答題時間 60 秒' },
        { type: 'hint', value: 2, description: '排除兩個錯誤選項' },
        { type: 'energy_restore', value: 2, description: '恢復 2 點能量' },
        { type: 'combo_protect', value: 2, description: '答錯不中斷連擊（持續 2 次）' },
        { type: 'shield', value: 1, description: '抵擋一次答錯懲罰' },
        { type: 'score_multiply', value: 2, description: '答對時獲得雙倍分數' }
      ];
      cardEffect = rareEffects[index % rareEffects.length];
    } else {
      // 普通卡片
      const commonEffects = [
        { type: 'time_extend', value: 30, description: '增加答題時間 30 秒' },
        { type: 'hint', value: 1, description: '排除一個錯誤選項' },
        { type: 'energy_restore', value: 1, description: '恢復 1 點能量' },
        { type: 'combo_protect', value: 1, description: '答錯不中斷連擊' },
        { type: 'shield', value: 1, description: '抵擋一次答錯懲罰' },
        { type: 'score_multiply', value: 1.5, description: '答對時獲得 1.5 倍分數' }
      ];
      cardEffect = commonEffects[index % commonEffects.length];
    }
  }

  return {
    // ==== 保留原本欄位 ====
    word:        card.word,
    zh:          card.zh,
    image:       card.image,
    video:       card.video,        // 保留影片屬性
    video_url:   card.video_url,    // 保留影片URL屬性
    rarity:      card.rarity,
    category:    card.category,
    description: card.description,
    effect:      cardEffect, // 使用預設效果或原有效果

    // ==== 新增的「主動技能」欄位（預設空值，之後可手動填） ====
    active: {
      name:  "",
      desc:  "",
      cd:    baseCd,
      maxLv: false
    },

    // ==== 新增的「隊長技能」欄位（預設空值，之後可手動填） ====
    leader: {
      name: "",
      desc: ""
    },

    // ==== 新增的「能力值」欄位 ====
    stats: {
      hp:     baseHp,
      atk:    baseAtk,
      rcv:    baseRcv,
      cd:     baseCd,
      type:   card.category, // 暫時直接拿 category 當 type
      lvl:    1,             // 初始就 1 級
      maxLvl: 99,            // 最高 99
      expPct: 0              // 經驗進度 0%
    },

    // ==== 新增的「id」與「cost」欄位 ====
    id:   index + 1,    // id 從 1 開始依序編號
    cost: cfg.cost      // 依稀有度決定花費星數
  };
});

// （可選）測試用：在開發時期可以把它印到 console 看看
console.log(">> 已生成 allCards，共", allCards.length, "張卡片");

// 將 baseCards 和 allCards 暴露到 window 物件，供其他頁面使用
if (typeof window !== 'undefined') {
  window.baseCards = baseCards;
  window.allCards = allCards;
  console.log(">> window.baseCards 已設定，長度:", window.baseCards.length);
  console.log(">> window.allCards 已設定，長度:", window.allCards.length);
} else {
  console.log(">> 非瀏覽器環境，無法設定 window.allCards");
}

function canStartNextFloor() {
  const cooldown = localStorage.getItem('towerCooldown');
  if (cooldown && Date.now() < parseInt(cooldown)) {
    alert('請等待冷卻時間結束再挑戰下一關！');
    return false;
  }
  // 檢查是否已通過上一層
  // ...（根據您的樓層資料結構判斷）
  return true;
}

function startChallenge() {
  if (!canStartNextFloor()) return;
  showChallengeAnimation('start');
  // ...原本開始挑戰的邏輯
}

function onChallengeEnd(success) {
  if (success) {
    // 設定冷卻
    localStorage.setItem('towerCooldown', Date.now() + 3*60*60*1000);
    // 解鎖下一層
    // ...
    showChallengeAnimation('end');
  } else {
    showChallengeAnimation('fail');
  }
  // ...顯示結果
}
