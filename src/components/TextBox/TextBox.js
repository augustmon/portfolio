import React from "react";
import { Link } from "react-router-dom";
import "./TextBox.css";

export default function TextBox(props) {
  return (
    <div className="TextBox card-bg">
      <h2 className="TextBox--title"> {props.title}</h2>
      <p className="TextBox--description"> {props.description}</p>
      <Link className="TextBox--link" to={props.linkTo}>
        {props.linkTitle}
      </Link>
    </div>
  );
}
