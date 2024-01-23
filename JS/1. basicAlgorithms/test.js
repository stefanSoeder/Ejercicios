const comidas = ["sandia", "paella", "lentejas", "ensalada"];

const buscadorDeComidas = (arrayDeComidas, comidaABuscar) => {
  let acc = 0;
  for (let i = 0; i < arrayDeComidas.length; i++) {
    arrayDeComidas[i].toLowerCase().trim() ===
      comidaABuscar.toLowerCase().trim() && acc++;
  }

  return acc === 0
    ? `No se enuentra la comida`
    : `La comida se encuentra con el numero de veces:${acc}`;
};
const resultadoDeBusqueda = buscadorDeComidas(comidas, "  paeLLa  ");
console.log("🚀 ~ resultadoDeBusqueda:", resultadoDeBusqueda);

const alumno = {
  name: "barbara",
  CP: 28003,
};

const buscadorCPalumno = (cp, alumnos) => {
  for (let clave in alumno) {
    if (clave == "CP") {
      return alumno[clave] === cp ? true : false;
    }
  }
};
const forInCP = buscadorCPalumno(28029, alumno);
console.log("🚀 ~ forInCP:", forInCP);
