import React from 'react';
import LeftPage from '../LeftPage/LeftPage';
import RightPage from '../RightPage/RightPage';
// import LeftPage from '../LeftPage/LeftPage';

const Home: React.FC  = () => {
    return (
        <div className='flex justify-between '>
            <LeftPage/>
            <RightPage/>
            
        </div>
    );
};

export default Home;