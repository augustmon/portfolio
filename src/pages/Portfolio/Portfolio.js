import React from "react";
import ReactPlayer from "react-player";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <h2 style={{ color: "var(--light)" }}> SOUND DESIGN </h2>
      <div className="portfolio-sounddesign card-bg">
        <VideoPlayer url="https://www.youtube.com/embed/_f_r87OKduU" />
        <VideoPlayer url="https://youtu.be/ZUqfVkjf3Sg" />
        <VideoPlayer url="[https://youtu.be/SVsQIQCR5vI](https://youtu.be/SVsQIQCR5vI)" />
      </div>
      <h2 style={{ color: "var(--light)" }}> WEB DEVELOPMENT </h2>
      <div className="flex-container card-bg">
        <img src="" alt="" />
      </div>
    </div>
  );
}
