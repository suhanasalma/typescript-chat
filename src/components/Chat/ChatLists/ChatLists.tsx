import React, { useState } from 'react';
import ChatList from './ChatList';
import { ChatIndexList } from '../../../Interfaces/Interfaces';
import './chatlist.css'

const ChatLists: React.FC<{ chatLists: ChatIndexList[] }> = ({ chatLists }) => {

    // console.log("chatLists",chatLists);
    return (
        <div className='space-y-2 mt-5'>
            {
                chatLists?.map((list, i) => <ChatList key={list._id} list={list} />)
            }
        </div>
    );
};

export default ChatLists;