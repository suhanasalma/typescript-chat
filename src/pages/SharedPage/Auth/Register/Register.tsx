import React, { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { CiUser } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import reg from '../../../../assests/auth/reg.svg'
import selectImage from '../../../../assests/auth/selectimages.png'
import { VscTrash } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import './register.css'
import { Link ,useNavigate} from 'react-router-dom';


interface registration {
    name: string
    email: string
    img?: string
    password: string
    "confirmed-password": string
};

const Register = () => {
    const { register, handleSubmit ,formState: { errors }, } = useForm<registration>()
    const [selectedImage, setSelectedImage] = useState(selectImage);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();


    const onSubmit: SubmitHandler<registration> = async (data) => {
        try {
            const apiResponse = await fetch(`${process.env.REACT_APP_BASE_URL}/users`,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...data,img:selectImage})

            });
            const response = await apiResponse.json();
            if(response?.success){
                navigate("/");
            }
            console.log("response", response);
        } catch (error) {
            console.error("Fetch error:", error);
        }
        console.log("registrationInfo",data)
    }

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

    const deleteImage =()=>{
        fileInputRef!.current!.value = "";
        setSelectedImage(selectImage);
    }

    return (
        <section className='h-screen overflow-auto lg:overflow-hidden bg-soft-gray'>
            <article className='w-9/12 mx-auto my-10 shadow-2xl bg-white flex lg:flex-row flex-col justify-between p-10'>
                <div className='lg:w-5/12 xl:w-6/12 bg-teal-green rounded-br-full '>
                    <img src={reg} alt="" className='h-full' />
                </div>
                <div className='lg:w-6/12 xl:w-5/12 p-5 h-96 lg:h-[35rem] overflow-auto bg-slate shadow-md m-5 rounded-md'>
                    <p className='font-bold my-2 text-white text-center'>SIGN UP HERE</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                        <div className='relative'>
                            <input type='text' className='w-full rounded-md outline-none py-1 px-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                            <CiUser className=' absolute bottom-2 right-2 text-lg text-teal-green-dark' />
                            {errors.name && <p className='text-xs text-red'>name is required.</p>}
                        </div>
                        

                        <div className='relative'>
                            <input type='email' className='w-full rounded-md outline-none py-1 px-2' placeholder='email' {...register("email", { required: true })} />
                            <MdOutlineAlternateEmail className=' absolute bottom-2 right-2 text-lg text-teal-green-dark' />
                            {errors.email && <p className='text-xs text-red'>email is required.</p>}
                        </div>
                        <div className='relative'>
                            <input type='text' className='w-full rounded-md outline-none py-1 px-2' placeholder='password' {...register("password", { required: true, maxLength: 20 })} />
                            <RiLockPasswordLine className=' absolute bottom-2 right-2 text-lg text-teal-green-dark' />
                            {errors.password && <p className='text-xs text-red'>password is required.</p>}
                        </div>
                        {/* <div className='relative'>
                            <input type='text' className='w-full rounded-md outline-none py-1 px-2' placeholder='confirm password' {...register("confirmed-password", { required: true, maxLength: 20 })} />
                            <RiLockPasswordLine className=' absolute bottom-2 right-2 text-lg text-teal-green-dark' />
                            {errors.password && <p className='text-xs text-red'>password matching is required.</p>}
                        </div> */}
                        <section className="relative mt-10">
                            <div className="image-input h-32 w-32">
                                <label
                                    htmlFor="upload-image"
                                    className="image-input-label w-full h-full mx-auto"
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
                        <p className='text-light-gray text-xs text-center'>Already have a account? <Link to='/login' className='text-green underline cursor-pointer'>login</Link></p>

                        <input className='w-6/12 mx-auto p-2 bg-teal-green rounded-md text-white' type="submit" />
                    </form>
                </div>
            </article>
        </section >
    );
};

export default Register;

