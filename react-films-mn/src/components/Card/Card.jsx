import React from "react";
import styles from "./Card.module.css";

function Card({ title, imgUrl, type }) {
  return (
    <div className={`card ${styles.card}`}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={imgUrl} alt="poster" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default Card;
