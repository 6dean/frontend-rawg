const JoinUs = ({ setShowLeft }) => {
  setShowLeft(false);
  return (
    <div className="join-us-section">
      <div className="LEFT-join">
        <div className="signup">Sign up</div>
        <div className="signup-input">
          <input className="input-join" type="text" placeholder="Email"></input>
          <input
            className="input-join"
            type="text"
            placeholder="Username"
          ></input>
          <input
            className="input-join"
            type="text"
            placeholder="Create Password"
          ></input>
        </div>
        <button className="signup-button">Sign up</button>
        <div className="already-member">Already have an account? Log in.</div>
      </div>
      <div className="RIGHT-join">
        <div className="signup">You can use social account to sign up</div>
        <div className="button-facebook">Continue with Facebook</div>
        <div className="button-twitter">Continue with Twitter</div>
        <div className="button-steam">Continue with Steam</div>
      </div>
    </div>
  );
};

export default JoinUs;
