import "./sign-in-form.styles.css";
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import MessageDisplay from "../message-display/message-display.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [signInFailure, setSignInFailure] = useState(false);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      setSignInSuccess(true);
      setSignInFailure(false);
      resetFormFields();
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setSignInSuccess(false);
      setSignInFailure(true);
      setTimeout(() => setSignInFailure(false), 3000);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setSignInSuccess(true);
      setSignInFailure(false);
      resetFormFields();
    } catch (error) {
      setSignInSuccess(false);
      setSignInFailure(true);
      resetFormFields();

      switch (error.code) {
        case "auth/invalid-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          alert("Either email or password is wrong. Please try again.");
          console.error("Error during sign-in:", error);
      }
      setTimeout(() => setSignInFailure(false), 2000);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const goToPlants = () => navigate("/plants");
  const goToCheckout = () => navigate("/checkout");

  return (
    <div className="sign-in-container">
      {signInSuccess || signInFailure ? (
        <MessageDisplay
          isSuccess={signInSuccess}
          message={
            signInSuccess
              ? "You are signed in!"
              : "There was an issue with your sign-in. Please try again."
          }
          className="sign-in-message"
        >
          {signInSuccess && (
            <div className="d-flex gap-2">
              <Button buttonType="generic" type="button" onClick={goToPlants}>
                Go to Plants Page
              </Button>
              <Button buttonType="generic" type="button" onClick={goToCheckout}>
                Go to Checkout
              </Button>
            </div>
          )}
        </MessageDisplay>
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
