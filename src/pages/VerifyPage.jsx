/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const VerifyPage = () => {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F6F6]">
      <div className="w-full max-w-xl">
        <div className="flex justify-center mb-2">
          <img
            src="src/assets/Logo.png"
            alt="Logo"
            className="h-[120px] w-[200px]"
          />
        </div>
        <div className="w-full">
          <h1
            className="text-[#000000] text-center"
            style={{ fontSize: "40px", fontWeight: "550" }}
          >
            Confirm your request
          </h1>
          <p
            className="text-[#000000] text-center mt-2"
            style={{ fontSize: "14px" }}
          >
            Enter the OTP that we have emailed to
            <span className="font-bold whitespace-nowrap">
              {" "}
              aueibd6@gmail.com
            </span>{" "}
            to login.
          </p>
        </div>

        <div
          className="flex justify-center"
          style={{ paddingTop: "30px", paddingBottom: "20px" }}
        >
          <div
            className="flex space-x-2"
            onPaste={handlePaste}
            style={{ justifyContent: "center", gap: "10px" }}
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

        <div className="flex justify-center" style={{ paddingTop: "20px" }}>
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
          >
            Confirm
          </button>
        </div>

        <div className="w-full" style={{ paddingTop: "20px" }}>
          <p
            className="text-[#000000] text-center mt-2"
            style={{ fontSize: "14px" }}
          >
            Please check spam box too if you can't find the email in your inbox.
          </p>
          <p
            className="text-[#000000] text-center mt-2"
            style={{ fontSize: "14px", paddingTop: "10px" }}
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
