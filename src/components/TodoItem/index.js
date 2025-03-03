// Write your code here
import React, {useState} from 'react'
import './index.css'

const TodoItem = ({todo, deleteTodo, saveTodo, toggleCompletion}) => {
  const {id, title, completed} = todo
  const [newValue, setNewValue] = useState(title)
  const [isEditing, setIsEditing] = useState(false)
  console.log(completed)
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompletion(id)}
      />
      {!isEditing ? (
        <p className={completed ? 'strike' : 'todo-title'}>{title}</p>
      ) : (
        ''
      )}
      {isEditing ? (
        <>
          <input
            type="text"
            value={newValue}
            onChange={e => setNewValue(e.target.value)}
          />
          <button
            onClick={() => {
              saveTodo(id, newValue)
              setIsEditing(!isEditing)
            }}
          >
            save
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setIsEditing(!isEditing)
          }}
        >
          edit
        </button>
      )}
      <button className="delete-button" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
