"use strict"


//------- TO GET THE YEAR ----- //

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

//------- MOBILE NAVIGATION ----- //

const mobileNavEl = document.querySelector(".open-close-btns");
const navEl = document.querySelector(".main-nav");

mobileNavEl.addEventListener("click",function(){
navEl.classList.toggle("open-nav")
})