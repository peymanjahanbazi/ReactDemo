import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "../store/auth";
import store from "../store/configureStore";

import invalidUserImg from "./invalidUser.svg";
import "./Login.scss";
import Main from "./templates/Main";

function Login() {
  const VALID_USERNAME = "0999999";
  const VALID_PASSWORD = "123";
  let [mobile, setMobile] = useState(VALID_USERNAME);
  let [pass, setPass] = useState(VALID_PASSWORD);
  let [invalidUser, setInvalidUser] = useState(false);

  let navigate = useNavigate();
  const handleClick = async (e) => {
    if (mobile === VALID_USERNAME && pass === VALID_PASSWORD) {
      //send request to server
      //navigate to "Enter code" page
      store.dispatch(
        UserLogin({
          name: "Peyman Jahanbazi",
          id: 123,
          username: "p.jahanbazi",
        })
      );
      navigate("/");
    } else {
      setInvalidUser(true);
    }
  };

  let invalidUserHtml = null;
  if (invalidUser) {
    invalidUserHtml = (
      <div className="invalid-password">
        <img
          src={invalidUserImg}
          alt="invalid user"
          className="invalid-user-img"
        />
        Invalid username or password
      </div>
    );
  }
  return (
    <Main title="Login">
      <div className="loginBox">
        <div className="title">Login</div>
        <div className="cellphone">
          <div className="cellphone-title">mobile</div>
          <div>
            <input
              className="textbox"
              type="text"
              name="mobile"
              id="mobile"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
                setInvalidUser(false);
              }}
            />
          </div>
        </div>
        <div className="cellphone passbox">
          <div className="cellphone-title">password</div>
          <div>
            <input
              className="textbox"
              type="password"
              name="mobile"
              id="mobile"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
                setInvalidUser(false);
              }}
            />
          </div>
        </div>
        {invalidUserHtml}
        <div className="cellphone forgetpassword">
          <Link to="/ForgetPassword"> I forget my password</Link>
        </div>
        <div className="cellphone loginbutton" onClick={handleClick}>
          Login
        </div>
      </div>
    </Main>
  );
}

export default Login;
