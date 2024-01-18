//!----------------------------------------------------------------------------------------------------------------------------------------------------------
//? **Iteración #1: Usa includes**

//? Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

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

for (let i = 0; i < products.length; i++) {
  if (i.includes("Camiseta")) {
    console.log(i);
  }
}

//!----------------------------------------------------------------------------------------------------------------------------------------------------------

//? Iteración #2: Condicionales avanzados
//? Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
//? y añade la propiedad isApproved a true o false en consecuencia.
//? Una vez lo tengas compruébalo con un console.log.
//? ( Mirar abajo en pistas ).
//? Puedes usar este array para probar tu función:

//!----------------------------------------------------------------------------------------------------------------------------------------------------------

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];
