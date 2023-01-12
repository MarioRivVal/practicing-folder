"use strict";

//////////////////--FUNDAMENTALS 2 -- ////////////////////

////////////////////////////// --SECTION-- ////////////////////////

// FUNCTIONS

function mayorEdad(edad) {
  if (edad >= 18) {
    console.log("mayor de edad");
  } else {
    console.log("menor de edad");
  }
}
mayorEdad(20);

// EJEMPLO 2

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// FUNCTION DECLATION

function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(1993);

// FUNCTION EXPRESSION

const calcAge3 = function (birthYear) {
  return 2022 - birthYear;
};
const age3 = calcAge3(1993);

// ARROW FUNCTION

const calcAge4 = (birthYear) => 2022 - birthYear;
const age4 = calcAge4(1993);

console.log(age1, age3, age4);

// FUNCTIONS CALLING OTHERS FUNCTIONS

function cutPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and
  ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//////////////////////////////// --SECTION-- ////////////////////////////

///// ARRAYS

// ARRAYS

const friends = ["Ana", "Andrea", "Mario"];
const years = new Array(1987, 1993, 1983, 2022); // ANOTHER WAY
console.log(friends);
console.log(friends[0], years[2], friends[2]);

console.log(friends.length, years.length); // PARA DESCURBIR EL NUMERO ESACTO DE ELEMENTOS
console.log(friends[friends.length - 1]); // PARA ELEJIR EL ULTIMO ELEMENTO

friends[2] = "Massimo"; // CAMBIAR ELEMENTOS AL ARRAY
console.log(friends); //NO SE PUEDE MODIFICAR LA ENTERA VARIABLE

// ARRAY PUEDEN CONTENER DIFERENTES VALUES

const firstName2 = "Mario";
const mariosArray = [firstName2, "Valverde", 2022 - 1993, friends, "programer"];
console.log(mariosArray);

// LLAMAR ELEMENTOS DE UN ARRAY HACIA UNA FUNCION

const calcAge5 = (birthYear) => 2022 - birthYear;
const age5 = calcAge5(1993);

const years2 = [1990, 1967, 2002, 2010, 2018];
const ages = [
  calcAge5(years2[0]),
  calcAge5(years2[1]),
  calcAge5(years2[years2.length - 1]),
];
console.log(ages);

// METHODS (BASIC ARRAY OPERATORS)

// ADD ELEMENTS:

const friends2 = ["Ana", "Andrea", "Mario"];
const newLenght = friends2.push("Massimo"); // AGREGAR ELEMENTO AL ARRAY AL FINAL
//(EN ESTE CASO, PODRIAMOS ALMACENAR ESTA FUNCION EN UNA VARIABLE,
// Y NOS DEVOLVERA LA CANTIDAD DE ELEMENTOS)

console.log(friends2);
console.log(newLenght);

friends2.unshift("Patrizio"); //AGREGRA ELEMENTO AL INICIO
// ESTA VEZ NO LA ALMACENAMOS EN VARIABLE.
console.log(friends2);

// REMOVE ELEMENTS

const popped = friends2.pop(); // ELIMINA EL ULTIMO ELEMENTO
// (SI LO ALMACENAMOS NOS DEVOLVERA EL NOMBRE DEL ELEMENTO)
// SI LO ESCRIBIDOS DE SEGUIDO SEGUIRA ELIMINANDO EL SIGUIENTE ELEMENTO

console.log(friends2);
console.log(popped);

friends2.shift();
console.log(friends2);

// VERIFICAR LA POSICION DE LOS ELEMENTOS

console.log(friends2.indexOf("Andrea"));
console.log(friends2.indexOf("andrea")); // SI ESCRITO MAL O NO ESISTE EN EL ARRAY REGRESA -1

// VERIFICAR SI EL ELEMENTO ESISTE O NO EN EL ARRAY (REGRESA TRUE OR FALSE)

friends2.push(23); // SEGUE LA STRICT EQUALITY , NO REALIZA LA COERCION DE TIPO
console.log(friends2.includes("Andrea")); //true
console.log(friends2.includes("andrea")); //false
console.log(friends2.includes(23)); //true

if (friends2.includes("Andrea")) {
  console.log("Tienes un amigo llamado Amdrea");
}

//////////////////////////-- SECTION-- /////////////////////////////////

// DATA EXTRUCTURES (OBJECTS)

const mariosData = {
  firstName: "Mario",
  lastName: "Valverde",
  age: 2022 - 1993,
  job: "Programer",
  friends: ["Andrea", "Ana", "Massimo"],
}; // THIS IS A OBJECT WITH 5 KEY-VALUES (CLAVE-VALOR)

// LLAMAR UN ELEMENTO DEL OBJECT (DOT || BRACKET)

console.log(mariosData.lastName); // PARA  LLAMAR EL NOMBRE ESACTO DE LA PROPIEDAD
console.log(mariosData["lastName"]); //PARA PODER LLAMAR UNA EXPRESION CON []

// EJEMPLO CON WORD -KEY

const nameKey = "Name";

console.log(mariosData["first" + nameKey]);
console.log(mariosData["last" + nameKey]);

// AGREGAR ELEMENTOS EN EL OBJECT

mariosData.country = "Italy"; //METODO DOT
mariosData["girlFriend"] = "Ana"; //METODO BRACKETS
console.log(mariosData);

// USANDO FUNCIONES DENTRO EL OBJETO

const mario = {
  firstName: "Mario",
  lastName: "Valverde",
  birthYear: 1993, // NUMBER VALUE
  job: "Programer", // STRING VALUE
  friends: ["Andrea", "Ana", "Massimo"], // ARRAY VALUE
  hasDriverLicense: true, // BOOLEAN VALUE

  // calcAge : function (birthYear){
  //   return 2022 - birthYear;
  // }  // FUNCTION VALUE

  // calcAge : function (){
  //   return 2022 - this.birthYear; // PARA OPTENER EL METHOD DIRECTAMENTE
  //   // DESDE EL OBJETO CON ..this..
  // }

  calcAge: function () {
    this.age = 2022 - this.birthYear; // PARA AGREGAR UN NUEVO ELEMENTO LLAMADO ..age..
    return this.age;
  },
  // CHALLENGE
  // Mario is 29 years old teacher, and he has driver's licence.

  getSummary: function () {
    return console.log(`${this.firstName} is a ${mario.calcAge()} year old 
    ${this.job} and he has ${
      this.hasDriverLicense ? `a` : `not`
    } drive s licence`);
  },
};

console.log(mario.calcAge()); // SON LA MISMA COSA
console.log(mario.age); // PERO age HA SIDO AGRAGADA AL OBJETO

// RESPUESTA AL CHALLENGE
mario.getSummary();

///////////////////////// --SECTION-- //////////////////////////////

// iTERATION : THE for LOOP

// PARA REPETIR UN DETERMINADO N. DE VECES

for (let rep = 1; rep <= 3; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// ALMACENAR ELEMENTOS EN UN NUEVO ARRAY

const marioArray = [
  "Mario",
  "Valverde",
  2022 - 1993,
  "Programer",
  ["Andrea", "Ana", "Massimo"],
  true,
];

const types = [];

for (let i = 0; i < marioArray.length; i++) {
  console.log(marioArray[i], typeof marioArray[i]);

  // types [i] = marioArray [i]; // 1º MANERA DE AGREGAR DATOS A UNA ARRAY EN ESTE CASO EN ..types..
  types.push(typeof marioArray[i]); // 2º MANERA (SI NO SE ESCRIBE typeof SE COPIARAN LOS ELEMENTOS)
}

console.log(types);

// EJEMPLO FACIL PARA ALMACENAR RESULTADOS EN UN ARRAY

const years3 = [1987, 1983, 1993, 1960];

const ages3 = [];

for (let i = 0; i < years3.length; i++) {
  ages3.push(2022 - years3[i]); // CON UNA SIMPLE RESTA
}
console.log(ages3);

// CONTINUE AND BREAK
// PARA CONTINUAR O PARAR CUANDO LLEGA A UN TIPO DETERMINADO

console.log("---ONLY STRINGS---");

for (let i = 0; i < marioArray.length; i++) {
  if (typeof marioArray[i] !== "string") continue;

  console.log(marioArray[i], typeof marioArray[i]);
}


console.log("---BREAK WITH NUMBER---");

for (let i = 0; i < marioArray.length; i++) {
  if (typeof marioArray[i] === "number") break;

  console.log(marioArray[i], typeof marioArray[i]);
}

// LOOPING BACKWARDS AND LOOPS IN LOOPS

const marioArray2 = [
  "Mario",
  "Valverde",
  2022 - 1993,
  "Programer",
  ["Andrea", "Ana", "Massimo"],
];

// LOOP BACKWARD

for (let i = marioArray2.length - 1; i >= 0; i --){
  console.log (i, marioArray2 [i]);
}

// LOOP INTO LOOP

for (let exercise = 1; exercise < 4; exercise ++){
  console.log (`-----------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep ++){
    console.log (`Exercise ${exercise}: Lifting weight rep ${rep}`);
    // // EXTRA LOOP DE EJERCICIO
    // for (let pausa = 1; pausa < 4; pausa ++){
    //   console.log (`Pausa ${pausa}`);
    // }
  }
}

///////////////////////// --SECTION-- //////////////////////

//THE WHILE LOOP

// IL for DE REFERENCIA

// for (let rep = 1; rep <= 10; rep ++){
//   console.log (`Lifting weight rep ${rep}`);
// }

let rep = 1;
while (rep <= 10){
  console.log (`Lifting weight rep ${rep}`);
  rep ++;
}

let dice = Math.trunc (Math.random() * 6) + 1;

while (dice !==6){
  console.log (`You rolled a ${dice}`);
  dice = Math.trunc (Math.random() * 6) + 1;
  if (dice === 6)
  console.log (`Loop is about to end...`)
}
