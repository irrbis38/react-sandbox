import React from "react";
import styles from "./GoodsItem.module.css";

function GoodsItem(props) {
  const { mainId, displayName, displayDescription, price, addToCart } = props;
  const { background } = props.displayAssets[0];
  return (
    <div className={`card ${styles.goods__item}`} id={mainId}>
      <div className="card-image">
        <img src={background} alt={displayName} />
        <span className={`card-title ${styles.card__title}`}>
          {displayName}
        </span>
      </div>
      <div className={`card-content ${styles.card__content}`}>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn left"
          onClick={() => addToCart(mainId, displayName, price.regularPrice)}
        >
          Купить
        </button>
        <span className={`right ${styles.price}`}>${price.regularPrice}</span>
      </div>
    </div>
  );
}

export default GoodsItem;
