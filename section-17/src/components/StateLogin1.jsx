import { useState } from "react";

export default function Login() {
  const [enteredPassword,setEnteredPassword] =  useState('');
  const [enteredEmail,setEnteredEmail] =  useState('');
//   And here we could now call setEnteredEmail and set the value to event.target.value because
// the target of the event is that input field and that underlying object that represents this input field
// has a value property which gives us access to the currently entered value.
  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setEnteredPassword(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
  } 
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={enteredEmail} onChange={handleEmailChange} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={enteredPassword} onChange={handlePasswordChange} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" >Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}

// when button -> clicked , browser creates and send a automatically generated http request to server , 
//this is default behaviour of browser bcz in many non-React apps,
//you have a full stack application where every page is rendered by the server and 
//sent to the client thereafter and where form 
//submissions therefore should be sent back to the server so that they can be handled there.
