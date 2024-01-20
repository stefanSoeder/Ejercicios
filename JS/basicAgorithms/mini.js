//!-------------
//? Variables #1
//!-------------
// Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.//
let myFavoriteHero = "Hullk";

//!-------------
//? Variables #2
//!-------------
// Crea una variable llamada x, asigna el valor 50 a ella.

let x = 2;

//!-------------
//? Variables #3
//!-------------

// Crea una variable llamada h con el valor 5 y otra y con el valor 10.

let h = 5;
let y = 10;

//!-------------
//? Variables #4
//!-------------
// Crea una otra variable z y asignale el valor de h + y.
let z = h + y;
console.log("🚀 ~ z:", z);

//!-------------
//? Variables #5
//!-------------
// Dado el siguiente javascript, cambia el valor de la propiedad age a 250.
// const character = {name: 'Jack Frost', age: 10};

const character = { name: "Jack Frost", age: 10 };
character.age = 250;
console.log("🚀 ~ character:", character);

//!--------------
//? Variables #6
//!--------------

// Declara 3 variables con los nombres y valores siguientes:
// firstName = 'Jon';
// lastName = 'Snow';
// age = 24
firstName = "Jon";
lastName = "Snow";
age = 24;

//!--------------
//? Variables #7
//!--------------

// Guarda los valores en sentence con la siguiente estructura:
// Soy Jon Snow, tengo 24 años y me gustan los lobos.

let sentence = `Soy ${firstName} ${lastName}, tengo ${age} y me gustan los lobos`;

console.log("🚀 ~ sentence:", sentence);

//!--------------
//? Variables #8
//!--------------
// Dado el siguiente javascript, guarda en una variable la suma del precio de ambos juguetes.
// const toy1 = {name: 'Buss myYear', price: 19};
// const toy2 = {name: 'Rallo mcKing', price: 29};

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

let totalPrice = toy1.price + toy2.price;
console.log("🚀 ~ totalPrice:", totalPrice);
