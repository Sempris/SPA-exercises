import { useReducer } from "react";
import "./App.css";

function App() {
  const reducer = (prevState, action) => {
    // if (action.type === 'increment') {
    // 	return {count: prevState.count + 1};
    // }
    // else if (action.type === 'decrement') {
    // 	return {count: prevState.count - 1};
    // }
    // else if (action.type === 'addTen') {
    // 	return {count: prevState.count + 10};
    // }
    // else if (action.type === 'subTen') {
    // 	return {count: prevState.count - 10};
    // }
    // return prevState;
    switch (action.type) {
      case "increment":
        return { count: prevState.count + 1 };
      case "decrement":
        return { count: prevState.count - 1 };
      case "addTen":
        return { count: prevState.count + 10 };
      case "subTen":
        return { count: prevState.count - 10 };
      case "mulTen":
        return { count: prevState.count * 10 };
      default:
        return prevState;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 1 });

  return (
    <div className="App">
      <h1>React useReducer</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "addTen" })}>+10</button>
      <button onClick={() => dispatch({ type: "decrement" })}>&ndash;</button>
      <button onClick={() => dispatch({ type: "subTen" })}>&ndash;10</button>
      <button onClick={() => dispatch({ type: "mulTen" })}>*10</button>
    </div>
  );
}

export default App;
