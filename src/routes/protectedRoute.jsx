/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  console.log("ProtectedRoute - isAuthenticated:", isAuthenticated());

  return isAuthenticated() ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
