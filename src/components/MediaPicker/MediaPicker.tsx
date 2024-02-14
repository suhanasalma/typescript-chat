import React from 'react';
import { CiImageOn, CiFileOn  } from "react-icons/ci";

const MediaPicker = () => {
    return (
        <div className='bg-soft-gray p-4 space-y-3 rounded-lg' style={{boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>
            <div className='flex items-center gap-2 cursor-pointer text-md'>
                <CiImageOn/>
                <p>Photos & videos</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer text-md'>
                <CiFileOn/>
                <p>Document</p>
            </div>
            
        </div>
    );
};

export default MediaPicker;