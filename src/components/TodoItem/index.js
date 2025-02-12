// Write your code here
import React from 'react';
import './index.css';

const TodoItem = ({ todo, deleteTodo }) => {
  const { id, title } = todo;

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button className="delete-button" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
