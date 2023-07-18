const Keypad = (props) => {
    const {handleClick} = props 

return(
    <div className="keypad">
        <div className="row">
            <button type="button" className="functional-key button" onClick={() => handleClick("C")}>C</button>
            <button type="button" className="functional-key button" onClick={() => handleClick("()")}>()</button>
            <button type="button" className="operator button" onClick={() => handleClick("%")}>%</button>
            <button type="button" className="button operator" onClick={() => handleClick("/")}>/</button>
        </div>
        <div className="row">
        <button type="button" className="digit button" onClick={() => handleClick("7")}>7</button>
            <button type="button" className="digit button" onClick={() => handleClick("8")}>8</button>
            <button type="button" className="digit button" onClick={() => handleClick("9")}>9</button>
            <button type="button" className="button operator" onClick={() => handleClick("*")}>*</button>
        </div>
        <div className="row">
        <button type="button" className="digit button" onClick={() => handleClick("4")}>4</button>
            <button type="button" className="digit button" onClick={() => handleClick("5")}>5</button>
            <button type="button" className="digit button" onClick={() => handleClick("6")}>6</button>
            <button type="button" className="button operator" onClick={() => handleClick("-")}>-</button>
        </div>
        <div className="row">
        <button type="button" className="digit button" onClick={() => handleClick("1")}>1</button>
            <button type="button" className="digit button" onClick={() => handleClick("2")}>2</button>
            <button type="button" className="digit button" onClick={() => handleClick("3")}>3</button>
            <button type="button" className="button operator" onClick={() => handleClick("+")}>+</button>
        </div>
        <div className="row">
        <button type="button" className="functional-key button" onClick={() => handleClick("+/-")}>+/-</button>
            <button type="button" className="digit button" onClick={() => handleClick("0")}>0</button>
            <button type="button" className="functional-key button" onClick={() => handleClick(".")}>.</button>
            <button type="button" className="button operator" onClick={() => handleClick("=")}>=</button>
        </div>
    </div>
)
}

export default Keypad