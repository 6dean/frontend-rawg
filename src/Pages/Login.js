import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ transferToken, transferTokenUser }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePass, setSeePass] = useState(true);
  const [alerte, setAlert] = useState(false);
  const [error, setError] = useState("");

  const validLog = () => {
    if (!email || !password) {
      setAlert(true);
    } else {
      setAlert(false);
      const data = async () => {
        try {
          const response = await axios.post(
            "https://site--backend-rawg--6qn7tv96v7tt.code.run/login",
            {
              email: email,
              password: password,
            }
          );
          const token = response.data.token;
          const user = response.data.username;
          transferToken(token);
          transferTokenUser(user);
          token && navigate("/");
        } catch (error) {
          setError(error.response.data.message);
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
                    className={alerte ? "input-join-alert" : "input-join"}
                    type="text"
                    placeholder="Email"
                    onChange={(email) => setEmail(email.target.value)}
                  ></input>
                  <div className="password-style">
                    <input
                      className={alerte ? "input-join-alert" : "input-join"}
                      type={seePass ? "password" : "text"}
                      placeholder="Password"
                      onChange={(password) =>
                        setPassword(password.target.value)
                      }
                    ></input>
                    <div
                      className={
                        seePass ? "button-unsee-pass" : "button-see-pass"
                      }
                      onClick={() => {
                        setSeePass(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faEyeSlash} size="xl" />
                    </div>
                    <div
                      className={
                        seePass ? "button-see-pass" : "button-unsee-pass"
                      }
                      onClick={() => {
                        setSeePass(false);
                      }}
                    >
                      <FontAwesomeIcon icon={faEye} size="xl" />
                    </div>
                  </div>
                  <div className={alerte ? "alert-text" : "alert-none"}>
                    <p>Fields need to be completed !</p>
                  </div>
                  <div
                    className={
                      alerte
                        ? "alert-none"
                        : error
                        ? "alert-text"
                        : "alert-none"
                    }
                  >
                    {error}
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
                  <Link to="/signin">Don't have an account? Sign up.</Link>
                </div>
                <div className="forgot-member">Forgot your password ?</div>
              </div>
            </div>
            <div className="RIGHT-join">
              <div className="signup">You can use social account to log in</div>
              <div
                className="button-facebook"
                onClick={() => {
                  alert(
                    "Tu pensais vraiment pouvoir te connecter avec Facebook ?"
                  );
                }}
              >
                <FontAwesomeIcon icon={faFacebook} fontSize={18} /> Continue
                with Facebook
              </div>
              <div
                className="button-twitter"
                onClick={() => {
                  alert(
                    "Tu pensais vraiment pouvoir te connecter avec Twitter ?"
                  );
                }}
              >
                <FontAwesomeIcon icon={faTwitter} fontSize={18} /> Continue with
                Twitter
              </div>
              <div
                className="button-steam"
                onClick={() => {
                  alert(
                    "Tu pensais vraiment pouvoir te connecter avec Steam ?"
                  );
                }}
              >
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
