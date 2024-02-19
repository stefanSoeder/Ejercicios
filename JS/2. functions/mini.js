// //! 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre'Cucushumushu' y la mutación 'Porompompero'. //! Una vez que los encuentres, usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación //! lo queremos meter en la propiedad .mutation del objeto fusionado.  const aliens = [   { name: "Zalamero", planet: "Eden", age: 4029 },   { name: "Paktu", planet: "Andromeda", age: 32 },   { name: "Cucushumushu", planet: "Marte", age: 503021 }, ]; const mutations = [   {     name: "Porompompero",     description:       "Hace que el alien pueda adquirir la habilidad de tocar el tambor",   },   {     name: "Fly me to the moon",     description: "Permite volar, solo y exclusivamente a la luna",   },   {     name: "Andando que es gerundio",     description: "Invoca a un señor mayor como Personal Trainer",   }, ];  const alien2 = aliens.find((alien) => alien.name === "Cucushumushu"); const newMutation = aliens.find((alien) => alien.name === "Poro
// const alien2 = aliens.find((alien) => alien.name === "Cucushumushu");
// const newMutation = aliens.find((alien) => alien.name === "Porompompero");

// const fusion2 = { ...alien2, ...newMutation };
// console.log(fusion2);

//---

// const persona = {
//   nombre: "Juan",
//   edad: 30,
//   direccion: {
//     ciudad: "Bogotá",
//     pais: "Colombia",
//   },
// };

// const {
//   nombre,
//   edad,
//   direccion: { ciudad },
// } = persona;
// console.log(nombre); // imprime 'Juan'
// console.log(edad); // imprime 30
// console.log(ciudad); // imprime 'Bogotá'
// console.log(persona);

//let dateOfBirth = ["2000 - 10 - 10"];
//console.log("🚀 ~ dateOfBirth:", dateOfBirth);
const isOver16 = (dateOfBirth) => {
  // Ensure birthDate is a Date object
  if (!(dateOfBirth instanceof Date)) {
    dateOfBirth = new Date(dateOfBirth);
  }

  // Calculate the difference in milliseconds between now and 16 years ago
  const now = new Date();
  const sixteenYearsAgo = new Date(
    now.getFullYear() - 16,
    now.getMonth(),
    now.getDate()
  );

  // Compare birthDate with the threshold. User is over 16 if
  // their birthdate is earlier than sixteenYearsAgo
  return dateOfBirth <= sixteenYearsAgo;
};

// Example Usage:
const userBirthDate = new Date("1995-06-15"); // Replace with the actual user's birthdate

if (isOver16(userBirthDate)) {
  console.log("User is over 16 years old.");
} else {
  console.log("User is not over 16 years old.");
}
//!------------------------------------------------------------------------------------------- */


try {
  const userSave = await newUser.save();
  const PORT = process.env.PORT;
  if (userSave) {
    return res.redirect(
      303,
      `http://localhost:${PORT}/api/v1/users/register/sendMail/${userSave._id}`
    );
  }
} catch (error) {
  return res.status(404).json(error.message);
}
} else {
if (req.file) deleteImgCloudinary(catchImg);
return res.status(409).json("this user already exist");
}
} catch (error) {
if (req.file) {
deleteImgCloudinary(catchImg);
}
return next(error);
}