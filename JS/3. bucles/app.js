//!----------------------------------------------------------------------------------------------------------------------------------------------------------
//? **Iteración #1: Usa includes**

//? Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
//? Usa la función .***includes*** de javascript.

//?```jsx
//? const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket','Cinrurón de Orión', 'AC/DC Camiseta']
//!----------------------------------------------------------------------------------------------------------------------------------------------------------

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

products.forEach((element) => {
  if (element.includes("Camiseta")) {
    console.log(element);
  }
});

//!--------------------------------------
//? Iteración #2: Condicionales avanzados
//!--------------------------------------
// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
// y añade la propiedad isApproved a true o false en consecuencia.
// Una vez lo tengas compruébalo con un console.log.
// ( Mirar abajo en pistas ).
// Puedes usar este array para probar tu función:

//!----------------------------------------------------------------------------------------------------------------------------------------------------------

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

let acc = 0;
alumns.forEach((element) => {
  let counter = 0;
  for (key in element)
    if (element[key] === true) {
      counter++;
    }
  if (counter >= 2) {
    element.isApproved = true;
  } else {
    element.isApproved = false;
  }
});
console.log(alumns);

//!--------------------------------
//? Iteración #3: Probando For...of
//!--------------------------------

// Usa un bucle forof para recorrer todos los destinos del array.
// Imprime en un **_console.log_** sus valores.

// Puedes usar este array:

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (let destino of placesToTravel) {
  console.log(destino);
}

//!--------------------------------
//? Iteración #4: Probando For...in
//!--------------------------------

// Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};
for (key in alien) {
  console.log(key + ":" + alien[key]);
}

//!--------------------------------
//? Iteración #5: Probando For
//!--------------------------------

// Usa un bucle **for** para recorrer todos los destinos del array
// y elimina los elementos que tengan el id 11 y 40.
// Imprime en un **_console log_** el array. Puedes usar este array:

const places2Travel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let i = 0; i < places2Travel.length; i++) {
  if (places2Travel[i].id === 11) {
    delete places2Travel[i];
  } else if (places2Travel[i].id === 40) {
    delete places2Travel[i];
  }
}
console.log(places2Travel);

// for (let i = 0; i < places2Travel.length; i++) {
//   if (places2Travel[i].id === 11) {
//     delete places2Travel[i];
//   } else if (places2Travel[i].id === 40) {
//     delete places2Travel[i];
//   }
//   console.log("🚀 ~ places2Travel:", places2Travel);
// }

//!----------------------------------------
//? Iteración #6: Mixed For...of e includes
//!----------------------------------------
// Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
// Recuerda que puedes usar la función **_.includes()_** para comprobarlo.Puedes usar este array:

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

const noCatsAllowed = [];

for (let juguete of toys) {
  if (!juguete.name.includes("gato")) {
    noCatsAllowed.push(juguete);
  }
}
console.log(noCatsAllowed);

// for (let i = 0; i < toys.length; i++) {
//   let word = "gato";
//   if (toys[i].name.includes(word)) {
//     delete toys[i];
//   }
// }
// console.log(toys);

//!--------------------------------
//? Iteración #7: For...of avanzado
//!--------------------------------

// Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más
// de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:

const toys2 = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

const popularToys = [];

for (let toy of toys2)
  for (key in toy) {
    if (key == "sellCount") {
      if (toy[key] > 15) {
        popularToys.push(toy);
      }
    }
  }
console.log(popularToys);

// for (let i = 0; i < toys2.length; i++) {
//   if (toys2[i].sellCount > 15) {
//     popularToys.push(toys2[i].name);
//   }
// }
// console.log(popularToys);
