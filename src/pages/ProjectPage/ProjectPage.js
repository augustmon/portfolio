import React from "react";
import "./ProjectPage.css";
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
      {props.title !== undefined && (
        <div className="ProjectPage--flex">
          <TextBox
            title={props.title}
            description={props.description}
            links={props.links}
          >
            {props.videoLink !== undefined && (
              <VideoPlayer
                className="ProjectPage--video"
                url={props.videoLink}
              />
            )}
          </TextBox>

          {/* button make into buttons */}
          <img src={props.imgLeft} className="imgLeft projectImg" />
          <img src={props.imgRight} className="imgRight projectImg" />
        </div>
      )}

      {props.title === undefined && placeholder}
    </div>
  );
}
