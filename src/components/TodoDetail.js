import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";

export default function TodoDetail() {
    const { id } = useParams();

    useEffect(() => {
        getTodo(id)
    })

    const [todo, setTodo] = useState('')
    const [completed, setCompleted] = useState(false)

    const getTodo = async (id) => {
        const docRef = doc(db, "todos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data().todo);
            setTodo(docSnap.data().todo)
            setCompleted(docSnap.data().completed.toString())
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
  
    return (
      <div className='container'>
        <h1>Todo Detail</h1>

        <h2>Todo: {todo}</h2>
        <h2>Completed: {completed}</h2>
      </div>
    )
  }