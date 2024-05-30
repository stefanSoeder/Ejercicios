//!--------------------------------
//? Iteración #1: Mix for e includes
//!--------------------------------

// Dado el siguiente javascript usa forof para recorrer el array de películas,
// genera un nuevo array con las categorías de las películas e imprime por consola
//  el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
//  Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

// const getMovieCategories = (movies) => {
//   const categories = [];

//   for (const movie of movies) {
//     movie.categories.forEach((category) => {
//       if (!categories.includes(category)) {
//         categories.push(category);
//       }
//     });
//   }

//   return categories;
// };

// console.log(getMovieCategories(movies));

const categoryExtractor = (movies) => {
  const moviesCategories = [];
  for (const movie of movies) {
    movie.categories.forEach((category) => {
      if (!moviesCategories.includes(category)) {
        moviesCategories.push(category);
      }
    });
  }
  return moviesCategories;
};
console.log(categoryExtractor(movies));

//!-----------------------
//? Iteración #2: Mix fors
//!-----------------------
// Dado el siguiente javascript usa forof y forin para hacer la media del
// volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const averageVolumeCalculator = (users) => {
  let counter = 0;
  let totalVolume = 0;

  for (const user of users) {
    for (const favorites in user.favoritesSounds) {
      totalVolume = totalVolume + user.favoritesSounds[favorites].volume;
      counter++;
    }
  }
  return totalVolume / counter;
};
console.log(averageVolumeCalculator(users));

// const soundVolumeAverage = (users) => {
//   let counter = 0;
//   let totalVolume = 0;

//   for (const user of users) {
//     for (const favorites in user.favoritesSounds) {
//       totalVolume = totalVolume + user.favoritesSounds[favorites].volume;
//       counter++;
//     }
//   }

//   return totalVolume / counter;
// };

// console.log(`Sound Vulume Average: ${soundVolumeAverage(users)}`);
