import React from "react";
import "./TextBox.css";

export default function TextBox(props) {
  let links;
  let description;

  // Go through all links and map for render
  if (props.links !== undefined) {
    links = props.links.map((link) => (
      <a
        key={props.linkTitle}
        className="TextBox--link link-button"
        href={link.href}
        target="_blank"
      >
        {link.linkTitle}
      </a>
    ));
  }

  if (props.description !== undefined) {
    description = props.description.map((p, index) => (
      <p key={index} className="TextBox--description">
        {" "}
        {p} <br />{" "}
      </p>
    ));
  }

  return (
    <div className="TextBox card-bg">
      <h4 className="TextBox--title"> {props.title}</h4>
      {props.description && description}
      {props.children}

      {props.links !== undefined && (
        <div className="flex-container"> {links}</div>
      )}
    </div>
  );
}
