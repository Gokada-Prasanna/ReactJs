import React, {useReducer} from 'react'



function UseReducer(){
const [count, dispatch] = useReducer(countReducer, 0)

    const addCount = () => {
        dispatch({
            type:"+"
        });
    }

    const subCount = () => {
        dispatch({
type:'-'
        });
    }

    const resetCount = () => {
        dispatch({
            type:"reset"
        });
    }

    return (
        <>
        <p>The counter value is {count}</p>
        <div className="buttons-container">
            <button type="button" className="add-button" onClick={addCount}>+</button>
            <button type="button" className="subtract-button" onClick={subCount}>-</button>
            <button type="button" className="reset-button" onClick={resetCount}>Reset</button>
        </div>
        </>
    )

}

export default UseReducer

function countReducer(count, action){
    switch(action.type){
        case '+':{
            return count+1
        }

        case '-':{
            return count-1  
        }

        case 'reset':{
            return 0 
        }

        default:
            throw Error("Unknown action: "+action.type)
    }
}

