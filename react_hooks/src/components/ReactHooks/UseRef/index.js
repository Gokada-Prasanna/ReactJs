import {useRef, useEffect, useState} from 'react'

function UseRef(){
    const inputRef = useRef(null);
    const idRef = useRef(1);

    const [names, setNames] = useState([])

    const onAddName = () => {
        setNames([...names, {id:idRef.current++, name:inputRef.current.value}])
        inputRef.current.value = ""
    }


    useEffect(() => {inputRef.current.focus()}, [])
    return (
        <div>
            <div>{names.map(name=><li key={name.id}>{name.id} - {name.name}</li>)}</div>
            <input type="text" ref={inputRef} />
            <button onClick={onAddName}>Add Name</button>
        </div>
    )

}

export default UseRef