import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" Component={Video} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
