"use strict";

// si no hay numero,no funciona el pasa nada

// escribe un numero en el espacio y rula el dado con el boton roll

// si el numero elejido coincide  con el que sale en el dado, 3 puntos a la primera, 2 alla segunta 1 alla tercera y pasa al siguiente jugador, playing is false
// terminada las 3 chances y no has acertado el numero, el juego pasa al prox jugador
// los puntos de van sumando en score hasta que uno de los dos llehue a 20 y termina el juego.
// a new , se resetea todo

// 1. crea funcion que ejecute el boton roll creando num ramdon tra 1 -6, muestra la cara del dado

//selecting variables
const btnRollE = document.querySelector(".btn-roll");
const btnNewE = document.querySelector(".btn-newgame");
const scorePlayer1E = document.querySelector(".score-player--1");
const dice0E = document.querySelector(".dice-photo--0");
const dice1E = document.querySelector(".dice-photo--1");

//starting setting
let scores = [0, 0];
let count = 0;
let activePlayer = 0;
let currentScore = 0;
let playing = true;

// roll dice function
const rollDice = function () {
  if (playing) {
    const guessE = Number(document.querySelector(".guess-number").value);
    if (count < 5) {
      count++;
      const dice = Math.trunc(Math.random() * 6) + 1;
      dice0E.src = `img/dice-${dice}.png`;

      console.log(`dice number  ${dice}`);
      console.log(`count ${count}`);
      console.log(`guess ${guessE}`);

      if (guessE === dice) {
        playing = false;
        switch (count) {
          case 1:
            scores[0] = 5;
            break;
          case 2:
            scores[0] = 4;
            break;
          case 3:
            scores[0] = 3;
            break;
          case 4:
            scores[0] = 2;
            break;
          case 5:
            scores[0] = 1;
            break;
          default:
            break;
        }
        document.querySelector(`.score-player--${activePlayer}`).textContent =
          scores[0];

        console.log(`array ${scores[0]}`);
      }
    }
  }
};

// roll click listener
btnRollE.addEventListener("click", rollDice);
