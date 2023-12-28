import React from 'react';
import { FiEdit } from "react-icons/fi";
import { RiMenu5Fill } from "react-icons/ri";

const LeftPage: React.FC = () => {
    return (
        <div className='flex justify-between w-3/12'>
            <p>Chats</p>
            <div className='flex justify-between items-center gap-10'>
                <FiEdit />
                <RiMenu5Fill />
            </div>
        </div>
    );
};

export default LeftPage;