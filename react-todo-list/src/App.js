import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { List } from "./components/List";
import { createContext } from "react";

export const todoContext = createContext();

function App() {
  const [todo, setTodo] = useState([
    {
      id: Math.random(),
      text: "First task",
      done: false,
    },
    {
      id: Math.random(),
      text: "Second task",
      done: false,
    },
    {
      id: Math.random(),
      text: "Third task",
      done: false,
    },
  ]);

  return (
    <todoContext.Provider value={{ todo, setTodo }}>
      <div className="App">
        <List />
      </div>
    </todoContext.Provider>
  );
}

export default App;
