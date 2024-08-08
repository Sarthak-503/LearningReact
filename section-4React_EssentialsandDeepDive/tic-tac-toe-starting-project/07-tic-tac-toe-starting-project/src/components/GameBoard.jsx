import React, { useState } from 'react'

import '../index.css';
const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]


const GameBoard = ({onSelectSquare,turns}) => {

    let gameBoard = initialGameBoard;
    for (const turn of turns) {      // deriving states from props
        const {square,player} = turn;
        const {row,col} = square;
        gameBoard[row][col]= player;
    }

/*
// lets we are adding a log component(who logs it and on which boxes) then we have to manage a listing state up in App.js
// But there we are managing/rendering the same information with different format -> Log.jsx(Array format)
// and here(GameBoard.jsx => Array of Array Format) -> Not a good practise in react
// therefore here we are not lifting the gameBoard state but we prefer computed values & avoid unnecessary
// state management 


// const GameBoard = ({onSelectSquare,activePlayerSymbol}) => {
    const [gameBoard,setGameBoard] = useState(initialGameBoard);

      function handleSelectSquare(rowIndex,colIndex) {

        //  bad practise -> immediately updated even before the schedule update was executed by React.
        // setGameBoard((prevGameBoard) => {
        //     prevGameBoard[rowIndex][colIndex]='X';
        //     return prevGameBoard;
        // });

        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map((innerArray)=>[...innerArray])]; // brand new Array
            updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
            return updatedBoard;
        });
        // executing the fn here but it is defined in outside GameBoard component from inside GameBoard component
        onSelectSquare();
    }
        */
//  return (
//     <ol id='game-board'>
//         {gameBoard.map((row,rowIndex)=>(
//                 <li key={rowIndex}>
//                     <ol>
//                         {
//                             row.map((playerSymbol,colIndex)=>(
//                                 <li key={colIndex}>
//                                     <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>
//                                         {playerSymbol}
//                                     </button>
//                                 </li>
//                             ))
//                         }
//                     </ol>
//                 </li>
//         ))
//         }
//     </ol>
//   )

    return (
        <ol id='game-board'>
            {gameBoard.map((row,rowIndex)=>(
                    <li key={rowIndex}>
                        <ol>
                            {
                                row.map((playerSymbol,colIndex)=>(
                                    <li key={colIndex}>
                                        <button 
                                        onClick={()=>onSelectSquare(rowIndex,colIndex)}
                                        disabled={playerSymbol!==null}
                                        >
                                            {playerSymbol}
                                        </button>
                                    </li>
                                ))
                            }
                        </ol>
                    </li>
            ))
            }
        </ol>
      )
      
}


export default GameBoard;
