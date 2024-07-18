import "./sign-in-form.styles.css";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";

const SignInForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRefrence = await createUserDocumentFromAuth(user);
    console.log(userDocRefrence);
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <form>
        <FormInput
          label="Email address"
          type="email"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          autoComplete="email"
          required
        />
        <FormInput
          label="Password"
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          required
        />
        <div className="sign-in-button-container">
          <button type="submit" className="btn btn-light">
            Sign In
          </button>
          <button
            onClick={logGoogleUser}
            type="button"
            className="btn btn-light"
          >
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
