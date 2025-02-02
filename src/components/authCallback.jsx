import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Ensure your Auth Context is properly set up
import { toast } from "react-toastify";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Assuming login function stores token in context/localStorage

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Store token (in localStorage or context)
      localStorage.setItem("authToken", token);
      login(token); // Call your auth context function

      toast.success("Login successful");

      // Redirect user to dashboard
      navigate("/dashboard");
    } else {
      toast.error("Authentication failed. No token received.");
      navigate("/login"); // Redirect back to login if there's an issue
    }
  }, [navigate, login]);

  return <p>Authenticating...</p>; // Show a simple message while redirecting
};

export default AuthCallback;
