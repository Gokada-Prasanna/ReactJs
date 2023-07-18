import './index.css'

const ConversionInput = props =>{
const {optionsList, shortFormList, result, onChangeInputValue, inputValue, outputValue, onChangeOutputValue, onChangeInputSelect, onChangeOutputSelect, onChangeInputFocus, onChangeOutputFocus, evalFunction} = props


return (
    <div className="converter-input-container">
    <div className="input-container">
        <select name="input" id="input" onChange={(e) => onChangeInputSelect(e.target.value)} onClick={() =>  evalFunction()}>
            {optionsList.map((item, index) => <option value={item}>{item} ({shortFormList[index]})</option>)}
        </select>
        <input type="text" value={inputValue} className="inputBox" onClick={() => onChangeInputFocus()}/>
    </div>
    <div className="output-container">
        <select name="output" id="output" onChange={(e) => onChangeOutputSelect(e.target.value)} onClick={() => evalFunction()}>
            {optionsList.map((item, index) => <option value={item}>{item} ({shortFormList[index]})</option>)}
        </select>
        <input type="text" value={outputValue} className="inputBox" onClick={() => onChangeOutputFocus()}/>
    </div>
    </div>
)
}

export default ConversionInput