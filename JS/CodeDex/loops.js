// Duck, duck, goose! 🦆🦆🪿
let randomNumber = Math.floor(Math.random() * 10);

while (randomNumber != 7) {
  console.log("Duck 🦆");
  randomNumber = Math.floor(Math.random() * 10);
}

console.log("Goose! 🦢");

//Lucky Number 🍀

const luckyNumber = 7;
let guess = Math.floor(Math.random() * 10 + 1);
console.log("🚀 ~ guess:", guess);
while (guess != luckyNumber) {
  console.log(`Nope, it isn´t ${guess}`);
  guess = Math.floor(Math.random() * 9 + 1);
}
console.log(`My lucky number is ${guess}`);
