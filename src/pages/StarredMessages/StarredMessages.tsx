import React, { useState } from 'react';
import ChatSearch from '../../components/ChatSearch/ChatSearch';
import { StarredMessage } from '../../Interfaces/Interfaces';
import { NavLink } from 'react-router-dom';

const StarredMessages = () => {
    const [starredMessages, setStarredMessages] = useState<StarredMessage[]>([
        {
            id: 1,
            content: "HI this is from shakil and suhana",
            type: "text",
            timestamp: new Date(),
            starredUser: "suhana",
            chatIndexName: "Shakil"
        }
    ])

    const timeOptions = { hour: "numeric", minute: "numeric" };

    return (
        <div className='space-y-5 mt-5'>
            <p className="text-black font-bold text-xl mb-5">Starred sessages</p>
            <ChatSearch />
            <p className='text-slate'>Messages</p>

            <div className='space-y-5 mt-5 h-[85vh] overflow-auto'>
                {
                    starredMessages?.map(message => <NavLink
                        className={({ isActive }) =>
                            `mr-5 flex justify-between items-start shadow-sm py-2 cursor-pointer text-slate p-2 hover:bg-light-gray  ${isActive
                                ? "bg-soft-gray rounded-sm"
                                : ""
                            }`
                        }
                        to={`/call/${message.id}`}
                        key={message.id}>
                        <div className='flex justify-between'>
                            <div className='w-9/12'>
                                <p className='font-bold text-soft-black'>{message.chatIndexName}</p>
                                <p className='text-sm'>{message.content}</p>
                            </div>
                            <p>{message.timestamp.toLocaleTimeString(undefined,
                                timeOptions as Intl.DateTimeFormatOptions)}</p>
                        </div>
                    </NavLink>)
                }
            </div>

        </div>
    );
};

export default StarredMessages;