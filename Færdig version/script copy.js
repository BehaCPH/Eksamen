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
// Toggle term boxes (unchanged)
function toggleTerm(clickedBox) {
  document.querySelectorAll('.term-box').forEach(box => {
    if (box !== clickedBox) box.classList.remove('expanded');
  });
  clickedBox.classList.toggle('expanded');
}

// ✅ FORM popup open/close
function openFormPopup() {
  document.querySelector(".popup-overlay").style.display = "flex";
}
function closeFormPopup() {
  document.querySelector(".popup-overlay").style.display = "none";
}

// ✅ INFO popup open/close with dynamic HTML
function openInfoPopup(eventId) {
  const eventHTML = document.querySelector(`#event-content #${eventId}`);
  const infoContainer = document.getElementById("info-content");

  if (eventHTML && infoContainer) {
    infoContainer.innerHTML = eventHTML.innerHTML;
    document.querySelector(".info-popup-overlay").style.display = "flex";
  }
}
function closeInfoPopup() {
  document.querySelector(".info-popup-overlay").style.display = "none";
}

// ✅ Bind read-more buttons for info popup
document.querySelectorAll('.readmore-button').forEach(button => {
  button.addEventListener('click', () => {
    const popupId = button.getAttribute('data-popup');
    openInfoPopup(popupId);
  });
});

// ✅ Bind "Tilmeld" form buttons (you can keep using .openPopup if you're using .form-popup)
document.querySelectorAll('.openPopup').forEach(button => {
  button.addEventListener('click', () => {
    const popupId = button.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.classList.add('active');
    }
  });
});

// ✅ Close buttons for both popups
document.querySelectorAll('.closePopup').forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.overlay');
    if (popup) {
      popup.classList.remove('active');
    }
  });
});
document.querySelectorAll('.closeInfoPopup').forEach(button => {
  button.addEventListener('click', closeInfoPopup);
});

// EMAILJS Script


