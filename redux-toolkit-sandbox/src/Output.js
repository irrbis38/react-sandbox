import { useSelector } from "react-redux";

const Output = () => {
  const text = useSelector((state) => state.addText.value);
  return <p>{text}</p>;
};

export default Output;
