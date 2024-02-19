import React, { useEffect, useRef, useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
import MediaPicker from "../../MediaPicker/MediaPicker";


interface ChatBoxFooterProps {
    message: string
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    setVal: React.Dispatch<React.SetStateAction<string>>;
    val: string;
    sendMessage: (data: any) => void
}
const ChatboxFooter = ({ setMessage, message, val, setVal, sendMessage }: ChatBoxFooterProps) => {
    const [openEmoji, setOpenEmoji] = useState(false);
    const [openMediaPicker, setOpenMediaPicker] = useState(false);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const onEmojiClick = (event: any, emojiObject: any) => {
        // console.log("event", event.emoji);
        setMessage((prevMessage) => prevMessage + event.emoji);
    };

    const showOpenEmoji = () => {
        setOpenEmoji(!openEmoji);
        setOpenMediaPicker(false)
    }
    const showOpenMediaPicker = () => {
        setOpenMediaPicker(!openMediaPicker);
        setOpenEmoji(false)
    }

    const closeEmojiAndMedia = () => {
        setOpenEmoji(false)
        setOpenMediaPicker(false)
    }

    const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setVal(e.target.value);
        setMessage(e.target.value);

    };

    const submitMessage = (e: any) => {
        console.log("object", e.target.value);
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevents new line insertion
            sendMessage({ message: e.target.value, type: "text" });
            setVal('');
        }
    };
    


    const resizeTextArea = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
        }
    };


    useEffect(resizeTextArea, [val]);
    return (
        <div className="flex justify-between items-center gap-10 p-5 bg-white text-gray sticky bottom-0 left-0 right-0 w-full z-10">
            <div className="flex items-center gap-5">
                <FaRegSmile onClick={showOpenEmoji} />
                <ImAttachment onClick={showOpenMediaPicker} />
            </div>
            <textarea onChange={onChange} ref={textAreaRef} rows={1} onFocus={closeEmojiAndMedia}
                className="flex-1 outline-none"
                style={{ resize: "none", overflowY: "hidden", }}
                value={message}
                placeholder="Type a message"
                name="message"
                id="message"
                onKeyUp={(e) => submitMessage(e)}
            />

            <IoSend onClick={() => sendMessage({ message, type: "text" })} />
            <MdOutlineKeyboardVoice className="text-2xl" />

            {
                <div className={`fixed bottom-20 duration-300 ease-in-out ${openEmoji ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <EmojiPicker

                        onEmojiClick={onEmojiClick}
                    />
                </div>
            }
            {
                <div className={`fixed bottom-20 duration-300 ease-in-out  ${openMediaPicker ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <MediaPicker

                    />
                </div>
            }

        </div>
    );
};

export default ChatboxFooter;
