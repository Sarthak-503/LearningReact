import React from 'react'

const Log = ({turns}) => {
  const list = turns.map((obj)=>{

  })
  return (
    <>
     <ol id="log">
      {
        turns.map((turn)=>(
          // key is simply a string (combination of row and columnIndex)
          <li key={`${turn.square.row} ${turn.square.col}`}>{turn.player} selected {turn.square.row}, {turn.square.col}</li>
        ))
      }
      </ol> 
    </>
  )
}

export default Log;
