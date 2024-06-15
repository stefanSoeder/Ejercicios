//!------------------------
//? Padawan: Ejercicio 1
//!------------------------

// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean
// menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los
// usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
let adults = [];
let kids = [];
users.forEach((element) => {
  if (element.years > 18) {
    adults.push(element.name);
  } else {
    kids.push(element.name);
  }
});
console.log(`Usuarios menores de edad: ${kids}
Usuarios mayore de edad:${adults}`);

//!------------------------
//? Padawan: Ejercicio 2
//!------------------------

// Usa un for para remplazar todas las comidas que no sean veganas con
// las frutas del array de frutas. Recuerda no usar frutas duplicadas.

// Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let allVegan = [];
for (food of foodSchedule)
  if (!food.isVegan) {
    food.name = fruits.shift();
  }
console.log(foodSchedule);

//!---------------------
//? Padawan: Ejercicio 3
//!---------------------

// Usa un bucle para crear 3 arrays de peliculas filtrados por
// categorias. Pelicula pequeña, menos de 100 minutos, pelicula
// mediana, mas de 100 minutos y menos de 200 y pelicula grande,
// mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];
let smallMovie = [];

let mediumMovie = [];

let bigMovie = [];
movies.forEach((element) => {
  if (element.durationInMinutes < 100) {
    smallMovie.push(element);
  } else if (element.durationInMinutes < 200) {
    mediumMovie.push(element);
  } else {
    bigMovie.push(element);
  }
});
console.log("🚀 ~ smallMovie:", smallMovie);
console.log("🚀 ~ mediumMovie:", mediumMovie);
console.log("🚀 ~ bigMovie:", bigMovie);

//!---------------------
//? Padawan: Ejercicio 4
//!---------------------

//Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

const addSellCounts = (array) => {
  totalSellCounts = 0;
  array.forEach((element) => (totalSellCounts += element.sellCount));
  return totalSellCounts;
};
const totalProductsSellCounts = addSellCounts(products);
console.log("🚀 ~ totalProductsSellCounts:", totalProductsSellCounts);

//!---------------------
//? Padawan: Ejercicio 5
//!---------------------

// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos
// y mostrar por consola la media de ventas.

const totalMarks =
  products.reduce((acc, product) => acc + product.sellCount, 0) /
  products.length;
console.log("🚀 ~ totalMarks:", totalMarks);

//!---------------------
//? Padawan: Ejercicio 6
//!---------------------

// Usa un bucle para recorrer el array de peliculas (products)
// y añade al array goodProducts los que tengan más de 20 ventas
// (sellCount) y al array badProducts los que tengan menos.

const goodProducts = products.filter((product) => product.sellCount > 20);
console.log("🚀 ~ goodProducts:", goodProducts);
const badProducts = products.filter((product) => product.sellCount <= 20);
console.log("🚀 ~ badProducts:", badProducts);
