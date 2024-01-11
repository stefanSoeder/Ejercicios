/* 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
1.2 Crea una variable llamada x, asigna el valor 50 a ella.
1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'. 
*/
//!---------------------------------------------------------------------------
//? 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
//!---------------------------------------------------------------------------

let myFavoriteHero;
myFavoriteHero = "Hulk";

//!------------------------------------------------------------
//? 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
//!------------------------------------------------------------

let x = 50;

//!-----------------------------------------------------------------------------
//? 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
//!-----------------------------------------------------------------------------

let h = 5;
let y = 10;

//!-----------------------------------------------------------------
//? 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
//!-----------------------------------------------------------------

let z = h + y;

/* 2.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};

2.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

2.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
/
2.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
*/

//!---------------------------------------------------------------------------
//? 2.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = { name: "Jack Sparrow", age: 10 };
//!---------------------------------------------------------------------------

character.age = 25;

//!---------------------------------------------------------------------------
//? 2.2 Declara 3 variables con los nombres y valores siguientes
//? firstName = "Jon";
//? lastName = "Snow";
//? age = 24;
//? Muestralos por consola de esta forma:
//?("Soy Jon Snow, tengo 24 años y me gustan los lobos.");
//!---------------------------------------------------------------------------

let firstName = "Jon";
let lastName = "Snow";
let age = 24;
let concatena =
  "Soy" +
  " " +
  firstName +
  " " +
  lastName +
  " " +
  "tengo" +
  age +
  " " +
  "y me gustan los lobos";
console.log(concatena);

//!-------------------------------------------------------------------------------
//? 2.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
//? ambos juguetes.
//? const toy1 = {name: 'Buss myYear', price: 19};
//? const toy2 = {name: 'Rallo mcKing', price: 29};
//!-------------------------------------------------------------------------------

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };
let suma = toy1.price + toy2.price;
console.log(suma);

//!--------------------------------------------------------------------------------------------
//? 2.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000
//? y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad
//? basePrice más el valor de la variable globalBasePrice.
//? let globalBasePrice = 10000;
//? const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
//? const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

//!-------------------------------------------------------------------------------------------

let globalBasePrice = 25000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 50000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };
let priceCar1 = car1.basePrice + globalBasePrice;
console.log(priceCar1);
let priceCar2 = car2.basePrice + globalBasePrice;
console.log(priceCar2);

/***Iteración #3: Operadores**

```jsx
3.1 Multiplica 10 por 5 y muestra el resultado mediante console.

3.2 Divide 10 por 2 y muestra el resultado en un console.

3.3 Muestra mediante un console el resto de dividir 15 por 9.

3.4 Usa el correcto operador de asignación que resultará en o = 15, 
teniendo dos variables p = 10 y j = 5.

3.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.+/
*/

//!--------------------------------------------------------------------------------------------

//? 3.1 Multiplica 10 por 5 y muestra el resultado mediante console.

//!-------------------------------------------------------------------------------------------

let v = 10;
v *= 5;
console.log(v);

//!--------------------------------------------------------------------------------------------

//? 3.2 Divide 10 por 2 y muestra el resultado en un console.

//!--------------------------------------------------------------------------------------------

v /= 5;
v /= 2;
console.log(v);

//!--------------------------------------------------------------------------------------------

//? 3.3 Muestra mediante un console el resto de dividir 15 por 9.

//!--------------------------------------------------------------------------------------------

v *= 3;
v /= 9;
console.log(v);

//!--------------------------------------------------------------------------------------------

//? 3.4 Usa el correcto operador de asignación que resultará en o = 15,
//? teniendo dos variables p = 10 y j = 5.

//!--------------------------------------------------------------------------------------------

p = 10;
j = 5;
o = p + j;
console.log("🚀 ~ o:", o);

//!--------------------------------------------------------------------------------------------

//? 3.5 Usa el correcto operador de asignación que resultará en i = 50,
//? teniendo dos variables c = 10 y m = 5.+/

//!--------------------------------------------------------------------------------------------

c = 10;
m = 5;
i = c * m;
console.log(i);

/******Iteración #4: Arrays**

```jsx
4.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

4.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

4.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

4.4 Añade 2 elementos al array: "Morty" y "Summer".
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

4.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

4.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; */

//!--------------------------------------------------------------------------------------------

//? 4.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
//? const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

//!--------------------------------------------------------------------------------------------

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
