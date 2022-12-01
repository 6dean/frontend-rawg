import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <>
      <div className="login-section">
        <div className="flex-join">
          <div className="signup-join-element">
            <div>
              <div className="LEFT-join">
                <div className="signup">Login</div>
                <div className="signup-input">
                  <input
                    className="input-join"
                    type="text"
                    placeholder="Email"
                  ></input>
                  <input
                    className="input-join"
                    type="text"
                    placeholder="Password"
                  ></input>
                </div>
                <button className="login-button">Log in</button>
                <div className="not-member">
                  Don't have an account? Sign up.
                </div>
                <div className="forgot-member">Forgot your password ?</div>
              </div>
            </div>
            <div className="RIGHT-join">
              <div className="signup">You can use social account to log in</div>
              <div className="button-facebook">
                <FontAwesomeIcon icon={faFacebook} fontSize={18} /> Continue
                with Facebook
              </div>
              <div className="button-twitter">
                <FontAwesomeIcon icon={faTwitter} fontSize={18} /> Continue with
                Twitter
              </div>
              <div className="button-steam">
                <FontAwesomeIcon icon={faSteam} fontSize={18} />
                Continue with Steam
              </div>
            </div>
          </div>
          <div className="rules-joinin">
            <p className="joinin-rule">
              By signing up, you agree to RAWG’s Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
