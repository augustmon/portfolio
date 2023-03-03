import React from "react";
import "./FloatingBox.css";
import { Link } from "react-router-dom";

export default function FloatingBox(props) {
  const logoImage = require(`./../../images/${props.imgFile}`);

  return (
    <Link className="FloatingBox" to={props.projectPageName}>
      <div className="FloatingBox--content"></div>
      <img
        className="FloatingBox--image"
        src={logoImage}
        style={{ maxHeight: props.imgSize }}
      />

      <div className="FloatingBox--title">
        <h4 className="bold-main"> {props.title}</h4>
      </div>
      {/* <div className="FloatingBox--bg" /> */}
      {/* <div className="overlay" /> */}
    </Link>
  );
}
