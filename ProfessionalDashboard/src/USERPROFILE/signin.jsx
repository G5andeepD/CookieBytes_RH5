import React from 'react';
import './signin.css';

import { Component } from 'react';
import axios from 'axios';
import { setAuthToken } from '../setAuthToken()';


import { useState } from 'react';

export default function SignIN() {

  const [signinfo, setsigninfo] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setsigninfo({
      ...signinfo,
      [e.target.name]: e.target.value
    });
  }

  const url = `http://192.168.1.11:5000`;

  const handleSubmit = (e) => {
     e.preventDefault()
        console.log(signinfo)
			  axios.post(url+`/api/v1/auth/authenticate`,signinfo,{
                headers: {
                  'Access-Control-Allow-Origin': true,
                },
                } )
			.then(response => {
                
				console.log(response)
                const token = response.data.access;

                localStorage.setItem("token", token);

                setAuthToken(token);
                window.location.href = '/userprofile'
			})
            
			.catch(error => {
				console.log(error)
			})
  }

  return (
    <div className='b-main-container'>
      <div className='b-search'>
        <div className='b-search-1'>
          <div className='b-vector' />
        </div>
        <span className='b-text'>Search</span>
      </div>
      <div className='b-flex-row-de'>
        <div className='b-ellipse' />
        <div className='b-ellipse-2' />
        <div className='b-ellipse-3' />
        <div className='b-rectangle'>
          <span className='b-sign-in'>Sign In</span>
          <span className='b-nic-email'>NIC or Email</span>
          <div className='b-name-field'>
            <input
              type='text'
              className='b-email-field'
              name='email'
              value={signinfo.email}
              onChange={handleChange}
              placeholder='Enter your NIC or Email'
            />
          </div>
          <span className='b-password'>Password</span>
          <div className='b-password-field-4'>
            <input
              type='password'
              className='b-pw-field'
              name='password'
              value={signinfo.password}
              onChange={handleChange}
              placeholder='Enter your password'
            />
          </div>
          <span className='b-forgot-password'>Forgot Password?</span>
          <span className='b-account-registration'>
            
            Don't have an account yet? 
          </span>
          <span className='b-sign-up'>Sign Up</span>
          <button className='b-rectangle-5' onClick={handleSubmit}>
          <span className='b-add-button-text'>Sign In</span>
          </button>
        </div>
        <div className='b-welcome-to-cookiewatch'>
          <span className='b-welcome-to-cookie'>Welcome to Cookie</span>
          <span className='b-watch'>Watch</span>
        </div>
        <div className='b-image' />
      </div>
    </div>
  );
}
