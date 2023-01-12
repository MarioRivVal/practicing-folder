"use strict";

// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".score").textContent = 19;

const secretNumber = Math.trunc(Math.random() * 20)+1;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "Not a number";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "demasiado bajo";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "demasiado alto";
  } else {
    document.querySelector(".message").textContent = "Correct Number";
  }
});


