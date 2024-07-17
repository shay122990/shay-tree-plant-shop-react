import "./sign-in-form.styles.css";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

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
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            autoComplete="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            autoComplete="current-password"
          />
        </div>
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
