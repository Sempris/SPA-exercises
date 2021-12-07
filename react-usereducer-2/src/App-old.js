import './App.css';
import TodoForm from './components/TodoForm';
import { useState} from 'react';
import TodoContext from './context/TodoContext';
import TodoView from './components/TodoView';
// creatContext imported where we have Provider (parent component)
// useContext where we consume the context (child component inside Provider)
function App() {
  const [ todos , setTodos ] = useState([]);
  const addTodo = (str)=>{
    setTodos([...todos , str])

  }
  const delTodo = (index)=>{
    const filtered = todos.filter((item , i)=>i !== index )
    setTodos(filtered);
  }
 
  return (
    <>
    <TodoContext.Provider value={{ todos , addTodo , delTodo  }} >
        <TodoForm />
        <TodoView />
    </TodoContext.Provider>
    </>
  );
}

export default App;
