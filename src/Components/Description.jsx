import React from "react";
import DescriptionStyles from "./DescriptionStyles";
export default function Description() {
  return (
    <DescriptionStyles>
      <div className="jumbotron container-sm container-fluid">
        <p className="display-4 text-sm-start">
          Hello I'm Shruthi S <span className="hand">👋</span>
        </p>
      </div>
    </DescriptionStyles>
  );
}
