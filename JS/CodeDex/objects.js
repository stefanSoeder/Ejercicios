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
