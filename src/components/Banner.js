import React from "react";
import { useState, useEffect } from "react";
import "./Banner.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import requests from "../config/Requests";
import axios from "axios";
import QuickView from "./QuickView";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + "..."
      : "No decription";
  }

  function handleClickPopup() {
    popup ? setPopup(false) : setPopup(true);
  }

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title ||
            movie?.original_title ||
            movie?.name ||
            movie?.original_name}
        </h1>
        <p className="banner__description">
          {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner__buttons">
          <Link to={`/video/${movie?.id}`}>
            <button className="banner__button banner__button--play">
              <FontAwesomeIcon icon={faPlay} /> Lecture
            </button>
          </Link>
          <button className="banner__button" onClick={handleClickPopup}>
            {" "}
            <FontAwesomeIcon icon={faCircleQuestion} />
            Plus d'info
          </button>
        </div>
      </div>
      <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        popup={handleClickPopup}
        popupStatut={popup}
      />
    </header>
  );
}

export default Banner;
