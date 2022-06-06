import './App.css';
import React, { useState } from 'react';

function App() {

  const [todos, setTodos] = useState(['Cooking Pasta 🍝', 'Take a Walk 🏃‍♂️', 'Fitting Glasses 🕶️ 👓']);
  // todos: short term memory
  const [input, setInput] = useState('');

  const addTodo = (event) =>{
    setTodos([...todos, input]); //input: here is new todo.
  }

  return (
    <div className="App">
      <div className='App__container'>
        <h1>Hello React 🎨</h1>
        <input value={input} onChange={
          event => setInput(event.target.value)
        }/>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
