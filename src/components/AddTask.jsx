import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputDate] = useState('');

    const handleInputChange = (e) => {
        setInputDate(e.target.value);    
    }

    const handleTaskClick = () => {
        handleTaskAddition(inputData);
        setInputDate('');    
    }

    return (
        <div className='add-task-container'>
            <input 
                onChange={handleInputChange} 
                value={inputData} 
                className='add-task-input' 
                type="text" 
            />
            <div className="add-task-button-container">
                <Button onClick={handleTaskClick}>
                    Adicionar
                </Button>
            </div>
        </div> 
    );
}
 
export default AddTask;