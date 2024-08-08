/*import { useRef, useState } from "react";

export default function Player() {
  // we can use a third variable to store the last submitted name before we change to other name but it is a bad practise
  const [enteredPlayerName,setEnteredName] = useState('');
  const [submitted,setSubmitted] = useState(false);
  function handleChange(event){
    setSubmitted(false);// when changes from 1 name to another set 'unknown entity' 
    setEnteredName(event.target.value);
  }
  function handleClick(){
    setSubmitted(true)
  }
  return (
    <section id="player">
      <h2>Welcome {submitted? enteredPlayerName: 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}*/
import { useRef, useState } from "react";
export default function Player() {
  const playerName = useRef();

  // uses a third variable to store the last submitted code but it is a bad practise
  const [enteredPlayerName,setEnteredName] = useState(null);

  function handleClick(){
   setEnteredName(playerName.current.value);
   playerName.current.value='';// Don't write if it is connected to a state that affect other things // react means writting declarative code not manipulating DOM, here this is imperitive code
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName?? 'unknown entity'}</h2>

      {/*outputing the playerName.current.value when the component gets rendered for the 1st time, at this time , the connection is not established => playerName.current is undefined  */}
      {/* <h2>Welcome { playerName.current.value?? 'unknown entity'}</h2> */}

      {/* Not Work bcz as the ref changes the component fn don't re-executes  */}
      {/* <h2>Welcome { playerName.current? playerName.current.value: 'unknown entity'}</h2>   */}

      <p>
       <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}