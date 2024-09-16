import { useRef, useState } from "react";
// this don't include onChnage handler if you want to add, you have add state, here we validate input after the 
// form is submitted
export default function Login() {
  const [emailIsInvalid,setEmailIsInvalid] =  useState(false);
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredEmail =  email.current.value;
    const enteredPassword = password.current.value;
    
    const emailIsValid = enteredEmail.includes('@');
    if(!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);// if previously it was not correct email

    console.log("Submitted");
    email.current.value = '';
    password.current.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            // type="email"
            name="email"
            ref={email}
          />
           <div className="control-error">
            {emailIsInvalid && <p>Please Enter a Valid Email Address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
