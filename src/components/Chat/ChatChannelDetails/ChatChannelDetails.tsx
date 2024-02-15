import React, { useState } from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { GiMusicalScore } from "react-icons/gi";
import { FaRegFile, FaUsers } from "react-icons/fa";
import { AiTwotoneInfoCircle } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
import { BsQrCode } from "react-icons/bs";
import { MdInsertLink } from 'react-icons/md';
import { RiGroupLine } from "react-icons/ri";


const ChatChannelDetails = () => {
    const [channelMenus, setChannelMenus] = useState([
        {
            _id: "1",
            icon: IoIosInformationCircleOutline,
            name: "Overview",
            // func:openGeneral,
            // show:showGeneral
        },
        {
            _id: "2",
            icon: RiGroupLine,
            name: "Members",
            // func:openAccount,
            // show:showAccount
        },
        {
            _id: "3",
            icon: GiMusicalScore,
            name: "Media",
            // func:openChats,
            // show:showChats
        },
        {
            _id: "4",
            icon: FaRegFile,
            name: "Files",
            // func:openNotifications,
            // show:showNotifications
        },
        {
            _id: "5",
            icon: MdInsertLink,
            name: "Links",
            // func:openPersonalizations,
            // show:showPersonalizations
        },
        {
            _id: "6",
            icon: RiGroupLine,
            name: "Groups",
            // func:openStorage,
            // show:showStorage
        },
    ])
    return (
        <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="h-[60vh] m-5 flex flex-1 fixed w-[520px] bg-white rounded-md overflow-hidden z-50 mx-2">
            <div className="h-[60vh] flex flex-col left-side w-44 border-r-2 border-r-soft-gray bg-light-gray text-md p-2">

                <div className=" relative overflow-auto pb-10  space-y-3">
                    {
                        channelMenus?.map(menu=><div className='flex items-center gap-5 cursor-pointer hover:bg-soft-gray p-1 rounded-md'>
                        <menu.icon />
                        <p>{menu.name}</p>
                    </div>)
                    }
                    
                </div>
            </div>

            <div className="flex-1 w-full  h-full flex flex-col relative overflow-auto ">
                {/* channel details */}
            </div>
        </div>
    );
};

export default ChatChannelDetails;