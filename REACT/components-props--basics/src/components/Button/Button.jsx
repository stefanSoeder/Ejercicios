
const Button = ({funcionSeteadora, valorDelEstado}) => {
  return <button onClick={()=>funcionSeteadora((valorActual)=>valorActual+1)}>Count is{valorDelEstado}</button> 
}

export default Button
