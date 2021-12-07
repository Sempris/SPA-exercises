import React, { useContext , useState} from 'react';
import TodoContext from '../context/TodoContext';

function TodoForm() {
    const [text , setText] = useState('')
    const {  addTodo   } = useContext(TodoContext);

    const submitHandler = (e)=>{
        e.preventDefault();
        addTodo(text);
        setText('');
    }
    return (
        <div  className="App">
            <form onSubmit={ submitHandler}>
            <label> what to do ? </label>
            <input type ="text"  value={text} onChange = { (e)=> setText(e.target.value) } />
            <div>
                <button type="submit" > add</button>
            </div>
        </form>

        </div>
        
    )
}

export default TodoForm
