import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TaskForm = () => {
    const [task, setTask] = useState({
        title: '',
        done: false
    });

    const { addTask } = useContext(GlobalContext);

    const handleOnChangeTaskTitle = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
    }

    const addNewTask = () => {
        addTask(task);
    }

    return (
        <div>
            <input type='text' name='title' placeholder='Type a task ...' onChange={handleOnChangeTaskTitle} />
            <button className='btnSave' onClick={() => {addNewTask()}}>Save</button>
        </div>
    );
}

export default TaskForm;