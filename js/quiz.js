const params = new URLSearchParams(window.location.search);
const category = params.get("category");  // e.g. "custom3" 或 "aries"
const wordList = window.vocabData[category] || [];
if (wordList.length === 0) {
  alert("⚠️ 此關卡字庫為空，無法開始測驗。");
  // 可跳回 atlas.html
} else {
  const displayName = category.startsWith("custom")
    ? (localStorage.getItem(category + "_name") || category)
    : category.toUpperCase();
  document.getElementById("quizTitle").textContent = "關卡：" + displayName;
  // 接下來用 wordList 進行打字測驗
}
