import React, { useEffect, useState } from "react";
import ChatSearch from "../../components/ChatSearch/ChatSearch";
import CreateGroups from "../../components/CreateGroups/CreateGroups";
import ChatFilters from "../../components/ChatFilters/ChatFilters";
import ChatLists from "../../components/ChatLists/ChatLists";
import { ChatIndexList } from "../../Interfaces/Interfaces";

const ChatUsers: React.FC = () => {
   
  const [messageLists, setMessageLists] = useState<ChatIndexList[]>([
    {
        id: 1,
        name: "Suhana",
        img: "https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg",
        last_msg_time: new Date(),
        last_msg: "hi how are you",
        unread_msg_counter: 1,
        received: true,
        read: true,
        msg_type:"text",
        msg_status:"regular",
        email:"shakil@gmail.com"
    },
    {
        id: 2,
        name: "Shakil",
        img: "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
        last_msg_time: new Date(),
        last_msg: "Ok",
        unread_msg_counter: 0,
        received: false,
        read: false,
        msg_type:"text",
        msg_status:"regular",
        email:"shakil@gmail.com"
    },

    {
        id: 3,
        name: "Salma",
        img: "https://img.freepik.com/free-vector/hand-drawn-side-showProfile-cartoon-illustration_23-2150503834.jpg",
        last_msg_time: new Date(),
        last_msg: "gone like",
        unread_msg_counter: 10,
        received: true,
        read: false,
        msg_type:"text",
        msg_status:"regular",
        email:"shakil@gmail.com"
    },
    {
        id: 4,
        name: "Salman",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNUq3JK9oohRMc5rue7sMjfwS2Mtn-DACvQ&usqp=CAU",
        last_msg_time: new Date(),
        last_msg: "gone like",
        unread_msg_counter: 10,
        received: true,
        read: false,
        msg_type:"text",
        msg_status:"regular",
        email:"shakil@gmail.com"
    },
])
  return (
    <div className="w-full h-full">
       <div className="">
            <div className="flex justify-between ">
                    <p className="text-black font-bold text-xl">Chats</p>
                    <div className="flex justify-between items-center gap-10">
                        <CreateGroups/>
                        <ChatFilters />
                    </div>
            </div>
        <ChatSearch/>
       </div>
        <ChatLists messageLists={messageLists}/>
    </div>
  );
};

export default ChatUsers;
