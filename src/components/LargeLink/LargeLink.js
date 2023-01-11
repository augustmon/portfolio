import React from "react";
import { Link } from "react-router-dom";
import "./LargeLink.css";

export default function LargeLink(props) {
  return (
    <Link className="LargeLink" to={props.to}>
      <h3>{props.children}</h3>
    </Link>
  );
}
