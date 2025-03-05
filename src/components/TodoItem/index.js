import React, {useState} from 'react'
import './index.css'

const TodoItem = ({todo, deleteTodo, saveTodo}) => {
  const {id, title} = todo
  const [newValue, setNewValue] = useState(title)
  const [isEditing, setIsEditing] = useState(false)
  const [isStriked, setIsStriked] = useState(false) // New state for strike-through

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isStriked}
        onChange={() => setIsStriked(!isStriked)}
      />
      {!isEditing ? (
        <p className={isStriked ? 'strike' : 'todo-title'}>{title}</p>
      ) : (
        <input
          type="text"
          value={newValue}
          onChange={e => setNewValue(e.target.value)}
        />
      )}
      {isEditing ? (
        <button
          onClick={() => {
            saveTodo(id, newValue)
            setIsEditing(false)
          }}
        >
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button className="delete-button" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
