import React, { useState } from "react";
import "../src/assets/css/Login.css"; // ⭐ make sure path is correct

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="wrapper">
      <div className={`auth-container ${isRegister ? "register-mode" : ""}`}>
        {/* Forms Section */}
        <div className="forms-container">
          {/* Login Form */}
          <form className="login-form">
            <h2>Login</h2>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="fa fa-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="fa fa-lock"></i>
            </div>
            <button type="submit" className="Button">Login</button>
          </form>

          {/* Register Form */}
          <form className="register-form">
            <h2>Register</h2>
            <div className="input-box">
              <input type="text" placeholder="Full Name" required />
              <i className="fa fa-user"></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className="fa fa-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="fa fa-lock"></i>
            </div>
            <button type="submit" className="Button">Register</button>
          </form>
        </div>

        {/* Overlay Section */}
        <div className="overlay-container">
          {/* Left Side (Register Welcome) */}
          <div className="overlay-panel overlay-left">
            <h2>Hello, Welcome!</h2>
            <p>Don’t have an account? Register now and join us.</p>
           <div className="button-wrapper">
          <button className="Button" onClick={() => setIsRegister(true)}>
            Register
          </button>
        </div>
          </div>

          {/* Right Side (Login Welcome) */}
          <div className="overlay-panel overlay-right">
            <h2>Welcome Back!</h2>
            <p>Already have an account? Login with your details.</p>
            <button className="Button" onClick={() => setIsRegister(false)}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Auth;
