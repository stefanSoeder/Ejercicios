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

// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre
// 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa
// spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación
// lo queremos meter en la propiedad .mutation del objeto fusionado.

// const aliens = [
//   { name: "Zalamero", planet: "Eden", age: 4029 },
//   { name: "Paktu", planet: "Andromeda", age: 32 },
//   { name: "Cucushumushu", planet: "Marte", age: 503021 },
// ];
// const mutations = [
//   {
//     name: "Porompompero",
//     description:
//       "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
//   },
//   {
//     name: "Fly me to the moon",
//     description: "Permite volar, solo y exclusivamente a la luna",
//   },
//   {
//     name: "Andando que es gerundio",
//     description: "Invoca a un señor mayor como Personal Trainer",
//   },
// ];

// const alienNew = aliens.find((alien) => alien.name === "Cucushumushu");
// console.log("🚀 ~ alienNew:", alienNew);
// const mutationNew = mutations.find(
//   (mutation) => mutation.name === "Porompompero"
// );
// console.log("🚀 ~ mutationNew:", mutationNew);

// const fusion = { ...alienNew, mutation: mutationNew };
// console.log("🚀 ~ fusion:", fusion);
