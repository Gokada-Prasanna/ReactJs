import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button} from 'react-bootstrap'
import "./index.css"

function FormBootstrap(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()

const onLogin = () => {
alert(`${name} logged Successfully`)
}

const onRegister = () => {
alert(`${name} registered successfully`)
}

return (
    <div className="form-contianer d-flex flex-row justify-content-center align-items-center h-100">
    <Form className="singup-form  d-flex flex-column justify-content-center align-items-center w-25 h-50 p-5">
        <Form.Group className="inputContainer">
        <label htmlFor="name" className="text-start w-100 m-2">Name:</label>
        <Form.Control id="name" type="text" value={name} className="name-input form-control m-2" onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="input-contianer text-align-left">
        <label htmlFor="email" className="text-start w-100 m-2">Email:</label>
        <Form.Control id="email" type="email" value={email} className="email-input form-control m-2" onChange={e=>setEmail(e.target.value)} />
        </Form.Group>
        <div className="buttons-container d-flex flex-row ">
        <Button type="submit" className="submit-button m-2 w-50" value="submit" onClick={onLogin}>Login</Button>
        <Button type="button" className="btn btn-secondary m-2 w-50" onClick={onRegister}>Register</Button>

        </div>
        
    </Form>
    </div>
);
}

export default FormBootstrap