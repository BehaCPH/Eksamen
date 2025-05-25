// ✅ NAV TOGGLE
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const toggle = document.querySelector(".menu-toggle");
  const close = document.querySelector(".menu-close");

  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    toggle.style.display = "none";
    close.style.display = "block";
  } else {
    toggle.style.display = "block";
    close.style.display = "none";
  }
}

// ✅ CAROUSEL
  let currentIndex = 0;
  const track = document.getElementById("carouselTrack");
  const groups = document.querySelectorAll(".carousel-group").length;

  function moveCarousel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = groups - 1;
    if (currentIndex >= groups) currentIndex = 0;
    track.style.transform = `translateX(-${50 * currentIndex}%)`;
  }

// ✅ BEGYNDER ORDBOG
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('button[data-target]');
  const descriptions = document.querySelectorAll('.description');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const targetElement = document.getElementById(targetId);
      const isActive = button.classList.contains('active');

      // Reset all
      buttons.forEach(btn => btn.classList.remove('active'));
      descriptions.forEach(desc => desc.style.display = 'none');

      // Toggle if not already active
      if (!isActive) {
        button.classList.add('active');
        targetElement.style.display = 'block';
      }
    });
  });
});

// ✅ TAG FILTER
document.addEventListener("DOMContentLoaded", () => {
  const tagButtons = document.querySelectorAll('.tag-button');
  const recipeCards = document.querySelectorAll('.card');
  let selectedTags = [];

  function filterCards() {
    recipeCards.forEach(card => {
      const tags = card.dataset.tags?.split(',') || [];
      const match = selectedTags.length === 0 || tags.some(tag => selectedTags.includes(tag));
      card.style.display = match ? 'block' : 'none';
    });
  }
  
  tagButtons.forEach(button => {
    button.addEventListener("click", () => {
      const tag = button.dataset.tag;
      button.classList.toggle("active");

      if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter(t => t !== tag);
      } else {
        selectedTags.push(tag);
      }

      filterCards();
    });
  });

  filterCards();
});

// ✅ POP-UP MESSAGE (LÆSE MERE)
document.addEventListener("DOMContentLoaded", () => {
  // Open popup
  document.querySelectorAll(".open-popup").forEach(button => {
    button.addEventListener("click", () => {
      const popupId = button.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      if (popup) popup.style.display = "flex";
    });
  });

  // Close popup
  document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", () => {
      const popup = button.closest(".popup-overlay");
      if (popup) popup.style.display = "none";
    });
  });

  // Handle form submission
  document.querySelectorAll("form[id^='popup-form']").forEach(form => {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const number = this.id.replace("popup-form", "");
      const confirmation = document.getElementById("confirmation" + number);
      if (confirmation) {
        confirmation.style.display = "block";
        setTimeout(() => {
          confirmation.style.display = "none";
          this.closest(".popup-overlay").style.display = "none";
        }, 2000);
      }
    });
  });
});



// EMAILJS Script

emailjs.init(enmCtE7S6uARh8GUZ);

document.addEventListener('DOMContentLoaded', () => {
  // Select all forms that should send email
  const forms = document.querySelectorAll('.form-popup');

  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // prevent default page reload

      emailjs.sendForm('service_h74es63', 'template_j67e5qn', this)
        .then(() => {
          alert('Tilmelding sendt! Tak for din tilmelding.');

          // Close popup
          const popup = this.closest('.overlay');
          if (popup) {
            popup.classList.remove('active');
          }

          this.reset(); // clear form fields
        })
        .catch(error => {
          alert('Ups, der skete en fejl. Prøv igen senere.');
          console.error('EmailJS error:', error);
        });
    });
  });
});

