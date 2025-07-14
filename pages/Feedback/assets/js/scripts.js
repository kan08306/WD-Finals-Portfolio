
function toggleHeaderBox() {
  const navBox = document.getElementById('navBox');
  navBox.classList.toggle('open');
}


window.addEventListener('DOMContentLoaded', () => {
  const navBox = document.getElementById('navBox');
  navBox.classList.add('open');
});


const stars = document.querySelectorAll(".star-rating i");
const ratingInput = document.getElementById("ratingValue");

let currentRating = 0;

// Add click event to each star
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const clickedRating = index + 1;

    // Toggle off if clicked same star again
    if (clickedRating === currentRating) {
      currentRating = 0;
    } else {
      currentRating = clickedRating;
    }

    ratingInput.value = currentRating;
    updateStars(currentRating);
  });
});

// Highlight stars up to the current rating
function updateStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

// Feedback form submission using mailto
const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const rating = form.rating.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent("Website Feedback");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nRating: ${rating} star(s)\n\nMessage:\n${message}`
  );

  const mailtoLink = `mailto:kenbautista753@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
});
