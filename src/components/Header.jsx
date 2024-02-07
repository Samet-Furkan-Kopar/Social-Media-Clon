import { Link } from "react-router-dom";
import Search from "./Search";
import {logout} from "../firebase"
const Header = () => {
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
                <nav>
                    <button onClick={logout}>
                        Log Out
                    </button>
                </nav>

            </div>
        </header>
    );
};

export default Header;
