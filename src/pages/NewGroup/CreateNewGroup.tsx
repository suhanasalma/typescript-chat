import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import userImage from '../../assests/user/not-available-user.png'
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck } from "react-icons/fa";
import { FaCamera, FaSmile } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";
import { GroupMemberInterface } from '../../Interfaces/Interfaces';
import { useCreateChatChannelMutation } from '../../StateManagement/services/chatApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetUser } from '../../StateManagement/slices/userSlice';
const { v4: uuidv4 } = require('uuid');

interface Group {
    // showNewGroup: boolean
    setShowNewGroup?:React.Dispatch<React.SetStateAction<boolean>>;
    setShowCrateGroup?:React.Dispatch<React.SetStateAction<boolean>>;
    openChatList:()=>void;
}

const CreateNewGroup = ({openChatList,setShowCrateGroup,setShowNewGroup }:Group) => {
    const auth = useSelector((state: any) => state?.auth);
    const [createChatChannel, { data: response, error: channelError, isLoading: channelIsLoading }] = useCreateChatChannelMutation();
    const [groupName, setGroupName] = useState('')
    const groupMembers = useSelector((state: any) => state?.user?.user);
    console.log("groupMembers", groupMembers);
    let activeUser = auth.user;
    const navigate = useNavigate()
    const dispatch = useDispatch()


    let participants = groupMembers.map((member: any) => ({
        user_id: member?._id,
        counter: 0,
    }));

    const createNewGroup = async () => {
        let data = {
            channel: `chat_group_${uuidv4()}`,
            "last_msg": `You created group "${groupName}".`,
            "timestamp": + new Date(),
            "chat_index_status": "regular",
            "msg_type": "text",
            "group_type": "group",
            "read": false,
            "received": false,
            "created_at": new Date(),
            "admin": activeUser._id,
            "img": "",
            "name": groupName,
            "participants": [...participants, {
                user_id: activeUser?._id,
                counter: 0,
            }]
        };
        let responses = await createChatChannel(data)
        if ('data' in responses) {
            // Handle the success case
            const { success, status, data, message } = responses.data;
            if (success) {
                openChatList()
                navigate(`/chat/group/${data._id}`);
                dispatch(resetUser());
            } else {
                toast("group creation failed", { position: "top-right", autoClose: 1000 });
            }
        } else {
            // Handle the error case
            const errorResponse = responses.error;
            console.log("errorResponse", errorResponse);
        }
    };

    return (
        <div className='w-96 rounded-lg max-h-[35rem] overflow-auto fixed right-0 bottom-5 left-5  bg-white shadow-2xl p-5'>
            <section className='space-y-5'>
                <div className='flex items-center gap-5'>
                    <IoMdArrowBack onClick={()=>{setShowNewGroup?.(true)
                    setShowCrateGroup?.(false)}} className='text-lg' />
                    <div>
                        <p>New group</p>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <div className='bg-slate text-white w-10 h-10 rounded-full flex justify-center items-center'>
                        <FaCamera />
                    </div>
                    <input onChange={(e) => setGroupName(e.target.value)} type="text" name="" id="" className='border-b-2 border-teal-green flex-1 outline-none' placeholder='Group name' />
                    <FaSmile className='text-slate' />
                </div>

                <div className='flex justify-between items-center '>
                    <div>
                        <p className='font-semibold text-sm'>Disappearing messages</p>
                        <p className='text-xs text-slate'>Off</p>
                    </div>
                    <BsClockHistory className='text-md text-slate' />
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-sm'>Group permissions</p>
                    <IoMdSettings className='text-lg text-slate' />
                </div>
                <div >
                    <p className='font-semibold text-sm'>Members:{groupMembers.length}</p>
                    <div className='grid grid-cols-4 gap-5 mt-2 mb-5'>
                        {
                            groupMembers.map((user: GroupMemberInterface) => <div key={user._id} className='flex flex-col justify-center items-center '>
                                <img className='w-10 h-10 object-cover object-top rounded-full' src={user.img ? user.img : userImage} alt="" />

                                <p className='font-medium text-xs'>{user.name.length > 7 ? user.name.slice(0, 5) + "..." : user.name}</p>
                            </div>)
                        }
                    </div>

                </div>

            </section>

            <div onClick={createNewGroup} className={`bg-teal-green fixed bottom-5 left-[370px] p-2 rounded-lg cursor-pointer "z-10"`}>
                <FaCheck />
            </div>
        </div>
    );
};

export default CreateNewGroup;