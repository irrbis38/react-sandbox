import React from "react";

import styles from "./Filter.module.css";

function Filter({ filter, handleChangeFilter }) {
  return (
    <p className={styles.filter}>
      <label>
        <input
          className="with-gap"
          name="group3"
          value=""
          type="radio"
          checked={filter === ""}
          onChange={(e) => handleChangeFilter(e)}
        />
        <span>All</span>
      </label>
      <label>
        <input
          className="with-gap"
          name="group3"
          value="movie"
          type="radio"
          checked={filter === "movie"}
          onChange={(e) => handleChangeFilter(e)}
        />
        <span>Movies</span>
      </label>
      <label>
        <input
          className="with-gap"
          name="group3"
          value="series"
          type="radio"
          checked={filter === "series"}
          onChange={(e) => handleChangeFilter(e)}
        />
        <span>Series</span>
      </label>
    </p>
  );
}

export default Filter;
