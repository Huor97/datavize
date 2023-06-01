import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Film from "./pages/Film";
import TvProgrammes from "./pages/TvProgrammes";
import Films from "./pages/Films";
import NoPage from "./pages/NoPage";
import RecentlyAdded from "./pages/RecentlyAdded";
import MyList from "./pages/MyList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="film" element={<Film />} />
              <Route path="tvProgrammes" element={<TvProgrammes />} />
              <Route path="films" element={<Films />} />
              <Route path="recentlyAdded" element={<RecentlyAdded />} />
              <Route path="myList" element={<MyList />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
