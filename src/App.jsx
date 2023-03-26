import React from "react";
import styles from "./App.module.css";

import Header from "./Components/Header";
import MoviesList from "./Components/MoviesList";
import AddMovie from "./Components/AddMovie";

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const fetchMoviesHandler = () => {
    setLoading(true);
    setError(null);
    // fetch("https://swapi.dev/api/films")
    fetch(
      "https://reactappwithstarwarsapi-default-rtdb.firebaseio.com/movies.json"
    )
      .then((response) => {
        // console.log(response.json());
        return response.json();
      })
      .catch(() => {
        setError(true);
        throw new Error();
      })
      .then((data) => {
        setLoading(false);
        const loadedMovies = [];
        console.log(data);
        for (const key in data) {
          loadedMovies.push({
            title: data[key].name,
            episode: data[key].episode,
            description: data[key].description,
          });
        }
        console.log(loadedMovies);
        setMovies(loadedMovies);
        // console.log(data.results);
      });
  };
  React.useEffect(() => {
    fetchMoviesHandler();
  }, []);
  const newMovieHandler = (movie) => {
    fetch(
      "https://reactappwithstarwarsapi-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
      }
    );
  };
  return (
    <div className={styles["app-container"]}>
      <Header />
      <AddMovie onAddition={newMovieHandler} />
      <button onClick={fetchMoviesHandler} className={styles["fetch-button"]}>
        Fetch Movies
      </button>
      {loading && error && <p>Error loading data</p>}
      {/* {loading && !error && movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <p>No Data to show</p>
      )} */}
      {loading && !error ? (
        <p className={styles["loading-state"]}>Loading.........</p>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default App;
