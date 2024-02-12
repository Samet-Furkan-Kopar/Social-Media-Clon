/* eslint-disable react/prop-types */
// import Icon from "../../../components/Icon";
// import { useState } from "react";
// const Reply = () => {
//     const [message, setMessage] = useState("")
//     return (
//         <footer className="h-[84px] flex items-center justify-center px-6">
//             <div className="h-[44px] border flex items-center rounded-full w-full pl-[11px] pr-[8px]">
//                 <button className="w-[40px] h-[42px] flex items-center justify-center">
//                     <Icon name="emoji" size={24}/>
//                 </button>
//                 <input value={message} onChange={e => setMessage(e.target.value)} className="flex-1 outline-none placeholder:text-gray-600 h-[40px] text-sm px-[9px]" placeholder="Mesaj..."/>
//                 <button className="w-[40px] h-[42px] flex items-center justify-center">
//                     <Icon name="picture" size={24}/>
//                 </button>
//                 <button className="w-[40px] h-[42px] flex items-center justify-center">
//                     <Icon name="hearth" size={24}/>
//                 </button>
//             </div>
//         </footer>
//     );
// };

// export default Reply;

import Icon from "../../../components/Icon";
import { useState } from "react";

const Reply = ({ setMessages }) => {
    const [message, setMessage] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        setMessages((prev) => [
            ...prev,
            {
                from: {
                    id: "T9LnxKl7b7RQY2im2LJDPiJp7Ru1",
                    name: "Furkan",
                    username: "samettkopar",
                    avatar: "https://w7.pngwing.com/pngs/841/222/png-transparent-avatar-boy-max-avatar-vol-2-icon.png",
                },
                message
            },
        ]);

        setMessage("");
    };
    return (
        <footer className="h-[84px] flex items-center justify-center px-6">
            <form
                onSubmit={sendMessage}
                className="h-[44px] border flex items-center rounded-full w-full pl-[11px] pr-[8px]"
            >
                <button
                    type="button"
                    className="w-[40px] h-[42px] flex items-center justify-center"
                >
                    <Icon name="emoji" size={24} />
                </button>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 outline-none placeholder:text-gray-600 h-[40px] text-sm px-[9px]"
                    placeholder="Mesaj..."
                />
                {message ? (
                    <button type="submit" className="text-brand text-sm font-semibold px-3">
                        Send
                    </button>
                ) : (
                    <>
                        <button
                            type="button"
                            className="w-[40px] h-[42px] flex items-center justify-center"
                        >
                            <Icon name="picture" size={24} />
                        </button>
                        <button
                            type="button"
                            className="w-[40px] h-[42px] flex items-center justify-center"
                        >
                            <Icon name="hearth" size={24} />
                        </button>
                    </>
                )}
            </form>
        </footer>
    );
};

export default Reply;
