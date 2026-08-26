import Navbar from "./components/Navbar";
import AppRoute from "./routes/AppRoute";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <AppRoute />
    </div>
  );
}

export default App;
