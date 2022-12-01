import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import axios from "axios";

const Login = ({ transferToken, transferTokenUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const validLog = () => {
    if (!email || !password) {
      setAlert(true);
    } else {
      setAlert(false);
      const data = async () => {
        try {
          const response = await axios.post("http://localhost:3000/login", {
            email: email,
            password: password,
          });
          const token = response.data.token;
          const user = response.data.username;
          transferToken(token);
          transferTokenUser(user);
        } catch (error) {
          console.log(error.message);
        }
      };
      data();
    }
  };

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
                    className={alert ? "input-join-alert" : "input-join"}
                    type="text"
                    placeholder="Email"
                    onChange={(email) => setEmail(email.target.value)}
                  ></input>
                  <input
                    className={alert ? "input-join-alert" : "input-join"}
                    type="text"
                    placeholder="Password"
                    onChange={(password) => setPassword(password.target.value)}
                  ></input>
                  <div className={alert ? "alert-text" : "alert-none"}>
                    <p>Fields need to be completed !</p>
                  </div>
                </div>
                <button
                  className="login-button"
                  onClick={() => {
                    validLog();
                  }}
                >
                  Log in
                </button>
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
