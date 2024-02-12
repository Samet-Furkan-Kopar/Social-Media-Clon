// import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { useSelector } from "react-redux";
import UserList from "./UserList"
const SideBar = () => {
    const user = useSelector((state) => state.auth.user);
    console.log(user)
    return (
        <aside className="w-[349px] flex-shrink-0 border-r border-gray-300">
            <header className="h-[60px] border-b border-gray-300 flex items-center justify-between px-5">
                <button className="flex items-center mx-auto gap-x-3 text-semibold">
                    {user?.data?.username} <Icon name="chevron-down" />
                </button>
                <Icon name="new-message" size={24} />
            </header>
            <UserList/>
        </aside>
    );
};

export default SideBar;
