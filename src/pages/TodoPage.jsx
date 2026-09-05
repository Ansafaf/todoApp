import { useEffect, useState, useRef } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { Filter } from "../components/filter";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [filter , setFilter] = useState("all");
  
  const filteredTodos = todos.filter((todo)=>{
    if(filter === "active") {
       return !todo.completed;
    }
    if(filter === "completed") {
       return todo.completed;
    }
    return true;
  })
  const handleAddTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const isConfirm  = confirm("Are u sure u want to delete");
    if(!isConfirm) return 
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditTodo = (id, newTitle) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const remainingCount = todos.length - completedCount;

  return (
    <main className="page todo-page">
      <section className="todo-shell">
        <div className="todo-header">
          <div>
            <span className="eyebrow">Your plan</span>
            <h1>My Todos</h1>
          </div>

          <div className="status-row">
            <div className="status-pill">
              <span>Total</span>
              <strong>{todos.length}</strong>
            </div>
            <div className="status-pill accent">
              <span>Done</span>
              <strong>{completedCount}</strong>
            </div>
            <div className="status-pill">
              <span>Left</span>
              <strong>{remainingCount}</strong>
            </div>
          </div>
        </div>

        <TodoForm onAddTodo={handleAddTodo} />
        <Filter filter={filter} onFilterChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
          onEdit={handleEditTodo}
        />
      </section>
    </main>
  );
}

export default TodoPage;
