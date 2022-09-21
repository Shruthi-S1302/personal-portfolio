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
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav navbar-components">
              {navbarItems.map((item) => {
                return (
                  <li className="nav-item" key={item.id}>
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
