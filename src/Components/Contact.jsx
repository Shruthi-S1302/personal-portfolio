import React from "react";
import { ContactStyle } from "./ContactStyle";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Copyright from "./Copyright";
import coffee from "../Images/coffee.png";

export default function Contact() {
  const coffeecup = {
    border: "none",
    height: "25px",
    width: "25px",
    margin: "0 8px 0 8px",
  };
  return (
    <div id="Contact">
      <ContactStyle>
        <p className="p-contact">Feel free to reach me out.</p>
        <p>
          We can jam over a cup of
          <img src={coffee} style={coffeecup} alt=""></img>, discuss life,
          technology, books and music!
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/shruthi-s13/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin
              style={{ color: "#0072b1", margin: "20px" }}
              size={30}
            />
          </a>
          <a
            href="https://github.com/Shruthi-S1302"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub style={{ color: "#171515" }} size={30} />
          </a>
        </div>
        <Copyright />
      </ContactStyle>
    </div>
  );
}
