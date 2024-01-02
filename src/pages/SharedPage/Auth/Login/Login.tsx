

import React, { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { CiUser } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import log from '../../../../assests/auth/log.svg'
import selectImage from '../../../../assests/auth/selectimages.png'
import { VscChromeClose, VscTrash } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";

import { url } from 'inspector';
import { Link } from 'react-router-dom';

interface IFormInput {
    name: string
    email: number
    file: FileList
    password: string
    "confirmed-password": string
}

const Login = () => {
    const { register, handleSubmit } = useForm<IFormInput>()
    const [selectedImage, setSelectedImage] = useState(selectImage);
    const fileInputRef = useRef(null);
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    return (
        <section className='h-screen overflow-hidden bg-soft-gray'>
            <article className='w-9/12 mx-auto my-10 shadow-2xl bg-white flex flex-col md:flex-row  justify-between p-10'>
                <div className='md:w-5/12 xl:w-6/12 bg-teal-green rounded-br-full min-h-fit max-h-96'>
                    <img src={log} alt="" className='h-full' />
                </div>
                <div className='md:w-6/12 xl:w-4/12 p-5  min-h-fit max-h-96 overflow-auto bg-slate shadow-md m-5  rounded-md'>
                    <p className='font-bold my-2 text-white text-center'>LOG IN HERE</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                       
                        <div className='relative'>
                            <input type='email' className='w-full rounded-md outline-none py-1 px-2' placeholder='email' {...register("email", { required: true, maxLength: 20 })} />
                            <MdOutlineAlternateEmail className=' absolute bottom-2 right-2 text-lg text-teal-green-dark' />
                        </div>
                        <div className='relative'>
                            <input type='text' className='w-full rounded-md outline-none py-1 px-2' placeholder='password' {...register("password", { required: true, maxLength: 20 })} />
                            <RiLockPasswordLine className=' absolute bottom-2 right-2 text-lg text-teal-green-dark' />
                        </div>


                        <p className='text-light-gray text-xs text-center'>Don't have a account already? <Link to='/register' className='text-green underline cursor-pointer'>Register</Link></p>
                        
                        <input className='w-6/12 mx-auto p-2 bg-teal-green rounded-md text-white' type="submit" />
                    </form>
                </div>
            </article>
        </section >
    );
};

export default Login;

