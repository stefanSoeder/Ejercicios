let year = 1990;
console.log(typeof year);
let name = "Alice";
console.log("🚀 ~ name:", typeof name);
let typeOfYear = typeof year;
console.log(typeOfYear);
console.log(typeof typeOfYear);

let a = 1 / 0;
let b = -Infinity;
console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);
let s = "is definetely not a number";
let n = s * 10;
console.log("🚀 ~ n:", n);
console.log("🚀 ~ n:", typeof n);

let path = "C:\\Windows";
console.log("🚀 ~ path:");

let portion = "abhorrent";
console.log(portion.slice(2, 8));

let str = "java script language";
console.log(str.length);
console.log(str.charAt(0));
console.log(str.slice(0, 4));
console.log(str.split(" "));

let ex1 = true;
let ex2 = 1234;
let ex3 = BigInt(200);
let ex4 = "Cisco Practice";
let ex5 = undefined;

console.log(`ex1 value is ${ex1} and its type is ${typeof ex1}`);
console.log(`ex2 value is ${ex2} and its type is ${typeof ex2}`);
console.log(`ex3 value is ${ex3} and its type is ${typeof ex3}`);
console.log(`ex4 value is ${ex4} and its type is ${typeof ex4}`);
console.log(`ex5 value is ${ex5} and its type is ${typeof ex5}`);

let origin = "1234";
let conv1 = Number(origin);
console.log("🚀 ~ conv1:", conv1);
let conv2 = BigInt(conv1);
console.log("🚀 ~ conv2:", conv2);
let conv3 = Boolean(conv2);
console.log("🚀 ~ conv3:", conv3);

let same1 = "a" + "b";
console.log("🚀 ~ same1:", typeof same1);
let same2 = 2 + 3;
console.log("🚀 ~ same2:", typeof same2);
let same3 = 100n + 200n;
console.log("🚀 ~ same3:", typeof same3);
let same4 = true + false;
console.log("🚀 ~ same4:", typeof same4);
let same5 = undefined + undefined;
console.log("🚀 ~ same5:", typeof same5);

let dif1 = "a" + 1;
console.log("🚀 ~ dif1:", dif1);

const str1 = 42 + +"1";
console.log("🚀 ~ str1:", str1);

//!-------------------------
//? 2.2.1 Complex data types
//!-------------------------

let trainTicket1 = {
  from: "Vallecas",
  to: "Chamartin",
  price: "1.75€",
};
console.log(trainTicket1.from);
console.log(trainTicket1.to);
console.log(trainTicket1.price);

let person = {};
person.name = "Stefan";
person.lastname = "Martin";
console.log(person);
console.log(person.name);
console.log(person.lastname);

let books = [
  {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460,
  },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254,
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352,
  },
];
books.push({
  title: "Learning JavaScript Design Patterns",
  author: "Addy Osmani",
  pages: 254,
});
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);

let selectedBooks = books.slice(-2);
console.log(selectedBooks);

let updatedBooks = books.shift();
console.log("🚀 ~ updatedBooks:", updatedBooks);
//console.log(updatedBooks[(0, 1, 2)].title);

let totalPages = books[0].pages + books[1].pages + books[2].pages;

console.log(books);
console.log("🚀 ~ totalPages:", totalPages);

//!----------------------
//? 2.2.5  LAB  Data Types
//!----------------------

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

contacts.push({
  name: "Maisie Haley",
  phone: "0913 531 3030",
  email: "risus.Quisque@urna.ca",
});
console.log(contacts);
console.log(contacts.length);
console.log(contacts[0]);
console.log(contacts[3]);

//!-----------------------
//? 2.3.4 SECTION PRACTICE
//!-----------------------

("use  strict");

const prefix = "username_";

//let  userName  =  "Jack";
const userName = "Adam";

//let prefixedUserName;
// const  prefixedUserName;

// userName  =  "John";
prefixedUserName = prefix + userName;

console.log(prefixedUserName);
//console.log(prefixedUserName2);
