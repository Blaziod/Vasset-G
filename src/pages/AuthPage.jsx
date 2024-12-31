import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signIn");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // validatePassword(value);
  };
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    // validatePassword(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F6F6]">
      <div className="w-full max-w-md  p-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="src/assets/Logo.png"
            alt="Logo"
            className="h-[120px] w-[200px]"
          />
        </div>

        {/* Tab Buttons */}
        <div
          className="flex justify-center mb-6 border "
          style={{
            backgroundColor: "#DBDBDB",
            color: "white",
            borderRadius: "500px",
            padding: "1px",
          }}
        >
          <div
            className={`w-1/2 py-2 rounded-md flex justify-center items-center font-bold text-[15px]`}
            style={{
              backgroundColor: activeTab === "signIn" ? "white" : "#DBDBDB",
              color: activeTab === "signIn" ? "#0b5530" : "#F2F2F2",
              borderRadius: "500px",
            }}
            onClick={() => setActiveTab("signIn")}
          >
            Sign In
          </div>
          <div
            className={`w-1/2 py-2 rounded-md flex justify-center items-center font-bold text-[15px]`}
            style={{
              backgroundColor: activeTab === "signUp" ? "white" : "#DBDBDB",
              color: activeTab === "signUp" ? "#0b5530" : "#F2F2F2",
              borderRadius: "500px",
            }}
            onClick={() => setActiveTab("signUp")}
          >
            Sign Up
          </div>
        </div>

        {/* Sign In Form */}
        {activeTab === "signIn" && (
          <div>
            <button className="w-full flex items-center justify-center py-2 mb-4 border rounded-md bg-gray-100 text-[#0b5530] font-bold hover:bg-gray-200">
              <span className="mr-2">
                <img
                  src="src/assets/Google.png"
                  alt="Google Logo"
                  className="h-5"
                />
              </span>
              Continue with Google
            </button>
            <p className="text-center text-[#0b5530] mb-4 font-bold">OR</p>
            <input
              type="email"
              placeholder="Email Address"
              style={{
                width: "100%",
                padding: "0.5rem 2.5rem 0.5rem 0.75rem", // Padding for icon space
                border: "1px solid #ccc",
                borderRadius: "0.375rem", // 6px radius
                fontSize: "1rem",
                outline: "none",
                boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)", // Focus outline will appear
                transition: "box-shadow 0.2s ease-in-out",
                backgroundColor: "#DCDCDC",
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)"; // Green outline on focus
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)"; // Remove outline on blur
              }}
            />
            <div
              style={{
                position: "relative",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                style={{
                  width: "100%",
                  padding: "0.5rem 2.5rem 0.5rem 0.75rem", // Padding for icon space
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem", // 6px radius
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)", // Focus outline will appear
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)"; // Green outline on focus
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)"; // Remove outline on blur
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0.75rem", // Position near the right edge
                  transform: "translateY(-50%)", // Center vertically
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                  padding: "0",
                }}
              >
                {showPassword ? (
                  <EyeOff
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#888",
                    }}
                  />
                ) : (
                  <Eye
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#888",
                    }}
                  />
                )}
              </button>
            </div>
            <button
              style={{
                width: "100%",
                padding: "0.5rem", // Top and bottom padding
                backgroundColor: "#007A25", // Background color
                color: "white", // Text color
                borderRadius: "0.375rem", // Rounded corners
                fontWeight: "bold", // Bold text
                border: "none", // Remove default border
                cursor: "pointer", // Change cursor to pointer on hover
                transition: "background-color 0.2s ease-in-out", // Smooth hover effect
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#00591A")} // Hover effect
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007A25")} // Reset hover effect
            >
              Sign In
            </button>
          </div>
        )}

        {/* Sign Up Form */}
        {activeTab === "signUp" && (
          <div>
            <button className="w-full flex items-center justify-center py-2 mb-4 border rounded-md bg-gray-100 text-[#0b5530] font-bold hover:bg-gray-200">
              <span className="mr-2">
                <img
                  src="src/assets/Google.png"
                  alt="Google Logo"
                  className="h-5"
                />
              </span>
              Continue with Google
            </button>
            <p className="text-center text-[#0b5530] mb-4 font-bold">OR</p>
            <div
              style={{
                position: "relative",
                marginBottom: "1rem",
                gap: "0.5rem",
                display: "flex",
              }}
            >
              <input
                type="name"
                placeholder="First Name"
                style={{
                  width: "50%",
                  padding: "0.5rem 2.5rem 0.5rem 0.75rem", // Padding for icon space
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem", // 6px radius
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)", // Focus outline will appear
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)"; // Green outline on focus
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)"; // Remove outline on blur
                }}
              />
              <input
                type="name"
                placeholder="Last Name"
                style={{
                  width: "50%",
                  padding: "0.5rem 2.5rem 0.5rem 0.75rem", // Padding for icon space
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem", // 6px radius
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)", // Focus outline will appear
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)"; // Green outline on focus
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)"; // Remove outline on blur
                }}
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              style={{
                width: "100%",
                padding: "0.5rem 2.5rem 0.5rem 0.75rem", // Padding for icon space
                border: "1px solid #ccc",
                borderRadius: "0.375rem", // 6px radius
                fontSize: "1rem",
                outline: "none",
                boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)", // Focus outline will appear
                transition: "box-shadow 0.2s ease-in-out",
                backgroundColor: "#DCDCDC",
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)"; // Green outline on focus
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)"; // Remove outline on blur
              }}
            />
            <div
              style={{
                position: "relative",
                marginTop: "1rem",
              }}
            >
              <input
                inputMode="numeric"
                type="phone"
                placeholder="Phone Number"
                style={{
                  width: "100%",
                  padding: "0.5rem 2.5rem 0.5rem 0.75rem", // Padding for icon space
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem", // 6px radius
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)", // Focus outline will appear
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)"; // Green outline on focus
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)"; // Remove outline on blur
                }}
              />
            </div>
            <div
              style={{
                position: "relative",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                style={{
                  width: "100%",
                  padding: "0.5rem 2.5rem 0.5rem 0.75rem", // Padding for icon space
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem", // 6px radius
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)", // Focus outline will appear
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)"; // Green outline on focus
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)"; // Remove outline on blur
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0.75rem", // Position near the right edge
                  transform: "translateY(-50%)", // Center vertically
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                  padding: "0",
                }}
              >
                {showPassword ? (
                  <EyeOff
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#888",
                    }}
                  />
                ) : (
                  <Eye
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#888",
                    }}
                  />
                )}
              </button>
            </div>
            <div
              style={{
                position: "relative",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm Password"
                style={{
                  width: "100%",
                  padding: "0.5rem 2.5rem 0.5rem 0.75rem", // Padding for icon space
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem", // 6px radius
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)", // Focus outline will appear
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)"; // Green outline on focus
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)"; // Remove outline on blur
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0.75rem", // Position near the right edge
                  transform: "translateY(-50%)", // Center vertically
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                  padding: "0",
                }}
              >
                {showPassword ? (
                  <EyeOff
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#888",
                    }}
                  />
                ) : (
                  <Eye
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#888",
                    }}
                  />
                )}
              </button>
            </div>
            <button
              style={{
                width: "100%",
                padding: "0.5rem", // Top and bottom padding
                backgroundColor: "#007A25", // Background color
                color: "white", // Text color
                borderRadius: "0.375rem", // Rounded corners
                fontWeight: "bold", // Bold text
                border: "none", // Remove default border
                cursor: "pointer", // Change cursor to pointer on hover
                transition: "background-color 0.2s ease-in-out", // Smooth hover effect
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#00591A")} // Hover effect
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007A25")} // Reset hover effect
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
