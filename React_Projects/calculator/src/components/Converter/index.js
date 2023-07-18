import {useRef, useState, useEffect} from 'react'

import {BiDownArrowAlt, BiUpArrowAlt} from 'react-icons/bi'
import {TiBackspaceOutline} from 'react-icons/ti'

import ConverterButton from "../ConverterButton"
import ConversionInput from '../ConversionInput'
import './index.css'

const toAcres = [1, 0.0247105381, 2.4710538147, 2.4715381e-8, 2.29568e-5, 1.59422508e-7, 0.0002471054]
const toAres = [40.468564224, 1, 100, 1e-6, 0.0009290304, 6.4516e-6, 0.01]
const toHectares = [0.4046856422, 0.01, 1, 1e-8, 9.2903e-6, 6.45e-8, 0.0001]
const toSquareCentimeters = [40468564.224, 1000000, 100000000, 1, 929.0304, 6.4516, 10000]
const toSquarefeet = [43560, 1076.391041671, 107639.10416709, 0.001076391, 1, 0.00694444, 10.7639104167]
const toSquareInches = [6272640, 155000.31000062, 15500031.000062, 0.15500031, 144, 1, 1550.0031000062]
const toSquaremetres = [4046.8564224, 100, 1000, 0.0001, 0.09290304, 0.00064516,1]
const toMillimetres = [1, 0.1, 0.001, 0.000001, 0.0393700787, 0.0032808399, 0.0010936133, 0.0000006214, 0.00000054, 39.3700787402]
const toCentimetres = [10, 1, 0.01, 0.00001, 0.3937007874, 0.032808399, 0.010936133, 0.0000062137, 0.0000053996, 393.7007874016]
const toMetres = [1000, 100, 1, 0.001, 39.3700787402, 3.280839895, 1.0936132983, 0.0006213712, 0.0005399568, 39370.078740157]
const toKilometres = [1000000, 100000, 1000, 1, 39370.078740157, 3280.8398950131, 1093.6132983377, 0.6213711922, 0.5399568035, 39370078.740157]
const toInches = [25.4, 2.54, 0.0254, 0.0000254, 1, 0.0833333333, 0.0277777778, 0.00001577828, 0.00001377149, 1000]
const toFeet = [304.8, 30.48, 0.3048, 0.0003048, 12, 1, 0.3333333333, 0.0001893939, 0.0001645788, 12000]
const toYards = [914.4, 91.44, 0.9144, 0.0009144, 36, 3, 1, 0.0005681818, 0.0004937365, 36000]
const toMiles =[1609344, 160934.4, 1609.344, 1609344, 63360, 5280, 1760, 1, 0.8689762419, 63360000]
const toNauticamiles =[1852000, 185200, 1852, 1.852, 72913.385826771, 6076.1154855643, 2025.3718285214, 1.150779448, 1, 72913385.826771]
const toMils = [0.0254, 0.00254, 0.0000254, 0.0000000254, 0.001, 0.0000833333, 0.0000277778, 1.57828283e-8, 1.37149028e-8, 1]
const toCelsius = [1, 33.8, 274.25]
const toFahrenheit =[-17.2222222222, 1, 255.9277777778]
const toKelvin = [-272.15, -457.87, 1]
const toUKgallons = [1, 1.2009499255, 4.54609, 4546.09, 4546.09, 0.00454609, 277.4194327916, 0.1605436532]
const toUSgallons = [0.8326741846, 1, 3.785411784, 3785.411784, 3785.411784, 0.0037854118,231, 0.1336805556]
const toLitres = [0.2199692483, 0.2641720524, 1, 1000, 1000, 0.001, 61.0237440947, 0.0353146667]
const toMillilitres = [0.0002199692, 0.000264172, 0.001, 1, 1, 0.000001, 0.0610237441, 0.0000353147]
const toCubicCentimetres = [0.0002199692, 0.000264172, 0.001, 1, 1, 0.000001, 0.0610237441, 0.0000353147]
const toCubicmetres = [219.9692482991, 264.1720523581, 1000, 1000000,1000000,1, 61023.744094732, 35.3146667215]
const toCubicinches = [0.0036046501, 0.0043290043, 0.016387064, 16.387064, 16.387064, 0.0000163871, 1, 0.0005787037]
const toCubicfeet = [6.228835459, 7.4805194805, 28.316846592, 28316.846592, 28316.846592, 0.0283168466, 1728, 1]
const toTons = [1, 0.9842065276, 1.1023113109, 2204.6226218488, 35273.96194958, 1000, 1000000]
const toUKtons = [1.0160469088, 1, 1.12, 2240, 35840, 1016.0469088, 1016046.9088]
const toUStons = [0.90718474, 0.8928571429, 1, 2000, 32000, 907.18474, 907184.74]
const toPounds = [0.0004535924, 0.0004464286, 0.0005, 1, 16, 0.45359237, 453.59237]
const toOunces = [0.0000283495, 0.0000279017, 0.00003125, 0.0625, 1, 0.0283495231, 28.349523125]
const tokilogrammes = [0.001, 0.0009842065, 0.0011023113, 2.2046226218, 35.2739619496, 1, 1000]
const toGrams = [0.000001, 0.0000009842, 0.0000011023, 0.0022046226, 0.0352739619, 0.001, 1]
const toBits = [1, 0.125, 0.0001220703, 1.19209290e-7, 1.16415322e-10, 1.13686838e-13]
const toBytes = [8, 1, 0.0009765625, 0.0000009537, 0.0000000009, 9.09494702e-13]
const toKilobytes = [8192, 1024, 1, 0.0009765625, 0.0000009537, 0.0000000009]
const toMegabytes = [8388608, 1048576, 1024, 1, 0.0009765625, 0.0000009537]
const toGigabytes = [8589934592, 1073741824, 1048576, 1024, 1, 0.0009765625]
const toTerabytes = [8796093022208, 1099511627776, 1073741824, 1048576, 1024, 1]
const toMetrespersecond = [1, 3600, 0.001, 3.6, 39.3700787402, 141732.28346456, 3.280839895, 11811.023622047, 0.0006213712, 2.2369362921, 1.9438444924]
const toMetresperhour = [0.0002777778, 1, 2.77777778e-7, 0.001, 0.010936133, 39.3700787402, 0.0009113444, 3.280839895, 0.0000001726, 0.0006213712, 0.0005399568]
const toKilometrespersecond = [1000, 3600000, 1, 3600, 39370.078740157, 141732283.46456, 3280.8398950131, 11811023.622047, 0.6213711922, 2236.9362920544, 1943.8444924406]
const toKilometresperhour = [0.2777777778, 1000, 0.0002777778, 1, 10.9361329834, 39370.078740157, 0.9113444153, 3280.8398950131, 0.0001726031, 0.6213711922, 0.5399568035]
const toInchespersecond = [0.0254, 91.44, 0.0000254, 0.09144, 1, 3600, 0.0833333333, 300, 0.0000157828, 0.0568181818, 0.0493736501]
const toInchesperhour = [0.0000070556, 0.0254, 0.0000000071,0.0000254, 0.0002777778, 1, 0.0000231481, 0.0833333333, 0.0000000044, 0.0000157828, 0.0000137149]
const toFeetpersecond = [0.3048, 1097.28, 0.0003048, 1.09728, 12, 43200, 1, 3600, 0.0001893939, 0.6818181818, 0.5924838013]
const toFeetperhour = [0.0000846667, 0.3048, 0.0000000847, 0.0003048, 0.0033333333, 12, 0.0002777778, 1, 0.0000000526, 0.0001893939, 0.0001645788]
const toMilespersecond = [1609.344, 5793638.4, 1.609344, 5793.6384, 63360, 228096000, 5280, 19008000, 1, 3600, 3128.3144708423]
const toMilesperhour = [0.44704, 1609.344, 0.00044704, 1.609344, 17.6, 63360, 1.4666666667, 5280, 0.0002777778, 1, 0.8689762419]
const toKnots = [0.5144444444, 1852, 0.0005144444, 1.852, 20.2537182852, 72913.385826771, 1.6878098571, 6076.1154855643, 0.000319661, 1.150779448, 1]
const toMilliseconds = [1, 0.001, 0.0000166666, 2.77777778e-7, 1.15740741e-8, 1.65343915e-9]
const toSeconds = [1000, 1, 0.0166666667, 0.0002777778, 0.000011574, 0.0000016534]
const toMinutes = [60000, 60, 1, 0.0166666667, 0.0006944444, 0.0000992063]
const toHours = [3600000, 3600, 60, 1, 0.0416666667, 0.005952381]
const toDays = [86400000, 86400, 1440, 24, 1, 0.1428571429]
const toWeeks = [604800000, 604800, 10080, 168, 7, 1]


const converterTabGroupEntries = [
    {
        id:"AREA",
        name:"Area",
        optionsList:["Acres", "Ares", "Hectares", "Square Centimeters", "Square feet", "Square Inches", "Square metres"],
        shortFormList:["ac", "a", "ha", "c^2", "ft^2", "in^2", "m^2"],
        values:[toAcres, toAres, toHectares, toSquareCentimeters, toSquarefeet, toSquareInches, toSquaremetres]
    },
    {
        id:"LENGTH",
        name:"Length",
        optionsList:["Millimetres", "Centimetres", "Metres", "Kilometres", "Inches", "Feet", "Yards", "Miles", "Nautica miles", "Mils"],
        shortFormList:["mm", "cm", "m", "km", "in",  "ft", "yd", "mi", "NM", "mil"],
        values:[toMillimetres, toCentimetres, toMetres, toKilometres, toInches, toFeet, toYards, toMiles, toNauticamiles, toMils]
    },
    {
        id:"TEMPERATURE",
        name:"Temperature",
        optionsList:["Celsius", "Fahrenheit", "Kelvin"],
        shortFormList:["C", "F", "K"],
        values:[toCelsius, toFahrenheit, toKelvin]
    },
    {
        id:"VOLUME",
        name:"Volume",
        optionsList:["UK gallons", "US gallons", "Litres", "Millilitres", "Cubic Centimetres", "Cubic metres", "Cubic inches", "Cubic feet"],
        shortFormList:["UKgal", "USgal", "l", "ml", "cc", "m^3","in^3", "ft^3"],
        values:[toUKgallons, toUSgallons, toLitres, toMillilitres, toCubicCentimetres, toCubicmetres, toCubicinches, toCubicfeet]
    },
    {
        id:"MASS",
        name:"Mass",
        optionsList:["Tons", "UK tons", "US tons", "Pounds", "Ounces","Killogrammes", "Grams"],
        shortFormList:["t", "UKt","USt","lb", "oz", "kg", "g"],
        values:[toTons, toUKtons, toUStons, toPounds, toOunces, tokilogrammes, toGrams]
    },
    {
        id:"DATA",
        name:"Data",
        optionsList:["Bits", "Bytes", "Kilobytes", "Megabytes", "Gigabytes", "Terabytes"],
        shortFormList:["bit", "B", "KB", "MB", "GB", "TB"],
        values:[toBits, toBytes, toKilobytes, toMegabytes, toGigabytes, toTerabytes]
    },
    {
        id:"SPEED",
        name:"Speed",
        optionsList:["Metres per second", "Metres per hour", "Kilometres per second", "Kilometres per hour", "Inches per second", "Inches per hour", "Feet per second", "Feet per hour", "Miles per second", "Miles per hour", "Knots"],
        shortFormList:["m/s", "m/h", "km/s", "km/h", "in/s", "in/h", "ft/s", "ft/h", "mi/s", "mi/h", "kn"],
        values:[toMetrespersecond, toMetresperhour, toKilometrespersecond, toKilometresperhour, toInchespersecond, toInchesperhour, toFeetpersecond, toFeetperhour, toMilespersecond, toMilesperhour, toKnots]
    },
    {
        id:"TIME",
        name:"Time",
        optionsList:["Milliseconds", "Seconds", "Minutes", "Hours", "Days", "Weeks"],
        shortFormList:["ms", "s", "min", "h", "d", "wk"],
        values : [toMilliseconds, toSeconds, toMinutes, toHours, toDays, toWeeks]
    }
]


const Converter = () => {
const [activeTab, setActiveTab] = useState(converterTabGroupEntries[0].id)
const [inputFocus, setInputFocus] = useState(false)
const [outputFocus, setOutputFocus] = useState(false)
const [outputValue, setOutputValue] = useState("")
const [inputValue, setInputValue] = useState("")
const activeTabOptionsList = converterTabGroupEntries.filter(item => item.id === activeTab)[0].optionsList
const shortFormList = converterTabGroupEntries.filter(item => item.id === activeTab)[0].shortFormList
const activeTabValues = converterTabGroupEntries.filter(item => item.id === activeTab)[0].values
// let inputSelect = activeTabOptionsList[0]
// let outputSelect = activeTabOptionsList[0]
const [inputSelect, setInputSelect] = useState(activeTabOptionsList[0])
const [outputSelect, setOutputSelect] = useState(activeTabOptionsList[0])


const changeInputFocus = () => {
    setInputFocus(true)
    setOutputFocus(false)
}

const changeOutputFocus = () => {
    setOutputFocus(true)
    setInputFocus(false)
}

const handleTabSelection = id => {
    setActiveTab(id)
    setInputSelect(converterTabGroupEntries.filter(item => item.id === id)[0].optionsList[0])
    setOutputSelect(converterTabGroupEntries.filter(item => item.id === id)[0].optionsList[0])
}
const handleInputSelectChange = value => {
    setInputSelect(value)
}

const handleOutputSelectChange = value => {
    setOutputSelect(value)
}
const evalFunction = () => {
    if(inputFocus){
            let inputIndex = activeTabOptionsList.indexOf(inputSelect)
                    let outputIndex = activeTabOptionsList.indexOf(outputSelect)
                    setOutputValue(activeTabValues[outputIndex][inputIndex]*inputValue)
}
if(outputFocus){
            let inputIndex = activeTabOptionsList.indexOf(outputSelect)
                    let outputIndex = activeTabOptionsList.indexOf(inputSelect)
                    setInputValue(activeTabValues[outputIndex][inputIndex]*outputValue)
}
}

const handleInputValueChange = value => {
    setInputValue(inputValue.concat(value))
}

const handleOutputValueChange = value => {
    setOutputValue(outputValue.concat(value))
}




const handleBackspace =  () => {
    if(inputFocus){
        setInputValue(inputValue.toString().slice(0, -1).toString())
    }
    if(outputFocus){
        setOutputValue(outputValue.toString().slice(0,-1).toString())
    }
}

const handleClear = () => {
    if(inputFocus){
        setInputValue("")
    }
    if(outputFocus){
        setOutputValue("")
    }
}




    return (
        <div className="converter-container">
        {/* <div className="section1">
        <p>&lt;</p>
        <p>Unit converter</p>
        </div> */}
        <ul className="converterTabGroup">
            {converterTabGroupEntries.map(tab => <ConverterButton itemDetails={tab}  className="converterButton" onClick={handleTabSelection} />)}
        </ul>
        <hr />
        <ConversionInput  inputValue={inputValue} outputValue={outputValue} 
        optionsList={activeTabOptionsList} 
        shortFormList={shortFormList} 
        onChangeInputValue={handleInputValueChange} 
        onChangeOutputValue={handleOutputValueChange} 
        onChangeInputSelect={handleInputSelectChange} 
        onChangeOutputSelect={handleOutputSelectChange} 
        onChangeInputFocus={changeInputFocus} 
        onChangeOutputFocus={changeOutputFocus}
        evalFunction={evalFunction}
        />
        <hr />
        <div className="converter-keypad">
            <button onClick={(e) => {inputFocus? handleInputValueChange(e.target.innerText) : handleOutputValueChange(e.target.innerText)}} type="button" className="con-button">7</button>
            <button onClick={(e) => {inputFocus? handleInputValueChange(e.target.innerText) : handleOutputValueChange(e.target.innerText)}} type="button" className="con-button">8</button>
            <button onClick={(e) => {inputFocus? handleInputValueChange(e.target.innerText) : handleOutputValueChange(e.target.innerText)}} type="button" className="con-button">9</button>
            <button  type="button" className="con-button" onClick={() => handleBackspace()}><TiBackspaceOutline className="backspace-icon"/></button>
            <button onClick={(e) => {inputFocus? handleInputValueChange(e.target.innerText) : handleOutputValueChange(e.target.innerText)}} type="button" className="con-button">4</button>
            <button onClick={(e) => {inputFocus? handleInputValueChange(e.target.innerText) : handleOutputValueChange(e.target.innerText)}} type="button" className="con-button">5</button>
            <button onClick={(e) => {inputFocus? handleInputValueChange(e.target.innerText) : handleOutputValueChange(e.target.innerText)}} type="button" className="con-button">6</button>
            <button onClick={() => handleClear()} type="button" className="con-button">C</button>
            <button onClick={(e) => {inputFocus? handleInputValueChange(e.target.innerText) : handleOutputValueChange(e.target.innerText)}} type="button" className="con-button">1</button>
            <button onClick={(e) => {inputFocus? handleInputValueChange(e.target.innerText) : handleOutputValueChange(e.target.innerText)}} type="button" className="con-button">2</button>
            <button onClick={(e) => {inputFocus? handleInputValueChange(e.target.innerText) : handleOutputValueChange(e.target.innerText)}} type="button" className="con-button">3</button>
            <button type="button" className="con-button" onClick={() => {setOutputFocus(false); setInputFocus(true)}}><BiUpArrowAlt /></button>
            <button type="button" className="con-button">+/-</button>
            <button onClick={(e) => {inputFocus? handleInputValueChange(e.target.innerText) : handleOutputValueChange(e.target.innerText)}} type="button" className="con-button">0</button>
            <button onClick={(e) => {inputFocus? handleInputValueChange(e.target.innerText) : handleOutputValueChange(e.target.innerText)}} type="button" className="con-button">.</button>
            <button type="button" className="con-button" onClick={() => {setInputFocus(false); setOutputFocus(true)}}><BiDownArrowAlt /></button>
        </div>
        </div>
    )
}

export default Converter