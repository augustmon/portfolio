import React from "react";
import ProjectPage from "../ProjectPage/ProjectPage";
import soundDesignData from "../../JSON/project_sound.json";

export default function ChatApp() {
  const screenLeft = require("../../images/pines_3.png");
  const screenRight = require("../../images/pines_2.png");

  return (
    <ProjectPage
      projectPageName={soundDesignData.title}
      title={soundDesignData.title}
      description={soundDesignData.description}
      imgLeft={screenLeft}
      imgRight={screenRight}
      href={soundDesignData.href}
      linkTitle={soundDesignData.linkTitle}
      videoLink={soundDesignData.videoLink}
    />
  );
}
