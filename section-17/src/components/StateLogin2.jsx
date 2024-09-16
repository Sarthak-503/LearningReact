import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  // validating email on every key-stroke-> problem -> user have not entered full email, 
  // but it is showing error, after entering and clearing the input feild , it don't show an error
  const emailIsInvalid =
    enteredValues.email !== "" && !enteredValues.email.includes("@");

  function handleInputChange(value, identifier) {
    setEnteredValues((prevValue) => {
      return {
        ...prevValue,
        [identifier]: value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    // resetting the form 
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
