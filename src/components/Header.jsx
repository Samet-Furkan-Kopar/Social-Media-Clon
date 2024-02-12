import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import avatar from "../../public/images/avatar.jpg";
// import {logout} from "../firebase"
import Icon from "./Icon";
import { useSelector } from "react-redux";

const Header = () => {
    const user = useSelector((state) => state.auth.user);
console.log(user);
    return (
        <header className="bg-white border-b border-gray-300">
            <div className="h-[60px] flex items-center justify-between container mx-auto">
                <Link to="/">
                    <img
                        className="h-[29px]"
                        src="../../public/images/instagramlogin.png"
                        alt="Instagram"
                    />
                </Link>
                <Search />
                <nav className="flex items-center gap-x-6">
                    <NavLink to={"/"}>
                        <Icon name="home" size={24}/>
                    </NavLink>
                    <NavLink to={"/inbox"}>
                        <Icon name="direct" size={24}/>
                    </NavLink>
                    <NavLink to={"/"}>
                        <Icon name="explore" size={24}/>
                    </NavLink>
                    <NavLink to={"/"}>
                        <Icon name="new" size={24}/>
                    </NavLink>
                    <NavLink to={"/"}>
                        <Icon name="hearth" size={24}/>
                    </NavLink>
                    

                    <NavLink to={`/${user?.data?.username}`}>
                        <img src={avatar} className="h-6 w-6 rounded-full" alt="Log Out"/>
                    </NavLink>
                </nav>

            </div>
        </header>
    );
};

export default Header;
