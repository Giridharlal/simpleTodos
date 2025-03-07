import React, {useState} from 'react'
import './index.css'

const TodoItem = ({todo, deleteTodo, saveTodo}) => {
  const {id, title} = todo
  const [newValue, setNewValue] = useState(title)
  const [isEditing, setIsEditing] = useState(false)
  const [isStriked, setIsStriked] = useState(false)

  return (
    <li className="todo-item">
      <div className="input-todo-container">
        <input
          type="checkbox"
          checked={isStriked}
          onChange={() => setIsStriked(!isStriked)}
          id={id}
        />
        {!isEditing ? (
          <label htmlFor={id} className="todo-label">
            <p className={isStriked ? 'strike' : 'todo-title'}>{title}</p>
          </label>
        ) : (
          <input
            className="input-todo"
            type="text"
            value={newValue}
            onChange={e => setNewValue(e.target.value)}
          />
        )}
      </div>
      <div>
        {isEditing ? (
          <button
            className="save-button"
            onClick={() => {
              saveTodo(id, newValue)
              setIsEditing(false)
            }}
          >
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className="delete-button" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
