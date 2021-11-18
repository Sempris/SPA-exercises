import React from "react";

function Alert(props) {
  return (
    <div className={`alert ${props.color}`}>{props.text}</div>
  );
}

export default Alert;
