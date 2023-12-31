import React from 'react';

const Status = () => {
    return (
        <div className="w-full h-[92vh]">
            <p className="text-black font-bold text-xl mb-5">Status</p>
            <div className='flex items-center gap-5 text-slate' >
                <img className="w-12 h-12 rounded-full object-cover" src="https://img.freepik.com/free-vector/hand-drawn-side-showProfile-cartoon-illustration_23-2150503834.jpg" alt="" />
                <div>
                    <p className='font-bold text-soft-black'>My status</p>
                    <p>No updates</p>
                </div>
            </div>

            <p className='text-center my-5 text-slate'>No contact updates</p>

        </div>
    );
};

export default Status;