export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlistMovies: [action.payload, ...state.watchlistMovies],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlistMovies: state.watchlistMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlistMovies: state.watchlistMovies.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchedMovies: [action.payload, ...state.watchedMovies],
      };
    default:
      return state;
  }
};
