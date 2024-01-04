import React from "react";
import { ChatIndexList } from "../../Interfaces/Interfaces";
import { IoCheckmarkOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import {NavLink } from "react-router-dom";
import { CiVolumeMute } from "react-icons/ci";

const ChatList: React.FC<{ list: ChatIndexList }> = ({ list }) => {
  const timeOptions = { hour: "numeric", minute: "numeric" };

  return (
    <NavLink className={({ isActive }) =>
      `mr-5 flex justify-between items-start shadow-sm p-2 cursor-pointer text-slate hover:bg-light-gray  ${isActive
        ? "bg-soft-gray rounded-sm"
        : ""
      }`
    } to={`/chat/${list.email}`}
      key={list.id}>
      <div className="flex gap-3">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={list?.img}
          alt=""
        />
        
        <div className="">
        <p className="text-gray font-semibold ">{list?.name}</p>
          <div className="flex items-center gap-2">
          <p>{list?.received ? <IoCheckmarkDoneOutline className={`${list?.read && "text-blue"}`} /> : <IoCheckmarkOutline />}</p>
          <p className="text-xs w-8/12  truncate">{list?.last_msg}</p>
          </div>
        </div>
      </div>
      <div className="text-sm">
        <p className="text-end">
          {list?.last_msg_time?.toLocaleTimeString(
            undefined,
            timeOptions as Intl.DateTimeFormatOptions
          )}
        </p>
        <div className="flex items-center gap-2 justify-end">
        {list?.msg_status==="archived"&& <><CiVolumeMute className="text-slate"/>
        <p className="text-xs bg-soft-gray text-slate font-semibold px-1 rounded-sm">Archived</p></>}
        {list?.unread_msg_counter !== 0 && <p className="text-xs text-end bg-teal-green text-white w-4 h-4 p-2 flex items-center justify-center rounded-full">{list.unread_msg_counter}</p>}
        </div>
      </div>
    </NavLink>
  );
};

export default ChatList;
