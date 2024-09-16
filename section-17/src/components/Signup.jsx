import { useState } from "react";

export default function Signup() {

  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const acquisitionChannel = formData.getAll("acquisition");
    const data = Object.fromEntries(formData.entries());
    data.acquisition = acquisitionChannel;
    
    if(data.password!==data['confirm-password']) {
      setPasswordsAreNotEqual(true);
      return;
    }
      console.log(data);

    // event.target.reset();  // Used for reset after submitting
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required/>
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" minLength={6}/>
        </div>

        <div className="control" required>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
          <div className="control-error">
            {
              passwordsAreNotEqual&& <p>Password and Confirm Password are not Equal</p>
            }
          </div>
        </div>
      </div>

      <hr />

      <div className="control-row" >
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required/>
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required/>
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" required />
          I agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}

// we are using a native built-in feature for getting hold of all those values bcz it turns out that the
//browser actually helps you with handling that form submission and getting hold of all the entered values.
//the FormData constructor function This is built into the browser, not provided by me or React,
//and FormData is an object that makes it easy to get hold of the different values entered into a form.
//All your input fields should have that name attribute.
