import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { BsTelephone, BsStar, BsArchive } from "react-icons/bs";
import { PiNumberCircleZeroThin, PiChatCircleTextLight } from "react-icons/pi";
import user from '../../assests/user/user_avatar.png'


interface toggle {
    openChatList: () => void
    openCallList: () => void
    openStatus: () => void
    openStaredMessages: () => void
    openArchivedList: () => void
    openSettings: () => void
    openProfile: () => void
}


const SideNavbar = ({openChatList,openCallList,openStatus,openStaredMessages,openArchivedList,openSettings,openProfile}:toggle) => {
    return (
        <div className='bg-light-gray'>
            <div className='fixed top-0 left-12 w-screen h-10 bg-light-gray border-b-2 border-b-soft-gray'>
            </div>
            <div className='pt-10 pb-5 text-gray text-xl flex flex-col justify-between items-center h-screen overflow-auto gap-5 px-2 fixed bg-light-gray'>
                <div className='space-y-5'>
                    <PiChatCircleTextLight className='cursor-pointer' onClick={openChatList}  />
                    <BsTelephone  className='cursor-pointer' onClick={openCallList}/>
                    
                   <PiNumberCircleZeroThin  className='cursor-pointer' onClick={openStatus}/>

                </div>
                <div className='space-y-5 grid place-items-center'>
                    <BsStar  className='cursor-pointer'  onClick={openStaredMessages}/>
                    <BsArchive   className='cursor-pointer' onClick={openArchivedList}/>
                    <hr className='border-soft-gray w-full' />
                    <IoSettingsOutline  className='cursor-pointer' onClick={openSettings} />
                    <img  onClick={openProfile} className='h-10 w-10 rounded-full cursor-pointer' src={user} alt="user" />

                </div>
            </div>
        </div>
    );
};

export default SideNavbar;