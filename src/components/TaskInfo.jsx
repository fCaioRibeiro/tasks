import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import './TaskInfo.css';

const TaskInfo = ({ tasks }) => {
    const params = useParams();
    const task = tasks.filter(task => task.id === parseInt(params.taskID))[0];

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
                    caio teve que fazer esse teste da atividade
                    voce sabia que é meio corno?
                </p>
                <small className='task-info-footer'>
                    Atividade { task.completed ? 'realizada' : 'não realizada'  }
                </small>
            </div>
        </>
     );
}
 
export default TaskInfo;