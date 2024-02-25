import { useState } from "react"
import "./Home.css"
import { H1 } from "../components"

export const Home = () => {
  const [dismount, setDismount] = useState(false)
  return <div id="homeContainer">{!dismount && <H1/>}
  <button onClick={()=> setDismount((currentValue) => !currentValue)}
  >MONTAR O DESMONTAR</button>
  </div>
  }


