"use strict"

// Crea una función llamada numeroMayor() 
// que toma tres números como entrada y 
// retornar el numero mayor de ellos, 
// si son iguales devolver un String «son iguales»

function numeroMayor (num1, num2, num3){

  if (num1 > num2 && num1 > num3){
    return num1
  } else if (num2 > num1 && num2 >num3){
    return num2
  } else if (num3 > num1 && num3 > num2){
    return num3
  } else {
    return`son iguales`}
};

console.log (numeroMayor (9, 19, 10));

////////////////////////////

// Escriba una función con el nombre de esVocal() 
// que tome un carácter , devuelva True si es vocal 
// (no importa si es mayúscula o minúscula), y 
// devuelva False en caso contrario.

const esVocal = letra => {

  if (letra === "a" || letra === "e" || letra === "i" || 
  letra === "o" || letra ===  "u"){
    return true
  } if (letra === "A" || letra === "E" || letra === "I" || 
  letra === "O" || letra ===  "U") {
    return true
  }
  return false
}

const eleccion = esVocal ("a");
console.log (eleccion);
