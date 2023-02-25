import React from "react";
import ProjectPage from "../ProjectPage/ProjectPage";
import chatAppData from "./../../JSON/project_chat-app.json";

export default function ChatApp() {
  const phoneLeft = require("./../../images/tripster_left.png");
  const phoneRight = require("./../../images/tripster_right.png");

  return (
    <ProjectPage
      projectPageName={chatAppData.title}
      title={chatAppData.title}
      description={chatAppData.description}
      imgLeft={phoneLeft}
      imgRight={phoneRight}
      href={chatAppData.href}
      linkTitle={chatAppData.linkTitle}
    />
  );
}
