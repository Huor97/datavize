import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./composents/Nav";
import Home from "./pages/Home";
import TvProgrammes from "./pages/TvProgrammes";
import Films from "./pages/Films";
import RecentlyAdded from "./pages/RecentlyAdded";
import MyList from "./pages/MyList";
import Film from "./pages/Film";

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:tvShowsId" element={<Film />} />
        <Route path="/tvProgrammes" element={<TvProgrammes />} />
        <Route path="/films" element={<Films />} />
        <Route path="/recentlyAdded" element={<RecentlyAdded />} />
        <Route path="/myList" element={<MyList />} />
      </Routes>
    </div>
  );
}

export default App;
