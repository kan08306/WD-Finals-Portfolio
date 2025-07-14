
function toggleHeaderBox() {
  const navBox = document.getElementById('navBox');
  navBox.classList.toggle('open');
}


window.addEventListener('DOMContentLoaded', () => {
  const navBox = document.getElementById('navBox');
  navBox.classList.add('open');
});

  document.querySelectorAll('a[data-confirm]').forEach(link => {
    link.addEventListener('click', function (e) {
      const confirmLeave = confirm("Are you sure you want to leave this site?");
      if (!confirmLeave) {
        e.preventDefault();
      }
    });
  });
