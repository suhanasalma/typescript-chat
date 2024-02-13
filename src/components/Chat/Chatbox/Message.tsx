import React from 'react';
import { FaRegSmile } from "react-icons/fa";
import { MessageInterface } from "../../../Interfaces/Interfaces";
import { useSelector } from "react-redux";
import userImage from "../../../assests/user/not-available-user.png";
import { IoCheckmarkDoneSharp, IoCheckmarkOutline } from 'react-icons/io5';
import { RiDeleteBinLine } from "react-icons/ri";

interface MessageProps {
    message: MessageInterface;
    showDeleteModal:(msg: MessageInterface)=>void
  }

const Message = ({message,showDeleteModal}:MessageProps) => {
    const auth = useSelector((state: any) => state?.auth);
    let user = auth.user;
    return (
        <div
              key={message._id}
              className={`flex items-start gap-5 my-2 md:w-6/12 group ${
                message.sender === user.email
                  ? " justify-end self-end "
                  : "self-start justify-start"
              }`}
            >
              <div className="flex items-end justify-between gap-5">
              {message.sender !== user.email && <div className="min-w-max">
                <img
                  src={message?.img ? message.img : userImage}
                  className="w-8 h-8 rounded-full object-cover object-top"
                  alt=""
                />
                </div>}
               {  message.sender === user.email && <div className={`flex items-center gap-2 group-hover:opacity-100 opacity-0 duration-300 ease-in-out`}><p className='p-1 rounded-full bg-white'><RiDeleteBinLine onClick={()=>showDeleteModal(message)} className=' text-red cursor-pointer'/></p> <p className='p-1 rounded-full bg-white'><FaRegSmile className='cursor-pointer text-gray'/></p></div> }
                
                <div
                  className={`py-1 px-4 w-full ${
                    message.sender === user.email ? " bg-green rounded-t-lg rounded-l-lg" : "bg-white rounded-t-lg rounded-r-lg"
                  }`}
                  
                >
                   
                  <p className="">{message.content}</p>
                  <div className="text-[10px] text-slate flex items-center justify-end ">
                    <p>
                      {/* {message.timestamp.toLocaleTimeString(
                        undefined,
                        timeOptions as Intl.DateTimeFormatOptions
                      )} */}
                    </p>
                    {message.sender === user.email && <p className="">
                      {message.received ? (
                        <IoCheckmarkDoneSharp
                          className={`${message.read && "text-blue text-base font-bold"}`}
                        />
                      ) : (
                        <IoCheckmarkOutline />
                      )}
                    </p>}
                  </div>
                </div>
                {  message.sender !== user.email && <div className='flex items-center gap-2 group-hover:opacity-100 opacity-0 duration-300 ease-in-out'><p className='p-1 rounded-full bg-white'><FaRegSmile className='cursor-pointer text-gray'/></p></div>}
                {message.sender === user.email && <div className="min-w-max flex justify-end">
                 <img
                  src={message?.img ? message.img : userImage}
                  className="w-8 h-8 rounded-full object-cover object-top"
                  alt=""
                />
                </div>}
              </div>
            </div>
    );
};

export default Message;