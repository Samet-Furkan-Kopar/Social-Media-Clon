import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";

const routes =createBrowserRouter([
    {
        path: "/",
        element: Home ,
    },
    {
        path: "/login",
        element: Login ,
    },
]) 
export default routes;
