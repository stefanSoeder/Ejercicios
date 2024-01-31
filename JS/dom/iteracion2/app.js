//!---------------------------------
//? Iteración #2: Modificando el DOM
//!---------------------------------

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

//**CREAMOS EL DIV*/ */
const newDiv = document.createElement("div");

//** LO INSERTAMOS EN EL INDEX HTML */

document.body.appendChild(newDiv); /*Método Appendchild

//! **Mediante Template */
// const template = <div></div>;
// document.body.innerHTML += template; //? directamente el texto
// const templateArrow = () => <div></div>;
// document.body.innerHTML += templateArrow();//? función
//? Si no pusiéramos el "+=", boraríamos lo que tiene el body (si sólo ponemos =)
//!-----------------------------------------------
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDivP = document.createElement("div");
const newP = document.createElement("p");
//**AÑADIMOS TEXTO EL P */
newP.textContent = "Esto es un párrafo dentro del div";
//* AÑADIMOS EL P, AL DIV*/
newDivP.appendChild(newP);
//* DIV al BODY*/
document.body.appendChild(newDivP);

/*Template*/
const templateP = () =>
  `<div>
      <p>Este es un segundo parrafo dentro del div</p>
    </div>`;
document.body.innerHTML += templateP();

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

//**Creamos el DIV */

const div6P = document.createElement("div");

//* Creamos un FOR*/

for (let i = 0; i < 6; i++) {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = `Este es el párrafo ${i + 1}`;

  div6P.appendChild(nuevoParrafo);
}

//**agregar el nuevo div al document*/

document.body.appendChild(div6P);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const newPdinamic = document.createElement("p");

newPdinamic.textContent = "Soy dinámico!";

document.body.appendChild(newPdinamic);

//Inner

document.body.innerHTML += `<p>Soy dinamic</p>`;

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2insertHere = document.querySelector("h2.fn-insert-here");
h2insertHere.textContent = "Wubba Lubba dub dub";

//Inner

document.querySelector("h2.fn-insert-here").innerHTML += "SWIFTIN";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const listaRedes = document.createElement("ul");
apps.forEach((app) => {
  const elementLi = document.createElement("li");
  elementLi.textContent = app;
  listaRedes.appendChild(elementLi);
});
document.body.appendChild(listaRedes);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const allRemoveMe = document.querySelectorAll(".fn-remove-me");
allRemoveMe.forEach((element) => {
  element.remove();
});

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const pAmongD = document.createElement("p");
pAmongD.textContent = "Voy en Medio";

const allDivInsertHere = document.querySelectorAll("div.fn-insert-here");
const secondDiv = allDivInsertHere[1];
document.body.insertBefore(pAmongD, secondDiv);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertDivs = document.querySelectorAll("div.fn-insert-here");
const templateNewParrafo = () => `<p>Voy dentro!</p>`;
insertDivs.forEach((div) => (div.innerHTML = templateNewParrafo()));
