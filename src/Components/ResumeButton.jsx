import React from "react";
import resume from "../Images/Resume.pdf";

function ResumeButton() {
  const buttonStyle = {
    position: "relative",
    boxShadow: "2px 2px #000",
    fontFamily: "Atkinson Hyperlegible, sans-serif",
    backgroundColor: "#816797",
    padding: "10px 25px",
    borderRadius: "18px",
    marginLeft: "5%",
    color: "#FFF",
    fontSize: "1.25rem",
  };
  return (
    <div>
      <a href={resume} download="Resume" target="_blank" rel="noreferrer">
        <button style={buttonStyle}>Get my resume here.</button>
      </a>
    </div>
  );
}

export default ResumeButton;
