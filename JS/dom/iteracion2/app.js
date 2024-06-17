//!---------------------------------
//? Iteración #2: Modificando el DOM
//!---------------------------------

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const addEmptyDiv = document.createElement("div");
document.body.appendChild(addEmptyDiv);
document.body.innerHTML += "<div></div>";

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const addDivWithP = document.createElement("div");
const addP = document.createElement("p");
document.body.appendChild(addEmptyDiv);
addP.textContent = "Este es un P dentro de un DIV";
addDivWithP.appendChild(addP);
document.body.appendChild(addDivWithP);
const pContent = "Pruebando tamplate string";
const template = () => "<div><p>Esta es una P creaDA POR TEMPLATE</p></div>";

document.body.innerHTML += template();

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const addPLoopDiv = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const loopedP = document.createElement("p");
  loopedP.textContent = `Párrafo ${i + 1}`;
  addPLoopDiv.appendChild(loopedP);
}
document.body.appendChild(addPLoopDiv);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const dynamicP = document.createElement("p");
dynamicP.textContent = "Soy dinámico!";
document.body.appendChild(dynamicP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const newText = document.querySelector("h2.fn-insert-here");
newText.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const newUl = document.createElement("ul");

apps.forEach((element) => {
  const loopedElement = document.createElement("li");
  loopedElement.textContent = element;
  newUl.appendChild(loopedElement);
});
document.body.appendChild(newUl);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const nodesToDelete = document.querySelectorAll(".fn-remove-me");
nodesToDelete.forEach((element) => {
  element.remove();
});

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const middleP = document.createElement("p");
middleP.textContent = "Voy en medio";
const allInsertDiv = document.querySelectorAll("div.fn-insert-here");
const secondDiv = allInsertDiv[1];
document.body.insertBefore(middleP, secondDiv);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const allHere = document.querySelectorAll("div.fn-insert-here");
console.log("🚀 ~ allHere:", allHere);
const dentroTemplate = () => "<div>Voy dentro!</div>";
allHere.forEach((element) => {
  element.innerHTML = dentroTemplate();
});
