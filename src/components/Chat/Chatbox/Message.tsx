import React, { useEffect, useRef, useState } from 'react';
import { FaRegSmile } from "react-icons/fa";
import { MessageInterface } from "../../../Interfaces/Interfaces";
import { useDispatch, useSelector } from "react-redux";
import userImage from "../../../assests/user/not-available-user.png";
import { IoCheckmarkDoneSharp, IoCheckmarkOutline } from 'react-icons/io5';
import { RiDeleteBinLine } from "react-icons/ri";
import EmojiPicker from 'emoji-picker-react';
import { calculateDisplayTime } from '../../../StateManagement/slices/timeSlice';

interface MessageProps {
    message: MessageInterface;
    showDeleteModal: (msg: MessageInterface) => void;
    toggleEmojiPicker: (messageId: string | null) => void;
    openLightbox: (messageId: string | null | undefined) => void;
    isOpenEmojiPicker: boolean;
    setOpenEmojiMessageId: React.Dispatch<React.SetStateAction<string | null>>
};


const onEmojiClick = (event: any, emojiObject: any) => {
    console.log(event, emojiObject);
};


const Message = ({ message, showDeleteModal, toggleEmojiPicker, isOpenEmojiPicker, setOpenEmojiMessageId, openLightbox }: MessageProps) => {
    const auth = useSelector((state: any) => state?.auth);
    let user = auth.user;
    const messageRef = useRef<HTMLParagraphElement>(null);
    const [emojiPickerPosition, setEmojiPickerPosition] = useState({ top: 0, left: 0 });
    const dispatch = useDispatch();
    const displayTime = useSelector((state: any) => state?.time[message._id]);
    const received = message?.receivers?.every(receiver=>receiver?.delivered_at!=='');
    const read = message?.receivers?.every(receiver=>receiver?.read_at!=='');

    useEffect(() => {
        dispatch(calculateDisplayTime({ id: message._id, timestamp: message.createdAt }));
    }, [dispatch, message._id, message.createdAt]);


    // const handleLightboxClick = (e) => {
    //     e.stopPropagation();
    // };


    // Assuming the component is a functional component
    const handleLightboxClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };


    useEffect(() => {
        const handleClickOutside = (event: any) => {
            const isClickInsideEmoji = event.target.closest(".msgEmoji");
            if (!isClickInsideEmoji) {
                setOpenEmojiMessageId(null);
            }
        };

        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const calculateEmojiPickerPosition = () => {
            if (messageRef.current) {
                const messageRect = messageRef.current.getBoundingClientRect();
                const emojiPickerWidth = 350;
                const emojiPickerHeight = 500;

                let emojiPickerLeft;
                let emojiPickerTop;

                if (window.innerWidth >= 1040) {
                    // For screens larger than or equal to 1040px width
                    emojiPickerLeft = messageRect.width;
                    emojiPickerTop = messageRect.height;
                } else {
                    // For screens smaller than 1040px width
                    emojiPickerLeft = 100;
                    emojiPickerTop = messageRect.height;
                }

                // Check if emoji picker overflows horizontally
                if (emojiPickerLeft + emojiPickerWidth > window.innerWidth) {
                    emojiPickerLeft = window.innerWidth - emojiPickerWidth;
                }

                // Check if emoji picker overflows vertically
                if (emojiPickerTop + emojiPickerHeight > window.innerHeight) {
                    emojiPickerTop = window.innerHeight - emojiPickerHeight;
                };

                setEmojiPickerPosition({ left: emojiPickerLeft, top: emojiPickerTop });
            }
        };

        // Calculate position initially and when isOpenEmojiPicker changes
        calculateEmojiPickerPosition();
        window.addEventListener("resize", calculateEmojiPickerPosition);

        return () => {
            window.removeEventListener("resize", calculateEmojiPickerPosition);
        };
    }, [isOpenEmojiPicker]);

    return (
        <div
            key={message._id}
            className={`flex items-start gap-5 my-2 lg:w-9/12 group relative ${message.sender === user._id
                ? " justify-end self-end "
                : "self-start justify-start"
                }`}
        >
            <div className="flex items-end justify-between gap-5">
                {message.sender !== user._id && <div className="min-w-max">
                    <img onClick={() => openLightbox(message._id)}
                        // src={message?.img ? message.img : userImage}
                        className="w-8 h-8 rounded-full object-cover object-top"
                        alt=""
                    />
                </div>}
                {message?.sender !== user._id && <div className='absolute z-10' style={{ left: emojiPickerPosition.left, top: emojiPickerPosition.top }}>
                    {
                        isOpenEmojiPicker && <div onClick={handleLightboxClick}>
                            <EmojiPicker style={{ width: "max-content" }} onEmojiClick={onEmojiClick} />
                        </div>
                    }

                </div>}
                {message?.sender === user._id && <div className='absolute z-10' style={{ right: emojiPickerPosition.left, top: emojiPickerPosition.top }}>
                    {
                        isOpenEmojiPicker && <div onClick={handleLightboxClick}>
                            <EmojiPicker style={{ width: "max-content" }} onEmojiClick={onEmojiClick} />
                        </div>
                    }

                </div>}
                {message.sender === user._id && <div className={`flex items-center gap-2 `}>
                    <p onClick={() => showDeleteModal(message)} className='p-1 rounded-full bg-white group-hover:opacity-100  opacity-0 duration-300 ease-in-out deleMsgIcon text-red cursor-pointer'><RiDeleteBinLine /></p>
                    <p className={`p-1 rounded-full bg-white msgEmoji group-hover:opacity-100  opacity-0 duration-300 ease-in-out ${isOpenEmojiPicker && "opacity-100"}`}><FaRegSmile onClick={() => toggleEmojiPicker(message._id)} className='cursor-pointer text-gray' /></p>
                </div>}

                <div ref={messageRef}
                    className={`py-1 px-4 w-full ${message.sender === user._id ? " bg-green rounded-t-lg rounded-l-lg" : "bg-white rounded-t-lg rounded-r-lg"
                        }`}

                >

                    <p className="">{message?.message}</p>
                    <div className="text-[10px] text-slate flex items-center justify-end ">
                        <p>
                            {displayTime}
                        </p>
                        {message.sender === user._id && <p className="">
                            {/* {message.received ? (
                                <IoCheckmarkDoneSharp
                                    className={`${message.read && "text-blue text-base font-bold"}`}
                                />
                            ) : (
                                <IoCheckmarkOutline />
                            )} */}
                        </p>}
                    </div>
                </div>
                {message.sender !== user._id && <div className={`flex items-center gap-2 group-hover:opacity-100 opacity-0 duration-300 ease-in-out ${isOpenEmojiPicker && "opacity-100"}`}><p className='p-1 rounded-full bg-white msgEmoji'><FaRegSmile onClick={() => toggleEmojiPicker(message._id)} className='cursor-pointer text-gray' /></p></div>}
                {message.sender === user._id && <div className="min-w-max flex justify-end">
                    <img onClick={() => openLightbox(message._id)}
                        src={user?.img ? user?.img : userImage}
                        className="w-8 h-8 rounded-full object-cover object-top"
                        alt=""
                    />
                </div>}
            </div>

        </div>
    );
};

export default Message;