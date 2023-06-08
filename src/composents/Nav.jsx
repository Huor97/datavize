import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import IconUser from "./IconUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const Layout = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <>
      {location !== "film" ? (
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
      )}
    </>
  );
};

export default Layout;
