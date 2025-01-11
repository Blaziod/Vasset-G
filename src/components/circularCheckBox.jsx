import React, { useState } from "react";

const CircularCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={styles.container}>
      <div
        onClick={toggleCheck}
        style={{
          ...styles.circle,
          backgroundColor: isChecked ? "green" : "transparent",
          border: `2px solid ${isChecked ? "green" : "#CBD0D6"}`,
        }}
      >
        {isChecked && <span style={styles.checkMark}>&#10003;</span>}
      </div>
    </div>
  );
};

const styles = {
  container: {},
  circle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.3s, border-color 0.3s",
  },
  checkMark: {
    color: "white",
    fontSize: "24px",
  },
};

export default CircularCheckBox;
