import React, { useState } from 'react';
import Task from './Task';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion, handleTaskOrder }) => {

    return (
        <DragDropContext onDragEnd={handleTaskOrder}>
            <Droppable droppableId='characters'>
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map( (task, index) => (
                            <Draggable key={task.id} index={index} draggableId={task.id+'task'}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Task key={task.id} index={index} ref={provided.innerRef} task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>    
                                    </div>
                                )}    
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    ); 
};

export default Tasks;