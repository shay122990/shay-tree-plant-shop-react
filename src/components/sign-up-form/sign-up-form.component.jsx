import "./sign-up-form.styles.css";
const SignUpForm = () => {
  return (
    <div className="sign-up-container">
      <h1>Register</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="sign-up-button-container">
          <button type="submit" className="btn btn-light">
            Sign Up
          </button>
          <button type="button" className="btn btn-light">
            Register With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
