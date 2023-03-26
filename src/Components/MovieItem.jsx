import React from "react";
import styles from "./MovieItem.module.css";
const MovieItem = (props) => {
  return (
    <div className={styles["movie-item"]}>
      <p>
        <span className={styles["movie-title"]}> {props.title}</span>
        <span className={styles["episode-number"]}>{props.episode}</span>
      </p>
      <p>{props.description}</p>
    </div>
  );
};
export default MovieItem;
