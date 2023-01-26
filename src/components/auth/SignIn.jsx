import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import './loginStyle.css'
import SignUp from "./signup";
import AuthDetails from "../AuthDetails";
import { auth } from "../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (

    <div className="Login_Form">

      <div className="sign-in-container">
        <form onSubmit={signIn}>
          <h3>Log In to your Account</h3>

          <input
            className="inputV"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="inputV"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="buttonIN" id="Login" type="submit">Log In</button>
        </form>
      </div>


      <div className="sign-up-container">
        <SignUp />

      </div>

      <div className="user-container">
        <AuthDetails />
      </div>




    </div>
  );
};

export default SignIn;