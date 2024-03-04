import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch, FaUserFriends, FaUserPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { ChatIndexList, UsersOnCommunicator } from "../../Interfaces/Interfaces";
import { MdQrCodeScanner } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useGetCommunicatorUsersQuery } from "../../StateManagement/services/usersApi";
import userImage from "../../assests/user/not-available-user.png";
import CreateChannel from "../../components/CreateChannel/CreateChannel";
import { useSelector } from "react-redux";
import { useCreateChatChannelMutation } from "../../StateManagement/services/chatApi";
import { MdMessage } from "react-icons/md";
import Loader from "../../components/Loader/Loader";
import { RootState } from "../../StateManagement/store/store";
import ChatSearch from "../../components/Chat/ChatSearch/ChatSearch";
// import moment from "moment";
const moment = require('moment-timezone');

interface UserProps {
    email: string;
    _id: string;
    name:string
}

interface Chat {
    openNewGroup: () => void;
    openNewAnnouncement: () => void;
    openStartChat: () => void;
    chatLists:ChatIndexList[]
    setChatLists:React.Dispatch<React.SetStateAction<ChatIndexList[]>>;
    openChatList:()=>void;
}

const StartChat = ({
    openNewGroup,
    openNewAnnouncement,
    openStartChat,setChatLists,chatLists,openChatList
}: Chat) => {
    const [user, setUser] = useState<UserProps>();
    const [createChannel, setCreateChannel] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [usersLists, setUsersLists] = useState<UsersOnCommunicator[]>([]);
    const { data, error, isLoading, refetch } = useGetCommunicatorUsersQuery({name:searchText});
    const [showSearch,setShowSearch] = useState(false);
    
    const [
        createChatChannel,
        { data: response, error: channelError, isLoading: channelIsLoading },
    ] = useCreateChatChannelMutation();
    const navigate = useNavigate();
    const auth = useSelector((state: RootState) => state?.auth);
    let currentUser = auth.user;

    useEffect(() => {
        setUsersLists(data ? data : []);
        refetch()
    }, [data,refetch,searchText]);

    const openConnectChannelModal = (user?: UserProps) => {
        setUser(user);
        setCreateChannel(true);
    };

    const wantToConnect = async () => {
        let data = {
            channel: `chat_${currentUser.email}_${user?.email}`,
            last_msg: "",
            // timestamp: moment().unix(),
            chat_index_status: "regular",
            msg_type: "text",
            group_type: "one-to-one",
            read: false,
            received: true,
            "msg_delete_status": 0,
            // "msg_id": "",
            // created_at: moment().unix(),
            admin: currentUser._id,
            participant_name:[currentUser.name,user?.name],
            participants: [
                {
                    user_id: currentUser._id,
                    counter: 0,
                    admin: true,
                    // joined_at:moment().tz('Asia/Dhaka').toISOString()
                },
                {
                    user_id: user?._id,
                    counter: 0,
                    admin: false,
                    // joined_at:moment().tz('Asia/Dhaka').toISOString()
                },
            ],
            "group_permissions": {
                "approve_new_member": false,
                "add_other_member": false,
                "send_message": true,
                "edit_group_setting": false
            },
        };
        try {
            const response = await createChatChannel(data);
            // console.log("response", response);

            if ('data' in response) {
                // If the response has a 'data' property, it means the request was successful
                // console.log("response", response.data);
                const { success, status, data, message } = response.data;
                // console.log("data", data);
                if (success) {
                    // console.log("response", data._id);
                    navigate(`chat/${data?.channel} `);
                    console.log("want to connect",data);
                    setChatLists(prevList=>[data, ...prevList, ])
                    setCreateChannel(false);
                    openChatList()
                } else {
                    // Handle unsuccessful response
                    console.error("Failed to create chat channel:", message);
                }
            } else {
                // If there is no 'data' property, it means the request failed
                console.error("Failed to create chat channel:", response.error);
            }
        } catch (error) {
            // Handle errors
            console.error("Error creating chat channel:", error);
        };
    };

    return (
        <div style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} className="px-2 h-[70vh] fixed right-0 bottom-5 left-16 w-80 bg-white rounded-md overflow-hidden z-50 flex flex-col left-side border-r-2 border-r-soft-gray p-5">
            {showSearch ? <div className="">
                <IoMdArrowBack onClick={()=>{setShowSearch(false)
                    setSearchText('')}}/>
                <div className="-mt-3">
                    <ChatSearch setSearchText={setSearchText}  placeholder="search"/>
                </div>
            </div>:<section className="flex justify-between bg-slate text-white text-xs p-2 rounded-md">
                <div className="flex items-center gap-5 ">
                    <IoMdArrowBack
                        onClick={openStartChat}
                        className="text-lg cursor-pointer"
                    />
                    <div>
                        <p>Select contact</p>
                        <p>{usersLists?.length} contacts</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <FaSearch onClick={()=>setShowSearch(true)}/>
                    <BsThreeDotsVertical />
                </div>
            </section>}
            <section className="space-y-1 my-5 ">
                <div
                    onClick={openNewGroup}
                    className="flex items-center gap-5  p-2 font-semibold hover:bg-light-gray rounded-md cursor-pointer"
                >
                    <div className="bg-teal-green p-2 rounded-full text-white">
                        <FaUserFriends />
                    </div>
                    <p>New group</p>
                </div>
                <div
                    onClick={openNewAnnouncement}
                    className="flex items-center gap-5  p-2 font-semibold hover:bg-light-gray rounded-md cursor-pointer"
                >
                    <div className="bg-teal-green p-2 rounded-full text-white">
                        <HiUserGroup />
                    </div>
                    <p>New Announcement</p>
                </div>
            </section>
            <div className="flex-grow p-2 relative overflow-auto bg-white w-full">
                <p className="text-slate text-sm font-semibold">
                    Contacts on Communicator
                </p>
                {isLoading ? (
                    <Loader />
                ) : (
                    <article className="space-y-1">
                        {usersLists.map((list, i) => (
                            <div onClick={() => openConnectChannelModal(list)} key={list?._id} className={`${createChannel && " pointer-events-none"} flex items-center gap-5 cursor-pointer p-2 hover:bg-light-gray rounded-md my-2`}>
                                <img className='w-10 h-10 object-cover rounded-full' src={list?.img ? list.img : userImage} alt="" />
                                <div className='flex-1  w-full'>
                                    <p className='font-semibold w-full'>{list?.name}</p>
                                    <p className='text-slate text-xs '>{list?.status}</p>
                                </div>
                            </div>
                        ))}
                    </article>
                )}
            </div>
            {createChannel && (
                <CreateChannel
                    wantToConnect={wantToConnect}
                    setCreateChannel={setCreateChannel}
                />
            )}
            <div
                onClick={openStartChat}
                className={`bg-teal-green fixed bottom-5 left-[320px] p-2 rounded-lg cursor-pointer`}
            >
                <MdMessage />
            </div>
        </div>
    );
};

export default StartChat;
