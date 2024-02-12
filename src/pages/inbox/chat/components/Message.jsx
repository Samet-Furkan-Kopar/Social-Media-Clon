/* eslint-disable react/prop-types */

import classNames from "classnames";
import { useSelector } from "react-redux";
// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
    const user = useSelector((state) => state.auth.user);
    console.log(user);
    return (
        <div
            className={classNames({
                "flex gap-x-2 max-w-[50%]": true,
                "self-end": user?.data?.uid === message.from.id,
            })}
        >
            {user?.data?.uid !== message.from.id && (
                <img src={message.from.avatar} className="w-6 h-6 rounded-full self-end mb-1" />
            )}
            <p
                className={classNames({
                    "min-h-[44px] inline-flex items-center px-5 py-2 text-sm rounded-2xl": true,
                    "border border-gray-200": user?.data?.uid !== message.from.uid,
                    "bg-[#e8e7e7]": user?.data?.uid === message.from.id,
                })}
            >
               
                {message.message}
            </p>
        </div>
    );
};

export default Message;
