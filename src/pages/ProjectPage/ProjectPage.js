import React from "react";
import { Link } from "react-router-dom";
import "./ProjectPage.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
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
      <Link className="ProjectPage--backlink" to="/portfolio">
        <ArrowBackRoundedIcon />
      </Link>
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
