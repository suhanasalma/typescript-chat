

import React from "react";
import bakcground from "../../assests/background/2.jpg";
import { Message } from "../../Interfaces/Interfaces";
import { IoCheckmarkOutline, IoCheckmarkDoneOutline } from "react-icons/io5";

interface Messages {
  messages: Message[];
  oppositeUserEmail: string | undefined;
}

const Chatbox = ({ messages, oppositeUserEmail }: Messages) => {
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
      className="px-4 flex-1 text-soft-black max-h-[82vh] min-h-[82vh] overflow-scroll"
    >
      <div className={`flex flex-col items-end justify-end h-full`}>
        {messages?.map((message, index) => (
          <div
            className={`flex gap-5 w-fit py-1 px-4 rounded-lg  my-2 ${
              message.sender === oppositeUserEmail ? "self-end bg-green" : "self-start bg-white"
            }`}
            key={index}
          >
            <p>{message.content}</p>
            <div className="text-xs text-slate">
              <p>
                {message.timestamp.toLocaleTimeString(
                  undefined,
                  timeOptions as Intl.DateTimeFormatOptions
                )}
              </p>
              <p className="flex items-center gap-2">
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
        ))}
      </div>
    </div>
  );
};

export default Chatbox;

