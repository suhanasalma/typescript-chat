import React from 'react';

interface MembersProps {
    channel:any
}

const Members = ({channel}:MembersProps) => {
    console.log("overviewDetails",channel);
    return (
        <div>
            <p className='font-bold'>Members ({channel?.participants?.length})</p>
        </div>
    );
};

export default Members;