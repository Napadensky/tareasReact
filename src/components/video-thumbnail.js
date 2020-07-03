import React from "react";

export default function VideoThumbnail(props) {
  return (
    <div className="thumbnail">
      <img src={props.imageUrl} alt="video" />
      <h5>{props.title}</h5>
    </div>
  );
}
