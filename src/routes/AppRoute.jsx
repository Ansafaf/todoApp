import { Route,Routes } from "react-router-dom";
import {ROUTES} from "../constants/routes";
import Home from  "../pages/Home";
import TodoPage from "../pages/TodoPage";


function AppRoute(){
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.TODOS} element={<TodoPage />} />
        </Routes>
    )
}
export default AppRoute;