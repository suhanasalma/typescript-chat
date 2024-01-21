import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { CallIndexList } from '../../../Interfaces/Interfaces';
import { IoCallOutline } from "react-icons/io5";
import { MdPhoneMissed } from "react-icons/md";


const CallList: React.FC<{ list: CallIndexList }> = ({ list }) => {

    const timeOptions = { hour: "numeric", minute: "numeric" };

    return (
        <NavLink
            className={({ isActive }) =>
                ` flex justify-between items-start shadow-sm cursor-pointer text-slate p-2 hover:bg-light-gray rounded-md  ${isActive
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
                    {list?.last_call_time?.toLocaleTimeString(
                        undefined,
                        timeOptions as Intl.DateTimeFormatOptions
                    )}
                </p>

            </div>
        </NavLink>
    );
};

export default CallList;