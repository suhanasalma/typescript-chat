
import React, { useEffect, useState } from "react";
import ChatSearch from "../../components/Chat/ChatSearch/ChatSearch";
import CreateGroups from "../../components/CreateGroups/CreateGroups";
import ChatFilters from "../../components/Chat/ChatFilters/ChatFilters";
import ChatLists from "../../components/Chat/ChatLists/ChatLists";
import { ChatIndexList } from "../../Interfaces/Interfaces";
import { useGetChatChannelsByEmailAndIndexTypeQuery } from "../../StateManagement/services/chatApi";
import { useDispatch } from "react-redux";
import { userLoggedIn, userLoggedOut } from "../../StateManagement/slices/authSlice";
import { MdMessage } from "react-icons/md";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

interface ChatUser {
    openStartChat: () => void;
}

const ChatUsers = ({ openStartChat }: ChatUser) => {
    const [chatLists, setChatLists] = useState<ChatIndexList[]>([]);
    const dispatch = useDispatch();
    const { data, isLoading } = useGetChatChannelsByEmailAndIndexTypeQuery({ chat_index_status: "regular" });
    const handleLogin = () => {
        dispatch(userLoggedIn({ user: "" }));
    };

    const handleLogout = () => {
        dispatch(userLoggedOut());
    };

    useEffect(() => {
        setChatLists(data ? data : []);
    }, [data]);

    return (
        <div className="px-2 h-screen flex flex-col left-side w-80 border-r-2 border-r-soft-gray">
            <div className="header p-2 ">
                <div className="flex justify-between">
                    <Link to="/" className="text-black font-bold text-xl">Chats</Link>
                    <div className="flex justify-between items-center gap-10">
                        <CreateGroups />
                        <ChatFilters />
                    </div>
                </div>
                <ChatSearch />
            </div>

            <div className="flex-grow p-2 relative overflow-auto pb-12 bg-white ">
                {isLoading ?
                    <div className="flex items-center justify-center"><Loader /></div> :
                    <ChatLists chatLists={chatLists} />
                }
            </div>
            <div onClick={openStartChat}
                className={`bg-teal-green fixed bottom-5 left-[320px] p-2 rounded-lg cursor-pointer `}
            >
                <MdMessage />
            </div>
        </div>
    );
};

export default ChatUsers;
