import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'moment/locale/pt-br';
import { Container } from 'react-bootstrap';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskInfo from './components/TaskInfo';
import Header from './components/Header';
import Login from './components/login/login';

const App = () =>  { 

  const tasksData = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(tasksData || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })

  const handleTaskDeletion = (taskID) => {
    const newTasks = tasks.filter(task => task.id !== taskID);
    setTasks(newTasks);
  }

  const handleTaskAddition = (task) => {
    const newTask = [...tasks, {
      title: task.title
      ,observation: task.observation
      ,priorite: task.priorite
      ,time: Date.now() 
      ,id: uuidv4(10)
      ,completed: false
      ,actions : [{
        title: 'Task Aberta'
        ,time: Date.now()
      }]
    }];

    setTasks(newTask);
  }

  const handleActionAddition = (taskID, action, completed) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskID) return {...task, actions: [...task.actions, action], completed: completed}

      return task;
    });
    
    setTasks(newTasks);  
  }

  const handleTaskOrder = (result) => {
    if (!result.destination) return;

    const newTasks = [...tasks];
    const [reorderedItem] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, reorderedItem);

    setTasks(newTasks);
  }

  return (
    <Router>
      <Route path='/login' exact component={Login} />
      <Container>
        <Route path='/' exact render={() => (
          <>
            <Header title='Tarefas' />

            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks={tasks} 
              handleTaskOrder={handleTaskOrder}
            />

          </>
        )} />
        <Route path='/task/:taskID' exact render={ (props) => (
          <> 
            <Header title='Tarefas' />
            <TaskInfo 
              {...props} 
              tasks={tasks} 
              handleActionAddition={handleActionAddition} 
              handleTaskDeletion={handleTaskDeletion}
            /> 
          </> 
        )} />
      </Container>
    </Router>
  )
}

export default App;