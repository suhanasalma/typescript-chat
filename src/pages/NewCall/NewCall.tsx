


import React, { useEffect, useState } from 'react';
import { useGetWhatsAppUsersQuery } from '../../StateManagement/services/usersApi';
import { useGetChatChannelUsersQuery, } from '../../StateManagement/services/chatApi';
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import userImage from '../../assests/user/not-available-user.png'
import { useDispatch, useSelector } from 'react-redux';
import { IoCheckmarkOutline, } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { toast } from 'react-toastify';
import { TiDelete } from "react-icons/ti";
import { addUserToCreateGroup ,removeUserFromGroupList} from '../../StateManagement/slices/userSlice';
import { GroupMemberInterface } from '../../Interfaces/Interfaces';


interface Call {
    // showNewGroup: boolean
    setStartChat:React.Dispatch<React.SetStateAction<boolean>>;
    setShowNewGroup:React.Dispatch<React.SetStateAction<boolean>>;
    openCreateNewGroup:()=>void;
}


const NewCall = ({  openCreateNewGroup,setStartChat, setShowNewGroup }: Call) => {
    const dispatch = useDispatch();
    const auth = useSelector((state: any) => state?.auth);
    const groupMembers = useSelector((state: any) => state?.user?.user);
    let activeUser = auth.user;
    const { data, error, isLoading } = useGetChatChannelUsersQuery({ group_type: "one-to-one" });
    const { data: users, error: usersError } = useGetWhatsAppUsersQuery();
    const channels = data?.channels.map((user: any) => user.participants).flat().filter((user: any) => user.email !== activeUser.email);
    let totalUser = channels?.length + users?.length ;

    const addMemberForGroups = async (member: GroupMemberInterface) => {
        dispatch(addUserToCreateGroup(member));

    };

    const removeAddedUser = async (member: GroupMemberInterface) => {
        dispatch( removeUserFromGroupList(member) );
    };

    const goToNextPage = async () => {
        if (groupMembers.length === 0) toast("Atleast 1 contact must be selected");
        else openCreateNewGroup();
    };

    return (
        <div className='w-96 rounded-lg max-h-[35rem] overflow-auto fixed right-0 bottom-5 left-5  bg-white shadow-2xl p-5'>
            <section className='flex justify-between bg-slate text-white text-xs p-2 rounded-md' >
                <div className='flex items-center gap-5 '>
                    <IoMdArrowBack onClick={()=>{setStartChat?.(true)
                    setShowNewGroup(false)}} className='text-lg' />
                    <div>
                        <p>New group</p>
                        {groupMembers.length === 0 ? 
                        <p>Add members</p> :
                        <p>{groupMembers.length} of {totalUser} selected</p>}
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <FaSearch />
                </div>
            </section>
            {groupMembers.length > 0 &&
                <div className='flex items-center gap-5 my-5 overflow-scroll'>
                    {
                        groupMembers.map((user: GroupMemberInterface) => <div key={user._id} className='flex flex-col justify-center items-center '>
                            <div className='w-10 h-10 rounded-full relative'>

                                <img className='w-full h-full object-cover object-top rounded-full' src={user.img ? user.img : userImage} alt="" />
                                <button onClick={()=>removeAddedUser(user)} className='absolute top-5 left-7 text-gray bg-slate text-xl rounded-full flex items-center justify-center'><TiDelete /></button>
                            </div>

                            <p className='font-medium text-xs'>{user.name.length > 7 ? user.name.slice(0, 5) + "..." : user.name}</p>
                        </div>)
                    }

                </div>
            }
            <div className='my-5'>
                <p className='text-slate text-sm font-semibold'>Connections on Communicator</p>
                <article className='space-y-5'>
                    {
                        channels?.map((list: GroupMemberInterface) => <div key={list._id} onClick={() => addMemberForGroups(list)} className={` flex items-center gap-5 cursor-pointer p-2 hover:bg-light-gray rounded-md`}>
                            <div className='relative'>
                                <img className='w-10 h-10 object-cover object-top rounded-full' src={list.img ? list.img : userImage} alt="" />
                                {groupMembers.includes(list) && <button className='absolute top-5 left-7 bg-teal-green text-soft-black text-xs w-4 h-4  rounded-full flex items-center justify-center'><IoCheckmarkOutline /></button>}
                            </div>
                            <div>
                                <p className='font-semibold'>{list.name}</p>
                                <p className='text-slate text-sm'>{list.status}</p>
                            </div>
                        </div>)
                    }

                </article>
            </div>
            <div>
                <p className='text-slate text-sm font-semibold'>Contacts on Communicator</p>
                <article className='space-y-5'>
                    {
                        users?.map((list: any) => <div key={list?._id} onClick={() => addMemberForGroups(list)} className={`flex items-center gap-5 cursor-pointer p-2 hover:bg-light-gray rounded-md`}>
                            <div className='relative'>
                                <img className='w-10 h-10 object-cover object-top rounded-full' src={list.img ? list.img : userImage} alt="" />
                                {groupMembers.includes(list) && <button className='absolute top-5 left-7 bg-teal-green text-soft-black text-xs w-4 h-4  rounded-full flex items-center justify-center'><IoCheckmarkOutline /></button>}
                            </div>

                            <div>
                                <p className='font-semibold'>{list.name}</p>
                                <p className='text-slate text-sm'>{list.status}</p>
                            </div>
                        </div>)
                    }

                </article>
            </div>
            
            <div onClick={goToNextPage} className={`bg-teal-green fixed bottom-5 left-[370px] p-2 rounded-lg cursor-pointer "z-10"`}>
                <FaArrowRight />
            </div>
            
        </div>
    );
};

export default NewCall;