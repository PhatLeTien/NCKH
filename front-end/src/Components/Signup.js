import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import '../Style/Signup.css'; // Assuming CSS file is in the same directory
import requestApi from '../helpers/api';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate()
  const [signupData, setSignupData] = useState({});
  const [isSubmitted, setIsSubmited] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (isSubmitted) {
        validateForm();
    }
}, [signupData])


    //Hàm onchange
    const onChange = (event) => {
      let target = event.target;
      setSignupData({
        ...signupData,
        [target.name]: target.value
      });
    };


    //Hafm submit
  const onSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(signupData);
    let valid = validateForm();
    if (valid) {
      // Proceed with form submission logic
      requestApi('/auth/register', 'POST', signupData).then((res)=> {
        console.log(res);
        navigate('/login')
      }).catch(err=> {
        console.log(err);
        
      })
    }
    setIsSubmited(true);
    
  };


  //kiểm tra nhập liệu
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!signupData.username) {
      errors.username = "Please enter name";
    }
    if (!signupData.email) {
      errors.email = "Please enter email";
    } else {
      let valid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(signupData.email);
      if (!valid) {
        errors.email = "Email is not valid";
      }
    }

    if (!signupData.password) {
      errors.password = "Please enter password";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      isValid = false;
    } else {
      setFormErrors({});
    }

    return isValid;
  };


  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit} >
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <div className="input-with-icon">
            <FaUser className="icon" />
            <input type="text" id="name" name="username" onChange={onChange} />
          </div>
          {formErrors.username && <p style={{ color: 'red' }}>{formErrors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-with-icon">
            <FaEnvelope className="icon" />
            <input type="email" id="email" name="email" onChange={onChange} />
          </div>
          {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-with-icon">
            <FaLock className="icon" />
            <input type="password" id="password" name="password" onChange={onChange}/>
          </div>
          {formErrors.password && <p style={{ color: 'red' }}>{formErrors.password}</p>}
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
