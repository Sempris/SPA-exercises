import React from "react";

function TodoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.data];
    case "del":
      return state.filter((item, index) => index !== action.data);
    default:
      return state;
  }
}

export default TodoReducer;
