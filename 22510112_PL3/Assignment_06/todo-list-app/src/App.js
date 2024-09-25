// src/App.js
import React, { useState } from 'react';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow p-2 border border-gray-300 rounded-l"
          />
          <button
            onClick={addTask}
            className="p-2 bg-green-500 text-white rounded-r hover:bg-green-600"
          >
            Add
          </button>
        </div>
        <ul className="list-none p-0">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 border-b border-gray-300 ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              <span onClick={() => toggleTaskCompletion(index)} className="cursor-pointer">
                {task.text}
              </span>
              <button
                onClick={() => removeTask(index)}
                className="ml-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;