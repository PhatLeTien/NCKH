import React, { useEffect, useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import '../Style/Login.css';
import requestApi from '../helpers/api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({}); // Initialize as an empty object
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmited] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
        validateForm();
    }
}, [loginData])


  //Hàm onchange
  const onChange = (event) => {
    let target = event.target;
    setLoginData({
      ...loginData,
      [target.name]: target.value
    });
  };

//Hafm submit
  const onSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(loginData);
    let valid = validateForm();
    if (valid) {
      // Proceed with form submission logic
      requestApi('/auth/login', 'POST', loginData).then((res)=> {
        console.log(res);
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
        navigate('/')
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
    if (!loginData.email) {
      errors.email = "Please enter email";
    } else {
      let valid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginData.email);
      if (!valid) {
        errors.email = "Email is not valid";
      }
    }

    if (!loginData.password) {
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

 //required để hiện thị thông báo khi chưa nhập gì
  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <div className="input-with-icon">
            <FaUser className="icon" />
            <input type="text" id="email" name="email" onChange={onChange}/>
          </div>
          {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-with-icon">
            <FaLock className="icon" />
           
            <input type="password" id="password" name="password" onChange={onChange} required />
            
          </div>
          {formErrors.password && <p style={{ color: 'red' }}>{formErrors.password}</p>}
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="/">Forgot password?</a>
        </div>
        <button type="submit" className="btn-primary">Login</button>
      </form>
      <p>Don't have an account? <a href="/Signup">Sign Up</a></p>
    </div>
  );
}

export default Login;
