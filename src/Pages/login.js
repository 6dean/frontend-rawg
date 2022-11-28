const Login = () => {
  return (
    <div className="join-us-section">
      <div className="LEFT-join">
        <div className="signup">Login</div>
        <div className="signup-input">
          <input className="input-join" type="text" placeholder="Email"></input>
          <input
            className="input-join"
            type="text"
            placeholder="Password"
          ></input>
        </div>
        <button className="login-button">Log in</button>
        <div className="not-member">Don't have an account? Sign up.</div>
        <div className="forgot-member">Forgot your password ?</div>
      </div>
      <div className="RIGHT-join">
        <div className="signup">You can use social accounts to log in</div>
        <div className="button-facebook">Continue with Facebook</div>
        <div className="button-twitter">Continue with Twitter</div>
        <div className="button-steam">Continue with Steam</div>
      </div>
    </div>
  );
};

export default Login;
