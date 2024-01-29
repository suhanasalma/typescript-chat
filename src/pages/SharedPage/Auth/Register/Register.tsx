import React, { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { CiUser } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import reg from '../../../../assests/auth/reg.svg'
import selectImage from '../../../../assests/auth/selectimages.png'
import { VscTrash } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import './register.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { Registration } from '../../../../Interfaces/Interfaces';
import { useRegisterMutation } from '../../../../StateManagement/services/authApi';
import { toast } from 'react-toastify';


interface RegisterProps {
    registerPage?:boolean
}

const Register = ({registerPage}:RegisterProps) => {
    const { register, handleSubmit, formState: { errors }, } = useForm<Registration>()
    const [selectedImage, setSelectedImage] = useState(selectImage);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const [createUser, { data, error, isLoading }] = useRegisterMutation();


    const onSubmit: SubmitHandler<Registration> = async (data) => {
        try {
            const response = await createUser({ ...data, status: "Hey there! I am using Communicator" });

            if ('data' in response && response.data) {
                const { success, error } = response.data
                if (success) {
                    navigate("/");
                } else {
                    toast(error ? error : error, { position: "top-right", autoClose: 1000 });
                }
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }

        // console.log("registrationInfo", data);
    };

    const displaySelectedImage = (e: React.ChangeEvent<HTMLInputElement> | null) => {
        if (e && e.target && e.target.files) {
            const selectedFile = e.target.files[0];

            if (selectedFile && selectedFile.size < 240000) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    if (event && typeof event!.target!.result === 'string') {
                        setSelectedImage(event!.target!.result);
                    }
                };
                reader.readAsDataURL(selectedFile);
            } else {
                window.alert('File size is larger than 240 KB');
                fileInputRef!.current!.value = "";
                setSelectedImage(selectImage);
            }
        } else {
            console.log("No file selected");
        }
    };

    const deleteImage = () => {
        fileInputRef!.current!.value = "";
        setSelectedImage(selectImage);
    }

    console.log("registerPage",registerPage);

    return (
        <div className={`duration-500 ease-in-out absolute w-[85%] ${registerPage ? " right-[32px]":" right-[-450px]"}`} id="register">
            <div className="top-header">
                <h3>Sign Up, Now!</h3>
                <small>We are happy to have you with us.</small>
            </div>
            <div className="input-group">
                <div className="input-field">
                    <input type="text" className="input-box" id="regUsername" required />
                    <label >Username</label>
                </div>
                <div className="input-field">
                    <input type="text" className="input-box" id="regEmail" required />
                    <label >Email address</label>
                </div>
                <div className="input-field">
                    <input type="password" className="input-box" id="regPassword" required />
                    <label >Password</label>
                    <div className="eye-area">
                        <div className="eye-box">
                            <i className="fa-regular fa-eye" id="eye-2"></i>
                            <i className="fa-regular fa-eye-slash" id="eye-slash-2"></i>
                        </div>
                    </div>
                </div>

                <div className="remember">
                    <input type="checkbox" id="formCheck2" className="check" />
                    <label >Remember Me</label>
                </div>
                <div className="input-field">
                    <input type="submit" className="input-submit" value="Sign Up" required />
                </div>
            </div>
        </div>
        // <div className='body'>
        //     <div className="container">
        //         <div className="box ">
        //             <div className="box-login" id="login">
        //                 <div className="top-header">
        //                     <h3>Hello, Again!</h3>
        //                     <small>We are happy to have you back.</small>
        //                 </div>
        //                 <div className="input-group">
        //                     <div className="input-field">
        //                         <input type="text" className="input-box" id="logEmail" required />
        //                         <label >Email address</label>
        //                     </div>
        //                     <div className="input-field">
        //                         <input type="password" className="input-box" id="logPassword" required />
        //                         <label >Password</label>
        //                         <div className="eye-area">
        //                             <div className="eye-box" >
        //                                 <i className="fa-regular fa-eye" id="eye"></i>
        //                                 <i className="fa-regular fa-eye-slash" id="eye-slash"></i>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="remember">
        //                         <input type="checkbox" id="formCheck" className="check" />
        //                         <label >Remember Me</label>
        //                     </div>
        //                     <div className="input-field">
        //                         <input type="submit" className="input-submit" value="Sign In" required />
        //                     </div>
        //                     <div className="forgot">
        //                         <a href="#">Forgot password?</a>
        //                     </div>

        //                 </div>
        //             </div>
        //             {/* register  */}
        //             <div className="box-register" id="register">
        //                 <div className="top-header">
        //                     <h3>Sign Up, Now!</h3>
        //                     <small>We are happy to have you with us.</small>
        //                 </div>
        //                 <div className="input-group">
        //                     <div className="input-field">
        //                         <input type="text" className="input-box" id="regUsername" required />
        //                         <label >Username</label>
        //                     </div>
        //                     <div className="input-field">
        //                         <input type="text" className="input-box" id="regEmail" required />
        //                         <label >Email address</label>
        //                     </div>
        //                     <div className="input-field">
        //                         <input type="password" className="input-box" id="regPassword" required />
        //                         <label >Password</label>
        //                         <div className="eye-area">
        //                             <div className="eye-box">
        //                                 <i className="fa-regular fa-eye" id="eye-2"></i>
        //                                 <i className="fa-regular fa-eye-slash" id="eye-slash-2"></i>
        //                             </div>
        //                         </div>
        //                     </div>

        //                     <div className="remember">
        //                         <input type="checkbox" id="formCheck2" className="check" />
        //                         <label >Remember Me</label>
        //                     </div>
        //                     <div className="input-field">
        //                         <input type="submit" className="input-submit" value="Sign Up" required />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="switch">
        //                 <a href="#" className="login active">Login</a>
        //                 <a href="#" className="register" >Register</a>
        //                 <div className="btn-active" id="btn"></div>
        //             </div>

        //         </div>

        //     </div>
        // </div>
    );
};

export default Register;

