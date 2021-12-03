import React from "react";

export const ToDo = ({ todo, handleDelete, handleToggleState, handleEdit }) => {
  return (
    <div
      className="listItem"
      style={{ textDecoration: todo.done && "line-through" }}
    >
      <div className="itemText">{todo.text}</div>
      <div className="itemButtons">
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          Close
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            handleToggleState(todo.id);
          }}
        >
          Done
        </button>
        <button className="btn btn-warning" onClick={() => handleEdit(todo.id)}>
          Edit
        </button>
      </div>
    </div>
  );
};
