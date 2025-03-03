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
  {
    id: 9,
    title: 'Buy groceries',
  },
]

const SimpleTodos = () => {
  const [todos, setTodos] = useState(initialTodosList)
  const [newTitle, setNewTitle] = useState('')
  const [isAdding, setIsAdding] = useState(false)
  console.log(todos)

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  const saveTodo = (id, value) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, title: value, completed: false} : todo,
    )
    setTodos(updatedTodos)
  }

  const addTodo = title => {
    const exNumber = title.split(' ')
    const num = exNumber.at(-1)
    console.log(exNumber.at(-1))
    if (isNaN(Number(num))) {
      const newTodo = {id: todos.length + 1, title, completed: false}
      setTodos(prevTodos => [...prevTodos, newTodo])
    } else {
      const text = title.slice(0, -num.length)
      console.log(text, 'text')
      console.log('exNumber.length:', -num.length)
      setTodos(prevTodos => {
        const newTodos = Array.from({length: num}, (_, i) => ({
          id: prevTodos.length + i + 1,
          title: text,
          completed: false,
        }))
        return [...prevTodos, ...newTodos]
      })
    }
  }

  const toggleCompletion = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? {...todo, completed: todo.completed ? !todo.completed : true}
          : todo,
      ),
    )
  }

  return (
    <div className="simple-todos-container">
      <h1 className="heading">Simple Todos</h1>
      <ul className="todos-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            saveTodo={saveTodo}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
      <input
        type="textbox"
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(newTitle)
          setIsAdding(!isAdding)
        }}
      >
        Add
      </button>
    </div>
  )
}

export default SimpleTodos
