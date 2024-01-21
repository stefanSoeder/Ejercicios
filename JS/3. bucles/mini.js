const miticos = ["Jason", "Aquiles", "Ulises", "Elena"];
// for (let i = 0; i < miticos.length; i++) {
//   if (miticos[i] === "Jason") {
//     console.log("¡Presente!");
//   }
// }
// miticos.forEach((element) => console.log(element));

var dieHardArray = [1, 2, "Simon", "John McClane", "Zeus Carver"];
// for (let value of dieHardArray) {
//   console.log(value);
// }
for (let inFor in dieHardArray) {
  console.log(inFor);
}
let batman = {
  nombre: "Bruce",
  apellidos: "Wayne",
  localizacion: "Gotham",
  profesion: "Multimillonario",
};
for (let clave in batman) {
  console.log(`Para el dato ${clave}, la clave es ${batman[clave]}`);
}

for (let posicion in miticos) {
  console.log(posicion);
}
let i = 0;

let acc = 0;

while (i < 10) {
  i++;
  console.log(`Estamos con la i:${i}`);
}
let keys = Object.keys(batman);
console.log("🚀 ~ keys:", keys);
let values = Object.values(batman);
console.log("🚀 ~ values:", values);
