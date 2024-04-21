import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInPage.css";
import React, { useState } from 'react';
import axios from "axios";

const SignInPage = () => {
  const navigate = useNavigate();

  const onSignUpTextClick = useCallback(() => {
    navigate("/signuppage");
  }, [navigate]);

  const onHomeDuotoneClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  function submitInputs(e){

  };

  function submitInputs(e){
    e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const value = Object.fromEntries(formData.entries());
        const data = {
          email:value.NICNumber,
          password:value.password
        };
    console.log(value);
    // let loginUser = {cur_email:value.NICNumber}
    // let loginUser_str = JSON.stringify(loginUser)
    localStorage.setItem("currentEmail", value.NICNumber);
    axios.post("http://192.168.1.11:5000/api/v1/auth/authenticate", data).then(response => {
      console.log(response.data)
      localStorage.setItem("token", response.data.access_token)
      navigate("/citizenuserprofile")
    }).catch(error => {
      console.error(error)
    });
  };

  return (
    <div className="signinpage">
      <form className="rightpane1" onSubmit={submitInputs}>
        <div className="sign-in1">Sign in</div>
        <div className="rightpane-inner">
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
          width: '350px',
          height: '35px',
          borderRadius: '10px',
        }}
      />
          <div className="nic-number-or-email-wrapper">
            <div className="nic-number-or">NIC Number or email</div>
          </div>
        </div>
        <div className="frame-parent">
        <input
        type="password"
        className="email-address"
        name="password"
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
          <div className="nic-number-or-email-wrapper">
            <div className="nic-number-or">Password</div>
          </div>
          <div className="frame-child" />
        </div>
        <div className="sign-up1" onClick={onSignUpTextClick}>
          Sign Up
        </div>
        <div className="dont-have-an">{` Don't have an account yet?  `}</div>
        <div className="forgot-password">Forgot Password?</div>
        <img
          className="home-duotone-icon1"
          alt=""
          src="/home-duotone.svg"
          onClick={onHomeDuotoneClick}
        />
        <div className="hoveringbutton1">
          <div className="hoveringbutton-item" />
          <div className="add-button-text1"><button className="submit-button" type="submit">Sign In</button></div>
        </div>
      </form>
      <img
        className="blurredellipses-icon1"
        alt=""
        src="/blurredellipses1.svg"
      />
      <div className="leftpane1">
        <div className="welcome-to-cookiewatch-container1">
          <span>Welcome to Cookie</span>
          <span className="watch1">Watch</span>
        </div>
        <img className="image-icon1" alt="" src="/image@2x.png" />
      </div>
    </div>
  );
};

export default SignInPage;
