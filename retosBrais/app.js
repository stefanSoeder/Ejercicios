//!----------
//? FIZZ BUZZ
//!----------
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

//!----------
//? FIZZ BUZZ
//!----------

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

//!------------------
//? CONTANDO PALABRAS
//!------------------

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
