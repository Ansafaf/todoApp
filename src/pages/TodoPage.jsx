import { useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

function TodoPage(){
    const [todo,setTodo] = useState([]);

    return (
        <div>
            <h1>
                My Todos
            </h1>
            <form>
                <input type="text" placeholder="Enter a todo" />
                <button type="submit">Add Todo</button>
            </form>

            <div>
                <h3>
                    My Tasks
                </h3>
                {}
            </div>
        </div>
    )   
}
export default TodoPage;