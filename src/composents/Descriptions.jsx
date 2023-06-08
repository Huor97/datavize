import React from "react";
import ButtonPlay from "./ButtonPlay";
import ButtonMoreInfo from "./ButtonMoreInfo";

function Descriptions() {
  return (
    <>
      <div className="descriptions">
        {/* type */}
        <p>Series</p>
        {/* Titre */}
        <h1>Stranger Things</h1>
        {/* Déscription */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          fuga suscipit. Similique hic veritatis expedita cupiditate nobis, ea
          ex blanditiis harum cumque ipsa, perspiciatis deserunt aspernatur
          delectus fugit quidem quaerat?
        </p>
      </div>
      <div className="d-button">
        {/* Button play */}
        <ButtonPlay />
        {/* Button More Info */}
        <ButtonMoreInfo />
      </div>
    </>
  );
}

export default Descriptions;
