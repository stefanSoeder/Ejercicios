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
