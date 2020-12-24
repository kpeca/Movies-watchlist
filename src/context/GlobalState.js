import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//initial state
const initialState = {
  watchlistMovies: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watchedMovies: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//create  context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlistMovies));
    localStorage.setItem("watched", JSON.stringify(state.watchedMovies));
  }, [state]);

  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    console.log("click");
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    console.log("clicked");
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlistMovies: state.watchlistMovies,
        watchedMovies: state.watchedMovies,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
