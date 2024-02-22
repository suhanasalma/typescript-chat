import React, { useState } from 'react';
import ChatUsers from '../ChatUsers/ChatUsers';
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
  showChatUserList: boolean;
  showCallList: boolean;
  showStatus: boolean;
  showStartedMessages: boolean;
  showArchivedList: boolean;
  showSettings: boolean;
  showProfile: boolean;
  showStartChat: boolean;
  showNewGroup: boolean;
  showCrateGroup: boolean;
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
  setShowCrateGroup: React.Dispatch<React.SetStateAction<boolean>>;
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
  setShowCrateGroup,
  setShowNewGroup,
  setStartChat,
  setShowNewCall,
  openChatList,
  openCreateNewAnnouncement,
  openNewAnnouncement,
  openCreateNewGroup,
  openNewGroup,
  openNewCall,
  showCrateGroup,
  showNewGroup,
  showNewAnnouncement,
  showCrateAnnouncement,
  showChatUserList,
  showCallList,
  showStatus,
  showStartedMessages,
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
      {showChatUserList && <ChatUsers setChatLists={setChatLists} chatLists={chatLists} openStartChat={openStartChat} />}
      {showCallList && <CallListsContainer openNewCall={openNewCall} />}
      {showStatus && <Status />}
      {showStartedMessages && <StarredMessages />}
      {showArchivedList && <ArchivedList />}
      {showSettings && <Settings setActiveMenuIndex={setActiveMenuIndex} activeMenuIndex={activeMenuIndex} openProfileNow={false} openGenral={true} />}
      {showProfile && <Settings setActiveMenuIndex={setActiveMenuIndex} activeMenuIndex={activeMenuIndex} openGenral={false} openProfileNow={true} />}
      {showStartChat && <StartChat openChatList={openChatList} setChatLists={setChatLists} chatLists={chatLists} openStartChat={openStartChat} openNewGroup={openNewGroup} openNewAnnouncement={openNewAnnouncement} />}
      {showNewGroup && <NewGroup openCreateNewGroup={openCreateNewGroup} setStartChat={setStartChat} setShowNewGroup={setShowNewGroup} />}
      {showCrateGroup && <CreateNewGroup setChatLists={setChatLists} chatLists={chatLists}  openChatList={openChatList} setShowCrateGroup={setShowCrateGroup} setShowNewGroup={setShowNewGroup} />}
      {showNewAnnouncement && <NewAnnouncement setShowNewAnnouncement={setShowNewAnnouncement} setStartChat={setStartChat} openCreateNewAnnouncement={openCreateNewAnnouncement} />}
      {showCrateAnnouncement && <CreateAnnouncement setChatLists={setChatLists} chatLists={chatLists}  openChatList={openChatList} setShowCrateAnnouncement={setShowCrateAnnouncement} setShowNewAnnouncement={setShowNewAnnouncement} />}
      {showNewCall && <NewCall openNewCall={openNewCall} setStartChat={setStartChat} setShowNewGroup={setShowNewGroup} />}

    </div>
  );
};

export default ToggleSideBarPages;