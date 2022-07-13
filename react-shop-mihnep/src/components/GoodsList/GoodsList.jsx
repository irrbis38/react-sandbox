import styles from "./GoodsList.module.css";
import GoodsItem from "../GoodsItem/GoodsItem";

function GoodsList({ goods = [], addToCart }) {
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className={styles.goods}>
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default GoodsList;
