"use strict";

//selecting variables
const btnRollE = document.querySelector(".btn-roll");
const btnNewE = document.querySelector(".btn-newgame");
const playerBox0E = document.querySelector(".container-player--0");
const playerBox1E = document.querySelector(".container-player--1");
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
  playerBox0E.classList.add("active-player");
  playerBox1E.classList.remove("active-player");
  playerBox0E.classList.remove("player-winner");
  playerBox1E.classList.remove("player-winner");
};
init();

// switch player function

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  count = 0;
  currentScore = 0;
  document.querySelector(".guess-number").value = false;
  playerBox0E.classList.toggle("active-player");
  playerBox1E.classList.toggle("active-player");
};

// roll dice click listener

btnRollE.addEventListener("click", function () {
  if (playing) {
    const guessE = Number(document.querySelector(".guess-number").value);
    if (guessE) {
      activeDiceE.classList.remove("hidden");
      count++;
      const dice = Math.trunc(Math.random() * 6) + 1;
      activeDiceE.src = `img/dice-${dice}.png`;

      if (count < 6) {
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

          if (scores[activePlayer] >= 5) {
            playing = false;
            document.querySelector(".guess-number").value = false;

            document
              .querySelector(`.container-player--${activePlayer}`)
              .classList.add("player-winner");
            document
              .querySelector(`.container-player--${activePlayer}`)
              .classList.remove("active-player");
          } else {
            switchPlayer();
          }
        }
      }
      if (count == 5) {
        switchPlayer();
      }
    }
  }
});

// New game buttom
btnNewE.addEventListener("click", init);
