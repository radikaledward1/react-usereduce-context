import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TaskList = () => {

    const {tasks} =  useContext(GlobalContext);

    return (
        <div>
            {tasks.map((task, index) => (
                <h1 key={index}>{task.title}</h1>
            ))}
        </div>
    );
}

export default TaskList;