import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import './TaskInfo.css';

const TaskInfo = ({ tasks }) => {
    const params = useParams();
    const task = tasks.filter(task => task.id == params.taskID)[0];
console.log(tasks);
    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className="task-info-container">
                <button className='task-back-info-button' onClick={handleBackClick}>x</button>
                <h2>{ task.title }</h2>
                <p>
                    { task.observation }
                </p>
                <small className='task-info-footer'>
                    Atividade { task.completed ? 'realizada' : 'não realizada'  }
                </small>
            </div>
        </>
     );
}
 
export default TaskInfo;