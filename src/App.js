import { useState } from 'react';
import './App.css';

function App() {

    const [task, taskMange] = useState([])
    const [newIn, newTask] = useState('')

    function initialvlue(event) {
        newTask(event.target.value)
    }

    function addTodo() {
        taskMange([...task, newIn])
        console.log(task);
        newTask('')
    }

    function deleteTask(index) {
        console.log(index);
        let update = task.filter((element, i) => i !== index)
        taskMange(update)
    }

    return (
        <div className="container">
            <div className="title">
                <h1>Todo List</h1>
            </div>
            <div className="todo-list">
                <input value={newIn} onChange={initialvlue} type="text" placeholder='Enter a task...' />
                <button onClick={addTodo}>Add</button>
            </div>
            <div>
                <ul>
                    {
                        task.map((item, index) => {
                            return (
                                <li key={index}>
                                    <span> {item} </span>
                                    <button onClick={ () => deleteTask(index)}>Delete</button>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

        </div>
    )
}

export default App;
