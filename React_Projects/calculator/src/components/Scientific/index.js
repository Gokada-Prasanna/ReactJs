import {useState, useRef, useEffect} from 'react'

import './index.css'

const Calculator = () => {
    const [result, setResult]  = useState("") 
    const inputRef = useRef(null);
  
  
    useEffect(() => inputRef.current.focus(), [result])
  
    
  
const handleFunction = (value) => {
  switch(value){
    case "sin":
      setResult((Math.sin(Number(result)*(Math.PI/180))).toString());
      break;
    case "cos":
      setResult((Math.cos(Number(result)*(Math.PI/180)).toFixed(10)).toString())
      break;
    case "tan":
      setResult((Math.sin(eval(result)*Math.PI/180).toFixed(10)/Math.cos(eval(result)*Math.PI/180).toFixed(10)).toString())
      break;    
    case "pi":
      if(result.length === 0){
        setResult((3.1459265359).toString())
      }
      else{
        setResult((result*3.1459265359).toString())
      }
      break;
    case "log":
      setResult((Math.log10(eval(result))).toString())
      break;
    case "root":
      setResult((Math.sqrt(eval(result), 2)).toString())
      break;
    case "e":
      if(result.length===0){
        setResult((2.71828182846).toString())
      }
      else{
        setResult((eval(result)*2.71828182846).toString())
      }
      break;
    case "x!":
      setResult([...Array(eval(result))].map((item, index) => item=index+1).reduce((a,b) => a*b,1).toString())
      break;

    case "CE":
      setResult(((result).toString().slice(0, -1)).toString())
      break;

    case "AC":
      setResult("")
      break;

    case "x^y":
      // result.toString().length === 0 ? setResult("Invalid") : setResult(result.toString().concat("^"))
      setResult(result.toString().concat("^"))
      break;

      case "%":
          setResult(result.concat("%100"))
        break;
      
      default:
        break;
  }
}

  
  const handleClick = e => {
/[^0-9]/.test(e.target.name) ? /[^0-9]/.test(result[result.length-1]) ? setResult(result) : setResult(result.toString().concat(e.target.name)) : 
(typeof(result) === "number" ? setResult(e.target.name) : 
((result === "0" && /[0-9]/.test(e.target.name) ? 
setResult(e.target.name) : setResult(result.toString().concat(e.target.name)))))
  }
  

  
  const calculate = () => {
    try{
      if(result.indexOf("^")!==-1){

        let beforeVal = (eval(result.slice(0,result.indexOf("^"))))
        let afterVal  = result.slice(result.indexOf("^")+1)
      
        if(afterVal[afterVal.length-1]%2 === 0){
            if(beforeVal>0){
            setResult(Math.pow(beforeVal, eval(afterVal)))
        }
        else{
            setResult("Invalid")
        }
        }
        
        else{
          if(beforeVal<0){
        setResult(-(Math.pow(-beforeVal, eval(afterVal))).toFixed(1))
      }else{
        setResult(Math.pow(beforeVal, eval(afterVal)).toFixed(1))
      }
        }

      
      // setResult(eval(result.replace("^", "**")))
    }
    else if(result.indexOf("%")!==-1){
    let beforeVal = eval(result.slice(0, result.indexOf("%")))
    let afterVal = (result.slice(result.indexOf("%")+1))
    setResult(eval(beforeVal*afterVal))
  }
  else{
    setResult(eval(result).toString())
  }
  }
  catch(error){
  setResult("Error")
  }
  }
  
    return(
      <div className="calc-app">
        <form>
          <input type="text" className="scien-input" value={result} ref={inputRef}/>
          </form>
      
        <hr />
  
        <div className="keypad">
          <button type="button" onClick={(e) => handleFunction(e.target.innerText)} className="backspace">CE</button>
          <button name="x!" type="button" onClick={(e) => handleFunction(e.target.innerText)}>x!</button>
          <button name="(" type="button" onClick={handleClick}>(</button>
          <button name=")" type="button" onClick={handleClick}>)</button>
          <button name="%" type="button" onClick={(e) => handleFunction(e.target.innerText)}>%</button>
          <button type="button" onClick={(e) => handleFunction(e.target.innerText)} className="clear">AC</button>
          <button name="sin(" type="button" onClick={(e) => handleFunction(e.target.innerText)}>sin</button>
          <button name="pi" type="button" onClick={(e) => handleFunction(e.target.name)}>&prod;</button>
          <button name="7" type="button" onClick={handleClick}>7</button>
          <button name="8" type="button" onClick={handleClick}>8</button>
          <button name="9" type="button" onClick={handleClick}>9</button>
          <button name="/" type="button" onClick={handleClick}>/</button>
          <button name="cos(" type="button" onClick={(e) => handleFunction(e.target.innerText)}>cos</button>
          <button name="log" type="button" onClick={(e) => handleFunction(e.target.innerText)}>log</button>
          <button name="4" type="button" onClick={handleClick}>4</button>
          <button name="5" type="button" onClick={handleClick}>5</button>
          <button name="6" type="button" onClick={handleClick}>6</button>
          <button name="*" type="button" onClick={handleClick}>&times;</button>
          <button name="tan" type="button" onClick={(e) => handleFunction(e.target.innerText)}>tan</button>
          <button name="root" type="button" onClick={(e) => handleFunction(e.target.name)}>&radic;</button>
          <button name="1" type="button" onClick={handleClick}>1</button>
          <button name="2" type="button" onClick={handleClick}>2</button>
          <button name="3" type="button" onClick={handleClick}>3</button>
          <button name="-" type="button" onClick={handleClick}>-</button>
          <button name="e" type="button" onClick={(e) => handleFunction(e.target.innerText)}>e</button>
          <button name="x^y" type="button" onClick={(e) => handleFunction(e.target.name)}>x<sup>y</sup></button>
          <button name="0" type="button" onClick={handleClick}>0</button>
          <button name="." type="button" onClick={handleClick}>.</button>
          <button  type="button" onClick={calculate} className="result">Result</button>
          <button name="+" type="button" onClick={handleClick}>+</button>
        </div> 
  
        </div> 
    
    )
  
  }
  
  export default Calculator