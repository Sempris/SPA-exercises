import React, { useContext, useRef } from "react";
import { ToDo } from "./ToDo";
import { todoContext } from "../App";

export const List = () => {
  const { todo, setTodo } = useContext(todoContext);

  const input = useRef();

  const handleDelete = (id) => {
    const filteredList = [...todo].filter((item) => item.id !== id);
    setTodo(filteredList);
  };

  const handleToggleState = (id) => {
    const targetItem = todo.find((item) => item.id === id);
    targetItem.done = !targetItem.done;
    const filteredList = [...todo].filter((item) => item.id !== id);
    setTodo([...filteredList, targetItem]);
  };

  const handleAdd = (value) => {
    setTodo([...todo, { id: Math.random(), text: value, done: false }]);
  };

  const handleEdit = (id) => {
    const targetItem = todo.find((item) => item.id === id);
    input.current.value = targetItem.text;

    handleDelete(id);

    if (input.current.value !== targetItem.text) {
      handleAdd(input.current.value);
    }
  };

  return (
    <div className="list">
      <div>
        <input type="text" ref={input} />
        <button
          className="btn btn-primary"
          onClick={() => handleAdd(input.current.value)}
        >
          +
        </button>
      </div>
      {todo.map(function (todo) {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleToggleState={handleToggleState}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
};
