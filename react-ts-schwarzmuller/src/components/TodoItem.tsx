import React  from "react";

import styles from './TodoItem.module.css'

const TodoItem: React.FC<{text: string; onRemoveTodo:() => void}> = (props) => {
  return (
    <li className={styles.item}>
      {props.text}
      <button className={styles.remove_btn} onClick={props.onRemoveTodo}>remove</button>
    </li>
  );
};

export default TodoItem;