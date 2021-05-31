import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskInfo from './components/TaskInfo';
import './App.css';

const App = () =>  {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=11')

      setTasks(data)
    }

    fetchTasks();
  }, [])

  const handleTaskClick = (taskID) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskID) return {...task, completed: !task.completed}

      return task;
    });
    
    setTasks(newTasks);
  }

  const handleTaskDeletion = taskID => {
    const newTasks = tasks.filter(task => task.id !== taskID);

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTittle) => {
    const newTask = [...tasks, {
      tittle: taskTittle
      ,id: uuidv4(10)
      ,completed: false
    }];

    setTasks(newTask);
  }

  return (
    <Router>
      <div className='container'>
        <h1 style={{color:'white'}}>Tarefas</h1>
        <Route path='/' exact render={() => (
          <>

            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks={tasks} 
              handleTaskClick={handleTaskClick} 
              handleTaskDeletion={handleTaskDeletion}
            />

          </>
        )} />
        <Route path='/:taskID' exact render={ (props) => <TaskInfo tasks={tasks} /> } />
      </div>
    </Router>
  )
}

export default App