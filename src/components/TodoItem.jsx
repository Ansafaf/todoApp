import { useState } from "react";
export const TodoItem = ({todo, onToggle, onDelete,onEdit})=>{
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);
    const handleEditClick = ()=>{
        setIsEditing(true);   
    }
    const handleSave = () =>{
        onEdit(todo.id, newTitle);
        setIsEditing(false);
    }
    return (
        <div>
            {
                isEditing ? (
                    <>
                    <input value = {newTitle} onChange={(e)=> setNewTitle(e.target.value)} />
                    <button onClick={handleSave}> Save</button>
                    </>
                ) : (
                    <>

                <span>{todo.title}</span>

               <button onClick={()=> onToggle(todo.id)}>
                 {todo.completed ? "Undo":"Complete"}
               </button>

               <button onClick={handleEditClick}>
                 Edit
               </button>

               <button onClick={()=> onDelete(todo.id)}>
                Delete
               </button>

                 </>
                )
            }
        </div>
    )
}
