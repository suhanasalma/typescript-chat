import React from 'react';
import { Outlet } from "react-router-dom";
import SideNavbar from '../pages/SharedPage/SideNavbar';
import ChatUsers from '../pages/ChatUsers/ChatUsers';

const Main: React.FC  = () => {
    return (
        <div className='flex'>
            <SideNavbar/>
            <ChatUsers/>
            <div className='flex-1 '>
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;