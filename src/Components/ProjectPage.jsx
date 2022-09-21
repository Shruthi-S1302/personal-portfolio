import React from "react";
import { ProjectsStyling } from "./ProjectsStyling";
import ProjectsComponents from "./ProjectsComponents";
import Projects from "./Projects";

export default function ProjectPage() {
  const pageStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: "5%",
  };
  return (
    <div>
      <ProjectsStyling>
        <h2>My Projects</h2>
        <div style={pageStyle}>
          {ProjectsComponents.map((items) => (
            <Projects title={items.title} desc={items.desc} />
          ))}
        </div>
      </ProjectsStyling>
    </div>
  );
}
