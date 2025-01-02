import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (path) => {
    navigate(path);
    setMenuOpen(false); // Close the menu after navigation
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        top: "0px",
        zIndex: "1000",
        alignSelf: "center",
        padding: "10px",
        alignItems: "center",
        height: isSmallScreen ? "30px" : "60px",
        paddingRight: isSmallScreen ? "0px" : "20px",
        paddingLeft: isSmallScreen ? "0px" : "20px",
      }}
    >
      {isSmallScreen && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            width: "100%",
            paddingRight: "30px",
            position: "relative",
            maxWidth: "100vw",
            boxSizing: "border-box",
          }}
        >
          <img src="/assets/Vasset.png" alt="Logo" />

          {/* SVG on the right */}
          <div onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.331 5.29777H3.33785C3.17257 5.29646 3.01443 5.23023 2.89755 5.11335C2.78068 4.99648 2.71444 4.83834 2.71313 4.67306C2.71444 4.50777 2.78068 4.34963 2.89755 4.23276C3.01443 4.11588 3.17257 4.04965 3.33785 4.04834H18.331C18.4963 4.04965 18.6544 4.11588 18.7713 4.23276C18.8882 4.34963 18.9544 4.50777 18.9557 4.67306C18.9544 4.83834 18.8882 4.99648 18.7713 5.11335C18.6544 5.23023 18.4963 5.29646 18.331 5.29777ZM18.331 10.7113H3.33785C3.17257 10.71 3.01443 10.6438 2.89755 10.5269C2.78068 10.41 2.71444 10.2519 2.71313 10.0866C2.71444 9.92131 2.78068 9.76317 2.89755 9.64629C3.01443 9.52942 3.17257 9.46318 3.33785 9.46188H18.331C18.4963 9.46318 18.6544 9.52942 18.7713 9.64629C18.8882 9.76317 18.9544 9.92131 18.9557 10.0866C18.9544 10.2519 18.8882 10.41 18.7713 10.5269C18.6544 10.6438 18.4963 10.71 18.331 10.7113ZM18.331 16.1258H3.33785C3.17257 16.1245 3.01443 16.0583 2.89755 15.9414C2.78068 15.8245 2.71444 15.6664 2.71313 15.5011C2.71444 15.3358 2.78068 15.1777 2.89755 15.0608C3.01443 14.944 3.17257 14.8777 3.33785 14.8764H18.331C18.4963 14.8777 18.6544 14.944 18.7713 15.0608C18.8882 15.1777 18.9544 15.3358 18.9557 15.5011C18.9544 15.6664 18.8882 15.8245 18.7713 15.9414C18.6544 16.0583 18.4963 16.1245 18.331 16.1258Z"
                fill="#000"
              />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div
              style={{
                position: "absolute",
                top: "30px", // Adjust position based on SVG size
                right: "20px",
                backgroundColor: "#007A25",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                width: "150px",
                zIndex: "1000", // Ensure dropdown is above other elements
                padding: "10px",
              }}
            >
              <h1
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
                onClick={() => handleClick("/auth")}
              >
                Buy / Sell Crypto
              </h1>
              <h1
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
                onClick={() => handleClick("/auth")}
              >
                Swap
              </h1>

              <h1
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
                onClick={() => handleClick("/auth")}
              >
                Login
              </h1>
              <button
                style={{
                  width: "auto",
                  padding: "8px 20px",
                  backgroundColor: "#fff",
                  color: "#007A25",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease-in-out",
                  fontSize: "12px",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#00591A")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#007A25")
                }
                onClick={() => handleClick("/register")}
              >
                Register
              </button>
            </div>
          )}
        </div>
      )}

      {!isSmallScreen && (
        <>
          {/* Larger Screen Content */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              cursor: "pointer",
            }}
          >
            <img src="/assets/Vasset.png" alt="Logo" />
            <h1
              style={{ color: "#22242A", fontSize: "14px", fontWeight: "500" }}
            >
              Buy / Sell Crypto
            </h1>
            <h1
              style={{ color: "#22242A", fontSize: "14px", fontWeight: "500" }}
            >
              Swap
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              cursor: "pointer",
              paddingRight: "40px",
            }}
          >
            <h1
              style={{ color: "#22242A", fontSize: "14px", fontWeight: "500" }}
              onClick={() => handleClick("/auth")}
            >
              Login
            </h1>
            <button
              style={{
                width: "auto",
                padding: "8px 20px",
                backgroundColor: "#007A25",
                color: "white",
                borderRadius: "8px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s ease-in-out",
                fontSize: "12px",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#00591A")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007A25")}
              onClick={() => handleClick("/register")}
            >
              Register
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
