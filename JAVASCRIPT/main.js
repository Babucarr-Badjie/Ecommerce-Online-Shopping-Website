const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarList = document.querySelector(".navbar-list");

if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", () => {
    navbarList.classList.toggle("open");
  });
}
