import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const Task = ({task, index}) => {
    const history = useHistory();

    const handleTaskInfoClick = () => {
        history.push(`/task/${task.id}`)
    }

    return (
        <>
            <Card.Body  style={{backgroundColor: '#deeeea'}} className='py-2 px-0 rounded' onClick={handleTaskInfoClick}>
                <Card.Title className='mb-0 px-3' as='h6'>
                    <small className='float-end fw-normal text-muted' style={{ fontSize: '12px' }}>{moment(task.time).calendar()}</small>
                    <label style={{borderTop: task.completed?'solid 3px #32CD32':'solid 3px #FDE910'}}>{task.title}</label>
                </Card.Title>
                <Card.Text className='text-muted small px-3 m-0'>
                    Ordem {index+1} | Prioridade {task.priorite} 
                </Card.Text>
            </Card.Body>
        </>
     );
}
 
export default Task;