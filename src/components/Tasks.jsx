import React from 'react';
import Task from './Task';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Card, Col, Row } from 'react-bootstrap';

const Tasks = ({ tasks, handleTaskDeletion, handleTaskOrder }) => {

    return (
        <DragDropContext onDragEnd={handleTaskOrder}>
            <Droppable droppableId='characters'>
                {(provided) => (
                    <Row {...provided.droppableProps} ref={provided.innerRef} xs={1} md={1} className="g-4">
                        <Col>
                            {tasks.map( (task, index) => (
                                <Draggable key={task.id} index={index} draggableId={task.id+'task'}>
                                    {(provided) => (
                                            <Card
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="mb-2"
                                            >
                                                <Task key={task.id} index={index} ref={provided.innerRef} task={task} handleTaskDeletion={handleTaskDeletion} />    
                                            </Card>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </Col>
                    </Row>
                )}
            </Droppable>
        </DragDropContext>
    ); 
};

export default Tasks;