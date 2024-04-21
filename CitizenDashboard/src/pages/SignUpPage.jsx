import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onSignInTextClick = useCallback(() => {
    navigate("/signinpage");
  }, [navigate]);

  const onHomeDuotoneClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle changes in the password input field
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to handle changes in the confirm password input field
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  function submitInputs(e){
    e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const value = Object.fromEntries(formData.entries());
        const data = {
          firstname:value.firstName,
          lastname:value.lastName,
          email:value.email,
          password:value.password
        };
      let user = {firstname: value.firstName, lastname:value.lastName}
      let user_str = JSON.stringify(user)
      localStorage.setItem(value.email, user_str)
    // console.log(value);
    axios.post("http://192.168.1.11:5000/api/v1/auth/register", data).then(response => {
      console.log(response.data)
      navigate("/signinpage")
    }).catch(error => {
      console.error(error)
    });
    
  };

  return (
    <div className="signuppage">
      <form className="rightpane" onSubmit={submitInputs}>
        <div className="sign-up">Sign Up</div>
        <div className="inputfield">
        <input
        className="email-address"
        name="email"
        style={{
          marginTop: '20px',
          borderWidth: '0',
          fontSize: '20px',
          fontFamily: 'Roboto, sans-serif',
          outline: 'none',
          paddingLeft: '10px',
          width: '750px',
          height: '35px',
          borderRadius: '10px',
        }}
      />
          <div className="email-address-wrapper">
          
            <div className="email-address">Email Address</div>
          </div>
        </div>
        <div className="inputfield1">
        <input
        className="email-address"
        name="NICNumber"
        style={{
          marginTop: '20px',
          borderWidth: '0',
          fontSize: '20px',
          fontFamily: 'Roboto, sans-serif',
          outline: 'none',
          paddingLeft: '10px',
          width: '750px',
          height: '35px',
          borderRadius: '10px',
        }}
      />
          <div className="email-address-wrapper">
            <div className="email-address">NIC Number</div>
          </div>
        </div>
        <div className="inputfield2">
        <input
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        className="email-address"
        style={{
          marginTop: '20px',
          borderWidth: '0',
          fontSize: '20px',
          fontFamily: 'Roboto, sans-serif',
          outline: 'none',
          paddingLeft: '10px',
          width: '750px',
          height: '35px',
          borderRadius: '10px',
        }}
      />
          <div className="email-address-wrapper">
            <div className="email-address">Password</div>
          </div>
        </div>
        <div className="inputfield3">
        <input
        type="password" // Set type to "password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        className="email-address"
        style={{
          marginTop: '20px',
          borderWidth: '0',
          fontSize: '20px',
          fontFamily: 'Roboto, sans-serif',
          outline: 'none',
          paddingLeft: '10px',
          width: '750px',
          height: '35px',
          borderRadius: '10px',
        }}
      />
          <div className="email-address-wrapper">
            <div className="email-address">Confirm Password {(password == confirmPassword && password != "") ? "✔":"✖"}</div>
          </div>
        </div>
        <div className="inputfield4">
        <input
        className="email-address"
        name="lastName"
        style={{
          marginTop: '20px',
          borderWidth: '0',
          fontSize: '20px',
          fontFamily: 'Roboto, sans-serif',
          outline: 'none',
          paddingLeft: '10px',
          width: '350px',
          height: '35px',
          borderRadius: '10px',
        }}
      />
          <div className="email-address-wrapper">
          
            <div className="email-address">Last Name</div>
          </div>
        </div>
        <div className="already-have-an-account-wrapper">
          <div className="email-address">Already have an account?</div>
        </div>
        <div className="sign-in" onClick={onSignInTextClick}>
          Sign In
        </div>
        <img
          className="home-duotone-icon"
          alt=""
          src="/home-duotone.svg"
          onClick={onHomeDuotoneClick}
        />
        <div className="hoveringbutton">
          <div className={(password == confirmPassword && password != "") ? "hoveringbutton-child":"hoveringbuttondisabled-child"} />
          <div className="add-button-text"><button className="submit-button" type="submit">Sign Up</button></div>
        </div>
        <div className="inputfield5">
        <input
        className="email-address"
        name="firstName"
        style={{
          marginTop: '20px',
          borderWidth: '0',
          fontSize: '20px',
          fontFamily: 'Roboto, sans-serif',
          outline: 'none',
          paddingLeft: '10px',
          width: '350px',
          height: '35px',
          borderRadius: '10px',
        }}
      />
        
          <div className="email-address-wrapper">
            <div className="email-address">First Name</div>
          </div>
        </div>
      </form>
      <img
        className="blurredellipses-icon"
        alt=""
        src="/blurredellipses1.svg"
      />
      <div className="leftpane">
        <div className="welcome-to-cookiewatch-container">
          <p className="welcome-to">{`Welcome to `}</p>
          <p className="welcome-to">
            <span>Cookie</span>
            <span className="watch">Watch</span>
          </p>
        </div>
        <img className="image-icon" alt="" src="/image@2x.png" />
      </div>
    </div>
  );
};

export default SignUpPage;
