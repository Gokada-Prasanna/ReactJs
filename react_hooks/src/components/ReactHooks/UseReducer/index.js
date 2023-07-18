import React, {useReducer} from 'react'

function UseReducer(){
const [state, dispatch] = useReducer((state, action) => {
    switch(action.type){
        case "SET_NAME":{
            return {...state, name:action.payload}
        }
        case "ADD_NAME":{
            return {...state, names:[...state.name, state.name], name:""}
        }
        default:{
            throw Error("Undefined Action Type: ",+ action.type)
        }
    }
},{
    names : [],
    name : "",
})

const onChangeName = e => (
    dispatch({
        type:"SET_NAME",
        payload:e.target.value,
    })
)

return(
    <>
    <input type="text" onChange={onChangeName} value={state.name} />
    <div>
        
        <button type="button" onClick={()=>dispatch({type:"ADD_NAME"})}>ADD NAME</button>
        <ul>
            {state.names.map(item=><li>{item}</li>)}
        </ul>
        </div>
    </>

)
}

export default UseReducer 