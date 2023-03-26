import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles["header-div"]}>
      <h1 className={styles["main-heading"]}>
        Welcome to{" "}
        <span className={styles["heading-focus"]}>Star Wars Movies</span> Page
      </h1>
    </div>
  );
};
export default Header;
