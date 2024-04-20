import React from 'react';
import './index.css';

import {useState} from 'react';

export default function Main(){
  const [formdata, setFormdata] = useState({
  first_name : "",
  last_name : "",
  user_name : "",
  national_id : "",
  email : "",
  phone : "",
  residential_location : "",
  speciality : "",
  liscense_number : "",
  working_locations : [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

return (
    <div className='main-container'>
      <div className='search'>
        <div className='search-1'>
          <div className='vector' />
        </div>
        <span className='search-text'>Search</span>
      </div>
      <div className='flex-row'>
        <div className='ellipse' />
        <div className='ellipse-2' />
        <div className='ellipse-3' />
        <div className='peak-user-settings'>
          <div className='header'>
            <div className='header-4'>
              <div className='icon-button'>
                <div className='button'>
                  <div className='sun' />
                </div>
                <div className='button-5'>
                  <div className='bell' />
                </div>
                <div className='profile-image' />
              </div>
              <div className='icon-breadcrumb'>
                <div className='breadcrumb'>
                  <div className='button-6'>
                    <span className='text' />
                  </div>
                  <div className='button-7'>
                    <span className='user-profile'>User Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-row-8'>
            <div className='general-info-photo'>
              <div className='flex-column'>
                <div className='group'>
                  <div className='group-a'>
                    <div className='ellipse-b' />
                  </div>
                  <div className='flex-column-c'>
                    <span className='dr-alaa-mohamed'>Dr.{formdata.first_name} {formdata.last_name}</span>
                    <span className='product-design'>{formdata.speciality}</span>
                    <span className='eet-cairo-utc'>
                      {formdata.liscense_number}
                    </span>
                  </div>
                </div>
              </div>
              <div className='row'>
                <button className='upload-photo-button'>
                  <span className='upload-new-photo'>Upload New Photo </span>
                </button>
                <button className='delete-button'>
                  <span className='delete'>Delete Photo</span>
                </button>
              </div>
            </div>
            <div className='frame' />
            <div className='activated-item' />
          </div>
          <div className='vector-c' />
          <div className='name'>
            <div className='flex-row-ed'>
              <span className='first-name'>First Name</span>
              <span className='last-name'>Last Name</span>
            </div>
            <div>
            <input
                type='text'
                name='first_name'
                value={formdata.first_name}
                onChange={handleChange}
                className='first-name-field'
                placeholder='First Name'
                />
            <input
                type='text'
                name='last_name'
                value={formdata.last_name}
                onChange={handleChange}
                className='name-field-d'
                placeholder='Last Name'
                />
            </div>
            <div className='flex-row-ef'>
            </div>
            <div className='flex-row-d'>
              <span className='user-name'>User Name</span>
              <span className='national-id'>National Id</span>
            </div>
            <div className='flex-row-acd'>
              <div className='name-field-e'>
                <input
                type='text'
                name='user_name'
                value={formdata.user_name}
                onChange={handleChange}
                className='name-field-e'
                placeholder='User Name'
                />
              </div>
              <div>
                <input
                type='text'
                name='national_id'
                value={formdata.national_id}
                onChange={handleChange}
                className='name-field-f'
                placeholder='National Id'
                />
              </div>
            </div>
          </div>
          <div className='email-phone'>
            <div className='flex-row-b'>
              <span className='email-address'>Email Address</span>
              <span className='phone-number'>Phone Number</span>
            </div>
            <div className='flex-row-a'>
              <div>
                <input
                type='text'
                name='email'
                value={formdata.email}
                onChange={handleChange}
                className='email-field'
                placeholder='Email Address'
                />
              </div>
              <div>
                <input
                type='text'
                name='phone'
                value={formdata.phone}
                onChange={handleChange}
                className='phone-field'
                placeholder='Phone Number'
                /> 
              </div>
            </div>
          </div>
          <div className='vector-12' />
          <div className='flex-row-fb'>
            <button className='cancel-button'>
              <span className='cancel'>Cancel</span>
            </button>
            <button className='save-button'>
              <span className='text-13'>Save Changes</span>
            </button>
          </div>
          <div className='flex-row-14'>
            <div className='companies'>
              <span className='working-locations'>Working Locations</span>
              <div className='company'>
                <div className='company-icon'>
                  <div className='ellipse-15' />
                  <div className='ellipse-16' />
                  <div className='ellipse-17' />
                </div>
                <span className='procrew'>ProCrew</span>
              </div>
              <div className='company-18'>
                <span className='noon'>Noon</span>
              </div>
              <div className='company-19'>
                <span className='lamasatech'>LamasaTech</span>
              </div>
            </div>
            <div className='vector-1a' />
            <div className='vector-1b' />
            <div className='location'>
              <div className='location-undefined-glyph'>
                <div className='vector-1c' />
              </div>
              <span className='residential-location'>Residential Location</span>
              <div>
                <input
                type='text'
                name='residential_location'
                value={formdata.residential_location}
                onChange={handleChange}
                className='location-field'
                placeholder='Residential Location'
                />
              </div>
            </div>
          </div>
          <div className='vector-1f' />
        </div>
        <div className='rectangle' />
        <div className='search-20'>
          <input className='search-input' />
          <div className='search-21'>
            <div className='vector-22' />
          </div>
          <span className='text-23'>Search</span>
        </div>
        <span className='your-profile'>Your Profile</span>
        <span className='generate-medical-records'>
          Generate Medical Records
        </span>
        <div className='frame-24'>
          <span className='view-medical-records'>View Medical Records</span>
        </div>
        <div className='frame-25'>
          <span className='hospital-admission'>Hospital Admission</span>
        </div>
        <div className='rectangle-26'>
          <span className='sign-out'>Sign out</span>
        </div>
      </div>
    </div>
  );
}
