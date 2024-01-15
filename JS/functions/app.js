//!------------------------------------

//? Iteración #1: Buscar el máximo**

//?Completa la función que tomando dos números como argumento devuelva el más alto.

//?```jsx
//?function sum(numberOne, numberTwo) {

//!-----------------------------------------

const sum = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    console.log(numberOne);
    // insert code
  } else {
    console.log(numberTwo);
  }
};
let numberOne = 1;
let numberTwo = 2;
const bigger = sum(numberOne, numberTwo);
console.log(bigger);

//!---------------------------------------------
//?Iteración #2: Buscar la palabra más larga**
//!---------------------------------------------

/*Completa la función que tomando un array de strings como argumento devuelva el más largo,
en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:


const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
const findLongestWord = (avengers) */
