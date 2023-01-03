import React from "react";
import "./Picture.css";

export default function Picture() {
  return (
    <div className="Picture">
      <img
        src={require("../../images/august_square.png")}
        alt="profile of author"
      />
    </div>
  );
}
