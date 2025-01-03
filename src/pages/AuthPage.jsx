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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F6F6",
        alignContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "28rem",
          padding: "1.5rem",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <img
            src="/assets/Logo.png"
            alt="Logo"
            style={{
              height: "120px",
              width: "200px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1.5rem",
              border: "1px solid #ccc",
              backgroundColor: "#DBDBDB",
              color: "white",
              borderRadius: "9999px",
              padding: "1px",
              width: "350px",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => setActiveTab("signIn")}
              style={{
                width: "50%",
                padding: "0.5rem 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "0.9375rem",
                backgroundColor: activeTab === "signIn" ? "white" : "#DBDBDB",
                color: activeTab === "signIn" ? "#0b5530" : "#F2F2F2",
                borderRadius: "9999px",
                cursor: "pointer",
              }}
            >
              Sign In
            </div>
            <div
              onClick={() => setActiveTab("signUp")}
              style={{
                width: "50%",
                padding: "0.5rem 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "0.9375rem",
                backgroundColor: activeTab === "signUp" ? "white" : "#DBDBDB",
                color: activeTab === "signUp" ? "#0b5530" : "#F2F2F2",
                borderRadius: "9999px",
                cursor: "pointer",
              }}
            >
              Sign Up
            </div>
          </div>
        </div>
        {/* Sign In Form */}
        {activeTab === "signIn" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                width: "350px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "0.375rem",
                backgroundColor: "#f3f3f3",
                color: "#0b5530",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <img
                  src="/assets/Google.png"
                  alt="Google Logo"
                  style={{
                    height: "1.25rem",
                  }}
                />
              </span>
              Continue with Google
            </button>
            <p
              style={{
                textAlign: "center",
                color: "#0b5530",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              OR
            </p>
            <input
              type="email"
              placeholder="Email Address"
              style={{
                width: "330px",
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "0.375rem",
                fontSize: "1rem",
                outline: "none",
                boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)",
                transition: "box-shadow 0.2s ease-in-out",
                backgroundColor: "#DCDCDC",
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)";
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
                  width: "330px",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)",
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0.5rem",
                  transform: "translateY(-50%)",
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
                width: "350px",
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
              Sign In
            </button>
          </div>
        )}

        {/* Sign Up Form */}
        {activeTab === "signUp" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                width: "350px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5rem",
                marginBottom: "1rem",
                border: "1px solid #ccc",
                borderRadius: "0.375rem",
                backgroundColor: "#f3f3f3",
                color: "#0b5530",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <img
                  src="/assets/Google.png"
                  alt="Google Logo"
                  style={{
                    height: "1.25rem",
                  }}
                />
              </span>
              Continue with Google
            </button>
            <p
              style={{
                textAlign: "center",
                color: "#0b5530",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              OR
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginBottom: "1rem",
                width: "350px",
              }}
            >
              <input
                type="name"
                placeholder="First Name"
                style={{
                  width: "50%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)",
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)";
                }}
              />
              <input
                type="name"
                placeholder="Last Name"
                style={{
                  width: "50%",
                  padding: "0.5rem ",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)",
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)";
                }}
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              style={{
                width: "330px",
                padding: "0.5rem ",
                border: "1px solid #ccc",
                borderRadius: "0.375rem",
                fontSize: "1rem",
                outline: "none",
                boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)",
                transition: "box-shadow 0.2s ease-in-out",
                backgroundColor: "#DCDCDC",
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)";
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
                  width: "330px",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)",
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)";
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
                  width: "330px",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)",
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0.75rem",
                  transform: "translateY(-50%)",
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
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm Password"
                style={{
                  width: "330px",
                  padding: "0.5rem ",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)",
                  transition: "box-shadow 0.2s ease-in-out",
                  backgroundColor: "#DCDCDC",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0.75rem",
                  transform: "translateY(-50%)",
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
                width: "350px",
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
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
