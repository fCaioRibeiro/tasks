import React, { useState } from 'react';
import { Button, Card, FloatingLabel } from 'react-bootstrap';

const AddTask = ({handleTaskAddition}) => {
    const [inputTitle, setTitleDate] = useState('');
    const [inputObservation, setObservationDate] = useState('');
    const [inputPriorite, setPrioriteDate] = useState('');

    const handleInputTitleChange = (e) => {
        setTitleDate(e.target.value);    
    }

    const handleInputObservationChange = (e) => {
        setObservationDate(e.target.value);    
    }

    const handleInputPrioriteChange = (e) => {
        if (e.target.value < 0) 
            return setPrioriteDate(0);

        setPrioriteDate(e.target.value);    
    }

    const handleTaskClick = () => {
        if (!inputTitle || !inputObservation || !inputPriorite) return

        handleTaskAddition({
            title: inputTitle
            ,observation: inputObservation     
            ,priorite: inputPriorite     
        });

        setTitleDate('');    
        setObservationDate('');    
        setPrioriteDate(0);    
    }

    return (

        <Card>
            <Card.Body>
                <Card.Title>Nova tarefa</Card.Title>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        // <div>
        //     <div className='add-task-container'>
        //         <input 
        //             placeholder='Titulo'
        //             onChange={handleInputTitleChange} 
        //             value={inputTitle} 
        //             className='add-task-input' 
        //             type="text" 
        //         />
        //         <div className="add-task-button-container">
        //             <Button onClick={handleTaskClick}>
        //                 Adicionar
        //             </Button>
        //         </div>
        //     </div>
        //     <div className='add-task-container'>
        //         <input 
        //             placeholder='Observação'
        //             onChange={handleInputObservationChange} 
        //             value={inputObservation} 
        //             className='add-task-input' 
        //             type="text" 
        //         />
        //         <input 
        //             placeholder='Prio'
        //             onChange={handleInputPrioriteChange} 
        //             value={inputPriorite} 
        //             className='add-task-input-priorite' 
        //             type="number" 
        //         />
        //     </div> 
        // </div>
    );
}
 
export default AddTask;