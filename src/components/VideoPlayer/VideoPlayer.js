import React from "react";
import Player from "react-player";
import "./VideoPlayer.css";

export default function VideoPlayer(props) {
  return (
    <div className="VideoPlayer">
      <Player
        className="react-player"
        controls
        url={props.url}
        pip
        width="100%"
        height="100%"
      />
    </div>
  );
}
