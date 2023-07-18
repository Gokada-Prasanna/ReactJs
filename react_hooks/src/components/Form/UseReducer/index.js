import React, {useReducer} from 'react'



function UseReducer(){
    const [userDetails, dispatch] = useReducer(formReducer, {userName:"Taylor", age:42})

const changeUsername = e => {
    
    dispatch({
        type:"change_name",
        text:e.target.value,
    });

}

const incrementAge = () => {

    dispatch({
        type:"increment_age",
    })
}

    return (
        <>
        <input type="text" value={userDetails.userName} onChange={changeUsername}/>
        <p>Hi {userDetails.userName}, your age is {userDetails.age}</p>
        <button type="button" onClick={incrementAge}>Increment Age</button>
        </>
    )
}

export default UseReducer

function formReducer(userDetails, action){
    switch(action.type){
        case "increment_age":{
            return {...userDetails, age:userDetails.age+1}
        }
        
        case "change_name":{
            return {...userDetails, userName:action.text}
        }

        default:{
            return ("Undefined action:"+action.type)
        }
    }
}