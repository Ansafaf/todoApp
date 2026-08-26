import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  if (!todos.length) {
    return (
      <div className="empty-state">
        <p>No tasks yet</p>
        <span>Add your first task to get started.</span>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
