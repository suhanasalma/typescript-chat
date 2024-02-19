

import React, { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { CiUser } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import log from '../../../../assests/auth/log.svg'
import selectImage from '../../../../assests/auth/selectimages.png'
import { VscChromeClose, VscTrash } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../../StateManagement/services/authApi';

interface IFormInput {
    email: string
    password: string
}

interface LoginProps {
    registerPage?: boolean
}

const Login = ({ registerPage }: LoginProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const navigate = useNavigate();
    const [seePassword,setSeePassword] = useState(false)
    const [login, { data, error, isLoading }] = useLoginMutation();
    const [openEmailLabel,setOpenEmailLabel] = useState(false);
    const [openPassLabel,setOpenPassLabel] = useState(false);



    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            const response = await login(data);
            if ('data' in response && response.data) {

                const { success, error, data } = response.data
                if (success) {
                    navigate("/");
                } else {
                    toast(error ? error : error, { position: "top-right", autoClose: 1000 });
                }
            }
        } catch (error) {
            console.error("Fetch error:", error);
        };
    }
    return (
        // <section className='h-screen overflow-auto bg-soft-gray'>
        //     <article className='w-9/12 mx-auto my-10 shadow-2xl bg-white flex flex-col md:flex-row  justify-between p-10'>
        //         <div className='md:w-5/12 xl:w-6/12 bg-teal-green rounded-br-full min-h-fit max-h-96'>
        //             <img src={log} alt="" className='h-full' />
        //         </div>
        //         <div className='md:w-6/12 xl:w-4/12 p-5  min-h-fit max-h-96 overflow-auto bg-slate shadow-md m-5  rounded-md'>
        //             <p className='font-bold my-2 text-white text-center'>LOG IN HERE</p>
        //             <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>

        //                 <div className='relative'>
        //                     <input type='email' className='w-full rounded-md outline-none py-1 px-2' placeholder='email' {...register("email", { required: true })} />
        //                     <MdOutlineAlternateEmail className=' absolute bottom-2 right-2 text-lg text-teal-green-dark' />
        //                     {errors.email && <p className='text-xs text-red'>email is required.</p>}
        //                 </div>
        //                 <div className='relative'>
        //                     <input type='text' className='w-full rounded-md outline-none py-1 px-2' placeholder='password' {...register("password", { required: true, maxLength: 20 })} />
        //                     <RiLockPasswordLine className=' absolute bottom-2 right-2 text-lg text-teal-green-dark' />
        //                     {errors.password && <p className='text-xs text-red'>email is required.</p>}
        //                 </div>


        //                 <p className='text-light-gray text-xs text-center'>Don't have a account already? <Link to='/register' className='text-green underline cursor-pointer'>Register</Link></p>

        //                 <input className='w-6/12 mx-auto p-2 bg-teal-green rounded-md text-white' type="submit" />
        //             </form>
        //         </div>
        //     </article>
        // </section >
        <div className={`absolute w-[85%] duration-500 ease-in-out ${!registerPage ? " left-[32px]" : "left-[-450px]"}`} id="login">
            <div className="top-header">
                <h3>Hello, Again!</h3>
                <small>We are happy to have you back.</small>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="input-group">
                <div className="input-field relative" >
                    <input onClick={()=>setOpenEmailLabel(true)} type="email" className="input-box" id="logEmail" required  {...register("email", { required: true })} />
                    <label className={`absolute  ${openEmailLabel ? "top-[2px] text-[10px] font-medium text-[#c12828]":"top-3"}`} >Email address</label>
                    {errors.email && <p className='text-sm text-[#850101] w-fit mt-2 rounded-sm'>email is required.</p>}
                </div>
                <div className="input-field relative">
                    <input onClick={()=>setOpenPassLabel(true)} type="password" className="input-box" id="logPassword" required {...register("password", { required: true, maxLength: 20 })} />
                    <label className={`absolute  ${openPassLabel ? "top-[2px] text-[10px] font-medium text-[#c12828]":"top-3"}`}>Password</label>
                    <div className="eye-area">
                        <div className="eye-box" >
                           {seePassword? <FaEye onClick={()=>setSeePassword(false)} className="i" />:
                            <FaEyeSlash onClick={()=>setSeePassword(true)} className="i"/>}
                        </div>
                    </div>
                    {errors.password && <p className='text-sm text-[#850101] w-fit mt-2 rounded-sm'>password is required.</p>}
                </div>
     
                <div className="input-field">
                    <input type="submit" className="input-submit" value="Sign In" required />
                </div>
                <div className="forgot">
                    <a href="#">Forgot password?</a>
                </div>

            </form>
        </div>
    );
};

export default Login;

