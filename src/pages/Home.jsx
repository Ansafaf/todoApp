import { Link } from "react-router-dom";
import {ROUTES} from "../constants/routes";
function Home(){
    return (
        <div>
            <h1>Todo App</h1>
            <p>Manage your daily tasks</p>
            <p>easily and effectively.</p>
            
            <Link to={ROUTES.TODOS}>
            <button>Go to todos</button>
            </Link>
        </div>
    );
}

export default Home;