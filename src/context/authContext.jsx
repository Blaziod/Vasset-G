import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuth({ token });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setAuth({ token });
  };

  const logout = () => {
    console.log("Logging out...");
    localStorage.removeItem("authToken");
    setAuth(null); // Clear auth state
    console.log("Auth state cleared.");
  };

  const isAuthenticated = () => !!auth;

  return (
    <AuthContext.Provider value={{ auth, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
