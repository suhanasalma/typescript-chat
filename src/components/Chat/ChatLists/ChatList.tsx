import React from "react";
import { ChatIndexList } from "../../../Interfaces/Interfaces";
import { IoCheckmarkOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { CiVolumeMute } from "react-icons/ci";
import userImage from '../../../assests/user/not-available-user.png'
import groupImage from '../../../assests/group/group.png'
import announcementImage from '../../../assests/group/announcement.png'
import { useSelector } from "react-redux";

const ChatList: React.FC<{ list: ChatIndexList }> = ({ list }) => {
    const auth = useSelector((state: any) => state?.auth)
    let user = auth.user;
    let otherParticipant = null;
    let activeParticipant = list.participants && list.participants.find(participant => participant.email === user.email)

    if (list.group_type === "one-to-one" && list.participants) {
        otherParticipant = list.participants.find(participant => participant.email !== user.email);
    };
    const formattedDate = list.timestamp !== undefined ? new Date(Number(list.timestamp)).toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric" } as Intl.DateTimeFormatOptions) : '';
    const counter = activeParticipant?.counter;


    return (
        <NavLink className={({ isActive }) =>
            `mr-5 flex justify-between items-start shadow-sm p-2 cursor-pointer text-slate hover:bg-light-gray  ${isActive
                ? "bg-soft-gray rounded-sm"
                : ""
            }`
        } to={list.group_type === "one-to-one" ? `/chat/${otherParticipant?.email}` : list.group_type === "group" ? `/chat/group/${list._id}` : `/chat/announcement/${list._id}`}
            key={list._id}>
            <div className="flex gap-3">
               { list.group_type === "group" && <img
                    className="w-10 h-10 rounded-full object-cover object-top"
                    src={list.img ? list.img :groupImage}
                    alt=""
                />}
               {list.group_type === "announcement" && <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={list.img ? list.img :announcementImage}
                    alt=""
                />}
                {list.group_type === "one-to-one" &&<img
                    className="w-10 h-10 rounded-full object-cover"
                    src={otherParticipant?.img ? otherParticipant?.img : userImage}
                    alt=""
                />}

                <div className="">
                    <p className="text-gray font-semibold ">{list.name ? list.name : (otherParticipant?.name?otherParticipant?.name:list.group_type)}</p>
                    <div className="flex items-center gap-2">
                        <p>{list?.received ? <IoCheckmarkDoneOutline className={`${list?.read && "text-blue"}`} /> : <IoCheckmarkOutline />}</p>
                        <p className="text-xs w-8/12  truncate">{list?.last_msg}</p>
                    </div>
                </div>
            </div>
            <div className="text-sm">
                <p className={`text-end ${(counter !== 0 && counter !== null && counter !== undefined) && "font-semibold text-teal-green"}`}>
                    {formattedDate}
                </p>
                <div className="flex items-center gap-2 justify-end">
                    {list?.chat_index_status === "archived" && <><CiVolumeMute className="text-slate" />
                        <p className="text-xs bg-soft-gray text-slate font-semibold px-1 rounded-sm">Archived</p></>}
                    {(counter !== 0 && counter !== null && counter !== undefined) && <p className="text-xs text-end bg-teal-green text-white w-4 h-4 p-2 flex items-center justify-center rounded-full">{counter}</p>}
                </div>
            </div>
        </NavLink>
    );
};

export default ChatList;
