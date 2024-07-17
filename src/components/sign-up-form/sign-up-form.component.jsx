import "./sign-up-form.styles.css";
import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="signUpName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="signUpName"
            aria-describedby="nameHelp"
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signUpEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="signUpEmail"
            aria-describedby="emailHelp"
            autoComplete="email"
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signUpPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="signUpPassword"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
        </div>
        <div className="sign-up-button-container">
          <button type="submit" className="btn btn-light">
            Sign Up
          </button>
          <button type="button" className="btn btn-light">
            Sign Up With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
