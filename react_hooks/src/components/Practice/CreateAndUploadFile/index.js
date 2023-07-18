import {useState, useEffect} from 'react'


function CreateAndUploadFile(){
    const [userDetails, setUserDetails] = useState([])
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")

const onClickSubmit = (e) => {
    e.preventDefault()

    setUserDetails([...userDetails, {Username:userName, Email:userEmail}])
}

useEffect(() => localStorage.setItem("UserDetails", JSON.stringify(userDetails)), [userDetails] )

const renderUserNameField = () => {
    return (
        <>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} />
        <br />
        </>
    )
}

const renderUserEmailField = () => {
    return (
        <>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        <br />
        </>
    )
}

    return(
        <>
        <form onSubmit={onClickSubmit}>
        {renderUserNameField()}
        {renderUserEmailField()}
        <button type="submit">Submit</button>
        <button type="button" onClick={() => {setUserName(""); setUserEmail("")}}>Reset</button>
        </form>
        </>
    )


}

export default CreateAndUploadFile