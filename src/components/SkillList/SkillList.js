import React from "react";
import "./SkillList.css";

export default function SkillList(props) {
  const skillsToDisplay = props.skills.map((skill) => (
    <li key={skill} className="bullet-main">
      {skill}
    </li>
  ));

  return (
    <div className="SkillList">
      <h3 style={{ color: props.color }}>{props.text}</h3>
      <ul
        className="skill-ul"
        style={{ backgroundColor: props.color, columns: props.columns }}
      >
        {skillsToDisplay}
      </ul>
    </div>
  );
}
