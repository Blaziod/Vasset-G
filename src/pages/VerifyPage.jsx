/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const VerifyPage = () => {
  const API_URL = "https://vasset-kezx.onrender.com/api/v1";
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    const newOtp = [...otp];
    pasteData.split("").forEach((char, index) => {
      if (!isNaN(char)) {
        newOtp[index] = char;
      }
    });
    setOtp(newOtp);
  };

  const email = localStorage.getItem("userEmail");
  const signup_token = localStorage.getItem("SignUpToken");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = useAuth();

  const handleConfirm = async () => {
    const otpCode = otp.join(""); // Combine OTP into a single string
    if (otpCode.length < 6) {
      toast.error("Please complete the OTP.");
      return;
    }
    try {
      setIsLoading(true);

      // Add query parameters directly in the URL
      const requestUrl = `${API_URL}/users/verify-user?${qs.stringify({
        otp_code: otpCode,
        signup_token: signup_token,
      })}`;

      const response = await axios.post(requestUrl, null, {
        headers: {
          accept: "application/json", // Match Swagger headers
        },
      });

      setIsLoading(false);
      toast.success(response?.data?.message || "Verification successful");
      login(response?.data?.token); // Assuming the token is returned
      setIsLoggedIn(true);
    } catch (error) {
      console.error(
        "Verification failed",
        error.response?.data?.message || error.message
      );
      setIsLoading(false);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div
      style={{
        minHeight: "screen",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
      }}
    >
      <div style={{ width: "full", maxWidth: "xl" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <img
            src="/assets/Logo.png"
            alt="Logo"
            className="h-[120px] w-[200px]"
          />
        </div>
        {isLoading && (
          <div
            style={{
              paddingTop: "20px",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            Loading...
          </div>
        )}
        <div style={{ width: "100%" }}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "550",
              textAlign: "center",
              color: "#000",
            }}
          >
            Confirm your request
          </h1>
          <p
            style={{
              fontSize: "14px",
              textAlign: "center",
              color: "#000",
              marginTop: "10px",
            }}
          >
            Enter the OTP that we have emailed to
            <span
              style={{
                fontWeight: "bolder",
                whiteSpace: "nowrap",
                color: "#007A25",
              }}
            >
              {" "}
              {email}
            </span>{" "}
            to login.
          </p>
        </div>

        <div
          style={{
            paddingTop: "30px",
            paddingBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            onPaste={handlePaste}
            style={{ justifyContent: "center", gap: "10px", display: "flex" }}
          >
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => {
                  const value = e.target.value;
                  if (!/^[0-9]$/.test(value) && value !== "") return; // Only allow numbers

                  const newOtp = [...otp];
                  newOtp[index] = value;
                  setOtp(newOtp);

                  // Move to next input if typing
                  if (value && e.target.nextSibling) {
                    e.target.nextSibling.focus();
                  }
                }}
                onKeyDown={(e) => {
                  const newOtp = [...otp];

                  if (e.key === "Backspace") {
                    // Clear current value
                    newOtp[index] = "";
                    setOtp(newOtp);

                    // Move to the previous input
                    if (e.target.previousSibling) {
                      e.target.previousSibling.focus();
                    }
                  }
                }}
                style={{
                  width: "7%",
                  height: "50px",
                  textAlign: "center",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)",
                  transition: "box-shadow 0.2s ease-in-out",
                  caretColor: "rgba(74, 222, 128, 1)",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)"; // Green outline on focus
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)"; // Remove outline on blur
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              width: "20%",
              padding: "0.5rem",
              backgroundColor: "#007A25",
              color: "white",
              borderRadius: "0.375rem",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#00591A")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007A25")}
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>

        <div style={{ paddingTop: "20px", width: "100%" }}>
          <p
            style={{
              fontSize: "14px",
              color: "#000",
              paddingTop: "10px",
              textAlign: "center",
            }}
          >
            Please check spam box too if you can't find the email in your inbox.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#000",
              paddingTop: "10px",
              textAlign: "center",
            }}
          >
            Still can’t find it?{" "}
            <span
              style={{ color: "#007A25", cursor: "pointer" }}
              className="font-bold"
            >
              Resend
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
