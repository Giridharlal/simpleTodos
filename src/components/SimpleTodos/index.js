// Write your code here
import React, {useState} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

const SimpleTodos = () => {
  const [todos, setTodos] = useState(initialTodosList)
  const [completedTodos, setCompletedTodos] = useState({})
  const [newTitle, setNewTitle] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const saveTodo = (id, value) => {
    setTodos(
      todos.map(todo => (todo.id === id ? {...todo, title: value} : todo)),
    )
  }

  const addTodo = title => {
    const words = title.split(' ')
    const lastWord = words.at(-1)

    if (isNaN(Number(lastWord))) {
      setTodos(prevTodos => [...prevTodos, {id: prevTodos.length + 1, title}])
    } else {
      const text = title.slice(0, -lastWord.length).trim()
      setTodos(prevTodos => [
        ...prevTodos,
        ...Array.from({length: Number(lastWord)}, (_, i) => ({
          id: prevTodos.length + i + 1,
          title: text,
        })),
      ])
    }
  }

  const toggleCompletion = id => {
    setCompletedTodos(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="simple-todos-container">
      <h1 className="heading">Simple Todos</h1>
      <ul className="todos-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isCompleted={completedTodos[todo.id] || false}
            deleteTodo={deleteTodo}
            saveTodo={saveTodo}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
      <input
        type="text"
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(newTitle)
          setNewTitle('')
          setIsAdding(!isAdding)
        }}
      >
        Add
      </button>
    </div>
  )
}

export default SimpleTodos
