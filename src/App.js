import React from 'react';
import TodoItem from "./TodoItem"
import todosData from './todosData'

function App() {
  return (
    <div className='todoList'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  
  );
}

export default App;
