import React from "react";
import { CopyrightStyling } from "./CopyrightStyling";

export default function Copyright() {
  var currentYear = new Date().getFullYear();
  return (
    <div>
      <CopyrightStyling>
        <p>Copyright &copy; {currentYear} Shruthi S. All Rights Reserved</p>
      </CopyrightStyling>
    </div>
  );
}
