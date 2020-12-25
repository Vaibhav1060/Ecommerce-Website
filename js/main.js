// Show Menu

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("left");
    });
  }
};

showMenu("hamburger", "menu");

// Remove Menu

const navLink = document.querySelectorAll(".header__link"),
  navMenu = document.getElementById("menu");

function linkAction() {
  navMenu.classList.remove("left");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Active Link

let mainNavLinks = document.querySelectorAll(".header__link");
let mainSections = document.querySelectorAll("main section");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY - 50;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 55 &&
      section.offsetTop + section.offsetHeight > fromTop + 55
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});


// header
window.onscroll = () => {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
};
