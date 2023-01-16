import React from "react";
import ReactPlayer from "react-player";
import FloatingBox from "../../components/FloatingBox/FloatingBox";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="ux-portfolio Portfolio--category-layout center-aligned">
        <h3 className="Portfolio--heading" style={{ color: "var(--light)" }}>
          Development and UX
        </h3>
        <div className="Portfolio--float-layout">
          <FloatingBox
            title="Chat application"
            imgFile="tripster-logo.png"
            imgSize={100}
          />
          <FloatingBox
            title="Interaction Design Sprints"
            imgFile="sprints-logo.png"
            url="https://youtu.be/ZUqfVkjf3Sg"
            imgSize={100}
          />
          <FloatingBox
            title="MQTT Experiments"
            imgFile="mqtt-logo.png"
            url="[https://youtu.be/SVsQIQCR5vI](https://youtu.be/SVsQIQCR5vI)"
            imgSize={120}
          />
        </div>
      </div>
      <div className="sound-portfolio Portfolio--category-layout center-aligned">
        <h3 className="Portfolio--heading" style={{ color: "var(--light)" }}>
          Sound and Music
        </h3>
        <div className="Portfolio--float-layout">
          <FloatingBox title="Sound design" imgFile="pines_logo.png" />
          <FloatingBox title="Advert composition" imgFile="zipp-logo.png" />
        </div>
      </div>
    </div>
  );
}
