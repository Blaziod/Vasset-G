/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { CiWallet } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import { SiTrustpilot } from "react-icons/si";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };
  const Column = ({ children }) => {
    return (
      <div
        style={{
          backgroundColor: "#F2F5EF",
          padding: "25px 35px",
          alignItems: "flex-start",
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "15px",
          borderRadius: "20px",
          height: "300px",
          width: "300px",
        }}
      >
        {children}
      </div>
    );
  };
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columnStyle = {
    backgroundColor: "#007A25",
    padding: "10px",
    borderRadius: "50%",
  };

  const textStyle = {
    color: "#333333",
    fontWeight: "400",
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        maxWidth: "100vw",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!isSmallScreen && (
        <div
          style={{
            position: "relative",
            backgroundColor: "#6ECC0208",
            height: "800px",
          }}
        >
          <img src="/assets/863.png" style={{ width: "90%" }} />
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "18%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              width: "35%",
              gap: "10px",
            }}
          >
            <p
              style={{
                color: "#007A25",
                fontSize: "40px",
                fontWeight: "600",
                margin: "0", // Remove any default margin
                lineHeight: "1.2", // Adjust line height for more compact text
              }}
            >
              Safe & fastest way to Manage your Assets
            </p>
            <p
              style={{
                color: "#707A8A",
                fontSize: "14px",
                fontWeight: "400",
                margin: "0", // Remove any default margin
                lineHeight: "1.5", // Adjust line height for more compact text
              }}
            >
              With easy to use interface and fast transactions!
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: isSmallScreen ? "97%" : "400px",
                padding: "10px", // Padding for icon space
                border: "1px solid #ccc",
                borderRadius: "0.375rem", // 6px radius
                outline: "none",
                boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)", // Focus outline will appear
                transition: "box-shadow 0.2s ease-in-out",
                backgroundColor: "white",
                margin: "0", // Ensure no margin
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)"; // Green outline on focus
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)"; // Remove outline on blur
              }}
            />
            <button
              style={{
                width: isSmallScreen ? "100%" : "420px",
                padding: "10px",
                backgroundColor: "rgba(0, 122, 37, 0.4)",
                color: "white",
                borderRadius: "0.375rem",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.2s ease-in-out",
                margin: "0", // Remove margin
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#00591A")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "rgba(0, 122, 37, 0.4)")
              }
              onClick={handleClick}
            >
              Login / Register
            </button>
            <p
              style={{
                textAlign: "center",
                color: "#0b5530",
                fontWeight: "bold",
                margin: "10px 0", // Small margin to ensure spacing is consistent
              }}
            >
              OR
            </p>
            <button
              style={{
                width: isSmallScreen ? "100%" : "420px",
                padding: "0.5rem",
                backgroundColor: "#fff",
                color: "#22242A",
                borderRadius: "0.375rem",
                fontWeight: "500",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.2s ease-in-out",
                border: "1px solid #CBD0D6",
                alignItems: "center",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                margin: "0", // Remove margin
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1976D2")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
            >
              <span className="mr-2">
                <img
                  src="/assets/GoogleM.png"
                  alt="Google Logo"
                  className="h-5"
                />
              </span>
              Continue with Google
            </button>
          </div>

          <div
            className="flex justify-center content-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "80%",
                display: "flex",
                gap: "30px",
                height: "auto",
                width: "auto",
                backgroundColor: "#DAFCB4",
                borderRadius: "16px",
                padding: "10px",
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "30px",
                    fontWeight: "600",
                    color: "#22242A",
                    margin: 0,
                  }}
                >
                  10
                </h1>
                <h1
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#22242A",
                  }}
                >
                  Supported currencies
                </h1>
              </div>
              <div
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "30px",
                    fontWeight: "600",
                    color: "#22242A",
                    margin: 0,
                  }}
                >
                  15+
                </h1>
                <h1
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#22242A",
                  }}
                >
                  Features
                </h1>
              </div>{" "}
              <div
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "30px",
                    fontWeight: "600",
                    color: "#22242A",
                    margin: 0,
                  }}
                >
                  500+
                </h1>
                <h1
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#22242A",
                  }}
                >
                  Supported cryptocurrency
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
      {isSmallScreen && (
        <>
          <div
            style={{
              backgroundColor: "#6ECC0208",
              width: "100%",
              maxWidth: "100vw",
              boxSizing: "border-box",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <img
              src="/assets/3.png"
              alt="Safe & Fastest Way"
              style={{
                maxWidth: "100%", // Ensure image doesn't exceed screen width
                height: "auto", // Maintain aspect ratio
                // objectFit: "contain", // Ensure image fits within bounds
              }}
            />
            <p
              style={{
                color: "#22242A",
                fontSize: "30px",
                fontWeight: "600",
                margin: "0", // Remove any default margin
                lineHeight: "1.2", // Adjust line height for compact text
                textAlign: "center", // Center-align text for better mobile view
              }}
            >
              Safe & fastest way to Manage your Assets
            </p>
            <p
              style={{
                color: "#707A8A",
                fontSize: "14px",
                fontWeight: "400",
                margin: "0", // Remove any default margin
                lineHeight: "1.5", // Adjust line height for compact text
                textAlign: "center", // Center-align text for better readability
              }}
            >
              With easy-to-use interface and fast transactions!
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "94%",
                maxWidth: "400px", // Restrict maximum width for larger screens
                padding: "10px", // Padding for icon space
                border: "1px solid #ccc",
                borderRadius: "0.375rem", // 6px radius
                outline: "none",
                boxShadow: "0 0 0 2px rgba(74, 222, 128, 0)", // Focus outline will appear
                transition: "box-shadow 0.2s ease-in-out",
                backgroundColor: "white",
                margin: "0", // Ensure no margin
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 1)"; // Green outline on focus
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "0 0 0 2px rgba(74, 222, 128, 0)"; // Remove outline on blur
              }}
            />
            <button
              style={{
                width: "100%",
                maxWidth: "420px", // Restrict maximum width
                padding: "10px",
                backgroundColor: "rgba(0, 122, 37, 0.4)",
                color: "white",
                borderRadius: "0.375rem",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.2s ease-in-out",
                margin: "0", // Remove margin
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#00591A")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "rgba(0, 122, 37, 0.4)")
              }
              onClick={handleClick}
            >
              Login / Register
            </button>
            <p
              style={{
                textAlign: "center",
                color: "#0b5530",
                fontWeight: "bold",
                margin: "10px 0", // Small margin for consistent spacing
              }}
            >
              OR
            </p>
            <button
              style={{
                width: "100%",
                maxWidth: "420px", // Restrict maximum width
                padding: "0.5rem",
                backgroundColor: "#fff",
                color: "#22242A",
                borderRadius: "0.375rem",
                fontWeight: "500",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.2s ease-in-out",
                border: "1px solid #CBD0D6",
                alignItems: "center",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                margin: "0", // Remove margin
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1976D2")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
            >
              <img
                src="/assets/GoogleM.png"
                alt="Google Logo"
                style={{
                  height: "20px", // Ensure the logo is properly sized
                  width: "auto", // Maintain aspect ratio
                }}
              />
              Continue with Google
            </button>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <div
              style={{
                backgroundColor: "#EFFFDC",
                display: "flex",
                justifyContent: "space-between",
                gap: "5px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#EFFFDC",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "5px",
                  width: "100%",
                  padding: "10px",
                  maxWidth: "100vw",
                  boxSizing: "border-box",
                  alignItems: "center",
                  borderRadius: "0.375rem", // 6px radius
                }}
              >
                {" "}
                <div
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "30px",
                      fontWeight: "600",
                      color: "#22242A",
                      margin: 0,
                    }}
                  >
                    10
                  </h1>
                  <h1
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                      color: "#22242A",
                    }}
                  >
                    Supported currencies
                  </h1>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "30px",
                      fontWeight: "600",
                      color: "#22242A",
                      margin: 0,
                    }}
                  >
                    15+
                  </h1>
                  <h1
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                      color: "#22242A",
                    }}
                  >
                    Features
                  </h1>
                </div>{" "}
                <div
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "30px",
                      fontWeight: "600",
                      color: "#22242A",
                      margin: 0,
                    }}
                  >
                    500+
                  </h1>
                  <h1
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                      color: "#22242A",
                    }}
                  >
                    Supported cryptocurrency
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div
        className="flex flex-col items-center justify-center"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "#007A25",
            fontSize: "50px",
            fontWeight: "700px",
            paddingTop: "50px",
            textAlign: "center",
          }}
        >
          Why Choose Us?
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="303"
          height="21"
          viewBox="0 0 203 21"
          fill="none"
        >
          <path
            d="M1.55808 12.2731C1.55808 12.2731 127.962 -2.11921 198.856 8.54632"
            stroke="#0B5530"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M1.45146 9.84741C1.45146 9.84741 130.316 0.893161 201.011 14.4154"
            stroke="#0B5530"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr 1fr", // 1 column on small screens, 3 columns on larger screens
            justifyItems: "center", // Center each item horizontally
            alignItems: "center", // Center each item vertically
            gap: "20px", // Space between grid items
            width: "100%",
            padding: "20px", // Add padding for smaller screens
          }}
        >
          <Column>
            <div style={columnStyle}>
              <CiWallet color="white" size="28px" />
            </div>
            <h1 style={{ ...textStyle, fontSize: "25px", fontWeight: "500" }}>
              Virtual Asset Management
            </h1>
            <h1 style={{ ...textStyle, fontSize: "14px" }}>
              Let our experts handle your virtual assets seamlessly. From buying
              to selling and portfolio management, trust us to maximize your
              returns.
            </h1>
          </Column>
          <Column>
            <div style={columnStyle}>
              <BsGraphUp color="white" size="28px" />
            </div>
            <h1 style={{ ...textStyle, fontSize: "25px", fontWeight: "500" }}>
              Investment Advisory
            </h1>
            <h1 style={{ ...textStyle, fontSize: "14px" }}>
              Gain personalized guidance and expert insights to make informed
              investment decisions tailored to your financial goals and risk
              tolerance.
            </h1>
          </Column>
          <Column>
            <div style={columnStyle}>
              <SiTrustpilot color="white" size="28px" />
            </div>
            <h1 style={{ ...textStyle, fontSize: "25px", fontWeight: "500" }}>
              Trust Funds Management
            </h1>
            <h1 style={{ ...textStyle, fontSize: "14px" }}>
              Protect your wealth and provide for your loved ones with our
              tailored trust funds management services, ensuring your assets are
              preserved and distributed according to your wishes.
            </h1>
          </Column>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr", // Two columns on large screens, one on small screens
            justifyItems: "center",
            alignItems: "center",
            gap: "10px", // Small gap between columns
            width: "85%",
            paddingBottom: "50px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#F2F5EF",
              padding: "25px 35px",
              alignItems: "flex-start",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "15px",
              borderRadius: "20px",
              height: "auto",
              width: "auto", // Adjusted width to allow better spacing
              maxWidth: "400px", // Ensures columns don't get too wide
            }}
          >
            <div
              style={{
                backgroundColor: "#007A25",
                padding: "10px",
                borderRadius: "50%",
              }}
            >
              <CiWallet color="white" size="28px" />
            </div>
            <h1
              style={{ color: "#333333", fontSize: "25px", fontWeight: "500" }}
            >
              Instant Loans
            </h1>
            <p
              style={{ color: "#333333", fontSize: "14px", fontWeight: "400" }}
            >
              Access instant liquidity without liquidating your assets. Our
              hassle-free process offers competitive rates to meet your
              short-term financial needs while preserving your long-term
              investment strategy.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#F2F5EF",
              padding: "25px 35px",
              alignItems: "flex-start",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "15px",
              borderRadius: "20px",
              height: "auto",
              width: "auto", // Adjusted width to allow better spacing
              maxWidth: "400px", // Ensures columns don't get too wide
            }}
          >
            <div
              style={{
                backgroundColor: "#007A25",
                padding: "10px",
                borderRadius: "50%",
              }}
            >
              <BsGraphUp color="white" size="28px" />
            </div>
            <h1
              style={{ color: "#333333", fontSize: "25px", fontWeight: "500" }}
            >
              Portfolio Monitoring
            </h1>
            <p
              style={{ color: "#333333", fontSize: "14px", fontWeight: "400" }}
            >
              Stay informed and ahead of the curve with real-time portfolio
              monitoring. Track your investments, identify opportunities, and
              make informed decisions to optimize your portfolio&apos;s
              performance.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: "150px",
          display: "flex",
          justifyItems: "center",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr", // Two columns on large screens, one on small screens
            justifyItems: "center",
            gap: "10px", // Small gap between columns
            width: "auto",
            justifyContent: "center",
            alignItems: "flex-start", // Align grid items to the top of the grid
          }}
        >
          <div
            style={{
              padding: "15px",
              justifyContent: "center",
              gap: "15px",
              height: "342px",
              maxWidth: "600px",
              alignItems: "flex-start", // Align content to the top of the cell
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img src="/assets/1.png" width={400} height={400} />
          </div>

          <div
            style={{
              padding: " 35px",
              alignItems: "flex-start", // Align content to the top of the cell
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Ensure content starts from the top
              height: "342px",
              gap: "10px",
            }}
          >
            <p
              style={{
                color: "#707A8A",
                fontSize: "14px",
                fontWeight: "400",
                margin: "0", // Remove any default margin
                lineHeight: "1.2",
              }}
            >
              How it works
            </p>
            <h1
              style={{
                color: "#22242A",
                fontSize: "35px",
                fontWeight: "600",
                margin: "0", // Remove any default margin
                lineHeight: "1.2",
              }}
            >
              Start buying & selling Bitcoin in 3 simple steps
            </h1>
            <p
              style={{
                color: "#707A8A",
                fontSize: "14px",
                fontWeight: "400",
                margin: "0", // Remove any default margin
                lineHeight: "1.2",
              }}
            >
              Easily add funds to your cryptocurrency account to start trading
              cryptocurrencies
            </p>

            <div>
              <div
                style={{
                  gap: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.941406"
                    y="1.4834"
                    width="39"
                    height="39"
                    rx="19.5"
                    fill="#F3FFE5"
                  />
                  <rect
                    x="0.941406"
                    y="1.4834"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#007A25"
                  />
                  <path
                    d="M16.8394 26.9736V25.7896H19.9594V16.7976H19.8474L17.0314 19.4216L16.2474 18.5736L19.2074 15.8056H21.3034V25.7896H24.1834V26.9736H16.8394Z"
                    fill="#007A25"
                  />
                </svg>

                <p
                  style={{
                    color: "#22242A",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Sign up & Verify your account
                </p>
              </div>

              <div style={{ paddingLeft: "20px" }}>
                <div
                  style={{
                    width: "2px",
                    height: "20px",
                    backgroundColor: "#007A25",
                  }}
                ></div>
              </div>

              <div
                style={{
                  gap: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.941406"
                    y="1.47363"
                    width="39"
                    height="39"
                    rx="19.5"
                    fill="#F3FFE5"
                  />
                  <rect
                    x="0.941406"
                    y="1.47363"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#007A25"
                  />
                  <path
                    d="M23.9594 26.9639H16.6314V25.5879L20.2794 22.2279C20.8021 21.7479 21.2394 21.2412 21.5914 20.7079C21.9434 20.1639 22.1194 19.6199 22.1194 19.0759V18.8839C22.1194 18.2652 21.9487 17.7639 21.6074 17.3799C21.2661 16.9959 20.7487 16.8039 20.0554 16.8039C19.7141 16.8039 19.4154 16.8519 19.1594 16.9479C18.9034 17.0439 18.6794 17.1772 18.4874 17.3479C18.3061 17.5185 18.1514 17.7212 18.0234 17.9559C17.9061 18.1799 17.8101 18.4252 17.7354 18.6919L16.5354 18.2279C16.6421 17.8972 16.7861 17.5772 16.9674 17.2679C17.1594 16.9479 17.3941 16.6652 17.6714 16.4199C17.9594 16.1745 18.3007 15.9772 18.6954 15.8279C19.1007 15.6785 19.5754 15.6039 20.1194 15.6039C20.6634 15.6039 21.1487 15.6839 21.5754 15.8439C22.0021 16.0039 22.3594 16.2279 22.6474 16.5159C22.9354 16.8039 23.1541 17.1452 23.3034 17.5399C23.4634 17.9345 23.5434 18.3719 23.5434 18.8519C23.5434 19.2892 23.4794 19.6945 23.3514 20.0679C23.2341 20.4412 23.0687 20.7985 22.8554 21.1399C22.6421 21.4705 22.3807 21.7959 22.0714 22.1159C21.7727 22.4359 21.4474 22.7559 21.0954 23.0759L18.0874 25.7799H23.9594V26.9639Z"
                    fill="#007A25"
                  />
                </svg>

                <p
                  style={{
                    color: "#22242A",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Deposit BTC
                </p>
              </div>

              <div style={{ paddingLeft: "20px" }}>
                <div
                  style={{
                    width: "2px",
                    height: "20px",
                    backgroundColor: "#007A25",
                  }}
                ></div>
              </div>

              <div
                style={{
                  gap: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.941406"
                    y="1.45312"
                    width="39"
                    height="39"
                    rx="19.5"
                    fill="#F3FFE5"
                  />
                  <rect
                    x="0.941406"
                    y="1.45312"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#007A25"
                  />
                  <path
                    d="M19.6074 20.5114C20.3647 20.5114 20.9301 20.3407 21.3034 19.9994C21.6874 19.6474 21.8794 19.1994 21.8794 18.6554V18.5434C21.8794 17.9567 21.6927 17.5194 21.3194 17.2314C20.9567 16.9327 20.4767 16.7834 19.8794 16.7834C19.3034 16.7834 18.8341 16.9114 18.4714 17.1674C18.1087 17.4127 17.8101 17.7487 17.5754 18.1754L16.5834 17.4074C16.7221 17.1834 16.8874 16.9647 17.0794 16.7514C17.2821 16.5274 17.5167 16.33 17.7834 16.1594C18.0501 15.9887 18.3594 15.85 18.7114 15.7434C19.0634 15.6367 19.4634 15.5834 19.9114 15.5834C20.3807 15.5834 20.8234 15.6474 21.2394 15.7754C21.6554 15.8927 22.0127 16.074 22.3114 16.3194C22.6207 16.554 22.8607 16.8474 23.0314 17.1994C23.2127 17.5514 23.3034 17.9514 23.3034 18.3994C23.3034 18.762 23.2447 19.0874 23.1274 19.3754C23.0207 19.6634 22.8714 19.914 22.6794 20.1274C22.4874 20.3407 22.2581 20.522 21.9914 20.6714C21.7354 20.8207 21.4581 20.9327 21.1594 21.0074V21.0714C21.4581 21.1354 21.7461 21.242 22.0234 21.3914C22.3114 21.53 22.5621 21.7167 22.7754 21.9514C22.9994 22.1754 23.1754 22.4527 23.3034 22.7834C23.4421 23.1034 23.5114 23.4714 23.5114 23.8874C23.5114 24.3674 23.4207 24.81 23.2394 25.2154C23.0581 25.61 22.8021 25.9514 22.4714 26.2394C22.1407 26.5167 21.7407 26.7354 21.2714 26.8954C20.8021 27.0554 20.2847 27.1354 19.7194 27.1354C19.2394 27.1354 18.8127 27.082 18.4394 26.9754C18.0661 26.8687 17.7354 26.7247 17.4474 26.5434C17.1594 26.362 16.9034 26.1594 16.6794 25.9354C16.4661 25.7114 16.2741 25.4767 16.1034 25.2314L17.1114 24.4634C17.2501 24.6874 17.3994 24.89 17.5594 25.0714C17.7301 25.2527 17.9167 25.4074 18.1194 25.5354C18.3221 25.6634 18.5514 25.7647 18.8074 25.8394C19.0634 25.9034 19.3621 25.9354 19.7034 25.9354C20.4927 25.9354 21.0901 25.7594 21.4954 25.4074C21.9007 25.0447 22.1034 24.5327 22.1034 23.8714V23.7434C22.1034 23.082 21.9007 22.5754 21.4954 22.2234C21.0901 21.8607 20.4927 21.6794 19.7034 21.6794H18.3914V20.5114H19.6074Z"
                    fill="#007A25"
                  />
                </svg>

                <p
                  style={{
                    color: "#22242A",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Buy and Sell BTC and other cryptos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          paddingTop: "100px",
        }}
      >
        <p
          style={{
            color: "#707A8A",
            fontSize: "14px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Testimonials
        </p>
        <h1
          style={{
            color: "#22242A",
            fontSize: "35px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          What our customers are saying?
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr 1fr", // Two columns on large screens, one on small screens
            justifyItems: "center",
            alignItems: "center",
            gap: "10px", // Small gap between columns
            width: "100%",
            paddingBottom: "50px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "25px 35px",
              alignItems: "flex-start",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "15px",
              borderRadius: "20px",
              height: "auto",
              width: "auto", // Adjusted width to allow better spacing
              maxWidth: "400px", // Ensures columns don't get too wide
            }}
          >
            <h1
              style={{ color: "#22242A", fontSize: "12px", fontWeight: "600" }}
            >
              Mr Joshua Ajetumobi
            </h1>
            <p
              style={{
                color: "#22242A",
                fontSize: "14px",
                fontWeight: "400",
                textAlign: "justify",
              }}
            >
              All the way from Houston, Texas . Choosing Vasset for my property
              management was one of the best decisions I have made! living in
              the diaspora, I was so concerned about how to effectively, manage
              my property back home, sometimes in March this year I was
              introduced to Vasset&apos;s service and this has made things so
              easy. They provided a steady stream of income while handling all
              the tenants and maintenance issues. The team is professional
              responsive and knows how to maximize property value. Now I can
              enjoy consistent returns without any worries. Vassset Global is
              highly recommended.
            </p>
          </div>

          <div
            style={{
              padding: "25px 35px",
              alignItems: "flex-start",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "15px",
              borderRadius: "20px",
              height: "auto",
              width: "auto", // Adjusted width to allow better spacing
              maxWidth: "400px", // Ensures columns don't get too wide
            }}
          >
            <h1
              style={{ color: "#22242A", fontSize: "12px", fontWeight: "600" }}
            >
              Mrs Blessing
            </h1>
            <p
              style={{
                color: "#22242A",
                fontSize: "14px",
                fontWeight: "400",
                textAlign: "justify",
              }}
            >
              they are in charge of all my virtual assets including the ones i
              keep for my kids. and thanks to them for coming through to get me
              a loan when i needed it without selling my assets.
            </p>
          </div>

          <div
            style={{
              padding: "25px 35px",
              alignItems: "flex-start",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "15px",
              borderRadius: "20px",
              height: "auto",
              width: "auto", // Adjusted width to allow better spacing
              maxWidth: "400px", // Ensures columns don't get too wide
            }}
          >
            <h1
              style={{ color: "#22242A", fontSize: "12px", fontWeight: "600" }}
            >
              Mr John
            </h1>
            <p
              style={{
                color: "#22242A",
                fontSize: "14px",
                fontWeight: "400",
                textAlign: "justify",
              }}
            >
              They are full of updates of making money with your properties.
            </p>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "100px" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr", // Two columns on large screens, one on small screens
          justifyItems: "center",
          alignItems: "center",
          gap: "10px", // Small gap between columns

          height: "auto",
          width: isSmallScreen ? "90%" : "auto",
          justifyContent: "center",
          padding: isSmallScreen ? "10px" : "70px",
          backgroundColor: "#F2F5EF",
        }}
      >
        <div
          style={{
            padding: isSmallScreen ? "5px" : "10px",
            alignItems: "flex-start",
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",

            height: "auto",
            width: isSmallScreen ? "90%" : "auto",
            maxWidth: "600px",
          }}
        >
          <p style={{ color: "#707A8A", fontSize: "14px", fontWeight: "400" }}>
            Benefits
          </p>
          <h1
            style={{
              color: "#22242A",
              fontSize: isSmallScreen ? "25px" : "35px",
              fontWeight: "600",
              paddingBottom: "17px",
              margin: 0,
            }}
          >
            A wide range of options for managing your Assets.
          </h1>
          <p
            style={{
              color: "#707A8A",
              fontSize: "18px",
              fontWeight: "400",
              textAlign: "justify",
              margin: 0,
            }}
          >
            Seamlessly buy and sell cryptocurrency through bank accounts, credit
            cards, debit cards, online wallets and various other methods.
          </p>
        </div>
        <div
          style={{
            // padding: "25px 35px",
            alignItems: "flex-start",
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "15px",
            height: "342px",
          }}
        >
          <div>
            <img
              src="/assets/2.png"
              height={isSmallScreen ? "300px" : "400px"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
