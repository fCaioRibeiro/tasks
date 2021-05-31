import React from 'react';
import { useHistory } from 'react-router-dom';

import './Task.css';

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    const history = useHistory();

    const handleTaskInfoClick = () => {
        history.push(`/${task.id}`)
    }

    return ( 
        <div 
            className="task-container" 
            style={task.completed ? {borderLeft: '6px solid #ffae00'} : {}}
        >
            <div
                className='task-tittle' 
                onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button onClick={handleTaskInfoClick} className='info-task-button'>𝒊</button>
                <button onClick={() => handleTaskDeletion(task.id)} className='remove-task-button'>x</button>
            </div>

        </div>
     );
}
 
export default Task;