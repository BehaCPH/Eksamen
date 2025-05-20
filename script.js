function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

  function toggleTerm(clickedBox) {
    document.querySelectorAll('.term-box').forEach(box => {
      if (box !== clickedBox) box.classList.remove('expanded');
    });
    clickedBox.classList.toggle('expanded');
  }