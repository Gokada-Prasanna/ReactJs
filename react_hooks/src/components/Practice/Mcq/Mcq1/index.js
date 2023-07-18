import {useState} from 'react'

export default function Counter(){
    const [counter, setCounter] = useState(5)

    return (
        <>
        <span>{counter}</span>
        <button onClick={() => {
setCounter(counter => counter+5)
setCounter(counter => counter+5)
alert(counter)
setCounter(counter => counter+5)
setCounter(counter => counter+5)
        }} type="button">Increment</button>
        </>
    )
}