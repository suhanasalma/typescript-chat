import React, { useEffect, useState } from "react";
import ChatSearch from "../../components/Chat/ChatSearch/ChatSearch";
import CreateGroups from "../../components/CreateGroups/CreateGroups";
import ChatFilters from "../../components/Chat/ChatFilters/ChatFilters";
import ChatLists from "../../components/Chat/ChatLists/ChatLists";
import { ChatIndexList } from "../../Interfaces/Interfaces";
import { useGetChatListQuery } from "../../StateManagement/services/chatApi";
import { useDispatch } from "react-redux";
import { userLoggedIn, userLoggedOut } from "../../StateManagement/slices/authSlice";
import { MdMessage } from "react-icons/md";

interface ChatUser{
    openStartChat:()=>void;
}

const ChatUsers = ({ openStartChat }: ChatUser) => {
    const [chatLists, setChatLists] = useState<ChatIndexList[]>([])
    const dispatch = useDispatch();
    const { data } = useGetChatListQuery({ chat_index_status: 'regular' });
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
        <div className="w-full h-full">
            <div className="">
                <div className="flex justify-between ">
                    <p className="text-black font-bold text-xl">Chats</p>
                    <div className="flex justify-between items-center gap-10">
                        <CreateGroups />
                        <ChatFilters />
                    </div>
                </div>
                <ChatSearch />
            </div>
            <ChatLists chatLists={chatLists} />
             <div onClick={openStartChat} className={`bg-teal-green fixed bottom-5 left-[370px] p-2 rounded-lg cursor-pointer `}>
                <MdMessage />
            </div>
        </div>
    );
};

export default ChatUsers;
