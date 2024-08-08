import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from './winning-combinations';

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
  // const [activePlayer, setActivePlayer] = useState("X");   // use it for previous code
  const activePlayer = dervivedActivePlayer(gameTurns);

  // function handleSelectSquare() {  // old fn
   function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currentActivePlayer) => (currentActivePlayer === "X" ? "O" : "X")); // use it for previous code
    
      setGameTurns((prevTurns) => {
        const currentPlayer = dervivedActivePlayer(prevTurns);

        const updatedTurns = [  
          {         // adding a new object at front in the array
            square: { row: rowIndex, col: colIndex },
            // player: activePlayer,//Bad practices,We are updating the turns and as we r merging two states (reason -> when the schedule state update is performed, we are definitely working with the latest state) because we have to update state in a immutable way
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
        <ol id="players" className="highlight-player">
          {/* two different isolated instances from a common component, on affected(state change) will not affect other */}
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {/* <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} /> */}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
