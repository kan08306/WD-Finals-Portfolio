
function toggleHeaderBox() {
  const navBox = document.getElementById('navBox');
  navBox.classList.toggle('open');
}


window.addEventListener('DOMContentLoaded', () => {
  const navBox = document.getElementById('navBox');
  navBox.classList.add('open');
});


const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  const video = card.querySelector('video');

  card.addEventListener('mouseenter', () => {
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
  });
});


const bgVideo = document.querySelector('.bg-video');
const logoOverlay = document.getElementById('logoOverlay');
const title = document.querySelector('.projects-title');
const desc = document.querySelector('.projects-desc');

const hoverData = [
  {
    title: 'Header & Footer',
    desc: 'This project is demonstrating how I make five different types of Header and Footer.',
    videoSrc: '../Works/assets/img/card1.mp4'
  },
  {
    title: 'Hero Section',
    desc: 'This project is demonstrating how I make five different types of Hero Section',
    videoSrc: '../Works/assets/img/card2.mp4'
  }
];

const wrappers = document.querySelectorAll('.project-wrapper');

wrappers.forEach((wrapper, index) => {
  wrapper.addEventListener('mouseenter', () => {

    bgVideo.src = hoverData[index].videoSrc;


    title.textContent = hoverData[index].title;
    desc.textContent = hoverData[index].desc;


    if (logoOverlay) {
      logoOverlay.style.display = 'none';
    }
  });

  wrapper.addEventListener('mouseleave', () => {

    bgVideo.src = '../Works/assets/img/bgvideoo.mp4';


    title.textContent = 'Recent Projects';
    desc.innerHTML = `These recent projects demonstrate<br>
    how I design various types of<br>
    headers, footers, and hero sections,<br>
    which I can apply to future projects<br>
    I work on.`;


    if (logoOverlay) {
      logoOverlay.style.display = 'block';
    }
  });
});
