import React from 'react';
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import { LiaSearchSolid } from "react-icons/lia";

interface HeaderDataInfo {
    name:string;
    img:string
}

interface HeaderInfo{
    header:HeaderDataInfo
}

const ChatBoxHeader = ({header}:HeaderInfo) => {
    return (
        <div className='flex justify-between px-8 py-2 shadow-md bg-white'>
            <div className='flex items-center gap-3'>
                <img className='w-12 h-12 object-cover rounded-full' src={header?.img} alt="" />
                <p className="text-gray font-semibold">{header?.name}</p>
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