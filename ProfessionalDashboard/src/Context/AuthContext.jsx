// This is the Auth Context file. It will be used to create a context for the authentication of the user.

// src/context/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../Services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);
    const [userProfile,setUserProfile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        

        fetchCurrentUser();
    }, []);

    // useEffect(() => {
    //     AuthService.getCurrentUser()
    //         .then(user => {
    //             setCurrentUser(user);
    //             setIsLoading(false);
    //         })
    //         .catch(error => {
    //             console.error("Failed to fetch current user:", error);
    //             setIsLoading(false);
    //         });
    // }, []);

    const fetchCurrentUser = async () => {
        setIsLoading(true);
        try {
            const user = await AuthService.getCurrentUser();
            setCurrentUser(user);
            if (user && user.access_token) {
                setUserProfile(AuthService.getProfile(user.access_token));
            }
        } catch (error) {
            console.error("Failed to fetch current user:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email, password) => {
        setIsLoading(true);
        let result = false;
        try {
            console.log(email, password);
            const user = await AuthService.login(email, password);
            if (user && user.access_token) {
                console.log(user);
                localStorage.setItem("user", JSON.stringify(user.access_token));
                
                // Ensure token is stored before fetching the profile
               // const profile = await AuthService.getProfile(user.access_token);  // Pass the accessToken directly
                //console.log(profile);
                setUserProfile(user.doctor);
    
                setCurrentUser(user);
                result = true;  // Set result to true only if everything above is successful
            } else {
                throw new Error("No access token received");
            }
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setIsLoading(false);
        }
        return result;
    };
    

    const register = async (username, email, password) => {
        setIsLoading(true);
        try {
            const user = await AuthService.register(username, email, password);
            setCurrentUser(user);
        } catch (error) {
            console.error("Registration failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        AuthService.logout();
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, isLoading, userProfile, fetchCurrentUser, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};