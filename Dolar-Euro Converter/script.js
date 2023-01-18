"use strict";

//adding elements
const currencyOneEl = document.querySelector(".currency--1");
const currencyTwoEl = document.querySelector(".currency--2");
const amountEl = document.querySelector(".amount");
const answerEl = document.querySelector(".answer");
const btnSubmit = document.querySelector(".btn-submit");
const btnSwitchEl = document.querySelector(".btn-switch-logo");



// changing currency event
btnSubmit.addEventListener("click", function () {
  let res;
  if (currencyOneEl.textContent == "€") {
    res = (amountEl.value * 1.08).toFixed(2);
  } else {
    res = (amountEl.value * 0.93).toFixed(2);
  }
  answerEl.textContent = res;
});

//switch currency btn
btnSwitchEl.addEventListener("click", function () {
  if (currencyOneEl.textContent == "€") {
    currencyOneEl.textContent = "$";
    currencyTwoEl.textContent = "€";
  } else {
    currencyOneEl.textContent = "€";
    currencyTwoEl.textContent = "$";
  }
  amountEl.value ="";
  answerEl.textContent=""
});
