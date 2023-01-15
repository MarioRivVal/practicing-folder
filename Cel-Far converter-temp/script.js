"use strict";

//fahrenheit

//Creating variables

//temps
const currentTempNameEl = document.querySelector(".temp-name");
const currentResultNameEl = document.querySelector(".result-name");

//bottoms
const btnSendEl = document.querySelector(".btn-send");
const btnSwitchEl = document.querySelector(".btn-switch");
// result-line
const resultLineEl = document.querySelector(".result-line");

//initial values
let currentTemp;
currentTempNameEl.textContent = "celcius";
currentResultNameEl.textContent = "fahrenheit";

//creating function for calculation
const calcTemp1 = function () {
  const t = currentTemp * (9 / 5) + 32;
  return t;
};

const calcTemp2 = function () {
  const t = (currentTemp - 32) * (5 / 9);
  return t;
};



//events
// changing temperature


btnSendEl.addEventListener("click", function () {
  currentTemp = document.querySelector(".current-temp").value;
  if (currentTempNameEl.textContent == "celcius") {
    resultLineEl.textContent = `${calcTemp1()} grados`;
  } else {
    resultLineEl.textContent = `${calcTemp2()} grados`;
  }
});
// switching scale
btnSwitchEl.addEventListener("click", function () {
  if (currentTempNameEl.textContent == "celcius") {
    currentTempNameEl.textContent = "fahrenheit";
    currentResultNameEl.textContent = "celcius";
   
  }else{
    currentTempNameEl.textContent = "celcius";
    currentResultNameEl.textContent = "fahrenheit";
  }
});