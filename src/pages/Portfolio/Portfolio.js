import React from "react";
import FloatingBox from "../../components/FloatingBox/FloatingBox";
import Footer from "./../../components/Footer/Footer";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="ux-portfolio Portfolio--category-layout center-aligned">
        <h2 className="Portfolio--heading">Web dev & UX</h2>
        <div className="Portfolio--float-layout">
          <FloatingBox
            title="Chat application"
            projectPageName="chat-app"
            imgFile="tripster-logo.png"
            imgSize={85}
          />
          <FloatingBox
            title="Interaction Design Sprints"
            projectPageName="sprints"
            imgFile="sprints-logo.png"
            imgSize={100}
          />
          <FloatingBox
            title="MQTT Experiments"
            projectPageName="experiments"
            imgFile="mqtt-logo.png"
            imgSize={120}
          />
        </div>
      </div>
      <div className="sound-portfolio Portfolio--category-layout center-aligned">
        <h2 className="Portfolio--heading">Sound & Music</h2>
        <div className="Portfolio--float-layout">
          <FloatingBox
            title="Sound design"
            projectPageName="sound"
            imgFile="pines_logo.png"
          />
          <FloatingBox
            title="Advert composition"
            projectPageName="composition"
            imgFile="zipp-logo.png"
          />
        </div>
      </div>
      <Footer textLines={["This section is under construction!"]} />
    </div>
  );
}
