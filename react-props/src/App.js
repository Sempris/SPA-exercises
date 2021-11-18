import { useState } from "react";
import "./App.css";
import Cars from "./components/Cars";

function App() {
  const [message, setMessage] = useState("Welcome to the Website");
  const handler = () => {
    setMessage("Thanks for subscription!");
  };

  const [state, setState] = useState({
    msg: "Please log in",
    isLoggedIn: false,
  });
  const loginHandler = () => {
    if (state.isLoggedIn) {
      setState({ isLoggedIn: false, msg: "Please log in" });
    } else {
      setState({ isLoggedIn: true, msg: "You are logged in" });
    }
  };

  const cars = [
    { brand: "BMW", model: "X5", img: "./images/bmw-x5.png" },
    { brand: "Ford", model: "Galaxy", img: "./images/ford-galaxy.jpeg" },
    { brand: "Kia", model: "Sportage", img: "./images/kia-sportage.jpg" },
  ];

  return (
    <div className="App">
      <h1>React Props and State</h1>
      <h2>{message}</h2>
      <p>
        <button onClick={handler}>Subscribe</button>
      </p>
      <div className="main">
        {cars.map((item) => (
          <Cars brand={item.brand} model={item.model} img={item.img} />
        ))}
      </div>
      <h2>{state.msg}</h2>
      <p>
        <button onClick={loginHandler}>
          {state.isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </p>
    </div>
  );
}

export default App;
