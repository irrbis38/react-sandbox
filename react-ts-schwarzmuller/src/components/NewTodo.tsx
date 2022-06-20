import React, {useContext} from "react";

import { TodosContext } from "../store/todos-context";

import styles from './NewTodo.module.css'

const NewTodo:React.FC = () => {

  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);

    todoTextInputRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="newTodo">Input text</label>
      <input type="text" id="newTodo" ref={todoTextInputRef} />
      <button type="submit">Add new item</button>
    </form>
  );
}

export default NewTodo;