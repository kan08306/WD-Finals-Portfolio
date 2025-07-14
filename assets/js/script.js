function toggleHeaderBox() {
  const navBox = document.getElementById('navBox');
  navBox.classList.toggle('open');
}

window.addEventListener('DOMContentLoaded', () => {
  const navBox = document.getElementById('navBox');
  navBox.classList.add('open');
});

