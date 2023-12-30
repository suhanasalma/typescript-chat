import React from "react";
import { MessageList } from "../../Interfaces/Interfaces";
import { IoCheckmarkOutline ,IoCheckmarkDoneOutline } from "react-icons/io5";


const ChatList: React.FC<{ list: MessageList }> = ({ list }) => {
  const timeOptions = { hour: "numeric", minute: "numeric" };

  return (
    <div className="mr-5 flex justify-between items-start shadow-sm py-2 cursor-pointer text-slate-500 " key={list.id}>
      <div className="flex gap-3">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={list.img}
          alt=""
        />
        <div>
          <p className="text-gray-900 font-semibold">{list.name}</p>
          <p className="flex items-center gap-2 text-sm">{list.received?<IoCheckmarkDoneOutline className="text-red-700"/>:<IoCheckmarkOutline/>}{list.last_msg}</p>
        </div>
      </div>
      <div className="text-sm">
        <p >
          {list.last_msg_time.toLocaleTimeString(
            undefined,
            timeOptions as Intl.DateTimeFormatOptions
          )}
        </p>
       {list.unread_msg_counter!==0 && <p className="text-end">{list.unread_msg_counter}</p>}
      </div>
    </div>
  );
};

export default ChatList;
