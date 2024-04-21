import React from 'react';
import './viewmedicals.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {useState} from 'react';


export default function Viewmedicals() {

  const [search, setSearch] = useState({
    NIC : '',
  });

  const [persondetails, setPersonDetails] = useState({
    databaseid : '',
    age : '',
    bloodtype : '',
    height : '',
    weight : '',
    email : '',
    phone : '',
    location : '',
    firstname : '',
    lastname : '',
    username : '',
    nic:'',
  });

  const url = `http://192.168.1.11:5000/api/v1/doctor/citizen/`;

  const handleSearchChange = (e) => {
    setSearch({NIC : e.target.value});
  }

  const handleSearch = async (e) => {
    console.log("clicking");
    e.preventDefault();
    const response = await axios.get(url+`${search.NIC}`);
    console.log(response.data);

    const calculatedAge = "24";

    const location1 = response.data.latitude+"+"+response.data.longitude;

    if(response.status === 200){
      setPersonDetails({
        id: response.data.id,
        age : calculatedAge,
        bloodtype : response.data.bloodType,
        height : response.data.height,
        weight : response.data.weight,
        email : response.data.email,
        phone : response.data.contactNo,
        location : location1,
        firstname : response.data.firstName,
        lastname : response.data.lastName,
        username : response.data.username,
        nic : response.data.nationalID,
      });
    }
  }

  return (
    <div className='c-main-container'>
      <div className='c-ellipse' />
      <div className='c-ellipse-1' />
      <div className='c-ellipse-2' />
      <div className='c-search'>
        <div className='c-search-3'>
          <div className='c-vector' />
        </div>
        <span className='c-text'>Search</span>
      </div>
      <div className='c-peak-user-settings'>
        <div className='c-header'>
          <div className='c-header-4'>
            <div className='c-icon-button'>
              <div className='c-button'>
                <div className='c-sun' />
              </div>
              <div className='c-button-5'>
                <div className='c-bell' />
              </div>
              <div className='c-profile-image' />
            </div>
            <div className='c-icon-breadcrumb'>
              <div className='c-breadcrumb'>
                <div className='c-button-6'>
                  <span className='c-text-7' />
                </div>
                <div className='c-button-8'>
                  <span className='c-view-medical-records'>
                    View Medical Records of
                  </span>
                </div>
              </div>
            </div>
            <div className='c-search-9'>
              <input 
              text = 'NIC'
              onChange={handleSearchChange}
              value={search.NIC}
              className='c-search-input' 
              placeholder='NIC or Email'
              />
              <div className='c-search-a'>
                <div className='c-vector-b' />
              </div>
            </div>
            <div>
              <button onClick={handleSearch} className='c-save-button'>
              </button>
            </div>
            <div className='c-search-c'>
              <div className='c-vector-d' />
            </div>
          </div>
        </div>
        <div className='c-flex-row-fb'>
          <div className='c-general-info-photo'>
            <div className='c-group'>
              <div className='c-group-e'>
                <div className='c-ellipse-f' />
              </div>
              <div className='c-flex-column-f'>
                <span className='c-miss-alaa-mohamed'>{persondetails.firstname} {persondetails.lastname}</span>
                <span className='c-username'>{persondetails.username} </span>
                <span className='c-nic'>{persondetails.nic} </span>
              </div>
            </div>
          </div>
          <div className='c-frame' />
          <div className='c-activated-item' />
        </div>
        <div className='c-flex-row-f'>
          <div className='c-regroup'>
            <div className='c-name-field'>
              <span className='c-blood-type'>Blood Type</span>
              <div className='c-name-field-10'>
              <span className='c-age2'>{persondetails.bloodtype}</span>
                </div>
            </div>
            <div className='c-name'>
              <span className='c-height'>Height</span>
              <div className='c-name-field-11'>
              <span className='c-age2'>{persondetails.height}m</span>
              </div>
            </div>
            <div className='c-name-12'>
              <span className='c-weight'>Weight</span>
              <div className='c-name-field-13'>
              <span className='c-age2'>{persondetails.weight}kg</span>
              </div>
            </div>
          </div>
          <div className='c-name-14'>
            <span className='c-age'>Age</span>
            <div className='c-name-field-15'>
            <span className='c-age2'>{persondetails.age}yrs</span>
            </div>
          </div>
        </div>
        <div className='c-email-phone'>
          <div className='c-flex-row-f-16'>
            <span className='c-email-address'>Email Address</span>
            <span className='c-phone-number'>Phone Number</span>
          </div>
          <div className='c-flex-row-fd'>
            <div className='c-email-field'>
              <span className='c-age2'>{persondetails.email}</span>
            </div>
            <div className='c-phone-field'>
              <span className='c-age3'>{persondetails.phone}</span>
              </div>
          </div>
        </div>
        <div className='c-location'>
          <span className='c-residential-location'>Residential Location</span>
          <div className='c-location-field'>
            <span className='c-age2'>{persondetails.location}</span>
            </div>
        </div>
        <div className='c-vector-17' />
        <div className='c-flex-row-e'>
          <div className='c-enter-hospital'>
            <div className='c-flex-row'>
              <div className='c-location-field-18' />
              <span className='c-record-id'>Record Id</span>
              <span className='c-date'>Date</span>
              <span className='c-hospital-id'>Hospital Id</span>
              <span className='c-disease-id'>Disease Id</span>
              <span className='c-prescriptions'>Prescriptions</span>
            </div>
            <div className='c-location-field-19'>
              </div>
            <div className='c-location-field-1a'>
              </div>
            <div className='c-location-field-1b'>
              </div>
            <div className='c-location-field-1c'>
              </div>
            <div className='c-location-field-1d' />
            <div className='c-location-field-1e' />
            <div className='c-location-field-1f' />
            <div className='c-flex-row-e-20'>
              <div className='c-location-field-21' />
              <div className='c-location-field-22' />
            </div>
            <div className='c-location-field-23' />
            <div className='c-location-field-24' />
          </div>
          <div className='c-line' />
          <div className='c-line-25' />
          <div className='c-line-26' />
          <div className='c-line-27' />
        </div>
        <button className='c-save-button-28'>
          <span className='c-see-more'>See more..</span>
        </button>
        <div className='c-vector-29' />
      </div>
      <div className='c-rectangle'>
        <span className='c-medical-records'>Medical Records</span>
      </div>
      <div className='c-search-2a'>
        <input className='c-search-input-2b' />
        <div className='c-search-2c'>
          <div className='c-vector-2d' />
        </div>
        <span className='c-search-text'>Search</span>
      </div>
      <Link to='/userprofile'>
      <span className='c-your-profile'>Your Profile</span>
      </Link>
      <Link to='/generatemedicals'>
      <span className='c-generate-records'>Generate Medical Records</span>
      </Link>
      <div className='c-frame-2e'>
        <span className='c-view-records'>View Medical Records</span>
      </div>
      <div className='c-frame-2f'>
        <span className='c-hospital-admission'>Hospital Admission</span>
      </div>
      <Link to="/">
      <button className='c-rectangle-30'>
        <span className='c-sign-out'>Sign out</span>
      </button>
      </Link>
    </div>
  );
}
