import React from 'react';
import { MessageInterface } from '../../../../Interfaces/Interfaces';

interface FilesProps {
    messages: MessageInterface[]
}

const Files = ({ messages }: FilesProps) => {
    let files = messages.map(message => message.medias.filter(media => media.type === "file")).flat();
    console.log("files", files);
    return (
        <div>
            <p className='font-bold'>Files</p>
            <div>
                {
                    files.map(file => <div></div>)
                }
            </div>

        </div>
    );
};

export default Files;