import React, { useReducer } from "react";
import FormContext from "./FormContext";

function FormState(props) {
  const reducer = (state, action) => {
      if (action.type === 'submit') {
        return [...state, action.data];
      }
      return state;
  };
  const [userData, dispatch] = useReducer(reducer, []);

  const submitData = (obj) => {
    dispatch({ type: "submit", data: obj });
  };

  return (
    <FormContext.Provider value={{ userData, submitData }}>
      {props.children}
    </FormContext.Provider>
  );
}

export default FormState;
