import React, { useState } from 'react';
import ChatSearch from '../../components/Chat/ChatSearch/ChatSearch';
import MakeCall from '../../components/Call/MakeCall/MakeCall';
import { MdInsertLink, MdAddCall } from "react-icons/md";
import CallLists from '../../components/Call/CallLists/CallLists';
import Loader from '../../components/Loader/Loader';
import ChatFilters from '../../components/Chat/ChatFilters/ChatFilters';
import { MdPhoneMissed } from "react-icons/md";
import { FiPhoneIncoming, FiPhoneOutgoing  } from "react-icons/fi";

interface CallListsContainerProps {
    openNewCall:()=>void
}


const CallListsContainer = ({openNewCall}:CallListsContainerProps) => {
    const [isLoading, setIsLoading] = useState(false);    
    const [filterText,setFilterText] = useState('')

    const filterMenu = [
        {
            id: "1",
            name: "Missed",
            value: "Unread",
            icon: MdPhoneMissed
        },
        {
            id: "2",
            name: "Incoming",
            value: "Unread",
            icon: FiPhoneIncoming
        },
        {
            id: "3",
            name: "Outgoing",
            value: "Unread",
            icon: FiPhoneOutgoing
        },
    ];
    return (
        <div className="px-2 h-screen flex flex-col left-side w-80 border-r-2 border-r-soft-gray">
            <div className="header p-2 ">
                <div className="flex justify-between items-center">
                    <p className="text-black font-bold text-xl">Calls</p>
                    <ChatFilters setFilterText={setFilterText} filterMenu={filterMenu} title="Filter calls by"/>
                </div>
                <ChatSearch placeholder="Search or start a new call"/>
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
                {isLoading ?
                    <div className="flex items-center justify-center"><Loader /></div> :
                    <CallLists />
                }
            </div>
            <div onClick={openNewCall}
                className={`bg-teal-green fixed bottom-5 left-[320px] p-2 rounded-lg cursor-pointer `}
            >
                <MdAddCall />
            </div>
        </div>
    );
};

export default CallListsContainer;
