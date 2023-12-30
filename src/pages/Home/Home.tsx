import React from 'react';
import ChatUsers from '../ChatUsers/ChatUsers';
import ChatBoxContainer from '../ChatBoxContainer/ChatBoxContainer';

const Home: React.FC  = () => {
    return (
        <div className='flex justify-between text-gray-600'>
            <ChatUsers/>
           <ChatBoxContainer/>
        </div>
    );
};

export default Home;