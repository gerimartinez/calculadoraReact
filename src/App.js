import './App.css';
import Boton from './componentes/Boton/Boton';
import Pantalla from './componentes/Pantalla/Pantalla';
import BotonClear from './componentes/BotonClear/BotonClear';
import { useState } from 'react';
import { evaluate } from "mathjs"
import logo from "./imagenes/png-logo-removebg.png"

function App() {

  const [input, setInput] = useState("")
    
  const agregarInput = valor => {
   setInput(input + valor)
  }
  
  const total = () => {
    setInput(evaluate(input))
  }

  return (

    <div className="App">
      <div className='logoContenedor'>
         <img 
          src={logo}
          className="logo"
          alt='logo Calculadora' /> 
      </div>
      <div className='containerCalculadora'>
            <Pantalla input={input} />
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>/</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={total}>=</Boton>
          </div>
          <div className='fila'>
              <BotonClear  mClear={() => setInput("")}>
                Clear
              </BotonClear>
          </div>
      </div>
    </div>
  )
}

//hola
export default App;
