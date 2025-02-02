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
      localStorage.setItem("authToken", token);
      login(token);

      toast.success("Login successful");

      navigate("/dashboard");
    } else {
      toast.error("Authentication failed. No token received.");
      navigate("/auth");
    }
  }, [navigate, login]);

  return <p>Authenticating...</p>; // Show a simple message while redirecting
};

export default AuthCallback;
