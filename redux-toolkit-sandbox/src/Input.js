import React from "react";
import { useDispatch } from "react-redux";
import { add, clear } from "./redux/addTextSlice";

const Input = ({ value, setInputValue }) => {
  const inputField = React.useRef();
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        ref={inputField}
        value={value}
        onChange={() => setInputValue(inputField.current.value)}
      />
      <button
        type="button"
        onClick={() => {
          dispatch(add(inputField.current.value));
          setInputValue("");
        }}
      >
        Save text
      </button>
      <button
        onClick={() => {
          dispatch(clear());
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Input;
