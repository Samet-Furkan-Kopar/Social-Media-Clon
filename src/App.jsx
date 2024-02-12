import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Deneme from "./pages/Deneme";
import AuthLayout from "./pages/auth/Index";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import MainLayout from "./pages/Layout";
import Posts from "./pages/profile/components/Posts";
import Tagged from "./pages/profile/components/Tagged";
import ProfileLayout from "./pages/profile";
import InboxLayout from "./pages/inbox";
import Inbox from "./pages/inbox/Inbox";
const App = () => {
    const [redirect, setRedirect] = useState(true);
    const user = useSelector((state) => state.auth.user);
    console.log(user);
    useEffect(() => {
        let timeOut = setTimeout(() => {
            setRedirect(false);
        }, 1000);
        return () => {
            clearTimeout(timeOut);
        };
    }, []);

    if (redirect && (user === null || user?.data === null)) {
        return <Loader />;
    }

    return (
        <>
            <Toaster position="top-right" />
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="inbox" element={<InboxLayout />}>
                            <Route index element={<Inbox />} />
                            {/* <Route path="tagged" element={<Tagged />} /> */}
                        </Route>

                        <Route path=":username" element={<ProfileLayout />}>
                            <Route index element={<Posts />} />
                            <Route path="tagged" element={<Tagged />} />
                        </Route>
                        <Route path="/deneme" element={<Deneme />} />
                    </Route>
                </Route>

                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
