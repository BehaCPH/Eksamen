// ✅ NAV TOGGLE
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// ✅ CAROUSEL
const track = document.getElementById('carousel');
if (track) {
  const cards = document.querySelectorAll('.caro-card');
  const cardCount = cards.length;
  const cardsPerView = 1;
  let currentIndex = 0;

  const updateCarousel = () => {
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  };

  document.querySelector('.arrow-right')?.addEventListener('click', () => {
    if (currentIndex < cardCount - cardsPerView) {
      currentIndex += cardsPerView;
      updateCarousel();
    }
  });

  document.querySelector('.arrow-left')?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= cardsPerView;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel(); // Initial setup
}

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




