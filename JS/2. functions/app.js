//!----------------------------------

//? Iteración #1: Buscar el máximo**
//!----------------------------------
// //?Completa la función que tomando dos números como argumento devuelva el más alto.

// //?```jsx
// //?function sum(numberOne, numberTwo) {

const sum = (numberOne, numberTwo) => {
  let biggest;
  if (numberOne > numberTwo) {
    biggest = numberOne;
  } else {
    biggest = numberTwo;
  }
  return biggest;
};
sum(1, 2);

const bigger = sum(1, 2);
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
  let longestWord = "";
  for (let i = 0; i < arrayAvengers.length; i++) {
    if (arrayAvengers[i].length > longestWord.length) {
      longestWord = arrayAvengers[i];
    }
  }
  return longestWord;
};
let longestAvenger = findLongestWord(avengers);
console.log("🚀 ~ longestAvenger:", longestAvenger);

//!-----------------------------------
//? **Iteración #3: Calcular la suma**
//!-----------------------------------

/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de 
todos los números de la matriz.

Puedes usar este array para probar tu función:

```jsx
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
}
```*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

const adicion = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(adicion);

//!---------------------------------------
//? **Iteración #4: Calcular el promedio**
//!---------------------------------------
/*Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

```jsx
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
}*/
const promNumbers = [12, 21, 38, 5, 45, 37, 6];
const average =
  promNumbers.reduce(
    (accumlator, currentValue) => accumlator + currentValue / promNumbers.length
  ) / promNumbers.length;
console.log("🚀 ~ average:", average);

//!-----------------------------------------------
//? **Iteración #5: Calcular promedio de strings**
//!-----------------------------------------------

/*Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

```jsx
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param) {
  // insert code
}*/

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
let pStrings = (mixedArray) => {
  let acc = [];
  for (let i = 0; i < mixedArray.length; i++) {
    if (mixedArray[i] != Number) {
      acc = mixedArray[i].length;
    } else {
      acc = mixedArray[i];
    }
  }
};

const converse = pStrings(mixedElements);
console.log("🚀 ~ converse:", converse);

//!---------------------------------
//? **Iteración #6: Valores Únicos**
//!---------------------------------

// Crea una función que reciba por parámetro un array
// y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
// Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

let singles = [];
duplicates.forEach((item) => {
  if (!singles.includes(item)) {
    singles.push(item);
  }
});
const notDuplicated = singles;
console.log("🚀 ~ notDuplicated:", notDuplicated);

//!------------------------------------
//? Iteración #7: Buscador de nombres**
//!------------------------------------

// Crea una función que reciba por parámetro un array y el valor que desea
// comprobar que existe dentro de dicho array - comprueba si existe el elemento,
// en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
//Puedes usar este array para probar tu función:

const namesss = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

let nameFinder = (namesArray, nombre) => {
  let resultado = namesArray.indexOf(nombre);
  if (resultado === -1) {
    return false;
  } else {
    return { existeNombre: true, resultado: resultado };
  }
};
console.log(nameFinder(namesss, "Peter"));
