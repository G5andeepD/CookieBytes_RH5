import React from 'react';
import {toast} from 'react-toastify';
import './generatemedical.css';
import axios from 'axios';
import {useState,useContext} from 'react';
import { LOCAL_HOST_URL,LOCAL_SERVER_URL } from '../constants';
import { DataContext } from '../Context/DataContext';
import { Link } from 'react-router-dom';

export default function GenerateMedicals() {
  const { drugs } = useContext(DataContext);

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

  const [prescriptions, setPrescriptions] = useState([{
    drugId: 0,
    startDate: '',
    endDate: '',
    morning: false,
    afternoon: false,
    evening: false,
    night: false
  }]);

  const handlePrescriptionChange = (index, e) => {
    const newPrescriptions = [...prescriptions];
    if (e.target.type === 'checkbox') {
      newPrescriptions[index][e.target.name] = e.target.checked;
    } else {
      newPrescriptions[index][e.target.name] = e.target.value;
    }
    setPrescriptions(newPrescriptions);
  };

  const addPrescription = () => {
    setPrescriptions([...prescriptions, {
      drugId: '',
      startDate: '',
      endDate: '',
      morning: false,
      afternoon: false,
      evening: false,
      night: false
    }]);
  };

  const removePrescription = index => {
    const filteredPrescriptions = prescriptions.filter((_, i) => i !== index);
    setPrescriptions(filteredPrescriptions);
  };


  const url = `${LOCAL_HOST_URL}doctor/citizen/`;
  console.log(url);

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
    console.log(url+`${search.NIC}`)
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

  const handleGenerateMedicalRecord = async () => {
    const medicalRecordData = {
      recordId: 0,
      date: new Date(),
      doctorId: 2,
      citizenId: parseInt(persondetails.id),
      healthCentreId: 1,
      admissionId: 1,
      prescriptions,
      diseaseIds: []
    };

    try {
      console.log(medicalRecordData);
      const response = await axios.post(`${LOCAL_HOST_URL}doctor/create-medical-record`, medicalRecordData);
      if (response.status === 200) {
        toast.success('Medical record generated successfully!');
      } else {
        toast.error('Failed to generate medical record.');
      }
    } catch (error) {
      console.error('Failed to generate medical record:', error);
      toast.error('Error generating medical record.');
    }
  };
  


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
        {prescriptions.map((prescription, index) => (
          <div key={index} className="prescription-item">
          <div className="input-group">
          <select className='a-addbutton1112'>
        {drugs.map(drug => (
          <option key={drug.id} value={drug.id}>{drug.name}</option>
        ))}
      </select>
          </div>
          <div className="input-group">
            <input
              type="date"
              className="form-control"
              placeholder="Start Date"
              name="startDate"
              value={prescription.startDate}
              onChange={e => handlePrescriptionChange(index, e)}
            />
          </div>
          <div className="input-group">
            <input
              type="date"
              className="form-control"
              placeholder="End Date"
              name="endDate"
              value={prescription.endDate}
              onChange={e => handlePrescriptionChange(index, e)}
            />
          </div>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                name="morning"
                checked={prescription.morning}
                onChange={e => handlePrescriptionChange(index, e)}
              /> Morning
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                name="afternoon"
                checked={prescription.afternoon}
                onChange={e => handlePrescriptionChange(index, e)}
              /> Afternoon
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                name="evening"
                checked={prescription.evening}
                onChange={e => handlePrescriptionChange(index, e)}
              /> Evening
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                name="night"
                checked={prescription.night}
                onChange={e => handlePrescriptionChange(index, e)}
              /> Night
            </label>
          </div>
          <button className="button btn-delete" onClick={() => removePrescription(index)}>
            Remove
          </button>
        </div>
        
        ))}
        <button className='a-addbutton111' onClick={addPrescription}>Add Prescription</button>
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
            <button className='a-save-button-21' onClick={handleGenerateMedicalRecord}>
              <span className='a-text-22'>Generate Medical Record</span>
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
