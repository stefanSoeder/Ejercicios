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

// Punishment 🧑‍🏫´

let sentence = "I Must Not Tell Lies";
const sentenceRepeater = (sentence) => {
  let result = " ";
  for (let i = 1; i <= 100; i++) {
    result += `${sentence} times ${i}\n`;
  }
  return result;
};

const Punishment = sentenceRepeater(sentence);
console.log("🚀 ~ Punishment:", Punishment);

// 21. Even The Odds

for (let i = 1; i <= 50; i++)
  if (i % 2 !== 0) {
    continue;
  } else if (i > 42) {
    break;
  } else {
    console.log(i);
  }
