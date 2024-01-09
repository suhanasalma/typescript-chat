import React, { useState } from 'react';
import { CallIndexList } from '../../Interfaces/Interfaces';
import CallList from './CallList';

const CallLists = () => {
    const [callLists, setCallLists] = useState<CallIndexList[]>([
        {
            _id: 1,
            name: "Suhana",
            img: "https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg",
            last_call_time: new Date(),
            missed_call_counter: 0,
            call_type:"Outgoing",
            email:"shakil@gmail.com"
        },
        {
            _id: 2,
            name: "Shakil",
            img: "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
            last_call_time: new Date(),
            missed_call_counter: 0,
            call_type:"Outgoing",
            talktime:30,
            email:"shakil@gmail.com"
        },

        {
            _id: 3,
            name: "Salma",
            img: "https://img.freepik.com/free-vector/hand-drawn-s_ide-showProfile-cartoon-illustration_23-2150503834.jpg",
            last_call_time: new Date(),
            missed_call_counter: 0,
            call_type:"Incoming",
            email:"shakil@gmail.com"
        },
        {
            _id: 4,
            name: "Salman",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNUq3JK9oohRMc5rue7sMjfwS2Mtn-DACvQ&usqp=CAU",
            last_call_time: new Date(),
            missed_call_counter: 10,
            call_type:"Missed",
            email:"shakil@gmail.com"
        },
    ])
    return (
        <div className='space-y-5 mt-5 h-[85vh] overflow-auto'>
            {
                callLists?.map((list,i) => <CallList key={i} list={list} />)
            }
        </div>
    );
};

export default CallLists;