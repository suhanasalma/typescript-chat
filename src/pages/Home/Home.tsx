import React from 'react';
import { FaWhatsapp } from "react-icons/fa";


const Home: React.FC  = () => {
    return (
        <div className='flex justify-between text-gray-600'>
            <div className='h-[70vh] flex-1 pt-12 flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                <FaWhatsapp className='text-7xl text-soft-gray'/>
                <p className='text-lg font-bold'>Communicator for Windows</p>
                </div>
            </div>        
        </div>
    );
};

export default Home;