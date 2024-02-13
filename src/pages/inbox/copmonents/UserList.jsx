import classNames from "classnames";
import { NavLink,useParams } from "react-router-dom";

const UserList = () => {
    const {conversationId} = useParams()
    const users = [
        {
            id: 1,
            user: {
                avatar: "https://w7.pngwing.com/pngs/841/222/png-transparent-avatar-boy-max-avatar-vol-2-icon.png",
                name: "Samet Furkan",
            },
            unRead: false,
            lastMessage: "Selam!",
        },
        {
            id: 2,
            user: {
                avatar: "https://w7.pngwing.com/pngs/841/222/png-transparent-avatar-boy-max-avatar-vol-2-icon.png",
                name: "Kenan Yıldız",
            },
            unRead: true,
            lastMessage: "Merhaba!",
        },
    ];
    return (
        <div className="h-[calc(100%-60px)] overflow-auto py-3 px-5">
            <header className="flex justify-between mb-1">
                <h6 className="text-base font-semibold">Messages</h6>
                <button className="text-brand text-sm font-semibold">16 requests</button>
            </header>
            {users.map((user) => (
                <NavLink
                    className={classNames({
                        "h-[72px] flex items-center gap-x-4 hover:bg-zinc-100 rounded": true,
                        "font-semibold": user.unRead,
                        "!bg-[#efefef]": +conversationId === user.id
                    })}
                    key={user.id}
                    to={`/inbox/${user.id}`}
                >
                    <img src={user.user.avatar} className="w-14 h-14 rounded-full" />
                    <div>
                        <h6 className="text-sm">{user.user.name}</h6>
                        <p
                            className={classNames({
                                "text-sm ": true,
                                "text-[#8e8e8e]": !user.unRead,
                            })}
                        >
                            {user.lastMessage}
                        </p>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default UserList;
