import {useState, useEffect} from 'react'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Square from '../Square'
import './index.css'

const Board = () => {
    const [boardState, setBoardState] = useState(Array(9).fill(""))
    const [state, setState] = useState(true)
    const [winner, setWinner] = useState(null)


useEffect(() => {
    const winningLogic = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

winningLogic.map(logic => {
    const firstPlayer = boardState[logic[0]]

    if(firstPlayer == "") return "" ;

    let findWinner = true 

    logic.forEach(id => {
        if(boardState[id] !== firstPlayer){
            findWinner = false 
        }
    })
    if(findWinner){
        setWinner(boardState[logic[0]])
    }
})

}, [boardState])



const handleClick = (index) => {
    state? (boardState[index]='X') : (boardState[index]='O')
    setState(!state)
    setBoardState([...boardState])
}


return(<>
    {winner === null ? (<div className="board-container">
    <div className="row-container">
        <Square onClick = {() => handleClick(0)} value = {boardState[0]}/>
        <Square value = {boardState[1]} onClick = {() => handleClick(1)}/>
        <Square value = {boardState[2]} onClick = {() => handleClick(2)}/>
    </div>
    <div className="row-container">
        <Square value = {boardState[3]} onClick = {() => handleClick(3)}/>
        <Square value = {boardState[4]} onClick = {() => handleClick(4)}/>
        <Square value = {boardState[5]} onClick = {() => handleClick(5)}/>
    </div>
    <div className="row-container">
        <Square value = {boardState[6]} onClick = {() => handleClick(6)}/>
        <Square value = {boardState[7]} onClick = {() => handleClick(7)}/>
        <Square value = {boardState[8]} onClick = {() => handleClick(8)}/>
    </div>
</div>) : winner==='X' ? <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup> : <p>O Wins</p>
}
</>)
}
export default Board