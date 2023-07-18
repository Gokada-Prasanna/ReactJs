import {useRef} from 'react'

export default function Counter(){
    let countRef = useRef(0)

    const handleIncrement = () => {
        countRef.current = countRef.current + 1
    }

    return <>
    <span>Count: {countRef.current}</span>
    <button onClick={handleIncrement}>Click me</button>
    </>
}