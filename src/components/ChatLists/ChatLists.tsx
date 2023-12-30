import React, { useState } from 'react';
import ChatList from './ChatList';
import { ChatIndexList } from '../../Interfaces/Interfaces';
import './chatlist.css'

const ChatLists: React.FC  = () => {
    const [messageLists,setMessageLists] = useState<ChatIndexList[]>([
        {
            id:1,
            name:"Suhana",
            img:"https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg",
            last_msg_time:new Date(),
            last_msg:"hi how are you",
            unread_msg_counter:1,
            received:true,
            read:true
        },
        {
            id:2,
            name:"Shakil",
            img:"https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
            last_msg_time:new Date(),
            last_msg:"Ok",
            unread_msg_counter:0,
            received:false,
            read:false
        },
        
        {
            id:3,
            name:"Salma",
            img:"https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503834.jpg",
            last_msg_time:new Date(),
            last_msg:"gone like",
            unread_msg_counter:10,
            received:true,
            read:false
        },
        {
            id:4,
            name:"Salman",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNUq3JK9oohRMc5rue7sMjfwS2Mtn-DACvQ&usqp=CAU",
            last_msg_time:new Date(),
            last_msg:"gone like",
            unread_msg_counter:10,
            received:true,
            read:false
        },
    ])
    
    return (
        <div className='space-y-5 mt-5 h-[85vh] overflow-auto'>
            {
                messageLists?.map(list=><ChatList list={list}/>)
            }
        </div>
    );
};

export default ChatLists;