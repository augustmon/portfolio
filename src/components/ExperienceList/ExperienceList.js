import React from "react";
import "./../../App.css";

// COMPONENTS
import ExperienceItem from "../ExperienceItem/ExperienceItem";

export default function ExperienceList(props) {
  const itemsToDisplay = props.items.map((item) => (
    <ExperienceItem
      key={item.company}
      dates={item.dates}
      company={item.company}
      position={item.position}
      tasks={item.tasks}
      itemColor={props.itemColor}
    />
  ));

  return (
    <div className="ExperienceList">
      <h2 style={{ color: props.headingColor }}> {props.heading} </h2>
      {itemsToDisplay}
    </div>
  );
}
