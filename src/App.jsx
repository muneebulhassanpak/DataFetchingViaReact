import React from "react";
import styles from "./App.module.css";

import Header from "./Components/Header";
import MoviesList from "./Components/MoviesList";

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  };
  return (
    <div className={styles["app-container"]}>
      <Header />
      <button onClick={fetchMoviesHandler} className={styles["fetch-button"]}>
        Fetch Movies
      </button>
      <MoviesList movies={movies} />
    </div>
  );
};

export default App;
