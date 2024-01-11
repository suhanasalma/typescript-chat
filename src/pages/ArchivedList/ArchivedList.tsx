import React, { useEffect, useState } from "react";
import ChatSearch from "../../components/Chat/ChatSearch/ChatSearch";
import ChatLists from "../../components/Chat/ChatLists/ChatLists";
import { ChatIndexList } from "../../Interfaces/Interfaces";
import { useGetChatListQuery } from "../../StateManagement/services/chatListApi";

const ArchivedList: React.FC = () => {
    const [chatLists, setChatLists] = useState<ChatIndexList[]>([]);

    const { data } = useGetChatListQuery({ chat_index_status: 'archived' });
    useEffect(() => {
        setChatLists(data ? data : []);
    }, [data]);
    return (
        <div className="w-full h-full">
            <div className="">
                <p className="text-black font-bold text-xl">Archived</p>

                <ChatSearch />
            </div>
            <ChatLists chatLists={chatLists} />
        </div>
    );
};

export default ArchivedList;