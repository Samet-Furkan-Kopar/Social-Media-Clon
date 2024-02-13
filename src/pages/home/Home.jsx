// import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
const Home = () => {
    // const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Instagram</title>
            </Helmet>
            <div className="flex flex-row">
                <div className="w-[468px] h-[468px] mx-auto mt-20 ">
                    <Header />
                    <Content />
                    <Footer />
                </div>
                <div className="w-[268px] h-[268px]  mt-20  flex justify-end">
                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default Home;
