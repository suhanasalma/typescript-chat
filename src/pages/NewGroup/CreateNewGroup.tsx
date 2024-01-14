import React, { useState } from 'react';
import { useGetWhatsAppUsersQuery } from '../../StateManagement/services/usersApi';
import { useGetChatChannelUsersQuery, } from '../../StateManagement/services/chatApi';
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import userImage from '../../assests/user/not-available-user.png'
import { useSelector } from 'react-redux';
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { toast } from 'react-toastify';
import { TiDelete } from "react-icons/ti";
import { FaCamera, FaSmile } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";

const CreateNewGroup = () => {
    return (
        <div className='w-96 rounded-lg max-h-[35rem] overflow-auto fixed right-0 bottom-5 left-5  bg-white shadow-2xl p-5'>
            <section className='space-y-5'>
                <div className='flex items-center gap-5'>
                    <IoMdArrowBack className='text-lg' />
                    <div>
                        <p>New group</p>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <div className='bg-slate text-white w-10 h-10 rounded-full flex justify-center items-center'>
                        <FaCamera />
                    </div>
                    <input type="text" name="" id="" className='border-b-2 border-teal-green flex-1' placeholder='Group name' />
                    <FaSmile className='text-slate' />
                </div>

                <div className='flex justify-between items-center '>
                    <div>
                        <p className='font-semibold text-sm'>Disappearing messages</p>
                        <p className='text-xs text-slate'>Off</p>
                    </div>
                    <BsClockHistory className='text-md text-slate'/>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-sm'>Group permissions</p>
                    <IoMdSettings className='text-lg text-slate' />
                </div>
                <div>
                    <p className='font-semibold text-sm'>Members:1</p>
                    <p>Off</p>
                </div>

            </section>

            <div className={`bg-teal-green fixed bottom-5 left-[370px] p-2 rounded-lg cursor-pointer "z-10"`}>
                <FaCheck />
            </div>
        </div>
    );
};

export default CreateNewGroup;