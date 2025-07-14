  function toggleHeaderBox() {
    const navBox = document.getElementById('navBox');
    navBox.classList.toggle('open');
  }

  window.addEventListener('DOMContentLoaded', () => {
    const navBox = document.getElementById('navBox');
    navBox.classList.add('open');
  });

  // Hobby Slider
  const hobbySlides = document.querySelectorAll('.hobby-slide');
  let hobbyIndex = 0;

  function showHobbySlide() {
    hobbySlides.forEach((img, idx) => {
      img.style.display = idx === hobbyIndex ? 'block' : 'none';
    });
    hobbyIndex = (hobbyIndex + 1) % hobbySlides.length;
  }

  setInterval(showHobbySlide, 1000);


  const techSlides = document.querySelectorAll('.tech-slide');
  let techIndex = 0;

  function showTechSlide() {
    techSlides.forEach((img, idx) => {
      img.style.display = idx === techIndex ? 'block' : 'none';
    });
    techIndex = (techIndex + 1) % techSlides.length;
  }

  setInterval(showTechSlide, 1000);s