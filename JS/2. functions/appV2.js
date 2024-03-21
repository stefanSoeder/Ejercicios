//!-------------------------------
//? Iteración #1: Buscar el máximo
//!-------------------------------
// //?Completa la función que tomando dos números como argumento devuelva el más alto.

const sum = (numberOne, numberTwo) => {
  let biggest;
  if (numberOne < numberTwo) {
    biggest = numberTwo;
  } else {
    biggest = numberOne;
  }
  return biggest;
};
sum(1, 2);
const bigger = sum(1, 2);
console.log(bigger);

//!------------------------------------------
//? Iteración #2: Buscar la palabra más larga
//!------------------------------------------

// Completa la función que tomando un array de strings como argumento devuelva el más largo,
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const findLongestWord = (words) => {
  let longestWord = " ";
  words.forEach((word) => {
    longestWord = word.length > longestWord.length ? word : longestWord;
  });
  return longestWord;
};
const longestAvenger = findLongestWord(avengers);
console.log(longestAvenger);

//!-------------------------------
//? Iteración #3: Calcular la suma
//!-------------------------------

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la 
// suma de todos los números de la matriz.

// Puedes usar este array para probar tu función:


const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumNumbers = (setNumbers) => {
    let acc=0
    for (let i=0; i<=setNumbers.length;i++)

    })
}