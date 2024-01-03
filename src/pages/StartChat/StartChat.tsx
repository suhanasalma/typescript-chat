import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch, FaUserFriends, FaUserPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { UsersOnWhatsApp } from '../../Interfaces/Interfaces';
import { MdQrCodeScanner } from "react-icons/md";
import { Link } from 'react-router-dom';


const StartChat = () => {
    const [usersLists, setUsersLists] = useState<UsersOnWhatsApp[]>([
        {
            id: 1,
            name: "Suhana",
            img: "https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg",
        },
        {
            id: 2,
            name: "Shakil",
            img: "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
        },

        {
            id: 3,
            name: "Salma",
            img: "https://img.freepik.com/free-vector/hand-drawn-side-showProfile-cartoon-illustration_23-2150503834.jpg",
            status: "Hey there! I am using Communicator"
        },
        {
            id: 4,
            name: "Salman",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNUq3JK9oohRMc5rue7sMjfwS2Mtn-DACvQ&usqp=CAU",
            status: "regular"
        },
        {
            id: 5,
            name: "Salmani",
            img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
            status: "Hey there! I am using Communicator"
        },
        {
            id: 1,
            name: "Suhana",
            img: "https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg",
        },
        {
            id: 2,
            name: "Shakil",
            img: "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
        },

        {
            id: 3,
            name: "Salma",
            img: "https://img.freepik.com/free-vector/hand-drawn-side-showProfile-cartoon-illustration_23-2150503834.jpg",
            status: "Hey there! I am using Communicator"
        },
        {
            id: 4,
            name: "Salman",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNUq3JK9oohRMc5rue7sMjfwS2Mtn-DACvQ&usqp=CAU",
            status: "regular"
        },
        {
            id: 5,
            name: "Salmani",
            img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
            status: "Hey there! I am using Communicator"
        },
        {
            id: 1,
            name: "Suhana",
            img: "https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg",
        },
        {
            id: 2,
            name: "Shakil",
            img: "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
        },

        {
            id: 3,
            name: "Salma",
            img: "https://img.freepik.com/free-vector/hand-drawn-side-showProfile-cartoon-illustration_23-2150503834.jpg",
            status: "Hey there! I am using Communicator"
        },
        {
            id: 4,
            name: "Salman",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNUq3JK9oohRMc5rue7sMjfwS2Mtn-DACvQ&usqp=CAU",
            status: "regular"
        },
        {
            id: 5,
            name: "Salmani",
            img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
            status: "Hey there! I am using Communicator"
        },
    ])
    return (
        <div className={`w-96 rounded-lg max-h-[35rem] overflow-auto fixed right-0 bottom-5 left-5  bg-white shadow-2xl p-5`}>

            <section className='flex justify-between bg-slate text-white text-xs p-2 rounded-md' >
                <div className='flex items-center gap-5 '>
                    <IoMdArrowBack className='text-lg' />
                    <div>
                        <p>Select contact</p>
                        <p>48 contacts</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <FaSearch />
                    <BsThreeDotsVertical />
                </div>
            </section>
            <section className='space-y-5 my-5'>
                <div className='flex items-center gap-5  p-2 font-semibold hover:bg-light-gray rounded-md cursor-pointer'>
                    <div className='bg-teal-green p-2 rounded-full text-white'>
                        <FaUserFriends />
                    </div>
                    <p>New group</p>
                </div>
                <div className='flex items-center justify-between p-2 font-semibold hover:bg-light-gray rounded-md cursor-pointer'>
                    <div className=' flex items-center gap-5 '>
                        <div className='bg-teal-green p-2 rounded-full text-white'>
                            <FaUserPlus />
                        </div>

                        <p>New contact</p>
                    </div>
                    <MdQrCodeScanner />
                </div> 
                <div className='flex items-center gap-5  p-2 font-semibold hover:bg-light-gray rounded-md cursor-pointer'>

                    <div className='bg-teal-green p-2 rounded-full text-white'>
                        <HiUserGroup />
                    </div>
                    <p>New community</p>
                </div>
            </section>
            <section className='space-y-5'>
                <p className='text-slate text-sm font-semibold'>Contacts on Communicator</p>
                <article className='space-y-5'>
                    {
                        usersLists.map((list, i) => <Link to={`chat/${list.id}`} key={i} className='flex items-center gap-5 cursor-pointer p-2 hover:bg-light-gray rounded-md'>
                            <img className='w-10 h-10 rounded-full' src={list.img} alt="" />
                            <div>
                                <p className='font-semibold'>{list.name}</p>
                                <p className='text-slate text-sm'>{list.status}</p>
                            </div>
                        </Link>)
                    }

                </article>
            </section>
        </div>
    );
};

export default StartChat;