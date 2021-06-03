import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Action from './TaskAction';
import AddAction from './AddAction';
import './TaskInfo.css';

const TaskInfo = ({ tasks, handleTaskClick }) => {
    const params = useParams();
    const task = tasks.filter(task => task.id === params.taskID)[0];

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
                <AddAction />
                <button className='task-back-info-button' onClick={() => handleTaskClick(task.id)}>aqui</button>
            </div>

            <div className="task-info-container">
                <h2>Historico</h2>
                
                <ul>
                    { (task.actions || []).map(action => <Action action={action} />) }
                </ul>
            </div>
        </>
     );
}
 
export default TaskInfo;