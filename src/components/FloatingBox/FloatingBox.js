import React from "react";
import "./FloatingBox.css";
import { Link } from "react-router-dom";

export default function FloatingBox(props) {
  const logoImage = require(`./../../images/${props.imgFile}`);

  return (
    <Link className="FloatingBox" to={props.projectPageName}>
      <h4 className="FloatingBox--title bold-main"> {props.title}</h4>
      <div className="FloatingBox--highlight"></div>
      <img
        className="FloatingBox--image"
        src={logoImage}
        style={{ maxHeight: props.imgSize }}
        alt="App logo in a rounded box"
      />

      {/* <div className="FloatingBox--bg" /> */}
      {/* <div className="overlay" /> */}
    </Link>
  );
}
