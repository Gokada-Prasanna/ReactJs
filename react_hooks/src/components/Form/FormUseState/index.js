import React, {useState} from 'react'

function FormUseState() {
const [name, setName] = useState()
const [surname, setSurname] = useState() 


const onSubmitForm = e => {
    e.preventDefault()

    alert(`Hi {name} {surname}`)
}

return (
    <form onSubmit={onSubmitForm}>
    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
    
    <input type="text" onChange={(e)=>setSurname(e.target.value)} value={surname}/>
    <button type="submit">Submit</button>
    </form>
)
}

export default FormUseState