// CarFinder 🚗

const car = {
  model: "Tesla",
  year: 2020,
  color: "red",
  used: true,
};

const carPrompt = (object) => {
  if ((object.used = true)) {
    console.log(
      `I´m looking for a ${object.year} ${object.model} that is used`
    );
  } else {
    console.log(`I´m looking for a ${object.year} ${object.model} that is new`);
  }
};

const carSearch = carPrompt(car);

// Pokemon 🧸

pokemon = {
  name: "Pikachu",
  type: "Electric ⚡️",
  level: 25,
};

pokemon.isCaught = false;
console.log("🚀 ~ pokemon:", pokemon);
pokemon.name = "Demo";
console.log("🚀 ~ pokemon:", pokemon);
console.log(pokemon.values());

// Farm 🧑‍🌾

const cerdo = {
  name: "Bacon",
  type: "Pig",
  age: 2,
  makesound: function () {
    console.log(
      `${cerdo.name}is a ${cerdo.age} years old ${cerdo.type} that goes oink!`
    );
  },
};
console.log(cerdo.makesound);
