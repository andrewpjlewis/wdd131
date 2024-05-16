const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "flex";
  }
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  if (window.innerWidth > 700) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

window.addEventListener("resize", handleResize);

function viewHandler(event) {
  const viewer = document.querySelector(".viewer");
  if (event.target.tagName === "IMG") {
    document.querySelector(".viewer").style.display = "grid";
  } else {
    document.querySelector(".viewer").style.display = "none";
  }
}

document.querySelector(".gallery").addEventListener("click", viewHandler)

function closeViewer() {
  document.querySelector(".viewer").style.display = "none";
}

document.querySelector(".close-viewer").addEventListener("click", closeViewer)