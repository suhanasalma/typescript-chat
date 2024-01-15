import React from 'react';
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


interface showPages {
    showChatUserList: boolean;
    showCallList: boolean;
    showStatus: boolean;
    showStartedMessages: boolean;
    showArchivedList: boolean;
    showSettings: boolean;
    showProfile: boolean;
    showStartChat:boolean;
    showNewGroup:boolean;
    showCrateGroup:boolean;
    showNewAnnouncement:boolean;
    showCrateAnnouncement:boolean;
    openNewGroup:()=>void;
    openCreateNewGroup:()=>void;
    openNewAnnouncement :()=>void;
    openCreateNewAnnouncement :()=>void;
    openChatList:()=>void;
    setShowNewGroup:React.Dispatch<React.SetStateAction<boolean>>;

}

const ToggleSideBarPages = ({ openChatList, openCreateNewAnnouncement , openNewAnnouncement, openCreateNewGroup, openNewGroup, showCrateGroup, showNewGroup,showNewAnnouncement,showCrateAnnouncement, showChatUserList, showCallList, showStatus, showStartedMessages, showArchivedList, showSettings, showProfile ,showStartChat}: showPages) => {
    return (
        <div className="w-[26rem] border-r-2 border-soft-gray pt-12 pl-20 h-full ">
            {showChatUserList && <ChatUsers />}
            {showCallList && <CallListsContainer />}
            {showStatus && <Status />}
            {showStartedMessages && <StarredMessages />}
            {showArchivedList && <ArchivedList />}
            {showSettings && <Settings openProfileNow={false} openGenral={true} />}
            {showProfile && <Settings openGenral={false} openProfileNow={true} />}
            {showStartChat && <StartChat openNewGroup={openNewGroup}  openNewAnnouncement={openNewAnnouncement}/>}
            {showNewGroup && <NewGroup openCreateNewGroup={openCreateNewGroup} showNewGroup = {showNewGroup}/>}
            {showCrateGroup && <CreateNewGroup openChatList={openChatList}/>}
            {showNewAnnouncement && <NewAnnouncement openCreateNewAnnouncement={openCreateNewAnnouncement}/>}
            {showCrateAnnouncement && <CreateAnnouncement openChatList={openChatList}/>}
           
        </div>
    );
};

export default ToggleSideBarPages;