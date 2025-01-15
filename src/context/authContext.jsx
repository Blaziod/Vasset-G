import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Prop validation
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    // Check localStorage for an existing token
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuth({ token });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token); // Store the token
    setAuth({ token }); // Set auth state
  };

  const logout = () => {
    localStorage.removeItem("authToken"); // Clear token
    setAuth(null); // Clear auth state
  };

  const isAuthenticated = () => !!auth; // Return true if auth exists

  return (
    <AuthContext.Provider value={{ auth, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
