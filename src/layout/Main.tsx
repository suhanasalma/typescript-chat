import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import SideNavbar from '../pages/SharedPage/SideNavbar';
import ToggleSideBarPages from '../pages/ToggleSideBarPages/ToggleSideBarPages';

const Main: React.FC = () => {
    const [showChatUserList, setShowChatUserList] = useState<boolean>(true)
    const [showCallList, setShowCallList] = useState<boolean>(false)
    const [showStatus, setShowStatus] = useState<boolean>(false)
    const [showStartedMessages, setShowStartedMessages] = useState<boolean>(false)
    const [showArchivedList, setShowArchivedList] = useState<boolean>(false)
    const [showSettings, setShowSettings] = useState<boolean>(false)
    const [showProfile, setShowProfile] = useState<boolean>(false)

    const openChatList = () => {
        setShowChatUserList(true);
        setShowCallList(false);
        setShowStatus(false);
        setShowStartedMessages(false);
        setShowArchivedList(false);
        setShowSettings(false);
        setShowProfile(false);
    }
    const openCallList = () => {
        setShowChatUserList(false);
        setShowCallList(true);
        setShowStatus(false);
        setShowStartedMessages(false);
        setShowArchivedList(false);
        setShowSettings(false);
        setShowProfile(false);
    }
    const openStatus = () => {
        setShowChatUserList(false);
        setShowCallList(false);
        setShowStatus(true);
        setShowStartedMessages(false);
        setShowArchivedList(false);
        setShowSettings(false);
        setShowProfile(false);
    }
    const openStaredMessages = () => {
        setShowStartedMessages(true);
        setShowChatUserList(false);
        setShowCallList(false);
        setShowStatus(false);
        setShowArchivedList(false);
        setShowSettings(false);
        setShowProfile(false);
    }
    const openArchivedList = () => {
        setShowArchivedList(true);
        setShowChatUserList(false);
        setShowCallList(false);
        setShowStatus(false);
        setShowStartedMessages(false);
        setShowSettings(false);
        setShowProfile(false);
    }
    const openSettings = () => {
        setShowSettings(true);
        setShowChatUserList(false);
        setShowCallList(false);
        setShowStatus(false);
        setShowStartedMessages(false);
        setShowArchivedList(false);
        setShowProfile(false);
    }
    const openProfile = () => {
        setShowProfile(true);
        setShowChatUserList(false);
        setShowCallList(false);
        setShowStatus(false);
        setShowStartedMessages(false);
        setShowArchivedList(false);
        setShowSettings(false);
    }
    return (
        <div className='flex'>
            <SideNavbar openChatList={openChatList} openCallList={openCallList} openStatus={openStatus} openStaredMessages={openStaredMessages} openArchivedList={openArchivedList} openSettings={openSettings} openProfile={openProfile} showChatUserList={showChatUserList} showCallList={showCallList} showStatus={showStatus} showStartedMessages={showStartedMessages} showArchivedList={showArchivedList} showSettings={showSettings} showProfile={showProfile}/>


            <ToggleSideBarPages showChatUserList={showChatUserList} showCallList={showCallList} showStatus={showStatus} showStartedMessages={showStartedMessages} showArchivedList={showArchivedList} showSettings={showSettings} showProfile={showProfile} />
            <div className='flex-1 '>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;