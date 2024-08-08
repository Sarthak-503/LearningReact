import React from "react";
import { useState } from "react";
const Player = ({ initialName, symbol,isActive, handleNameChange }) => {

  // this state => not lifted up as it is related to input element and on everykeystroke, whole App component and then Grid component will reevaluates => bad practise 
  const [playerName,setPlayerName] = useState (initialName);
  const [isEditing, setEditing] = useState(false);
  function handleButtonClick() {
    setEditing((editing) => !editing); // right approach
// The first time you click the button isEditing is false. The button click toggles isEditing to true.
// The if condition (if(isEditing==true)) is false before the toggle, so handleNameChange is not called.
    if(isEditing==true){
      handleNameChange(symbol,playerName);
    }
   
  }
  function handleChange (event) {
    setPlayerName(event.target.value);
  }
  return (
    <>
      <li className={isActive ?'active':''}> 
        <span className="player">
          {!isEditing ? (
            <span className="player-name">{playerName}</span>
          ) : (
            <input type="text" value={playerName} onChange={handleChange}/> 
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button
          onClick={ handleButtonClick }
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </li>
    </>
  );
};

export default Player;
