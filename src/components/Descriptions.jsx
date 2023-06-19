import React from "react";
import ButtonPlay from "./ButtonPlay";
import ButtonMoreInfo from "./ButtonMoreInfo";

function Descriptions({ images, descriptions, annonces }) {
  return (
    <div
      className="bg-cover bg-center"
      style={{ "background-image": `url(${images})` }}
    >
      <div className="descriptions">
        {/* type */}
        <p>Series</p>
        {/* Titre */}
        <h1>Stranger Things</h1>
        {/* Déscription */}
        <p>{descriptions}</p>
      </div>
      <div className="d-button">
        {/* Button play */}
        <ButtonPlay />
        {/* Button More Info */}
        <ButtonMoreInfo />
      </div>
    </div>
  );
}

export default Descriptions;
