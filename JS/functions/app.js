//!------------------------------------

//? Iteración #1: Buscar el máximo**

//?Completa la función que tomando dos números como argumento devuelva el más alto.

//?```jsx
//?function sum(numberOne, numberTwo) {

//!-----------------------------------------

const sum = (numberOne, numberTwo) => {
  let biggest;
  if (numberOne > numberTwo) {
    biggest = numberOne;
    // insert code
  } else {
    biggest = numberTwo;
  }
  console.log(biggest);
};
sum(1, 2);

/*const bigger = sum(1, 2);
console.log(bigger);

//!---------------------------------------------
//?Iteración #2: Buscar la palabra más larga**
//!---------------------------------------------

/*Completa la función que tomando un array de strings como argumento devuelva el más largo,
en caso de que dos strings tenga la misma longitud deberá devolver el primero.

+/*/

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const findLongestWord = (arrayAvengers) => {
  let acc = 0;
  for (let i = 0; i <= arrayAvengers.length; i++){
    arrayAvengers[i].length < avenger.length&&acc++} {return acc=}
    }
  
};
findLongestWord(avengers);


```*/
