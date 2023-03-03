import React from "react";
import { NavLink } from "react-router-dom";
import "./ProjectPage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//Components
import TextBox from "../../components/TextBox/TextBox";

export default function ProjectPage(props) {
  const placeholder = (
    <TextBox
      title="UNDER CONSTRUCTION"
      description="This project description is still under construction..."
    />
  );

  return (
    <div className="ProjectPage">
      <NavLink className="ProjectPage--backlink" to="/portfolio">
        <ArrowBackIcon fontSize="larger" />
      </NavLink>
      {props.title != undefined && (
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
      )}

      {props.title == undefined && placeholder}
    </div>
  );
}
