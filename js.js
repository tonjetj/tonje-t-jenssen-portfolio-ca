const nav = document.querySelector("nav");

const menu = document.querySelectorAll("ul a");
const dropdown = document.querySelector(".menu");

function handleScroll() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;

  if (scrolledY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);
