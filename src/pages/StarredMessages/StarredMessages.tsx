import React, { useState } from 'react';
import ChatSearch from '../../components/Chat/ChatSearch/ChatSearch';
import { StarredMessageIndex } from '../../Interfaces/Interfaces';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import StarredMessage from './StarredMessage';
import moment from "moment";

const StarredMessages = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [starredMessages, setStarredMessages] = useState<StarredMessageIndex[]>([
        {
            _id: "1",
            content: "HI this is from shakil and suhana",
            type: "text",
            timestamp: moment(new Date()).toISOString(),
            starredUser: "suhana",
            chatIndexName: "Shakil",
            chat_index_status: "starred",
            email: "shakil@gmail.com"
        }
    ])

    return (
        <div className="px-2 h-screen flex flex-col left-side w-80 border-r-2 border-r-soft-gray">
            <div className="header p-2 ">
                <p className="text-black font-bold text-xl">Starred Messages</p>
                <ChatSearch />
            </div>
            <p className="text-slate  p-2">Messages</p>
            <div className="flex-grow p-2 relative overflow-auto pb-12 bg-white">
                {isLoading ?
                    <div className="flex items-center justify-center"><Loader /></div> :
                    // <StarredMessage starredMessages={starredMessages}/>
                    <div className='space-y-2'>
                        {starredMessages?.map((message) => <StarredMessage message={message}/>)}
                    </div>
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

export default StarredMessages;
