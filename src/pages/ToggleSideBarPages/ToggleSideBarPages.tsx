import React, { useState } from 'react';
import ChatListsContainer from '../ChatListsContainer/ChatListsContainer';
import CallListsContainer from '../CallListsContainer/CallListsContainer';
import Status from '../Status/Status';
import StarredMessages from '../StarredMessages/StarredMessages';
import ArchivedList from '../ArchivedList/ArchivedList';
import Settings from '../Settings/Settings';
import StartChat from '../StartChat/StartChat';
import NewGroup from '../NewGroup/NewGroup';
import CreateNewGroup from '../NewGroup/CreateNewGroup';
import NewAnnouncement from '../NewAnnouncement/NewAnnouncement';
import CreateAnnouncement from '../NewAnnouncement/CreateAnnouncement';
import NewCall from '../NewCall/NewCall';
import { ChatIndexList } from '../../Interfaces/Interfaces';


interface showPages {
  showChatLists: boolean;
  showCallList: boolean;
  showStatus: boolean;
  showStarredMessages: boolean;
  showArchivedList: boolean;
  showSettings: boolean;
  showProfile: boolean;
  showStartChat: boolean;
  showNewGroup: boolean;
  showCreateGroup: boolean;
  showNewAnnouncement: boolean;
  showCrateAnnouncement: boolean;
  showNewCall: boolean;
  openNewGroup: () => void;
  openNewCall: () => void;
  openCreateNewGroup: () => void;
  openNewAnnouncement: () => void;
  openCreateNewAnnouncement: () => void;
  openChatList: () => void;
  openStartChat: () => void;
  setShowNewGroup: React.Dispatch<React.SetStateAction<boolean>>;
  setStartChat: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCreateGroup: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCrateAnnouncement: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNewAnnouncement: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNewCall: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMenuIndex:React.Dispatch<React.SetStateAction<string>>,
  activeMenuIndex:string
}

const ToggleSideBarPages = ({
  openStartChat,
  setShowNewAnnouncement,
  setShowCrateAnnouncement,
  setShowCreateGroup,
  setShowNewGroup,
  setStartChat,
  setShowNewCall,
  openChatList,
  openCreateNewAnnouncement,
  openNewAnnouncement,
  openCreateNewGroup,
  openNewGroup,
  openNewCall,
  showCreateGroup,
  showNewGroup,
  showNewAnnouncement,
  showCrateAnnouncement,
  showChatLists,
  showCallList,
  showStatus,
  showStarredMessages,
  showArchivedList,
  showSettings,
  showProfile,
  showStartChat,
  showNewCall,
  setActiveMenuIndex,
  activeMenuIndex
}: showPages) => {
    const [chatLists, setChatLists] = useState<ChatIndexList[]>([]);
  return (
    <div className="">
      {showChatLists && <ChatListsContainer setChatLists={setChatLists} chatLists={chatLists} openStartChat={openStartChat} />}
      {showCallList && <CallListsContainer openNewCall={openNewCall} />}
      {showStatus && <Status />}
      {showStarredMessages && <StarredMessages />}
      {showArchivedList && <ArchivedList />}
      {showSettings && <Settings setActiveMenuIndex={setActiveMenuIndex} activeMenuIndex={activeMenuIndex} openProfileNow={false} openGenral={true} />}
      {showProfile && <Settings setActiveMenuIndex={setActiveMenuIndex} activeMenuIndex={activeMenuIndex} openGenral={false} openProfileNow={true} />}
      {showStartChat && <StartChat openChatList={openChatList} setChatLists={setChatLists} chatLists={chatLists} openStartChat={openStartChat} openNewGroup={openNewGroup} openNewAnnouncement={openNewAnnouncement} />}
      {showNewGroup && <NewGroup openCreateNewGroup={openCreateNewGroup} setStartChat={setStartChat} setShowNewGroup={setShowNewGroup} />}
      {showCreateGroup && <CreateNewGroup setChatLists={setChatLists} chatLists={chatLists}  openChatList={openChatList} setShowCreateGroup={setShowCreateGroup} setShowNewGroup={setShowNewGroup} />}
      {showNewAnnouncement && <NewAnnouncement setShowNewAnnouncement={setShowNewAnnouncement} setStartChat={setStartChat} openCreateNewAnnouncement={openCreateNewAnnouncement} />}
      {showCrateAnnouncement && <CreateAnnouncement setChatLists={setChatLists} chatLists={chatLists}  openChatList={openChatList} setShowCrateAnnouncement={setShowCrateAnnouncement} setShowNewAnnouncement={setShowNewAnnouncement} />}
      {showNewCall && <NewCall openNewCall={openNewCall} setStartChat={setStartChat} setShowNewGroup={setShowNewGroup} />}

    </div>
  );
};

export default ToggleSideBarPages;