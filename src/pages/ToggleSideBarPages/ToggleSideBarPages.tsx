import React from 'react';
import ChatUsers from '../ChatUsers/ChatUsers';
import CallListsContainer from '../CallListsContainer/CallListsContainer';
import Status from '../Status/Status';
import StarredMessages from '../StarredMessages/StarredMessages';
import ArchivedList from '../ArchivedList/ArchivedList';
import Settings from '../Settings/Settings';
import Profile from '../Profile/Profile';


interface showPages {
    showChatUserList: boolean;
    showCallList: boolean;
    showStatus: boolean;
    showStartedMessages: boolean;
    showArchivedList: boolean;
    showSettings: boolean;
    showProfile: boolean;
}

const ToggleSideBarPages = ({ showChatUserList, showCallList, showStatus, showStartedMessages, showArchivedList, showSettings, showProfile }: showPages) => {
    return (
        <div className="min-w-96 border-r-2 border-soft-gray pt-12 pl-20 pr-2 h-full">
            {showChatUserList && <ChatUsers />}
            {showCallList && <CallListsContainer />}
            {showStatus && <Status />}
            {showStartedMessages && <StarredMessages />}
            {showArchivedList && <ArchivedList />}
            {showSettings && <Settings />}
            {showProfile && <Profile />}
        </div>
    );
};

export default ToggleSideBarPages;