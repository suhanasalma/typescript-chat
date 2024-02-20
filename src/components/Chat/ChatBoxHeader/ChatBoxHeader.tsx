import React, { useState } from 'react';
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import { LiaSearchSolid } from "react-icons/lia";
import ChatChannelDetails from '../ChatChannelDetails/ChatChannelDetails/ChatChannelDetails';

interface HeaderDataInfo {
    name: string | undefined | null;
    img: string | undefined | null;
    _id: string | undefined | null;
    group_type: string | undefined | null;
}

interface HeaderInfo {
    // header: HeaderDataInfo
    img: string;
    name: string;
    setOpenChatChannelDetailsPage: React.Dispatch<React.SetStateAction<boolean>>;
    openChatChannelDetailsPage: boolean;
}

const ChatBoxHeader = ({ name, img, setOpenChatChannelDetailsPage, openChatChannelDetailsPage }: HeaderInfo) => {
    // console.log("header", header);
    // const [openChatChannelDetailsPage,setOpenChatChannelDetailsPage] = useState(false)
    return (
        <div className='flex justify-between px-8 py-2 shadow-md bg-white'>
            <div onClick={() => setOpenChatChannelDetailsPage(!openChatChannelDetailsPage)} className='ChatChannelDetails flex items-center gap-3 cursor-pointer '>
                <img className='w-12 h-12 object-cover rounded-full' src={img} alt="" />
                <div>
                    <p className="text-gray font-semibold">{name}</p>
                    <p className="text-slate text-xs">select for more information</p>
                </div>

            </div>
            <div className='flex items-center gap-10'>
                <HiOutlineVideoCamera />
                <BsTelephone />
                <LiaSearchSolid />
            </div>
        </div>
    );
};

export default ChatBoxHeader;