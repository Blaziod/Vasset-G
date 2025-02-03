/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Ensure correct path

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading)
    return (
      <p
        style={{
          fontSize: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </p>
    ); // Prevent redirect loops while checking auth state

  return isAuthenticated() ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
