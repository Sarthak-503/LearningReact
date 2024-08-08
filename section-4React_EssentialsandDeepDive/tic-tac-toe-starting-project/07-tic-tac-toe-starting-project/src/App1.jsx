// maked his new folder for checking winner 
import Player from "./component1/Player";
import GameBoard from "./component1/GameBoard";
import { useState } from "react";
import Log from "./component1/Log";
import GameOver from "./component1/GameOver";
import {WINNING_COMBINATIONS} from './winning-combinations';
const INITIAL_GAME_BOARD = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]
const PLAYERS ={
  X:'Player 1',
  O:'Player 2'
}
function deriveGameBoard(gameTurns){
    // Arrays are referenced type => failed to restart if use [initialGameBoard]
    let gameBoard = [...INITIAL_GAME_BOARD.map((array)=>[...array])];

    for (const turn of gameTurns) {      
        const {square,player } = turn;
        const {row,col} = square;
        gameBoard[row][col]= player;
    }
    return gameBoard;
}
function deriveWinner(gameBoard,players){
  let winner;
  for(const combination of  WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if(firstSquareSymbol 
      &&firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
        winner=players[firstSquareSymbol];
      } 
  }
  return winner;
}

// it should not recreated when component fn re-executes. 
function dervivedActivePlayer(gameturns){
  let currentPlayer = 'X';

  if(gameturns.length > 0 && gameturns[0].player==='X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players,setPlayerName] = useState(PLAYERS);
  // changing the name of the player
  function handlePlayerNameChange(Symbol,Name){
    setPlayerName((prevName)=>{
      return {
        ...prevName,
        [Symbol]:Name
      }
    })
  }
  const activePlayer = dervivedActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard,players);
  function handleRestart(){
    setGameTurns([]);
  }
  
  const draw = gameTurns.length===9 && !winner;
   function handleSelectSquare(rowIndex, colIndex) {
    

      setGameTurns((prevTurns) => {
        const currentPlayer = dervivedActivePlayer(prevTurns);
        const updatedTurns = [
          {
            square: { row: rowIndex, col: colIndex },
            player:currentPlayer
            
          },
          ...prevTurns,
        ];
        return updatedTurns;
      } )
}
 

  return (
    <main>
      <div id="game-container">
          {(winner || draw)&& <GameOver winner={winner} restart={handleRestart}/>}  
        <ol id="players" className="highlight-player">
          {/* two different isolated instances from a common component, on affected(state change) will not affect other */}
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            handleNameChange={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            handleNameChange={handlePlayerNameChange}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
