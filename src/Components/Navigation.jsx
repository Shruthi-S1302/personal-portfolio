import React from "react";
import photo from "../Images/Profile.jpg";
import "../styles.css";
import navbarItems from "./navbarItems";

function Navigation() {
  return (
    <div>
      <div className="container-fluid ">
        <nav className="navbar navbar-expand-lg navbar-light">
          <img src={photo} alt="" />
          <h2>SHRUTHI S</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav navbar-components mr-auto">
              {navbarItems.map((item) => {
                return (
                  <li className="nav-item active" key={item.id}>
                    <a className="nav-link" href={item.id}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
