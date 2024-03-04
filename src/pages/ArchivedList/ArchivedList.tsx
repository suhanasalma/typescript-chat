import React, { useEffect, useState } from "react";
import ChatSearch from "../../components/Chat/ChatSearch/ChatSearch";
import ChatLists from "../../components/Chat/ChatLists/ChatLists";
import { ChatIndexList } from "../../Interfaces/Interfaces";
import { useGetChatChannelsByEmailAndIndexTypeQuery } from "../../StateManagement/services/chatApi";
import Loader from "../../components/Loader/Loader";

const ArchivedList = () => {
    const [chatLists, setChatLists] = useState<ChatIndexList[]>([]);
    const [searchText, setSearchText] = useState('');
    const [filterText, setFilterText] = useState('');
    const { data, isLoading } = useGetChatChannelsByEmailAndIndexTypeQuery({ chat_index_status: 'archived',searchTextName:searchText,filter: filterText });
    useEffect(() => {
        setChatLists(data ? data : []);
    }, [data]);
    return (
        <div className="px-2 h-screen flex flex-col left-side w-80 border-r-2 border-r-soft-gray">
            <div className="header p-2 ">
                <p className="text-black font-bold text-xl">Archived</p>
                <ChatSearch placeholder="Search or start a new chat"/>
            </div>
            <div className="flex-grow p-2 relative overflow-auto pb-12 bg-white ">
                {isLoading ?
                    <div className="flex items-center justify-center"><Loader /></div> :
                    <ChatLists chatLists={chatLists} />
                }
            </div>
            {/* <div 
        className={`bg-teal-green fixed bottom-5 left-[320px] p-2 rounded-lg cursor-pointer `}
      >
        <MdMessage />
      </div> */}
        </div>
    );
};

export default ArchivedList;