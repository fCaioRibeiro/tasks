import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputTitle, setTitleDate] = useState('');
    const [inputObservation, setObservationDate] = useState('');

    const handleInputTitleChange = (e) => {
        setTitleDate(e.target.value);    
    }

    const handleInputObservationChange = (e) => {
        setObservationDate(e.target.value);    
    }

    const handleTaskClick = () => {
        handleTaskAddition({
            title: inputTitle
            ,observation: inputObservation     
        });

        setTitleDate('');    
        setObservationDate('');    
    }

    return (
        <div>
            <div className='add-task-container'>
                <input 
                    placeholder='Titulo'
                    onChange={handleInputTitleChange} 
                    value={inputTitle} 
                    className='add-task-input' 
                    type="text" 
                />
                <div className="add-task-button-container">
                    <Button onClick={handleTaskClick}>
                        Adicionar
                    </Button>
                </div>
            </div>
            <div className='add-task-container'>
                <input 
                    placeholder='Observação'
                    onChange={handleInputObservationChange} 
                    value={inputObservation} 
                    className='add-task-input' 
                    type="text" 
                />
            </div> 
        </div>
    );
}
 
export default AddTask;