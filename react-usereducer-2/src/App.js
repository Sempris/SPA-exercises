import './App.css';
import TodoForm from './components/TodoForm';
import TodoView from './components/TodoView';
import TodoState from './context/TodoState';

function App() { 
  return (
    <>
    <TodoState>
        <TodoForm />
        <TodoView >
           this is view component 
        </TodoView >
    </TodoState>
    </>
  );
}

export default App;
