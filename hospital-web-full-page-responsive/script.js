"use strict";

//------- TO GET THE YEAR ----- //

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

//------- MOBILE NAVIGATION BAR ----- //

const mobileNavEl = document.querySelector(".open-close-btns");
const navEl = document.querySelector(".main-nav");

mobileNavEl.addEventListener("click", function () {
  navEl.classList.toggle("open-nav");
});

//------- AUTOMATLY CLOSE THE MOBILE NAVIGATION BAR ----- //
const allLinksMenuEl = document.querySelectorAll(".nav-link");

allLinksMenuEl.forEach(function (link) {
  link.addEventListener("click", function () {
    if (link.classList.contains("nav-link")) {
      navEl.classList.toggle("open-nav");
    }
  });
});

//------- STICKY NAV BAR ----- //


// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(function(entries){
//   const ent = entries[0];
//   if(!ent.isIntersecting){
//     document.querySelector(".main-nav").classList.add("sticky");
//   }else{
//     document.querySelector(".main-nav").classList.remove("sticky");
//   }
// },
// {
//   root:null,
//   threshold:0,
//   rootMargin:"-90px"
  
// });
// obs.observe(sectionHeroEl);