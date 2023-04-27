import React from "react";
import "./Picture.css";

export default function Picture() {
  return (
    <img
      className="Picture"
      src={require("../../images/august_square.png")}
      alt="Front face of author in black and white"
    />
  );
}
