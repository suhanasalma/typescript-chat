import React from 'react';
import { SettingMenu } from '../../../Interfaces/Interfaces';

interface Settings {
    settingsMenu:SettingMenu[];
    
}

const SettingMenus = ({ settingsMenu }:Settings) => {
    return (
        <div className=' bg-light-gray space-y-5 h-[30rem] overflow-auto p-2'>
            {
                settingsMenu?.map(menu =>
                    <div onClick={()=>menu.func()} key={menu.id} className='flex items-center gap-2 cursor-pointer hover:bg-soft-gray p-1 rounded-md'>
                        <menu.icon />
                        <p>{menu.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default SettingMenus;