import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Image2 } from './components/Image2/Image2'
import Title from './components/Title/Title'
import SubTitle from './components/SubTitle/SubTitle'
import Paragraph from './components/Paragraph/Paragraph'
import H1 from './components/H1/H1'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
  const [count, setCount] = useState(0)
  console.log(count)
  const imageProps = {
    src:"https://res.cloudinary.com/dhu1it9x8/image/upload/v1706558125/libros-de-texto_nuzhc0.png",
    alt:"Libros",
    className:"logo"}
  
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <H1>Soy el Children</H1>
      <Header><Title textH1={"Child  Title"} /></Header>
      <Main><SubTitle textH2={"Child Subtitle"}/><Paragraph textP={"Child Paragraph"}/></Main>
      <Footer><Image2 {...{imageProps}}/></Footer>

      <div className="card">
        <Button funcionSeteadora={setCount} valorDelEstado={count}/>
          <>
          <Title textH1="H1 por PROPS"/>
          <SubTitle textH2="H2 por PROPS"/>
          </>
          <>
          <Image2 {...{imageProps}}/>
          <>
          <Paragraph textP="Párrafo por PROPS"/>
          </>
          </>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
