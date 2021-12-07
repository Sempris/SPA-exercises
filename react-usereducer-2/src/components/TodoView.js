import React , { useContext} from 'react';
import TodoContext from '../context/TodoContext';

function TodoView(props) {
    const { todos , addTodo , delTodo } = useContext(TodoContext)

    return (
        <div className="App">
            <p> {props.children} </p>
            { todos.map((item, index)=> <h4 key={index}>{item} <button onClick={()=> delTodo(index)}>x</button> </h4>)}
          
        </div>
    )
}

export default TodoView
