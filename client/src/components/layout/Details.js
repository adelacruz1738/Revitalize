import React from "react";
import { ReactComponent as Sound } from "../../images/sound.svg";

// Meditate details template
// Displays the song information from songs array
function Details(props) {
  return (
    <div>
      {props.song.map((song) => (
        <div className="player_details">
          <div className="sound_div">
            <h3 className="details_title">{song.title}</h3>
            <Sound id="sound_icon" height={20} width={20} />
          </div>
          <div className="details_image">
            <div className="meditate_container">
              <img height={200} width={300} src={song.img_src} alt="" />
            </div>
          </div>
          <div className="meditate_container">{song.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Details;
