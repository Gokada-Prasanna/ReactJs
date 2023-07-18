import {useState} from 'react'
import './index.css'

const Square = (props) => {
const [changeCount, setChangeCount] = useState(1)

return (
    <div className="square-container" style={{border:"1px solid", borderRadius:"10px"}} onClick={() => {if(changeCount <= 1){console.log(changeCount); setChangeCount(changeCount => changeCount+1); props.onClick()}}}>
        <h1>{props.value}</h1>
    </div>
)
}
export default Square