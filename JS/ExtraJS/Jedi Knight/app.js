//!-------------------------
//? Jedi Knight: Ejercicio 1
//!-------------------------

// Dado el siguiente javascript usa forof para recorrer el array de películas,
// genera un nuevo array con las categorías de las películas e imprime por consola
//  el array de categorías. Ten en cuenta que las categorías no deberían repetirse.

// Para filtrar las categorías puedes ayudarte de la función .includes().

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categoryExtractor = (array) => {
  let extractedCategories = [];
  array.forEach((element) => {
    for (let category of element.categories) {
      if (!extractedCategories.includes(category)) {
        extractedCategories.push(category);
      }
    }
  });
  return extractedCategories;
};

const categories = categoryExtractor(movies);
console.log("🚀 ~ categories:", categories);

//!-------------------------
//? Jedi Knight: Ejercicio 2
//!-------------------------

// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de
// todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const averageVolumeCalculator = (usersArray) => {
  let totalVolume = 0;
  let totalClaves = 0;
  usersArray.forEach((element) => {
    for (let feature of element.favoritesSounds) {
      for (let clave in feature) {
        totalVolume += clave.volume;
        totalClaves++;
      }
      return totalVolume / totalClaves;
    }
  });
};

const averageVolume = averageVolumeCalculator(users);
console.log("🚀 ~ averageVolume:", averageVolume);
