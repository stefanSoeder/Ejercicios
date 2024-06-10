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
