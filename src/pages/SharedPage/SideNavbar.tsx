import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { BsTelephone, BsStar, BsArchive } from "react-icons/bs";
import { PiNumberCircleZeroThin, PiChatCircleTextLight } from "react-icons/pi";
import user from '../../assests/user/user_avatar.png'


interface toggle {
    openChatList: () => void;
    openCallList: () => void;
    openStatus: () => void;
    openStaredMessages: () => void;
    openArchivedList: () => void;
    openSettings: () => void;
    openProfile: () => void;
    showChatUserList: boolean;
    showCallList: boolean;
    showStatus: boolean;
    showStartedMessages: boolean;
    showArchivedList: boolean;
    showSettings: boolean;
    showProfile: boolean;
}


const SideNavbar = ({ openChatList, openCallList, openStatus, openStaredMessages, openArchivedList, openSettings, openProfile, showChatUserList, showCallList, showStatus, showStartedMessages, showArchivedList, showSettings, showProfile }: toggle) => {
    return (
        <div className='bg-light-gray'>
            <div className='fixed top-0 left-0 w-screen h-10 bg-light-gray border-b-2 border-b-soft-gray z-10'>
            </div>
            <div className='pt-10 pb-5 text-gray text-xl flex flex-col justify-between items-center h-screen overflow-auto gap-5 px-2 fixed bg-light-gray'>
                <div className='space-y-5 w-12'>
                    <div className={`w-full py-2 rounded-md ${showChatUserList && "bg-soft-gray"} hover:bg-soft-gray cursor-pointer flex justify-center items-center`}>
                        <PiChatCircleTextLight onClick={openChatList} />
                    </div>
                    <div className={`w-full py-2 rounded-md flex justify-center items-center ${showCallList && "bg-soft-gray"} hover:bg-soft-gray cursor-pointer`}>
                        <BsTelephone onClick={openCallList} />
                    </div>
                    <div className={`w-full py-2 rounded-md flex justify-center items-center ${showStatus && "bg-soft-gray"} hover:bg-soft-gray cursor-pointer`}>
                        <PiNumberCircleZeroThin onClick={openStatus} />
                    </div>
                </div>
                <div className='space-y-5 grid place-items-center'>
                    <div className={`w-full py-2 rounded-md flex justify-center items-center ${showStartedMessages && "bg-soft-gray"} hover:bg-soft-gray cursor-pointer`}>
                        <BsStar onClick={openStaredMessages} />
                    </div>
                    <div className={`w-full py-2 rounded-md flex justify-center items-center ${showArchivedList && "bg-soft-gray"} hover:bg-soft-gray cursor-pointer`}>
                        <BsArchive onClick={openArchivedList} />
                    </div>

                    <hr className='border-soft-gray w-full' />
                    <div className={`w-full py-2 rounded-md flex justify-center items-center ${showSettings && "bg-soft-gray"} hover:bg-soft-gray cursor-pointer`}>
                        <IoSettingsOutline onClick={openSettings} />
                    </div>

                    <img onClick={openProfile} className='h-10 w-10 rounded-full cursor-pointer hover:bg-soft-gray ' src={user} alt="user" />

                </div>
            </div>
        </div>
    );
};

export default SideNavbar;