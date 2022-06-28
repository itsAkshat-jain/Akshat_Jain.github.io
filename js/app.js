$(document).ready(function () {
  let hamberger = document.querySelector(".hamg");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mob-nav");

  hamberger.addEventListener("click", function () {
    mobileNav.classList.add("open");
  });

  times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });
});
