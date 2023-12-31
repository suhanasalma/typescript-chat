import React from 'react';
import { Link } from 'react-router-dom';
import { CallIndexList } from '../../Interfaces/Interfaces';
import { IoCallOutline } from "react-icons/io5";
import { MdPhoneMissed } from "react-icons/md";


const CallList: React.FC<{ list: CallIndexList }> = ({list}) => {
    const timeOptions = { hour: "numeric", minute: "numeric" };

  return (
    <Link to={`/chat/${list.id}`} className="mr-5 flex justify-between items-start shadow-sm py-2 cursor-pointer text-slate " key={list.id}>
      <div className="flex gap-3">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={list.img}
          alt=""
        />
        <div>
          <p className="text-gray font-semibold">{list.name}</p>
          <p className={`flex items-center gap-2 text-sm ${list.call_type ==="Missed"?"text-red font-semibold":""}`}>{list.call_type ==="Missed"?<MdPhoneMissed/>:<IoCallOutline/>}{list.call_type}{list.missed_call_counter>1 && <p className="text-end">({list.missed_call_counter})</p>}</p>
        </div>
      </div>
      <div className="text-sm">
        <p >
          {list.last_call_time.toLocaleTimeString(
            undefined,
            timeOptions as Intl.DateTimeFormatOptions
          )}
        </p>

      </div>
    </Link>
  );
};

export default CallList;