/*function suma(a, b) {
  return a + b;
}

let resultado = suma(3, 4);*/ //* resultado = 7*/

function calcularDeudaTotal(
  montoPorMes,
  numeroDeMeses,
  montoAdicional,
  montoPagado
) {
  // Calcular la deuda total
  const deudaTotal = montoPorMes * numeroDeMeses + montoAdicional - montoPagado;

  return deudaTotal;
}

// Ejemplo de uso
const montoPorMes = 9;
const numeroDeMeses = 17;
const montoAdicional = 110;
const montoPagado = 50;

const resultadoDeuda = calcularDeudaTotal(
  montoPorMes,
  numeroDeMeses,
  montoAdicional,
  montoPagado
);

console.log(`La deuda total es: ${resultadoDeuda}€`);
