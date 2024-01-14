import React from 'react';

interface Channel {
    setCreateChannel:React.Dispatch<React.SetStateAction<boolean>>;
    wantToConnect: () => void;
}
const CreateChannel = ({ setCreateChannel, wantToConnect }:Channel) => {
    return (
        <div style={{
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)"
        }} className='bg-teal-green h-24 w-80  z-50 p-5 rounded-md text-white'>
            <p className='text-center text-sm'>Want to create channel?</p>
            <div className='flex items-center justify-center gap-10 mt-3'>
                <button onClick={wantToConnect} className='border-2 w-20 bg-white text-teal-green rounded-md font-semibold'>Yes</button>
                <button onClick={()=>setCreateChannel(false)} className='border-2 w-20 bg-white text-teal-green rounded-md font-semibold'>No</button>
            </div>
        </div>
    );
};

export default CreateChannel;