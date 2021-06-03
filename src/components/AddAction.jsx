import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AddAction = ({handleActionAddition}) => {
    const [inputTitle, setTitleDate] = useState('');

    const handleInputTitleChange = (e) => {
        setTitleDate(e.target.value);    
    }

    const handleActionClick = () => {
        if (!inputTitle) return

        handleActionAddition({
            title: inputTitle
            ,time: Date.now()    
        });

        setTitleDate('');    
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
                    <Button onClick={handleActionClick}>
                        Adicionar
                    </Button>
                </div>
                {/* <div className="add-task-button-container">
                    <Button onClick={handleTaskClick}>
                        Adicionar
                    </Button>
                </div> */}
            </div>
        </div>
    );
}
 
export default AddAction;