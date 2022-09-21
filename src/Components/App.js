import React from "react";
import Navigation from "./Navigation";
import Description from "./Description";
import ResumeButton from "./ResumeButton";
import KnowMe from "./KnowMe";
import ProjectPage from "./ProjectPage";
import Contact from "./Contact";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <div className="Home">
        <Navigation />
        <Description />
        <ResumeButton />
      </div>
      <KnowMe />
      <Skills />
      <ProjectPage />
      <Contact />
    </div>
  );
}

export default App;
