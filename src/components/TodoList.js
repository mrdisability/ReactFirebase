import { deleteDoc, doc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import Trashcan from '../assets/trashcan.svg'
import { db } from "../firebase/config"
import TodoForm from './TodoForm'

export default function TodoList({ todos }) {

  if (todos.length === 0) {
    return <div className="container">
      <h1>TodoList</h1>

      <h3>No todos to load...</h3>

      <TodoForm />
    </div>
  }

  const handleClick = async (id) => {
    if (window.confirm('Delete this todo?')) {
      const ref = doc(db, "todos", id)
      await deleteDoc(ref)
    }
  }

  return (
    <div className='container'>
      <h1>TodoList</h1>

      {todos.map(todo => (
        <div key={todo.id}>
          <h3> <Link to={`/todos/${todo.id}`}>{todo.todo}</Link></h3>
          <p>{todo.completed}</p>
          <img 
            className="delete"
            onClick={() => handleClick(todo.id)}
            src={Trashcan} alt="delete icon" 
          />
        </div>
      ))}

      <TodoForm />
    </div>
  )
}