import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";

export default function TodoForm() {
    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        await addDoc(collection(db, 'todos'), {
            todo: newTodo,
            completed: false,
            created: serverTimestamp()
        })

        setNewTodo('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add new todo</label>
            <input 
                required
                type="text"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
            />
            <button>Add</button>
        </form>
    )
}