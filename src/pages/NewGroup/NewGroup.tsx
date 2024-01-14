import React, { useState } from 'react';
import { useGetWhatsAppUsersQuery } from '../../StateManagement/services/usersApi';
import { useGetChatChannelUsersQuery, } from '../../StateManagement/services/chatApi';
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import userImage from '../../assests/user/not-available-user.png'
import { useSelector } from 'react-redux';
import { IoCheckmarkOutline, } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { toast } from 'react-toastify';
import { TiDelete } from "react-icons/ti";


interface MemberInterface {
    email: string
    img: string
    name: string
    status: string
    user_id : string
    _id: string
}

interface Group {
    showNewGroup: boolean
    // setShowNewGroup?:React.Dispatch<React.SetStateAction<boolean>>;
    // setShowCrateGroup?:React.Dispatch<React.SetStateAction<boolean>>;
    openCreateNewGroup:()=>void


}


const NewGroup = ({ showNewGroup, openCreateNewGroup}: Group) => {
    const [addedMember, setAddedMember] = useState<MemberInterface[]>([])
    // const [showCrateGroup, setShowCrateGroup] = useState(false)
    const auth = useSelector((state: any) => state?.auth)
    let activeUser = auth.user;
    const { data, error, isLoading } = useGetChatChannelUsersQuery({ group_type: "one-to-one" })
    const { data: users, error: usersError } = useGetWhatsAppUsersQuery();
    const channels = data?.channels.map((user: any) => user.participants).flat().filter((user: any) => user.email !== activeUser.email);

    let totalUser = channels?.length + users?.length


    const addMemberForGroups = async (member: MemberInterface) => {

        if (addedMember.includes(member)) {
            const updatedMembers = addedMember.filter(existingMember => existingMember !== member);
            setAddedMember(updatedMembers);
        } else {
            setAddedMember([...addedMember, member])
        }

    };

    const removeAddedUser = async (member: MemberInterface) => {
        const updatedMembers = addedMember.filter(existingMember => existingMember !== member);
        setAddedMember(updatedMembers);
    };

    const goToNextPage = async () => {
        if (addedMember.length === 0) toast("Atleast 1 contact must be selected")
        else {
            console.log("object");
            openCreateNewGroup();
        }

    }

    return (
        <div className='w-96 rounded-lg max-h-[35rem] overflow-auto fixed right-0 bottom-5 left-5  bg-white shadow-2xl p-5'>
            <section className='flex justify-between bg-slate text-white text-xs p-2 rounded-md' >
                <div className='flex items-center gap-5 '>
                    <IoMdArrowBack className='text-lg' />
                    <div>
                        <p>New group</p>
                        {addedMember.length === 0 ? <p>Add members</p> :
                            <p>{addedMember.length} of {totalUser} selected</p>}
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <FaSearch />
                </div>
            </section>
            {addedMember.length > 0 &&
                <div className='flex items-center gap-5 my-5 overflow-scroll'>
                    {
                        addedMember.map((user: MemberInterface) => <div className='flex flex-col justify-center items-center '>
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
                        channels?.map((list: MemberInterface) => <div onClick={() => addMemberForGroups(list)} key={list?._id} className={` flex items-center gap-5 cursor-pointer p-2 hover:bg-light-gray rounded-md`}>
                            <div className='relative'>
                                <img className='w-10 h-10 object-cover object-top rounded-full' src={list.img ? list.img : userImage} alt="" />
                                {addedMember.includes(list) && <button className='absolute top-5 left-7 bg-teal-green text-soft-black text-xs w-4 h-4  rounded-full flex items-center justify-center'><IoCheckmarkOutline /></button>}
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
                        users?.map((list: any) => <div onClick={() => addMemberForGroups(list)} key={list?._id} className={`flex items-center gap-5 cursor-pointer p-2 hover:bg-light-gray rounded-md`}>
                            <div className='relative'>
                                <img className='w-10 h-10 object-cover object-top rounded-full' src={list.img ? list.img : userImage} alt="" />
                                {addedMember.includes(list) && <button className='absolute top-5 left-7 bg-teal-green text-soft-black text-xs w-4 h-4  rounded-full flex items-center justify-center'><IoCheckmarkOutline /></button>}
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

export default NewGroup;