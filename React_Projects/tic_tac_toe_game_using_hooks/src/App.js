import Popup from 'reactjs-popup';


import './App.css'
import {useState, useEffect, useCallback} from 'react'



import Square from './components/Square'
import {Pattern} from './Pattern'

function App(){
  
const [board, setBoard] = useState(Array(9).fill(""))
const [player, setPlayer] = useState("X")
const [currentPlayer, setCurrentPlayer] = useState("user")
const [winner, setWinner] = useState("")
const [open, setOpen] = useState(false)
const closeModal = () => {setOpen(false); setBoard(Array(9).fill("")); setWinner("")};

useEffect(() => {
checkWin()
}, [board])


const cpuChance = () => {
  if(board.filter(square => square !==null).length % 2 === 1){
    let newSquares = board
  }
}

useEffect(() => {
  if(currentPlayer === "computer" && winner === ""){
setTimeout(() => cpuChance(), 2000)
}
}, [currentPlayer]
)


const chooseSquare = (square) => {
setBoard(board.map((item, index) => index === square && item === "" ? player : item))
setPlayer('O')
setCurrentPlayer("computer")
}




  return (
    
<div className="App">
  <div className="score-board">
  <p className="status">X - {xStatus}</p>
    <p className="status">O - {oStatus}</p>
    <p className="status">Tie - {tieStatus}</p>
  </div>
  <h1 className="note">Player {player === 'X' ? 'X' : 'O'} has to play</h1>
  <div className="board">
    <div className="row">
      <Square val={board[0]} chooseSquare={() => {chooseSquare(0)}}/>
      <Square val={board[1]} chooseSquare={() => {chooseSquare(1)}}/>
      <Square val={board[2]} chooseSquare={() => {chooseSquare(2)}}/>
    </div>
    <div className="row">
    <Square val={board[3]} chooseSquare={() => {chooseSquare(3)}}/>
    <Square val={board[4]} chooseSquare={() => {chooseSquare(4)}}/>
    <Square val={board[5]} chooseSquare={() => {chooseSquare(5)}}/>
    </div>
    <div className="row">
    <Square val={board[6]} chooseSquare={() => {chooseSquare(6)}}/>
    <Square val={board[7]} chooseSquare={() => {chooseSquare(7)}}/>
    <Square val={board[8]} chooseSquare={() => {chooseSquare(8)}}/>
    </div>
  </div>
  <div className="button-group">
      <button type="button" className="button" onClick = {() => {setBoard(Array(9).fill("")); setWinner("")}} >Play Again</button>
      <button type="button" className="button" onClick = {() => {setBoard(Array(9).fill("")); setxStatus(0); setoStatus(0); settieStatus(0)}} >Reset Game</button>
    </div>
  <Popup open={open}   onClick={closeModal} position="center">
    {winner !== 'D'? <div className="modal result-popup">
          <h1>{winner} Wins The Game.</h1>
          <button className="popup-close-button" onClick={(e) => {e.stopPropagation(); closeModal()}}>Play Again</button>
        </div> :
        <div className="modal result-popup">
        <h1>It's a Draw</h1>
        <p>No One Wins</p>
        <button className="popup-close-button" onClick={(e) => {e.stopPropagation(); closeModal()}}>Play Again</button>
      </div>}
        
      </Popup>
</div>
  )
}

export default App