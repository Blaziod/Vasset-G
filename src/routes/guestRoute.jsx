/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const GuestRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated() ? children : <Navigate to="/dashboard" />;
};

export default GuestRoute;
