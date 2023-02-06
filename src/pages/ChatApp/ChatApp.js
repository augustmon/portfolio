import React from "react";
import ProjectPage from "../ProjectPage/ProjectPage";

import chatAppData from "./../../JSON/project_chat-app.json";

export default function ChatApp() {
  const phoneLeft = require("./../../images/tripster_welcome.png");
  const phoneRight = require("./../../images/tripster_group-chat.png");

  return (
    <ProjectPage
      title={chatAppData.title}
      description={chatAppData.description}
      imgLeft={phoneLeft}
      imgRight={phoneRight}
      linkTo={chatAppData.linkTo}
      linkTitle={chatAppData.linkTitle}
    />
  );
}
