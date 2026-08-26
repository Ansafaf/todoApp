import { useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

function TodoPage(){
    const [todos,setTodos] = useState([]);

    const handleAddTodo = (newTodo)=>{
        setTodos((prev) => [...prev, newTodo]);
    }
    const handleDeleteTodo = (id)=>{
        setTodos((prev)=> prev.filter((todo)=> todo.id !== id));
    }
    const handleToggleTodo = (id) =>{ //complete / uncomplete
        setTodos((prev)=> {
            return prev.map((todo)=>{
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        })
    }
    const handleEditTodo = (id,newTitle) =>{
        setTodos((prev)=>{
            return prev.map((todo)=>{
                if(todo.id === id){
                    return {
                        ...todo,
                        title: newTitle
                    }
                }
                return todo;
            })
        })
    }
    return (
        <div>
            <h1>
                My Todos
            </h1>
           <TodoForm onAddTodo={handleAddTodo}/>
           <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} onEdit={handleEditTodo}/>
        </div>
    )   
}
export default TodoPage;