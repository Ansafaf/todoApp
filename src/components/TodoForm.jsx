import {useState} from "react";

export const TodoForm = ()=>{
    const [todo, setTodo] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(todo);

        setTodo("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    )
}