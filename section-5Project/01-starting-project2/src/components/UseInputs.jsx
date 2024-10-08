 // onChange={handleChange} // bcz by default when change event occurs, react will call the fn and pass a default object(generated by React) to it and in it only value goes.
import React, { useState } from "react";
const UseInputs = ({ Input, onChange }) => {
  const userInput = Input;
  const handleChange = onChange;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">INITIAL INVESTMENT</label>
          <input
            type="number"
              onChange={(event) =>
              handleChange("initialInvestment", event.target.value) // passing anonymous actual fn , use when you have to pass some identifier
            }
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label htmlFor="">ANNUAL INVESTMENT</label>
          <input
            type="number"
            onChange={() =>
              handleChange("annualInvestment", event.target.value)  // always emits a string , convert it before use
            }
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">EXPECTED RETURN </label>
          <input
            type="number"
            onChange={() => handleChange("expectedReturn", event.target.value)}
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label htmlFor="">DURATION</label>
          <input
            type="number"
            onChange={() => handleChange("duration", event.target.value)}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UseInputs;
