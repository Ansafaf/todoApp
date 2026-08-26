import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function Home() {
  return (
    <main className="page home-page">
      <section className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow">Smart planning</span>
          <h1>Organize your day with clarity.</h1>
          <p>
            Keep your tasks in one place, focus on what matters, and make
            steady progress throughout the day.
          </p>

          <div className="hero-actions">
            <Link to={ROUTES.TODOS} className="primary-btn">
              View my tasks
            </Link>
            <span className="helper-text">Simple, focused, and easy to use.</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
