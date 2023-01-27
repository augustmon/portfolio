import React from "react";
import { Link } from "react-router-dom";
import "./LargeLink.css";

export default function LargeLink(props) {
  return (
    <Link className="LargeLink" to={props.to}>
      <h1 className="LargeLink--text">{props.children}</h1>
      <div className="LargeLink--bg"></div>
    </Link>
  );
}
