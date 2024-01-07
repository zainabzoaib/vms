// PrivateRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
};

export default PrivateRoute;
