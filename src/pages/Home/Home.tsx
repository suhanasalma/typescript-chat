
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
const Home: React.FC = () => {

  return (
    // <div className="h-screen flex flex-1">
    //   <div className="px-5 h-screen flex flex-col left-side w-80 border-r-2 border-r-soft-gray">
    //     <div className="header p-2 ">
    //       <div className="flex justify-between">
    //         <p className="text-black font-bold text-xl">Chats</p>
    //         <div className="flex justify-between items-center gap-10">
    //           <CreateGroups />
    //           <ChatFilters />
    //         </div>
    //       </div>
    //       <ChatSearch />
    //     </div>
    //     <div className="flex-grow p-2 relative overflow-auto pb-10 bg-white ">
    //       <ChatLists chatLists={chatLists} />
    //     </div>
    //   </div>

    //   <div className="flex-1 w-full  h-full flex flex-col">
    //     <ChatBoxHeader header={data} />
    //     <Chatbox messages={messages} />
    //     <ChatboxFooter />
    //   </div>

    //   <div
    //     className={`bg-teal-green fixed bottom-5 left-[320px] p-2 rounded-lg cursor-pointer `}
    //   >
    //     <MdMessage />
    //   </div>
    // </div>
    <div className="flex-1 w-full  h-full flex flex-col flex-grow items-center justify-center">
        <div className="flex flex-col justify-center items-center">
            <FaWhatsapp className="text-7xl text-soft-gray" />
            <p className="text-lg font-bold">Communicator for Windows</p>
        </div>
    </div>
  );
};

export default Home;
