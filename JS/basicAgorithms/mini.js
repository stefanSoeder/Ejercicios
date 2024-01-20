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

//!----------------------
//? Operadores Lógicos #1
//!----------------------

// 1. Crea una variable llamada **`planet`** y asígnale el valor "Tierra"
// 2. Crea una variable llamada **`isInnerPlanet`** y asígnale el valor **`true`** (la Tierra es un planeta interno)
// 3. Crea una variable llamada **`hasAtmosphere`** y asígnale el valor **`true`** (la Tierra tiene atmósfera)
// 4. Utiliza un operador lógico **`&&`** (AND) para combinar las variables **`isInnerPlanet`** y **`hasAtmosphere`** en una expresión lógica que evalúe a **`true`**. Almacena el resultado en una variable llamada **`isHabitable`**.
// 5. Utiliza una declaración **`console.log`** para imprimir el valor de la variable **`isHabitable`** en la consola. Debería mostrarse **`true`**.

let planet = "Tierra";
let isInnerPlanet = true;
let hasAtmosphere = true;
hasAtmosphere && isInnerPlanet;
console.log(
  "🚀 ~ hasAtmosphere&&isInnerPlanet:",
  hasAtmosphere && isInnerPlanet
);
let isHabitable = hasAtmosphere && isInnerPlanet;
console.log("🚀 ~ isHabitable:", isHabitable);

const esHabitable = isHabitable ? "Lo es" : "No lo es";
console.log("🚀 ~ esHabitable:", esHabitable);

console.log(void isHabitable);
let trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log("length" in trees);

console.log(+"tres");

//!-----------------
//? Condicionales #1
//!-----------------

// 1. Crea una variable llamada **`character`** y asígnale el valor "Legolas"
// 2. Crea una variable llamada **`race`** y asígnale el valor "Elfo"
// 3. Crea una variable llamada **`hasRing`** y asígnale el valor **`false`** (Legolas no tiene el Anillo Único)
// 4. Crea una variable llamada **`isArcher`** y asígnale el valor **`true`** (Legolas es un arquero)
// 5. Utiliza un condicional **`if`** para evaluar si **`hasRing`** es **`true`**.
// Si lo es, imprime en la consola el mensaje "Legolas es el portador del Anillo Único"
// 6. Utiliza **`else if`** para evaluar si **`isArcher`** es **`true`**.
// Si lo es, imprime en la consola el mensaje "Legolas es un arquero experto"
// 7. Utiliza  **`else`** para imprimir en la consola el mensaje "Legolas es un guerrero valiente"

let personaje = "Legolas";
let race = "Elfo";
let hasRing = false;
let isArcher = true;
if (hasRing === true) {
  console.log(`${personaje} es el portador del anillo`);
} else if (isArcher === false) {
  console.log(`${personaje} es un arqueroexperto`);
} else {
  console.log(`${personaje} es un guerrero valiente`);
}
