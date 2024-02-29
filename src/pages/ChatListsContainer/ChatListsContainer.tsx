
import React, { useEffect, useState } from "react";
import ChatSearch from "../../components/Chat/ChatSearch/ChatSearch";
import CreateGroups from "../../components/CreateGroups/CreateGroups";
import ChatFilters from "../../components/Chat/ChatFilters/ChatFilters";
import ChatLists from "../../components/Chat/ChatLists/ChatLists";
import { ChatIndexList } from "../../Interfaces/Interfaces";
import { useFilterChatChannelQuery, useGetChatChannelsByEmailAndIndexTypeQuery, useSearchChatChannelQuery } from "../../StateManagement/services/chatApi";
import { MdMessage } from "react-icons/md";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { GrAnnounce, GrGroup } from "react-icons/gr";
import { GoUnread } from "react-icons/go";
interface ChatUser {
    openStartChat: () => void;
    chatLists: ChatIndexList[]
    setChatLists: React.Dispatch<React.SetStateAction<ChatIndexList[]>>;
};

const ChatListsContainer = ({ openStartChat, setChatLists, chatLists }: ChatUser) => {
    const [searchText,setSearchText] = useState('')
    const [filterText,setFilterText] = useState('')
    const { data, isLoading, refetch } = useGetChatChannelsByEmailAndIndexTypeQuery({ chat_index_status: "regular" });
    const { data:searchList } = useSearchChatChannelQuery({ name: searchText });
    const { data:filterList } = useFilterChatChannelQuery({ filter: filterText });
    const filterMenu = [
        {
            id: "1",
            name: "Unread",
            value: "unread",
            icon: GoUnread
        },
        {
            id: "2",
            name: "Group",
            value: "group",
            icon: GrGroup
        },
        {
            id: "3",
            name: "Announcement",
            value: "announcement",
            icon: GrAnnounce
        },
        {
            id: "4",
            name: "Contacts",
            value: "one-to-one",
            icon: FaRegUser
        },
    ];

    console.log("filterList",filterList);
    useEffect(() => {
        setChatLists(data ? data : []);
        refetch()
    }, [setChatLists, data, refetch]);

    function debounce(func: (...args: any[]) => void, timeout = 300) {
        let timer: NodeJS.Timeout | undefined;
        return function (this: any, ...args: any[]) {
            const context = this;
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(context, args); }, timeout);
        };
    }

    const handleSearch = (value: string) => {
        setSearchText(value);
    };
    const processChange = debounce(handleSearch);

    useEffect(()=>{
        setChatLists(filterList?.results ? filterList?.results : []);
    },[filterList,setChatLists,]);

    useEffect(()=>{
        if(searchText){
            setChatLists(searchList?.results ? searchList?.results : []);
        }else{
            setChatLists(data ? data : []);
        }
        
    },[searchList,setChatLists,searchText,data]);

    return (
        <div className="px-2 h-screen flex flex-col left-side w-80 border-r-2 border-r-soft-gray">
            <div className="header p-2 ">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-black font-bold text-xl">Chats</Link>
                    <ChatFilters setFilterText = {setFilterText} filterMenu={filterMenu} title="Filter chats by"/>
                </div>
                <ChatSearch processChange={processChange} placeholder="Search or start a new chat" />
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

export default ChatListsContainer;
