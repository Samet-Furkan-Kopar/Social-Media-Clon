/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getUserInfo } from "../../firebase";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Icon from "../../components/Icon";
import classNames from "classnames";
import ProfileNotFound from "./ProfileNotFound";
import {Helmet} from "react-helmet";
const Profile = () => {
    const { username } = useParams();
    // const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUserInfo(username)
            .then((data) => {
                setUser(data);
            })
            .catch((err) => {
                console.log(err);
                setUser(false);
              
            });
    }, []);
 
    if (user === false) {
        return <ProfileNotFound />;
    }
    if (user === null) {
        return(
            <div>
                Loading...
            </div>
        )
    }
    return (
        user && (
            <div>
                <Helmet>
                    <title>{username && username} • Instagram</title>
                </Helmet>
                <Header user={user} />
                <nav className="border-t flex items-center justify-center gap-x-12 ">
                    <NavLink
                        className={({ isActive }) =>
                            classNames({
                                "text-xs flex items-center py-4 border-t gap-x-1.5 font-semibold": true,
                                "text-[#8e8e8e] border-transparent": !isActive,
                                "text-[#111111] border-black": isActive,
                            })
                        }
                        end={true}
                        to={`/${username}`}
                    >
                        <Icon size={12} name="post" />
                        Post
                    </NavLink>
                    <NavLink
                        end={true}
                        className={({ isActive }) =>
                            classNames({
                                "text-xs flex items-center py-4 border-t gap-x-1.5 font-semibold": true,
                                "text-[#8e8e8e] border-transparent": !isActive,
                                "text-[#111111] border-black": isActive,
                            })
                        }
                        to={`/${username}/tagged`}
                    >
                        <Icon size={12} name="tag" />
                        Tagged
                    </NavLink>
                </nav>
                <Outlet />
            </div>
        )
    );
};

export default Profile;
