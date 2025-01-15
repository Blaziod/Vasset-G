/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    // Check if the token exists in localStorage on initial load
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuth({ token });
    }
  }, []);

  const login = (token) => {
    // Save the token in localStorage
    localStorage.setItem("authToken", token);
    setAuth({ token });
  };

  const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("authToken");
    setAuth(null);
  };

  const isAuthenticated = () => {
    return !!auth;
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
