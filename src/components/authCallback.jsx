import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const isAuthProcessed = useRef(false); // Prevent duplicate execution

  useEffect(() => {
    if (isAuthProcessed.current) return; // Prevent re-execution

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

    isAuthProcessed.current = true;
  }, [navigate, login]);

  return <p>Authenticating...</p>;
};

export default AuthCallback;
