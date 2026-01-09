import { useState } from 'react'
import './App.css'
function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input 
          type="text" 
          placeholder="Enter a task..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        /><p></p>
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleComplete(index)} 
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;