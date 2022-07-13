import styles from "./CartItem.module.css";

function CartItem({
  id,
  name,
  price,
  quantity,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <li className={`collection-item ${styles.cart__item}`}>
      <span className={styles.cart__name}>{name}</span>
      <span className={styles.cart__quantity}>
        <button
          disabled={quantity <= 1}
          onClick={() => {
            decreaseQuantity(id);
          }}
        >
          -
        </button>
        {quantity}
        <button
          onClick={() => {
            increaseQuantity(id);
          }}
        >
          +
        </button>
      </span>
      <span className={styles.cart__price}>
        x ${price} = ${quantity * price}
      </span>
      <i
        className={`material-icons ${styles.cart__remove}`}
        onClick={() => {
          removeFromCart(id);
        }}
      >
        close
      </i>
    </li>
  );
}

export default CartItem;
