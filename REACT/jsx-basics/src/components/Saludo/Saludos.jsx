
const ahora = new Date();
const horaActual = ahora.getHours();
console.log("🚀 ~ horaActual:", horaActual)

const Saludos = () => {
    let saludo
    if (horaActual >= 6 && horaActual <= 12) {
        saludo = "Buenos días";
      } else if (horaActual >= 13 && horaActual < 19) {
        saludo = "Buenas tardes";
      } else {
        saludo = "Buenas noches";
      }
    
      return (
        <div>
          <h1>{saludo}</h1>
        </div>
      );
    }
  
  export default Saludos;