"use strict";

//selecting variables
const btnRollE = document.querySelector(".btn-roll");
const btnNewE = document.querySelector(".btn-newgame");
const scorePlayer0E = document.querySelector(".score-player--0");
const scorePlayer1E = document.querySelector(".score-player--1");
const activeDiceE = document.querySelector(".dice-photo--0");

let scores, count, activePlayer, playing, currentScore;
const init = function () {
  scores = [0, 0];
  count = 0;
  activePlayer = 0;
  playing = true;
  currentScore = 0;
  scorePlayer0E.textContent = 0;
  scorePlayer1E.textContent = 0;
  activeDiceE.classList.add("hidden");
  document.querySelector(".guess-number").value = false;
};
init();

// switch player function

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  count = 0;
  currentScore = 0;
  document.querySelector(".guess-number").value = false;

};

// roll click listener
btnRollE.addEventListener("click", function () {
  activeDiceE.classList.remove("hidden");
  if (playing) {
    const guessE = Number(document.querySelector(".guess-number").value);
    count++;
    if (count < 6) {
      const dice = Math.trunc(Math.random() * 6) + 1;
      activeDiceE.src = `img/dice-${dice}.png`;

      console.log(`count ${count}`);

      if (guessE === dice) {
        switch (count) {
          case 1:
            currentScore = 5;
            break;
          case 2:
            currentScore = 4;
            break;
          case 3:
            currentScore = 3;
            break;
          case 4:
            currentScore = 2;
            break;
          case 5:
            currentScore = 1;
            break;
          default:
            break;
        }
        scores[activePlayer] = scores[activePlayer] + currentScore;
        document.querySelector(`.score-player--${activePlayer}`).textContent =
          scores[activePlayer];
        console.log(`score ${currentScore}`);
        console.log(scores[activePlayer]);
        switchPlayer();
        console.log(`player active ${activePlayer}`);
      }
    }
    if (count == 5) {
      switchPlayer();
      console.log(`player active ${activePlayer}`);
    }
  } // if one of the player get 20 the game is over
});

btnNewE.addEventListener("click", init);
