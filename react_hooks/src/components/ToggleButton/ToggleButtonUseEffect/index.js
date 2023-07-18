import {useState, useEffect} from 'react'

function ToggleButton() {
const [buttonStatus, changeButtonStatus] = useState(true)
const [buttonText, changeButtonText] = useState("ON")

useEffect(() => {
    buttonStatus ? changeButtonText("ON") : changeButtonText("OFF")
}, [buttonStatus])


    return (
<button onClick={()=>changeButtonStatus(!buttonStatus)}>{buttonText}</button>
    );
}

export default ToggleButton