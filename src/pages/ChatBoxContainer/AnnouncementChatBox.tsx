
import React, { useEffect, useState } from "react";
import ChatBoxHeader from "../../components/Chat/ChatBoxHeader/ChatBoxHeader";
import Chatbox from "../../components/Chat/Chatbox/Chatbox";
import ChatboxFooter from "../../components/Chat/ChatboxFooter/ChatboxFooter";
import { useParams } from "react-router-dom";
import { MessageInterface } from "../../Interfaces/Interfaces";
import { useGetChatIndexDetailsByIdQuery } from "../../StateManagement/services/chatApi";
import announcementImage from '../../assests/group/announcement.png'
import moment from "moment";

const AnnouncementChatBox: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const [groupId, setGroupId] = useState<string | undefined>(id ? id : undefined);
    const { data } = useGetChatIndexDetailsByIdQuery({ id: groupId });
    let image = data?.img?data?.img:announcementImage
    useEffect(() => {
        setGroupId(id ? id : undefined);
    }, [id]);

    
    console.log("announcement",data);

    const [messages, setMessages] = useState<MessageInterface[]>([
        {
            _id: "1",
            content: "hi my name is suha",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
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
            timestamp: moment(new Date()).toISOString(),
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
            timestamp: moment(new Date()).toISOString(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        
    ])
    return (
        <div className="flex-1 w-full  h-full flex flex-col">
            <ChatBoxHeader img ={image} header={data} />
            <Chatbox messages={messages} />
            <ChatboxFooter />
        </div>
    );
};

export default AnnouncementChatBox;