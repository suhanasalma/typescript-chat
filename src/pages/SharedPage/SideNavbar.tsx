import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { BsTelephone, BsStar, BsArchive } from "react-icons/bs";
import { PiNumberCircleZeroThin, PiChatCircleTextLight } from "react-icons/pi";
import user from '../../assests/user/user_avatar.png'


const SideNavbar = () => {
    return (
        <div className='bg-gray-100'>
            <div className='fixed top-0 left-12 w-screen h-10 bg-gray-100 border-b-2'>
            </div>
            <div className='pt-10 text-gray-600 text-xl flex flex-col justify-between items-center h-screen gap-5 px-2 fixed bg-gray-100 border-r-2 shadow-lg'>
                <div className='space-y-5'>
                    <PiChatCircleTextLight className='cursor-pointer ' />
                    <BsTelephone className='cursor-pointer' />
                    <PiNumberCircleZeroThin className='cursor-pointer' />
                </div>
                <div className='space-y-5 grid place-items-center'>
                    <BsStar className='cursor-pointer' />
                    <BsArchive className='cursor-pointer' />
                    <hr className='border-gray-300 w-full'/>
                    <IoSettingsOutline className='cursor-pointer' />
                    <img className='h-10 w-10 rounded-full' src={user} alt="user" />
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;