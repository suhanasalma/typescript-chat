import React, { useState } from 'react';
import ChatSearch from '../../components/Chat/ChatSearch/ChatSearch';
import { StarredMessageIndex } from '../../Interfaces/Interfaces';
import { NavLink } from 'react-router-dom';

const StarredMessages = () => {
    const [starredMessages, setStarredMessages] = useState<StarredMessageIndex[]>([
        {
            _id:"1",
            content: "HI this is from shakil and suhana",
            type: "text",
            timestamp: new Date(),
            starredUser: "suhana",
            chatIndexName: "Shakil",
            chat_index_status: "starred",
            email: "shakil@gmail.com"
        }
    ])

  const timeOptions = { hour: "numeric", minute: "numeric" };
  return (
    <div className="px-2 h-screen flex flex-col left-side w-80 border-r-2 border-r-soft-gray">
      <div className="header p-2 ">
        <p className="text-black font-bold text-xl">Starred Messages</p>
        <ChatSearch />
      </div>
      <p className="text-slate  p-2">Messages</p>
      <div className="flex-grow p-2 relative overflow-auto pb-12 bg-white ">
        {starredMessages?.map((message) => (
          <NavLink
            className={({ isActive }) =>
              `flex justify-between items-start shadow-sm cursor-pointer text-slate p-2 hover:bg-light-gray  rounded-md ${
                isActive ? "bg-soft-gray" : ""
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
      {/* <div
        className={`bg-teal-green fixed bottom-5 left-[320px] p-2 rounded-lg cursor-pointer `}
      >
        <MdMessage />
      </div> */}
    </div>
  );
};

export default StarredMessages;
