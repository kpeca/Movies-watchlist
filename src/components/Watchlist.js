import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const { watchlistMovies } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          {watchlistMovies.length === 1 ? (
            <span className="count-pill">1 Movie</span>
          ) : (
            <span className="count-pill">{watchlistMovies.length} Movies</span>
          )}
        </div>

        {watchlistMovies.length > 0 ? (
          <div className="movie-grid">
            {watchlistMovies.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in Watchlist</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
