import React, { useEffect, useState } from "react";

const Dashboard = () => {
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
        backgroundColor: "#FFFFFF",
        maxWidth: "100vw",
        minHeight: "100vh",
        // justifyContent: "center",
        // alignItems: "center",
        display: "flex",
        flexDirection: "column",
        paddingTop: "70px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(110, 204, 2, 0.03)",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          padding: "30px 0px",
        }}
      >
        <p
          style={{
            color: "#22242A",
            fontSize: "35px",
            fontWeight: "bolder",
            margin: 0,
          }}
        >
          WELCOME TO VASSET
        </p>
        <p style={{ color: "#707A8A", fontSize: "16px" }}>
          Enjoy hassle-free trades and a world of rewards waiting for you.
        </p>
        <button
          style={{
            width: isSmallScreen ? "100%" : "880px",
            padding: "10px",
            backgroundColor: "#0B5530",
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
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#0B5530")}
          // onClick={handleClick}
        >
          Trade Now!
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
