import React from "react";
import "./TextBox.css";

export default function TextBox(props) {
  return (
    <div className="TextBox card-bg">
      <h2 className="TextBox--title"> {props.title}</h2>
      <p className="TextBox--description"> {props.description}</p>
      <a className="TextBox--link" href={props.href} target="_blank">
        {props.linkTitle}
      </a>
    </div>
  );
}
