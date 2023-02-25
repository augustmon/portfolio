import React from "react";
import { NavLink } from "react-router-dom";
import "./ProjectPage.css";

//Components
import TextBox from "../../components/TextBox/TextBox";

export default function ProjectPage(props) {
  return (
    <div className="ProjectPage">
      <NavLink
        className="ProjectPage--backlink"
        to="/portfolio"
        style={{ color: "black" }}
      >
        ⬅
      </NavLink>
      <div className="ProjectPage--flex">
        <TextBox
          title={props.title}
          description={props.description}
          linkTitle={props.linkTitle}
          href={props.href}
        />
        <img src={props.imgLeft} className="imgLeft" />
        <img src={props.imgRight} className="imgRight" />
      </div>
    </div>
  );
}
