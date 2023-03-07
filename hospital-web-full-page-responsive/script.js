"use strict";

//------- TO GET THE YEAR ----- //

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

//------- MOBILE NAVIGATION ----- //

const mobileNavEl = document.querySelector(".open-close-btns");
const navEl = document.querySelector(".main-nav");

mobileNavEl.addEventListener("click", function () {
  navEl.classList.toggle("open-nav");
});

//------- AUTOMATLY CLOSE THE MOBILE-NAV ----- //
const allLinksMenuEl = document.querySelectorAll(".nav-link");

allLinksMenuEl.forEach(function (link) {
  link.addEventListener("click", function () {
    if (link.classList.contains("nav-link")) {
      navEl.classList.toggle("open-nav");
    }
  });
});
