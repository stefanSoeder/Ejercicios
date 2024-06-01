let leftYuan = 560;
let leftYen = 2455;
let leftWon = 3280;

const currencyConverter = (a, b, c) => a * 0.14 + b * 0.0063 + c * 0.00072;

const financeState = currencyConverter(leftYuan, leftYen, leftWon);

console.log(`What do you have left in yuan? ${leftYuan}`);
console.log(`What do you have left in yen? ${leftYen}`);
console.log(`What do you have left in won? ${leftWon}`);
console.log(financeState);
