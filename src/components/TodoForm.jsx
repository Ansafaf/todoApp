import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) {
      setError("Please enter a todo");
      return;
    }
    
    const newTodo = {
      id: Date.now(),
      title: todo.trim(),
      completed: false,
    };

    onAddTodo(newTodo);
    setTodo("");
    setError("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          value={todo}
          placeholder="Add a new task"
          onChange={(e) => setTodo(e.target.value)}
          className={error ? "todo-input error" : "todo-input"}
        />
        <button type="submit" className="primary-btn add-btn">
          Add task
        </button>
      </div>
      {error && <p className="form-error">{error}</p>}
    </form>
  );
};