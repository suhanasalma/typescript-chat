import React, { useEffect, useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch, FaUserFriends, FaUserPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { UsersOnWhatsApp } from '../../Interfaces/Interfaces';
import { MdQrCodeScanner } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useGetWhatsAppUsersQuery } from '../../StateManagement/services/usersApi'
import userImage from '../../assests/user/not-available-user.png'
import CreateChannel from '../../components/CreateChannel/CreateChannel';
import { useSelector } from 'react-redux';


interface User {
    email:string
}

const StartChat = () => {
    const [user, setUser] = useState<User>()
    const [createChannel,setCreateChannel] = useState(false)
    const { data, error, isLoading } = useGetWhatsAppUsersQuery({ country: "bangladesh", email: "suhana@gmail.com" })
    const navigate = useNavigate()
    const auth = useSelector((state: any) => state?.auth)
    let currentUser = auth.user;

    const [usersLists, setUsersLists] = useState<UsersOnWhatsApp[]>([])
    useEffect(() => {
        setUsersLists(data ? data : [])

        console.log("StartChat", data);

    }, [data])

    const openConnectChannelModal = (user:User)=>{
        setUser(user)
        setCreateChannel(true)

        console.log("user",user);
    }

    const wantToConnect = async (value:string) =>{
        console.log("value",value);
        if( value === "yes" ){
            navigate(`chat/${user?.email}`)
            setCreateChannel(false)

            let data ={
                channel:`chat_${currentUser.email}_${user?.email}`,
                "last_msg": "",
                "timestamp": + new Date(),
                "chat_index_status": "regular",
                "msg_type": "text",
                "group_type": "one-to-one",
                "read": false,
                "received": false,
                "participants": [
                  {
                    "user_id": "",
                    "counter": 0
                  },
                  {
                    "user_id": {
                      "$oid": "659675e02be8073fed22a770"
                    },
                    "counter": {
                      "$numberLong": "0"
                    }
                  }
                ]
              }

        }

    }

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
                {isLoading ? <p>Loading</p> : <article className='space-y-5'>
                    {
                        usersLists.map((list, i) => <div onClick={()=>openConnectChannelModal(list)} key={list?._id} className={`${createChannel && " pointer-events-none"} flex items-center gap-5 cursor-pointer p-2 hover:bg-light-gray rounded-md`}>
                            <img className='w-10 h-10 rounded-full' src={list.img ? list.img : userImage} alt="" />
                            <div>
                                <p className='font-semibold'>{list.name}</p>
                                <p className='text-slate text-sm'>{list.status}</p>
                            </div>
                        </div>)
                    }

                </article>}
            </section>
            {
                createChannel && <CreateChannel wantToConnect={wantToConnect} setCreateChannel={setCreateChannel}/>
            }
        </div>
    );
};

export default StartChat;