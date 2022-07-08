import React from "react";
import Card from "./../Card/Card";
import styles from "./Movies.module.css";

function Movies({ films }) {
  return (
    <div className={styles.wrapper}>
      {films.map((item) => (
        <Card
          key={item.imdbID}
          title={item.Title}
          imgUrl={item.Poster}
          type={item.Type}
        />
      ))}
    </div>
  );
}

export default Movies;
