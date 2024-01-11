import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from "react-router-dom";
import SideNavbar from '../pages/SharedPage/SideNavbar';
import ToggleSideBarPages from '../pages/ToggleSideBarPages/ToggleSideBarPages';
import { MdMessage } from "react-icons/md";

const Main: React.FC = () => {
    const [showChatUserList, setShowChatUserList] = useState<boolean>(true)
    const [showCallList, setShowCallList] = useState<boolean>(false)
    const [showStatus, setShowStatus] = useState<boolean>(false)
    const [showStartedMessages, setShowStartedMessages] = useState<boolean>(false)
    const [showArchivedList, setShowArchivedList] = useState<boolean>(false)
    const [showSettings, setShowSettings] = useState<boolean>(false)
    const [showProfile, setShowProfile] = useState<boolean>(false)
    const [showStartChat, setStartChat] = useState<boolean>(false)
        
    useEffect(() => {
        if (showSettings) {
          // Prevent scrolling of the page when the modal is open
          document.body.style.overflow = "hidden";
        } else {
          // Restore scrolling of the page when the modal is closed
          document.body.style.overflow = "auto";
        }
    
        // Cleanup the effect
       
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [showSettings]);

    //   useEffect(() => {
    //     fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error('Fetch error:', error));
    //   }, []);

      const closeMenuOnClickOutside = () => {
        setShowSettings(false)
        setShowProfile(false)
    };
    

    const openChatList = () => {
        setShowChatUserList(true);
        setShowCallList(false);
        setShowStatus(false);
        setShowStartedMessages(false);
        setShowArchivedList(false);
        setShowSettings(false);
        setShowProfile(false);
        setStartChat(false);
    }
    const openCallList = () => {
        setShowChatUserList(false);
        setShowCallList(true);
        setShowStatus(false);
        setShowStartedMessages(false);
        setShowArchivedList(false);
        setShowSettings(false);
        setShowProfile(false);
        setStartChat(false);
    }
    const openStatus = () => {
        setShowChatUserList(false);
        setShowCallList(false);
        setShowStatus(true);
        setShowStartedMessages(false);
        setShowArchivedList(false);
        setShowSettings(false);
        setShowProfile(false);
        setStartChat(false);
    }
    const openStaredMessages = () => {
        setShowStartedMessages(true);
        setShowChatUserList(false);
        setShowCallList(false);
        setShowStatus(false);
        setShowArchivedList(false);
        setShowSettings(false);
        setShowProfile(false);
        setStartChat(false);
    }
    const openArchivedList = () => {
        setShowArchivedList(true);
        setShowChatUserList(false);
        setShowCallList(false);
        setShowStatus(false);
        setShowStartedMessages(false);
        setShowSettings(false);
        setShowProfile(false);
        setStartChat(false);
    }
    const openSettings = () => {
        setShowSettings(true);
        setShowProfile(false);
        setStartChat(false);
    }
    const openProfile = () => {
        setShowProfile(true);
        setShowSettings(false);
        setStartChat(false);
    }
    const openStartChat = () => {
        setShowProfile(false);
        setShowSettings(false);
        setStartChat(!showStartChat)
    }
    return (
        <div className='flex'>
            <SideNavbar openChatList={openChatList} openCallList={openCallList} openStatus={openStatus} openStaredMessages={openStaredMessages} openArchivedList={openArchivedList} openSettings={openSettings} openProfile={openProfile} showChatUserList={showChatUserList} showCallList={showCallList} showStatus={showStatus} showStartedMessages={showStartedMessages} showArchivedList={showArchivedList} showSettings={showSettings} showProfile={showProfile}/>


            <ToggleSideBarPages showChatUserList={showChatUserList} showCallList={showCallList} showStatus={showStatus} showStartedMessages={showStartedMessages} showArchivedList={showArchivedList} showSettings={showSettings} showProfile={showProfile} showStartChat={showStartChat} />
            <div className='flex-1' onClick={closeMenuOnClickOutside}>
                <Outlet />
            </div>
            <div onClick={openStartChat} className={`bg-teal-green fixed bottom-5 left-[370px] p-2 rounded-lg cursor-pointer ${showStartChat && "z-10"}`}>
                <MdMessage />
            </div>
        </div>
    );
};

export default Main;