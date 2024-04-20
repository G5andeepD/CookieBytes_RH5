// This is the auth service, it is used to make HTTP requests to the backend for auth.
// src/services/AuthService.jsx

import axios from 'axios';
import { LOCAL_HOST_URL } from '../constants';

const API_URL = `${LOCAL_HOST_URL}/auth/`;

const register = async (email, password) => {
    const response = await axios.post(API_URL + 'register', { email, password });
    if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const login = async (email, password) => {
    const response = await axios.post(API_URL + 'authenticate', { email, password });
    
    if (response.data.accessToken) {
        
        return response.data;
    } else {
        console.log("bad")
        return false;
    }
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export default {
    register,
    login,
    logout,
    getCurrentUser
};