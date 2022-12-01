import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import axios from "axios";

const JoinUs = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const validJoin = () => {
    if (!username || !email || !password) {
      setAlert(true);
    } else {
      setAlert(false);
      const data = async () => {
        try {
          const response = await axios.post("http://localhost:3000/joinus", {
            username: username,
            email: email,
            password: password,
          });
        } catch (error) {
          console.log(error.message);
        }
      };
      data();
    }
  };

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
                    className={alert ? "input-join-alert" : "input-join"}
                    type="email"
                    placeholder="Email"
                    onChange={(email) => setEmail(email.target.value)}
                  ></input>
                  <input
                    className={alert ? "input-join-alert" : "input-join"}
                    type="text"
                    placeholder="Username"
                    onChange={(username) => setUsername(username.target.value)}
                  ></input>
                  <input
                    className={alert ? "input-join-alert" : "input-join"}
                    type="text"
                    placeholder="Create Password"
                    onChange={(password) => setPassword(password.target.value)}
                  ></input>
                  <div className={alert ? "alert-text" : "alert-none"}>
                    <p>Fields need to be completed !</p>
                  </div>
                </div>

                <button
                  className="signup-button"
                  onClick={() => {
                    validJoin();
                  }}
                >
                  Sign up
                </button>
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
