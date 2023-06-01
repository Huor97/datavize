import { Outlet, Link } from "react-router-dom";
import Logo from "../composents/Logo";
import IconUser from "../composents/IconUser";
import Search from "../composents/Search";

const Layout = () => {
  return (
    <>
      {/* ajoute logo */}
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/film">Film</Link>
          </li>
          <li>
            <Link to="/tvProgrammes">Tv Programmes</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/recentlyadded">Recently Added</Link>
          </li>
          <li>
            <Link to="/myList">My List</Link>
          </li>
        </ul>
      </nav>

      {/* ajoute bar de recherch */}
      <Search />

      {/* ajoute compte utilisateur */}
      <IconUser />

      <Outlet />
    </>
  );
};

export default Layout;
