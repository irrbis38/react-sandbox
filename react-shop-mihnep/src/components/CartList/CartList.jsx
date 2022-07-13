import styles from "./CartList.module.css";
import CartItem from "../CartItem/CartItem";

function CartList({
  handleCartShow,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  order = [],
}) {
  let totalPrice =
    order.length === 0
      ? 0
      : order.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
  return (
    <div className={styles.cart__list}>
      <h4 className={styles.cart__title}>Корзина</h4>
      <i
        className={`material-icons ${styles.cart__close}`}
        onClick={handleCartShow}
      >
        close
      </i>
      <ul className={`collection ${styles.cart__collection}`}>
        {order.length === 0 ? (
          <h3 className={styles.cart__empty}>Корзина пуста</h3>
        ) : (
          order.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))
        )}
      </ul>
      <h4 className={styles.cart__title}>Общая сумма заказа: ${totalPrice} </h4>
    </div>
  );
}

export default CartList;
