"use strict";

// si no hay numero,no funciona el pasa nada

// escribe un numero en el espacio y rula el dado con el boton roll

// si el numero elejido coincide  con el que sale en el dado, 3 puntos a la primera, 2 alla segunta 1 alla tercera y pasa al siguiente jugador, playing is false
// terminada las 3 chances y no has acertado el numero, el juego pasa al prox jugador
// los puntos de van sumando en score hasta que uno de los dos llehue a 20 y termina el juego.
// a new , se resetea todo

// 1. crea funcion que ejecute el boton roll creando num ramdon tra 1 -6, muestra la cara del dado

//starting setting

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
  activeDiceE.classList.add('hidden');
};
init();

// switch player function

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  count = 0;
  currentScore = 0;
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
  }
});

btnNewE.addEventListener("click", init)
