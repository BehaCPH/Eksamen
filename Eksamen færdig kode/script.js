// ✅ NAV TOGGLE
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const toggle = document.querySelector(".menu-toggle");
  const close = document.querySelector(".menu-close");

  nav.classList.toggle("active");
  toggle.classList.toggle("hidden");
  close.classList.toggle("shown");
}

// ✅ CUPFILLED
  const currentPath = window.location.pathname.toLowerCase();

  // Get all cupcake links
  const links = document.querySelectorAll(".cupcake-link");

  links.forEach(link => {
    const href = link.getAttribute("href").toLowerCase();

    // Check if the current path includes the href OR the main section name
    if (currentPath.includes(href.replace('.html', ''))) {
      // Change cupcake image to filled
      const img = link.querySelector("img");
      img.src = "img/cupfilled.png";

      // Optional: change text color to white
      const text = link.querySelector(".cupcake-text");
      text.style.color = "white";
    }
  });

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
  function toggleTerm(clickedBox) {
    document.querySelectorAll('.term-box').forEach(box => {
      if (box !== clickedBox) box.classList.remove('expanded');
    });
    clickedBox.classList.toggle('expanded');
  }


    function openPopup() {
    document.getElementById("popup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

