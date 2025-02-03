import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuth({ token });
    }
    setLoading(false); // Authentication check complete
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setAuth({ token });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuth(null);
  };

  const isAuthenticated = () => !!auth;

  return (
    <AuthContext.Provider
      value={{ auth, login, logout, isAuthenticated, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
