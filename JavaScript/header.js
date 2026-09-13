// header script
// styrer transparens

// Definer header
headerContainer = document.getElementById("header-container")
transparency = false;

// Tjekker scroll pos
window.addEventListener("scroll", checkTransparent);


function checkTransparent() {
  if (window.scrollY < 30 && transparency == true) {
    headerContainer.classList.add("transparent")
    headerContainer.style.transition = "background-color 0.15s"
  } else {
    headerContainer.classList.remove("transparent")
  }
}

function enableTransparent() {
  transparency = true;
  checkTransparent()
}

