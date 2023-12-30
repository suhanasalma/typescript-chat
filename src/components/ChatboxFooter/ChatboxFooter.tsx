import React from "react";
import { FaRegSmile } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { MdOutlineKeyboardVoice } from "react-icons/md";

const ChatboxFooter = () => {
  return (
    <div className="flex justify-between items-center gap-10 p-5 sticky bottom-0 left-0  right-0 w-full shadow-sm shadow-black">
      <div className="flex items-center gap-5">
        <FaRegSmile />
        <ImAttachment />
      </div>
      <input className="flex-1 outline-none" placeholder="Type a message" type="text" name="" id="" />
      <MdOutlineKeyboardVoice className="text-2xl" />
    </div>
  );
};

export default ChatboxFooter;
