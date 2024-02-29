
import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import userImage from '../../assests/user/not-available-user.png'
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck } from "react-icons/fa";
import { FaCamera, FaSmile } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";
import { ChatIndexList, GroupMemberInterface } from '../../Interfaces/Interfaces';
import { useCreateChatChannelMutation } from '../../StateManagement/services/chatApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetUser } from '../../StateManagement/slices/membersSlice';
import { RootState } from '../../StateManagement/store/store';
// import moment from 'moment';
const moment = require('moment-timezone');
const { v4: uuidv4 } = require('uuid');

interface Group {
    // showNewGroup: boolean
    setShowNewGroup?: React.Dispatch<React.SetStateAction<boolean>>;
    setShowCreateGroup?: React.Dispatch<React.SetStateAction<boolean>>;
    openChatList: () => void;
    chatLists: ChatIndexList[]
    setChatLists: React.Dispatch<React.SetStateAction<ChatIndexList[]>>;
}

const CreateNewGroup = ({ openChatList, setShowCreateGroup, setShowNewGroup, setChatLists, chatLists }: Group) => {
    const activeUser = useSelector((state: RootState) => state?.auth?.user);
    const [createChatChannel, { data: response, error: channelError, isLoading: channelIsLoading }] = useCreateChatChannelMutation();
    const [groupName, setGroupName] = useState('')
    const groupMembers = useSelector((state: RootState) => state?.members?.members);
    const navigate = useNavigate()
    const dispatch = useDispatch()


    let participants = groupMembers?.map((member: any) => ({
        user_id: member?._id,
        counter: 0,
        admin: false,
        // joined_at: moment().tz('Asia/Dhaka').toISOString()
    }));

    const createNewGroup = async () => {
        let data = {
            channel: `chat_group_${uuidv4()}`,
            "last_msg": `${activeUser?.name} created group ${groupName ? groupName : "group"}.`,
            // "timestamp": moment().unix(),
            "chat_index_status": "regular",
            "msg_type": "text",
            "group_type": "group",
            "read": false,
            "received": true,
            "msg_delete_status": 0,
            // "msg_id": "",
            // "created_at": moment().unix(),
            "admin": activeUser._id,
            "img": "",
            "name": groupName,
            participant_name:[groupName ? groupName : "group"],
            "participants": [...participants, {
                user_id: activeUser?._id,
                counter: 0,
                admin: true,
                // joined_at:moment().tz('Asia/Dhaka').toISOString()
            }],
            "group_permissions": {
                "approve_new_member": false,
                "add_other_member": true,
                "send_message": true,
                "edit_group_setting": true
            },
        };
        let responses = await createChatChannel(data)
        if ('data' in responses) {
            // Handle the success case
            const { success, status, data, message } = responses.data;
            if (success) {
                openChatList()
                navigate(`chat/${data?.channel} `);
                setChatLists(prevList => [data, ...prevList,])
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

        <div className="px-2 h-[70vh] fixed right-0 bottom-5 left-16 w-80 bg-white shadow-2xl rounded-md overflow-hidden z-50 flex flex-col left-side border-r-2 border-r-soft-gray p-5">
            <div className='flex items-center gap-5 bg-slate text-white text-xs p-2 rounded-md'>
                <IoMdArrowBack onClick={() => {
                    setShowNewGroup?.(true)
                    setShowCreateGroup?.(false)
                }} className='text-lg' />
                <p>New group</p>
            </div>

            <div className='flex items-center justify-between gap-5 my-5'>
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
            <div className='flex justify-between items-center my-5'>
                <p className='font-semibold text-sm'>Group permissions</p>
                <IoMdSettings className='text-lg text-slate' />
            </div>

            <div className="flex-grow p-2 relative overflow-auto bg-white ">
                <div >
                    <p className='font-semibold text-sm'>Members: {groupMembers.length}</p>
                    <div className='grid grid-cols-4 gap-5 mt-2 mb-5'>
                        {
                            groupMembers.map((user: GroupMemberInterface) => <div key={user._id} className='flex flex-col justify-center items-center '>
                                <img className='w-10 h-10 object-cover object-top rounded-full' src={user.img ? user.img : userImage} alt="" />

                                <p className='font-medium text-xs'>{user.name.length > 7 ? user.name.slice(0, 5) + "..." : user.name}</p>
                            </div>)
                        }
                    </div>

                </div>

                <div onClick={createNewGroup} className={`bg-teal-green fixed bottom-5 left-[320px] p-2 rounded-lg cursor-pointer "z-10"`}>
                    <FaCheck />
                </div>
            </div>
        </div>
    );
};

export default CreateNewGroup;