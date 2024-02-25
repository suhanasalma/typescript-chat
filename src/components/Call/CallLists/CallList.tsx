import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { CallIndexList } from '../../../Interfaces/Interfaces';
import { IoCallOutline } from "react-icons/io5";
import { MdPhoneMissed } from "react-icons/md";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { calculateDisplayTime } from '../../../StateManagement/slices/timeSlice';
import { RootState } from '../../../StateManagement/store/store';

const CallList: React.FC<{ list: CallIndexList }> = ({ list }) => {
    const dispatch = useDispatch();
    const displayTime = useSelector((state: RootState) => state?.time[list._id]);
    useEffect(() => {
        dispatch(calculateDisplayTime({ id: list._id, timestamp: list.last_call_time }));
    }, [dispatch, list._id, list.last_call_time]);
    return (
        <NavLink
            className={({ isActive }) =>
                ` flex justify-between items-start shadow py-3 px-2  cursor-pointer text-slate hover:bg-light-gray rounded-md  ${isActive
                    ? "bg-soft-gray"
                    : ""
                }`
            }
            to={`/call/${list.email}`}
            key={list._id}>
            <div className="flex gap-3">
                <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={list.img}
                    alt=""
                />
                <div>
                    <p className="text-gray font-semibold">{list.name}</p>
                    <div className={`flex items-center gap-2 text-sm ${list?.call_type === "Missed" ? "text-red font-semibold" : ""}`}>{list?.call_type === "Missed" ? <MdPhoneMissed /> : <IoCallOutline />}{list.call_type}{(list?.missed_call_counter !== undefined && list.missed_call_counter !== 0) && <p className="text-end">({list?.missed_call_counter})</p>}</div>
                </div>
            </div>
            <div className="text-sm">
                <p >
                    {displayTime}
                </p>

            </div>
        </NavLink>
    );
};

export default CallList;