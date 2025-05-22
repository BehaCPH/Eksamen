function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

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