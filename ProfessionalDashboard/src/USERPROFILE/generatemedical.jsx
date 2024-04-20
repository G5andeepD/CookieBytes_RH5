import React from 'react';
import {toast} from 'react-toastify';
import './generatemedical.css';
import axios from 'axios';

import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function GenerateMedicals() {

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

  const [medicaldetails, setMedicaldetails] = useState({
    diagnosis : '',
    medications : '',
    comments : '',
  });

  const handleSearchChange = (e) => {
    setSearch({NIC : e.target.value});
  }

  const handleSearch = async (e) => {
    console.log("clicking");
    e.preventDefault();
    const response = await axios.get(url+`${search.NIC}`);
    console.log(response.data);

    const calculatedAge = "24";

    if(response.status === 200){
      setPersonDetails({
        id: response.data.id,
        age : calculatedAge,
        bloodtype : response.data.bloodType,
        height : response.data.height,
        weight : response.data.weight,
        email : response.data.email,
        phone : response.data.contactNo,
        location : response.data.location,
        firstname : response.data.firstName,
        lastname : response.data.lastName,
        username : response.data.username,
        nic : response.data.nationalID,
      });
    }
  }

  const handlePersonDetailsChange = (e) => {
    setPersonDetails({...persondetails, [e.target.name] : e.target.value});
  }

  const handleMedicalDetailsChange = (e) => {
    const{name, value} = e.target;
    setMedicaldetails({
      ...medicaldetails,
      [name] : value
    });
  }


  return (
    <div className='a-main-container'>
      <div className='a-search'>
        <div className='a-search-1'>
          <div className='a-vector' />
        </div>
        <span className='a-search-text'>Search</span>
      </div>
      <div className='a-flex-row-af'>
        <div className='a-ellipse' />
        <div className='a-ellipse-2' />
        <div className='a-ellipse-3' />
        <div className='a-peak-user-settings'>
          <div className='a-header'>
            <div className='a-header-4'>
              <div className='a-icon-button'>
                <div className='a-button'>
                  <div className='a-sun' />
                </div>
                <div className='a-button-5'>
                  <div className='a-bell' />
                </div>
                <div className='a-profile-image' />
              </div>
              <div className='a-icon-breadcrumb'>
                <div className='a-breadcrumb'>
                  <div className='a-button-6'>
                    <span className='a-text' />
                  </div>
                  <div className='a-button-7'>
                    <span className='a-text-8'>Generate Medical Records for</span>
                  </div>
                </div>
              </div>
              <div className='a-search-9'>
                <input
                  text='text'
                  className='a-search-input'
                  placeholder='Search by NIC or Email'
                  value={search.NIC}
                  onChange={handleSearchChange}
                />
                <div className='a-search-a'>
                  <div className='a-vector-b' />
                </div>
              </div>
              <button className='a-save-button111' onClick={handleSearch}>
              </button>
              <div className='a-search-d'>
                <div className='a-vector-e' />
              </div>
            </div>
          </div>
          <div className='a-flex-row-f'>
            <div className='a-general-info-photo'>
              <div className='a-group'>
                <div className='a-group-f'>
                  <div className='a-ellipse-10' />
                </div>
                <div className='a-flex-column-f'>
                  <span className='a-miss-alaa-mohamed'>{persondetails.firstname} {persondetails.lastname}</span>
                  <span className='a-username'>{persondetails.username} </span>
                  <span className='a-nic'>{persondetails.nic} </span>
                </div>
              </div>
            </div>
            <div className='a-frame' />
          </div>
          <div className='a-flex-row-e'>
            <div className='a-activated-item' />
            <div className='a-regroup'>
              <div className='a-name'>
                <span className='a-blood-type'>Blood Type</span>
                <div className='a-name-field'>
                  <span className='a-age3'>{persondetails.bloodtype}</span>
                </div>
              </div>
              <div className='a-name-11'>
                <span className='a-height'>Height</span>
                <div className='a-name-field-12'>
                  <span className='a-age4'>{persondetails.height} m</span>
                </div>
              </div>
              <div className='a-name-13'>
                <span className='a-weight'>Weight</span>
                <div className='a-name-field-14'>
                  <span className='a-age5'>{persondetails.weight} kg</span>
                </div>
              </div>
            </div>
            <div className='a-name-15'>
              <span className='a-age'>Age</span>
              <div className='a-name-field-16'>
                <span className='a-age2'>{persondetails.age} yrs</span>
              </div>
            </div>
          </div>
          <div className='a-email-phone'>
            <div className='a-flex-row-f-17'>
              <span className='a-email-address'>Email Address</span>
              <span className='a-phone-number'>Phone Number</span>
            </div>
            <div className='a-flex-row-fd'>
              <div className='a-email-field'>
                <span className='a-age5'>{persondetails.email}</span>
              </div>
              <div className='a-phone-field'>
                <span className='a-age6'>{persondetails.phone}</span>
              </div>
            </div>
          </div>
          <div className='a-location'>
            <span className='a-residential-location'>Residential Location</span>
            <div className='a-location-field'>
              <span className='a-age6'>{persondetails.location}</span>
            </div>
          </div>
          <div className='a-vector-18' />
          <div className='a-flex-row-ea'>
            <div className='a-name-19'>
              <span className='a-diagnosis'>Diagnosis</span>
              <div>
              <input
                type='text'
               className='a-name-field-1a'
                name='diagnosis'
                value={medicaldetails.diagnosis}
                onChange={handleMedicalDetailsChange}
                placeholder='Medical Diagnosis'
               />
              </div>
            </div>
            <div className='a-name-1b'>
              <span className='a-medications'>Medications</span>
              <div>
              <input
                type='text'
                className='a-name-field-1c'
                name='medications'
                value={medicaldetails.medications}
                onChange={handleMedicalDetailsChange}
                placeholder='Medications'
              />
              </div>
            </div>
          </div>
          <div className='a-name-1e'>
            <span className='a-comments'>Comments</span>
            <div>
            <input
              type='text'
              className='a-name-field-1f'
              name='comments'
              value={medicaldetails.comments}
              onChange={handleMedicalDetailsChange}
              placeholder='Comments'
            />
            </div>
          </div>
          <div className='a-flex-row-fbe'>
            <button className='a-cancel-button'>
              <span className='a-cancel'>Cancel</span>
            </button>
            <button className='a-save-button-21'>
              <span className='a-text-22'>Save Changes</span>
            </button>
          </div>
          <div className='a-vector-23' />
        </div>
        <div className='a-rectangle'>
          <span className='a-medical-report'>Medical Report of {persondetails.firstname} {persondetails.lastname}</span>
        </div>
        <div className='a-search-24'>
          <input className='a-search-input-25' />
          <div className='a-search-26'>
            <div className='a-vector-27' />
          </div>
          <span className='a-text-28'>Search</span>
        </div>
        <Link to='/userprofile'>
        <span className='a-your-profile'>Your Profile</span>
        </Link>
        <span className='a-generate-medical-records'>
          Generate Medical Records
        </span>
        <div className='a-frame-29'>
          <Link to='/viewmedicals'>
          <span className='a-view-medical-records'>View Medical Records</span>
          </Link>
        </div>
        <div className='a-frame-2a'>
          <span className='a-hospital-admission'>Hospital Admission</span>
        </div>
        <Link to="/">
      <button className='a-rectangle-2b'>
        <span className='a-sign-out'>Sign out</span>
      </button>
      </Link>
      </div>
    </div>
  );
}
