// //! 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre'Cucushumushu' y la mutación 'Porompompero'. //! Una vez que los encuentres, usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación //! lo queremos meter en la propiedad .mutation del objeto fusionado.  const aliens = [   { name: "Zalamero", planet: "Eden", age: 4029 },   { name: "Paktu", planet: "Andromeda", age: 32 },   { name: "Cucushumushu", planet: "Marte", age: 503021 }, ]; const mutations = [   {     name: "Porompompero",     description:       "Hace que el alien pueda adquirir la habilidad de tocar el tambor",   },   {     name: "Fly me to the moon",     description: "Permite volar, solo y exclusivamente a la luna",   },   {     name: "Andando que es gerundio",     description: "Invoca a un señor mayor como Personal Trainer",   }, ];  const alien2 = aliens.find((alien) => alien.name === "Cucushumushu"); const newMutation = aliens.find((alien) => alien.name === "Poro
// const alien2 = aliens.find((alien) => alien.name === "Cucushumushu");
// const newMutation = aliens.find((alien) => alien.name === "Porompompero");

// const fusion2 = { ...alien2, ...newMutation };
// console.log(fusion2);

//---

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
console.log(persona);
