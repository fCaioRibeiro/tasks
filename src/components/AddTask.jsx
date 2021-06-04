import React, { useState } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';

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

        <Card className='mb-1' bg='dark' text='white'>
            <Card.Body>
                <Card.Title>Nova tarefa</Card.Title>
                    <InputGroup className="mb-3">
                        <FormControl
                            className="w-25 bg-transparent text-white"
                            placeholder="Titulo"
                            aria-label="Titulo"
                            aria-describedby="basic-addon2"
                            onChange={handleInputTitleChange} 
                            value={inputTitle}
                        />
                        <FormControl
                            className="w-50 bg-transparent text-white"
                            placeholder="Observação"
                            aria-label="Observação"
                            aria-describedby="basic-addon2"
                            onChange={handleInputObservationChange} 
                            value={inputObservation} 
                        />
                        <FormControl
                            className='bg-transparent text-white'
                            type='number'
                            placeholder="Prioridade"
                            aria-label="Prioridade"
                            aria-describedby="basic-addon2"
                            onChange={handleInputPrioriteChange} 
                            value={inputPriorite || 0} 
                        />
                        <Button variant="outline-secondary border-light" onClick={handleTaskClick}>Add</Button>
                    </InputGroup>
            </Card.Body>
        </Card>
    );
}
 
export default AddTask;