import React from 'react';
import { useHistory } from 'react-router-dom';

import './Task.css';

const Task = ({task, index, handleTaskClick, handleTaskDeletion}) => {
    const history = useHistory();

    const handleTaskInfoClick = () => {
        history.push(`/${task.id}`)
    }

    return (
        <li
            className={task.completed ? 'task-container-completed' : 'task-container'} 
            style={task.completed ? {borderLeft: '6px solid #ffae00'} : {}}
        >
            <div
                className='task-tittle' 
                onClick={() => handleTaskClick(task.id)}>
                {task.title}
                <h6 className='priorite-task'>Prioridade {index}</h6>
            </div>

            <div className="buttons-container">
                <button onClick={handleTaskInfoClick} className='info-task-button'>𝒊</button>
                <button onClick={() => handleTaskDeletion(task.id)} className='remove-task-button'>x</button>
            </div>

        </li>
     );
}
 
export default Task;