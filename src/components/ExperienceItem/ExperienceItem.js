import React from "react";
import "./../../App.css";
import "./ExperienceItem.css";

export default function ExperienceItem(props) {
  // list out tasks
  const taskList = props.tasks.map((task) => (
    <li className="bullet-main" key={task}>
      {task}
    </li>
  ));

  return (
    <div className="ExperienceItem">
      <p className="eyebrow"> {props.dates} </p>
      <p className="main-entry">
        <span className="bold-main" style={{ color: props.itemColor }}>
          {props.company} -{" "}
        </span>

        <span
          className="cursive-main"
          style={{ backgroundColor: props.itemColor }}
        >
          {props.position}{" "}
        </span>
      </p>
      <ul className="task-list">{taskList}</ul>
    </div>
  );
}
