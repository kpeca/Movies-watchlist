import React, { useContext } from "react";
import { GlobalContext, GlobalState } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlistMovies } = useContext(GlobalContext);

  const isInWatchlist = watchlistMovies.find((m) => m.id === movie.id);
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <h3 className="title">{movie.title}</h3>
        <h4 className="release-date">
          {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
        </h4>
        <div className="vote-rating">
          <span class="material-icons yellow1">grade</span>
          <h3 className="release-date">{movie.vote_average}</h3>
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={() => addMovieToWatchlist(movie)}
            disabled={isInWatchlist ? true : false}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
