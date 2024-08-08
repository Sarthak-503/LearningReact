import React from "react";
import { useState } from "react";
const Player = ({ initialName, symbol,isActive }) => {
  const [playerName,setPlayerName] =useState(initialName);
  const [isEditing, setEditing] = useState(false);
  function handleButtonClick() {
      // setEditing(!isEditing);  // wrong approach schedules a state update for future
      setEditing((editing) => !editing); // right approach
    // we pass a function Because this function which you pass here will be called by React
    // and it will automatically get the current state value. So the value before this state update here as an input.
    // So in this case here, we could accept a parameter that could be named editing  which will be true or false, just like isEditing.
    // But this will dynamically be set and passed as a value by React when it calls this function
    // and this function, which you pass to setIsEditingshould then return the new state you wanna set.
    // And here we can then again use this exclamation mark trick.
  }
  // that onChange will trigger for every keystroke,and it will provide us with an event object that contains 
  //the value that was entered by the user.

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
