import React from "react";
import FloatingBox from "../../components/FloatingBox/FloatingBox";
import Footer from "./../../components/Footer/Footer";
import "./Portfolio.css";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ProjectPage from "../ProjectPage/ProjectPage";
import chatAppData from "../../JSON/project_chat-app.json";
import soundDesignData from "../../JSON/project_sound.json";

export default function Portfolio() {
  // function navigateBack() {
  //   Route
  // }
  const phoneLeft = require("./../../images/tripster_left.png");
  const phoneRight = require("./../../images/tripster_right.png");

  const screenLeft = require("../../images/pines_3.png");
  const screenRight = require("../../images/pines_2.png");

  return (
    <div className="Portfolio">
      {/* <Link className="BackLink" to="/">
        <Button
          onClick={() => console.log("clicked")}
          variant="contained"
          startIcon={<ArrowBack />}
          sx={{ color: "var(--light)" }}
        >
          Back
        </Button>
      </Link> */}
      <div className="ux-portfolio Portfolio--category-layout center-aligned">
        <h2 className="Portfolio--heading">Web dev & UX</h2>
        <div className="Portfolio--float-layout">
          {/* <FloatingBox
            title="Chat application"
            projectPageName="chat-app"
            imgFile="tripster-logo.png"
            imgSize={85}
          /> */}
          <ProjectPage
            projectPageName={chatAppData.title}
            title={chatAppData.title}
            description={chatAppData.description}
            imgLeft={phoneLeft}
            imgRight={phoneRight}
            links={chatAppData.links}
          />
          {/* <FloatingBox
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
          /> */}
        </div>
      </div>
      <div className="sound-portfolio Portfolio--category-layout center-aligned">
        <h2 className="Portfolio--heading">Sound & Music</h2>
        <div className="Portfolio--float-layout">
          {/* <FloatingBox
            title="Sound design"
            projectPageName="sound"
            imgFile="pines_logo.png"
          /> */}
          <ProjectPage
            projectPageName={soundDesignData.title}
            title={soundDesignData.title}
            description={soundDesignData.description}
            imgLeft={screenLeft}
            imgRight={screenRight}
            links={soundDesignData.links}
            videoLink={soundDesignData.videoLink}
          />
          {/* <FloatingBox
            title="Advert composition"
            projectPageName="composition"
            imgFile="zipp-logo.png"
          /> */}
        </div>
      </div>
      <Footer textLines={["This section is under construction!"]} />
    </div>
  );
}
