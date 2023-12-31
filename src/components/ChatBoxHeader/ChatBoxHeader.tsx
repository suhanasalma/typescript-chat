import React from 'react';
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import { LiaSearchSolid } from "react-icons/lia";



const ChatBoxHeader = () => {
    return (
        <div className='flex justify-between px-8 py-2 shadow-md bg-white'>
            <div className='flex items-center gap-3'>
                <img className='w-12 h-12 object-cover rounded-full' src="https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg" alt="" />
                <p className="text-gray font-semibold">Suhana</p>
            </div>
            <div className='flex items-center gap-10'>
                <HiOutlineVideoCamera/>
                <BsTelephone/>
                <LiaSearchSolid/>
            </div>
        </div>
    );
};

export default ChatBoxHeader;