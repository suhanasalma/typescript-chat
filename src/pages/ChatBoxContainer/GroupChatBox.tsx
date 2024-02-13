
import React, { useEffect, useState } from "react";
import ChatBoxHeader from "../../components/Chat/ChatBoxHeader/ChatBoxHeader";
import Chatbox from "../../components/Chat/Chatbox/Chatbox";
import ChatboxFooter from "../../components/Chat/ChatboxFooter/ChatboxFooter";
import { useParams } from "react-router-dom";
import { MessageInterface } from "../../Interfaces/Interfaces";
import { useGetChatIndexDetailsByIdQuery } from "../../StateManagement/services/chatApi";
import moment from "moment";

interface HeaderDataInfo {
    name: string | undefined; 
    img: string | undefined;
    _id: string | undefined;
    group_type:string | undefined;
}

const GroupChatBox: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const [groupId, setGroupId] = useState<string | undefined>(id ? id : undefined);
    const [headerInfo, setHeaderInfo] = useState<HeaderDataInfo>({
        name: undefined,
        img: undefined,
        _id: undefined,
        group_type: undefined,
      });
      
    const { data, isLoading } = useGetChatIndexDetailsByIdQuery({ id: groupId });
    useEffect(() => {
        setGroupId(id ? id : undefined);
    }, [id]);


    useEffect(() => {
        setHeaderInfo(data);
    }, [data,groupId]);

    console.log("data",data);

    const [messages, setMessages] = useState<MessageInterface[]>([
        {
            _id: "1",
            content: "hi my name is suha",
            type: "text",
            timestamp: moment().unix(),
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
            timestamp: moment().unix(),
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
            timestamp: moment().unix(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        
    ])
    return (
        <div className="flex-1 w-full  h-full flex flex-col">
            <ChatBoxHeader header={headerInfo} />
            <Chatbox messages={messages} />
            <ChatboxFooter />
        </div>
    );
};

export default GroupChatBox;