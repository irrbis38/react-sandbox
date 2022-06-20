import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import "./App.css";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <div className="App">
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
