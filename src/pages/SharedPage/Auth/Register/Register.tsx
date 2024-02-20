import React, { useEffect, useRef, useState } from 'react';
import Select, { ActionMeta } from 'react-select';


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
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface RegisterProps {
    registerPage?: boolean
}

interface OptionType {
    value: string;
    label: string;
}

const Register = ({ registerPage }: RegisterProps) => {
    const { register, handleSubmit, formState: { errors }, } = useForm<Registration>()
    const [selectedImage, setSelectedImage] = useState(selectImage);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const [createUser, { data, error, isLoading }] = useRegisterMutation();
    const [seePassword, setSeePassword] = useState(false)
    const [openUserLabel, setOpenUserLabel] = useState(false);
    const [openEmailLabel, setOpenEmailLabel] = useState(false);
    const [openPassLabel, setOpenPassLabel] = useState(false);
    const [selectedOption, setSelectedOption] = useState<OptionType>({ value: 'Bangladesh', label: 'Bangladesh' });
    const [type,setType] = useState("password");
    // console.log("selectedImage",selectedImage);
    // console.log("selectedOption",selectedOption);
    const options = [
        { value: 'Bangladesh', label: 'Bangladesh' },
        { value: 'Korea', label: 'Korea' },
        { value: 'America', label: 'America' },
        { value: 'Canada', label: 'Canada' },
        { value: 'India', label: 'India' },
        { value: 'Pakistan', label: 'Pakistan' },
        { value: 'German', label: 'German' },
    ];
    const onSubmit: SubmitHandler<Registration> = async (data) => {
        try {
            console.log("data",data);
            const response = await createUser({ ...data, status: "Hey there! I am using Communicator",country: selectedOption?.value});

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
    };


    const setSelectedOptionHandler = (newValue: OptionType | null, actionMeta: ActionMeta<OptionType>) => {
        // Ensure that newValue is not null
        if (newValue !== null) {
            setSelectedOption(newValue);
        }
    };

    const handlePasswordTypeToggle = () =>{

        if(type==="password"){
            setType('text');
            setSeePassword(true);
        }else{
            setType('password');
            setSeePassword(false);
        }

    }

    // console.log("registerPage",registerPage);

    return (
        <div className={`duration-500 ease-in-out absolute h-5/6 overflow-y-auto pb-20 w-[85%] ${registerPage ? " right-[32px]" : " right-[-450px]"}`} id="register">
            <div className="top-header">
                <h3>Sign Up, Now!</h3>
                <small>We are happy to have you with us.</small>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="input-group" >
                <div className="input-field relative">
                    <input onClick={() => setOpenUserLabel(true)} type="text" className="input-box" id="regUsername" {...register("name", { required: true, maxLength: 20 })} />
                    <label className={`absolute  ${openUserLabel ? "top-[2px] text-[10px] font-medium text-[#c12828]" : "top-3"}`} >Name</label>
                    {errors.name && <p className='text-sm text-[#850101] w-fit mt-2 rounded-sm'>name is required.</p>}
                </div>
                <div className="input-field relative">
                    <input onClick={() => setOpenEmailLabel(true)} type="email" className="input-box" id="regEmail" {...register("email", { required: true })} />
                    <label className={`absolute  ${openEmailLabel ? "top-[2px] text-[10px] font-medium text-[#c12828]" : "top-3"}`} >Email address</label>
                    {errors.email && <p className='text-sm text-[#850101] w-fit mt-2 rounded-sm'>email is required.</p>}
                </div>
                <div className="input-field relative">

                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOptionHandler}
                        options={options}
                    />
                    {/* {errors.country && <p className='text-sm text-[#850101] w-fit mt-2 rounded-sm'>country is required.</p>} */}
                </div>
                <div className="input-field relative">
                    <section className="">
                        <div className="image-input h-32 w-32">
                            <label
                                htmlFor="upload-image"
                                className="image-input-label w-full h-full mx-auto bg-[red]"
                            >
                                <img
                                    alt="select"
                                    id="selected-image"
                                    className="w-full h-full object-cover selected-image"
                                    src={selectedImage}
                                />
                            </label>
                            <input 
                                accept=".jpg, .jpeg, .png"
                                ref={fileInputRef}
                                type="file"
                                id="upload-image"
                                className="image-input-field"
                                onChange={(e) => displaySelectedImage(e)}
                            />
                        </div>

                        <VscTrash
                            onClick={deleteImage}
                            className="absolute -top-3 left-0 font-bold text-white w-6 h-6  border-2 rounded-full  bg-red flex items-center justify-center"
                        />

                    </section>
                    {errors.img && <p className='text-sm text-[#850101] w-fit mt-2 rounded-sm'>img is required.</p>}
                </div>
                <div className="input-field relative">
                    <input onClick={() => setOpenPassLabel(true)} type={type} className="input-box" id="regPassword" {...register("password", { required: true, maxLength: 20 })} />
                    <label className={`absolute  ${openPassLabel ? "top-[2px] text-[10px] font-medium text-[#c12828]" : "top-3"}`} >Password</label>
                    <div className="eye-area">
                        {seePassword ? <FaEye onClick={handlePasswordTypeToggle} className="i" /> :
                            <FaEyeSlash onClick={handlePasswordTypeToggle} className="i" />}
                    </div>
                    {errors.password && <p className='text-sm text-[#850101] w-fit mt-2 rounded-sm'>password is required.</p>}
                </div>
                <div className="input-field relative">
                    <input type="submit" className="input-submit" value="Sign Up" required />
                </div>
            </form>
        </div>
    );
};

export default Register;

