import {useState} from 'react'

function ToggleButton() {
const [buttonStatus, changeButtonStatus] = useState(true)


    return (
<button onClick={()=>changeButtonStatus(!buttonStatus)}>{buttonStatus ? "ON" : "OFF"}</button>
    );
}

export default ToggleButton