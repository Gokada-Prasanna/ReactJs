import React , {useState} from 'react'

function Practice() {
const [list, setList] = useState(['Satya', 'Sai', 'Satish'])
const [name, setName] = useState()

return(
    <>
    <ul>
        {list.map(item => 
            <li key={item}>{item}</li>)}
    </ul>
    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
    <button type="button" onClick={()=>{setList([...list, name]); setName("")}}>Add</button>
    </>
)
}
export default Practice