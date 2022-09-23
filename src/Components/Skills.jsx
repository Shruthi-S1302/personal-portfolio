import React from "react";
import { SkillsStyling } from "./SkillsStyling";
import backend from "../Images/programming.png";
import SkillSet from "./SkillSet";
export default function Skills() {
  return (
    <div>
      <SkillsStyling>
        <section className="p-5 skill" id="skills">
          <div className="container-fluid">
            <div className="row text-white text-center">
              <div className="col m-4">
                <h1> My Skill set</h1>
                <div className="underline mb-4"></div>
              </div>
            </div>
            <div className="row my-5">
              {SkillSet.map((item) => {
                return (
                  <div className="col-md-4 text-center">
                    <img src={item.img} alt=""></img>
                    <h3 className="mb-3">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SkillsStyling>
    </div>
  );
}
