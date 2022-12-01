import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";

const JoinUs = () => {
  return (
    <>
      <div className="join-us-section">
        <div className="flex-join">
          <div className="signup-join-element">
            <div>
              <div className="LEFT-join">
                <div className="signup">Sign up</div>
                <div className="signup-input">
                  <input
                    className="input-join"
                    type="text"
                    placeholder="Email"
                  ></input>
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
                <div className="already-member">
                  Already have an account? Log in.
                </div>
              </div>
            </div>
            <div>
              <div className="RIGHT-join">
                <div className="signup">
                  You can use social account to sign up
                </div>
                <div className="button-facebook">
                  <FontAwesomeIcon icon={faFacebook} fontSize={18} /> Continue
                  with Facebook
                </div>
                <div className="button-twitter">
                  <FontAwesomeIcon icon={faTwitter} fontSize={18} /> Continue
                  with Twitter
                </div>
                <div className="button-steam">
                  <FontAwesomeIcon icon={faSteam} fontSize={18} /> Continue with
                  Steam
                </div>
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

export default JoinUs;
