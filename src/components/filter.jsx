
const filters = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className="todo-filter">
      <span className="filter-label" id="filter-label">
        Show
      </span>
      <div className="filter-controls" role="group" aria-labelledby="filter-label">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className={`filter-btn ${filter === value ? "active" : ""}`}
            aria-pressed={filter === value}
            onClick={() => onFilterChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
