
import React, { useState } from 'react';
import { BsLaptop } from "react-icons/bs";
import { IoKeyOutline } from "react-icons/io5";
import { PiChatsCircleLight } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import { LiaPaintBrushSolid } from "react-icons/lia";
import { MdOutlineStorage, MdOutlineKeyboardAlt } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import SettingMenus from '../../components/Settings/SettingMenus/SettingMenus';
import { SettingMenu } from '../../Interfaces/Interfaces';
import General from '../../components/Settings/General/General';
import Chats from '../../components/Settings/Chats/Chats';
import Notifications from '../../components/Settings/Notifications/Notifications';
import Personalizations from '../../components/Settings/Personalizations/Personalizations';
import Storage from '../../components/Settings/Storage/Storage';
import Shortcuts from '../../components/Settings/Shortcuts/Shortcuts';
import Help from '../../components/Settings/Help/Help';
import Account from '../../components/Settings/Account/Account';
import Profile from '../../components/Settings/Profile/Profile';
const Settings:React.FC<{openProfileNow:boolean,openGenral:boolean}> = ({openProfileNow,openGenral}) => {
    const [showGeneral, setShowGeneral] = useState<boolean>(openGenral)
    const [showAccount, setShowAccount] = useState<boolean>(false)
    const [showChats, setShowChats] = useState<boolean>(false)
    const [showNotifications, setShowNotifications] = useState<boolean>(false)
    const [showPersonalizations, setShowPersonalizations] = useState<boolean>(false)
    const [showStorage, setShowStorage] = useState<boolean>(false)
    const [showShortcuts, setShowShortcuts] = useState<boolean>(false)
    const [showHelp, setShowHelp] = useState<boolean>(false)
    const [showProfile, setShowProfile] = useState<boolean>(openProfileNow)
   

    const openGeneral = () =>{
        setShowGeneral(true)
        setShowAccount(false)
        setShowChats(false)
        setShowNotifications(false)
        setShowPersonalizations(false)
        setShowStorage(false)
        setShowShortcuts(false)
        setShowHelp(false)
        setShowProfile(false)
    }
    const openAccount = () =>{
        setShowGeneral(false)
        setShowAccount(true)
        setShowChats(false)
        setShowNotifications(false)
        setShowPersonalizations(false)
        setShowStorage(false)
        setShowShortcuts(false)
        setShowHelp(false)
        setShowProfile(false)
    }
    const openChats = () =>{
        setShowGeneral(false)
        setShowAccount(false)
        setShowChats(true)
        setShowNotifications(false)
        setShowPersonalizations(false)
        setShowStorage(false)
        setShowShortcuts(false)
        setShowHelp(false)
        setShowProfile(false)
    }
    const openNotifications = () =>{
        setShowGeneral(false)
        setShowAccount(false)
        setShowChats(false)
        setShowNotifications(true)
        setShowPersonalizations(false)
        setShowStorage(false)
        setShowShortcuts(false)
        setShowHelp(false)
        setShowProfile(false)
    }
    const openPersonalizations = () =>{
        setShowGeneral(false)
        setShowAccount(false)
        setShowChats(false)
        setShowNotifications(false)
        setShowPersonalizations(true)
        setShowStorage(false)
        setShowShortcuts(false)
        setShowHelp(false)
        setShowProfile(false)
    }
    const openStorage = () =>{
        setShowGeneral(false)
        setShowAccount(false)
        setShowChats(false)
        setShowNotifications(false)
        setShowPersonalizations(false)
        setShowStorage(true)
        setShowShortcuts(false)
        setShowHelp(false)
        setShowProfile(false)
    }
    const openShortcuts = () =>{
        setShowGeneral(false)
        setShowAccount(false)
        setShowChats(false)
        setShowNotifications(false)
        setShowPersonalizations(false)
        setShowStorage(false)
        setShowShortcuts(true)
        setShowHelp(false)
        setShowProfile(false)
    }
    const openHelp = () =>{
        setShowGeneral(false)
        setShowAccount(false)
        setShowChats(false)
        setShowNotifications(false)
        setShowPersonalizations(false)
        setShowStorage(false)
        setShowShortcuts(false)
        setShowHelp(true)
        setShowProfile(false)
    }
    const openProfile = () =>{
        setShowGeneral(false)
        setShowAccount(false)
        setShowChats(false)
        setShowNotifications(false)
        setShowPersonalizations(false)
        setShowStorage(false)
        setShowShortcuts(false)
        setShowHelp(false)
        setShowProfile(true)
    }

    console.log("showGeneral",showGeneral);


    const [settingsMenu, setSettingsMenu] = useState<SettingMenu[]>([
        {
            _id: "1",
            icon: BsLaptop,
            name: "General",
            func:openGeneral,
            show:showGeneral
        },
        {
            _id: "2",
            icon: IoKeyOutline,
            name: "Account",
            func:openAccount,
            show:showAccount
        },
        {
            _id: "3",
            icon: PiChatsCircleLight,
            name: "Chats",
            func:openChats,
            show:showChats
        },
        {
            _id: "4",
            icon: GoBell,
            name: "Notifications",
            func:openNotifications,
            show:showNotifications
        },
        {
            _id: "5",
            icon: LiaPaintBrushSolid,
            name: "Personalizations",
            func:openPersonalizations,
            show:showPersonalizations
        },
        {
            _id: "6",
            icon: MdOutlineStorage,
            name: "Storage",
            func:openStorage,
            show:showStorage
        },
        {
            _id: "7",
            icon: MdOutlineKeyboardAlt,
            name: "Shortcuts",
            func:openShortcuts,
            show:showShortcuts
        },
        {
            _id: "8",
            icon: FiHelpCircle,
            name: "Help",
            func:openHelp,
            show:showHelp
        },
        {
            _id: "9",
            icon: CiUser,
            name: "Profile",
            func:openProfile,
            show:showProfile
        },

    ])

    
    return (
        <div className="h-[60vh] flex flex-1 fixed right-0 bottom-5 left-5 w-[520px] bg-white shadow-2xl rounded-md overflow-hidden z-50 mx-2">
            <div className="h-[60vh] flex flex-col left-side w-44 border-r-2 border-r-soft-gray bg-light-gray text-sm">

                <div className=" relative overflow-auto pb-10 ">
                    <SettingMenus settingsMenu={settingsMenu} />
                </div>
            </div>

            <div className="flex-1 w-full  h-full flex flex-col relative overflow-auto ">
                {
                    showGeneral && <General />

                }
                {
                    showAccount && <Account />

                }
                {
                    showChats && <Chats />
                }
                {
                    showNotifications && <Notifications />
                }
                {
                    showPersonalizations && <Personalizations />
                }
                {
                    showStorage && <Storage />

                }
                {
                    showShortcuts && <Shortcuts />

                }
                {
                    showHelp && <Help />

                }
                {
                    showProfile && <Profile />

                }
            </div>
        </div>
    );
};

export default Settings;