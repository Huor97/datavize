import React from "react";
// import { useParams } from "react-router-dom";
import "./Video.scss";
function Video() {
  // let { id } = useParams();
  let id = "dVHZ-q2aLmY";
  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="video"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
