import {useState, useEffect, useLayoutEffect} from 'react'

const choices = {
    "0":"Rock",
    "1":"Paper",
    "2":"Scissor"
}

const computerChoice = Math.floor(Math.random()*3)
    const userChoice = Math.floor(Math.random()*3)

const GameLogic = (props) => {
    const {upDateScore} = props
    const [result, setResult] = useState(null)
// const [computerChoice , setComputerChoice] = useState("")
// const [userChoice, setUserChoice] = useState("")

    


    const winningLogic = () => {
    let resultString = computerChoice.toString()+userChoice.toString()
    
    setResult(/^[0]{2}$|^[1]{2}$|^[2]{2}$/.test(resultString) ? "Draw" : /^02$|^10$|^21$/.test(resultString)? "Computer Won" : (upDateScore(), "User Won"))
    }

    useEffect(() => winningLogic(),[])

console.log(result)
return(
    <>
    <div>
    <h1>Computer Choice</h1>
    <p>{computerChoice}</p>
    </div>
    <div>
        <h1>User Choice</h1>
        <p>{userChoice}</p>
    </div>
    <div><h1>{result}</h1></div>
    <button type="button" onClick={() => setResult(null)}>PlayAgain</button>
    </>
)
}

export default GameLogic