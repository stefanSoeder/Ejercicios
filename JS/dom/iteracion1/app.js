//!------------------------------------
//? Iteración #1: Iteracción con el DOM
//!------------------------------------
// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showButton = document.querySelector(".showme");
console.log("🚀 ~ showButton:", showButton);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const showPillado = document.querySelector("#pillado");
console.log("🚀 ~ showPillado:", showPillado);

// 1.3 Usa querySelector para mostrar por consola todos los p

const showAllP = document.querySelectorAll("p");
console.log("🚀 ~ showAllP:", showAllP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const showwAllPokemon = document.querySelectorAll(".pokemon");
console.log("🚀 ~ showwAllPokemon:", showwAllPokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
// data-function="testMe".

const showAllTestMe = document.querySelectorAll("[data-function='testMe']");
console.log("🚀 ~ showAllTestMe:", showAllTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".

const showThirdCharacter = showAllTestMe[2];
console.log("🚀 ~ showThirdCharacter:", showThirdCharacter);
