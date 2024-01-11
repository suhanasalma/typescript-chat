

import React from "react";
import bakcground from "../../assests/background/2.jpg";
import { Message } from "../../Interfaces/Interfaces";
import { IoCheckmarkOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import userImage from '../../assests/user/not-available-user.png'

interface Messages {
    messages: Message[];
}

const Chatbox = ({ messages }: Messages) => {
    const timeOptions = { hour: "numeric", minute: "numeric" };

    const auth = useSelector((state: any) => state?.auth)
    let user = auth.user;

    return (
        <div
            style={{
                backgroundImage: `url(${bakcground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
            className="px-4 flex-1 text-soft-black max-h-[82vh] min-h-[80vh] overflow-scroll"
        >
            <div className={`flex flex-col items-end justify-end h-full `}>
                {messages?.map((message, index) => (
                    <div className={`flex items-start gap-5 my-2 ${message.sender === user.email ? "self-end" : "self-start"
                        }`}>
                        <img src={message?.img ? message.img : userImage} className="w-8 h-8 rounded-full object-cover object-top" alt="" />
                        <div
                            className={`py-1 px-4 rounded-lg  flex  items-end justify-between gap-5 ${message.sender === user.email ? " bg-green" : "bg-white"
                                }`}
                            key={index}
                        >
                            <p>{message.content}</p>
                            <div className="text-[10px] text-slate flex items-center justify-end ">
                                <p>
                                    {message.timestamp.toLocaleTimeString(
                                        undefined,
                                        timeOptions as Intl.DateTimeFormatOptions
                                    )}
                                </p>
                                <p className="">
                                    {message.received ? (
                                        <IoCheckmarkDoneOutline
                                            className={`${message.read && "text-blue"}`}
                                        />
                                    ) : (
                                        <IoCheckmarkOutline />
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chatbox;

