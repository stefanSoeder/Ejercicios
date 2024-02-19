// const miticos = ["Jason", "Aquiles", "Ulises", "Elena"];
// // for (let i = 0; i < miticos.length; i++) {
// //   if (miticos[i] === "Jason") {
// //     console.log("¡Presente!");
// //   }
// // }
// // miticos.forEach((element) => console.log(element));

// var dieHardArray = [1, 2, "Simon", "John McClane", "Zeus Carver"];
// // for (let value of dieHardArray) {
// //   console.log(value);
// // }
// for (let inFor in dieHardArray) {
//   console.log(inFor);
// }
// let batman = {
//   nombre: "Bruce",
//   apellidos: "Wayne",
//   localizacion: "Gotham",
//   profesion: "Multimillonario",
// };
// for (let clave in batman) {
//   console.log(`Para el dato ${clave}, la clave es ${batman[clave]}`);
// }

// for (let posicion in miticos) {
//   console.log(posicion);
// }
// let i = 0;

// let acc = 0;

// while (i < 10) {
//   i++;
//   console.log(`Estamos con la i:${i}`);
// }
// let keys = Object.keys(batman);
// console.log("🚀 ~ keys:", keys);
// let values = Object.values(batman);
// console.log("🚀 ~ values:", values);

//!--------------------------------------
// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
// y añade la propiedad isApproved a true o false en consecuencia.
// Una vez lo tengas compruébalo con un console.log.
// ( Mirar abajo en pistas ).
// Puedes usar este array para probar tu función:

// //!----------------------------------------------------------------------------------------------------------------------------------------------------------

// const alumns = [
//   { name: "Pepe Viruela", T1: false, T2: false, T3: true },
//   { name: "Lucia Aranda", T1: true, T2: false, T3: true },
//   { name: "Juan Miranda", T1: false, T2: true, T3: true },
//   { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
//   { name: "Raquel Benito", T1: true, T2: true, T3: true },
// ];
// alumns.forEach((alumns))=>{
//   alumns.isApproved=()
// }
// let evaluacion = (clase) => {
//   alumns.forEach((alumn) => {
//     let aprobados = 0;
//     for (let clave in alumn) {
//       if (alumn[clave] === true) {
//         aprobados++;
//       } else if (alumn[clave] === false) {
//         aprobados--;
//       }
//         if ((aprobados) => 2) {
//         isApproved: true;
//         } else {
//         isApproved: false;
//         }
//     }
//   });
// };
// alumns[indice].isApproved =
// console.log (aprobados)

const ahora = new Date();
const horaActual = ahora.getHours();
console.log("🚀 ~ horaActual:", horaActual);
