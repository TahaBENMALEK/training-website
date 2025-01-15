import React, { useState } from 'react'
import '../styles/Login.css'
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//in this page we have a login form
const Login = () => {
  const [action, setAction] = useState("Login");
  
  return (
    <div>
       <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <FaUserAlt className="icon"/>
            <input type="text" placeholder="User name" />
          </div>
        )}
        <div className="input">
           <MdEmail className="icon" />
           <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <FaLock className="icon" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default Login;
