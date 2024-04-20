import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

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

  return (
    <div className="signuppage">
      <div className="rightpane">
        <div className="sign-up">Sign Up</div>
        <div className="inputfield">
        <input
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
          
            <div className="email-address">Email Address</div>
          </div>
        </div>
        <div className="inputfield1">
        <input
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
            <div className="email-address">NIC Number</div>
          </div>
        </div>
        <div className="inputfield2">
        <input
        type="password" // Set type to "password"
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
            <div className="email-address">Confirm Password</div>
          </div>
        </div>
        <div className="inputfield4">
        <input
        className="email-address"
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
          <div className="hoveringbutton-child" />
          <div className="add-button-text"><Link to="/signinpage">Sign Up</Link></div>
        </div>
        <div className="inputfield5">
        <input
        className="email-address"
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
      </div>
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
