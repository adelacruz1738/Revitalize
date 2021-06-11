import React from "react";
import ReactAudioPlayer from "react-audio-player";

// Controls component utilising react-audio-player package
function Controls(props) {
  return (
    <div>
      {props.song.map((song) => (
        <ReactAudioPlayer src={song.src} autoPlay controls volume loop />
      ))}
    </div>
  );
}

export default Controls;
