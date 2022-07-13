import React from "react";

import styles from "./Cart.module.css";

function Cart({ handleCartShow, quantity = [] }) {
  return (
    <div className={styles.cart} onClick={handleCartShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? (
        <span className={styles.cart_quantity}>{quantity}</span>
      ) : null}
    </div>
  );
}

export default Cart;
