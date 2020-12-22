export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlistMovies: [action.payload, ...state.watchlistMovies],
      };
    default:
      return state;
  }
};
