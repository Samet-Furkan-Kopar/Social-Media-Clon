import Header from "./components/Header";
import Reply from "./Reply";
import Messages from "./components/Messages";
import { useState } from "react";
import { useSelector } from "react-redux";
const Chat = () => {
const data = useSelector((state) => state.auth.user);
    const user = {
        name: "Samet Furkan",
        avatar: "https://w7.pngwing.com/pngs/841/222/png-transparent-avatar-boy-max-avatar-vol-2-icon.png",
    };
    const [messages, setMessages] = useState([
        {
            from: {
                id: data ? data?.uid : "T9LnxKl7b7RQY2im2LJDPiJp7Ru1",
                name: "Furkan",
                username: "sametkopar",
                avatar: "https://w7.pngwing.com/pngs/841/222/png-transparent-avatar-boy-max-avatar-vol-2-icon.png",
            },
            message: "naberawdawdawdawdawdadawd",
        },
        {
            from: {
                id: "aaed2ae2d",
                name: "Melis",
                username: "melissa_altay0",
                avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
            },
            message: "test",
        },
        {
            from: {
                id: data ? data?.uid : "T9LnxKl7b7RQY2im2LJDPiJp7Ru1",
                name: "Furkan",
                username: "sametkopar",
                avatar: "https://w7.pngwing.com/pngs/841/222/png-transparent-avatar-boy-max-avatar-vol-2-icon.png",
            },
            message: "naberawdaw awdawdawddawd awdawdadawd",
        },
        {
            from: {
                id: "aaed2ae2d",
                name: "Melis",
                username: "melissa_altay0",
                avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
            },
            message:
                "loalke ak ade aed aed aed ae daed a edae daek daed aed aeöd aed aöe daedaedö aedöçaeöd aeöda öed öaçedö aeöd ",
        },
        {
            from: {
                id: data ? data?.uid : "T9LnxKl7b7RQY2im2LJDPiJp7Ru1",
                name: "Furkan",
                username: "sametkopar",
                avatar: "https://w7.pngwing.com/pngs/841/222/png-transparent-avatar-boy-max-avatar-vol-2-icon.png",
            },
            message: "nabselam a a  f aw ad wdawdadawd",
        },
        {
            from: {
                id: "aaed2ae2d",
                name: "Melis",
                username: "melissa_altay0",
                avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
            },
            message:
                "loalke ak ade aeawdawdd aed aed ae daed a edae daek daed aed aeöd aeeöda öed öaçedö aeöd ",
        },
        {
            from: {
                id: data ? data?.uid : "T9LnxKl7b7RQY2im2LJDPiJp7Ru1",
                name: "Furkan",
                username: "sametkopar",
                avatar: "https://w7.pngwing.com/pngs/841/222/png-transparent-avatar-boy-max-avatar-vol-2-icon.png",
            },
            message: "nabselawdawdawdawdm a a  f aw ad wdawdadawd",
        },
        {
            from: {
                id: "aaed2ae2d",
                name: "Melis",
                username: "melissa_altay0",
                avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
            },
            message: "loalkawdaw s edae daek daed aed aeöd aeeöda öed öaçedö aeöd ",
        },
    ]);
    return (
        <div className="flex-1">
            <Header user={user} />
            <Messages messages={messages} />
            <Reply setMessages={setMessages}/>
        </div>
    );
};

export default Chat;
