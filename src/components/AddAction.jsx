import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const AddAction = ({ task, handleActionAddition,  }) => {
    const [inputTitle, setTitleDate] = useState('');

    const handleInputTitleChange = (e) => {
        setTitleDate(e.target.value);    
    }

    const handleActionClick = (completed = task.completed) => {
        
        if (inputTitle && !completed) {
            handleActionAddition(task.id, {
                title: inputTitle
                ,time: Date.now()    
            }, completed);
            
            setTitleDate('');    
        } else if (!completed && !inputTitle) {
            handleActionAddition(task.id, {
                title: 'Task Finalizada'
                ,time: Date.now()    
            }, !completed);
        } else if (completed && !inputTitle) {
            handleActionAddition(task.id, {
                title: 'Task Reaberta'
                ,time: Date.now()    
            }, !completed);   
        }

    }

    return (

        <InputGroup className="mb-3">
            <FormControl
                className="w-25 bg-transparent text-white"
                placeholder="Assunto"
                aria-label="Assunto"
                aria-describedby="basic-addon2"
                onChange={handleInputTitleChange}
                value={inputTitle}
            />
            <Button variant="outline-secondary border-light" onClick={() => handleActionClick()}>Adicionar</Button>
            <Button variant="outline-success border-light" onClick={() => handleActionClick()}>
                {task.completed ? 'Reabrir' : 'Finalizar'}
            </Button>
            <Button variant="outline-danger border-light">Remover</Button>
        </InputGroup>

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
        //             <Button onClick={handleActionClick}>
        //                 Adicionar
        //             </Button>
        //         </div>
        //         {/* <div className="add-task-button-container">
        //             <Button onClick={}>
        //                 Adicionar
        //             </Button>
        //         </div> */}
        //     </div>
        // </div>
    );
}
 
export default AddAction;