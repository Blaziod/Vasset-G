import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Ensure correct path

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <p>Loading...</p>; // Prevent redirect loops while checking auth state

  return isAuthenticated() ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
