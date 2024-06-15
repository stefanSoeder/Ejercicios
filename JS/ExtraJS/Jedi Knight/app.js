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
