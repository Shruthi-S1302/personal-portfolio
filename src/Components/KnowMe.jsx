import React from "react";
import { KnowMeStyle } from "./KnowMeStyle";

export default function AboutMe() {
  const KnowMe =
    "I am a Computer Science undergraduate at VIT Chennai. An enthusiastic front-end developer, currently picking up skills in backend and MERN Full-Stack Development. Also highly interested in learning about latest technologies, Machine learning and Artificial Intelligence. I have neat coding skills and am looking forward to contributing to the society with my abilities. I am a voracious book-reader and express myself through poetry and prose. Music is my constant companion. I am a quick learner and highly motivated to do the things I love.";
  return (
    <div>
      <KnowMeStyle id="KnowMe">
        <h2>About Me</h2>
        <p className="text-center">{KnowMe}</p>
      </KnowMeStyle>
    </div>
  );
}
