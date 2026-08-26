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
            Capture ideas, track priorities, and turn busy days into focused,
            productive routines.
          </p>

          <div className="hero-actions">
            <Link to={ROUTES.TODOS} className="primary-btn">
              Go to todos
            </Link>
            <span className="helper-text">Built for calm focus</span>
          </div>
        </div>

        <div className="hero-panel" aria-label="Daily task overview">
          <div className="mini-stat">
            <span>Today</span>
            <strong>08 Tasks</strong>
          </div>
          <div className="mini-stat accent">
            <span>Completed</span>
            <strong>05 Done</strong>
          </div>
          <div className="mini-stat">
            <span>Focus</span>
            <strong>2 Hours</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;