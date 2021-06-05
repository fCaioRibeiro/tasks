import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Actions from './TaskAction';
import AddAction from './AddAction';
import { Card, ListGroup } from 'react-bootstrap';

const TaskInfo = ({ tasks, handleActionAddition,   }) => {
    const params = useParams();
    const task = tasks.filter(task => task.id === params.taskID)[0];

    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    }

    return (
        <>
            <Card 
                className='mb-3'
                bg='dark'
                text='white'
            >
                <Card.Body>
                    <Card.Title>{ task.title }</Card.Title>
                    <Card.Text>
                        { task.observation }
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <AddAction task={task} handleActionAddition={handleActionAddition}/>    
                </Card.Footer>
            </Card>

            <Card>
                <ListGroup className="list-group-flush">
                    {
                        task.actions.map((action, index) => (
                            <Actions key={index} action={action}/>
                        ))
                    }
                </ListGroup>
            </Card>
        </>    
        
        // <>
        //     <div className="task-info-container">
        //         <button className='task-back-info-button' onClick={handleBackClick}>Voltar</button>
        //         <h2>{ task.title }</h2>
        //         <p>
        //             { task.observation }
        //         </p>
        //         <AddAction />
        //         <button className='task-back-info-button' onClick={() => (task.id)}>aqui</button>
        //     </div>

        //     <div className="task-info-container">
        //         <h2>Historico</h2>
                
        //         <ul>
        //             { (task.actions || []).map(action => <Action action={action} />) }
        //         </ul>
        //     </div>
        // </>
     );
}
 
export default TaskInfo;