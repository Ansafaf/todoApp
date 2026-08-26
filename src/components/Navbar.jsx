
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">✓</span>
        <span>TaskFlow</span>
      </div>

      <nav className="nav" aria-label="Main navigation">
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to={ROUTES.TODOS}
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Todos
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;