import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import {auth} from '../firebase'
//import { type } from "@testing-library/user-event/dist/type";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const SignIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth=> {history.push('/')}).catch(error => alert(error.message));
    
  };

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if(auth) {
        history.push("/")
      } 
    }).catch(error => alert(error.message))
  }

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="Amazon Logo"
            className="login_logo"
          />
        </Link>
        <div className="login_container">
          <h1>Sign-In</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="login_signInButton"
              onClick={SignIn}
            >
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to the Amazon FAKE Clone Conditions of use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based ads Notice.
          </p>
          <button className="login_registerButton" onClick={register}>
            Create your amazon Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
