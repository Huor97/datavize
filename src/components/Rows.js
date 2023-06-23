import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Rows.scss";
import { Link } from "react-router-dom";

function Rows({ title, fetchUrl, isPoster }) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`video/${movie.id}`}>
              {isPoster ? (
                <img
                  className="row__image"
                  src={`${baseUrl}${movie.poster_path}`}
                  alt="{movie?.title ||
                    movie?.original_title ||
                    movie?.name ||
                    movie?.original_name}"
                />
              ) : (
                <img
                  className="row__image"
                  src={`${baseUrl}${movie.backdrop_path}`}
                  alt="{movie?.title ||
                  movie?.original_title ||
                  movie?.name ||
                  movie?.original_name}"
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rows;
