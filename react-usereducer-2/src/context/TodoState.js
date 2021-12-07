import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";

function TodoState(props) {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  const addTodo = (str) => {
    dispatch({ type: "add", data: str });
  };

  const delTodo = (index) => {
    dispatch({ type: "del", data: index });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, delTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoState;
