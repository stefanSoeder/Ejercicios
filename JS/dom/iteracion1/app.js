//!------------------------------------
//? Iteración #1: Iteracción con el DOM
//!------------------------------------
// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const buttonShowMe = document.querySelector(".showme");
console.log("🚀 ~ buttonShowMe:", buttonShowMe);
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Pillado = document.querySelector("#pillado");
console.log("🚀 ~ h1Pillado:", h1Pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
const todosP = document.querySelectorAll("p");
console.log("🚀 ~ todosP:", todosP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemonElements = document.querySelectorAll(".pokemon");
console.log("🚀 ~ pokemonElements:", pokemonElements);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
// data-function="testMe".
const allTestMe = document.querySelectorAll("[data-function='testMe']");

console.log("atributos data-function", allTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".

console.log("El tercer personaje es", allTestMe[2]);
