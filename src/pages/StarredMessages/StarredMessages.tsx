import React, { useState } from 'react';
import ChatSearch from '../../components/ChatSearch/ChatSearch';
import { StarredMessageIndex } from '../../Interfaces/Interfaces';
import { NavLink } from 'react-router-dom';

const StarredMessages = () => {
    const [starredMessages, setStarredMessages] = useState<StarredMessageIndex[]>([
        {
            _id: 1,
            content: "HI this is from shakil and suhana",
            type: "text",
            timestamp: new Date(),
            starredUser: "suhana",
            chatIndexName: "Shakil",
            chat_index_status:"starred",
            email:"shakil@gmail.com"
        }
    ])

    const timeOptions = { hour: "numeric", minute: "numeric" };

    return (
        <div className='w-full h-full'>
            <p className="text-black font-bold text-xl mb-5">Starred sessages</p>
            <ChatSearch />
            <p className='text-slate my-5'>Messages</p>

            <div className='space-y-5 max-h-[82vh] min-h-[82vh] overflow-scroll'>
                {
                    starredMessages?.map(message => <NavLink
                        className={({ isActive }) =>
                            `mr-5 flex justify-between items-start shadow-sm py-2 cursor-pointer text-slate p-2 hover:bg-light-gray  ${isActive
                                ? "bg-soft-gray rounded-sm"
                                : ""
                            }`
                        }
                        to={`/call/${message.email}`}
                        key={message._id}>
                        <div className='flex justify-between'>
                            <div className='w-7/12'>
                                <p className='font-bold text-soft-black'>{message.chatIndexName}</p>
                                <p className='text-xs'>{message.content}</p>
                            </div>
                            <p className='text-xs'>{message.timestamp.toLocaleTimeString(undefined,
                                timeOptions as Intl.DateTimeFormatOptions)}</p>
                        </div>
                    </NavLink>)
                }
            </div>

        </div>
    );
};

export default StarredMessages;