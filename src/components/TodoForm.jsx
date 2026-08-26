import {useState} from "react";

export const TodoForm = ({onAddTodo})=>{
    const [todo, setTodo] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(todo);
        onAddTodo(todo);
        setTodo("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} placeholder="Enter a todo" onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    )
}