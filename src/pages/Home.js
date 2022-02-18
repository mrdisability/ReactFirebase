import TodoList from '../components/TodoList'
import { useCollection } from '../hooks/useCollection'

export default function Home() {
  const {documents: todos} = useCollection("todos")
 
  return (
    <div>
      {todos && <TodoList todos={todos} />}
    </div>
  )
}