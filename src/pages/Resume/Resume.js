import React from "react";

import "./Resume.css";

import ExperienceList from "../../components/ExperienceList/ExperienceList";
import SkillList from "../../components/SkillList/SkillList";
import Picture from "../../components/Picture/Picture";
import PictureRound from "../../components/Picture/PictureRound";

import workExperience from "./../../JSON/work-experience.json";
import education from "./../../JSON/education.json";

import hardSkills from "./../../JSON/hard-skills.json";
import softSkills from "./../../JSON/soft-skills.json";

export default function Resume() {
  return (
    <div className="Resume flex-container">
      <div className="left-column">
        <Picture id="left" />
        <ExperienceList
          heading="Work Experience"
          headingColor="var(--sky-blue-80)"
          itemColor="var(--sky-blue-100)"
          items={workExperience}
        />

        <ExperienceList
          heading="Education"
          headingColor="var(--baby-blue-80)"
          itemColor="var(--baby-blue-100)"
          items={education}
        />
      </div>

      <div className="right-column">
        <Picture id="right" />

        <SkillList
          text="'Soft' Skills"
          skills={softSkills}
          color="var(--purple-100)"
        />
        <SkillList
          text='"Hard" Skills'
          skills={hardSkills}
          color="var(--purple-80)"
        />
      </div>
    </div>
  );
}
