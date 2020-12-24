import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watchedMovies } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
        </div>

        {watchedMovies.length > 0 ? (
          <div className="movie-grid">
            {watchedMovies.map((movie) => (
              <MovieCard movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">There is no watched movies yet</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
