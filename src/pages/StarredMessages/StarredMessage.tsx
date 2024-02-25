import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { StarredMessageIndex } from '../../Interfaces/Interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { calculateDisplayTime } from '../../StateManagement/slices/timeSlice';
import { RootState } from '../../StateManagement/store/store';

interface StarredMessageProps {
    message: StarredMessageIndex
}
const StarredMessage = ({ message }: StarredMessageProps) => {
    const dispatch = useDispatch();
    const displayTime = useSelector((state: RootState) => state?.time[message._id]);
    useEffect(() => {
        dispatch(calculateDisplayTime({ id: message._id, timestamp: message.timestamp }));
    }, [dispatch, message._id, message.timestamp]);

    return (
        <div>
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
                        {displayTime}
                    </p>
                </div>
            </NavLink>
        </div>
    );
};

export default StarredMessage;