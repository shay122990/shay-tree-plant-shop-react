import "./sign-up-form.styles.css";

const SignUpForm = () => {
  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="signUpEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="signUpEmail"
            name="signUpEmail"
            aria-describedby="emailHelp"
            autoComplete="email"
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
            name="signUpPassword"
            autoComplete="new-password"
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
