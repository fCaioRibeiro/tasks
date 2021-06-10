import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';

const AddAction = ({ task, handleActionAddition, handleTaskDeletion }) => {
    const [inputTitle, setTitleDate] = useState('');
    const history = useHistory();

    const handleInputTitleChange = (e) => {
        setTitleDate(e.target.value);    
    }

    const handleActionClick = (add) => {
        
        if (add && !task.completed) {
            handleActionAddition(task.id, {
                title: inputTitle
                ,time: Date.now()    
            }, task.completed);
            
            setTitleDate('');

        } else if (!task.completed && !add) {
            handleActionAddition(task.id, {
                title: 'Task Finalizada'
                ,time: Date.now()    
            }, !task.completed);

        } else if (task.completed && !add) {
            handleActionAddition(task.id, {
                title: 'Task Reaberta'
                ,time: Date.now()    
            }, !task.completed);   
        }
        
    }

    const handleDeletionClick = () => {
        handleTaskDeletion(task.id);
        history.goBack();
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
            <Button variant="outline-secondary border-light" onClick={() => handleActionClick(true)}>Adicionar</Button>
            <Button variant="outline-success border-light" onClick={() => handleActionClick(false)}>
                {task && task.completed ? 'Reabrir' : 'Finalizar'}
            </Button>
            <Button variant="outline-danger border-light" onClick={() => handleDeletionClick()}>Remover</Button>
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