import "./App.css";
import React from "react";
import Counter from "./Counter";
import Input from "./Input";
import Output from "./Output";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <>
      <Counter />
      <Input value={inputValue} setInputValue={setInputValue} />
      <Output />
    </>
  );
}

export default App;
