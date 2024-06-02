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
  } else if (luck == 3) {
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
  return answer;
};
const fate = eightBall(magic8);

console.log(`For the question, ${question} the answer is ${fate}`);

//Air quality Index🌬️
/*In summer 2023, the smoke from wildfires in Canada raised concerns about the Air Quality Index (AQI) in one's area.

Create an air-quality-index.js program.

Google the AQI in your area and define an aqi variable with that number.

Write an if/else if/else statement with the following logic:

If aqi is between 0 and 50, print “Good”.
Else if aqi is between 51 and 100, print "Moderate".
Else if aqi is between 101 and 150, print "Unhealthy (Sensitive Groups)".
Else if aqi is between 151 and 200, print "Unhealthy".
Else if aqi is between 201 and 300, print “Very Unhealthy”.
Else, print “Hazardous”.*/

let aqi = 117;
let aqiLevel = "";
const aqiLevelCalculator = (number) => {
  if (number <= 50) {
    aqiLevel = "Good";
  } else if (number > 50 && number <= 100) {
    aqiLevel = "Moderate";
  } else if (number > 100 && number <= 150) {
    aqiLevel = "Unhealthy (Sensitive Groups)";
  } else if (number > 150 && number <= 200) {
    aqiLevel = "Unhealthy";
  } else if (number > 200 && number <= 300) {
    aqiLevel = "Very Unhealthy";
  } else {
    aqiLevel = "Hazardous";
  }
  return aqiLevel;
};
const dubaiAqi = aqiLevelCalculator(aqi);
console.log(`The aqi level of Dubai is ${dubaiAqi}`);

// Rock (1), scissors(2) || Paper(3) 🪨✂️🗞️

let player = Math.floor(Math.random() * 3 + 1);
console.log("🚀 ~ player:", player);
let computer = Math.floor(Math.random() * 3 + 1);
console.log("🚀 ~ computer:", computer);

const symbolAssigner = (number) => {
  assignedSymbol = "";
  {
    if (number == 1) {
      assignedSymbol = "🪨";
    } else if (number == 2) {
      assignedSymbol = "✂️";
    } else {
      assignedSymbol = "🗞️";
    }
    return assignedSymbol;
  }
};
const playerSymbol = symbolAssigner(player);
console.log("🚀 ~ playerSymbol:", playerSymbol);
const computerSymbol = symbolAssigner(computer);
console.log("🚀 ~ computerSymbol:", computerSymbol);

const rockPaperScissors = (a, b) => {
  let result = " ";
  if (a == b) {
    result = "It´s a tie!";
  } else if (a == 1 && b !== 3) {
    result = "Player wins!";
  } else if (a == 2 && b !== 1) {
    result = "Player wins!";
  } else if (a == 3 && b !== 1) {
    result = "Player Wins!";
  } else {
    result = "Computer wins!";
  }
  return result;
};

const rockPaperScissorsGame = rockPaperScissors(player, computer);
console.log("🚀 ~ rockPaperScissorsGame:", rockPaperScissorsGame);
console.log(
  `Player draw ${playerSymbol}  and Computer got ${computerSymbol} , therefore... ${rockPaperScissorsGame}`
);
