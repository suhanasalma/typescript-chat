import React from 'react';
import { Outlet } from "react-router-dom";
import SideNavbar from '../pages/SharedPage/SideNavbar';

const Main: React.FC  = () => {
    return (
        <div className='flex'>
            <SideNavbar/>
            <div className='flex-1 bg-red-200 p-20'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;