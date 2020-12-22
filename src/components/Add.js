import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    const getData = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      );
      console.log(res.data);
      if (!res.data.errors) {
        setResults(res.data.results);
      } else {
        setResults([]);
      }
    };

    getData();
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for movie"
              value={query}
              onChange={handleChange}
            />
          </div>
          {results.length > 0 ? (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}{" "}
              :
            </ul>
          ) : (
            <h1>Search for movie</h1>
          )}
        </div>
      </div>
    </div>
  );
};
