import React, { useState } from 'react';
import ChatList from './ChatList';
import { ChatIndexList } from '../../../Interfaces/Interfaces';
import './chatlist.css'

const ChatLists: React.FC<{ chatLists: ChatIndexList[] }> = ({ chatLists }) => {
    return (
        <div className='space-y-5 mt-5'>
            {
                chatLists?.map((list, i) => <ChatList key={list._id} list={list} />)
            }
        </div>
    );
};

export default ChatLists;