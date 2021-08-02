import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({
  title,
  channelName,
  views,
  time,
  thumbnailImg,
  channelImg,
}) {
  return (
    <div className="videoCard">
      <img className="image" src={thumbnailImg} alt="thumbnail image" />
      <div className="videoInfo">
        <Avatar className="cImg" alt="Remy Sharp" src={channelImg} />
        <div className="videoText">
          <h3>{title}</h3>
          <div className="desc">
            <p>{channelName}</p>
            <p>{views} views</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
