import './App.css';
import React, { useState } from 'react';
import { FormControl, Button, InputLabel, Input } from '@mui/material';
import Todo from './component/Todo';

function App() {

  const [todos, setTodos] = useState(['Cooking Pasta 🍝', 'Take a Walk 🏃‍♂️', 'Fitting Glasses 🕶️ 👓']);
  // todos: short term memory
  const [input, setInput] = useState('');

  const addTodo = (event) =>{
    event.preventDefault();
    setTodos([...todos, input]); //input: here is new todo.
    setInput('');
  }

  return (
    <div className="App">
      <div className='App__container'>
        <h1>Hello React 🎨</h1>

        <form>
          <FormControl>
            <InputLabel></InputLabel>
            <Input value={input} onChange={
              event => setInput(event.target.value)
            }/>
          </FormControl>
          
          <Button disabled={!input} type='submit' onClick={addTodo} variant="contained">
            Add Todo
          </Button>
        </form>
        
        <ul>
          {todos.map(todo => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
