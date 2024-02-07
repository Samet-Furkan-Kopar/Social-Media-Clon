import { Outlet } from "react-router-dom";
const AuthLayouth = () => {
    return (
        <div className="w-full h-full flex items-center gap-x-8  justify-center ">
            <Outlet />
        </div>
    );
};

export default AuthLayouth;
