// File: src/context/AuthContext.jsx
<<<<<<< HEAD
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from "../services/api";
=======
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
<<<<<<< HEAD
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

=======
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
<<<<<<< HEAD
        console.error("Error parsing saved user:", error);
        localStorage.removeItem("user");
=======
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('user');
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
      }
    }
    setLoading(false);
  }, []);

  const login = async (userId, otp) => {
    try {
<<<<<<< HEAD
      const res = await api.post("/api/auth/verify-otp", { userId, otp });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      return res.data;
    } catch (error) {
      console.error("Login error:", error);
=======
      const res = await api.post('/api/auth/verify-otp', { userId, otp });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      return res.data;
    } catch (error) {
      console.error('Login error:', error);
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
      throw error;
    }
  };

  const register = async (data) => {
    try {
<<<<<<< HEAD
      const res = await api.post("/api/auth/register", data);
      return res.data.userId;
    } catch (error) {
      console.error("Register error:", error);
=======
      const res = await api.post('/api/auth/register', data);
      return res.data.userId;
    } catch (error) {
      console.error('Register error:', error);
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
      throw error;
    }
  };

  const sendOtp = async (phone) => {
    try {
<<<<<<< HEAD
      const res = await api.post("/api/auth/send-otp", { phone });
      return res.data.userId;
    } catch (error) {
      console.error("Send OTP error:", error);
=======
      const res = await api.post('/api/auth/send-otp', { phone });
      return res.data.userId;
    } catch (error) {
      console.error('Send OTP error:', error);
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
      throw error;
    }
  };

  const logout = () => {
<<<<<<< HEAD
    localStorage.removeItem("token");
    localStorage.removeItem("user");
=======
    localStorage.removeItem('token');
    localStorage.removeItem('user');
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    sendOtp,
    logout,
<<<<<<< HEAD
    loading,
=======
    loading
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

<<<<<<< HEAD
export default AuthContext;
=======
export default AuthContext;
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
