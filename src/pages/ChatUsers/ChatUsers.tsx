import React, { useEffect, useState } from "react";
import ChatSearch from "../../components/ChatSearch/ChatSearch";
import CreateGroups from "../../components/CreateGroups/CreateGroups";
import ChatFilters from "../../components/ChatFilters/ChatFilters";
import ChatLists from "../../components/ChatLists/ChatLists";
import { ChatIndexList } from "../../Interfaces/Interfaces";
import { useGetChatListQuery } from "../../StateManagement/services/chatListApi";
import { useDispatch } from "react-redux";
import { userLoggedIn,userLoggedOut } from "../../StateManagement/slices/authSlice";

const ChatUsers: React.FC = () => {
    const [chatLists, setChatLists] = useState<ChatIndexList[]>([])
    const dispatch = useDispatch();
    const { data } = useGetChatListQuery({chat_index_status:'regular'});
    const handleLogin = () => {
        dispatch(userLoggedIn({ user: ""}));
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
        </div>
    );
};

export default ChatUsers;
