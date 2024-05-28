//!----------------------------------

//? Iteración #1: Buscar el máximo**
//!----------------------------------
// //?Completa la función que tomando dos números como argumento devuelva el más alto.

// //?```jsx
// //?function sum(numberOne, numberTwo) {

const higher = (numberOne, numbertwo) => {
  return numberOne > numbertwo ? numberOne : numbertwo;
};

const biggest = higher(4, 5);
console.log("🚀 ~ biggest:", biggest);

//!---------------------------------------------
//?Iteración #2: Buscar la palabra más larga**
//!---------------------------------------------

// /*Completa la función que tomando un array de strings como argumento devuelva el más largo,
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// +/*/

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(avengersArray) {
  let longestWord = "";
  avengersArray.forEach((element) => {
    longestWord = element.length > longestWord.length ? element : longestWord;
  });
  return longestWord;
}
const longestAvenger = findLongestWord(avengers);
console.log("🚀 ~ longestAvenger:", longestAvenger);

// //!-----------------------------------
// //? **Iteración #3: Calcular la suma**
// //!-----------------------------------

// /*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de
// todos los números de la matriz.

// Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];
const addition = (numbersArray) => {
  let totalSum = 0;
  for (let value of numbersArray) {
    totalSum += value;
  }
  return totalSum;
};
const totalAdd = addition(numbers);
console.log("🚀 ~ totalAdd:", totalAdd);

// //!---------------------------------------
// //? **Iteración #4: Calcular el promedio**
// //!---------------------------------------
// /*Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbersProm = [12, 21, 38, 5, 45, 37, 6];
const averageCalculator = (averageArray) => {
  let average = 0;
  for (let value of averageArray) {
    average += value;
  }
  return average / averageArray.length;
};
const numbersAverage = averageCalculator(numbersProm);
console.log("🚀 ~ numbersAverage:", numbersAverage);

// //!-----------------------------------------------
// //? **Iteración #5: Calcular promedio de strings**
// //!-----------------------------------------------

// /*Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
// y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const mixedSum = (mixedArray) => {
  let elementTotal = 0;
};

// const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
// let pStrings = (mixedArray) => {
//   let acc = [];
//   for (let i = 0; i < mixedArray.length; i++) {
//     if (mixedArray[i] != Number) {
//       acc = mixedArray[i].length;
//     } else {
//       acc = mixedArray[i];
//     }
//   }
// };

// const converse = pStrings(mixedElements);
// console.log("🚀 ~ converse:", converse);

// //!---------------------------------
// //? **Iteración #6: Valores Únicos**
// //!---------------------------------

// // Crea una función que reciba por parámetro un array
// // y compruebe si existen elementos duplicados,
// // en caso que existan los elimina para retornar un array sin los elementos duplicados.
// // Puedes usar este array para probar tu función:

// const duplicates = [
//   "sushi",
//   "pizza",
//   "burger",
//   "potatoe",
//   "pasta",
//   "ice-cream",
//   "pizza",
//   "chicken",
//   "onion rings",
//   "pasta",
//   "soda",
// ];

// let singles = [];
// duplicates.forEach((item) => {
//   if (!singles.includes(item)) {
//     singles.push(item);
//   }
// });
// const notDuplicated = singles;
// console.log("🚀 ~ notDuplicated:", notDuplicated);

// //!------------------------------------
// //? Iteración #7: Buscador de nombres**
// //!------------------------------------

// // Crea una función que reciba por parámetro un array y el valor que desea
// // comprobar que existe dentro de dicho array - comprueba si existe el elemento,
// // en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
// //Puedes usar este array para probar tu función:

// const namesss = [
//   "Peter",
//   "Steve",
//   "Tony",
//   "Natasha",
//   "Clint",
//   "Logan",
//   "Xabier",
//   "Bruce",
//   "Peggy",
//   "Jessica",
//   "Marc",
// ];

// let nameFinder = (namesArray, nombre) => {
//   let resultado = namesArray.indexOf(nombre);
//   if (resultado === -1) {
//     return false;
//   } else {
//     return { existeNombre: true, resultado: resultado };
//   }
// };
// console.log(nameFinder(namesss, "Peter"));
