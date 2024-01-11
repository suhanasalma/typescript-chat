import React, { useEffect, useState } from "react";
import ChatBoxHeader from "../../components/Chat/ChatBoxHeader/ChatBoxHeader";
import Chatbox from "../../components/Chat/Chatbox/Chatbox";
import ChatboxFooter from "../../components/Chat/ChatboxFooter/ChatboxFooter";
import { useParams } from "react-router-dom";
import { Message } from "../../Interfaces/Interfaces";
import { useGetUserDetailsByIdQuery } from "../../StateManagement/services/usersApi";

const ChatBoxContainer: React.FC = () => {
    const { email } = useParams<{ email?: string }>();
    const [oppositeUserEmail, setOppositeUserEmail] = useState<string | undefined>(email ? email : undefined);
    const { data } = useGetUserDetailsByIdQuery({ email: oppositeUserEmail });

    useEffect(() => {
        setOppositeUserEmail(email ? email : undefined);
    }, [email]);

    const [messages, setMessages] = useState<Message[]>([
        {
            _id: 1,
            content: "hi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suha hi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suha",
            type: "text",
            timestamp: new Date(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: 2,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 3,
            content: "hi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suha",
            type: "text",
            timestamp: new Date(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: 1,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 2,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "ratri800@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: 3,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 1,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 1,
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
            _id: 2,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 3,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: 1,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 2,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "ratri800@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: 3,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 1,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 1,
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
            _id: 2,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 3,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: 1,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 2,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "ratri800@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: 3,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 1,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 1,
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
            _id: 2,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 3,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: 1,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 2,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "ratri800@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: 3,
            content: "hi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: 1,
            content: "hi how are youhi how are youhi how are youhi how are youhi how are youhi how are youhi how are youhi how are youhi how are youhi how are you",
            type: "text",
            timestamp: new Date(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
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

export default ChatBoxContainer;
