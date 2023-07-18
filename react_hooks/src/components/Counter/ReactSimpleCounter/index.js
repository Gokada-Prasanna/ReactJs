import {useState} from 'react'
import "./index.css"

function ReactSimpleCounter(){

const [count, setCount] = useState(0)

return (
    <div className="main-container">
<h1 onClick={()=>setCount(count+1)}>This is the simple counter. That counts now {count}</h1>
<div className="buttons-container">
    <button type="button" onClick={()=>setCount(count+1)}>Add</button>
<button type="button" onClick={()=>setCount(count-1)}>Sub</button>
<button type="button" onClick={() => setCount(0)}>Reset</button>
</div>
</div>
);

}

export default ReactSimpleCounter