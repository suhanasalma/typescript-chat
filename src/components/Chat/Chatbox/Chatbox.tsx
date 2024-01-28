import React, { useState } from "react";
import background from "../../../assests/background/2.jpg";
import { Message } from "../../../Interfaces/Interfaces";
import { IoCheckmarkOutline, IoCheckmarkDoneSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import userImage from "../../../assests/user/not-available-user.png";
import { useParams } from "react-router-dom";
import { useGetChatIndexDetailsByIdQuery } from "../../../StateManagement/services/chatApi";

interface Messages {
  messages: Message[];
}

const Chatbox = ({ messages }: Messages) => {
  const { id } = useParams<{ id?: string }>();
  const timeOptions = { hour: "numeric", minute: "numeric" };
  const {data} = useGetChatIndexDetailsByIdQuery({id});
  let backgroundImg = data?.background? data?.background : background;

  const auth = useSelector((state: any) => state?.auth);
  let user = auth.user;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="flex-grow relative overflow-auto  "
    >
      <div className="px-4 text-soft-black">
        <div className={`flex flex-col items-end justify-end h-full pb-14 `}>
          {messages?.map((message, index) => (
            <div
              key={message._id}
              className={`flex items-start gap-5 my-2 md:w-6/12 ${
                message.sender === user.email
                  ? " justify-end self-end "
                  : "self-start justify-start"
              }`}
            >
              <div className="flex items-end justify-between ">
                <div className="w-20">
                {message.sender !== user.email && <img
                  src={message?.img ? message.img : userImage}
                  className="w-8 h-8 rounded-full object-cover object-top"
                  alt=""
                />}
                </div>
                
                <div
                  className={`py-1 px-4 w-full ${
                    message.sender === user.email ? " bg-green rounded-t-lg rounded-l-lg" : "bg-white rounded-t-lg rounded-r-lg"
                  }`}
                  key={index}
                >
                  <p className="">{message.content}</p>
                  <div className="text-[10px] text-slate flex items-center justify-end ">
                    <p>
                      {message.timestamp.toLocaleTimeString(
                        undefined,
                        timeOptions as Intl.DateTimeFormatOptions
                      )}
                    </p>
                    <p className="">
                      {message.received ? (
                        <IoCheckmarkDoneSharp 
                          className={`${message.read && "text-blue text-base font-bold"}`}
                        />
                      ) : (
                        <IoCheckmarkOutline />
                      )}
                    </p>
                  </div>
                </div>
                <div className="w-20 flex justify-end">
                {message.sender === user.email && <img
                  src={message?.img ? message.img : userImage}
                  className="w-8 h-8 rounded-full object-cover object-top"
                  alt=""
                />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
