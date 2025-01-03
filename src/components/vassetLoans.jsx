import React, { useState, useEffect } from "react";

const VassetLoans = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          alignSelf: isSmallScreen ? "center" : "center",
          paddingTop: isSmallScreen ? "30px" : "100px",
          paddingBottom: isSmallScreen ? "0" : "30px",
        }}
      >
        <p
          style={{
            color: isSmallScreen ? "#5A5A5A" : "#121214",
            fontSize: "28px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            textAlign: isSmallScreen ? "center" : "left",
            margin: 0,
          }}
        >
          Discover More Products
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          flexWrap: isSmallScreen ? "wrap" : "nowrap",
          width: isSmallScreen ? "auto" : "auto",
          alignSelf: isSmallScreen ? "center" : "flex-start",
        }}
      >
        <div
          style={{
            width: isSmallScreen ? "330px" : "600px",
            height: isSmallScreen ? "200px" : "200px",
            overflow: "hidden",
            backgroundColor: "#fff",
            borderRadius: "12px",
            borderTop: "2px solid #0B5530",
            padding: "10px 20px",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  color: "#121214",
                  fontSize: "28px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  margin: 0,
                }}
              >
                Vasset Loans
              </p>
              <p
                style={{
                  color: "#81858C",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingTop: "10px",
                  margin: 0,
                }}
              >
                Get an instant loan secured by crypto assets
              </p>
            </div>
            <img
              src="/assets/4.png"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "2px",
              paddingTop: "10px",
            }}
          >
            <p
              style={{
                color: "#0B5530",
                fontSize: "14px",
                fontFamily: "sans-serif",
                margin: 0,
              }}
            >
              Details
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M3.51547 8.71479H12.0577L8.34372 5.01661C8.13177 4.80494 8.01275 4.51786 8.01275 4.21852C8.01275 3.91918 8.13177 3.63209 8.34372 3.42042C8.55567 3.20876 8.84311 3.08984 9.14281 3.08984C9.44251 3.08984 9.72995 3.20876 9.9419 3.42042L15.5692 9.04081C15.6717 9.14769 15.752 9.27374 15.8056 9.41173C15.9181 9.68538 15.9181 9.99234 15.8056 10.266C15.752 10.404 15.6717 10.5301 15.5692 10.637L9.9419 16.2573C9.83727 16.3627 9.71279 16.4464 9.57566 16.5034C9.43846 16.5605 9.29137 16.5898 9.14281 16.5898C8.99426 16.5898 8.84711 16.5605 8.70997 16.5034C8.57283 16.4464 8.44835 16.3627 8.34372 16.2573C8.23826 16.1528 8.1545 16.0285 8.09735 15.8916C8.04026 15.7546 8.01084 15.6077 8.01084 15.4593C8.01084 15.3109 8.04026 15.164 8.09735 15.0269C8.1545 14.89 8.23826 14.7657 8.34372 14.6611L12.0577 10.9629H3.51547C3.21698 10.9629 2.93071 10.8445 2.71964 10.6337C2.50857 10.4229 2.39 10.137 2.39 9.83889C2.39 9.54076 2.50857 9.25484 2.71964 9.04402C2.93071 8.83325 3.21698 8.71479 3.51547 8.71479Z"
                fill="#0B5530"
              />
            </svg>
          </div>
        </div>
        <div
          style={{
            width: isSmallScreen ? "330px" : "600px",
            height: isSmallScreen ? "200px" : "200px",
            overflow: "hidden",
            backgroundColor: "#fff",
            borderRadius: "12px",
            borderTop: "2px solid #0B5530",
            padding: "10px 20px",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              color: "#121214",
              fontSize: "28px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              margin: 0,
            }}
          >
            Pay Bills
          </p>

          <div
            style={{
              display: "flex",
              gap: "2px",
            }}
          >
            <p
              style={{
                color: "#0B5530",
                fontSize: "14px",
                fontFamily: "sans-serif",
                margin: 0,
              }}
            >
              Details
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M3.51547 8.71479H12.0577L8.34372 5.01661C8.13177 4.80494 8.01275 4.51786 8.01275 4.21852C8.01275 3.91918 8.13177 3.63209 8.34372 3.42042C8.55567 3.20876 8.84311 3.08984 9.14281 3.08984C9.44251 3.08984 9.72995 3.20876 9.9419 3.42042L15.5692 9.04081C15.6717 9.14769 15.752 9.27374 15.8056 9.41173C15.9181 9.68538 15.9181 9.99234 15.8056 10.266C15.752 10.404 15.6717 10.5301 15.5692 10.637L9.9419 16.2573C9.83727 16.3627 9.71279 16.4464 9.57566 16.5034C9.43846 16.5605 9.29137 16.5898 9.14281 16.5898C8.99426 16.5898 8.84711 16.5605 8.70997 16.5034C8.57283 16.4464 8.44835 16.3627 8.34372 16.2573C8.23826 16.1528 8.1545 16.0285 8.09735 15.8916C8.04026 15.7546 8.01084 15.6077 8.01084 15.4593C8.01084 15.3109 8.04026 15.164 8.09735 15.0269C8.1545 14.89 8.23826 14.7657 8.34372 14.6611L12.0577 10.9629H3.51547C3.21698 10.9629 2.93071 10.8445 2.71964 10.6337C2.50857 10.4229 2.39 10.137 2.39 9.83889C2.39 9.54076 2.50857 9.25484 2.71964 9.04402C2.93071 8.83325 3.21698 8.71479 3.51547 8.71479Z"
                fill="#0B5530"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VassetLoans;
