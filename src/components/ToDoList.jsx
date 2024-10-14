import React from "react";
import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim != "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <>
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" placeholder="Enter a new task..." 
                value={newTask} onChange={handleInputChange}/>
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="move-up-btn" onClick={() => moveTaskUp(index)}>More Priority</button>
                    <button className="move-down-btn" onClick={() => moveTaskDown(index)}>Less Priority</button>
                </li>
                )}
            </ol>
        </div>
        </>
    )
}

export default ToDoList;