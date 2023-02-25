import React from "react";
import "./Footer.css";

export default function Footer(props) {
  const lineElements = props.textLines.map((line, index) => (
    <p key={index}> {line} </p>
  ));

  return <footer className="Footer">{lineElements}</footer>;
}
