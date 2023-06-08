import React from "react";

function NewReleases({ image, alt }) {
  return (
    <div className="w-[20%] m-[4px]">
      <img src={image} alt={alt} />
    </div>
  );
}

export default NewReleases;
