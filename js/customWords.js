// js/customWords.js
// 放使用者在星座圖鑑中「新增自訂」的單字
// 結構是：customWordsData = { categoryName: [word1, word2, ...], ... }
// 目前範例只用一個 key（"custom"），實際可自行擴充

const customWordsData = {
  // 一開始可以保持空物件，之後使用者在 atlas.html 中新增才會寫進 localStorage
  // 這裡不需要預設內容
};

// 如果之後要讓這個物件在全域可直接拿到，可加上以下一行：
// window.customWordsData = customWordsData;
