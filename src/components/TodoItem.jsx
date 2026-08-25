import { useState } from "react"
export const TodoItem = ({todo, onToggle, onDelete})=>{
    return (
        <div>
            <span>{todo.title}</span>

            <button onClick={()=> onToggle(todo.id)}>
                {todo.completed ? "Undo":"Complete"}
            </button>

            <button onClick={()=> onDelete(todo.id)}>
                Delete
            </button>
        </div>
    )
}
