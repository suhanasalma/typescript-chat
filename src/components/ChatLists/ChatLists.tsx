import React, { useState } from 'react';
import ChatList from './ChatList';
import { ChatIndexList } from '../../Interfaces/Interfaces';
import './chatlist.css'

const ChatLists: React.FC<{ messageLists: ChatIndexList[] }> = ({messageLists}) => {
    return (
        <div className='space-y-5 mt-5 h-[85vh] overflow-auto'>
            {
                messageLists?.map(list => <ChatList list={list} />)
            }
        </div>
    );
};

export default ChatLists;