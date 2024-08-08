import React from 'react'

const Log = ({turns}) => {
  return (
    <>
     <ol id="log">
      {
        turns.map((turn)=>(
          // key is simply a string (combination of row and columnIndex different for everyone) 
          <li key={`${turn.square.row} ${turn.square.col}`}>{turn.player} selected {turn.square.row}, {turn.square.col}</li>
        ))
      }
      </ol> 
    </>
  )
}

export default Log;
