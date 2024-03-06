
import React, { useEffect, useState } from 'react';
import { useGetAllTypeChatChannelsQuery, useGetChatChannelsByEmailAndIndexTypeQuery, } from '../../StateManagement/services/chatApi';
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import userImage from '../../assests/user/not-available-user.png'
import { useDispatch, useSelector } from 'react-redux';
import { IoCheckmarkOutline, } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { toast } from 'react-toastify';
import { TiDelete } from "react-icons/ti";
import { addUserToCreateGroup, removeUserFromGroupList } from '../../StateManagement/slices/membersSlice';
import { GroupMemberInterface } from '../../Interfaces/Interfaces';
import { RootState } from '../../StateManagement/store/store';
import ChatSearch from '../../components/Chat/ChatSearch/ChatSearch';


interface Announcement {
    // showNewGroup: boolean
    setStartChat?: React.Dispatch<React.SetStateAction<boolean>>;
    setShowNewAnnouncement?: React.Dispatch<React.SetStateAction<boolean>>;
    openCreateNewAnnouncement: () => void;
}


const NewAnnouncement = ({ openCreateNewAnnouncement, setShowNewAnnouncement, setStartChat }: Announcement) => {
    const [showSearch,setShowSearch] = useState(false);    
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state?.auth);
    const announcementMembers = useSelector((state: RootState) => state?.members?.members);
    let activeUser = auth.user;
    // const { data, error, isLoading } = useGetAllTypeChatChannelsQuery({ group_type: "one-to-one" , searchTextName: searchText});
    const { data, error, isLoading } = useGetChatChannelsByEmailAndIndexTypeQuery({ group_type: "one-to-one" , searchTextName: searchText});
    const channels = data?.map((user: any) => user.participants).flat().filter((user: any) => user.email !== activeUser.email);


    const addMemberForGroups = async (member: GroupMemberInterface) => {
        dispatch(addUserToCreateGroup(member));

    };

    const removeAddedUser = async (member: GroupMemberInterface) => {
        dispatch(removeUserFromGroupList(member));
    };

    const goToNextPage = async () => {
        if (announcementMembers.length === 0) toast("Atleast 1 contact must be selected");
        else openCreateNewAnnouncement();
    };

    return (
        <div style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} className="px-2 h-[70vh] fixed right-0 bottom-5 left-16 w-80 bg-white rounded-md overflow-hidden z-50 flex flex-col left-side border-r-2 border-r-soft-gray p-5">
            {showSearch ? <div className="">
                <IoMdArrowBack onClick={()=>{setShowSearch(false)
                    setSearchText('')}}/>
                <div className="-mt-3">
                    <ChatSearch setSearchText={setSearchText}  placeholder="search"/>
                </div>
            </div> :<section className='flex justify-between bg-slate text-white text-xs p-2 rounded-md' >
                <div className='flex items-center gap-5 '>
                    <IoMdArrowBack onClick={() => {
                        setStartChat?.(true)
                        setShowNewAnnouncement?.(false)
                    }} className='text-lg' />

                    <div>
                        <p>New Announcement</p>
                        {announcementMembers.length === 0 ?
                            <p>Add members</p> :
                            <p>{announcementMembers.length} of {channels?.length} selected</p>}
                    </div>

                </div>
                <div className='flex items-center gap-5'>
                    <FaSearch onClick={()=>setShowSearch(true)}/>
                </div>
            </section>}

            <section>
                {announcementMembers.length > 0 &&
                    <div className='flex items-center gap-5 mt-5 overflow-x-auto scrollbar'>
                        {
                            announcementMembers.map((user: GroupMemberInterface) => <div key={user._id} className='flex flex-col justify-center items-center'>
                                <div className='w-10 h-10 rounded-full relative'>

                                    <img className='w-full h-full object-cover object-top rounded-full' src={user.img ? user.img : userImage} alt="" />
                                    <button onClick={() => removeAddedUser(user)} className='absolute top-5 left-7 text-gray bg-slate text-xl rounded-full flex items-center justify-center'><TiDelete /></button>
                                </div>

                                <p className='font-medium text-xs'>{user.name.length > 7 ? user.name.slice(0, 5) + "..." : user.name}</p>
                            </div>)
                        }

                    </div>
                }
            </section>

            <div className="flex-grow p-2 relative overflow-auto bg-white ">
                <div className='my-5'>
                    <p className='text-slate text-sm font-semibold'>Connections on Communicator</p>
                    <article className='space-y-1'>
                        {
                            channels?.map((list: GroupMemberInterface) => <div key={list._id} onClick={() => addMemberForGroups(list)} className={` flex items-center gap-5 cursor-pointer p-2 hover:bg-light-gray rounded-md`}>
                                <div className='relative'>
                                    <img className='w-10 h-10 object-cover object-top rounded-full' src={list.img ? list.img : userImage} alt="" />
                                    {announcementMembers.includes(list) && <button className='absolute top-5 left-7 bg-teal-green text-soft-black text-xs w-4 h-4  rounded-full flex items-center justify-center'><IoCheckmarkOutline /></button>}
                                </div>
                                <div>
                                    <p className='font-semibold'>{list.name}</p>
                                    <p className='text-slate text-xs'>{list.status}</p>
                                </div>
                            </div>)
                        }

                    </article>
                </div>

                <div onClick={goToNextPage} className={`bg-teal-green fixed bottom-5 left-[320px] p-2 rounded-lg cursor-pointer "z-10"`}>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
};

export default NewAnnouncement;