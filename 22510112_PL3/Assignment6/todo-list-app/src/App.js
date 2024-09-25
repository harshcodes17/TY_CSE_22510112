import React, { useState } from 'react';
import { Container, TextField, Button, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    
    <Container maxWidth="sm" style={{ marginTop: '2rem'  }}>
      
      <Typography variant="h4" component="h1" gutterBottom>
        To-Do List
      </Typography>
      {showAlert && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-3" role="alert">
          <strong className="font-bold">Wonderful!</strong>
          <span className="block sm:inline"> Yippe you are a productive person now!</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setShowAlert(false)}>
            <svg className="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <TextField
          label="Add a new task"
          variant="outlined"
          fullWidth
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <Button onClick={addTask} variant="contained" color="primary" style={{ marginLeft: '1rem' }}>
          Add
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'contained' : 'outlined'}>
          All
        </Button>
        <Button onClick={() => setFilter('active')} variant={filter === 'active' ? 'contained' : 'outlined'}>
          Active
        </Button>
        <Button onClick={() => setFilter('completed')} variant={filter === 'completed' ? 'contained' : 'outlined'}>
          Completed
        </Button>
      </div>
      
      <List>
        {filteredTasks.map((task, index) => (
          <ListItem key={index} button onClick={() => toggleTaskCompletion(index)}>
            <ListItemText
              primary={task.text}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
      
    </Container>
  );
};

export default App;