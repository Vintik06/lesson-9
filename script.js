let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", showHamburger);

function showHamburger () {
  let mobileMenu = document.getElementById("mobile-menu");
  let mobilHumb = document.getElementById("hamburger");
  mobileMenu.classList.toggle("mobile-menu-animation");
  mobilHumb.classList.toggle("hide-humb-animation");
}

let hamburgerCancel = document.getElementById("hamburgerCancel");

hamburgerCancel.addEventListener("click", hideHamburger);

function hideHamburger () {
    let mobileMenu = document.getElementById("mobile-menu");
    let mobilHumb = document.getElementById("hamburger");
    mobileMenu.classList.toggle("hamburger-menu-animation");
    mobilHumb.classList.toggle("humb-animation");
}