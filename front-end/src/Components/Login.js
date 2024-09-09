import React from 'react';
import { FaArrowLeft, FaUser, FaLock } from "react-icons/fa";
import '../Style/Login.css';

function Login() {
  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <div className="input-with-icon">
            <FaUser className="icon" />
            <input type="text" id="username" name="username" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-with-icon">
            <FaLock className="icon" />
            <input type="password" id="password" name="password" required />
          </div>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="/">Forgot password?</a>
        </div>
        <button type="submit" className="btn-primary">Login</button>
      </form>
      <p>Don't have an account ? <a href="/Signup">Sign Up</a></p>
      <div className="back-to-home-login-link">
        <FaArrowLeft className="icon" />
        <a href="/home">Back To Home</a>
      </div>
    </div>
  );
}

export default Login;
