import { useState, useTransition} from 'react'


function UseTransition(){
    const [isPending, startTransition] = useTransition()
    const [inputList, setInputList] = useState([])
    const [input, setInput] = useState("")

const listSize = 10000;

const handleChange = (e) => {
setInput(e.target.value)
startTransition(() => {const l =[]
for(let i = 0; i<listSize; i++){
    l.push(e.target.value)
}
setInputList(l)})
}
console.log("rendering..")
    return (
        <>
        <input type="text" onChange={handleChange} value={input} />
        {isPending ? "Loading..." : <div>{inputList.map((item, index) => <p key={index}>{item}</p>)}</div>}
        </>
    )
}

export default UseTransition