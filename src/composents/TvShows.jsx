import React from "react";
import { useNavigate } from "react-router-dom";

function TvShows({ id, image, alt }) {
  const navigate = useNavigate();
  // ajouter id de produit dans url: example: localhost:3000/produit/1
  const marsel = (tvShowId) => {
    navigate("/film/" + tvShowId);
  };
  return (
    <>
      <div className="w-[20%] m-[4px]" onClick={() => marsel(id)}>
        <img src={image} alt={alt} />
      </div>
    </>
  );
}

export default TvShows;
