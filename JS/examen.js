const alumn = {
  name: "Alberto",
};

const alumnCopy = alumn;
console.log("🚀 ~ alumn:", alumn);
alumnCopy.name = "luis";
console.log("🚀 ~ alumnCopy:", alumnCopy);
console.log("🚀 ~ alumn:", alumn);

let myCountry = { name: "Spain" };
let myPlanetCopy = myCountry;
myPlanetCopy.planet = "Earth";
console.log("🚀 ~ myPlanetCopy:", myPlanetCopy);

const userSession = {
  name: "Pedro",
  token: null,
  fav: [],
};
const jsonUser = JSON.stringify(userSession);
console.log("🚀 ~ JsonUser:", jsonUser);
