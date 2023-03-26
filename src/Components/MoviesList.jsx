import React from "react";
import MovieItem from "./MovieItem";
import styles from "./MoviesList.module.css";
const MoviesList = (props) => {
  return (
    <div className={styles["movies-list-container"]}>
      {props.movies.map((item) => (
        <MovieItem
          title={item.title}
          episode={item.episode}
          description={item.description}
        />
      ))}
    </div>
  );
};
export default MoviesList;
