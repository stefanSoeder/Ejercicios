// Temperature Conversor 🌡️
let brooklynCurrent = 63;
let celsius = (brooklynCurrent - 32) / 1.8;
console.log(celsius);
const celsiusConverter = (number) => (number - 32) / 1.8;
const currentCelsius = celsiusConverter(brooklynCurrent);
console.log(currentCelsius);

// Write code below 💖
let mass = 85;
let height = 1.75;
const bmiCalculator = (a, b) => a / b ** 2;
const bmiIndex = bmiCalculator(mass, height);
console.log(bmiIndex);

// Currency Conversor 💱

let leftYuan = 560;
let leftYen = 2455;
let leftWon = 3280;

const currencyConverter = (a, b, c) => a * 0.14 + b * 0.0063 + c * 0.00072;

const financeState = currencyConverter(leftYuan, leftYen, leftWon);

console.log(`What do you have left in yuan? ${leftYuan}`);
console.log(`What do you have left in yen? ${leftYen}`);
console.log(`What do you have left in won? ${leftWon}`);
console.log(financeState);

// Greeter ⏰

let hour = 10;
const greeter = (number) => {
  if (number < 12) {
    console.log(`Good morning! its ${hour} o´clock!`);
  }
};
const amPm = greeter(hour);

// Greeter elsePM ⏰

let hour2 = 16;
const greeter2 = (number) => {
  if (number < 12) {
    console.log(`Good morning! its ${hour2} o´clock!`);
  } else {
    console.log(`Good afternoon! its ${hour2} o´clock!`);
  }
};
const amPm2 = greeter2(hour2);

// pH Indicator 💖

let ph = 7;
const phIndicator = (number) => {
  if (number > 7) {
    console.log("Basic");
  } else if (number < 7) {
    console.log("Acidic");
  } else {
    console.log("Neutral");
  }
};
const phIndex = phIndicator(ph);

// Magic Ball 🎱

let question = "Am I a good coder?";
let answer = " ";
let magic8 = Math.floor(Math.random() * 9);
console.log("🚀 ~ magic8:", magic8);
const eightBall = (luck) => {
  if (luck == 0) {
    answer = "Yes - definitely.";
  } else if (luck == 1) {
    answer = "It is decidedly so.";
  } else if (luck == 2) {
    answer = "Without a doubt.";
  } else if (answer == 3) {
    luck = "Reply hazy, try again.";
  } else if (luck == 4) {
    answer = "Ask again later.";
  } else if (luck == 5) {
    answer = "Better not tell you now.";
  } else if (luck == 6) {
    answer = "My sources say no.";
  } else if (luck == 7) {
    answer = "Outlook not so good.";
  } else if (luck == 8) {
    answer = "Very doubtful";
  }
};
const fate = eightBall(magic8);

console.log(`For the question, ${question} the answer is ${answer}`);
