const avatars = [
  'img/avatars/avatar_TL.png',
  'img/avatars/avatar_TR.png',
  'img/avatars/avatar_BL.png',
  'img/avatars/avatar_BR.png',
  'img/avatars/avatar_astro1.png',
  'img/avatars/avatar_spacekid.png'
];

function saveName() {
  const input = document.getElementById('nameInput');
  const name = input.value.trim();
  if (!name) return;
  localStorage.setItem('playerName', name);
  document.getElementById('playerNameDisplay').textContent = `你的名字：${name}`;
}

function renderAvatars(selectedAvatar) {
  const container = document.getElementById('avatarCarousel');
  container.innerHTML = '';
  avatars.forEach(src => {
    const div = document.createElement('div');
    div.className = 'avatarSlide';
    div.style.backgroundImage = `url('${src}')`;
    if (src === selectedAvatar) div.classList.add('selected');
    div.onclick = () => {
      localStorage.setItem('selectedAvatar', src);
      document.getElementById('avatar').src = src;
      renderAvatars(src);
    };
    container.appendChild(div);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const name = localStorage.getItem('playerName');
  if (name) {
    document.getElementById('playerNameDisplay').textContent = `你的名字：${name}`;
    document.getElementById('nameInput').value = name;
  }

  const savedAvatar = localStorage.getItem('selectedAvatar') || avatars[0];
  document.getElementById('avatar').src = savedAvatar;
  renderAvatars(savedAvatar);

  window.saveName = saveName;
});