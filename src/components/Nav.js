// import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faGift,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Nav.scss";

const Nav = () => {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };
  // const path = useLocation().pathname;
  // const location = path.split("/")[1];

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? "nav--black" : "nav--transparent"
      }
      ${toggleMenu && "show"}
    `}
    >
      <button className="nav__burger" onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <img
        src="public/images/Noir-et-Blanc-Encadré-Future-DJ-Logo_1_.svg"
        alt="dataviz"
        width="150px"
        className=" nav__logo"
      />
      <nav
        className={`nav__links 
        ${
          toggleMenu &&
          "max-[767.98px]:flex flex-col visible w-full h-screen top-[100px] bg-black"
        }
        max-md:hidden max-md:absolute max-md:top-[100%] max-md:right-0 `}
      >
        <a href="/" className="nav__link">
          Accueil
        </a>
        <a href="/" className="nav__link">
          Séries
        </a>
        <a href="/" className="nav__link">
          Films
        </a>
      </nav>

      <div className="nav__actions">
        <a href="/" className="nav__action ml-[10px] md:ml-[20px]">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
        <a href="/" className="nav__action">
          Direct
        </a>
        <a href="/" className="nav__action">
          <FontAwesomeIcon icon={faGift} />
        </a>
        <a href="/" className="nav__action">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="/" className="nav__action">
          <img src="./images/github.png" alt="avatar" width="40px" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
