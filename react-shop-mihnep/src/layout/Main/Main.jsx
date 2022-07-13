import { useState, useEffect, useReducer } from "react";
import Cart from "../../components/Cart/Cart";
import CartList from "../../components/CartList/CartList";
import GoodsList from "../../components/GoodsList/GoodsList";
import Preloader from "../../components/Preloader/Preloader";
import Overlay from "../../components/Overlay/Overlay";
import { API_KEY, API_URL } from "../../config";

import styles from "./Main.module.css";

function orderReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TO_CART":
      return [...state, ...payload];
    case "REMOVE_FROM_CART":
      return [...payload];
    case "INCREASE_QUANTITY":
      return [...payload];
    case "DECREASE_QUANTITY":
      return [...payload];
    default:
      return state;
  }
}

function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartShow, setIsCartShow] = useState(false);
  const [order, dispatch] = useReducer(orderReducer, []);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  const addToCart = (id, name, price) => {
    const isExist = order.some((el) => el.id === id);
    if (!isExist) {
      let newOrder = {
        id: id,
        name: name,
        price: price,
        quantity: 1,
      };
      dispatch({ type: "ADD_TO_CART", payload: [newOrder] });
    }
  };

  const removeFromCart = (id) => {
    let newOrder = order.filter((item) => item.id !== id);
    dispatch({ type: "REMOVE_FROM_CART", payload: newOrder });
  };

  const increaseQuantity = (id) => {
    let index = order.findIndex((item) => item.id === id);
    const newOrder = [...order];
    newOrder[index].quantity += 1;
    dispatch({ type: "INCREASE_QUANTITY", payload: newOrder });
  };

  const decreaseQuantity = (id) => {
    let index = order.findIndex((item) => item.id === id);
    const newOrder = [...order];
    newOrder[index].quantity -= 1;
    dispatch({ type: "DECREASE_QUANTITY", payload: newOrder });
  };

  const handleCartShow = () => {
    setIsCartShow(!isCartShow);
  };

  // useEffect(() => {
  //   console.log(order);
  // }, [order]);

  return (
    <div className={styles.main}>
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {isCartShow && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      )}
      {isCartShow && <Overlay />}
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
    </div>
  );
}

export default Main;
