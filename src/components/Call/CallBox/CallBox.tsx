import React, { useEffect, useState } from 'react';
import { BsTelephone } from "react-icons/bs";
import { PiChatCircleTextLight } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
import { useGetUserDetailsByIdQuery } from '../../../StateManagement/services/usersApi';
import userImage from '../../../assests/user/not-available-user.png'


const CallBox = () => {
    const { email } = useParams<{ email?: string }>();
    const [oppositeUserEmail, setOppositeUserEmail] = useState<string | undefined>(email ? email : undefined);
    const { data } = useGetUserDetailsByIdQuery({ email: oppositeUserEmail });

    useEffect(() => {
        setOppositeUserEmail(email ? email : undefined);
    }, [email]);
    return (
        <article className='w-full pt-12 px-4'>
            <p className='text-soft-black font-bold text-lg my-5'>Call Info</p>

            <section className='border-2 border-soft-gray shadow-lg w-full p-5' >
                <div className=' flex justify-between items-center border-b-2 border-b-soft-gray pb-2'>
                    <div className='flex items-center gap-5'>
                        <img src={data?.img ? data?.img : userImage} className='w-10 h-10 rounded-full' alt="" />
                        <p className='font-semibold text-soft-black '>{data?.name}</p>
                    </div>
                    <div className='flex items-center text-lg'>
                        <Link to='/chat/shakil@gmail.com' className={`px-4 py-2 rounded-md  hover:bg-soft-gray cursor-pointer flex justify-center items-center`}>
                            <PiChatCircleTextLight />
                        </Link>
                        <Link to='/' className={`px-4 py-2 rounded-md  hover:bg-soft-gray cursor-pointer flex justify-center items-center`}>
                            <IoVideocamOutline />
                        </Link>
                        <Link to='/' className={`px-4 py-2 rounded-md  hover:bg-soft-gray cursor-pointer flex justify-center items-center`}>
                            <BsTelephone />
                        </Link>
                    </div>
                </div>

                <div className='pt-2'>
                    <p className='text-slate mb-5'>Yesterday</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center gap-4'>
                            <BsTelephone />
                            <p>Outgoing voice call at 1:36 PM</p>
                        </div>
                        <p>Unanswered</p>
                    </div>

                </div>
            </section>
        </article>
    );
};

export default CallBox;