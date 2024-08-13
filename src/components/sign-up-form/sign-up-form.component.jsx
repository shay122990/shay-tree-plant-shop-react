import "./sign-up-form.styles.css";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setSignUpSuccess(true);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      } else {
        console.log("user creation failed", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleRedirect = () => {
    navigate("/plants");
  };

  return (
    <div className="sign-up-container">
      {signUpSuccess ? (
        <div className="sign-up-success-message">
          <h1>Sign Up Successful</h1>
          <p>You are signed in!</p>
          <Button buttonType="generic" onClick={handleRedirect}>
            Go to Plants Page
          </Button>
        </div>
      ) : (
        <>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Full Name"
              type="text"
              name="displayName"
              value={displayName}
              onChange={handleChange}
              autoComplete="name"
              required
            />
            <FormInput
              label="Email address"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
            <FormInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
            <div className="sign-up-button-container">
              <Button type="submit" buttonType="generic">
                Sign Up
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default SignUpForm;
