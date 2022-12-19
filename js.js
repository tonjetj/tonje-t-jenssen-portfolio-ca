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

const myButton = document.querySelector("#myBtn");
myButton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

////

function handleScroll() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;
  const about = document.querySelector(".indicator.one");
  const work = document.querySelector(".indicator.two");
  const contact = document.querySelector(".indicator.three");

  if (scrolledY > 475) {
    about.classList.add("scrolled");
  } else {
    about.classList.remove("scrolled");
  }

  if (scrolledY > 1100) {
    work.classList.add("scrolled");
  } else {
    work.classList.remove("scrolled");
  }

  if (scrolledY > 4195) {
    contact.classList.add("scrolled");
  } else {
    contact.classList.remove("scrolled");
  }
}

window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);

////////// Bar progress

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
  document.getElementById("myBarTwo").style.height = scrolled + "%";
}
