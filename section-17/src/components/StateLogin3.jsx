import { useState } from "react";
// there is a problem here if you have cliked on input and entered an empty value, then it is submitting value hence 
// we have to add a check after submission before sending api call. hence you can add a required prop which due to 
//which it can't except empty values, minlength and maxlength to password
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit,setDidEdit] = useState({
    email:false,
    password:false
  })
  
  const emailIsInvalid =
  didEdit.email && !enteredValues.email.includes("@");

  function handleInputChange(value, identifier) {
    setEnteredValues((prevValue) => {
      return {
        ...prevValue,
        [identifier]: value,
      };
    });
    // making the error disable again when user again input a value 
    setDidEdit(prevEdit=>({
        ...prevEdit,
        [identifier]:false
    }))
  }
  function handleInputBlur(identifier) {
    setDidEdit((prevEdit)=>({
        ...prevEdit,
        [identifier]:true
    }))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    setEnteredValues({
      email: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={()=>handleInputBlur('email')}
            required
            value={enteredValues.email}
            onChange={(event) => handleInputChange(event.target.value, "email")}
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
            value={enteredValues.password}
            onChange={(event) =>
              handleInputChange(event.target.value, "password")
            }
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
