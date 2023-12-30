

import React from "react";
import bakcground from "../../assests/background/2.jpg";
import { Message } from "../../Interfaces/Interfaces";
import { IoCheckmarkOutline, IoCheckmarkDoneOutline } from "react-icons/io5";

interface Messages {
  messages: Message[];
  userId: number | undefined;
}

const Chatbox = ({ messages, userId }: Messages) => {
  const timeOptions = { hour: "numeric", minute: "numeric" };

  return (
    <div
      style={{
        backgroundImage: `url(${bakcground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="px-4 flex-1 text-black max-h-[82vh] overflow-scroll"
    >
      <div className={`flex flex-col items-end justify-end h-full`}>
        {messages?.map((message, index) => (
          <div
            className={`flex gap-5 w-fit py-1 px-4 rounded-lg bg-white my-2 ${
              message.sender === userId ? "self-end" : "self-start"
            }`}
            key={index}
          >
            <p>{message.content}</p>
            <div className="text-xs text-slate-500">
              <p>
                {message.timestamp.toLocaleTimeString(
                  undefined,
                  timeOptions as Intl.DateTimeFormatOptions
                )}
              </p>
              <p className="flex items-center gap-2">
                {message.received ? (
                  <IoCheckmarkDoneOutline
                    className={`${message.read && "text-red-700"}`}
                  />
                ) : (
                  <IoCheckmarkOutline />
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbox;

