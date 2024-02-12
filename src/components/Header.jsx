/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import avatar from "../../public/images/avatar.jpg";
import {logout} from "../firebase"
import Icon from "./Icon";
import { useSelector } from "react-redux";
import { IoMdExit } from "react-icons/io";

const Header = () => {
    const user = useSelector((state) => state.auth.user);
console.log(user);
    return (
        <header className="bg-white border-b border-gray-300">
            <div className="h-[60px] flex items-center justify-between container mx-auto">
                <Link to="/">
                    <img
                        className="h-[29px]"
                        src="/images/instagramlogin.png"
                        alt="Instagram"
                    />
                </Link>
                <Search />
                <nav className="flex items-center gap-x-6">
                    <NavLink to={"/"}>
                    {({isActive}) => isActive ? <Icon name="home-filled" size={24}/> :<Icon name="home" size={24}/>}

                        
                    </NavLink>
                    <NavLink to={"/inbox"} >
                        {({isActive}) => isActive ? <Icon name="direct-filled" size={24}/> :<Icon name="direct" size={24}/>}
                        
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
                    <NavLink to={"/"}>
                    <IoMdExit onClick={logout} size={24}/>
                    </NavLink>
                </nav>

            </div>
        </header>
    );
};

export default Header;
