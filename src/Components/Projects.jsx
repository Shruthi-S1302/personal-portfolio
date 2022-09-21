import React from "react";

export default function Projects(props) {
  return (
    <div>
      <div className="projects">
        <div
          className="card bg-light mb-3"
          style={{
            maxWidth: "18rem",
            padding: "10px",
            margin: "10%",
            boxShadow: "0 2px 5px #816797",
          }}
        >
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
