const myNYCDestinations = [
  "🗽 Manhattan - Washington Square Park",
  "🏟️ The Bronx - Yankee Stadium",
  "🎡 Brooklyn - Coney Island",
  "✈️ Queens - Astoria Park",
  "🌉 Staten Island - Historic Richmond Town",
];

console.log(myNYCDestinations);

// Grocery Trip 🛒

let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];
groceryList.splice(2, 1, "🧈 Butter");
console.log("🚀 ~ groceryList:", groceryList);

// Times Tables ❌

let tablaDel = Math.floor(Math.random() * 10 + 1);
let multiplicador = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const timesTable = (a, b) => {
  let score = [];
  for (let i = 0; i < b.length; i++) {
    score.push(b[i] * a);
  }
  return score;
};

const tabla = timesTable(tablaDel, multiplicador);
console.log("🚀 ~ multiplicador:", multiplicador);
console.log("🚀 ~ tablaDel:", tablaDel);
console.log("🚀 ~ tabla:", tabla);

// Music Playlist 🎶

const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping",
];

const shiftedMusic = musicPlaylist.shift();
console.log("🚀 ~ poppedMusic:", shiftedMusic);
const poppedMusic = musicPlaylist.pop();
console.log("🚀 ~ shiftedMusic:", poppedMusic);
console.log(musicPlaylist);

// Waldo 🔎
const nameToSearch = "Waldo";
const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof",
];

const waldoFinder = (a, b) => {
  let isHeHere = " ";
  if (b.includes(a) == true) {
    isHeHere = `Found Waldo at index ${b.indexOf(a)}`;
  } else {
    isHeHere = "Not found";
  }
  return isHeHere;
};
const whereIsWaldo = waldoFinder(nameToSearch, characters);
console.log("🚀 ~ whereIsWaldo:", whereIsWaldo);

// DNA 🧬

const dnaPieces = ["A", "C", "G", "T"];

//let randomPiece = dnaPieces[Math.floor(Math.random() * 3 + 1)];

const secuenceConstructor = (array) => {
  let randomSecuence = "";
  for (let i = 0; i < 3; i++) {
    randomSecuence += array[Math.floor(Math.random() * 3 + 1)];
  }
  return randomSecuence;
};
const randomSecuences = secuenceConstructor(dnaPieces);
console.log("🚀 ~ randomSecuences:", randomSecuences);

const myDna = (array) => {
  let completeDna = [];
  for (let i = 0; i < 24; i++) {
    completeDna.push(secuenceConstructor(array));
  }
  return completeDna;
};
const myCompleteDna = myDna(dnaPieces);
console.log("🚀 ~ myCompleteDna:", myCompleteDna);
