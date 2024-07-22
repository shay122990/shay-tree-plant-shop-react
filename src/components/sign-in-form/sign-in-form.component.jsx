import "./sign-in-form.styles.css";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      setCurrentUser(user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      setCurrentUser(user);
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

  return (
    <div className="sign-in-container">
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
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
