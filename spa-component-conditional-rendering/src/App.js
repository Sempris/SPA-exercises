import Alert from "./components/Alert";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [color, setColor] = useState({
    color: "alert-secondary",
    text: "Click on a button to select a state",
  });

  const selectDanger = () => {
    setColor({
      color: "alert-danger",
      text: "OMG! Something really bad has happened!",
    });
  };

  const selectWarning = () => {
    setColor({
      color: "alert-warning",
      text: "Well, it is not that bad after all!",
    });
  };

  const selectSuccess = () => {
    setColor({ color: "alert-success", text: "I am supposed to be green." });
  };

  return (
    <div className="main">
      <div className="buttons">
        <button onClick={selectDanger} className="btn btn-danger">
          Danger
        </button>
        <button onClick={selectWarning} className="btn btn-warning">
          Warning
        </button>
        <button onClick={selectSuccess} className="btn btn-success">
          Success
        </button>
      </div>
      <div className="container">
          <Alert color={color.color} text={color.text} />
      </div>
    </div>
  );
}

export default App;
