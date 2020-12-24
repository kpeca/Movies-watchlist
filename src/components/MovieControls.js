import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched } = useContext(
    GlobalContext
  );

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye">Add</i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw far fa-times">Remove</i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn">
            <i className="fa fw far eye slash">slash</i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
