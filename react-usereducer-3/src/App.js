import "./App.css";
import PersonForm from "./components/PersonForm";
import PersonView from "./components/PersonView";
import FormState from "./context/FormState";

function App() {
  return (
    <>
      <FormState>
        <div className="App">
          <h1>React useReducer Person Data</h1>
          <PersonForm />
          <PersonView />
        </div>
      </FormState>
    </>
  );
}

export default App;
