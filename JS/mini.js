let heroes = ["Escipión", "Aníbal", "Trajano"];
heroes[3] = "César";
console.log("🚀 ~ heroes:", heroes);
const numberRandom = [1, 2, 3, 4, 5, 6];
console.log(numberRandom.shift()); // ---->  deuelve el elemento que elimina del array original
console.log("🚀 ~ numberRandom:", numberRandom);
numberRandom.unshift(["lo nuevo"]);
console.log("🚀 ~ numberRandom:", numberRandom);
const arrayRandom = ["abc", 12213, "bca", 2332, 12, 0, 1, 34, "w"];
arrayRandom.sort();
console.log("🚀 ~ arrayRandom:", arrayRandom);
arrayRandom.sort((a, b) => b - a);
console.log("🚀 ~ arrayRandom:", arrayRandom);
arrayRandom.reverse();
console.log("🚀 ~ arrayRandom:", arrayRandom);
const random = [1, 2, 3, 4, 5, 6];

const corte = random.splice(0, 3, 234, 54);
console.log("🚀 ~ random.:", random);
const saludo = ["Hola", "que", "tal?"];
const stringSaludo = saludo.join(" ");
console.log("🚀 ~ stringSaludo:", stringSaludo);
console.log("🚀 ~ file: app.js:52 ~ stringSaludo:", stringSaludo);
console.log(saludo);
const comidas = ["lentejas", "macarrones", "potaje"];
console.log(comidas.slice(0, 1));
console.log("🚀 ~ file: app.js:60 ~ comidas:", comidas);
console.log(comidas.toString());
console.log(comidas.indexOf("lentejas"));
const recetas = ["lentejas", "macarrones", "potaje", "macarrones"];
console.log(recetas.lastIndexOf("macarrones"));
const ferrari = {
  marca: "ferrari",
  modelo: "F12",
};
let feature = Object.keys(ferrari);
console.log("🚀 ~ feature:", feature);
let nota = Object.values(ferrari);
console.log("🚀 ~ nota:", nota);
let ambas = Object.entries(ferrari);
console.log("🚀 ~ ambas:", ambas);
const winner = true;

console.log(winner.toString());

/** recordar el tema del concatenado con el + o el template string */
// formas de contanenar un string

const dog = "Rodolfo";
console.log("El perro de Jorge se llama: " + dog);
console.log(`El perro de jorge que se llama ${dog} tiene 4 años`);
// mutaciones de tipo cuando contanemos

console.log(56 + 4 + " esto le costo el perro a jorge"); // 60 esto le costo el perro a jorge
console.log(" esto le costo el perro a jorge" + (56 + 4)); //  esto le costo el perro a jorge60
console.log(" esto le costo el perro a jorge " + 56 + 4); //esto le costo el perro a jorge 564

console.log(dog.charAt(0));
console.log(dog.repeat(3));
const quote =
  "Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos, un Anillo para atraerlos a todos y atarlos en las tinieblas en la Tierra de Mordor donde se extienden las Sombras.";

console.log(quote.replaceAll(" ", "Gato"));
// Retorna "Un Gato para gobernarlos a todos.
// Un Gato para encontrarlos, un Gato para atraerlos
// a todos y atarlos en las tinieblas en la Tierra de Mordor
// donde se extienden las Sombras."
const saludos = "Hola-que-tal?";
const saludoOk = saludos.replaceAll("-", " "); //*Cambia los guiones por espacios en blanco
console.log("🚀 ~ file: app.js:27 ~ saludoOk:", saludoOk);
console.log(isNaN("45.4565"));
console.log(parseFloat("235523.12352234"));
console.log(numberRandom.toString());

let prueba = "menu";
if ((prueba.isNaN = true)) {
  console.log("funciona");
}
let concatena = "school" + 5 + 5;

const colores = ["rojo", "verde", "azul"];
const [primerColor, segundoColor, tercerColor] = colores;
console.log(primerColor); // imprime 'rojo'
console.log(segundoColor); // imprime 'verde'
console.log(tercerColor); // imprime 'azul'
const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    ciudad: "Bogotá",
    pais: "Colombia",
  },
};

const {
  nombre,
  edad,
  direccion: { ciudad },
} = persona;
console.log(nombre); // imprime 'Juan'
console.log(edad); // imprime 30
console.log(ciudad); // imprime 'Bogotá'

const movie = {
  title: "Avatar",
  director: "James Cameron",
  year: 2009,
  city: {
    spain: "Almeria",
    eeuu: "New York",
  },
};

const copyMovie = movie;

copyMovie.title = "TITANIC";
console.log("🚀 ~ copyMovie:", copyMovie);
console.log("🚀 ~ movie:", movie);

const copySpread = { ...movie };
copySpread.title = "Dora";
console.log("🚀 ~ copySpread:", copySpread);
console.log("🚀 ~ movie:", movie);

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
