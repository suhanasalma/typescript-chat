

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
    const [type,setType] = useState("password");



    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {

            console.log("data",data);
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

    const handlePasswordTypeToggle = () =>{

        if(type==="password"){
            setType('text');
            setSeePassword(true);
        }else{
            setType('password');
            setSeePassword(false);
        }

    }
    return (
        <div className={`absolute w-[85%] duration-500 ease-in-out ${!registerPage ? " left-[32px]" : "left-[-450px]"}`} id="login">
            <div className="top-header">
                <h3>Hello, Again!</h3>
                <small>We are happy to have you back.</small>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="input-group">
                <div className="input-field relative" >
                    <input onClick={()=>setOpenEmailLabel(true)} type="email" className="input-box" id="logEmail"   {...register("email", { required: true })} />
                    <label className={`absolute  ${openEmailLabel ? "top-[2px] text-[10px] font-medium text-[#c12828]":"top-3"}`} >Email address</label>
                    {errors.email && <p className='text-sm text-[#850101] w-fit mt-2 rounded-sm'>email is required.</p>}
                </div>
                <div className="input-field relative">
                    <input onClick={()=>setOpenPassLabel(true)} type={type} className="input-box" id="logPassword"  {...register("password", { required: true, maxLength: 20 })} />
                    <label className={`absolute  ${openPassLabel ? "top-[2px] text-[10px] font-medium text-[#c12828]":"top-3"}`}>Password</label>
                    <div className="eye-area">
                        <div className="eye-box" >
                           {seePassword? <FaEye onClick={handlePasswordTypeToggle} className="i" />:
                            <FaEyeSlash onClick={handlePasswordTypeToggle} className="i"/>}
                        </div>
                    </div>
                    {errors.password && <p className='text-sm text-[#850101] w-fit mt-2 rounded-sm'>password is required.</p>}
                </div>
     
                <div className="input-field">
                    <input type="submit" className="input-submit" value="Sign In" required />
                </div>
                <div className="forgot">
                    <Link className='text-link-blue' to="/">Forgot password?</Link>
                </div>

            </form>
        </div>
    );
};

export default Login;

