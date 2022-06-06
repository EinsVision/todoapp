import './App.css';
import React, { useEffect, useState } from 'react';
import { FormControl, Button, InputLabel, Input } from '@mui/material';
import Todo from './component/Todo';
import db from '../src/firebase/firebase';
import { addDoc, collection, getDocs, serverTimestamp, orderBy, query } from 'firebase/firestore';

function App() {

  const [todos, setTodos] = useState([]);
  // todos: short term memory
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/remove 
  useEffect( () => {
    getTodos();
  }, [input]);

  const getTodos = () => {
    const todoCollectionRef = collection(db, 'todos');
    const q = query(todoCollectionRef, orderBy('timestamp', 'desc'));

    getDocs(q)
    .then(response => {
        const todos_get = response.docs.map(doc => ({
            data: doc.data().todo,
            id: doc.id,
        }))
        setTodos(response.docs.map(doc => (doc.data().todo))); // this part is that getting db from firebase
        // setTodos(response.docs.map(doc => (doc.id)));
        console.log(todos_get)
    })
    .catch(error => console.log(error.message))
  }

  const addTodo = (event) =>{
    event.preventDefault();

    const todoCollectionRef = collection(db, 'todos');
    addDoc(todoCollectionRef, { todo: input, timestamp: serverTimestamp()})
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error.message)
    })

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
