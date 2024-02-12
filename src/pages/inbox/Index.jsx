import { Outlet } from "react-router-dom";
import SideBar from "./copmonents/SideBar";
const InboxLayout = () => {
    return (
        <div className="border border-gray-300 rounded bg-white h-[calc(100vh-87px)] flex">
            <SideBar /> {/*solda bu kısım / url ile yonlendırındece de outlet kısmında istediğimiz detay açılacak*/}
            <Outlet />
        </div>
    );
};

export default InboxLayout;
