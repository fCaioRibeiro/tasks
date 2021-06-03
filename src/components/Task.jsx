import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Task = ({task, index, handleTaskDeletion}) => {
    const history = useHistory();

    const handleTaskInfoClick = () => {
        history.push(`/${task.id}`)
    }

    return (
        <Card.Body className='py-2' onClick={handleTaskInfoClick}>
            <Card.Title className='mb-0'>
                {task.title}
            </Card.Title>
            <Card.Text>
                Ordem {index+1} | Prioridade {task.priorite} 
                <Button onClick={() => handleTaskDeletion(task.id)}>x</Button>   
            </Card.Text>
        </Card.Body>
     );
}
 
export default Task;