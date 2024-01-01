import React, { useState } from "react";
import ChatSearch from "../../components/ChatSearch/ChatSearch";
import ChatLists from "../../components/ChatLists/ChatLists";
import { ChatIndexList } from "../../Interfaces/Interfaces";

const ArchivedList: React.FC = () => {
    const [messageLists, setMessageLists] = useState<ChatIndexList[]>([
        {
            id: 1,
            name: "Suhana",
            img: "https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg",
            last_msg_time: new Date(),
            last_msg: "hi how are youfdfdfdfdfdfdfdf",
            unread_msg_counter: 10,
            received: true,
            read: true,
            msg_type:"text",
            msg_status:"archived"
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
            msg_status:"archived"
        },
    ])
    return (
        <div className="w-full h-full">
            <div className="">
                <p className="text-black font-bold text-xl">Archived</p>

                <ChatSearch />
            </div>
            <ChatLists messageLists={messageLists}/>
        </div>
    );
};

export default ArchivedList;