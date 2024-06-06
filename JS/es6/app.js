//!-------------------
//?Iteración 1: Arrows
//!-------------------

// Crea una arrow function que tenga dos parametros a y b y
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
// por consola la suma de los dos parametros.

// 1.1 Ejecuta esta función sin pasar ningún parametro

const suma = (a = 10, b = 5) => a + b;
const sumaSin = suma();
console.log("🚀 ~ sumaSin:", sumaSin);

// 1.2 Ejecuta esta función pasando un solo parametro
const sumaUno = suma(11);
console.log("🚀 ~ sumaUno:", sumaUno);
// 1.3 Ejecuta esta función pasando dos parametros
const sumaDos = (20, 30);
console.log("🚀 ~ sumaDos:", sumaDos);

//!--------------------------
//?Iteración 2: Destructuring
//!--------------------------

// 2.1 En base al siguiente javascript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprimelas por consola. Cuidado,
// no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;
const pelicula = title;
console.log("🚀 ~ pelicula:", pelicula);
const genero = gender;
console.log("🚀 ~ genero:", genero);
const estreno = year;
console.log("🚀 ~ estreno:", estreno);

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ["Banana", "Strawberry", "Orange"];
const [a, b, c] = fruits;
const fruit1 = a;
console.log("🚀 ~ fruit1:", fruit1);
const fruit2 = b;
console.log("🚀 ~ fruit2:", fruit2);
const fruit3 = c;
console.log("🚀 ~ fruit3:", fruit3);

// 2.3 En base al siguiente javascript, usa destructuring para crear 2
// variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};
const { name, race } = animalFunction();
console.log("🚀 ~ race:", race);
console.log("🚀 ~ name:", name);

// 2.4 En base al siguiente javascript, usa destructuring para crear las
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo esta bien imprimiendolo.

const car = { name1: "Mazda 6", itv: [2015, 2011, 2020] };
const { name1, itv } = car;
console.log("🚀 ~ name1:", name1);
console.log("🚀 ~ itv:", itv);
const [year1, year2, year3] = itv;
console.log("🚀 ~ year1:", year1);
console.log("🚀 ~ year2:", year2);
console.log("🚀 ~ year3:", year3);

//!----------------------------
//?Iteración 3: Spread Operator
//!----------------------------

// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];
const spreadPointlear = [...pointsList];
console.log("🚀 ~ spreadPointlear:", spreadPointlear);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const sreadToy = { ...toy };
console.log("🚀 ~ sreadToy:", sreadToy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.

const pointsLis2 = [54, 87, 99, 65, 32];

const joinedPoints = [...pointsList, ...pointsLis2];
console.log("🚀 ~ joinedPoints:", joinedPoints);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.

const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };
const updatedToy = { ...toy, ...toyUpdate };
console.log("🚀 ~ updatedToy:", updatedToy);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const eliminar = (array, index) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
const lessColors = [...colors];
console.log(eliminar(lessColors, 2));

//!----------------
//?Iteración 4: Map
//!----------------

// 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const usersNames = users.map((users) => users.name);
console.log("🚀 ~ usersNames:", usersNames);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.

let anacletos = [];

usersNames.forEach((element) => {
  if (element.toLowerCase().charAt(0) == "a") {
    anacletos.push("Anacleto");
  } else {
    anacletos.push(element);
  }
});
console.log("🚀 ~ anacletos:", anacletos);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const visitedCities = cities.map((cities) => cities.name);
console.log("🚀 ~ visitedCities:", visitedCities);

const reVisited = cities.map((cities) => cities.isVisited);
console.log("🚀 ~ reVisited:", reVisited);

reVisited.forEach((element, index) => {
  if (element == true) {
    visitedCities[index] += "/Visitado";
  }
});
console.log(visitedCities);

//!-------------------
//?Iteración 4: Filter
//!-------------------

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const over18 = ages.filter((age) => age > 18);
console.log("🚀 ~ over18:", over18);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.

const even = ages.filter((age) => age % 2 == 0);
console.log("🚀 ~ even:", even);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lOl = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends"
);
console.log("🚀 ~ lOl:", lOl);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.

const includesU = streamers.filter((streamer) => streamer.name.includes("u"));
console.log("🚀 ~ includesU:", includesU);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.

// const lOl35 = streamers.filter((streamer) => {
//   if (streamer.gameMorePlayed.includes("Legends")) {
//     if (streamer.age > 35) {
//       streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
//     }
//   }
//   return streamer;
// });
// console.log("lol35", lOl35);

const streamersFilter2 = streamers.filter((gamer) => {
  if (gamer.gameMorePlayed.includes("Legends")) {
    if (gamer.age > 35) {
      gamer.gameMorePlayed = gamer.gameMorePlayed.toUpperCase();
    }
    return gamer;
  }
});

console.log(streamersFilter2);

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

// <!doctype html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
//              <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//              <meta http-equiv="X-UA-Compatible" content="ie=edge">
//              <title>Document</title>
// </head>
// <body>
//   <input type="text" data-function="toFilterStreamers"/>
// </body>
// </html>

//!------------------
//? Iteración 6: Find
//!------------------

// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];
const findCien = numbers.find((number) => number == 100);
console.log("🚀 ~ findCien:", findCien);

// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const in2010 = movies.find((movie) => movie.date === 2010);
console.log("🚀 ~ in2010:", in2010);

// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre
// 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa
// spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación
// lo queremos meter en la propiedad .mutation del objeto fusionado.

const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];
const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const cucu = aliens.find((alien) => (alien.name = "Cucushumusu"));
console.log("🚀 ~ cucu:", cucu);

const poro = mutations.find((mutation) => (mutation.name = "Porompompero"));
console.log("🚀 ~ poro:", poro);

const fusion = { ...cucu, mutation: { ...poro } };
console.log("🚀 ~ fusion:", fusion);
