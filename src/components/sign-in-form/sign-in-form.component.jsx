import "./sign-in-form.styles.css";
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      setSignInSuccess(true);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setSignInSuccess(true);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.error("Error during sign-in:", error);
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
    <div className="sign-in-container">
      {signInSuccess ? (
        <div className="sign-in-success-message">
          <h1>Sign In Successful</h1>
          <p>You are signed in!</p>
          <Button buttonType="generic" onClick={handleRedirect}>
            Go to Plants Page
          </Button>
        </div>
      ) : (
        <>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Email address"
              type="email"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              autoComplete="email"
              required
              value={email}
              onChange={handleChange}
            />
            <FormInput
              label="Password"
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={handleChange}
            />
            <div className="sign-in-button-container">
              <Button type="submit" buttonType="generic">
                Sign In
              </Button>
              <Button
                type="button"
                buttonType="google"
                onClick={signInWithGoogle}
              >
                Sign In With Google
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default SignInForm;
