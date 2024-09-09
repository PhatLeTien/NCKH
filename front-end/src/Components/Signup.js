import React from 'react';
import { FaArrowLeft, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import '../Style/Signup.css'; // Assuming CSS file is in the same directory

function Signup() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <div className="input-with-icon">
            <FaUser className="icon" />
            <input type="text" id="username" name="username" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-with-icon">
            <FaEnvelope className="icon" />
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-with-icon">
            <FaLock className="icon" />
            <input type="password" id="password" name="password" required />
          </div>
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <div className="login-link">
          <p>Already have an account? <a href="/home">Login</a></p>
        </div>      
        <div className="back-to-home-signup-link">
          <FaArrowLeft className="icon" />
          <a href="/home">Back To Home</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
