import React from "react";
import { FaCamera } from "react-icons/fa";

const Status = () => {
  return (
    <div className="px-2 h-screen flex flex-col left-side w-80 border-r-2 border-r-soft-gray">
      <div className="header p-2 ">
        <p className="text-black font-bold text-xl">Status</p>
      </div>
      <div className="flex items-center gap-5 text-slate">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://img.freepik.com/free-vector/hand-drawn-side-showProfile-cartoon-illustration_23-2150503834.jpg"
            alt=""
          />
          <div>
            <p className="font-bold text-soft-black text-md">My status</p>
            <p className="text-sm">No updates</p>
          </div>
        </div>
      <div className="flex-grow p-2 relative overflow-auto pb-12 bg-white ">
        {/* list of status */}
        <p className='text-center my-5 text-slate'>No contact updates</p>
      </div>
      <div
        className={`bg-teal-green fixed bottom-5 left-[320px] p-2 rounded-lg cursor-pointer `}
      >
        <FaCamera />
      </div>
    </div>
  );
};

export default Status;
