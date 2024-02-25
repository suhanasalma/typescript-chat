import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { userLoggedOut } from '../../../StateManagement/slices/authSlice';
import userImg from '../../../assests/user/not-available-user.png'
import { RootState } from '../../../StateManagement/store/store';

const Profile = () => {
    const auth = useSelector((state: RootState) => state?.auth)
    const dispatch = useDispatch()
    let user = auth.user;
    const handleLogout = () => {
        dispatch(userLoggedOut());
      };
    return (
        <div className='px-5 py-8 space-y-5'>
            <img className="object-cover h-20 w-20 rounded-full " src={user?.img ? user?.img : userImg} alt="user" />

            <div className='flex justify-between items-center gap-5'>
                <p>{user.name}</p>
                <MdOutlineModeEditOutline/>
                {/* <input type="text" name="" id="" /> */}
            </div>
            <div className='flex justify-between items-center gap-5'>
                <p>About</p>
                <MdOutlineModeEditOutline/>
                {/* <input type="text" name="" id="" /> */}
            </div>
            <div className=''>
                <p>Phone number</p>
                <p>+880 151515111</p>
                {/* <input type="text" name="" id="" /> */}
            </div>

            <button onClick={handleLogout} className='text-xs bg-teal-green text-white px-4 py-2 rounded-md font-semibold hover:bg-teal-green-dark hover:text-white duration-500 ease-in-out'>Logout</button>   

        </div>
    );
};

export default Profile;