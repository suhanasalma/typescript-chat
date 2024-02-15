
import React, { useEffect, useState } from "react";
import ChatBoxHeader from "../../components/Chat/ChatBoxHeader/ChatBoxHeader";
import Chatbox from "../../components/Chat/Chatbox/Chatbox";
import ChatboxFooter from "../../components/Chat/ChatboxFooter/ChatboxFooter";
import { useParams } from "react-router-dom";
import { MessageInterface } from "../../Interfaces/Interfaces";
import { useGetUserDetailsByIdQuery } from "../../StateManagement/services/usersApi";
import { useGetChatIndexDetailsByIdQuery } from "../../StateManagement/services/chatApi";
import moment from "moment";
import userImage from '../../assests/user/not-available-user.png'
import announcementImage from '../../assests/group/announcement.png'
import groupImage from '../../assests/group/group.png'

import ChatChannelDetails from "../../components/Chat/ChatChannelDetails/ChatChannelDetails";
import { useSelector } from "react-redux";

const ChatBoxContainer: React.FC = () => {
    const { channel_name, id } = useParams<{ channel_name?: string, id?: string }>();
    const [oppositeUserEmail, setOppositeUserEmail] = useState<string | undefined>(channel_name ? channel_name : undefined);
    // const { data } = useGetUserDetailsByIdQuery({ email: oppositeUserEmail });
    const { data: channel, isLoading } = useGetChatIndexDetailsByIdQuery({ id: channel_name });
    const [openChatChannelDetailsPage, setOpenChatChannelDetailsPage] = useState(false);
    const auth = useSelector((state: any) => state?.auth);
    let loggedUser = auth.user;

    console.log('channel', channel);


    useEffect(() => {
        setOppositeUserEmail(channel_name ? channel_name : undefined);
    }, [channel_name]);

    let oppositeUser = null;

    if (channel?.group_type === "one-to-one" && channel?.participants) {
        oppositeUser = channel?.participants?.find((user: any) => user._id !== loggedUser._id);
    };
    // const oppositeUser = channel?.participants?.find((user:any)=>user._id!==loggedUser._id);
    console.log("oppositeUser", oppositeUser);
    let image = '';
    let name = ""

    if (channel?.group_type === "announcement") {
        image = channel?.img ? channel?.img : announcementImage;
        name = channel?.name ? channel?.name : channel?.group_type;
    }
    else if (channel?.group_type === "group") {
        image = channel?.img ? channel?.img : groupImage;
        name = channel?.name ? channel?.name : channel?.group_type;
    } else {
        image = oppositeUser?.img ? oppositeUser?.img : userImage;
        name = oppositeUser?.name;
    }


    // console.log("single",data);

    const [messages, setMessages] = useState<MessageInterface[]>([
        {
            _id: "1",
            content: "hi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suha hi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suha",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: "2",
            content: "hi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suha",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: "3",
            content: "hi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suha",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: "4",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: "5",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "ratri800@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: "6",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: "7",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: "8",
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
            _id: "9",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: "10",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: "11",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: "12",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "ratri800@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: "13",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: "14",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: "15",
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
            _id: "16",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: "17",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "ratri800@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: "18",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: "19",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "ratri800@gmail.com",
            receiver: 5,
            received: true,
            read: true,
            img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        },
        {
            _id: "20",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
        {
            _id: "21",
            content: "hi how are you",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            sender: "akter@gmail.com",
            receiver: 1,
            received: true,
            read: true,
            img: "https://pxbar.com/wp-content/uploads/2023/09/girl-cartoon-pic.jpg"
        },
    ])

    return (
        <div className="flex-1 w-full  h-full flex flex-col">
            <ChatBoxHeader openChatChannelDetailsPage={openChatChannelDetailsPage} setOpenChatChannelDetailsPage={setOpenChatChannelDetailsPage} header={oppositeUser} img={image} name={name} />
            <Chatbox messages={messages} />
            <ChatboxFooter />
            {
                openChatChannelDetailsPage && <ChatChannelDetails />
            }
        </div>
    );
};

export default ChatBoxContainer;
