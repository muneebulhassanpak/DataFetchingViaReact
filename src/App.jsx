import React from "react";
import styles from "./App.module.css";

import Header from "./Components/Header";
import MoviesList from "./Components/MoviesList";

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const fetchMoviesHandler = () => {
    setLoading(true);
    setError(null);
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .catch(() => {
        setError(true);
        throw new Error();
      })
      .then((data) => {
        setLoading(false);
        console.log(data.results);
        setMovies(data.results);
      });
  };
  React.useEffect(() => {
    fetchMoviesHandler();
  }, []);
  return (
    <div className={styles["app-container"]}>
      <Header />
      <button onClick={fetchMoviesHandler} className={styles["fetch-button"]}>
        Fetch Movies
      </button>
      {loading && error && <p>Error loading data</p>}
      {loading && !error ? (
        <p className={styles["loading-state"]}>Loading.........</p>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default App;
