"use strict";

///////////////////// --FUNDAMENTALS 1--///////////////////////

////////// SECTION ///////////

//ASSINGMENT OPERATORS

let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; //x = x * 4
x++; // x = x + 1
x--;
x--;
console.log(x);

//STRING AND TEMPLATE (CADENAS) Y PLANTILLAS

const firstName = "Mario";
const job = "Pogramador";
const birthDate = 1993;
const yearNow = 2022;

//manera 1
const yo =
  "Hola, Soy " +
  firstName +
  " un " +
  job +
  " de " +
  (yearNow - birthDate) +
  " años";
console.log(yo);

//manera 2-recomendada

const yoNuevo = `Hola, Soy ${firstName} un ${job} de ${
  yearNow - birthDate
} años`;
console.log(yoNuevo);

//multiples lineas (vieja manera)

console.log(
  `String with \n\
multiple\n\
lines`
);
//multiples lineas (manera actual)

console.log(`String
multiple
lines`);

//////////////////SECTION /////////////////

//CONVERSIONS

const inputYear = "1993"; // string
console.log(inputYear);
console.log(Number(inputYear) + 18, inputYear);

console.log(String(23), 23);

//COERSIONS

console.log("23" - "10" - 3);
console.log("23" + "10" + 3);

let n = "1" + 1; //"11"
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");

//5 FALSY VALUES: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Mario"));
console.log(Boolean({})); //empty object
console.log(Boolean(""));

// EQUALITY OPERATORS == vs ===

const age = "18";
if (age === 18) console.log("You are a adult"); //extrict, false
if (age == 18) console.log("Yes, adult"); //coersion, true

//ej:

console.log(18 === 18); //extrict
console.log(18 === 19); //extrict
console.log("18" == 18); //type coersion flex
console.log("18" === 18); //extrict

// BOOLEAN LOGIC: AND (&&),OR(||) & NOT(!) OPERATORS

//LOGICAL OPERATORS

const hasDriverLicense = true; //A
const hasGoodVision = true; //B
const isTired = true; //C

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
console.log(!hasGoodVision);

if (hasDriverLicense && hasGoodVision) {
  console.log("You can drive");
} else {
  console.log("Someone else has to drive");
}

console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("You can drive for sure");
} else {
  console.log("Some else has to drive for sure");
}

////////////////SECTION////////////////////

// THE SWITCH STATEMEMT
// usado en lugar de if-else si hay mucha mas opciones

const day = "sunday";

switch (day) {
  case "monday": //day===monday
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday": //day===tuesday
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
    break;
}

// THE CONDICIONAL (TERCIARY OPERATOR) "?"
// if-else para linea simple

const age2 = 23;

console.log(`I like to drink ${age2 >= 18 ? "wine" : "water"}`);
