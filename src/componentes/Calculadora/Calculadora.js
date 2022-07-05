import React from "react"
import { useState } from "react"

const Calculadora = () => {
    const [input, setInput] = useState("")
    
    const agregarInput = val =>  {
        setInput(input + val)
    }
    
} 
export default Calculadora