import { Route,Routes } from "react-router-dom";
import {ROUTES} from "../constants/routes";
import Home from  "../pages/Home";
import Login from "../pages/Login";
import TodoPage from "../pages/TodoPage";
import Signup from "../pages/singup";

function AppRoute(){
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
            <Route path={ROUTES.TODOS} element={<TodoPage />} />
        </Routes>
    )
}
export default AppRoute;