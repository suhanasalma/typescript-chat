
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

import ChatChannelDetails from "../../components/Chat/ChatChannelDetails/ChatChannelDetails/ChatChannelDetails";
import { useSelector } from "react-redux";

const ChatBoxContainer: React.FC = () => {
    const { channel_name, id } = useParams<{ channel_name?: string, id?: string }>();
    const [oppositeUserEmail, setOppositeUserEmail] = useState<string | undefined>(channel_name ? channel_name : undefined);
    // const { data } = useGetUserDetailsByIdQuery({ email: oppositeUserEmail });
    const { data: channel, isLoading } = useGetChatIndexDetailsByIdQuery({ id: channel_name });
    const [openChatChannelDetailsPage, setOpenChatChannelDetailsPage] = useState(false);
    const [message, setMessage] = useState('');
    const [val, setVal] = useState("");
    const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

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
    let image = '';
    let name = ""
    let overviewDetails = null

    if (channel?.group_type === "announcement") {
        image = channel?.img ? channel?.img : announcementImage;
        name = channel?.name ? channel?.name : channel?.group_type;
        overviewDetails = channel;
    }
    else if (channel?.group_type === "group") {
        image = channel?.img ? channel?.img : groupImage;
        name = channel?.name ? channel?.name : channel?.group_type;
        overviewDetails = channel;
    } else {
        image = oppositeUser?.img ? oppositeUser?.img : userImage;
        name = oppositeUser?.name;
        overviewDetails = oppositeUser;
    };

    const [messages, setMessages] = useState<MessageInterface[]>([
        // {
        //     _id: "1",
        //     content: "hi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suha hi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suhahi my name is suha",
        //     type: "text",
        //     timestamp: moment(new Date()).toISOString(),
        //     sender: "ratri800@gmail.com",
        //     receiver: 1,
        //     received: true,
        //     read: true,
        //     img: "https://e1.pxfuel.com/desktop-wallpaper/967/179/desktop-wallpaper-girl-cartoon-girl-attitude-cartoon.jpg"
        // },

    ])


    const sendMessage = (data: any) => {
        let { message = "", medias = [], type } = data;
        const links = message.match(URL_REGEX);

        const transformedLinks = links?.length > 0 ? links?.map((link: any) => ({
            type: "link",
            file_name: "link",
            url: link,
        })) : [];
        medias = [...medias, ...transformedLinks];
        message = message?.trim()?.replace(/\r|\n/g, '<br>');
        if (message?.match(/^\s*$/) && medias?.length === 0) {
            return false
        }

        setVal('')
        setMessage('');
        const messageData = {
            channel: channel?.channel,
            medias: medias?.length > 0 ? medias?.map((media: any) => ({
                type: media?.type,
                file_name: media?.file_name,
                url: media?.url,
            })) : [],
            channel_type:channel?.group_type,
            message: message ? message : "",
            msg_type: type,
            is_message_deleted: 0,
            sender: {_id:loggedUser?._id,email:loggedUser?.email},
            receivers: channel?.participants.filter((user: any) => user?._id !== loggedUser?._id)?.map((user: any) => ({
                _id: user?._id,
                email: user?.email,
                read_at: null,
                // delivered_at: null,
                reaction: ""
            })),
        };

        fetch(`${process.env.REACT_APP_BASE_URL}/message`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(messageData)
        })
            .then(res => res.json())
            .then((response: any) => {
                console.log("response", response);
                setMessages(prevMessage => [...prevMessage, response?.data])
            })

        console.log("messageData", messageData);
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/message?channel_name=${channel_name}`)
            .then(res => res.json())
            .then((response: any) => {
                console.log("response", response);
                setMessages(response?.data)
            })

    }, [channel_name])

    // console.log("messages", messages);

    return (
        <div className="flex-1 w-full  h-full flex flex-col">
            <ChatBoxHeader openChatChannelDetailsPage={openChatChannelDetailsPage} setOpenChatChannelDetailsPage={setOpenChatChannelDetailsPage} header={oppositeUser} img={image} name={name} />
            <Chatbox channel={channel} messages={messages} />
            <ChatboxFooter sendMessage={sendMessage} setVal={setVal} val={val} message={message} setMessage={setMessage} />
            <ChatChannelDetails messages={messages} channel={channel} img={image} name={name} overviewDetails={overviewDetails} setOpenChatChannelDetailsPage={setOpenChatChannelDetailsPage} openChatChannelDetailsPage={openChatChannelDetailsPage} />
        </div>
    );
};

export default ChatBoxContainer;
