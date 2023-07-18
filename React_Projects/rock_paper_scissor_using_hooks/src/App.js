import React,{useState, useEffect} from 'react'
import './index.css'

const App = () => {
  const [userChoice, setUserChoise] = useState("")
  const [computerChoice, setComputerChoice] = useState("")
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState("")
  const [gameOver, setGameOver] = useState(false)

const choices = {
  {
    id:0;
    img_url:
  }
}

  return (
    <div className="App">
<h1 className="heading">Rock Paper Scissor</h1>
<div className="score">
  <h1>User Points:{userPoints}</h1>
  <h1>Computer Points:{computerPoints}</h1>
</div>
<div className="choices">
  <div className="choice-user">
    <img src="" alt="user hand" className="user-hand" />
  </div>
</div>
</div>
)
}

export default App