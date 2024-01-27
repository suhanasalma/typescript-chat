import React from "react";
import userImage from '../../assests/user/not-available-user.png'


interface Users {
    email: string;
    _id: string;
}
interface UserProps {
    list:any
}

const User = ({list}:UserProps) => {
  return (
    <div
    //   onClick={() => openConnectChannelModal(list)}
    //   key={list?._id}
      className={` flex items-center gap-5 cursor-pointer p-2 hover:bg-light-gray rounded-md my-2`}
    >
      <img
        className="w-10 h-10 rounded-full"
        src={list?.img ? list.img : userImage}
        alt=""
      />
      <div className="flex-1  w-full">
        <p className="font-semibold w-full">{list?.name}</p>
        <p className="text-slate text-xs ">{list?.status}</p>
      </div>
    </div>
  );
};

export default User;
