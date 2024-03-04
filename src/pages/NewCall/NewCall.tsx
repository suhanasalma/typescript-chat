


import React, { useEffect, useState } from 'react';
import { useGetCommunicatorUsersQuery } from '../../StateManagement/services/usersApi';
import { useGetAllTypeChatChannelsQuery, } from '../../StateManagement/services/chatApi';
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch, FaUserPlus } from "react-icons/fa";
import userImage from '../../assests/user/not-available-user.png'
import { useDispatch, useSelector } from 'react-redux';
import { IoCheckmarkOutline, } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { toast } from 'react-toastify';
import { TiDelete } from "react-icons/ti";
import { addUserToCreateGroup, removeUserFromGroupList } from '../../StateManagement/slices/membersSlice';
import { GroupMemberInterface } from '../../Interfaces/Interfaces';
import Loader from '../../components/Loader/Loader';
import { MdAddCall, MdQrCodeScanner, MdInsertLink } from 'react-icons/md';
import { RootState } from '../../StateManagement/store/store';


interface Call {
    // showNewGroup: boolean
    setStartChat: React.Dispatch<React.SetStateAction<boolean>>;
    setShowNewGroup: React.Dispatch<React.SetStateAction<boolean>>;
    openNewCall: () => void;
}


const NewCall = ({ openNewCall, setStartChat, setShowNewGroup }: Call) => {
    const [showSearch,setShowSearch] = useState(false);    
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state?.auth);
    const groupMembers = useSelector((state: RootState) => state?.members?.members);
    let activeUser = auth.user;
    const { data, error, isLoading } = useGetAllTypeChatChannelsQuery({ group_type: "one-to-one", searchTextName: searchText });
    const { data: users, error: usersError } = useGetCommunicatorUsersQuery({name:searchText});
    const channels = data?.channels.map((user: any) => user.participants).flat().filter((user: any) => user.email !== activeUser.email);


    return (
        <div className="px-2 h-[70vh] fixed right-0 bottom-5 left-16 w-80 bg-white shadow-2xl rounded-md overflow-hidden z-50 flex flex-col left-side border-r-2 border-r-soft-gray p-5">
            <section className='flex justify-between bg-slate text-white text-xs p-2 rounded-md' >
                <div className='flex items-center gap-5 '>
                    <IoMdArrowBack className='text-lg cursor-pointer' />
                    <div>
                        <p>Select contact</p>
                        <p>{groupMembers.length} contacts</p>
                    </div>
                </div>
                <FaSearch />
            </section>
            <section className='space-y-1 my-5 '>
                <div className='flex items-center gap-5  p-2 font-semibold hover:bg-light-gray rounded-md cursor-pointer'>
                    <div className='bg-teal-green p-2 rounded-full text-white'>
                        <MdInsertLink />
                    </div>
                    <p>New call link</p>
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
            </section>
            <div className="flex-grow p-2 relative overflow-auto bg-white ">
                <p className='text-slate text-sm font-semibold'>Contacts on Communicator</p>
                {/* {isLoading ? <Loader/> : <article className='space-y-1'>
                {
                    groupMembers.map((list, i) => <div key={list?._id} className={`flex items-center gap-5 cursor-pointer p-2 hover:bg-light-gray rounded-md`}>
                        <img className='w-10 h-10 rounded-full' src={list.img ? list.img : userImage} alt="" />
                        <div>
                            <p className='font-semibold'>{list.name}</p>
                            <p className='text-slate text-sm'>{list.status}</p>
                        </div>
                    </div>)
                }
                </article>} */}
            </div>

            <div onClick={openNewCall}
                className={`bg-teal-green fixed bottom-5 left-[320px] p-2 rounded-lg cursor-pointer `}
            >
                <MdAddCall />
            </div>
        </div>
    );
};

export default NewCall;