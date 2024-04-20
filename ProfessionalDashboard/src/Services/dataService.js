import axios from "axios";
import { LOCAL_HOST_URL } from '../constants';

const API_URL = `${LOCAL_HOST_URL}doctor/`;

// Retrieve accessToken from localStorage
const getAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.accessToken;
};

// Get all drugs
export const getAllDrugs = async () => {
  try {
    const response = await axios.get(API_URL + "drug"
    // , {
    //   headers: {
    //     Authorization: "Bearer " + getAccessToken(),
    //   },
    // }
);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch drugs:', error);
    return null; // or handle error more specifically if needed
  }
};

// Get all diseases
export const getAllDiseases = async () => {
  try {
    const response = await axios.get(API_URL + "disease"
    // , {
    //   headers: {
    //     Authorization: "Bearer " + getAccessToken(),
    //   },
    // }
)
    ;
    return response.data;
  } catch (error) {
    console.error('Failed to fetch diseases:', error);
    return null; // or handle error more specifically if needed
  }
};
