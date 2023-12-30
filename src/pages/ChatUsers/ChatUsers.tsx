import React from "react";
import ChatSearch from "../../components/ChatSearch/ChatSearch";
import CreateGroups from "../../components/CreateGroups/CreateGroups";
import ChatFilters from "../../components/ChatFilters/ChatFilters";
import ChatLists from "../../components/ChatLists/ChatLists";

const ChatUsers: React.FC = () => {
  return (
    <div className="w-3/12 border-r-2 pt-12 pl-16 h-full">
       <div className="px-4">
            <div className="flex justify-between ">
                    <p className="text-black font-bold text-xl">Chats</p>
                    <div className="flex justify-between items-center gap-10">
                        <CreateGroups/>
                        <ChatFilters />
                    </div>
            </div>
        <ChatSearch/>
       </div>
        <ChatLists/>
    </div>
  );
};

export default ChatUsers;
