import React, { useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
import MediaPicker from "../../MediaPicker/MediaPicker";

const ChatboxFooter = () => {
    const [openEmoji,setOpenEmoji] = useState(false);
    const [openMediaPicker,setOpenMediaPicker] = useState(false);
  const onEmojiClick = (event: any, emojiObject: any) => {
    console.log(event, emojiObject);
  };

  const showOpenEmoji = () =>{
    setOpenEmoji(!openEmoji);
    setOpenMediaPicker(false)
  }
  const showOpenMediaPicker = () =>{
    setOpenMediaPicker(!openMediaPicker);
    setOpenEmoji(false)
  }
  return (
    <section className="relative">
        
          <div className={`absolute bottom-20 left-3 duration-300 ease-in-out  ${openEmoji?"opacity-100 ":"opacity-0"}`}>
            <EmojiPicker
              
              onEmojiClick={onEmojiClick}
            />
          </div>
          <div className={`absolute bottom-20 left-3 duration-300 ease-in-out  ${openMediaPicker?"opacity-100 ":"opacity-0"}`}>
            <MediaPicker
              
            />
          </div>
        
      <div className="flex justify-between items-center gap-10 p-5 bg-white text-gray sticky bottom-0 left-0 right-0 w-full z-10">
        <div className="flex items-center gap-5">
          <FaRegSmile onClick={showOpenEmoji}/>
          <ImAttachment onClick={showOpenMediaPicker}/>
        </div>
        <input
          className="flex-1 outline-none"
          placeholder="Type a message"
          type="text"
          name=""
          id=""
        />

        <IoSend />
        <MdOutlineKeyboardVoice className="text-2xl" />
        
      </div>
    </section>
  );
};

export default ChatboxFooter;
