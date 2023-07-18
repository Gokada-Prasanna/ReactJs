import {useState, useRef, useEffect} from 'react'

import './index.css'

const Calculator = () => {
    const [result, setResult]  = useState("") 
    const inputRef = useRef(null);
  
  
    useEffect(() => inputRef.current.focus(), [result])
  
    
  
  
  const handleClick = e => {
    setResult(result.concat(e.target.name))
  }
  
  const backspace = () => {
    setResult(result.slice(0, -1))
  }
  
  const clear = () => {
    setResult("")
  }
  
  const calculate = () => {
    try{
    setResult(eval(result).toString())
  }
  catch(error){
  setResult("Error")
  }
  }
  
    return(
      <div className="calc-app">
        <form>
          <input type="text" value={result} ref={inputRef} className="calc-input"/>
          </form>
        <hr />
  
        <div className="keypad-calculator">
          <button  type="button" onClick={clear} id="clear">Clear</button>
          <button  type="button" onClick={backspace} id="backspace">C</button>
          <button name="+" type="button" onClick={handleClick}>+</button>
          <button name="7" type="button" onClick={handleClick}>7</button>
          <button name="8" type="button" onClick={handleClick}>8</button>
          <button name="9" type="button" onClick={handleClick}>9</button>
          <button name="-" type="button" onClick={handleClick}>-</button>
          <button name="4" type="button" onClick={handleClick}>4</button>
          <button name="5" type="button" onClick={handleClick}>5</button>
          <button name="6" type="button" onClick={handleClick}>6</button>
          <button name="*" type="button" onClick={handleClick}>&times;</button>
          <button name="1" type="button" onClick={handleClick}>1</button>
          <button name="2" type="button" onClick={handleClick}>2</button>
          <button name="3" type="button" onClick={handleClick}>3</button>
          <button name="/" type="button" onClick={handleClick}>/</button>
          <button name="0" type="button" onClick={handleClick}>0</button>
          <button name="." type="button" onClick={handleClick}>.</button>
          <button  type="button" onClick={calculate} id="result">Result</button>
        </div> 
  
        </div> 
    
    )
  
  }
  
  export default Calculator