import "./sign-up-form.styles.css";

const SignUpForm = () => {
  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <form>
        {/* Hidden username field for accessibility */}
        <input
          type="text"
          className="form-control"
          id="hiddenUsername"
          name="username"
          autoComplete="username"
          style={{ display: "none" }}
        />

        <div className="mb-3">
          <label htmlFor="signUpName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="signUpName"
            name="signUpName"
            aria-describedby="nameHelp"
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
