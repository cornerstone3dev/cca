// src/auth.js
import axios from 'axios';
import { useEffect, useRef, useCallback } from 'react';
import mock_data from '../data/mock_auth_data.json';

const API_URL = 'http://localhost:4000'; // Replace with your backend URL
const mockUsers = mock_data.users || []; // Adjust based on the structure of your JSON data

export const mock_login_v2 = async (username, password) => {
    const user = mockUsers.find(user => user.username === username && user.password === password);
    
    if (user) {
        const token = `mock-jwt-token-${username}`;
        localStorage.setItem('token', token);
        return token;
    } else {
        throw new Error('Invalid credentials');
    }
};

const real_login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        const { token } = response.data;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        throw new Error('Invalid username or password');
    }
};

export const login = process.env.REACT_APP_MOCK_LOGIN === 'true' ? mock_login_v2 : real_login;

export const logout = () => {
    localStorage.removeItem('token');
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds

export const useAutoLogout = () => {
    const timeoutId = useRef(null);

    const resetTimeout = useCallback(() => {
        if (timeoutId.current) clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(() => {
            logout();
            window.location.href = '/home'; // Redirect to the login page after logout
        }, INACTIVITY_TIMEOUT);
    }, []);

    const handleUserActivity = useCallback(() => {
        resetTimeout(); // Reset the timeout whenever user is active
    }, [resetTimeout]);

    useEffect(() => {
        // Set the initial timeout when the component mounts
        resetTimeout();

        // Listen to various events indicating user activity
        window.addEventListener('mousemove', handleUserActivity);
        window.addEventListener('keypress', handleUserActivity);
        window.addEventListener('click', handleUserActivity);
        window.addEventListener('scroll', handleUserActivity);

        return () => {
            // Clean up event listeners and timeout on component unmount
            if (timeoutId.current) clearTimeout(timeoutId.current);
            window.removeEventListener('mousemove', handleUserActivity);
            window.removeEventListener('keypress', handleUserActivity);
            window.removeEventListener('click', handleUserActivity);
            window.removeEventListener('scroll', handleUserActivity);
        };
    }, [handleUserActivity, resetTimeout]); // Include dependencies
};


