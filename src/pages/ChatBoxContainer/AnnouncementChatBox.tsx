



import React, { useEffect, useState } from "react";
import ChatBoxHeader from "../../components/Chat/ChatBoxHeader/ChatBoxHeader";
import Chatbox from "../../components/Chat/Chatbox/Chatbox";
import ChatboxFooter from "../../components/Chat/ChatboxFooter/ChatboxFooter";
import { useParams } from "react-router-dom";
import { Message } from "../../Interfaces/Interfaces";
import { useGetChatIndexDetailsByIdQuery } from "../../StateManagement/services/chatApi";

const AnnouncementChatBox: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const [groupId, setGroupId] = useState<string | undefined>(id ? id : undefined);
    const { data } = useGetChatIndexDetailsByIdQuery({ id: groupId });


    useEffect(() => {
        setGroupId(id ? id : undefined);
    }, [id]);

    const [messages, setMessages] = useState<Message[]>([
        {
            _id: "1",
            content: "hi my name is suha",
            type: "text",
            timestamp: new Date(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id:" 2",
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "1",
            receiver: 5,
            received: true,
            read: true,
            img: "https://wallpapers.com/images/featured/cool-girl-cartoon-9vifmulpc1uysmah.jpg"
        },
        {
            _id: "3",
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        
    ])
    return (
        <div className="flex-1 pt-12 relative">
            <ChatBoxHeader header={data} />
            <Chatbox messages={messages} />
            <ChatboxFooter />
        </div>
    );
};

export default AnnouncementChatBox;