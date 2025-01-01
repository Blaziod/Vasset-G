/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

// Reusable component for the styled text
const FooterText = ({
  fontSize,
  color,
  fontWeight,
  children,
  noWrap,
  onClick,
  isDropdown,
}) => {
  return (
    <p
      style={{
        fontSize: fontSize || "14px",
        color: color || "#707A8A",
        fontWeight: fontWeight || "400",
        whiteSpace: noWrap ? "nowrap" : "normal",
        cursor: onClick ? "pointer" : "default",
        display: "flex",
        justifyContent: "space-between", // Ensure space between text and icon
        alignItems: "center",
        gap: "5px", // Space between text and icon
      }}
      onClick={onClick}
    >
      {children}
      {isDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M13.7333 11.1241L10.5768 6.91797H5.9039C5.10426 6.91797 4.70445 7.88353 5.27019 8.45027L9.58523 12.7653C9.91799 13.0971 10.3687 13.2834 10.8387 13.2834C11.3086 13.2834 11.7593 13.0971 12.0921 12.7653L13.7333 11.1241Z"
            fill="#707A8A"
          />
          <path
            d="M15.7655 6.91797H10.5769L13.7335 11.1241L16.4073 8.45027C16.965 7.88353 16.5652 6.91797 15.7655 6.91797Z"
            fill="#707A8A"
          />
        </svg>
      )}
    </p>
  );
};

const FooterSection = ({
  title,
  links,
  isSmallScreen,
  toggleDropdown,
  isDropdownOpen,
}) => (
  <div>
    <div className="flex flex-col items-start" style={{ gap: "10px" }}>
      <FooterText
        fontSize="18px"
        color="#22242A"
        fontWeight="500"
        onClick={toggleDropdown}
        isDropdown={isSmallScreen} // Show dropdown icon if on small screens
      >
        {title}
      </FooterText>
      {/* Display the links only if not small screen or the dropdown is open */}
      {(isSmallScreen ? isDropdownOpen : true) &&
        links.map((link, index) => (
          <FooterText
            key={index}
            fontSize="14px"
            color="#707A8A"
            fontWeight="400"
            noWrap={link.noWrap}
          >
            {link.text}
          </FooterText>
        ))}
    </div>
  </div>
);

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [openDropdowns, setOpenDropdowns] = useState({}); // Track the open state of dropdowns

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (sectionIndex) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [sectionIndex]: !prevState[sectionIndex],
    }));
  };

  const sections = [
    {
      title: "About Us",
      links: [
        { text: "About Us" },
        { text: "Careers" },
        { text: "Blog", noWrap: true },
        { text: "Press information", noWrap: true },
        { text: "Terms of Service", noWrap: true },
        { text: "Privacy Policy", noWrap: true },
      ],
    },
    {
      title: "Product",
      links: [
        { text: "Swap" },
        { text: "P2P Trading" },
        { text: "Loans", noWrap: true },
      ],
    },
    {
      title: "Buy anywhere",
      links: [
        { text: "Convert BTC to USD", noWrap: true },
        { text: "Convert BTC to NGN", noWrap: true },
        { text: "Convert ETH to NGN", noWrap: true },
        { text: "Convert LTC to NGN", noWrap: true },
        { text: "Convert USDT to NGN", noWrap: true },
        { text: "Convert SOL to NGN", noWrap: true },
        { text: "Convert TRX to NGN", noWrap: true },
        { text: "Convert XRP to NGN", noWrap: true },
      ],
    },
    {
      title: "Help Center",
      links: [{ text: "Contact Support" }, { text: "FAQ" }],
    },
    {
      title: "Community",
      links: [],
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmallScreen ? "1fr" : "repeat(6, 1fr)",
          justifyItems: isSmallScreen ? "left" : "center",
          alignItems: isSmallScreen ? "center" : "flex-start",
          gap: isSmallScreen ? "10px" : "100px",
          height: "auto",
          width: "100%",
          justifyContent: isSmallScreen ? "left" : "center",
          padding: isSmallScreen ? "10px" : "70px",
          backgroundColor: "#fff",
        }}
      >
        <div>
          <div className="flex flex-col" style={{ gap: "10px" }}>
            <img src="/assets/Logo.png" alt="Logo" />
            <FooterText fontSize="14px" color="#707A8A" fontWeight="400">
              © 2014–2024
            </FooterText>
            <FooterText fontSize="14px" color="#707A8A" fontWeight="400">
              Vasset Global
            </FooterText>
            <FooterText fontSize="14px" color="#707A8A" fontWeight="400" noWrap>
              All Rights Reserved
            </FooterText>
          </div>
        </div>

        {sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            links={section.links}
            isSmallScreen={isSmallScreen}
            toggleDropdown={() => toggleDropdown(index)}
            isDropdownOpen={openDropdowns[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
