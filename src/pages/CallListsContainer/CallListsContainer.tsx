import React from 'react';
import ChatSearch from '../../components/Chat/ChatSearch/ChatSearch';
import MakeCall from '../../components/Call/MakeCall/MakeCall';
import { MdInsertLink ,MdAddCall} from "react-icons/md";
import CallLists from '../../components/Call/CallLists/CallLists';

const CallListsContainer = () => {
    return (
        <div className='w-full h-full'>
            <div className="">
                <div className="flex justify-between items-center">
                    <p className="text-black font-bold text-xl">Calls</p>
                    <MakeCall />
                </div>
                <ChatSearch />
            </div>
            <div className='flex justify-start items-center gap-5 text-sm my-5  px-2'>
                <div className='border-2 border-soft-gray w-10 h-10 rounded-full flex justify-center items-center'>
                    <MdInsertLink className='text-lg' />
                </div>
                <div>
                    <p className='text-gray font-semibold'>Create call link</p>
                    <p className='text-slate'>share a link for your communicator call</p>
                </div>
            </div>
            <CallLists />
            <div  className={`bg-teal-green fixed bottom-5 left-[370px] p-2 rounded-lg cursor-pointer `}>
                <MdAddCall />
            </div>
        </div>
    );
};

export default CallListsContainer;