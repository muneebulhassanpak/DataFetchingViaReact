import React from "react";
import styles from "./AddMovie.module.css";
const AddMovie = (props) => {
  const [data, setData] = React.useState({
    name: "",
    episode: "",
    description: "",
  });
  const nameChangeHandler = (event) => {
    setData((prev) => {
      return {
        ...prev,
        name: event.target.value,
      };
    });
  };
  const episodeChangeHandler = (event) => {
    setData((prev) => {
      return {
        ...prev,
        episode: event.target.value,
      };
    });
  };
  const descriptionChangeHandler = (event) => {
    setData((prev) => {
      return {
        ...prev,
        description: event.target.value,
      };
    });
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddition(data);
    setData({ name: "", episode: "", description: "" });
  };
  return (
    <div className={styles["add-movies-container"]}>
      <h2 className={styles["add-form-heading"]}>Add New Movies</h2>

      <form className={styles["add-movies-form"]} onSubmit={formSubmitHandler}>
        <div className="name-field-div">
          <input
            type="text"
            name="movie-name"
            id=""
            className={styles["movie-name"]}
            placeholder="Movie Name"
            onChange={nameChangeHandler}
            value={data.name}
          />
        </div>
        <div className="episode-field-div">
          <input
            type="number"
            name="movie-episode"
            id=""
            className={styles["movie-episode"]}
            placeholder="Movie Episode"
            onChange={episodeChangeHandler}
            value={data.episode}
          />
        </div>
        <div className="description-field-div">
          <input
            type="text"
            name="movie-description"
            id=""
            className={styles["movie-description"]}
            placeholder="Movie Description"
            onChange={descriptionChangeHandler}
            value={data.description}
          />
        </div>
        <div className={styles["form-controls-div"]}>
          <input
            type="submit"
            value="Add Movie"
            className={styles["submit-button"]}
          />
        </div>
      </form>
    </div>
  );
};
export default AddMovie;
