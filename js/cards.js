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
    "effect": {
      "type": "water_slash",
      "value": 60,
      "description": "釋放水之呼吸攻擊，造成 60 點傷害"
    }
  },
  {
    "word": "Nezuko Kamado",
    "zh": "竈門禰豆子",
    "image": "https://v1.pinimg.com/videos/mc/720p/ad/f0/26/adf0261f4d3736169c69a75a6086d942.mp4",
    "video": "https://youtu.be/gtgIlIXWEhI?si=zsc2qwQnuPuYxRQW",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "description": "沉睡中的力量蘊藏著爆血之術，她是人與鬼之間的橋樑。",
    "effect": {
      "type": "blood_explosion",
      "value": 70,
      "description": "爆血技能造成大範圍爆擊傷害"
    }
  },
  {
    "word": "Zenitsu Agatsuma",
    "zh": "我妻善逸",
    "image": "https://v1.pinimg.com/videos/mc/720p/99/70/72/9970720eef5bed34585a1923195065ee.mp4",
    "video": "https://youtu.be/Wb3JeBItZfw",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "description": "懦弱外表下隱藏雷之閃電，熟睡中才能展現真本事。",
    "effect": {
      "type": "lightning_strike",
      "value": 80,
      "description": "睡著後釋放雷之呼吸，單體高傷害"
    }
  },
  {
    "word": "Inosuke Hashibira",
    "zh": "嘴平伊之助",
    "image": "https://v1.pinimg.com/videos/mc/720p/46/5b/d8/465bd8a56df1bc823c6e9713ce97b6af.mp4",
    "video": "https://youtu.be/R5Bgo1Vc7qk",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "description": "野性衝鋒，雙刀亂舞，是戰場上的野獸靈魂。",
    "effect": {
      "type": "beast_slash",
      "value": 50,
      "description": "使用獸之呼吸攻擊敵人兩次"
    }
  },
  {
    "word": "Giyu Tomioka",
    "zh": "冨岡義勇",
    "image": "https://v1.pinimg.com/videos/mc/720p/45/83/8f/45838f18ebc76c608be5a90605192a62.mp4",
    "video": "https://youtu.be/wvjFAHQG6E0?si=FGVBEpHqnG_hCB3Q",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "description": "寡言如水，穩重如山，以壓倒性氣場守護弱者。",
    "effect": {
      "type": "counter",
      "value": 30,
      "description": "成功防禦後立即反擊造成 30 點傷害"
    }
  },
  {
    "word": "Kyojuro Rengoku",
    "zh": "煉獄杏壽郎",
    "image": "https://v1.pinimg.com/videos/mc/720p/41/61/ca/4161cac55946a4eeb4031af03995e572.mp4",
    "video": "https://youtu.be/1Ayj9FKKfp0?si=H1rDAWBeHa5lFe4x",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "description": "炎柱之魂不熄，炙熱的劍道燃燒惡鬼與絕望。",
    "effect": {
      "type": "flame_pillar",
      "value": 100,
      "description": "施展炎之呼吸奧義，大範圍高傷"
    }
  },
  {
    "word": "Shinobu Kocho",
    "zh": "胡蝶忍",
    "image": "https://v1.pinimg.com/videos/mc/720p/13/85/d9/1385d991a1fa7a2850af0a5ea8d6beb8.mp4",
    "video": "https://youtu.be/X7OC4B5VXpU?si=zQVOIjw3pGA8wjnp",
    "rarity": "稀有",
    "category": "鬼滅之刃",
    "description": "毒與舞蹈交織成蝶，笑容背後藏著致命毒刃。",
    "effect": {
      "type": "poison_dance",
      "value": 10,
      "description": "使敵方中毒，每回合損失 10 點"
    }
  },
{
    "word": "Pikachu",
    "zh": "皮卡丘",
    "image": "https://v1.pinimg.com/videos/mc/720p/47/49/d2/4749d201d95280c1af14b35fb1efb467.mp4",
    "video": "https://youtu.be/FUNo4aB8xFE?si=napJxJUCkmW6OObI",
    "rarity": "超稀有",
    "category": "寶可夢",
    "description": "電力十足的夥伴，黃毛閃電，戰場上的小雷神。",
    "effect": {
      "type": "electric_shock",
      "value": 60,
      "description": "使敵方陷入麻痺，造成 60 點傷害"
    }
  },
  {
    "word": "Charizard",
    "zh": "噴火龍",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/33/7b/8d/337b8d5a608afe3cf0f4a3520c2853bd_720w.mp4",
    "video": "https://youtu.be/QoFdXuHn3_M?si=g-yMZ1_L40vcjol1",
    "rarity": "超稀有",
    "category": "寶可夢",
    "description": "烈焰高飛，氣場壓倒性的火系終極戰士。",
    "effect": {
      "type": "flame_burst",
      "value": 90,
      "description": "噴出火焰攻擊敵方全體"
    }
  },
  {
    "word": "Bulbasaur",
    "zh": "妙蛙種子",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/68/1d/a8/681da8f23f2c584bc1ef8531b912aead_720w.mp4",
    "video": "https://youtu.be/LnqAHTWXORw?si=EKm465UsyVYqpFBh",
    "rarity": "超稀有",
    "category": "寶可夢",
    "description": "植物系新手好選擇，吸收陽光蓄勢待發。",
    "effect": {
      "type": "leech_seed",
      "value": 15,
      "description": "持續吸取敵人生命"
    }
  },
  {
    "word": "Squirtle",
    "zh": "傑尼龜",
    "image": "https://i.pinimg.com/736x/0c/d1/7c/0cd17ca2898df1977cfaafa51776b84e.jpg",
    "video": "hhttps://youtu.be/xFHCunY4Gwo?si=SiF649huYInm0DC0",
    "rarity": "普通",
    "category": "寶可夢",
    "description": "小小龜殼防禦力驚人，水槍攻擊清涼又致命。",
    "effect": {
      "type": "water_gun",
      "value": 30,
      "description": "用水槍攻擊單一敵人"
    }
  },
  {
    "word": "Jigglypuff",
    "zh": "胖丁",
    "image": "https://fanart.fanabyss.com/499/Jigglypuff-106.png",
    "video": "https://youtu.be/--lrn-klYzY?si=qv_Wt0BcJBiXSoyS",
    "rarity": "普通",
    "category": "寶可夢",
    "description": "可愛外表包藏迷人歌聲，一曲入魂讓人沉睡。",
    "effect": {
      "type": "sing",
      "value": 1,
      "description": "使敵方睡眠 1 回合"
    }
  },
  {
    "word": "Gengar",
    "zh": "耿鬼",
    "image": "https://img.3dmgame.com/uploads/images/news/20240920/1726810390_549833.gif",
    "video": "https://youtu.be/KTaWqOpfEBM?si=E2iAHKAnhh03RlCp",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "陰影裡的狡詐笑聲，詭譎中帶著致命一擊。",
    "effect": {
      "type": "shadow_ball",
      "value": 70,
      "description": "放出暗影球造成傷害並可能降低特防"
    }
  },
  {
    "word": "Snorlax",
    "zh": "卡比獸",
    "image": "https://img.freepik.com/fotos-premium/angelic-snorlax-obra-maestra-hiperrealista-estilo-anime-ultra-alta-definicion-8k-resoluti_983420-156742.jpg",
    "video": "https://youtu.be/weK5iY-u5vo?si=TCP5njVNueYpjPkR",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "沉睡的巨獸，當牠睜開眼，對手也快要閉上眼。",
    "effect": {
      "type": "body_slam",
      "value": 80,
      "description": "大範圍衝撞攻擊並可能造成麻痺"
    }
  },
  {
    "word": "Eevee",
    "zh": "伊布",
    "image": "https://i.pinimg.com/736x/f8/7a/cb/f87acb86cf92d51847c1b9873a52ec4a.jpg",
    "video": "https://youtu.be/SuV3bEYQWeg?si=nFvkdC50RgJDk08M",
    "rarity": "普通",
    "category": "寶可夢",
    "description": "進化可能無限，未來由你選擇。",
    "effect": {
      "type": "adapt",
      "value": 1,
      "description": "根據戰況變換屬性加成"
    }
  },
  {
    "word": "Lucario",
    "zh": "路卡利歐",
    "image": "https://tse4.mm.bing.net/th/id/OIP.ENJ25G4c52L_AgbJSTm14gHaJ4?r=0&cb=thvnext&w=774&h=1032&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/69D0sa09LLU?si=ZBpEIikMzyt95RBA",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "波導之力聚於一身，拳拳到肉又充滿智慧。",
    "effect": {
      "type": "aura_sphere",
      "value": 75,
      "description": "無視閃避，必中招式攻擊"
    }
  },
  {
    "word": "Gardevoir",
    "zh": "沙奈朵",
    "image": "https://i.pinimg.com/736x/f6/37/ca/f637ca45044eee7db89cc9da47037840.jpg",
    "video": "https://youtu.be/rUR4K9MeEZk?si=6Wbe_ctgTeV_hwvG",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "守護之心，使用念力守護與攻擊並重。",
    "effect": {
      "type": "psychic",
      "value": 65,
      "description": "造成念力傷害並可能降低敵方特攻"
    }
  },

   {
    "word": "Yuji Itadori",
    "zh": "虎杖悠仁",
    "image": "https://tse1.mm.bing.net/th/id/OIP.njZQzrCZP-rPRuPLn3cQ-gHaLH?r=0&cb=thvnext&w=1080&h=1620&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/vvtIX9fPwsk?si=u-FRDBLEWgCqrqMK",
    "rarity": "稀有",
    "category": "咒術迴戰",
    "description": "吞下兩面宿儺的手指後仍堅守人性，拳頭傳遞正義與信念。",
    "effect": {
      "type": "black_flash",
      "value": 70,
      "description": "施展黑閃，對敵人造成爆擊性傷害"
    }
  },
  {
    "word": "Megumi Fushiguro",
    "zh": "伏黑惠",
    "image": "https://i.pinimg.com/736x/40/a3/20/40a32004d84d0e88369d676c7fc9c357.jpg",
    "video": "https://youtu.be/3qd-IjE_7Vs?si=lMAgArF5RHwo2_pW",
    "rarity": "稀有",
    "category": "咒術迴戰",
    "description": "沉穩的影法術師，能召喚式神制敵，深藏強大潛力。",
    "effect": {
      "type": "shikigami",
      "value": 2,
      "description": "召喚 2 隻式神協助作戰"
    }
  },
  {
    "word": "Nobara Kugisaki",
    "zh": "釘崎野薔薇",
    "image": "https://i.pinimg.com/736x/28/84/45/2884450a90ea1fb4d6b0e9c23076c413.jpg",
    "video": "https://youtu.be/41etewJwITI?si=YVP3US49BPM7dhTa",
    "rarity": "普通",
    "category": "咒術迴戰",
    "description": "戰鬥美學的化身，咒釘與鎚子敲出痛快一擊。",
    "effect": {
      "type": "resonance",
      "value": 40,
      "description": "使用共鳴術式造成間接傷害"
    }
  },
  {
    "word": "Satoru Gojo",
    "zh": "五條悟",
    "image": "https://v1.pinimg.com/videos/mc/720p/53/5a/b3/535ab3a98f8f2e24b1bf333f6b2fb025.mp4",
    "video": "https://youtu.be/OBrDE0WyAP4?si=5LfpdnHq5Tf-HFL-",
    "rarity": "超稀有",
    "category": "咒術迴戰",
    "description": "六眼無敵，無下限咒術讓他成為最強咒術師。",
    "effect": {
      "type": "infinity",
      "value": 999,
      "description": "無限防禦，1 回合內免疫所有攻擊"
    }
  },
  {
    "word": "Sukuna",
    "zh": "兩面宿儺",
    "image": "https://v1.pinimg.com/videos/mc/720p/56/c9/d0/56c9d091fc4397ca5d4007c18ce336de.mp4",
    "video": "https://youtu.be/rYXih2N84QE?si=gzlLoSfZtlGIlBye",
    "rarity": "超稀有",
    "category": "咒術迴戰",
    "description": "千年前的詛咒王，恐怖與力量的象徵。",
    "effect": {
      "type": "domain_expansion",
      "value": 100,
      "description": "展開領域，對敵方全體造成重大傷害"
    }
  },
  {
    "word": "Kento Nanami",
    "zh": "七海建人",
    "image": "https://i.pinimg.com/736x/1d/b9/ce/1db9ceddd2ff53f87fabdb01af896d60.jpg",
    "video": "https://youtu.be/TDdOPn7X7WI?si=j3ZNlH8-PHDjufKG",
    "rarity": "稀有",
    "category": "咒術迴戰",
    "description": "穩重冷靜，七三術式是他對戰鬥效率的極致詮釋。",
    "effect": {
      "type": "ratio_strike",
      "value": 60,
      "description": "七三術式，精準斬擊造成固定高傷"
    }
  },
  {
    "word": "Toge Inumaki",
    "zh": "狗卷棘",
    "image": "https://i.pinimg.com/736x/01/49/46/014946034b327c708ca7be80a2b3f628.jpg",
    "video": "https://youtu.be/q9OjDw_KXoc?si=RmNEio_izKMLbQ-m",
    "rarity": "普通",
    "category": "咒術迴戰",
    "description": "語言就是武器，他的咒言操控強大且危險。",
    "effect": {
      "type": "cursed_speech",
      "value": 1,
      "description": "命令敵人停止行動 1 回合"
    }
  },
  {
    "word": "Maki Zenin",
    "zh": "禪院真希",
    "image": "https://i.pinimg.com/736x/c6/71/a6/c671a632a8d1dfaf1401bbdf1e0664c3.jpg",
    "video": "https://youtu.be/zv5lApSubRw?si=AcEsKzqS8WqFpNLR",
    "rarity": "普通",
    "category": "咒術迴戰",
    "description": "身無咒力卻擁有超凡肉體，武器戰鬥專家。",
    "effect": {
      "type": "weapon_mastery",
      "value": 50,
      "description": "使用咒具連續攻擊造成高物理傷害"
    }
  },
  {
    "word": "Panda",
    "zh": "熊貓",
    "image": "https://www.hlj.com/productimages/mov/mov61916_0.jpg",
    "video": "https://youtu.be/FmxmQEaHxyE?si=rU2M7yZtBC1I4fVs",
    "rarity": "普通",
    "category": "咒術迴戰",
    "description": "咒骸中的異類，擁有多種核心的戰鬥巨熊。",
    "effect": {
      "type": "core_shift",
      "value": 1,
      "description": "切換核心改變戰鬥型態"
    }
  },
  {
    "word": "Yuta Okkotsu",
    "zh": "乙骨憂太",
    "image": "https://v1.pinimg.com/videos/mc/720p/b2/e5/8e/b2e58e7244b8dec266e035bb333b724b.mp4",
    "video": "https://youtu.be/TBVqMhl_vdM?si=b95e0ULbuEOit61s",
    "rarity": "超稀有",
    "category": "咒術迴戰",
    "description": "擁有特級咒靈理香加持，潛力無限的天才。",
    "effect": {
      "type": "rika_summon",
      "value": 80,
      "description": "召喚理香造成巨大打擊並提升自身防禦"
    }
  },
{
    "word": "Gon Freecss",
    "zh": "小傑",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/60/0f/6a/600f6a6e9ede11fb1ab7babcc4869227_720w.mp4",
    "video": "https://youtu.be/fZCOwFtlbIA?si=g9TY5M-6MUNO_aVC",
    "rarity": "超稀有",
    "category": "獵人",
    "description": "純真與力量並存，為友情與正義不惜一切。",
    "effect": {
      "type": "nen_punch",
      "value": 100,
      "description": "將所有念集中於拳頭造成爆炸性物理傷害"
    }
  },
  {
    "word": "Killua Zoldyck",
    "zh": "奇犽",
    "image": "https://v1.pinimg.com/videos/iht/expMp4/7e/bf/bb/7ebfbbb1ced7f42f3dd845486618adfd_720w.mp4",
    "video": "https://youtu.be/m_V7rNR04yg?si=gLKBWhDsClLZBpX5",
    "rarity": "超稀有",
    "category": "獵人",
    "description": "暗殺家族出身，電光閃現間決勝負。",
    "effect": {
      "type": "godspeed",
      "value": 80,
      "description": "以神速移動斬擊敵人，提升閃避率"
    }
  },
  {
    "word": "Kurapika",
    "zh": "酷拉皮卡",
    "image": "https://v1.pinimg.com/videos/iht/720p/75/eb/0f/75eb0f7df849a3e1c40e1c43541eafe3.mp4",
    "video": "https://youtu.be/t9JjGBHOq9Q?si=4VokVXPLDMQM_qjC",
    "rarity": "超稀有",
    "category": "獵人",
    "description": "鎖鍊鎖住仇恨，燃燒著緋紅雙眼的復仇者。",
    "effect": {
      "type": "chain_judgment",
      "value": 60,
      "description": "審判鎖鏈限制敵人行動並造成傷害"
    }
  },
  {
    "word": "Leorio Paradinight",
    "zh": "雷歐力",
    "image": "https://lh3.googleusercontent.com/mmq-nTs56oVT21h6T8VaOPF_sy53dhLuGVzJOYomS9t6pQP5-d-dvcYja3uBcphVtegYwhfsLPLyYmXnGpnsymHnihNGw6krs3lQrIx0HK_DcQ=w400-s0",
    "video": "https://youtu.be/dkVlX4oXBuA?si=sIK6hBzt4w8quXuq",
    "rarity": "普通",
    "category": "獵人",
    "description": "粗中有細的熱血醫生，拳頭與情義並行。",
    "effect": {
      "type": "telepunch",
      "value": 40,
      "description": "瞬間打擊遠處敵人，造成中等物理傷害"
    }
  },
  {
    "word": "Hisoka",
    "zh": "西索",
    "image": "https://v1.pinimg.com/videos/mc/720p/e2/dd/02/e2dd028e1a57a6579da716111e958cab.mp4",
    "video": "https://youtu.be/iDyon3z1KP8?si=rg8VvtmMvJub51_6",
    "rarity": "超稀有",
    "category": "獵人",
    "description": "變化系殺戮魔術師，詭譎莫測、危險又迷人。",
    "effect": {
      "type": "bungee_gum",
      "value": 70,
      "description": "用愛的口香糖束縛敵人並彈回攻擊"
    }
  },
  {
    "word": "Isaac Netero",
    "zh": "尼特羅",
    "image": "https://wallpapercave.com/wp/wp12542469.jpg",
    "video": "https://youtu.be/wk961M-EoRk?si=n_1pdGAj-aDyjVnC",
    "rarity": "稀有",
    "category": "獵人",
    "description": "最強獵人之一，百式觀音如神降臨。",
    "effect": {
      "type": "100_type",
      "value": 120,
      "description": "百式觀音猛攻，造成連擊致命傷害"
    }
  },
  {
    "word": "Meruem",
    "zh": "梅路艾姆",
    "image": "https://i.ytimg.com/vi/Ce7KBNMNqpk/maxresdefault.jpg",
    "video": "https://youtu.be/9jiqcnwrsuk?si=GdR7ER1pRSKKE52O",
    "rarity": "稀有",
    "category": "獵人",
    "description": "蟻王之尊，智慧與力量的巔峰存在。",
    "effect": {
      "type": "royal_power",
      "value": 130,
      "description": "王之壓制，對敵人造成極大範圍傷害"
    }
  },
  {
    "word": "Neferpitou",
    "zh": "貓女比特",
    "image": "https://tse2.mm.bing.net/th/id/OIP.i42sci52rbmoQYAyNTXRoQAAAA?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/EFOjQ4bBbKQ?si=6DS2voxcUzRwf7Z4",
    "rarity": "稀有",
    "category": "獵人",
    "description": "蟻王近衛軍之一，醫術與戰力兼備的恐怖存在。",
    "effect": {
      "type": "puppeteer",
      "value": 60,
      "description": "操控屍體作戰並回復己方生命"
    }
  },
  {
    "word": "Shaiapouf",
    "zh": "夏伊亞普夫",
    "image": "https://i.pinimg.com/736x/a2/a8/0b/a2a80b5cf09c322701255472c1e4ee0a.jpg",
    "video": "https://youtu.be/EXAMPLE_POUF",
    "rarity": "普通",
    "category": "獵人",
    "description": "優雅陰狠，擅長操弄與操縱人心的近衛軍。",
    "effect": {
      "type": "hypnosis",
      "value": 30,
      "description": "使敵人進入混亂狀態 2 回合"
    }
  },
  {
    "word": "Knuckle Bine",
    "zh": "納克爾",
    "image": "https://cdn.myanimelist.net/images/characters/2/572045.jpg",
    "video": "https://youtu.be/EXAMPLE_KNUCKLE",
    "rarity": "普通",
    "category": "獵人",
    "description": "重情義的拳鬥念使，以念獸收債為戰術核心。",
    "effect": {
      "type": "interest",
      "value": 20,
      "description": "念獸累積攻擊後爆擊，造成雙倍傷害"
    }
  },
  {
    "word": "Biscuit Krueger",
    "zh": "比司吉",
    "image": "https://go_service.aieasypic.com/?url=https:%2F%2Fimage.civitai.com%2FxG1nkqKTMzGDvpLrqFT7WA%2F0bbc4c02-d479-4f7f-b984-f187a6ada1bb%2Fwidth%3D600%2F1004049.jpeg&type=jpeg&width=512&quality=80",
    "video": "https://youtu.be/EXAMPLE_BISKY",
    "rarity": "稀有",
    "category": "獵人",
    "description": "外表是小女孩，實際是肌肉爆棚的資深高手。",
    "effect": {
      "type": "true_form",
      "value": 90,
      "description": "變身真身後提升攻擊與防禦"
    }
  },
  
  {
    "word": "Red Blood Cell",
    "zh": "紅血球",
    "image": "https://tse1.mm.bing.net/th/id/OIP.O8X88pWM4-mog43Y0iYzCQHaEK?r=0&w=1366&h=768&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/Onm6pGz2_bg?si=gX5LEfFgMpt2zQkl",
    "rarity": "普通",
    "category": "工作細胞",
    "description": "迷路但熱心的氧氣快遞員，奔波於身體各地。",
    "effect": {
      "type": "oxygen_delivery",
      "value": 50,
      "description": "為隊伍恢復少量能量，並提升回合速度"
    }
  },
  {
    "word": "White Blood Cell",
    "zh": "白血球",
    "image": "https://n.sinaimg.cn/sinacn22/212/w2048h3764/20180811/5396-hhqtaww9980903.jpg",
    "video": "https://youtu.be/-mxIf7hQ5aA?si=Qr9qmfE8BO1RnEm1",
    "rarity": "普通",
    "category": "工作細胞",
    "description": "冷酷外表下有著溫柔靈魂，專責清除入侵病原。",
    "effect": {
      "type": "pathogen_slayer",
      "value": 90,
      "description": "對病毒類敵人造成高額傷害"
    }
  },
  {
    "word": "Platelet",
    "zh": "血小板",
    "image": "https://th.bing.com/th/id/R.31792651328069b769768351ce054b42?rik=ROc3PjaQiMgxHg&pid=ImgRaw&r=0",
    "video": "https://youtu.be/-mxIf7hQ5aA?si=u6WT8HUiiMBRuFg3",
    "rarity": "超稀有",
    "category": "工作細胞",
    "description": "超人氣的可愛修補小隊長，總能鼓舞全隊。",
    "effect": {
      "type": "cute_repair",
      "value": 100,
      "description": "修補我方防禦並提升全體士氣"
    }
  },
  {
    "word": "Killer T Cell",
    "zh": "殺手T細胞",
    "image": "https://www.1999.co.jp/itbig66/10669341a5.jpg",
    "video": "https://youtu.be/Hb2foEvXfMI?si=j7FFTey52kX4AP4l",
    "rarity": "稀有",
    "category": "工作細胞",
    "description": "暴走熱血的戰士，專門殲滅被感染的細胞。",
    "effect": {
      "type": "berserk_strike",
      "value": 85,
      "description": "對敵人造成爆擊，若目標為感染體則加倍"
    }
  },
  {
    "word": "Macrophage",
    "zh": "巨噬細胞",
    "image": "https://tse4.mm.bing.net/th/id/OIP.rnxEGzSVxzo4zAFbJ0YG1AHaKH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/NelZa-fJF7o?si=HKleqgdjE50I1vI2",
    "rarity": "超稀有",
    "category": "工作細胞",
    "description": "穿著洋裝優雅地用菜刀解決入侵者。",
    "effect": {
      "type": "cleansing_slash",
      "value": 95,
      "description": "清掃全體敵人狀態，造成高額斬擊"
    }
  },
  {
    "word": "Memory Cell",
    "zh": "記憶細胞",
    "image": "https://tse1.explicit.bing.net/th/id/OIP.MGRvGdZaJuTJ8jl1O5NRigHaHZ?r=0&w=1024&h=1022&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/EXAMPLE_MEMORY",
    "rarity": "稀有",
    "category": "工作細胞",
    "description": "總覺得預知了一切，實際偶爾準確。",
    "effect": {
      "type": "future_vision",
      "value": 70,
      "description": "提前識破敵方技能，降低傷害並反擊"
    }
  },
  {
    "word": "Helper T Cell",
    "zh": "輔助性T細胞",
    "image": "https://tse2.mm.bing.net/th/id/OIP.rg0TVxgnIfk6dtwIney9iAAAAA?r=0&w=320&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/EXAMPLE_HELPERT",
    "rarity": "稀有",
    "category": "工作細胞",
    "description": "指揮官型角色，負責協調免疫行動。",
    "effect": {
      "type": "tactical_order",
      "value": 60,
      "description": "提升全體攻擊與行動效率"
    }
  },
  {
    "word": "Regulatory T Cell",
    "zh": "調節性T細胞",
    "image": "https://i.pinimg.com/736x/40/4e/fe/404efe76d30b66a099844682c92f0df7.jpg",
    "video": "https://youtu.be/EXAMPLE_REGULATORY",
    "rarity": "普通",
    "category": "工作細胞",
    "description": "冷靜沉著，調節免疫過強的反應。",
    "effect": {
      "type": "immune_balance",
      "value": 55,
      "description": "降低我方受到的反效果與失控傷害"
    }
  },
  {
    "word": "Dendritic Cell",
    "zh": "樹突細胞",
    "image": "https://i.ytimg.com/vi/-Uewq8LHNYU/maxresdefault.jpg",
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
    "image": "https://i.pinimg.com/736x/7d/b8/ef/7db8efe6d504a90afbc9db7e9816b696.jpg",
    "video": "https://youtu.be/EXAMPLE_BCELL",
    "rarity": "普通",
    "category": "工作細胞",
    "description": "嘴上不饒人但抗體製作第一名。",
    "effect": {
      "type": "antibody_wave",
      "value": 65,
      "description": "釋放抗體彈幕造成範圍魔法傷害"
    }
  },
  {
    "word": "NK Cell",
    "zh": "自然殺手細胞",
    "image": "https://cdn.myanimelist.net/images/characters/12/362907.jpg",
    "video": "https://youtu.be/EXAMPLE_NKCELL",
    "rarity": "稀有",
    "category": "工作細胞",
    "description": "單兵戰力最強，沉默寡言卻一擊致命。",
    "effect": {
      "type": "lethal_strike",
      "value": 95,
      "description": "對單一敵人造成致命打擊，無視防禦"
    }
  },
  {
    "word": "Butt Detective",
    "zh": "屁屁偵探",
    "image": "https://img.myvideo.net.tw/images/TOE020/0000/0002/202208301649239017_280x400.jpg",
    "video": "https://youtu.be/owzMeiYR4jA?si=svunethtF5LSEQ0i",
    "rarity": "超稀有",
    "category": "屁屁偵探",
    "description": "總是一本正經地放屁破案，氣場與氣味同時攻擊敵人。",
    "effect": {
      "type": "gas_truth",
      "value": 100,
      "description": "放屁造成混亂並揭露敵方弱點"
    }
  },
  {
    "word": "Brown",
    "zh": "布朗",
    "image": "https://tse3.mm.bing.net/th/id/OIP.t4Nf8RwnrddC5FE-aa1hkAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/EXAMPLE_BROWN",
    "rarity": "普通",
    "category": "屁屁偵探",
    "description": "屁屁偵探的忠心助手，總是在最關鍵時刻提供協助。",
    "effect": {
      "type": "timely_support",
      "value": 50,
      "description": "召喚支援回合，可中斷敵方行動"
    }
  },
  {
    "word": "Inspector",
    "zh": "警官",
    "image": "https://img.shoplineapp.com/media/image_clips/60f2b518cb57630014918263/original.jpeg?1626518808",
    "video": "https://youtu.be/EXAMPLE_INSPECTOR",
    "rarity": "稀有",
    "category": "屁屁偵探",
    "description": "與屁屁偵探並肩合作的警察，擅長擺陣圍捕犯人。",
    "effect": {
      "type": "trap_net",
      "value": 80,
      "description": "設下陷阱，限制敵方行動兩回合"
    }
  },
  {
    "word": "Cancer Cell",
    "zh": "癌細胞",
    "image": "https://tse3.mm.bing.net/th/id/OIP.EU5yZ5dhE8tq2gE7mnEKFgHaEL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/gqau5DpIdBc?si=Dul_HXfESuFA0zSu",
    "rarity": "超稀有",
    "category": "工作細胞",
    "description": "痛苦與復仇心所化身的變異細胞。",
    "effect": {
      "type": "mutation_rage",
      "value": 100,
      "description": "每次受到攻擊後強化自己，並反彈部分傷害"
    }
  },
     {
    "word": "Chrollo Lucilfer",
    "zh": "庫洛洛",
    "image": "https://wallpapers.com/images/hd/chrollo-lucilfer-xtfkqnn9ptgt91p2.jpg",
    "video": "https://youtu.be/EXAMPLE_CHROLLO",
    "rarity": "稀有",
    "category": "獵人",
    "description": "幻影旅團團長，操控被奪取的能力反制敵人。",
    "effect": {
      "type": "skill_thief",
      "value": 1,
      "description": "隨機複製一名敵人技能並使用一次"
    }
  },
{
    "word": "Toy Story",
    "zh": "玩具總動員",
    "image": "https://i.pinimg.com/originals/2d/bf/78/2dbf7821a9e5b9012b7830716b8b5710.jpg",
    "video": "https://youtu.be/TZeG23jEfHM?si=cpxgw7MncmhZTGKQ",
    "rarity": "超稀有",
    "category": "皮克斯宇宙",
    "description": "玩具們在房間裡有自己的大冒險世界，每一次移動都是奇蹟。",
    "effect": {
      "type": "friendship_buff",
      "value": 90,
      "description": "強化全體夥伴合作效果"
    }
  },
  {
    "word": "Coco",
    "zh": "可可夜總會",
    "image": "https://v1.pinimg.com/videos/mc/720p/89/9f/4d/899f4d048ad6a0d3640de8bbe01913a2.mp4",
    "video": "https://youtu.be/hAYUQ1ltJj0?si=6GqSPp_qu4kCOt2H",
    "rarity": "超稀有",
    "category": "皮克斯宇宙",
    "description": "穿越亡靈之地，用音樂尋找家族的記憶與真相。",
    "effect": {
      "type": "music_memory",
      "value": 100,
      "description": "喚醒失落記憶，解除所有負面狀態"
    }
  },
  {
    "word": "Inside Out",
    "zh": "腦筋急轉彎",
    "image": "https://example.com/inside_out.jpg",
    "video": "https://youtu.be/EXAMPLE_INSIDEOUT",
    "rarity": "稀有",
    "category": "皮克斯宇宙",
    "description": "五種情緒住在你的腦袋裡，每個決定都改變整個人生。",
    "effect": {
      "type": "emotion_shift",
      "value": 70,
      "description": "隨機切換情緒狀態，賦予對應能力加成"
    }
  },
  {
    "word": "Up",
    "zh": "天外奇蹟",
    "image": "https://example.com/up.jpg",
    "video": "https://youtu.be/EXAMPLE_UP",
    "rarity": "稀有",
    "category": "皮克斯宇宙",
    "description": "老爺爺用氣球飛屋開啟人生最勇敢的冒險旅程。",
    "effect": {
      "type": "lift_off",
      "value": 80,
      "description": "跳脫困境，逃離傷害並重置冷卻時間"
    }
  },
  {
    "word": "Ratatouille",
    "zh": "料理鼠王",
    "image": "https://example.com/ratatouille.jpg",
    "video": "https://youtu.be/EXAMPLE_RAT",
    "rarity": "普通",
    "category": "皮克斯宇宙",
    "description": "一隻老鼠在巴黎當上廚神，料理與夢想齊飛。",
    "effect": {
      "type": "flavor_boost",
      "value": 60,
      "description": "恢復生命並提升士氣"
    }
  },
{
    "word": "Jaguar",
    "zh": "美洲豹",
    "image": "https://example.com/jaguar.jpg",
    "video": "https://youtu.be/EXAMPLE_JAGUAR",
    "rarity": "稀有",
    "category": "亞馬遜雨林",
    "description": "亞馬遜的終極獵手，潛伏黑影之中，以一擊致命。",
    "effect": {
      "type": "stealth_strike",
      "value": 95,
      "description": "偷襲造成高額傷害，成功則隱匿一回合"
    }
  },
  {
    "word": "Capybara",
    "zh": "水豚",
    "image": "https://example.com/capybara.jpg",
    "video": "https://youtu.be/EXAMPLE_CAPYBARA",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "最 chill 的森林鄰居，友善穩重，是團隊的穩定核心。",
    "effect": {
      "type": "peace_aura",
      "value": 60,
      "description": "降低戰鬥緊張度，減緩我方傷害"
    }
  },
   {
    "word": "Tamandua",
    "zh": "小食蟻獸",
    "image": "https://example.com/tamandua.jpg",
    "video": "https://youtu.be/EXAMPLE_TAMANDUA",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "迷你版食蟻獸，靈巧可愛，是昆蟲大軍的剋星。",
    "effect": {
      "type": "bug_cleanse",
      "value": 55,
      "description": "清除場上所有蟲系干擾效果"
    }
  },
  {
    "word": "Howler Monkey",
    "zh": "吼猴",
    "image": "https://example.com/howlermonkey.jpg",
    "video": "https://youtu.be/EXAMPLE_HOWLER",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "森林中最響亮的聲音，能在數公里外回響，是領地與警告的象徵。",
    "effect": {
      "type": "sonic_roar",
      "value": 65,
      "description": "干擾敵人視野，降低命中率"
    }
  },
  {
    "word": "Red Uakari",
    "zh": "紅臉僧面猴",
    "image": "https://example.com/uakari.jpg",
    "video": "https://youtu.be/EXAMPLE_UAKARI",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "以鮮紅面孔著稱，為健康與警覺的象徵，擅長跳躍與團隊行動。",
    "effect": {
      "type": "vital_bond",
      "value": 60,
      "description": "恢復友軍生命並提升羈絆技能"
    }
  },
  {
    "word": "Caiman",
    "zh": "凱門鱷",
    "image": "https://example.com/caiman.jpg",
    "video": "https://youtu.be/EXAMPLE_CAIMAN",
    "rarity": "稀有",
    "category": "亞馬遜雨林",
    "description": "亞馬遜河域潛伏獵手，雖非陸地主角，卻常突襲岸邊生物。",
    "effect": {
      "type": "surprise_lunge",
      "value": 85,
      "description": "對毫無防備敵人造成暴擊"
    }
  },
  {
    "word": "Macaw",
    "zh": "金剛鸚鵡",
    "image": "https://example.com/macaw.jpg",
    "video": "https://youtu.be/EXAMPLE_MACAW",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "色彩鮮明的語言高手，飛行速度快且具有高社交性。",
    "effect": {
      "type": "echo_voice",
      "value": 50,
      "description": "重複上回合我方技能效果"
    }
  },
  {
    "word": "Amazon Poison Frog",
    "zh": "亞馬遜毒蛙",
    "image": "https://v1.pinimg.com/videos/mc/720p/fa/44/30/fa443027ed28c4fd71fd7b4720928ae7.mp4",
    "video": "https://youtu.be/EXAMPLE_FROG",
    "rarity": "稀有",
    "category": "亞馬遜雨林",
    "description": "體型小巧卻蘊藏劇毒，顏色鮮豔警示天敵，生存與美學並存。",
    "effect": {
      "type": "contact_poison",
      "value": 85,
      "description": "接觸後立即造成毒素傷害並持續削弱"
    }
  },
  {
    "word": "Harpy Eagle",
    "zh": "角雕",
    "image": "https://example.com/harpyeagle.jpg",
    "video": "https://youtu.be/EXAMPLE_HARPY",
    "rarity": "稀有",
    "category": "亞馬遜雨林",
    "description": "亞馬遜最強猛禽之一，翱翔密林之上，一擊獵殺。",
    "effect": {
      "type": "sky_strike",
      "value": 90,
      "description": "高空突襲，忽略敵方防禦直接造成傷害"
    }
  },
  {
    "word": "Sloth",
    "zh": "樹懶",
    "image": "https://example.com/sloth.jpg",
    "video": "https://youtu.be/EXAMPLE_SLOTH",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "動作最慢的哺乳動物，用慢與靜的智慧化解危機。",
    "effect": {
      "type": "slow_reflect",
      "value": 60,
      "description": "延緩對手攻擊頻率，並反射部分持續傷害"
    }
  },
  {
    "word": "Leafcutter Ant",
    "zh": "切葉蟻",
    "image": "https://example.com/leafcutterant.jpg",
    "video": "https://youtu.be/EXAMPLE_LEAFCUT",
    "rarity": "普通",
    "category": "亞馬遜雨林",
    "description": "勤奮的地下建築師，以菌菇農業維生，是雨林中的隱形力量。",
    "effect": {
      "type": "swarm_support",
      "value": 65,
      "description": "召喚蟻群協助攻擊，提高整體輸出"
    }
  },
{
    "word": "Polar Bear",
    "zh": "北極熊",
    "image": "https://example.com/polarbear.jpg",
    "video": "https://youtu.be/EXAMPLE_POLARBEAR",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "冰原之王，厚重皮毛與鋒利利爪使牠成為極地霸主。",
    "effect": {
      "type": "ice_crush",
      "value": 95,
      "description": "強力擊碎防禦，造成範圍傷害"
    }
  },
  {
    "word": "Snowy Owl",
    "zh": "雪鴞",
    "image": "https://example.com/snowyowl.jpg",
    "video": "https://youtu.be/EXAMPLE_SNOWYOWL",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "白羽無聲飛翔，夜間狩獵者，擁有極佳的視覺與聽覺。",
    "effect": {
      "type": "silent_wings",
      "value": 60,
      "description": "提升我方先手率，並降低敵方閃避"
    }
  },
  {
    "word": "Fennec Fox",
    "zh": "耳廓狐",
    "image": "https://example.com/fennecfox.jpg",
    "video": "https://youtu.be/EXAMPLE_FENNECFOX",
    "rarity": "稀有",
    "category": "炎熱生物",
    "description": "超大耳朵是沙漠生存利器，能散熱與偵測遠方聲音。",
    "effect": {
      "type": "heat_detection",
      "value": 60,
      "description": "提升閃避並預知敵方技能"
    }
  },
  {
    "word": "Camel",
    "zh": "駱駝",
    "image": "https://example.com/camel.jpg",
    "video": "https://youtu.be/EXAMPLE_CAMEL",
    "rarity": "普通",
    "category": "炎熱生物",
    "description": "沙漠之舟，耐渴耐熱的長征王，擁有強大耐力。",
    "effect": {
      "type": "endurance_boost",
      "value": 70,
      "description": "提升持續戰鬥力並減少狀態異常"
    }
  },
  {
    "word": "Thorny Devil",
    "zh": "刺魔蜥蜴",
    "image": "https://example.com/thornydevil.jpg",
    "video": "https://youtu.be/EXAMPLE_THORNY",
    "rarity": "普通",
    "category": "炎熱生物",
    "description": "滿身尖刺的防禦高手，能從皮膚引水，是沙漠奇蹟。",
    "effect": {
      "type": "thorn_barrier",
      "value": 65,
      "description": "每回合反彈部分物理傷害"
    }
  },
  {
    "word": "Sidewinder",
    "zh": "角響尾蛇",
    "image": "https://example.com/sidewinder.jpg",
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
    "image": "https://example.com/gilamonster.jpg",
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
    "image": "https://example.com/secretarybird.jpg",
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
    "image": "https://example.com/monitorlizard.jpg",
    "video": "https://youtu.be/EXAMPLE_MONITOR",
    "rarity": "稀有",
    "category": "炎熱生物",
    "description": "強壯耐熱的大型沙漠蜥蜴，具有強力尾巴與咬合。",
    "effect": {
      "type": "tail_whip",
      "value": 75,
      "description": "擊退敵人並降低其攻擊力"
    }
  },
  {
    "word": "Scarab Beetle",
    "zh": "聖甲蟲",
    "image": "https://example.com/scarab.jpg",
    "video": "https://youtu.be/EXAMPLE_SCARAB",
    "rarity": "普通",
    "category": "炎熱生物",
    "description": "古埃及神聖象徵，擅於在炎熱沙地移動並操控沙塵。",
    "effect": {
      "type": "dust_shroud",
      "value": 55,
      "description": "降低敵方命中並提升我方隱蔽"
    }
  },
  {
    "word": "Caracal",
    "zh": "沙漠猞猁",
    "image": "https://example.com/caracal.jpg",
    "video": "https://youtu.be/EXAMPLE_CARACAL",
    "rarity": "超稀有",
    "category": "炎熱生物",
    "description": "跳躍能力極強的沙地獵手，以靈敏與爆發力著稱。",
    "effect": {
      "type": "leap_strike",
      "value": 90,
      "description": "攻擊時有機率再次行動"
    }
  },
  {
    "word": "Dung Beetle",
    "zh": "糞金龜",
    "image": "https://example.com/dungbeetle.jpg",
    "video": "https://youtu.be/EXAMPLE_DUNG",
    "rarity": "稀有",
    "category": "炎熱生物",
    "description": "環境清道夫與神聖象徵，擅於在混亂中保存戰力。",
    "effect": {
      "type": "resilience",
      "value": 65,
      "description": "每回合回復少量生命，並免疫一次狀態異常"
    }
  },
  {
    "word": "Arctic Fox",
    "zh": "北極狐",
    "image": "https://example.com/arcticfox.jpg",
    "video": "https://youtu.be/EXAMPLE_ARCTICFOX",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "善於在冰雪間偽裝與挖掘，能迅速躲避危險。",
    "effect": {
      "type": "frost_hide",
      "value": 55,
      "description": "提升自身閃避並解除一項負面狀態"
    }
  },
  {
    "word": "Musk Ox",
    "zh": "麝香牛",
    "image": "https://example.com/muskox.jpg",
    "video": "https://youtu.be/EXAMPLE_MUSKOX",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "強壯耐寒，群體圍圈抵禦捕食者，是極地智慧的象徵。",
    "effect": {
      "type": "circle_guard",
      "value": 70,
      "description": "保護全體成員，降低下一回合所受傷害"
    }
  },
  {
    "word": "Arctic Wolf",
    "zh": "北極狼",
    "image": "https://example.com/arcticwolf.jpg",
    "video": "https://youtu.be/EXAMPLE_WOLF",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "行動迅捷、團隊配合無間，極地最有紀律的獵團。",
    "effect": {
      "type": "pack_chase",
      "value": 90,
      "description": "每有1名隊友，增加攻擊力"
    }
  },
  {
    "word": "Walrus",
    "zh": "海象",
    "image": "https://example.com/walrus.jpg",
    "video": "https://youtu.be/EXAMPLE_WALRUS",
    "rarity": "稀有",
    "category": "冰原動物",
    "description": "厚皮脂肪與巨牙武裝的冰原巨獸，既能防守也可衝鋒。",
    "effect": {
      "type": "tusk_charge",
      "value": 75,
      "description": "提高防禦後衝撞攻擊敵方前排"
    }
  },
  {
    "word": "Snowshoe Hare",
    "zh": "雪兔",
    "image": "https://example.com/snowshoehare.jpg",
    "video": "https://youtu.be/EXAMPLE_HARE",
    "rarity": "稀有",
    "category": "冰原動物",
    "description": "毛色隨季變化，跳躍迅捷，擅長閃避與迴避危機。",
    "effect": {
      "type": "evasion_dash",
      "value": 60,
      "description": "提升閃避率並增加速度"
    }
  },
  {
    "word": "Ermine",
    "zh": "白鼬",
    "image": "https://example.com/ermine.jpg",
    "video": "https://youtu.be/EXAMPLE_ERMINE",
    "rarity": "稀有",
    "category": "冰原動物",
    "description": "機靈的小獵人，能在雪地中穿梭如風，迅速出擊。",
    "effect": {
      "type": "quick_strike",
      "value": 65,
      "description": "優先攻擊敵方後排，造成額外傷害"
    }
  },
  {
    "word": "Snow Leopard",
    "zh": "雪豹",
    "image": "https://example.com/snowleopard.jpg",
    "video": "https://youtu.be/EXAMPLE_LEOPARD",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "高山冰原的隱匿獵手，敏捷與力量並存，是終極掠食者。",
    "effect": {
      "type": "silent_pounce",
      "value": 95,
      "description": "突襲造成高傷並降低敵方行動力"
    }
  },
  {
    "word": "Frost Lizard",
    "zh": "冰封蜥蜴",
    "image": "https://example.com/frostlizard.jpg",
    "video": "https://youtu.be/EXAMPLE_LIZARD",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "傳說中的冰原生物，吐息能凍結敵人行動，是幻想與真實的交界。",
    "effect": {
      "type": "freeze_breath",
      "value": 70,
      "description": "對敵方造成冰凍效果，延遲其下一次攻擊"
    }
  },
{
    "word": "King Penguin",
    "zh": "國王企鵝",
    "image": "https://example.com/kingpenguin.jpg",
    "video": "https://youtu.be/EXAMPLE_KINGPENGUIN",
    "rarity": "超稀有",
    "category": "冰原動物",
    "description": "高貴冷靜的極地統治者，象徵秩序與凝聚力，牠的出現讓萬物安靜低頭。",
    "effect": {
      "type": "regal_command",
      "value": 100,
      "description": "恢復全體生命並提升所有冰原動物卡的技能效果20%（持續3回合）"
    }
  },
  {
    "word": "Ivory Gull",
    "zh": "象牙鷗",
    "image": "https://example.com/ivorygull.jpg",
    "video": "https://youtu.be/EXAMPLE_GULL",
    "rarity": "普通",
    "category": "冰原動物",
    "description": "極地飛行者，巡弋於冰與雪之間，帶來寒風與觀察力。",
    "effect": {
      "type": "wind_scout",
      "value": 55,
      "description": "揭示敵方隱藏狀態並略降敵閃避"
    }
  },
  {
    "word": "Monsters, Inc.",
    "zh": "怪獸電力公司",
    "image": "https://example.com/monsters_inc.jpg",
    "video": "https://youtu.be/EXAMPLE_MONSTERS",
    "rarity": "普通",
    "category": "皮克斯宇宙",
    "description": "在門後的世界收集尖叫聲與歡笑來發電，怪獸與童心的合作奇蹟。",
    "effect": {
      "type": "laugh_power",
      "value": 65,
      "description": "提升能量產出並減少敵人怒氣"
    }
  },
   {
    "word": "Suguru Geto",
    "zh": "夏油傑",
    "image": "https://example.com/geto.gif",
    "video": "https://youtu.be/EXAMPLE_GETO",
    "rarity": "稀有",
    "category": "咒術迴戰",
    "description": "原特級，操咒靈為武器的反派，理念與狂信的化身。",
    "effect": {
      "type": "curse_command",
      "value": 2,
      "description": "釋放兩隻強力咒靈攻擊敵方"
    }
  },
  {
    "word": "Choso",
    "zh": "脹相",
    "image": "https://i.pinimg.com/736x/0d/42/5f/0d425fdfd562a59edd9c987c0a3bc1a8.jpg",
    "video": "https://youtu.be/EXAMPLE_CHOSO",
    "rarity": "稀有",
    "category": "咒術迴戰",
    "description": "血操術的高手，以兄弟為名展開血的制裁。",
    "effect": {
      "type": "blood_control",
      "value": 65,
      "description": "操控血液進行遠距攻擊並造成流血"
    }
  },

    {
    "word": "Dragonite",
    "zh": "快龍",
    "image": "https://example.com/dragonite.gif",
    "video": "https://youtu.be/EXAMPLE_DRAGONITE",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "溫柔力量的巨龍，一擊龍爪扭轉戰局。",
    "effect": {
      "type": "dragon_claw",
      "value": 85,
      "description": "強力單體攻擊，附加暴擊機率"
    }
  },
  {
    "word": "Mewtwo",
    "zh": "超夢",
    "image": "https://example.com/mewtwo.gif",
    "video": "https://youtu.be/EXAMPLE_MEWTWO",
    "rarity": "稀有",
    "category": "寶可夢",
    "description": "人造奇蹟，念力之王，戰場上無可匹敵。",
    "effect": {
      "type": "psystrike",
      "value": 100,
      "description": "施展心靈強襲，造成極高傷害"
    }
  },
  {
    "word": "Muzan Kibutsuji",
    "zh": "鬼舞辻無慘",
    "image": "https://v1.pinimg.com/videos/mc/720p/75/fd/db/75fddb05f0547a1ee67d52d5c3463023.mp4",
    "video": "https://youtu.be/Q9wKtrjF45w",
    "rarity": "超稀有",
    "category": "鬼滅之刃",
    "description": "鬼之始祖，操控恐懼與再生的不死之王。",
    "effect": {
      "type": "multi_attack",
      "value": 40,
      "description": "攻擊隨機三人，每人造成 40 點傷害"
    }
  },
  {
    "word": "Naruto Uzumaki",
    "zh": "漩渦鳴人",
    "image": "https://tse1.mm.bing.net/th/id/OIP.hcdXf15h3pDJafxYqGbxCAHaJQ?r=0&w=474&h=474&c=7",
    "video": "https://youtu.be/yeUpnIKt6k4",
    "rarity": "超稀有",
    "category": "火影忍者",
    "description": "從落魄孤兒到相信自己的忍者，鳴人以不屈精神與螺旋丸書寫前行之路。",
    "effect": {
      "type": "energy_boost",
      "value": 50,
      "description": "消耗螺旋丸能量，立刻回復 50 點體力"
    }
  },
  {
    "word": "Sasuke Uchiha",
    "zh": "宇智波佐助",
    "image": "https://tse1.mm.bing.net/th/id/OIP.G-EYV4-NlH6Nvzj4UfpP8QHaJ4?w=640&h=853&rs=1&pid=ImgDetMain",
    "video": "https://youtu.be/HQzt4d3ALjA",
    "rarity": "超稀有",
    "category": "火影忍者",
    "description": "冷酷的復仇者，背負家族的血海深仇，擁有寫輪眼與千鳥之力。",
    "effect": {
      "type": "critical_strike",
      "value": 100,
      "description": "下一次攻擊造成 2 倍傷害"
    }
  },
  {
    "word": "Sakura Haruno",
    "zh": "春野櫻",
    "image": "https://tse3.mm.bing.net/th/id/OIP.0RI9qx2aMOBi7Acv5HFKXwHaJ4?w=640&h=853&rs=1&pid=ImgDetMain",
    "video": "https://youtu.be/EtfTHD8T4lw",
    "rarity": "稀有",
    "category": "火影忍者",
    "description": "醫療忍術專家，掌握怪力與療癒之術，戰場上的生命守護者。",
    "effect": {
      "type": "heal",
      "value": 40,
      "description": "恢復隊友生命值 40 點"
    }
  },
  {
    "word": "Kakashi Hatake",
    "zh": "旗木卡卡西",
    "image": "https://tse3.mm.bing.net/th/id/OIP.pZPxejZDMUNzLgFGXKwPvwHaKX?w=640&h=904&rs=1&pid=ImgDetMain",
    "video": "https://youtu.be/vHQf2jLU1Fg",
    "rarity": "稀有",
    "category": "火影忍者",
    "description": "擁有寫輪眼的複製忍者，智慧與冷靜的象徵，是鳴人小隊的領導者。",
    "effect": {
      "type": "copy_skill",
      "value": 1,
      "description": "複製敵方技能並可使用一次"
    }
  },
  {
    "word": "Itachi Uchiha",
    "zh": "宇智波鼬",
    "image": "https://tse1.mm.bing.net/th/id/OIP.7Z5mT4HBBXRqRPpCFLYJ3wHaJl?w=640&h=853&rs=1&pid=ImgDetMain",
    "video": "https://youtu.be/q5k4QZYVWGo",
    "rarity": "普通",
    "category": "火影忍者",
    "description": "為了村子與弟弟而選擇黑暗之路的天才，萬花筒寫輪眼的持有者。",
    "effect": {
      "type": "illusion",
      "value": 1,
      "description": "使敵方陷入幻術，1 回合無法行動"
    }
  },
  {
    "word": "Shikamaru Nara",
    "zh": "奈良鹿丸",
    "image": "https://tse3.mm.bing.net/th/id/OIP.ZtGzOf3keRzWzzTNe0O_PgHaLH?w=640&h=960&rs=1&pid=ImgDetMain",
    "video": "https://youtu.be/ql-8i9OAjbM",
    "rarity": "稀有",
    "category": "火影忍者",
    "description": "影子操控天才，智商爆表的戰略家，懶散外表下藏著最強腦袋。",
    "effect": {
      "type": "trap",
      "value": 1,
      "description": "讓敵人陷入影子束縛，無法移動 1 回合"
    }
  },
  {
    "word": "Rock Lee",
    "zh": "洛克・李",
    "image": "https://tse1.mm.bing.net/th/id/OIP.d5Jik_1L0hZJtA0epd4y6QHaKX?w=640&h=904&rs=1&pid=ImgDetMain",
    "video": "https://youtu.be/p_GWxHICjM8",
    "rarity": "普通",
    "category": "火影忍者",
    "description": "體術天才，熱血永不放棄，努力就是他最強的忍術。",
    "effect": {
      "type": "atk_boost",
      "value": 30,
      "description": "提升攻擊力 30 點"
    }
  },
  {
    "word": "Hinata Hyuga",
    "zh": "日向雛田",
    "image": "https://tse3.mm.bing.net/th/id/OIP.V5IJ6VNEuiTjeVpKkD55IQHaJQ?w=640&h=853&rs=1&pid=ImgDetMain",
    "video": "https://youtu.be/_u26A4WJgIQ",
    "rarity": "普通",
    "category": "火影忍者",
    "description": "柔拳系溫柔少女，堅定心意在戰場綻放。",
    "effect": {
      "type": "block",
      "value": 20,
      "description": "下一次受到傷害減少 20 點"
    }
  },
  {
    "word": "Gaara",
    "zh": "我愛羅",
    "image": "https://i.pinimg.com/736x/71/c1/53/71c15395e7a6af19e6ee85c036bbb383.jpg",
    "video": "https://youtu.be/0b7cAEG3W1g",
    "rarity": "稀有",
    "category": "火影忍者",
    "description": "沙之守鶴的容器，從冷漠中誕生的守護者。",
    "effect": {
      "type": "shield",
      "value": 35,
      "description": "召喚沙盾，抵擋 35 點傷害"
    }
  },
  {
    "word": "Neji Hyuga",
    "zh": "日向寧次",
    "image": "https://tse1.mm.bing.net/th/id/OIP.fyBTmnwVaaZV0rAc9d6oPwHaKX?w=640&h=904&rs=1&pid=ImgDetMain",
    "video": "https://youtu.be/GGcu5S4U33Y",
    "rarity": "稀有",
    "category": "火影忍者",
    "description": "命運與實力的對決，白眼洞悉一切。",
    "effect": {
      "type": "reveal",
      "value": 1,
      "description": "揭示敵方下一個行動"
    }
  },
  {
    "word": "Might Guy",
    "zh": "阿凱老師",
    "image": "https://tse1.mm.bing.net/th/id/OIP.YZj-A9O4yxN_rnFdvTr30QHaKX?w=640&h=904&rs=1&pid=ImgDetMain",
    "video": "https://youtu.be/yNJKwENR7b0",
    "rarity": "稀有",
    "category": "火影忍者",
    "description": "熱血燃燒，青春炸裂！體術之巔的傳奇老師。",
    "effect": {
      "type": "burst",
      "value": 80,
      "description": "釋放青春熱血攻擊，造成 80 點傷害"
    }
  },
  {
    "word": "Temari",
    "zh": "手鞠",
    "image": "https://tse1.mm.bing.net/th/id/OIP.wE_sphAYq0ZQ3eOvwjeO8QHaLH?w=640&h=960&rs=1&pid=ImgDetMain",
    "video": "https://youtu.be/fZKVEG8KIzQ",
    "rarity": "普通",
    "category": "火影忍者",
    "description": "風之忍者，鋒利言語與團扇同樣致命。",
    "effect": {
      "type": "wind",
      "value": 25,
      "description": "釋放風遁攻擊，造成 25 點範圍傷害"
    }
   },

  {
    "word": "Snow White",
    "zh": "白雪公主",
    "image": "https://www.bing.com/th/id/OGC.0f6e0c6aa2cf28e28d418b46e58b2760?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.tenor.com%2fCnQeiIla_r4AAAAC%2fsnow-white-snow-white-and-the-seven-dwarfs.gif&ehk=wGIyAftPN%2bI9redCZbf27tMmVNsZOqA16%2bMDFRYItFA%3d",
    "video": "https://youtu.be/PGkWW2lIXc0?si=2ZXcycjF92gsGpc0",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "被蘋果詛咒的純真少女，以微笑融化王子的真愛魔咒。",
    "effect": {
      "type": "shield",
      "value": 1,
      "description": "抵擋一次答錯懲罰"
    }
  },
  {
    "word": "Aurora",
    "zh": "奧蘿拉",
    "image": "https://www.bing.com/th/id/OGC.91bac983035ac66f014e2fa5b71e7004?r=0&o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fn.sinaimg.cn%2fastro%2ftransform%2f729%2fw500h229%2f20181119%2fBLVB-hnyuqhi2165817.gif&ehk=xZUrpYHpm5I4TlHhWPvfxJq7oRtUtxtOnac4e89M82Y%3d",
    "video": "https://youtu.be/Jt6Erwxzc0A?si=rnJijErTWO5Nquln",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "沉睡千年的公主，在晨曦中甦醒，舞動皇宮的光影韻律。",
    "effect": {
      "type": "energy_restore",
      "value": 2,
      "description": "恢復 2 點能量"
    }
  },
  {
    "word": "Tinker Bell",
    "zh": "小仙子",
    "image": "https://th.bing.com/th/id/OIP.Z_ZU6jgIki13xqMjEmtj4QHaFj?r=0&pid=ImgDet&w=175&h=130&c=7&dpr=2",
    "video": "https://youtu.be/_xP12x6FIsM?si=zJWRBcKWod6FFQ6c",
"rarity": "普通",
    "category": "童話故事",
    "description": "飄散魔法塵的精靈，用一縷微光點亮夢幻永不陳舊。",
    "effect": {
      "type": "hint",
      "value": 1,
      "description": "排除一個錯誤選項"
    }
  },
  {
    "word": "Peter Pan",
    "zh": "彼得潘",
    "image": "https://www.bing.com/th/id/OGC.d50dd8e6eac324098f6bf64aa91ae08a?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia3.giphy.com%2fmedia%2f10ZucsW5gDl4kg%2fgiphy.gif&ehk=KM%2fHBD5VT6ppUgaJEfHKyVwdepkkuL4BracYn2gZMMo%3d",
   "video": "https://youtu.be/GnhvXT_jYeE?si=HSi2kLVlFbXY5p9Q", 
"rarity": "超稀有",
    "category": "童話故事",
    "description": "永遠不肯長大的男孩，在奇幻夢島揮舞冒險的翅膀。",
    "effect": {
      "type": "skip_level",
      "value": 1,
      "description": "直接跳過當前樓層"
    }
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
    "image": "https://th.bing.com/th/id/OIP.4ya4g4nWM9iLEjI-cLKTFAAAAA?r=0&rs=1&pid=ImgDetMain",
"video": "https://youtu.be/j9rDI4F8HyY?si=-40_gwn8NjMIjsgb",   
 "rarity": "普通",
    "category": "童話故事",
    "description": "夢島上的溫柔說書人，低語中編織家與想像的溫暖。"
  },
  {
    "word": "Pinocchio",
    "zh": "匹諾曹",
    "image": "https://www.bing.com/th/id/OGC.97bba700295540ac6971d43228982b1e?r=0&o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fn.sinaimg.cn%2fsinakd20112%2f700%2fw400h300%2f20220629%2fa86a-e6322abac7da186ebda982b8074eb95a.gif&ehk=D5cX2%2bbTp%2bBgsETHDVWDzAtdqRslsoLrYH0G%2fp11X%2f4%3d",
"video": "https://youtu.be/IgtKbhjwCCU?si=23oJ9ScEB9kmvElc",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "木偶男孩追尋真的自我，每一次心跳都化作勇氣的節拍。"
  },
  {
    "word": "Jiminy Cricket",
    "zh": "蟋蟀吉米尼",
    "image": "https://th.bing.com/th/id/OIP.vDc3CxsoUQY87Fg_psfwFQAAAA?r=0&rs=1&pid=ImgDetMain",
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
    "description": "一見鍾情的皇宮小螃蟹，用加勒比海的旋律守護美人魚之夢。"
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
    "image": "https://mistergif.com/media/6/mowgli-aullando-82890.gif",
 "video": "https://youtu.be/LhqqyC0zh_0?si=Ex12ujBsWITaK6Y6",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "叢林人之子在狼群之間奔跑，學習野性的自由與歸屬。"
  },
  {
    "word": "Baloo",
    "zh": "巴魯",
    "image": "https://th.bing.com/th/id/OIP.xnQpa_fz7qYUKEDa1P7VZwAAAA?r=0&rs=1&pid=ImgDetMain",
 "video": "https://youtu.be/c6e3ITsjLRI?si=hzl-IVP8-kwRHrze",   
 "rarity": "普通",
    "category": "童話故事",
    "description": "憨厚大熊，用輕鬆節奏教會毛格生命的愉悅。"
  },
  {
    "word": "Shere Khan",
    "zh": "雪狐",
    "image": "https://th.bing.com/th/id/R.8022b22e624273d818dcb722e8dded69?rik=p4JLqJl94QXnyQ&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fpw5ziR4HL7ksg%2fgiphy.gif&ehk=8GZhwWwgS8LpzMgdAzekLsmb7zx2c4K%2fvp3HtsGD6h0%3d&risl=&pid=ImgRaw&r=0",
 "video": "https://youtu.be/PpC4a6jCxSA?si=908vTB0V8Yl21Pxm",  
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "叢林之王以冰冷目光狩獵，讓每聲低吼都震顫心靈。"
  },
  {
    "word": "Cruella de Vil",
    "zh": "庫伊拉",
    "image": "https://4.bp.blogspot.com/-cqTEgwerQBM/UoLpBMCICFI/AAAAAAAAE98/258LlOYrmAo/s1600/tumblr_lv5hrxcoLS1qhigt0o1_500.gif",
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
    "image": "https://hips.hearstapps.com/hmg-prod/images/0505bd7cf187d5852d39388f81a933e1-1597219629.gif?crop=1xw:1xh;center",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "優雅灰狗在煙火下邂逅流浪狗，愛的旋律在午夜迴盪。"
  },
  {
    "word": "Tramp",
    "zh": "流浪狗",
    "image": "https://images6.fanpop.com/image/photos/38200000/Lady-and-the-Tramp-char-and-anj-38254201-245-324.gif",
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
    "image": "https://tse1.mm.bing.net/th/id/OIP.W4og2IrTDCN7Q0rNjJwfcQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "video": "https://youtu.be/rdBYmk4dfLE?si=QPgRyHgKbM_a73JZ",
    "rarity": "普通",
    "category": "童話故事",
    "description": "笨拙可愛的狗狗角色，總在傻氣中點亮天真與友誼。"
  },
  {
    "word": "Minnie Mouse",
    "zh": "米妮老鼠",
    "image": "https://i.pinimg.com/originals/18/45/81/184581897ec8c085d106c9a5f71064fa.gif",
 "video": "https://youtu.be/7mTMzABsKqo?si=HFDp909G0tMssEva",   
 "rarity": "超稀有",
    "category": "童話故事",
    "description": "樣貌優雅甜美的女主角，蝴蝶結與心形裙下藏著堅定信念。"
  },
  {
    "word": "Pluto",
    "zh": "布魯托",
    "image": "https://th.bing.com/th/id/OIP.K2-e74680VR-KBJjeo8eNwHaKC?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
 "video": "https://youtu.be/2qiP3KxEFpo?si=0aJDBqs-sC0LuvJn", 
    "rarity": "普通",
    "category": "童話故事",
    "description": "米奇忠誠的寵物狗，勇氣與好奇心讓他在冒險中閃耀。"
  },
  {
    "word": "Olaf",
    "zh": "奧拉夫",
    "image": "https://www.bing.com/th/id/OGC.6b08f26e069ea17eae84925fea503e2e?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.zenfs.com%2fen%2felle.tw%2f5464f4be22f53e5e838ac06e3283b292&ehk=N3SaS16UtDPe7liS%2fv%2bUlUulpJXpj317Yz2JrSoWPfc%3d",
 "video": "https://youtu.be/TSvBrYIPK5s?si=f30G8QxBt4LkQvtF", 
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "《冰雪奇緣》中的雪人，純真樂觀，渴望擁抱溫暖與友情。"
  },
  {
    "word": "Simba",
    "zh": "辛巴",
    "image": "https://i.pinimg.com/originals/bb/64/10/bb64103ca901744582e69d899b6c3ff9.gif",
 "video": "https://youtu.be/kaOIxll4LCA?si=vvwb1DrS-pcsmFUg", 
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "《獅子王》中勇敢的獅子王子，經歷責任與成長後重登王座。"
  },
  {
    "word": "Nala",
    "zh": "娜拉",
    "image": "https://th.bing.com/th/id/R.5744c05e0c74f79c60e86f98bc5120f5?rik=D1dLGEiWG0Qx%2fw&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fpolls%2f596000%2f596895_1292268112939_full.jpg%3fv%3d1292268217&ehk=Wcnh5jkupkQ3i%2f9URWWwVlr%2bIQWFqMCH5QJvLe%2bZmy8%3d&risl=&pid=ImgRaw&r=0",
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
    "image": "https://th.bing.com/th/id/R.6cf5f0fd277e7865d5b8bea1e2f41231?rik=vNCj%2fEezcAmtuQ&riu=http%3a%2f%2fimages1.fanpop.com%2fimages%2fphotos%2f2400000%2fMulan-Wallpaper-mulan-2471043-1024-768.jpg&ehk=MxKVM1EZa9YmMN%2fGsCInTmaJVKZ32YPClj6uFQR7Wjc%3d&risl=&pid=ImgRaw&r=0",
 "video": "https://youtu.be/RN5csaWDKuI?si=kVfAGlEmjR4nIaBq",
    "rarity": "稀有",
    "category": "童話故事",
    "description": "以勇氣與智慧代父從軍，打破性別桎梏的女戰士。"
  },
 {
    "word": "Cinderella",
    "zh": "辛德瑞拉",
    "image": "https://www.bing.com/th/id/OGC.4f658e6dd75a9541f7567299e24729fa?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fFz7nXV5N8JP20%2fgiphy.gif&ehk=4bQEQlwZCYKzP7usk07s8CVwGK6CD9SRZbt%2bGTu2cR0%3d",
    "video": "https://youtu.be/cxGo_Wb7K9Q?si=LoR85Y06i-XFyKRG",
    "rarity": "超稀有",
    "category": "童話故事",
    "description": "灰姑娘在暮色南瓜馬車裡奔向夢想，用一隻水晶鞋書寫逆轉人生的詩篇。",
    "effect": {
      "type": "time_extend",
      "value": 60,
      "description": "增加答題時間 60 秒"
    }
  },
  {
    "word": "Pocahontas",
    "zh": "波卡洪塔斯",
    "image": "https://th.bing.com/th/id/OIP.vwcYWaXSo3xaKtSCfy94rgHaMV?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2",
 "video": "https://youtu.be/Do5TwE_jYnE?si=JROK4SEEGbeX7X4A",
    "rarity": "稀有",
    "category": "童話故事",
    "description": "《風中奇緣》裡的印第安公主，與自然共鳴，橋接不同文化。"
  },
  {
    "word": "Tiana",
    "zh": "蒂安娜",
    "image": "https://i.pinimg.com/736x/d8/4f/cb/d84fcb3922ddac533bfe6cd81c2b6008.jpg",
 "video": "https://youtu.be/jKXDtjaacE8?si=ubV949Lsg9ugCjXv",
    "rarity": "稀有",
    "category": "童話故事",
    "description": "《公主與青蛙》的女主角，憑藉勤奮與夢想實現願望。"
  },
  {
    "word": "Scar",
    "zh": "刀疤",
    "image": "https://media.giphy.com/media/l1l3TCGoCsY0g/giphy.gif",
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
image: "https://www.bing.com/th/id/OGC.e2a46e1f690f991da06c60f236d233ed?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2ftigercat3.up.seesaa.net%2fimage%2f7F5Xgui0kpxd4f8RZJW41697959101-1697959112-thumbnail2.gif&ehk=ekpGI5h2lJsrm3oPoNm6TVd%2fXpk5P%2b8IUDJbLi66ViM%3d", 
video: "https://youtu.be/g5RKRUGvFTE?si=uMyUdpXMgiArbyg3", 
rarity: "稀有", category: "銀河漫遊", 
description: "包含數百億顆恆星的巨大星系，我們的家園僅是微塵。" },

  { word: "astronaut", zh: "太空人", 
image: "https://th.bing.com/th/id/OIP.ysExHkAfR6VfA_B_VZFbRAHaEZ?w=312&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "https://youtu.be/Hz2F_S3Tl0Y?si=3Wj6YwjJJZwev47h", 
rarity: "稀有", category: "銀河漫遊", 
description: "穿著銀河漫遊衣的探險者，跨出地心，追尋星辰夢。" },

  { word: "spaceship", zh: "太空船", 
image: "https://www.bing.com/th/id/OGC.9864c8cf473553e922d523a4b47f3d13?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fbkimg.cdn.bcebos.com%2fpic%2fcaef76094b36acaf2eddc49e8a819a1001e939013602&ehk=Qye%2b4vrvIdUj%2fH5cXCZbrQZ7O5p8ek8os4bENwLtshY%3d", 
video: "https://youtu.be/oBLXZOSCC1o?si=717UbXS4LU7e3s7Y", 
rarity: "稀有", 
category: "銀河漫遊", 
description: "星際航行的鋼鐵巨艦，承載無限可能。" },

  { word: "satellite", zh: "衛星", 
image: "https://th.bing.com/th/id/OIP.wNfZipTjynDkrGreGz5sWgHaEK?w=246&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "https://youtu.be/-S1xnAimqXg?si=_X7WkR1gOfxp8Zjc", 
rarity: "普通", category: "銀河漫遊", 
description: "繞行於軌道之上，傳遞地球的聲音與光影。" },

  { word: "blackhole", zh: "黑洞", 
image: "https://www.bing.com/th/id/OGC.c2b2a0846988d7ef8760c24750836149?o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fpic.rmb.bdstatic.com%2fc2b2a0846988d7ef8760c247508361491963.gif&ehk=%2bsgr%2bVv%2bc7989RARw%2fTTq8wA9Ti50x6hKlIx2mQdoaE%3d", 
video: "https://youtu.be/JXWfRoAmKCs?si=Gk5cFxnOouL6nSNa", 
rarity: "超稀有", category: "銀河漫遊", 
description: "吞噬一切的暗影漩渦，宇宙深處的謎團。", youtube: "https://www.youtube.com/watch?v=QqsLTNkzvaY" },
  
{ word: "nebula", zh: "星雲", 
image: "https://th.bing.com/th/id/OIP.XsdCywDNVLIqANIyJCBTrwHaFC?w=277&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "https://youtu.be/FwjAFF_JbHE?si=oh_COsM2jGR5Bxb2", 
rarity: "普通", 
category: "銀河漫遊", 
description: "色彩斑斕的氣體雲海，新星的搖籃。" },

  { word: "universe", zh: "宇宙", 
image: "https://th.bing.com/th/id/OIP._YHm83oYxSUPYi9Mb2VFvQHaFj?w=249&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "https://youtu.be/IGZzgvY0IVw?si=WeJw2ALSA6F5TexP", 
rarity: "超稀有", 
category: "銀河漫遊", 
description: "一切存在與未知，浩瀚無垠的宏闊舞台。", youtube: "https://www.youtube.com/watch?v=libKVRa01L8" },
  
{ word: "comet", zh: "彗星", 
image: "https://www.bing.com/th/id/OGC.6c57d011a28aef4450198f37d6ab97ef?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.indiatimes.in%2fmedia%2fcontent%2f2017%2fSep%2fezgif_com-optimize_1506074453.gif&ehk=ndhvfqlo2tcvWGWfyZPLMVtPAURrLJ6su%2fl3xMhj2NY%3d", 
video: "https://youtu.be/xtWICidBaks?si=JJd5SFs91T0yEGaI", 
rarity: "普通", 
category: "銀河漫遊", 
description: "冰塵連綿的旅行者，尾跡畫出流光飛影。" },

  { word: "meteor", zh: "流星", 
image: "https://www.bing.com/th/id/OGC.01d122050190cfc835fb0e285280046b?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fimg95.699pic.com%2fphoto%2f40151%2f9222.gif_wh300.gif&ehk=RKVatLUX7lpmAIWShwClECix7qzSMoWQCbMfAl3dlVo%3d", video: "https://youtu.be/38ovE2Ec5h4?si=7TlQWvdgFvVb9Egk", 
rarity: "普通", 
category: "銀河漫遊", 
description: "劃過天幕的瞬間焰光，許願者的祈盼。" },

  { word: "moon", zh: "月球", 
image: "https://th.bing.com/th/id/OIP.HFpJ6wfJ1ldLtExhJAG1ygAAAA?w=270&h=166&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", video: "https://youtu.be/iJL2bv1l9Jo?si=OKxg20jCTe8gRb8l", 
rarity: "普通", 
category: "銀河漫遊", 
description: "夜的銀盤，潮汐的呼喚。" },

  { word: "supernova", zh: "超新星", 
image: "https://www.bing.com/th/id/OGC.74ab16ad8869ceae22c2ce23a30abc73?o=7&pid=1.7&rm=3&rurl=http%3a%2f%2fe0.ifengimg.com%2f06%2f2019%2f0210%2f1E39F751439123BAC603F4EEFA72A864CE86B993_size1946_w700_h394.gif&ehk=plYnQrzRI1vy3syUa6oHmsAiP%2biLGSFIvZ3%2bhbOmrGs%3d", 
video: "https://youtu.be/NoQ9aAg0Alg?si=fpRvwbJZH-7HRYFN", 
rarity: "超稀有", 
category: "銀河漫遊", 
description: "星辰的末路華章，化作塵埃與榮光。", youtube: "https://www.youtube.com/watch?v=H8Jm7qO4AqE" },

  { word: "pulsar", zh: "脈衝星", 
image: "https://th.bing.com/th/id/OIP.NeVX-kZ_hnY2OGf2a6oElQHaFj?w=224&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", video: "https://youtu.be/mfppqqQf6GY?si=xf-UHQHESFLotJRQ", 
rarity: "稀有", 
category: "銀河漫遊", 
description: "節律閃爍的天體燈塔，引領宇宙航路。" },

  { word: "darkmatter", zh: "暗物質", 
image: "https://th.bing.com/th/id/OIP.RmbUeTZ0H8S0z2CZ5RUXrQHaGE?w=203&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", video: "https://youtu.be/ZBejmNIyRvI?si=ToZ39kSAJ4Hh14LG", 
rarity: "超稀有", 
category: "銀河漫遊", 
description: "隱匿於星河間的無形之網，撐起虛空之軀。", youtube: "https://www.youtube.com/watch?v=QAa2O_3wBDU" },

  // 星耀契約類型 (共20張)
  { word: "wand", zh: "魔杖", 
image: "https://i.pinimg.com/736x/2f/e9/ad/2fe9ade30667eeff887e212b2330c323.jpg", 
video: "https://youtu.be/SYAoPDBZ_Tk?si=IOy1j63i5MQnVAEB", 
rarity: "普通", 
category: "星耀契約", 
description: "咒語的導管，將意志化作魔力流轉。" },

  { word: "spellbook", zh: "魔法書", 
image: "https://th.bing.com/th/id/OIP.AeZwnsWVVlHCWyz5gQ8wPgHaE3?w=281&h=184&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", 
video: "https://youtu.be/_VtwoB_sO9M?si=VaK908rx1_MW13zh", 
rarity: "稀有", 
category: "星耀契約", 
description: "封印古老符文的卷頁，知識與力量並存。" },
  
  { word: "wizard", zh: "巫師", 
image: "https://i.pinimg.com/736x/92/6f/bf/926fbf82d9f015be2a750e81a5a815d8.jpg", 
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
image: "https://i.pinimg.com/736x/01/7f/8a/017f8a99b8a21f772ad0457a5f3c8d80.jpg", 
rarity: "普通", 
category: "星耀契約", 
description: "儲存元素與時間的礦石，光影中低語。" },

  { word: "cloak", zh: "斗篷", 
image: "https://i.pinimg.com/originals/e2/c4/fe/e2c4feee2edb851af5244d8ac534845f.gif", 
video: "https://youtu.be/3cJOrF08e8w?si=XsVvKjuDD1RqPlOn", 
rarity: "普通", category: "星耀契約", description: "隱匿與防護的織物，夜色中的影舞者。" },

  { word: "enchant", zh: "附魔", 
image: "https://www.bing.com/th/id/OGC.7aa157841523e1566d385669afce9253?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.redd.it%2fgd10dymj6gea1.gif&ehk=k8tc8GHjoQoir0EDUtYI0FEYlyX8LHmzb1deDYAN50w%3d", 
video: "https://youtu.be/xs-B82vqAoc?si=7vx3ChVZ_8Nog9Gf", 
rarity: "稀有", category: "星耀契約", description: "將靈光注入凡物，綻放奇蹟能量。" },
  
{ word: "portal", zh: "傳送門", 
image: "https://www.bing.com/th/id/OGC.e70540ca945f95f2972a6da91d02d32a?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fhugelolcdn.com%2fi%2f342794.gif&ehk=1aFp%2fL3uBPoxhJZUM1agjPRq013cOWvqaYExKmsx7hU%3d",  video: "https://youtu.be/jCN_y8lPlhY?si=E7V7GJXFU0_F9oJI", 
rarity: "超稀有", category: "星耀契約", description: "跨越時空的裂縫，瞬移的詩篇。", youtube: "https://www.youtube.com/watch?v=3pAnRKD4raY" },

  { word: "familiar", zh: "侍從獸", image: "https://th.bing.com/th/id/R.39f563a74a197d11332d179774bdee6b?rik=CgHST3U4CJNoog&riu=http%3a%2f%2fimg.soogif.com%2f6AVk9RoJly2kJ4JOWM3EYdy9rcgrccSf.gif&ehk=nWxRrAdPQTzVhy4OMRQ73F4qwXPOewdA4osOeMrk4jw%3d&risl=&pid=ImgRaw&r=0", rarity: "稀有", category: "星耀契約", description: "忠誠之靈，魔法旅途的默契夥伴。" },
  { word: "runestone", zh: "符文石", image: "https://th.bing.com/th/id/OIP.HzrlhHVYgnn4NDBChKx_3gHaLI?pid=ImgDet&w=175&h=262&c=7&dpr=2", rarity: "普通", category: "星耀契約", description: "刻畫元素之印的古石，召喚與封印之鑰。" },
  { word: "cauldron", zh: "鍋爐", image: "https://png.pngtree.com/png-vector/20240519/ourlarge/pngtree-witch-cauldron-with-poison-cartoon-png-image_12487936.png", rarity: "普通", category: "星耀契約", description: "翻騰的藥湯，蒸氣中蘊含變化奧秘。" },
  { word: "magicmirror", zh: "魔鏡", image: "https://th.bing.com/th/id/OIP.rjXNEaJeWhBR2UeDHkbe2AAAAA?r=0&pid=ImgDet&w=208&h=208&c=7&dpr=1.5&cb=idpwebpc2", rarity: "稀有", category: "星耀契約", description: "穿著太空衣的探險者，跨出地心，追尋星辰夢。" },

  // 虛界驛站類型 (共7張)
  { word: "cyborg", zh: "賽博人", image: "https://image.cdn2.seaart.ai/2023-06-27/38974824558661/3e1ad08578685ce4c078f1407da7ed831107f0ef_high.webp", 
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
    "image": "https://i.pinimg.com/736x/a6/1c/c4/a61cc41137637459ef0ba795fac9c2b5.jpg",
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
image: "https://m.media-amazon.com/images/I/71i1VApBYzL._AC_SL1500_.jpg", 
video: "https://youtu.be/FoNnTM5Eb_E?si=KVg336U3BSh90T3C", 
rarity: "超稀有", 
category: "神話生物", description: "白蹄踏露，角尖閃耀純潔光芒，守護夢境邊界。", youtube: "https://www.youtube.com/watch?v=4V2xXqFgB_c" },

{"word": "qilin",
    "zh": "麒麟",
    "image": "https://i.pinimg.com/736x/9a/b0/9ab0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e.jpg",
    "video": "https://youtu.be/qIl1In2Ki3N?si=SsTtUuVvWwXxYyZz",
    "youtube": "https://www.youtube.com/watch?v=qIl1In2Ki3N",
    "rarity": "超稀有",
    "category": "神話生物",
    "description": "麟角閃耀和煦，蹄印留香大地，它的步履護佑萬民。"
  },

 {
    "word": "satyr",
    "zh": "薩堤爾",
    "image": "https://i.pinimg.com/736x/29/3a/293ac1d2e3f4a5b6c7d8e9f0a1b2c3d4.jpg",
    "video": "https://youtu.be/sAt5Yr6C7V8?si=QqWwEeRrTtYyUuIi",
    "youtube": "https://www.youtube.com/watch?v=sAt5Yr6C7V8",
    "rarity": "普通",
    "category": "神話生物",
    "description": "長角伴笛聲，森林歡宴隨步，他的舞姿揚起花雨。"
  },

  { word: "sphinx", zh: "斯芬克斯", image: "https://th.bing.com/th/id/R.1023971c501aa1fb00578146b3d94136?rik=0He4O%2fZh%2bQGmbg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-OqzM-wtK8Zg%2fUfE1U6gvpJI%2fs1600%2fimages%2b(1).jpg&ehk=oJRDRPqwIRJuuG8iBwUqDOYeZSSly4gFFhgVAtJG%2fBU%3d&risl=&pid=ImgRaw&r=0", rarity: "稀有", category: "神話生物", description: "石躯默立沙漠，智慧深邃，謎語如風語般迴盪。" },
  { word: "hydra", zh: "九頭蛇", image: "https://www.iamag.co/wp-content/uploads/2019/01/The-Art-of-Bryan-Sola-20.jpg", rarity: "超稀有", category: "神話生物", description: "每斬一頭，兩頭再生，深淵之水燃起不朽傳說。" },
  { word: "centaur", zh: "半人馬", image: "https://i.pinimg.com/originals/ce/ba/5c/ceba5ca2cd30348a7009bed55acab8d2.jpg", rarity: "普通", category: "神話生物", description: "半人馬多半都是勇猛善戰的暴烈戰士，他們可以快速的追擊敵人，也都擁有百步穿楊的神技。" },
  { word: "minotaur", zh: "牛頭人", image: "https://i.pinimg.com/originals/79/0f/8f/790f8f8c05b941d0b36dc8f89ad506a3.jpg", rarity: "稀有", category: "神話生物", description: "迷宮之心的守衛，怒吼如雷，角尖染血。" },
  { word: "griffin", zh: "獅鷲獸", image: "https://i.pinimg.com/736x/ce/34/aa/ce34aaa9df015a4dad547999ac2a87f3.jpg", rarity: "稀有", category: "神話生物", description: "金羽展翅，獅身鷲首，天空與大地的守望者。" },

{
    "word": "Monkey D. Luffy",
    "zh": "蒙奇·D·魯夫",
    "image": "https://i.pinimg.com/736x/a1/b2/c3/luffy.jpg",
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
    "image": "https://i.pinimg.com/736x/b2/c3/d4/zoro.jpg",
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
    "image": "https://i.pinimg.com/736x/c3/d4/e5/nami.jpg",
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
    "image": "https://i.pinimg.com/736x/d4/e5/f6/usopp.jpg",
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
    "image": "https://i.pinimg.com/736x/e5/f6/g7/sanji.jpg",
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
    "image": "https://i.pinimg.com/736x/f6/g7/h8/chopper.jpg",
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
    "image": "https://i.pinimg.com/736x/g7/h8/i9/robin.jpg",
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
    "image": "https://i.pinimg.com/736x/h8/i9/j0/franky.jpg",
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
    "image": "https://i.pinimg.com/736x/i9/j0/k1/brook.jpg",
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
    "image": "https://i.pinimg.com/736x/j0/k1/l2/jinbe.jpg",
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
    "image": "https://i.pinimg.com/736x/23/45/67/doflamingo.jpg",
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
    "image": "https://i.pinimg.com/736x/34/56/78/crocodile.jpg",
    "video": "https://youtu.be/CrOcOdIlE456?si=JKL012",
    "youtube": "https://www.youtube.com/watch?v=CrOcOdIlE456",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "沙漠之王的冷酷與陰謀並存，掌心乾坤袋藏著無盡陰影。"
  },
  {
    "word": "Enel",
    "zh": "艾尼路",
    "image": "https://i.pinimg.com/736x/45/67/89/enel.jpg",
    "video": "https://youtu.be/EnEl123456?si=MNO789",
    "youtube": "https://www.youtube.com/watch?v=EnEl123456",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "自封天上神明，雷電在指尖舞動；唯有無聲之處才能逃過他的審判。"
  },
  {
    "word": "Rob Lucci",
    "zh": "羅布·路奇",
    "image": "https://i.pinimg.com/736x/56/78/9a/lucci.jpg",
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
    "image": "https://i.pinimg.com/736x/67/89/ab/kaido.jpg",
    "video": "https://youtu.be/KaIdO98765?si=STU890",
    "youtube": "https://www.youtube.com/watch?v=KaIdO98765",
    "rarity": "超稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "自稱『世界最強生物』，醉酒如猛獸，拳拳帶雷霆之力，船身皆碎屑。"
  },
  {
    "word": "Charlotte Linlin",
    "zh": "夏洛特·玲玲",
    "image": "https://i.pinimg.com/736x/78/9a/bc/bigmom.jpg",
    "video": "https://youtu.be/BigMoM12345?si=VWX123",
    "youtube": "https://www.youtube.com/watch?v=BigMoM12345",
    "rarity": "超稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "掌管甜點與恐懼的女王，笑聲與飢餓並行，圓形臉蛋下是無盡飢渴。"
  },
  {
    "word": "Sakazuki (Akainu)",
    "zh": "赤犬·薩卡茲基",
    "image": "https://i.pinimg.com/736x/89/ab/cd/akainu.jpg",
    "video": "https://youtu.be/AkAiNu54321?si=YZA456",
    "youtube": "https://www.youtube.com/watch?v=AkAiNu54321",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "絕對正義的化身，熔岩在血液中流動；腳下每一步都是炙熱判決。"
  },
  {
    "word": "Borsalino (Kizaru)",
    "zh": "黃猿·博爾薩利諾",
    "image": "https://i.pinimg.com/736x/90/ab/cd/kizaru.jpg",
    "video": "https://youtu.be/KiZaRu98765?si=BCD789",
    "youtube": "https://www.youtube.com/watch?v=KiZaRu98765",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "光速行走如舞蹈，笑聲像星光閃爍；慢一拍就會被光芒吞噬。"
  },
  {
    "word": "Bartholomew Kuma",
    "zh": "巴索羅繆·熊",
    "image": "https://i.pinimg.com/736x/01/23/45/kuma.jpg",
    "video": "https://youtu.be/KuMa543210?si=EFG012",
    "youtube": "https://www.youtube.com/watch?v=KuMa543210",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Antagonist",
    "description": "可以瞬間推開一切痛苦，卻用沉默構築深邃；拳風輕拂卻撕裂靈魂。"
  },
{
    "word": "Gomu Gomu no Mi",
    "zh": "橡膠果實",
    "image": "https://i.pinimg.com/736x/aa/bb/cc/gomugumonomi.jpg",
    "video": "https://youtu.be/GmGuMu1234?si=XYZabc",
    "youtube": "https://www.youtube.com/watch?v=GmGuMu1234",
    "rarity": "超稀有",
    "category": "One Piece",
    "role": "Devil Fruit",
    "description": "吃下就能伸長如橡皮筋，甩出一拳就像放大版彈簧，打人還能順便做瑜珈。"
  },
  {
    "word": "Hito Hito no Mi",
    "zh": "人人果實",
    "image": "https://i.pinimg.com/736x/bb/cc/dd/hitohitonomi.jpg",
    "video": "https://youtu.be/HiToHiTo123?si=DEFuvw",
    "youtube": "https://www.youtube.com/watch?v=HiToHiTo123",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Devil Fruit",
    "description": "動物界的超級變身藥，一口咬下從走獸秒變智商爆表人類；配方穩定送醫必備。"
  },
  {
    "word": "Mera Mera no Mi",
    "zh": "炎炎果實",
    "image": "https://i.pinimg.com/736x/cc/dd/ee/merameranomi.jpg",
    "video": "https://youtu.be/MeRaMeRa123?si=GHIjkl",
    "youtube": "https://www.youtube.com/watch?v=MeRaMeRa123",
    "rarity": "稀有",
    "category": "One Piece",
    "role": "Devil Fruit",
    "description": "身體化為火焰，連打噴嚏都能爆出小火苗，看電影最好別坐過近。"
  },
  {
    "word": "Gura Gura no Mi",
    "zh": "震震果實",
    "image": "https://i.pinimg.com/736x/dd/ee/ff/guraguranomi.jpg",
    "video": "https://youtu.be/GuRaGuRa123?si=MNOpqr",
    "youtube": "https://www.youtube.com/watch?v=GuRaGuRa123",
    "rarity": "超稀有",
    "category": "One Piece",
    "role": "Devil Fruit",
    "description": "一拳揮出就能掀起地動山搖，連隔壁房子的貓都能被嚇得打哈欠。"
  },
  {
    "word": "Yami Yami no Mi",
    "zh": "暗暗果實",
    "image": "https://i.pinimg.com/736x/ee/ff/00/yamiyaminomi.jpg",
    "video": "https://youtu.be/YaMiYaMi123?si=STUvwx",
    "youtube": "https://www.youtube.com/watch?v=YaMiYaMi123",
    "rarity": "超稀有",
    "category": "One Piece",
    "role": "Devil Fruit",
    "description": "黑洞般吞噬一切力量，什麼都吸得入；想跟它做遊戲？先確定你能承受重力。"
  },  
// 未來都市類型 (共7張)
  { word: "neoncity", zh: "霓虹都市", image: "https://th.bing.com/th/id/OIP.ecqHXnof2qkj2k4HSZ_zVgHaE7?w=626&h=417&rs=1&pid=ImgDetMain", rarity: "稀有", category: "未來都市", description: "光影交織的街道，夢想與現實在霓虹中共舞。" },
  { word: "hovercar", zh: "懸浮車", image: "https://img.freepik.com/premium-photo/amazing-flying-car-combining-futuristic-technology_951992-2843.jpg", rarity: "稀有", category: "未來都市", description: "車輪消逝於街面，未來的律動在空中飛馳。" },
  { word: "cybertower", zh: "賽博塔", image: "https://img.freepik.com/premium-photo/a-futuristic-cityscape-illuminated-by-the-glow-of-computer-science-technology_349863-1434.jpg", rarity: "超稀有", category: "未來都市", description: "高聳入雲，霧化之光刷洗每層記憶。" },
  { word: "aiassistant", zh: "人工助手", image: "https://i.pinimg.com/736x/c1/59/4e/c1594eae920d39a96db2bbdde3a9682a.jpg", rarity: "稀有", category: "未來都市", description: "數據流中誕生的微笑，智慧比肩人心。" },
  { word: "dronepolice", zh: "警用無人機", image: "https://th.bing.com/th/id/OIP.FEduWQQ7mvqjQTGuV-DOowAAAA?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2", rarity: "普通", category: "未來都市", description: "金屬翅膀巡弋，秩序的守護者從天而降。" },
  { word: "skybridge", zh: "空中廊橋", image: "https://image.archiposition.com/2022/07/71658314181.jpg", rarity: "稀有", category: "未來都市", description: "連結高樓的透明之路，踩夢踏歌而行。" },
  { word: "holomarket", zh: "全息市場", image: "https://thumbs.dreamstime.com/b/holographic-interface-displaying-blueprints-301152804.jpg", rarity: "普通", category: "未來都市", description: "數位擺攤，買賣停留於光與影的交界。" },
 

 { word: "anglerfish", zh: "鮟鱇魚", image: "https://i.pinimg.com/736x/13/67/8f/13678fb8d82ff252a356308f90bc2db2.jpg", video: "https://youtu.be/iQ3JnFi53x0?si=3IX3mP_l-OE00lSa", rarity: "普通", category: "深海奇觀", description: "燈籠魚的本名是鮟鱇魚。這種魚的長度在80釐米左右，身體扁平，而且很柔軟。它的徒步很大，呈圓盤狀，尾巴則很細小，下頜吐出，兩頜上有大量尖銳的牙齒，鰓孔很大，體表沒有鱗片。由於它不常遊動，捕食機會少，所以需要用到頭頂的小燈籠來引誘獵物。" },

  { word: "vampiresquid", zh: "吸血烏賊", image: "https://www.mbari.org/wp-content/uploads/2020/06/Vampyroteuthis-infernalis_vamp-T1152-09_15_43_14-1030x579.jpg", video: "https://youtu.be/FEyfesjentE?si=wskJuIbiqdZCg5aj", rarity: "超稀有", category: "深海奇觀", description: "披著黑紅披風，游走於生與死的邊界之間。" },

  { word: "gulper eel", zh: "翻鬥鰻", image: "https://th.bing.com/th/id/OIP.Z7gkgO8GLrOpFgDBqXvGGQHaDv?w=650&h=329&rs=1&pid=ImgDetMain", video: "https://youtu.be/vYyizW-U1fQ?si=C8wFixE4b0yUdYbb", rarity: "稀有", category: "深海奇觀", description: "一口吞噬整片夜色，肚裡藏著無垠的深海夢魘。" },

  
  // ====== MP4 影片作為主要媒體的卡片範例 ======
  // 這些卡片使用 MP4 檔案作為 image 屬性，直接顯示影片而不是圖片
   { word: "oarfish", zh: "王帶魚", image: "https://coastalanglermag.com/wp-content/uploads/2019/12/oar-fish.jpg", video: "https://youtu.be/yK2g4Nwdxco?si=JhdfXY3_731ZCpWi", rarity: "超稀有", category: "深海奇觀", description: "長如銀絲的身軀，在深海中緩緩舞動，彷若古老的水晶旗幟。" },
  { word: "fangtooth", zh: "尖齒魚", image: "https://i.pinimg.com/originals/a6/cd/3f/a6cd3f0a9cc47b9794fa89633e4b119d.jpg", video: "https://www.youtube.com/watch?v=jCWop491Q9Y", rarity: "稀有", category: "深海奇觀", description: "比身軀更長的利牙，吞噬每一道入侵的陰影。" },
  { word: "barreleye", zh: "桶眼魚", image: "https://th.bing.com/th/id/R.c22825941a287453b48d50dc07dfc1d0?rik=seFt%2bWIurOD8XA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-GBe3T8Tl7OI%2fUn7fZPzqJ7I%2fAAAAAAAABL8%2fV6rHlHOKtFg%2fs1600%2fBarreleye.jpg&ehk=n9GJFy5emOZedWNHVXD3KHEXA8ufbLXUPxSQHWnqBJA%3d&risl=&pid=ImgRaw&r=0", video: "https://youtu.be/24sUoSHw4w0?si=lScAhAJLugaRvKE6", rarity: "稀有", category: "深海奇觀", description: "透明的頭蓋，映照著深海最隱秘的星辰" },
  { word: "tripod fish", zh: "三腳魚", image: "https://th.bing.com/th/id/OIP.66k0Y-Tym-KtNGf1zwp5fgAAAA?rs=1&pid=ImgDetMain", video: "https://youtu.be/ZjZFWxS1c-A?si=azLtpa9DJSI_h-Wt", rarity: "普通", category: "深海奇觀", description: "三隻纖細支腳，穩立於海床，靜候命運的浪潮。" },
  { word: "viperfish", zh: "毒蛇魚", image: "https://i.redd.it/h91daiv3q9811.jpg", video: "https://youtu.be/_ax2Vp77hA0?si=dVRtBy5ySlJ0V3Oq", rarity: "稀有", category: "深海奇觀", description: "血紅的觸手，刺破黑暗的瞬間，獵物已無處可逃。" },
  { word: "hatchetfish", zh: "斧魚", image: "https://media.australian.museum/media/dd/images/Giant_Hatchetfish_Argyropelecus_gigas.width-800.d69124e.jpg",video: "https://youtu.be/9jpMq8Jttn8?si=YUhe4CPS2QU38RTK",rarity: "普通", category: "深海奇觀", description: "銀色身板薄如刃鋒，橫切深淵中最沉重的寂靜。" },
  { word: "ghost_shark", zh: "幽靈鯊", image: "img/cards/ghost_shark.png", video: "https://youtube.com/shorts/BOrGeyVEm3c?si=0krWO1_phQ72sBhD", rarity: "超稀有", category: "深海奇觀", description: "身形若有若無，幽魂般掠過前方，留下一縷寒意。" },
  { word: "pelican_eel", zh: "鵜鶘鰻", image: "img/cards/pelican_eel.png", video: "https://youtu.be/tInHUbz3B_Y?si=QDdpsrwyb9RxFp_e", rarity: "超稀有", category: "深海奇觀", description: "大口似鵜鶘，吞噬周遭一切光明與陰影。" },
  { word: "blobfish", zh: "黏魚", image: "https://thumbs.dreamstime.com/b/blobfish-fish-sits-ocean-ai-generated-photo-k-portrait-front-view-hd-image-background-323155083.jpg", rarity: "普通", category: "深海奇觀", description: "如軟泥般的身形，卻保存著最原始的生命密碼。" },
  { word: "frilled_shark", zh: "褶鯊", image: "https://stylesatlife.com/wp-content/uploads/2023/08/Frilled-shark.jpg", video: "https://youtu.be/qYH32gKMHuc?si=1Og9DPPeQA_NAekF", rarity: "超稀有", category: "深海奇觀", description: "古老如化石，卻依舊在黑暗中低吟遠古的詩篇。" },
  { word: "sixgill_shark", zh: "六鰓鯊", image: "https://66.media.tumblr.com/300e4f7cacc6ddf4f4cab7345258ab01/tumblr_inline_ott9ri96jf1te25u3_540.gifv", video: "https://youtu.be/E5YA5BUyL1w?si=zQDfcYncIB7vhntd", rarity: "超稀有", category: "深海奇觀", description: "六瓣呼吸孔，如深海的節拍，跳動著生命的韻律。" },
  { word: "black_swallower", zh: "吞天鱵", image: "https://i.ytimg.com/vi/tcaIM-iC-Z8/maxresdefault.jpg", rarity: "稀有", category: "深海奇觀", description: "黑暗中探出巨口，連影子都無從逃脫。" },
  { word: "snailfish", zh: "蝸牛魚", image: "https://www.bing.com/th/id/OGC.28732d765f6f1f0591b65138d7b4eaa8?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia-cdn-v2.laodong.vn%2fStorage%2fNewsPortal%2f2023%2f4%2f3%2f1175112%2fCon-Ca.gif&ehk=SnTKJMw8dPU7t%2fa13hRa0Pl%2bkrSQBifxTWf8l5R3YSs%3d", video: "https://youtu.be/C0vo2taQcfo?si=A-EFIlLlMq5EJj7P",rarity: "普通", category: "深海奇觀", description: "柔軟如蝸殼，感知著海底最微弱的顫動。" },
  { word: "lantern_shark", zh: "燈籠鯊",
image: "https://www.bing.com/th/id/OGC.a1dccfcebdefc0d691c1e47e496771dc?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2f64.media.tumblr.com%2f4eafd1be475d4e9792f5378254d91dae%2ftumblr_oku7alxf4B1vyihqco2_400.gif&ehk=2wtEPk4qYyQFQdJY36jEY7bfA%2f8SvkAfpV2NovvvcNY%3d", 
video: "https://youtu.be/FAFQ181E5aU?si=jdb4MoMDnapB0Mum", 
rarity: "普通", category: "深海奇觀", 
description: "沿側散發微光，化作深海的流動火炬。" },
  { word: "polka_dot_batfish", zh: "圓點蝙蝠魚", image: "https://tse4.mm.bing.net/th/id/OIP.m1lieKThV7nqFNpqBWPCLwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
video: "https://youtu.be/StkqvlcnuHU?si=1otdK4Ar4ac89hr6",
rarity: "普通", category: "深海奇觀", description: "圓斑如夜空星點，靜靜佇立於深淵之底。" },
  { word: "thornyhead", zh: "刺頭魚", image: "https://th.bing.com/th/id/R.501b709810059c1c9b30899542be3c4a?rik=slZvkxkwy1Qj6w&pid=ImgRaw&r=0", video: "https://youtu.be/I1USCFbcUr8?si=aUNn5sz5yILIClNz", rarity: "普通", category: "深海奇觀", description: "頭頂荊棘，如同深海的王冠，守護著未知王國。" },
  { word: "tubeshoulder", zh: "管肩魚", image: "https://media.australian.museum/media/dd/images/Spangled_Tubeshoulder_Persparsia_kopua_Philli.width-1200.7f9f776.jpg", video: "https://youtu.be/S7HStq3Gb-I?si=vvyrvE6JSN2mas5b",rarity: "普通", category: "深海奇觀", description: "身旁如管，捕捉每一縷飄忽的水流低語。" },
  { word: "deepwater cardinalfish", zh: "深水朱雀魚", image: "https://www.meerwasser-lexikon.de/imgHaupt/47469_rngM7aCXFJ.jpg",  video: "https://youtu.be/Ixs8uiaTzZs?si=Egk5Wr4dcZuy5R40",rarity: "普通", category: "深海奇觀", description: "猩紅如焰，照亮深海最孤寂的角落。" },

  { word: "longnosed_chimaera", zh: "長吻軛鰻", image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzVqem93dHp3anRnYTB5Y3N1aG5vaDkwY3V1aGhmb2d5YnpmazYzZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BZaITVys8RxALUSAhX/giphy.gif", video: "https://www.youtube.com/watch?v=rJGZTiNEFRs", rarity: "稀有", category: "深海奇觀", description: "長鼻探索深海秘密，優雅游弋於海底峽谷間。" },
  { word: "blackdragon", zh: "黑龍魚", image: "https://shopstore-manage.shopstore.tw/upload/1947/product/1947_616c18eaa3fe0.jpeg", video: "https://www.youtube.com/watch?v=jCWop491Q9Y", rarity: "稀有", category: "深海奇觀", description: "身披鱗甲如夜，游動間釋放寒光龍息。" },
  { word: "slickhead", zh: "光頭魚", image: "https://th.bing.com/th/id/OIP.6vKXX5piLonp5tIxbi143AHaEx?r=0&rs=1&pid=ImgDetMain", rarity: "普通", category: "深海奇觀", description: "光滑無鱗，像遺落於深淵的水晶之髮。" },
  { word: "faceless_cusk", zh: "無面咕斯克", image: "https://th.bing.com/th/id/OIP.C77f6__gsS_lUP03SDAgfAHaGe?w=200&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", rarity: "普通", category: "深海奇觀", description: "沒有面孔，卻讀得懂深海最隱秘的秘密。" },
  { word: "slender_snipe_eel", zh: "細鷺鰻", image: "https://th.bing.com/th/id/OIP.x1yAPA6274dO8139sP7nvAHaHa?w=175&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", rarity: "稀有", category: "深海奇觀", description: "纖長如絲的身影，靜靜滑過無垠黑幕。" },
  { word: "dragonfish", zh: "龍魚", image: "https://www.bing.com/th/id/OGC.edbe1e4cf6cb3a234a570adb804c1a3c?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2f64.media.tumblr.com%2f684e1724083713d0476c4101e023130d%2f7537b3524e5b9287-b3%2fs400x600%2f48208d699efa6e495190abbb2d877443cce88e7e.gifv&ehk=MdmHxoNJKKRzKEOohSGh4j%2bEkojZnEo3Tv%2bbRYDCU6M%3d", rarity: "超稀有", category: "深海奇觀", description: "體內發光器宛如龍珠，破開深海的重重暗影。" },
  { word: "bristlemouth", zh: "刺口魚", image: "https://hakaimagazine.com/wp-content/uploads/banner_6.jpg", rarity: "普通", category: "深海奇觀", description: "無數細刺如微光利刃，切割著黑暗的寂靜。" },
  { word: "oni", zh: "鬼", image: "https://mythlok.b-cdn.net/wp-content/uploads/2024/06/Mythlok-Oni.jpg", rarity: "稀有", category: "鏡世妖光", description: "赤角鋼牙，揮舞鐵棒，惡鬼嘶吼震碎人間怨靈。", multiplier: 3.0, cost: 25 },
  { word: "tengu", zh: "天狗", image: "https://budou-chan.jp/wp-content/uploads/2019/11/84491995_10216816781394950_3113422230957064192_o.jpg", rarity: "稀有", category: "鏡世妖光", description: "長喙紅面，掌風如颶，俯瞰山林守護或淩遲旅人。", multiplier: 2.5, cost: 20 },
  { word: "kappa", zh: "河童", image: "https://i.pinimg.com/736x/11/a2/fe/11a2fe7b4a2d44ff4e741dbebf34f199.jpg", rarity: "稀有", category: "鏡世妖光", description: "頭頂水窪，戲水調皮，又可奪人靈魂於川澤之間。", multiplier: 1.5, cost: 10 },
  { word: "jorogumo", zh: "絡新婦", image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1686744764/catalog/1668686441780506624/y8id46izjublc5bbg69q.jpg", rarity: "稀有", category: "鏡世妖光", description: "蛛絲編織紅色誘惑，妄圖吞噬入網的凡人。", multiplier: 2.5, cost: 20 },
  { word: "umibozu", zh: "海坊主", image: "https://img.3dmgame.com/uploads/allimg/170218/135409E19-28.jpg", rarity: "超稀有", category: "鏡世妖光", description: "黑影駕雲，掀起巨浪，只因船上一句咒語。", multiplier: 3.0, cost: 25 },
  { word: "bakekujira", zh: "化鯨", image: "https://i.pinimg.com/736x/cb/eb/79/cbeb79b75f0094867d714d84975a97e5.jpg", rarity: "稀有", category: "鏡世妖光", description: "鬼魂鯨影漂浮於海面，帶來不祥的枯骨暴雨。", multiplier: 3.0, cost: 25 },
  { word: "pompeii", zh: "龐貝城", image: "img/cards/pompeii.png", rarity: "稀有", category: "失落城市", description: "火山灰掩埋了榮華，如今沉默的石徑訴說亡靈的低語。", multiplier: 1.5, cost: 10 },
  { word: "machu_picchu", zh: "馬丘比丘", image: "https://1.bp.blogspot.com/-JzRS-D_azj8/U2ZIC_o-qqI/AAAAAAAAQIg/8vc8x9L8Pn0/s1600/MACCHU+PICCHU.gif", rarity: "超稀有", category: "失落城市", description: "雲霧繚繞的石階，昔日王朝的輝煌在山谷間回響。", multiplier: 2.0, cost: 15 },
  { word: "petra", zh: "佩特拉", image: "https://th.bing.com/th/id/R.2789ff490764221bdca6b6499d78eb91?rik=9Iej6YaM9nLxeg&pid=ImgRaw&r=0", rarity: "超稀有", category: "失落城市", description: "玫瑰色的石窟建築，刻畫出納巴泰人的秘密與傳奇。", multiplier: 2.0, cost: 15 },
  { word: "angkor_wat", zh: "吳哥窟", image: "https://th.bing.com/th/id/OIP.zDsdl8bdoEKYTTSZtGjTKwHaHa?w=200&h=200&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3", rarity: "超稀有", category: "失落城市", description: "石雕神像與森林藤蔓共舞，每一尊微笑都是千年凝視。", multiplier: 2.0, cost: 15 },
  { word: "tikal", zh: "提卡爾", image: "https://cdn.britannica.com/30/9030-050-9EB64E8E/Great-Plaza-stelae-Guatemala-Tikal-Temple-Jaguar.jpg?w=300", rarity: "稀有", category: "失落城市", description: "高聳金字塔隱於熱帶雨林，猶如古瑪雅人的天空階梯。", multiplier: 1.5, cost: 10 },
  { word: "catalhoyuk", zh: "差塔霍伊克", image: "https://th.bing.com/th/id/R.535ef1ea01267a08323e31ebcecdef92?rik=QZjc8%2fqED%2fdADQ&pid=ImgRaw&r=0", rarity: "普通", category: "失落城市", description: "泥磚築就的聚落，將新石器時代的生活印跡凝固於時光中。", multiplier: 1.0, cost: 5 },
  { word: "dodo", zh: "渡渡鳥", image: "https://wr-images.chinatimes.com/newsphoto/2023-02-01/1024/20230201900778.jpg", rarity: "稀有", category: "滅絕動物", description: "無法飛翔的巨鳥，於毛里求斯的樹影間永遠消逝。", multiplier: 1.5, cost: 10 },
  { word: "passenger pigeon", zh: "旅鴿", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV5CdONPqYrgRvNWLiQz2dp28bCcXwjFudG5iwps24iV7Ch0Q8GnRilD-w0lMiLnw-q-fuY7s8QIMuvioGkz85Jjix0Jl0otpLXlVeqSt-ZGoGe8_3-L7KWEC4IfZQs1N0BwdyfKhyOkaw/w1200-h630-p-k-no-nu/passenger+pigeon.jpg", rarity: "普通", category: "滅絕動物", description: "曾遮天蔽日的鴿群，如今只剩沉靜的羽毛傳說。", multiplier: 1.0, cost: 5 },
  { word: "tasmanian tiger", zh: "袋狼", image: "https://www.tanmizhi.com/img/allimg/11/48-22112110501X22.jpg", rarity: "稀有", category: "滅絕動物", description: "斑紋似鬼魅，於塔斯馬尼亞的夜幕中消散無蹤。", multiplier: 1.5, cost: 10 },
  { word: "woolly_mammoth", zh: "長毛象", image: "https://tse4.mm.bing.net/th/id/OIP.kytIqsf5tQzPR4lBg5aUYAHaHa?r=0&cb=thvnext&w=480&h=480&rs=1&pid=ImgDetMain&o=7&rm=3", rarity: "超稀有", category: "滅絕動物", description: "冰原巨獸的足跡，永遠凍結在史前的霜雪裡。", multiplier: 2.0, cost: 15 },
  { word: "howl", zh: "霍爾", image: "https://www.bing.com/th/id/OGC.8bc2ba6bdc5bc6f1429defacf7e2ac91?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmegapx-assets.dcard.tw%2fimages%2ff0f51b38-17ea-4208-bb05-54f6a88c5311%2ffull.jpeg&ehk=N2IH8foq7dfoimQyUreZdh3w7dP8F9hl1%2bcW9Dg9CNc%3d", rarity: "超稀有", category: "霍爾城堡", description: "魔法師霍爾，紅髮飛揚如火，心底藏著守護與逃避的勇氣。", multiplier: 2.0, cost: 15 },
  { word: "sophie", zh: "蘇菲", image: "https://cdn0-t17.techbang.com/system/attached_images/2016/08/197525/original/3fdf352ac6c8b1e389fa913bf7b26bc0.gif?1472199669", rarity: "稀有", category: "霍爾城堡", description: "溫柔理髮師，被詛咒成老太婆，卻以堅韌與愛化解一切魔障。", multiplier: 1.5, cost: 10 },
  
{ word: "calcifer", 
zh: "卡爾西法", 
image: "https://cdn2.ettoday.net/images/1475/1475456.gif", 
rarity: "超稀有", 
 "video": "https://youtu.be/Guxx_KTm_6M?si=tcUTrHn8iVF74OGx",
category: "霍爾城堡", 
description: "被封印的火焰惡魔，暖心又鬧騰，與霍爾共築漂浮城堡之心臟。", multiplier: 2.0, cost: 15 },
  
{ word: "markl", zh: "馬克魯", image: "https://i.pinimg.com/736x/11/04/98/110498925e7af2214f3a33c0e5b42d27.jpg", rarity: "稀有", category: "霍爾城堡", description: "霍爾的小徒弟，懷抱憧憬，學習魔法的第一步，如晨光般清新。", multiplier: 1.5, cost: 10 },
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
  { word: "Dionysus", zh: "狄俄倪索斯", image: "https://www.paradijsvogelsmagazine.nl/wp-content/uploads/2023/10/dionysus-7683512_1920.jpg", rarity: "稀有", category: "希臘神話", description: "酒神與狂歡之主，葡萄美酒與歡笑的化身。" },
  { word: "Persephone", zh: "珀耳塞福涅", image: "https://cdn.openart.ai/stable_diffusion/af3394f52d952263c6c773045bcc5391f6702033_2000x2000.webp", rarity: "超稀有", category: "希臘神話", description: "冥后與春之女神，往返陰陽界的季節女王。" },
  { word: "Hestia", zh: "赫斯提亞", image: "https://i.etsystatic.com/10441898/c/2143/2143/0/0/il/b01774/5669551924/il_600x600.5669551924_g09a.jpg", video: "https://youtu.be/7ySaAMY7Xp4?si=NkuFFnR3JegMOmZh", rarity: "普通", category: "希臘神話", description: "爐灶與家園女神，溫暖與團聚的象徵。" },
  { word: "Eros", zh: "伊洛斯", image: "https://example.com/images/eros.png", rarity: "稀有", category: "希臘神話", description: "愛神之子，金箭一射即中，牽動心弦。" },
  { word: "Nike", zh: "勝利女神", image: "https://example.com/images/nike.png", rarity: "稀有", category: "希臘神話", description: "翱翔戰場之上，將勝利之冠賜予英雄。" },
  { word: "Helios", zh: "赫利俄斯", image: "https://example.com/images/helios.png", rarity: "超稀有", category: "希臘神話", description: "日輪駕馭者，每日馳騁天際，光芒萬丈。" },
  { word: "Selene", zh: "賽勒涅", image: "https://example.com/images/selene.png", rarity: "稀有", category: "希臘神話", description: "月亮女神，銀光灑落人間的溫柔使者。" },
  { word: "Pan", zh: "潘神", image: "https://example.com/images/pan.png", rarity: "普通", category: "希臘神話", description: "牧神與山林守護者，笛聲迴盪野外。" },
  { word: "Nausicaä", zh: "娜烏西卡", image: "https://example.com/images/nausicaa_character.png", rarity: "超稀有", category: "宮崎駿", description: "風之谷的少女公主，擁有與自然溝通的能力。" },
  { word: "Sheeta", zh: "希達", image: "https://example.com/images/sheeta.png", rarity: "稀有", category: "宮崎駿", description: "天空之城的神秘公主，承載古代文明的秘密。" },
  { word: "Mei Kusakabe", zh: "草壁梅", image: "https://i.pinimg.com/736x/8b/00/91/8b00917830b11e63c6ee0a76fc6b2230.jpg", rarity: "普通", category: "宮崎駿", description: "龍貓中的活潑小女孩，好奇心驅使她探索森林。" },
  { word: "Kiki", zh: "奇奇", image: "https://example.com/images/kiki_character.png", rarity: "稀有", category: "宮崎駿", description: "魔女宅急便的年輕魔女，以飛行麂皮掃帚送達夢想。" },
  { word: "Porco Rosso", zh: "紅豬", image: "https://example.com/images/porco_character.png", rarity: "超稀有", category: "宮崎駿", description: "紅豬中的飛行王牌，豬鼻下的英雄靈魂。" },
  { word: "Shoukichi", zh: "小吉", image: "https://example.com/images/shoukichi.png", rarity: "普通", category: "宮崎駿", description: "平成狸合戰的年輕狸貓，帶領夥伴對抗人類侵擾。" },
  { word: "San", zh: "珊", image: "https://example.com/images/san.png", rarity: "稀有", category: "宮崎駿", description: "幽靈公主中被狼群撫養的少女，捍衛森林靈魂。" },
  { word: "Chihiro Ogino", zh: "荻野千尋", image: "https://example.com/images/chihiro.png", rarity: "超稀有", category: "宮崎駿", description: "千與千尋的勇敢少女，在神祕浴場中尋找自我。" },
  { word: "Ponyo", zh: "波妞", image: "https://example.com/images/ponyo_character.png", rarity: "稀有", category: "宮崎駿", description: "崖上的波妞，小金魚渴望成為人類的奇幻化身。" },
  { word: "Jiro Horikoshi", zh: "堀越二郎", image: "https://example.com/images/jiro.png", rarity: "超稀有", category: "宮崎駿", description: "風起中的飛機設計師，用夢想雕塑天空。" },
  { word: "The Man", zh: "漂流者", image: "https://example.com/images/red_turtle_man.png", rarity: "普通", category: "宮崎駿", description: "紅龜樹島中的無名漂流者，與巨龜展開生命對話。" },
  { word: "Haku", zh: "白龍", image: "https://example.com/images/haku.png", rarity: "超稀有", category: "宮崎駿", description: "千尋的守護者，化作龍形帶來救贖。" },
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
