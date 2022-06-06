import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import './Todo.css';

function Todo(props) {
  return (
    <List className='todo__list'>
      <ListItem className='todo__listItem'>
        <ListItemText primary={props.todo} secondary='June 9, 2022'/>
      </ListItem>
    </List>
  )
}

export default Todo