import React from 'react';
import { MessageInterface } from '../../../../Interfaces/Interfaces';

interface MediaProps {
    messages: MessageInterface[]
}

const Media = ({ messages }: MediaProps) => {

    // console.log("messages", messages);
    return (
        <div>
            <p className='font-bold'>Media</p>

        </div>
    );
};

export default Media;