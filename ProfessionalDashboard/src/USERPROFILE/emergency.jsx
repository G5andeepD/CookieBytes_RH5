import React from 'react';
import './emergency.css';

import {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function EmergencyPage() {

  const [data, setdata] = useState({
    mobileNumber : '',
    location : '',
  });

  const onMobileNumberChange = (e) => {
    setdata({mobileNumber : e.target.value});
  }

  const onLocationChange = (e) => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setdata({location : position.coords.latitude + ',' + position.coords.longitude});
    });
  }

  const url = 'http://localhost:5000/api/emergency';

  const onSubmit = () => {
    // axios.post(url, data)
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    window.location.href = '/';
  }


  return (
    <div className='e-main-container'>
      <div className='e-search'>
        <div className='e-search-1'>
          <div className='e-vector' />
        </div>
        <span className='e-search-2'>Search</span>
      </div>
      <div className='e-flex-row-de'>
        <div className='e-ellipse' />
        <div className='e-ellipse-3' />
        <div className='e-ellipse-4' />
        <div className='e-rectangle'>
          <span className='e-mobile-number'>Your Mobile Number</span>
          <div>
            <input
              type='text'
              className='e-name-field'
              value={data.mobileNumber}
              onChange={onMobileNumberChange}
            />
          </div>
          <span className='e-reaching-out-soon'>
            Don’t Worry We'll be reaching out to you soon.
          </span>
          <span className='e-immediate-assistance'>
            Do you require immediate
          </span>
          <span className='e-medical-support'>
            medical assistance or support?
          </span>
          <div className='e-name-field-5'>
            <button className='e-vector-6' onClick={onLocationChange}>
              </button>
          </div>
          <div>
          <span className='e-add-location'>Add your Location</span>
          </div>
          <button className='e-rectangle-7' onClick={onSubmit}/>
          <span className='e-add-button'>Submit</span>
        </div>
        <span className='e-welcome-cookie-watch'>
          CookieWatch
          <br />
          Emergency
          <br />
          PORTAL
        </span>
        <div className='e-image' />
      </div>
    </div>
  );
}
