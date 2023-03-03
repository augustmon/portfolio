import React from "react";
import { NavLink } from "react-router-dom";
import "./ProjectPage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactPlayer from "react-player";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

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
          >
            {props.videoLink !== undefined && (
              <VideoPlayer
                className="ProjectPage--video"
                url={props.videoLink}
              />
            )}
          </TextBox>

          <img src={props.imgLeft} className="imgLeft projectImg" />
          <img src={props.imgRight} className="imgRight projectImg" />
        </div>
      )}

      {props.title == undefined && placeholder}
    </div>
  );
}
