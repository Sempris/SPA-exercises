import "./App.css";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      <h1>Testing Example</h1>
      <p data-testid="main-p" style={{ color: "blue" }}>
        Paragraph with test ID.
      </p>
      <button>LightGreen</button>
      <ToDo />
    </div>
  );
}

export default App;
