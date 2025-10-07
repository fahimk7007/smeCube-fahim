import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">Loading...</div>;

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;