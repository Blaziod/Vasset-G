/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const authToken = localStorage.getItem("access_token");
  const location = useLocation();

  // List of restricted pages when authenticated
  const restrictedPages = ["/auth", "/verify", "/auth/callback"];

  useEffect(() => {
    if (authToken && restrictedPages.includes(location.pathname)) {
      window.location.href = "/dashboard"; // Redirect if token exists
    }
  }, [authToken, location.pathname]);

  return authToken && restrictedPages.includes(location.pathname)
    ? null
    : children;
};

export default GuestRoute;
