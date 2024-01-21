import React from 'react';
import ChatSearch from '../../components/Chat/ChatSearch/ChatSearch';
import MakeCall from '../../components/Call/MakeCall/MakeCall';
import { MdInsertLink ,MdAddCall} from "react-icons/md";
import CallLists from '../../components/Call/CallLists/CallLists';

const CallListsContainer = () => {

  return (
    <div className="px-2 h-screen flex flex-col left-side w-80 border-r-2 border-r-soft-gray">
      <div className="header p-2 ">
        <div className="flex justify-between">
          <p className="text-black font-bold text-xl">Calls</p>
          <MakeCall />
        </div>
        <ChatSearch />
      </div>
      <div className="flex justify-start items-center gap-5 text-sm px-2 my-5">
        <div className="border-2 border-soft-gray w-8 h-8 rounded-full flex justify-center items-center">
          <MdInsertLink className="text-md" />
        </div>
        <div className="">
          <p className="text-gray font-semibold">Create call link</p>
          <p className="text-slate w-full text-xs">share a link for your communicator call</p>
        </div>
      </div>
      <div className="flex-grow p-2 relative overflow-auto pb-12 bg-white ">
        <CallLists />
      </div>
      <div
        className={`bg-teal-green fixed bottom-5 left-[320px] p-2 rounded-lg cursor-pointer `}
      >
        <MdAddCall />
      </div>
    </div>
  );
};

export default CallListsContainer;
