import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { MdMessage } from "react-icons/md";
import ToggleSideBarPages from "../pages/ToggleSideBarPages/ToggleSideBarPages";
import { resetUser } from "../StateManagement/slices/membersSlice";
import SideNavbar from "../pages/SharedPage/SideNavbar";
import { PiChatCircleTextLight, PiNumberCircleZeroThin } from 'react-icons/pi';
import { BsArchive, BsStar, BsTelephone } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';

const Main: React.FC = () => {
  const [showChatLists, setShowChatLists] = useState<boolean>(true)
  const [showCallList, setShowCallList] = useState<boolean>(false)
  const [showStatus, setShowStatus] = useState<boolean>(false)
  const [showStarredMessages, setShowStarredMessages] = useState<boolean>(false)
  const [showArchivedList, setShowArchivedList] = useState<boolean>(false)
  const [showSettings, setShowSettings] = useState<boolean>(false)
  const [showProfile, setShowProfile] = useState<boolean>(false)
  const [showStartChat, setStartChat] = useState<boolean>(false)
  const [showNewGroup, setShowNewGroup] = useState<boolean>(false)
  const [showCreateGroup, setShowCreateGroup] = useState<boolean>(false);
  const [showNewAnnouncement, setShowNewAnnouncement] = useState<boolean>(false)
  const [showCrateAnnouncement, setShowCrateAnnouncement] = useState<boolean>(false);
  const [showNewCall, setShowNewCall] = useState<boolean>(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState<string>("1");
  const [iscurrentState, setIscurrentState] = useState("ChatLists");
  const dispatch = useDispatch();


  useEffect(() => {
    if (iscurrentState !== "ChatLists" && iscurrentState !== "Settings" && iscurrentState !== "Profile" && iscurrentState !== "StartChat" && iscurrentState !== "NewGroup" && iscurrentState !== "CreateNewGroup" && iscurrentState !== "NewAnnouncement" && iscurrentState !== "CrateAnnouncement") {
      setShowChatLists(false);
    }
    if (iscurrentState !== "CallLists" && iscurrentState !== "Settings" && iscurrentState !== "Profile" && iscurrentState !== "StartChat" && iscurrentState !== "NewCall") {
      setShowCallList(false);
    }
    if (iscurrentState !== "Status" && iscurrentState !== "Settings" && iscurrentState !== "Profile" && iscurrentState !== "StartChat") {
      setShowStatus(false);
    }
    if (iscurrentState !== "StarredMessages" && iscurrentState !== "Settings" && iscurrentState !== "Profile" && iscurrentState !== "StartChat") {
      setShowStarredMessages(false);
    }
    if (iscurrentState !== "ArchivedList" && iscurrentState !== "Settings" && iscurrentState !== "Profile" && iscurrentState !== "StartChat") {
      setShowArchivedList(false);
    }
    if (iscurrentState !== "Settings") {
      setShowSettings(false);
    }
    if (iscurrentState !== "Profile") {
      setShowProfile(false);
    }
    if (iscurrentState !== "StartChat") {
      setStartChat(false);
    }
    if (iscurrentState !== "NewGroup") {
      setShowNewGroup(false);
    }
    if (iscurrentState !== "CreateNewGroup") {
      setShowCreateGroup(false);
    }
    if (iscurrentState !== "NewAnnouncement") {
      setShowNewAnnouncement(false);
    }
    if (iscurrentState !== "CrateAnnouncement") {
      setShowCrateAnnouncement(false);
    }
    if (iscurrentState !== "NewCall") {
      setShowNewCall(false);
    }
    
  }, [iscurrentState]);

  const closeMenuOnClickOutside = () => {
    setShowSettings(false)
    setShowProfile(false)
  };


  const openChatList = () => {
    setIscurrentState("ChatLists");
    setShowChatLists(true);
    dispatch(resetUser());
  };

  const openCallList = () => {
    setIscurrentState("CallLists");
    setShowCallList(true);
    dispatch(resetUser());
  };

  const openStatus = () => {
    setShowStatus(true);
    setIscurrentState("Status");
    dispatch(resetUser());
  };
  const openStaredMessages = () => {
    setShowStarredMessages(true);
    setIscurrentState("StarredMessages");
    dispatch(resetUser());

  };
  const openArchivedList = () => {
    setShowArchivedList(true);
    setIscurrentState("ArchivedList");
    dispatch(resetUser());

  };
  const openSettings = () => {
    setShowSettings(true);
    setIscurrentState("Settings");
    dispatch(resetUser());
    setActiveMenuIndex("1")
  };
  const openProfile = () => {
    setShowProfile(true);
    setIscurrentState("Profile");
    dispatch(resetUser());
    setActiveMenuIndex("9")
  };
  const openStartChat = () => {
    setStartChat(!showStartChat);
    setIscurrentState("StartChat");
    dispatch(resetUser());

  };
  const openNewGroup = () => {
    setShowNewGroup(true);
    setIscurrentState("NewGroup");
    dispatch(resetUser());
  };
  const openCreateNewGroup = () => {
    setShowCreateGroup(true);
    setIscurrentState("CreateNewGroup");
  };
  const openNewAnnouncement = () => {
    setShowNewAnnouncement(true);
    setIscurrentState("NewAnnouncement");
    dispatch(resetUser());
  };
  const openCreateNewAnnouncement = () => {
    setShowCrateAnnouncement(true);
    setIscurrentState("CreateNewAnnouncement");
  };
  const openNewCall = () => {
    setShowNewCall(!showNewCall);
    setIscurrentState("NewCall");

  };

  const SideNavbarMenuItems = [
    {
        id:"1",
        icon:PiChatCircleTextLight,
        click:openChatList,
        active:showChatLists
    },
    {
        id:"2",
        icon:BsTelephone,
        click:openCallList,
        active:showCallList
    },
    {
        id:"3",
        icon:PiNumberCircleZeroThin,
        click:openStatus,
        active:showStatus
    },
  ];
  const SideNavbarSecondMenuItems = [
    {
        id:"4",
        icon:BsStar,
        click:openStaredMessages,
        active:showStarredMessages
    },
    {
        id:"5",
        icon:BsArchive,
        click:openArchivedList,
        active:showArchivedList
    },
    {
        id:"6",
        icon:IoSettingsOutline,
        click:openSettings,
        active:showSettings
    },
   
  ];

  return (
    <div className="h-screen overflow-hidden">
      <div className="bg-soft-gray flex items-center h-10 gap-2 py-2 px-2">
        <FaWhatsapp />
        <p>Communicator</p>
      </div>

      <div className="flex ">
        <SideNavbar 
            SideNavbarMenuItems = {SideNavbarMenuItems} 
            SideNavbarSecondMenuItems={SideNavbarSecondMenuItems}
            openProfile={openProfile}
            showProfile={showProfile}
        />
        <div className="h-screen flex flex-1">
          <ToggleSideBarPages
            setActiveMenuIndex={setActiveMenuIndex}
            activeMenuIndex={activeMenuIndex}
            openNewCall={openNewCall}
            openStartChat={openStartChat}
            setShowNewAnnouncement={setShowNewAnnouncement}
            setShowCrateAnnouncement={setShowCrateAnnouncement}
            setShowCreateGroup={setShowCreateGroup}
            setStartChat={setStartChat}
            openNewAnnouncement={openNewAnnouncement}
            openCreateNewAnnouncement={openCreateNewAnnouncement}
            showNewAnnouncement={showNewAnnouncement}
            showCrateAnnouncement={showCrateAnnouncement}
            openChatList={openChatList}
            openCreateNewGroup={openCreateNewGroup}
            showCreateGroup={showCreateGroup}
            showNewGroup={showNewGroup}
            openNewGroup={openNewGroup}
            setShowNewGroup={setShowNewGroup}
            showChatLists={showChatLists}
            showCallList={showCallList}
            showStatus={showStatus}
            showStarredMessages={showStarredMessages}
            showArchivedList={showArchivedList}
            showSettings={showSettings}
            showProfile={showProfile}
            showStartChat={showStartChat}
            showNewCall={showNewCall}
            setShowNewCall={setShowNewCall}
          />

          <div
            onClick={closeMenuOnClickOutside}
            className="flex-1 w-full  h-full flex flex-col"
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
