// import { NavLink, useLocation } from "react-router-dom";
import Search from "./Search";
import IconUser from "./IconUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faGift,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

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
      className={`nav show flex items-center justify-between flex-wrap fixed w-full px-[12px] py-[1%] text-[0.9rem] ${
        navBlack || toggleMenu ? "bg-black" : "transparent"
      }
      
      bg-gradient-to-b from-black ease-out duration-300 md:px-[100px]`}
    >
      <button
        className="nav-burger cursor-pointer decoration-white mr-[1rem] min-[768px]:hidden"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <img
        src="public/images/Noir-et-Blanc-Encadré-Future-DJ-Logo_1_.svg"
        alt="dataviz"
        width="150px"
        className="text-red-500 text-[2.4rem]"
      />
      <nav
        className={`nav-links ease-out duration-300 ml-[20px] max-md:ml-0 
        ${
          toggleMenu &&
          "max-[767.98px]:flex flex-col visible w-full h-screen top-[100px] bg-black"
        }
        max-md:hidden max-md:absolute max-md:top-[100%] max-md:right-0 `}
      >
        <a
          href="/"
          className="nav-link no-underline px-[15px] py-[10px] max-[767.98]: text-[1.2rem] px-[20px] py-[4%]"
        >
          Accueil
        </a>
        <a
          href="/"
          className="nav-link no-underline px-[15px] py-[10px] max-[767.98]: text-[1.2rem] px-[20px] py-[4%]"
        >
          Séries
        </a>
        <a
          href="/"
          className="nav-link no-underline px-[15px] py-[10px] max-[767.98]: text-[1.2rem] px-[20px] py-[4%]"
        >
          Films
        </a>
      </nav>

      <div className="nav-actions flex items-center justify-end flex-1">
        <a href="/" className="nav-action ml-[10px] md:ml-[20px]">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
        <a href="/" className="nav-action ml-[10px] md:ml-[20px]">
          Direct
        </a>
        <a href="/" className="nav-action ml-[10px] md:ml-[20px]">
          <FontAwesomeIcon icon={faGift} />
        </a>
        <a href="/" className="nav-action ml-[10px] md:ml-[20px]">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="/" className="nav-action ml-[10px] md:ml-[20px]">
          <img src="./images/github.png" alt="avatar" width="40px" />
        </a>
      </div>

      {/* {location !== "film" ? (
        <div className="flex justify-evenly items-center  pl-[50px] pr-[50px]">
          <Logo />
          <nav className="flex flex-row items-center justify-between w-[40%]">
            <ul className="flex justify-around w-[95%]">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/tvProgrammes">Tv Programmes</NavLink>
              </li>
              <li>
                <NavLink to="/films">Films</NavLink>
              </li>
              <li>
                <NavLink to="/recentlyadded">Recently Added</NavLink>
              </li>
              <li>
                <NavLink to="/myList">My List</NavLink>
              </li>
            </ul>
          </nav>
          <Search />
          <IconUser />
        </div>
      ) : (
        <div className="fixed h-full flex flex-col justify-center items-center w-[12%]">
          <nav className="flex flex-col items-center justify-between h-[300px] w-[50%]">
            <ul className="flex flex-col justify-around w-[95%] h-[300px]">
              <li>
                <NavLink to="/">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FontAwesomeIcon icon={faHouse} />
                </NavLink>
              </li>

              <li>
                <NavLink to="/tvProgrammes">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/films">
                  <FontAwesomeIcon icon={faTv} size="xs" />{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/recentlyadded">
                  <FontAwesomeIcon icon={faClapperboard} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/myList">
                  <FontAwesomeIcon icon={faPlus} />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )} */}
    </div>
  );
};

export default Nav;
