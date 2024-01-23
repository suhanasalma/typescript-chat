import React from 'react';
import { NavLink } from 'react-router-dom';
import { StarredMessageIndex } from '../../Interfaces/Interfaces';

interface StarredMessageProps {
    starredMessages:StarredMessageIndex[]
}
const StarredMessage = ({starredMessages}:StarredMessageProps) => {
    const timeOptions = { hour: "numeric", minute: "numeric" };

    return (
        <div className='space-y-2'>
            {starredMessages?.map((message) => (
                    <NavLink
                        className={({ isActive }) =>
                            `flex justify-between items-start cursor-pointer text-slate shadow py-3 px-2 hover:bg-light-gray  rounded-md ${isActive ? "bg-soft-gray" : ""
                            }`
                        }
                        to={`/call/${message.email}`}
                        key={message._id}
                    >
                        <div className="flex justify-between">
                            <div className="w-7/12">
                                <p className="font-bold text-md text-soft-black">
                                    {message.chatIndexName}
                                </p>
                                <p className="text-xs">{message.content}</p>
                            </div>
                            <p className="text-xs">
                                {message.timestamp.toLocaleTimeString(
                                    undefined,
                                    timeOptions as Intl.DateTimeFormatOptions
                                )}
                            </p>
                        </div>
                    </NavLink>
                ))}
        </div>
    );
};

export default StarredMessage;