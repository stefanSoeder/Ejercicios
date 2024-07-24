//!-------------
//? #1 FIZZ BUZZ
//!-------------
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (let i = 1; i <= 100; i++)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzBuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }

//!------------
//? #2 ANAGRAMA
//!------------

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const anagramDetector = (string1, string2) => {
  let isAnagram = true;
  let string1Array = string1.split("").sort().join("");
  console.log("🚀 ~ anagramDetector ~ string1Array:", string1Array);

  let string2Array = string2.split("").sort().join("");
  console.log("🚀 ~ anagramDetector ~ string2Array:", string2Array);
  string1.split;
  if (string1 === string2) {
    isAnagram = false;
  } else if (string1Array === string2Array) {
    isAnagram = true;
  } else {
    isAnagram = false;
  }
  return isAnagram;
};
areThisAnagram = anagramDetector("listen", "silent");
console.log("🚀 ~ areThisAnagram:", areThisAnagram);

//!---------------------
//? #8 CONTANDO PALABRAS
//!---------------------

/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const mainText =
  "Hola, mi nombre es brais. Mi nombre completo es Brais Moure (MoureDev).";

const wordCounter = (string) => {
  const cleantText = string.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
  let textToArray = cleantText.split(" ");
  let words = {};
  textToArray.forEach((element) => {
    if (element) {
      if (!words[element]) {
        words[element] = 1;
      } else {
        words[element] += 1;
      }
    }
  });
  for (let key in words) {
    console.log(`La palabra ${key} se repite ${words[key]}`);
  }
};

countedWords = wordCounter(mainText);

//!-------------
//? #3 FIBONACCI
//!-------------

/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let fibonacciArray = [0, 1];

while (fibonacciArray.length <= 50) {
  let newNumber =
    fibonacciArray[fibonacciArray.length - 2] +
    fibonacciArray[fibonacciArray.length - 1];
  fibonacciArray.push(newNumber);
}
console.log(fibonacciArray);

//!------------------
//? #4 NÚMEROS PRIMOS
//!------------------

/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const primeEvaluator = (number) => {
  let isPrime = true;
  if (number % 2 === 0) {
    isPrime = false;
  }
  return isPrime;
};

const isThisPrime = primeEvaluator(4);
console.log("🚀 ~ isThisPrime:", isThisPrime);

const primesFromZeroToHundred = () => {
  for (let i = 0; i <= 100; i++) {
    if (primeEvaluator(i) === true) {
      console.log(`${i} is prime`);
    }
  }
};
primesFromZeroToHundred();
console.log("🚀 ~ primesFromZeroToHundred:", primesFromZeroToHundred);
