import {useEffect, useReducer} from 'react'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import './index.css'

let initialState = {
    state:"",
    erro:"",
    data:[]
}

const reducerFunc = (state, action) =>{
switch(action.type){
    case "success":
        return {
            status: action.type,
            data:action.payload,
            error:""
        }
    case "loading":
        return {
            status: action.type,
            data:[],
            error:""
        }
    case "error":
        return {
            status:action.type,
            data:[],
            error:action.error
        }
    default:
        return "Invalid action type"
}
}


function TableCreation(){
const [fetchInfo, dispatch] = useReducer(reducerFunc, initialState)
useEffect(()=>{
    dispatch({type:"loading"})
axios.get("https://jsonplaceholder.typicode.com/users")
.then(response => dispatch({type:"success", payload: response.data}))
.catch(error => dispatch({type:"error", error:"Error Occurred"}))
},[])




return(
    
    <div className='bg-container'>
        <h1 className="heading">Fetching Data using useReducer()</h1>
        <div className='table-container'>
        {fetchInfo.status === "loading" ? <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> : 
        <Table striped bordered hover variant="dark" rounded-circle p-0 m-0>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {fetchInfo.data.map(item => <tr>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                </tr>)}
            </tbody>
        </Table>
        }
        </div>
    </div>
)
}

export default TableCreation