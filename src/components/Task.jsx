import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Task = ({task, index, handleTaskDeletion}) => {
    const history = useHistory();

    const handleTaskInfoClick = () => {
        history.push(`/${task.id}`)
    }

    return (

        <Card.Body style={{backgroundColor: '#deeeea'}}  className='py-2 px-0' onClick={handleTaskInfoClick}>
            <Card.Title className='mb-0 px-3' as='h6'>
                <small className='float-end fw-normal text-muted' style={{ fontSize: '12px' }}>11/11/2020</small>
                {task.title}
            </Card.Title>
            <Card.Text className='text-muted small px-3 m-0'>
                Ordem {index+1} | Prioridade {task.priorite} 
            </Card.Text>
        </Card.Body>
     );
}
 
export default Task;