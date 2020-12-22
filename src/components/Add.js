import React, { useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

const Add = () => {
  const [query, setQeury] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setQeury(e.target.value);

    const getData = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      );
      console.log(res.data);
      setResults(res.data.results);
    };
    getData();
  };
  return (
    <div className="container">
      <div className="add-content">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Type your movie"
            onChange={handleChange}
          />
        </div>
        {results.length > 0 ? (
          <ul className="results">
            {results.map((movie) => (
              <ResultCard movie={movie} />
            ))}
          </ul>
        ) : (
          <h1>Movie list is empty</h1>
        )}
      </div>
    </div>
  );
};

export default Add;
