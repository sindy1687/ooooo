// js/main.js

// 讀取 URL 參數，決定要載入哪個星座
const params = new URLSearchParams(location.search);
const categoryKey = params.get('category') || 'aries';
document.getElementById('categoryName').textContent = categoryKey;

// 由於現在 vocabData 已經被外部檔案定義好了，可以直接拿來用
let words = vocabData[categoryKey] || [];
words = words.slice(0, 20);

let current = null;
let used = [];
let wrongList = [];
let correctCount = 0;
let timer = null;
let timeLeft = 30;
let answerStartTime = 0;

// 讀取並顯示總星星，不會重置
let totalStarCount = parseInt(localStorage.getItem('totalStars') || '0', 10);
function updateTotal() {
  document.getElementById('totalStarCount').textContent = totalStarCount;
}

// 使用新的發音系統
function speak(text) {
  if (!text) return;
  SoundSystem.speech.speakWord(text);
}

function speakCurrentWord() {
  if (!current) return;
  SoundSystem.speech.speakWord(current.en);
}

function updateQuestionCount() {
  document.getElementById('currentQuestion').textContent = used.length;
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 30;
  document.getElementById('timeLeft').textContent = timeLeft;
  const timerDiv = document.getElementById('timerDisplay');
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timeLeft').textContent = timeLeft;
    timerDiv.classList.toggle('danger', timeLeft <= 5);
    if (timeLeft <= 0) {
      clearInterval(timer);
      wrongList.push(current);
      nextWord();
    }
  }, 1000);
  answerStartTime = Date.now();
}

function showResultPanel() {
  const earnedStars = Math.min(correctCount, 10);
  const sessionStars = earnedStars * 2;
  totalStarCount += sessionStars;
  localStorage.setItem('totalStars', totalStarCount);

  document.getElementById('sessionStars').textContent = sessionStars;
  document.getElementById('sessionCorrect').textContent = correctCount;
  document.getElementById('sessionWrong').textContent = wrongList.length;
  document.getElementById('sessionTotal').textContent = totalStarCount;
  document.getElementById('wrongBtn').style.display = wrongList.length ? 'inline-block' : 'none';
  document.getElementById('resultModal').style.display = 'flex';
  disablePlay();
  updateTotal();
}
function disablePlay() {
  document.getElementById('answerInput').disabled = true;
  document.querySelectorAll('.btn-row button').forEach(btn => btn.disabled = true);
}
function enablePlay() {
  document.getElementById('answerInput').disabled = false;
  document.querySelectorAll('.btn-row button').forEach(btn => btn.disabled = false);
}

function showWrongModal() {
  const list = document.getElementById('wrongItems');
  list.innerHTML = '';
  wrongList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.zh} — ${item.en}`;
    list.appendChild(li);
  });
  document.getElementById('wrongModal').style.display = 'flex';
}
function closeWrongModal() {
  document.getElementById('wrongModal').style.display = 'none';
}
function goHome() {
  location.href = 'index.html';
}

function nextWord() {
  if (used.length >= words.length) {
    document.getElementById('wordDisplay').textContent = '✅ 挑戰完成';
    clearInterval(timer);
    showResultPanel();
    return;
  }
  const available = words.filter(w => !used.includes(w.en));
  current = available[Math.floor(Math.random() * available.length)];
  used.push(current.en);
  updateQuestionCount();
  document.getElementById('wordDisplay').textContent = `${current.en}  ${current.zh}`;
  document.getElementById('answerInput').value = '';
  document.getElementById('feedback').textContent = '';
  speak(current.en);
  startTimer();
  document.getElementById('resultModal').style.display = 'none';
  document.getElementById('wrongModal').style.display = 'none';
  enablePlay();
}

function checkAnswer() {
  if (!current) return;
  const ans = document.getElementById('answerInput').value.trim().toLowerCase();
  if (ans === current.en.toLowerCase()) {
    document.getElementById('feedback').textContent = '✅ 正確';
    document.getElementById('feedback').style.color = '#0f0';
    correctCount++;
  } else {
    document.getElementById('feedback').textContent = `❌ 正解是：${current.en}`;
    document.getElementById('feedback').style.color = '#f66';
    wrongList.push(current);
  }
  clearInterval(timer);
  setTimeout(() => nextWord(), 800);
}

function restartGame() {
  used = [];
  wrongList = [];
  correctCount = 0;
  document.getElementById('currentQuestion').textContent = '0';
  document.getElementById('resultModal').style.display = 'none';
  document.getElementById('wrongModal').style.display = 'none';
  nextWord();
}

document.getElementById('answerInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') checkAnswer();
});

// TTS voices 載入
let voices = [];
function loadVoices() {
  voices = window.speechSynthesis.getVoices();
}
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = loadVoices;
}
loadVoices();

// 載入並顯示玩家資訊
function loadPlayerInfo() {
  const name = localStorage.getItem('playerName') || '未命名';
  if (document.getElementById('playerName')) {
    document.getElementById('playerName').textContent = `玩家：${name}`;
  }
  const avatarSrc = localStorage.getItem('selectedAvatar');
  if (avatarSrc && document.getElementById('playerAvatar')) {
    document.getElementById('playerAvatar').src = avatarSrc;
  }
}
window.addEventListener('storage', function(e) {
  if (e.key === 'playerName' || e.key === 'selectedAvatar') {
    loadPlayerInfo();
  }
});
window.addEventListener('load', () => {
  loadPlayerInfo();
  updateTotal();
  updateQuestionCount();
  nextWord();
});