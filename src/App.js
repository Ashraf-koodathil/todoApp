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
                <input value={newIn} onChange={initialvlue} type="text" placeholder='What is the task today' />
                <i onClick={addTodo} class="fa-solid fa-plus" style={{color: "#000000;"}}></i>
            </div>
            <div>
                <ul>
                    {
                        task.map((item, index) => {
                            return (
                                <li  className='list' key={index}>
                                    <span> {item} </span>
                                    <button onClick={ () => deleteTask(index)}><i class="fa-solid fa-trash"></i></button>
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