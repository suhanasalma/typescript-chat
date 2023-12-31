import React from 'react';
import ChatSearch from '../../components/ChatSearch/ChatSearch';
import MakeCall from '../../components/MakeCall/MakeCall';
import { MdInsertLink } from "react-icons/md";
import CallLists from '../../components/CallLists/CallLists';

const CallListsContainer = () => {
    return (
        <div className='w-full h-full'>
            <div className="px-4">
                <div className="flex justify-between items-center">
                    <p className="text-black font-bold text-xl">Calls</p>
                    <MakeCall />
                </div>
                <ChatSearch />
            </div>
            <div className='flex justify-start items-center gap-5 text-xs my-5'>
                <div className='border-2 border-soft-gray w-10 h-10 rounded-full flex justify-center items-center'>
                <MdInsertLink className='text-lg'/>
                </div>
                <div>
                <p className='font-bold'>Create call link</p>
                <p className='text-slate'>share a link for your communicator call</p>
                </div>
            </div>
            <CallLists/>
        </div>
    );
};

export default CallListsContainer;