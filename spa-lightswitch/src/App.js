import React, { useState } from "react";
import Room from "./components/Room";
import './App.css';

export default function App() {
  const [state, setState] = useState({
    text: "lit",
    light: "lit",
    switch: true
  });

  const switchLight = () => {
    if (state.switch) {
      setState({ switch: false, text: "dark", light: "dark" });
    } else {
      setState({ switch: true, text: "lit", light: "lit" });
    }
  };

  return (
    <div className={`room ${state.light}`}>
      <button onClick={switchLight}>Toggle Light</button>
      <Room text={state.text} />
    </div>
  );
}
