import React from "react";
import ReactPlayer from "react-player";
import Descriptions from "./Descriptions";

function Annonces({ image }) {
  return (
    <>
      <div className="w-[100%]">
        <div className="w-[90%] absolute -z-10 h-[610px]">
          <ReactPlayer
            position={"absolute"}
            z-index={"-1"}
            width={"100%"}
            url="https://assets.codepen.io/6093409/river.mp4"
          />
        </div>
      </div>
    </>
  );
}

export default Annonces;
