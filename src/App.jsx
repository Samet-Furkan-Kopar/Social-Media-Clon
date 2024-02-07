import { Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Deneme from "./pages/Deneme";
import AuthLayout from "./pages/auth/Index";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Toaster } from "react-hot-toast";
// import { useSelector } from "react-redux";
// import Loader from "./components/Loader";

const App = () => {
    // const [redirect, setRedirect] = useState(false);
    // // const user = useSelector((state) => state.auth.user);

    // useEffect(() => {
    //     let timeOut = setTimeout(() => {
    //         setRedirect(true);
    //     }, 2000);
    //     return () => clearTimeout(timeOut);
    // }, []);

    // if (!redirect) {
    //     return <Loader />;
    // }

    return (
        <>
            <Toaster position="top-right" />
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/deneme" element={<Deneme />} />
                </Route>

                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
