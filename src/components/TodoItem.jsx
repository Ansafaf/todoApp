import { useState } from "react";

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEditClick = () => {
    setNewTitle(todo.title);
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmedTitle = newTitle.trim();

    if (!trimmedTitle) {
      setNewTitle(todo.title);
      setIsEditing(false);
      return;
    }

    onEdit(todo.id, trimmedTitle);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="todo-edit-row">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="todo-edit-input"
          />
          <div className="todo-actions">
            <button type="button" className="save-btn" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="ghost-btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="todo-main">
            <span className="todo-checkmark">{todo.completed ? "✓" : "○"}</span>
            <span className="todo-title">{todo.title}</span>
          </div>

          <div className="todo-actions">
            <button
              type="button"
              className={todo.completed ? "ghost-btn" : "primary-btn small-btn"}
              onClick={() => onToggle(todo.id)}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>

            <button type="button" className="ghost-btn" onClick={handleEditClick}>
              Edit
            </button>

            <button type="button" className="danger-btn" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};
