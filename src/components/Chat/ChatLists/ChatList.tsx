import React, { useEffect } from "react";
import { ChatIndexList } from "../../../Interfaces/Interfaces";
import { IoCheckmarkOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { CiVolumeMute } from "react-icons/ci";
import userImage from '../../../assests/user/not-available-user.png'
import groupImage from '../../../assests/group/group.png'
import announcementImage from '../../../assests/group/announcement.png'
import { useDispatch, useSelector } from "react-redux";
import { calculateDisplayTime } from "../../../StateManagement/slices/timeSlice";
import moment from "moment";
const ChatList: React.FC<{ list: ChatIndexList }> = ({ list }) => {
    const auth = useSelector((state: any) => state?.auth)
    const dispatch = useDispatch();
    const formattedDate = useSelector((state: any) => state?.time[list._id]);
    useEffect(() => {
        dispatch(calculateDisplayTime({ id: list._id, timestamp: list.timestamp }));
    }, [dispatch, list._id, list.timestamp]);
    let user = auth.user;
    let oppositeUser = null;
    let nameToShow = list?.name ? list?.name : list?.group_type
    let activeParticipant = list?.participants && list?.participants.find(participant => participant?.user_id === user?._id)

    if (list.group_type === "one-to-one" && list?.participants) {
        oppositeUser = list?.participants?.find(participant => participant?.user_id !== user?._id);
        nameToShow = oppositeUser?.name
    };
    const counter = activeParticipant?.counter;
    return (
        <NavLink
            className={({ isActive }) =>
                `flex justify-between items-start shadow py-3 px-2 cursor-pointer text-slate hover:bg-light-gray rounded-md ${isActive ? "bg-soft-gray" : ""
                }`
            }

            to={
                `/chat/${list.channel}`}

            // to={
            //     list.group_type === "one-to-one"
            //         ? `/chat/${otherParticipant?.email}/channel_id/${list._id}`
            //         : list.group_type === "group"
            //             ? `/chat/group/${list._id}`
            //             : `/chat/announcement/${list._id}`
            // }
            key={list._id}
        >
            <div className="flex gap-3">
                {list.group_type === "group" && (
                    <img
                        className="w-10 h-10 rounded-full object-cover object-top"
                        src={list.img ? list.img : groupImage}
                        alt=""
                    />
                )}
                {list.group_type === "announcement" && (
                    <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={list.img ? list.img : announcementImage}
                        alt=""
                    />
                )}
                {list.group_type === "one-to-one" && (
                    <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={oppositeUser?.img ? oppositeUser?.img : userImage}
                        alt=""
                    />
                )}

                <div className="">
                    <p className="text-gray font-semibold ">
                        {/* {list?.name
                            ? list?.name?.length > 12
                                ? list?.name.slice(0, 12) + "..."
                                : list?.name
                            : oppositeUser?.name
                                ? oppositeUser?.name
                                : list?.group_type} */}
                        {
                            nameToShow && nameToShow?.length > 12 ? nameToShow.slice(0, 12) + "..." : nameToShow
                        }
                    </p>
                    <div className="flex items-center gap-2">
                        <p>
                            {list?.received ? (
                                <IoCheckmarkDoneOutline
                                    className={`font-bold ${list?.read && "text-blue "}`}
                                />
                            ) : (
                                <IoCheckmarkOutline />
                            )}
                        </p>
                        <p className="text-xs w-8/12 truncate">
                            {list?.last_msg?.length && list?.last_msg?.length > 20
                                ? list?.last_msg.slice(0, 20) + "..."
                                : list?.last_msg}{" "}
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-sm">
                <p
                    className={`text-end ${counter !== 0 &&
                        counter !== null &&
                        counter !== undefined &&
                        "font-semibold text-teal-green"
                        }`}
                >
                    {formattedDate}
                </p>
                <div className="flex items-center gap-2 justify-end">
                    {list?.chat_index_status === "archived" && (
                        <>
                            <CiVolumeMute className="text-slate" />
                            <p className="text-xs bg-soft-gray text-slate font-semibold px-1 rounded-sm">
                                Archived
                            </p>
                        </>
                    )}
                    {counter !== 0 && counter !== null && counter !== undefined && (
                        <p className="text-xs text-end bg-teal-green text-white w-4 h-4 p-2 flex items-center justify-center rounded-full">
                            {counter}
                        </p>
                    )}
                </div>
            </div>
        </NavLink>
    );
};

export default ChatList;
