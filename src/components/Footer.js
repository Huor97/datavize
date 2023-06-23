import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faGift } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
const facebook = <FontAwesomeIcon icon={faBars} />;
const twitter = <FontAwesomeIcon icon={faTwitter} />;
const insta = <FontAwesomeIcon icon={faBell} />;
const youtube = <FontAwesomeIcon icon={faGift} />;
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__socials">
          <a href="/" className="footer__social">
            {facebook}
          </a>
          <a href="/" className="footer__social">
            {insta}
          </a>
          <a href="/" className="footer__social">
            {twitter}
          </a>
          <a href="/" className="footer__social">
            {youtube}
          </a>
        </div>

        <ul className="footer__links">
          <li className="footer__link">
            <a href="/">lien footer</a>
          </li>

          <li className="footer__link">
            <a href="/">lien footer</a>
          </li>

          <li className="footer__link">
            <a href="/">lien footer</a>
          </li>

          <li className="footer__link">
            <a href="/">lien footer</a>
          </li>

          <li className="footer__link">
            <a href="/">lien footer</a>
          </li>

          <li className="footer__link">
            <a href="/">lien footer</a>
          </li>

          <li className="footer__link">
            <a href="/">lien footer</a>
          </li>

          <li className="footer__link">
            <a href="/">lien footer</a>
          </li>
        </ul>

        <div className="footer__copy">Netflix Clone - tous droits réservés</div>
      </div>
    </footer>
  );
}

export default Footer;
